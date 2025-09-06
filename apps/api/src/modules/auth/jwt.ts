import jwt from 'jsonwebtoken';
import { getEnv } from '../../env';

const env = getEnv();

export interface JwtPayloadBase {
  sub: string; // userId
  role: 'ADMIN' | 'MANAGER' | 'RECRUITER' | 'VIEWER';
}

export function signAccessToken(payload: JwtPayloadBase): string {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN });
}

export function signRefreshToken(payload: JwtPayloadBase & { tokenId: string }): string {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET, { expiresIn: env.JWT_REFRESH_EXPIRES_IN });
}

export function verifyAccessToken(token: string): JwtPayloadBase {
  return jwt.verify(token, env.JWT_SECRET) as JwtPayloadBase;
}

export function verifyRefreshToken(token: string): JwtPayloadBase & { tokenId: string } {
  return jwt.verify(token, env.JWT_REFRESH_SECRET) as JwtPayloadBase & { tokenId: string };
}

