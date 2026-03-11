export const config = {
    port : Number(process.env.PORT) || 3000,
    nodeEnv : process.env.NODE_ENV || "development",

    jwt : {
        accessSecret : process.env.JWT_ACCESS_SECRET || "access-secret",
        refreshSecret : process.env.JWT_REFRESH_SECRET || "refresh-secret",
        accessExpiry : process.env.JWT_ACCESS_EXPIRY || "15m",
        refreshExpiry : process.env.JWT_REFRESH_EXPIRY || "7d",
        accessExpirySecond : 7 * 24 * 60 * 60, // 7 days in seconds
    },

    redis : {
        url : process.env.REDIS_URL || "redis://localhost:6379",
    },

    smtp : {
        host : process.env.SMTP_HOST || "smtp.gmail.com",
        port : Number(process.env.SMTP_PORT) || 587,
        user : process.env.SMTP_USER || "",
        pass : process.env.SMTP_PASS || "",
        from : process.env.SMTP_FROM || "",
    },

    appUrl : process.env.APP_URL || "http://localhost:3000",
} as const;