'use server'; //utilizado para criar server-actions

export async function revalidateExamplesAction(formData: FormData) {
  const path = formData.get('path') || '';
  console.log('Estou em uma Server Action', path);
}
