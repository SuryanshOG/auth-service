import { Role } from "@prisma/client";
export interface JWTPayload {
    userId : string;
    email : String;
    role : Role;
}
export interface TokenPair {
    accessToken : String;
    refreshToken : String;
}

export interface AuthContext {
    user : JWTPayload;
}

