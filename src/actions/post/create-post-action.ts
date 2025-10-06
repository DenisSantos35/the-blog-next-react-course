'use server'

import { makePartialPublicPost, PublicPost } from "@/dto/post/dto"
import { PostCreateSchema } from "@/lib/post/validations";
import { PostModel } from "@/models/post/post-model";
import { getzodErrorMessages } from "@/utils/get-zod-error-messages";

type CreatPostActionState = {
  formState: PublicPost,
  errors: string[],
}
export async function createPostAction(prevState: CreatPostActionState, formData: FormData): Promise<CreatPostActionState>{
 
  //TODO: verificar se o usuario esta logado
  if(!(formData instanceof FormData)){
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos'],
    }
  }

  const formDataToObj = Object.fromEntries(formData.entries()); 
  const zodParseObj = PostCreateSchema.safeParse(formDataToObj);

  if(!zodParseObj.success){
    const errors = getzodErrorMessages( zodParseObj.error.format());
    return {
      formState: makePartialPublicPost(formDataToObj),
      errors,
    }
  }

  const validPostData = zodParseObj.data;
  const newPost: PostModel = {
    ...validPostData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  id: Date.now().toString(), // gerar um ID temporário
  slug: Math.random().toString(36),
  };

  return {
    formState: newPost,
    errors: [],
  }
}