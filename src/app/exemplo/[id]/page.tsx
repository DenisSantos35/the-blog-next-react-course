import { formatHour } from '@/utils/format-datetime';
//esta pagina é dinamica, ou seja, ela é renderizada no servidor a cada requisição, mantendo a funcionalidade de dinamismo mesmo após o build.
export default async function ExampleDynamicPage() {
  const hour = formatHour(Date.now());
  return (
    <main className='min-h-[600px] text-xl font-bold'>
      <div>Hora: {hour}</div>
    </main>
  );
}
