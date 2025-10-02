'use server'

import { PublicPost } from "@/dto/post/dto"

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

  const formDataToObj = Object.fromEntries(formData.entries()); //['title', 'value']
  console.log(formDataToObj);
  console.log(formData.get('published'))
  return {
    formState: prevState.formState,
    errors: [],
  }
}