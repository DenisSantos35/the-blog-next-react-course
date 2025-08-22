import { Button } from '@/components/Button';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <div className='py-16 text-6xl'>
      <Button
        className='bg-red-500 px-4 py-2 rounded-lg items-center justify-center text-white text-2xl transform hover:bg-red-600 transition-colors cursor-pointer'
        type='submit'
      >
        Teste component button
      </Button>
    </div>
  );
}
