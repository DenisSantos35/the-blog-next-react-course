import { ManagePostForm } from '@/components/Admin/ManagePostForm';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <>
      <h1>Criar Post</h1>
      <ManagePostForm />
    </>
  );
}
