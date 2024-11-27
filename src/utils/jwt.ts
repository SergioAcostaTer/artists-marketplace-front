/* eslint-disable @typescript-eslint/no-unused-vars */
import { IJwtUser } from "@/@types/Jwt";
import jwt from "jsonwebtoken";

/**
 * Verify a JWT and decode the user ID.
 * @param token - The token to verify.
 * @returns The decoded JWT payload containing the user ID.
 */
export const jwtVerify = (token: string): IJwtUser | null => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "") as IJwtUser;
    return decoded;
  } catch (error) {
    return null;
  }
};
