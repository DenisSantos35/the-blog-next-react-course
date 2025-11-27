import { hashPassword } from "@/lib/login/password_hashing";


(async () => {
  const myPasword  = '';
  const hashPasswordInBase64 = await hashPassword(myPasword);
  console.log({hashPasswordInBase64});
})()