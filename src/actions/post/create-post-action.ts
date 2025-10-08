'use server'

import { drizzleDb } from "@/db/drizzle";
import { postTable } from "@/db/drizzle/schemas";
import { makePartialPublicPost, PublicPost } from "@/dto/post/dto"
import { PostCreateSchema } from "@/lib/post/validations";
import { PostModel } from "@/models/post/post-model";
import { getzodErrorMessages } from "@/utils/get-zod-error-messages";
import { makeSlugFromText } from "@/utils/make-slug-from-text";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { v4 as uuidV4 } from 'uuid';

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
    id: uuidV4(), // gerar um ID temporário
    slug: makeSlugFromText(validPostData.title),
  };

   //TODO: mover método para o repositório
   await drizzleDb.insert(postTable).values(newPost);

   revalidateTag('posts');
   redirect(`/admin/post/${newPost.id}`);
}