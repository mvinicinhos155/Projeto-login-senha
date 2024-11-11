import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

async function envioEmail() {
    try {
        const info = await transporter.sendMail({
            from: '"Vinicius" <' + process.env.EMAIL_USER + '>',
            to: "mvinicinhos13@gmail.com",
            subject: "testando",
            text: "envio de email de teste",
            html: "<h1>teste</h1>"
        });

        console.log("email enviado", info.messageId);
    } catch (error) {
        console.error("erro ao enviar o email", error)
    }
}

envioEmail();


