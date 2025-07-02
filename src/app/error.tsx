'use client';
//Todo componente e seus dependentes importados dentro de uma pagina use client se torna um client component
import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <ErrorMessage
      pageTitle='Internal Server Error'
      contentTitle='501'
      content='Ocorreu um erro ao qual nossa aplicação não conseguiu se recuperar. Tente novamente mais tarde.'
      // content={
      //   // <button onClick={() => reset()}>Clique para tentar novamente</button>
      // }
    />
  );
}
