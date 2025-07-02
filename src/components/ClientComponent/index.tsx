'use client'; // <- se espalha para todos os componentes que eu importar aqui

type ClientComponentProps = {
  children: React.ReactNode;
};

export function ClientComponent({ children }: ClientComponentProps) {
  console.log('Client Component Rendered');
  return (
    <div>
      <p>Client Component {children}</p>
    </div>
  );
}
