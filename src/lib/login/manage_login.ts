import bcrypt from "bcryptjs";

export async function hashPassword(password: string) {
  const hash = await bcrypt.hash(password, 10);
  const base64 = Buffer.from(hash).toString('base64');
  return base64;  
}

export async function verifyPassword(password: string, base64Hash: string) {
  const hash = Buffer.from(base64Hash, 'base64').toString('utf-8');
  const isValid = await bcrypt.compare(password, hash);
  return isValid;  
}

(async() => {
  const isPasswordValid = await verifyPassword('Jd14409696*', 'JDJiJDEwJFpMWnZKamVhUzkzNFpGNUptMS5lOGUvU3ZaY1diMW1GbHE1bzZVb0hEVXA0dy9ZZjBHUzcy');
  console.log({isPasswordValid});
})()