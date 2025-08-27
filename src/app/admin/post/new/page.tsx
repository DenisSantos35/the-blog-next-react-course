import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputCheckbox labelText='Checkbox' />
        <InputText
          labelText='Nome:'
          placeholder='Digite seu nome'
          type='password'
        />
        <InputText labelText='Sobrenome:' placeholder='Digite seu sobrenome' />
        <InputText
          disabled
          labelText='Sobrenome:'
          placeholder='Digite seu sobrenome'
          defaultValue='Hellow World!'
        />
        <InputText
          disabled
          labelText='Sobrenome:'
          placeholder='Digite seu sobrenome'
        />
        <InputText
          labelText='Sobrenome:'
          placeholder='Digite seu sobrenome'
          readOnly
        />
        <InputText
          labelText='Sobrenome:'
          placeholder='Digite seu sobrenome'
          defaultValue='Hellow World!'
          readOnly
        />
        <div className='mt-4'>
          <Button type='submit'>Enviar Formulario</Button>
        </div>
      </div>
    </form>
  );
}
