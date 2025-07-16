import { formatHour } from '@/utils/format-datetime';
//Está pagina quando feita em Dev ela é dinamica porem apos o build ela é estatica, e toda funcionalidade de dinamica é perdida.
export default async function ExamplePage() {
  const hour = formatHour(Date.now());
  return (
    <main className='min-h-[600px] text-xl font-bold'>
      <div>Hora: {hour}</div>
    </main>
  );
}
