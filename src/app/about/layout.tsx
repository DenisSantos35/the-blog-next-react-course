export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Aqui Vem o layout da About</h1>
      {children}
    </>
  );
}
