import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_API_TOKEN,
});

const sender = {
  email: "hello@demomailtrap.co",
  name: "Gunit Singh",
};
// const recipients = [
//   {
//     email: "gunitforml@gmail.com",
//     name: "Gunit Singh",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);