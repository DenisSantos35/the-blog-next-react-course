import { Menuadmin } from '@/components/Admin/MenuAdmin';
import { requireLoginSessionOrRedirect } from '@/lib/login/manage_login';

type AdminPostLayout = {
  children: React.ReactNode;
};

export default async function AdminPostLayout({
  children,
}: Readonly<AdminPostLayout>) {
  await requireLoginSessionOrRedirect();
  return (
    <>
      <Menuadmin />
      {children}
    </>
  );
}
