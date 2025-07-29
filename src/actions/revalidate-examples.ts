'use server';

import { revalidateTag } from 'next/cache';

// import { revalidatePath } from 'next/cache';

//utilizado para criar server-actions

export async function revalidateExamplesAction(formData: FormData) {
  const path = formData.get('path') || '';
  console.log('Estou em uma Server Action', path);

  // revalidatePath(`${path}`);
  revalidateTag('formatHourCached'); // revalida a tag especificada, que é usada na página para cache
}
