//Quando for usar componentes clients procurar jogar o mais para fora possivel da sua aplicação
//page.tsx (server) -> menu.tsx (server) -> link (client)

import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function Homepage() {
  return (
    <div className='text-slate-900 bg-slate-100 min-h-screen '>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>Aqui é a HEADER</h1>
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className='text-6xl font-bold text-center py-8'>Aqui é o footer</p>
      </footer>
    </div>
  );
}
