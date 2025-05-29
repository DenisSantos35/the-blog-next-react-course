import H1 from '@/components/Header';
//Quando for usar componentes clients procurar jogar o mais para fora possivel da sua aplicação
//page.tsx (server) -> menu.tsx (server) -> link (client)

export default async function Homepage() {
  console.log('Server');
  return (
    <div>
      <H1></H1>
    </div>
  );
}
