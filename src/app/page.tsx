//Quando for usar componentes clients procurar jogar o mais para fora possivel da sua aplicação
//page.tsx (server) -> menu.tsx (server) -> link (client)

import { ClientComponent } from '@/components/ClientComponent';
import { PostFeatured } from '@/components/PostFeatured';
import { PostsList } from '@/components/PostsList';
import { ServerComponent } from '@/components/ServerComponent';

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
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
      <Suspense fallback={<SpinLoader className={clsx('min-h-20 mb-16')} />}>
        <PostFeatured />
        <PostsList />
      </Suspense>
    </>
  );
}
