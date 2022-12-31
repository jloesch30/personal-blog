import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  console.log(req.body);

  const mailOptions = {
    from: req.body.email,
    to: "jloesch30@gmail.com",
    subject: `Blog - Email from: ${req.body.name}`,
    text: req.body.message,
  };

  switch (method) {
    case "GET":
      console.log("GET");
      // Get data from your database
      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log(data);
          console.log("Email sent successfully");
        }
      });
      res.status(200).json({ name: "John Doe" });
      break;
    case "POST":
      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully");
        }
      });
      res.status(200).json({ id: 2, name: "John Doe" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

const transporter = nodemailer.createTransport({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});
