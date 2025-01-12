import {resend} from "@/lib/resend"
import VerificationEmail from "../../emails/verificationEmails";
import {ApiResponse} from "@/types/ApiResponse";


export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string,
):Promise<ApiResponse>{
 try {
   await resend.emails.send({
     from:"onboarding@resend.dev",
     to:email,
     subject:"verification code",
     react:VerificationEmail({username,  otp:verifyCode}),
   })
   return {success:true,message:"verification email sent"}
 }catch (EmailError){
   console.log("Error sending verification email",EmailError)
   return {success:false,message:"failed to send verification email"}
 }
}