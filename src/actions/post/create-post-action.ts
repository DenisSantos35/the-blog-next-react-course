'use server'

import { PublicPost } from "@/dto/post/dto"

type CreatPostActionState = {
  formState: PublicPost,
  errors: string[],
}
export async function createPostAction(prevState: CreatPostActionState, formData: FormData): Promise<CreatPostActionState>{
  const title = formData.get('title')?.toString() || '';
  return {
    formState: {...prevState.formState, title},
    errors: [],
  }
}