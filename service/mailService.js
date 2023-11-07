import { configDotenv } from "dotenv";

const nodemailer = require("nodemailer");
configDotenv();
//-----------------------------------------------------------------------------
export async function sendMail(desc) {
  const emailData = desc;


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: "rohit.sharma@creware.asia",
    subject: "Contacted from creware website",
    text: `Name: ${desc.name}
  Reach me at: ${desc.reachMeAt}
  Country: ${desc.country}
  Mobile No: ${desc.mobile_number}
  Company Name: ${desc.Company_name}
  message:${desc.message}`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}
