import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className='text-slate-900 bg-slate-100 min-h-screen'>
      {/* text-justify = justifica o texto, p = padding de todos os lados, pt = padding top, pr = padding reight, pb = padding bottom, pl = padding left, aplica se para margin os mesmos so que com m no inicio, px = padding no eixo x horizontal, e py = padding no eixo y = na vertical   */}
      <div className=' max-w-screen-lg mx-auto px-8'>{children}</div>
    </div>
  );
}
