import { Menuadmin } from '@/components/Admin/MenuAdmin';

type AdminPostLayout = {
  children: React.ReactNode;
};

export default function AdminPostLayout({
  children,
}: Readonly<AdminPostLayout>) {
  return (
    <>
      <Menuadmin />
      {children}
    </>
  );
}
