//Quando for usar componentes clients procurar jogar o mais para fora possivel da sua aplicação
//page.tsx (server) -> menu.tsx (server) -> link (client)

import { Container } from '@/components/Container';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function Homepage() {
  return (
    /*CONTAINER QUE REPRESENTA A TELA
    mx-auto = centraliza a div colocando margin dos 2 lados automatico. */

    <Container>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>Aqui é a HEADER</h1>
        <p className='text-justify'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          impedit id distinctio tempora asperiores eos alias magni nesciunt,
          voluptates assumenda iste aperiam deleniti dolor repellendus quia
          delectus quas unde ullam. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Cumque impedit id distinctio tempora asperiores eos
          alias magni nesciunt, voluptates assumenda iste aperiam deleniti dolor
          repellendus quia delectus quas unde ullam. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Cumque impedit id distinctio tempora
          asperiores eos alias magni nesciunt, voluptates assumenda iste aperiam
          deleniti dolor repellendus quia delectus quas unde ullam. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Cumque impedit id
          distinctio tempora asperiores eos alias magni nesciunt, voluptates
          assumenda iste aperiam deleniti dolor repellendus quia delectus quas
          unde ullam.
        </p>
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className='text-6xl font-bold text-center py-8'>Aqui é o footer</p>
      </footer>
    </Container>
  );
}
