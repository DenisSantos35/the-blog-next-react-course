//Quando for usar componentes clients procurar jogar o mais para fora possivel da sua aplicação
//page.tsx (server) -> menu.tsx (server) -> link (client)

import { Container } from '@/components/Container';
import Header from '@/components/Header';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import { Suspense } from 'react';

export default async function Homepage() {
  return (
    /*CONTAINER QUE REPRESENTA A TELA
    mx-auto = centraliza a div colocando margin dos 2 lados automatico. */

    <Container>
      <Header />
      {/* o group atribui um grupo para o elemento principal e todos os seus fihos ao chamar group hover recebe os parametros do pai, exemplo quando eu passar o mouse na section qualquer local vou alterar a escala da image, isso por que atribui a section o group. */}
      <section
        className={clsx(
          'grid grid-cols-1 gap-8 mb-16',
          'sm:grid-cols-2',
          'group',
        )}
      >
        <PostCoverImage
          linkProps={{ href: '#' }}
          imageProps={{
            width: 1200,
            height: 720,
            priority: true,
            src: '/images/bryen_0.png',
            alt: 'Título do post',
          }}
        />
        <div className={clsx('flex flex-col gap-4', 'sm:justify-between')}>
          <time
            className={clsx('text-slate-600 block text-sm/tight')}
            dateTime='2025-04-20'
          >
            20/04/2025 10:00
          </time>
          <PostHeading as='h1' url='#'>
            Aqui vai o link do post
          </PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quia
            iste architecto, fugiat esse nobis quos, eveniet debitis et dolore
            consequuntur rerum excepturi, amet magni harum soluta ipsam velit
            commodi?
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className='text-6xl font-bold text-center py-8'>Aqui é o footer</p>
      </footer>
    </Container>
  );
}
