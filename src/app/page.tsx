//Quando for usar componentes clients procurar jogar o mais para fora possivel da sua aplicação
//page.tsx (server) -> menu.tsx (server) -> link (client)

import { PostFeatured } from '@/components/PostFeatured';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import { Suspense } from 'react';

// export const metadata: Metadata = {
//   title: 'The blog',
//   description: 'Essa seria a descrição dessa página==',
// };

export default async function Homepage() {
  //throw new Error('Erro de teste na página inicial');
  return (
    <>
      <Suspense fallback={<SpinLoader className={clsx('min-h-20 mb-16')} />}>
        <PostFeatured />
        <PostsList />
      </Suspense>
    </>
  );
}
