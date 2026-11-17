import { mailtrapClient, sender } from "../mailtrap/mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";

export const sendVerificationEmail = async (email,verificationToken) =>{
    const recipients = [{email}]

    try {
        const response = await mailtrapClient.send({
            from:sender,
            to:recipients,
            subject:"Verify your email",
            html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category:"Verification Email"   
        })
        console.log("email sent successfullyyy", response);
        
    } catch (error) {
        console.log("error in sending email", error.message);
        throw new Error(`Error sending verification email: ${error.message}`);
    }
}