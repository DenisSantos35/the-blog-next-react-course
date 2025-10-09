'use server';

import { postRepository } from '@/repositories/post';
import { revalidateTag } from 'next/cache';

export async function deletePostAction(id: string) {
  //TODO: checar login do usuário

  if (!id || typeof id !== 'string') {
    return {
      error: 'Dados inválidos',
    };
  }

  let post;
  try{
   post =  await postRepository.delete(id);

  }catch(e: unknown){
    if(e instanceof Error){
      return {
        errors: e.message,
      }
    }
    return {
      errors: 'Error desconhecido',
    }

  }

  revalidateTag('posts');
  revalidateTag(`post-${post.slug}`);

  return {
    error: '',
  };
}
