'use server'
type CreatPostActionState = {
  numero: number;
}
export async function createPostAction(prevState: CreatPostActionState): Promise<CreatPostActionState>{
  console.log({prevState})
  return {
    numero: prevState.numero + 1,
  }
}