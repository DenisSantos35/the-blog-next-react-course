import { hashPassword } from "@/lib/login/manage_login";

(async () => {
  const myPasword  = '';
  const hashPasswordInBase64 = await hashPassword(myPasword);
  console.log({hashPasswordInBase64});
})()