import { revalidateExamplesAction } from '@/actions/revalidate-examples';
import { formatHour } from '@/utils/format-datetime';
// import { revalidatePath, revalidateTag } from 'next/cache';
//esta pagina é dinamica, ou seja, ela é renderizada no servidor a cada requisição, mantendo a funcionalidade de dinamismo mesmo após o build.
//SSG -> static side generation, gera uma pagina estatica, mas com a funcionalidade de dinamismo.
export const dynamic = 'force-static'; // == export async function generateStaticParams() { return []; }
export const revalidate = 10;
//export const dynamicParams = true;
// export async function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }];
// }

// // exemplo de revalidação por caminho
// revalidatePath('/exemplo/1');
// // exemplo de revalidação por tag
// revalidateTag('exemplo-1');

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
        Hora: {hour} (ID: {id})
      </div>
      <form className='py-16' action={revalidateExamplesAction}>
        <input
          type='hidden'
          name='path'
          defaultValue={`/exemplo/${id}`}
        ></input>
        <button
          className='bg-amber-500 text-white p-2 rounded hover:bg-amber-600 transition cursor-pointer'
          type='submit'
        >
          REVALIDATE
        </button>
      </form>
    </main>
  );
}
