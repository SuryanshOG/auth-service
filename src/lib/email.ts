import nodemailer from 'nodemailer';
import { config } from "../config";

const transporter = nodemailer.createTransport({
    host : config.smtp.host,
    port : config.smtp.port,
    secure : false,
    auth : {
        user : config.smtp.user,
        pass : config.smtp.pass
    }
});

export const sendVerificationEmail = async (
    email : string,
    token : string
) : Promise<void> => {
    const verifyUrl = `${config.appUrl}/auth/verify-email?token=${token}`;

    await transporter.sendMail({
        from : config.smtp.from,
        to : email, 
        subject : "Verifgy your email address",
        html : `
            <div style="font-family: sans-serif; max-width : 480px; margin: auto;">
                <h2> Verify your Email</h2>
                <p>Click the button below to verify your email. THis link expires in <strong>24 hours</strong>.</p>
                <a href = "${verifyUrl}" style = "display : inline-block; padding : 12px 24px; background : #6366f1; color : #fff; border-radius : 6px; text-decoration : none; font-weight : bold; margin-top : 16px;">Verify Email</a>
                <p style = "margin-top : 16px; color : #888; font-size : 13px;">
                Or copy this link : <br>${verifyUrl}
                </p>
            </div>
        `
    });
};