import {z} from "zod";

export const RegisterSchema = z.object({
    email : z.email("Invalid Email Address").toLowerCase().trim(),
    username : z
        .string()
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username must be at most 20 characters")
        .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores")
        .trim(),
    password : z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(100, "Password must be at most 100 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)")
});

export const LoginSchema = z.object({
    email : z.email("Invalid Email Address").toLowerCase().trim(),
    password : z.string().min(1, "Password is required")
});

export const RefreshSchema = z.object({
    refreshToken : z.string().min(1, "Refresh token is required")
});

export const VerifyEmailSchema = z.object({
    toke : z.string().min(1, "Verification token is required")
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
export type RefreshInput = z.infer<typeof RefreshSchema>;
export type VerifyEmailInput = z.infer<typeof VerifyEmailSchema>;

