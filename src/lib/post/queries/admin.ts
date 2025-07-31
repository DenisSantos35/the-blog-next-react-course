import { cache } from 'react';
import { postRepository } from '@/repositories/post';

export const findPostByIdAdmin = cache(async (id: string) => {
  return await postRepository.findById(id);
});

export const findAllPostAdmin = cache(async () => {
  return await postRepository.findAll();
});
