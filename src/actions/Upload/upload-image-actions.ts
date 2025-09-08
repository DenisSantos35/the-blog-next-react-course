'use server';

import { logColor } from "@/utils/log-color";

export async function uploadImageAction() {
  logColor('Hellow of action uploadImageAction', 'green');

  return {
    user: 'SENHA DO USUARIO'
  }
 
  
}