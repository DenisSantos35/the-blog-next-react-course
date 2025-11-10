import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const jwtSecretKey = process.env.JWT_SECRET_KEY;
const jwtEncodeKey = new TextEncoder().encode(jwtSecretKey);

const loginExpSeconds = Number(process.env.LOGIN_EXPIRATION_SECONDS) || 86400;
const loginExpStr = process.env.LOGIN_EXPIRATION_STRING || '1d'
const loginCookieName = process.env.LOGIN_COOKIE_NAME || 'loginSession'

type JwtPayload = {
  username: string;
  expiresAt: Date;
}

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

export async function creatLoginSession(username: string){
  const expiresAt = new Date(Date.now() + loginExpSeconds * 1000);
  const loginSession = await signJwt({username, expiresAt});
  const cookiesStore = await cookies();

  cookiesStore.set(loginCookieName, loginSession, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    expires: expiresAt
  })
}

export async function deleteLoginSession(){
  const cookiesStore = await cookies();
  cookiesStore.set(loginCookieName, '', {expires: new Date(0)});
  cookiesStore.delete(loginCookieName);
}


export async function signJwt(jwtPayload: JwtPayload) {
  return new SignJWT(jwtPayload)
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' ,})
    .setIssuedAt()
    .setExpirationTime(loginExpStr)
    .sign(jwtEncodeKey);
}

// (async() => {
//   const isPasswordValid = await verifyPassword('Jd14409696*', 'JDJiJDEwJFpMWnZKamVhUzkzNFpGNUptMS5lOGUvU3ZaY1diMW1GbHE1bzZVb0hEVXA0dy9ZZjBHUzcy');
//   console.log({isPasswordValid});
// })()