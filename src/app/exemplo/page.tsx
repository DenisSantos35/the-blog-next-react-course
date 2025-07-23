import { formatHour } from '@/utils/format-datetime';
//Está pagina quando feita em Dev ela é dinamica porem apos o build ela é estatica, e toda funcionalidade de dinamica é perdida.

//para tornar este componente apos a build dinamico e preciso exportar uma variavel dynamic = force-dynamic
export const dynamic = 'force-dynamic';
export default async function ExamplePage() {
  const hour = formatHour(Date.now());
  return (
    <main className='min-h-[600px] text-xl font-bold'>
      <div>Hora: {hour}</div>
    </main>
  );
}
