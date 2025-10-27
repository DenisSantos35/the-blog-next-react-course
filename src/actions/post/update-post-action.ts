'use server'
import { makePartialPublicPost, makePublicPostFromDb, PublicPost } from "@/dto/post/dto"
import { PostUpdateSchema } from "@/lib/post/validations";
import { postRepository } from "@/repositories/post";
import { getzodErrorMessages } from "@/utils/get-zod-error-messages";
import { makeRandonString } from "@/utils/make-random-string";
import { revalidateTag } from "next/cache";


type UpdatePostActionState = {
  formState: PublicPost,
  errors: string[],
  success?: string,
}
export async function updatePostAction(prevState: UpdatePostActionState, formData: FormData): Promise<UpdatePostActionState>{
 
  //TODO: verificar se o usuario esta logado
  if(!(formData instanceof FormData)){
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos'],
    }
  }

  const id = formData.get('id')?.toString() || '';

  if(!id || typeof id !== 'string'){
    return {
      formState: prevState.formState,
      errors: ['ID inválido'],
    }
  }

  const formDataToObj = Object.fromEntries(formData.entries()); 
  const zodParseObj = PostUpdateSchema.safeParse(formDataToObj);

  if(!zodParseObj.success){
    const errors = getzodErrorMessages( zodParseObj.error.format());
    return {
      formState: makePartialPublicPost(formDataToObj),
      errors,
    }
  }

  const validPostData = zodParseObj.data;
  const newPost = {
    ...validPostData,
  };

  let post;
  try{
    post = await postRepository.update(id, newPost);

  }catch(e: unknown){
    if(e instanceof Error){
      return {
        formState: makePartialPublicPost(formDataToObj),
        errors: [e.message],
      }
    }
    return {
      formState: makePartialPublicPost(formDataToObj),
      errors: ['Error desconhecido'],
    }

  }

   revalidateTag('posts');
   revalidateTag(`post-${post.slug}`);

   return {
    formState: makePublicPostFromDb(post),
    errors: [],
    success: makeRandonString(),
   }
}