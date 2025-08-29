'use client';

import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useState } from 'react';
import { ImageUploader } from '../imageUploader';

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState('Este é um exemplo');
  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <ImageUploader />
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
        <MarkdownEditor
          labelText='Conteúdo'
          disabled={false}
          textAreaName='content'
          value={contentValue}
          setValue={setContentValue}
        ></MarkdownEditor>
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
          <Button type='submit'>Enviar</Button>
        </div>
      </div>
    </form>
  );
}
