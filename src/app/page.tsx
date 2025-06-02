import { SpinLoader } from '@/components/SpinLoader';
//Quando for usar componentes clients procurar jogar o mais para fora possivel da sua aplicação
//page.tsx (server) -> menu.tsx (server) -> link (client)

export default async function Homepage() {
  console.log('Server');
  return (
    <div>
      <SpinLoader></SpinLoader>
    </div>
  );
}
