//Quando for usar componentes clients procurar jogar o mais para fora possivel da sua aplicação
//page.tsx (server) -> menu.tsx (server) -> link (client)

import { Container } from '@/components/Container';
import Header from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
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
        {/*o w-full e h full pega o tamanho total do componente (link) e o overfllow-hiden quando o componente filho estourar os limites nõ deixa sair para ora do componente pai, rounded arredonda a borda do componente, hover com scale altera o tamanho do componente e transition faz uma transição mais suave. */}
        <Link
          className={clsx('w-full h-full overflow-hidden rounded-xl')}
          href='#'
        >
          <Image
            className={clsx('group-hover:scale-105 transition')}
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Título do post'
          ></Image>
        </Link>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quia
          iste architecto, fugiat esse nobis quos, eveniet debitis et dolore
          consequuntur rerum excepturi, amet magni harum soluta ipsam velit
          commodi?
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
