import { formatHour } from '@/utils/format-datetime';
//esta pagina é dinamica, ou seja, ela é renderizada no servidor a cada requisição, mantendo a funcionalidade de dinamismo mesmo após o build.
//SSG -> static side generation, gera uma pagina estatica, mas com a funcionalidade de dinamismo.
//export const dynamic = 'force-static'; == export async function generateStaticParams() { return []; }
export const dynamicParams = true;
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }];
}
export default async function ExampleDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hour = formatHour(Date.now());

  return (
    <main className='min-h-[600px] text-xl font-bold'>
      <div>
        Hora: {hour} id: {id}
      </div>
    </main>
  );
}
