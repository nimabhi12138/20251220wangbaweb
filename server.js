import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'mail.spacemail.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_USE_SSL === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USERNAME || 'email@qshash.com',
    pass: process.env.SMTP_PASSWORD || 'Hh185115797.',
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
  }
});

app.post('/api/send-email', async (req, res) => {
  const { name, phone, serviceType, message } = req.body;

  const mailOptions = {
    from: process.env.SMTP_SENDER || 'email@qshash.com',
    to: process.env.SMTP_SENDER || 'email@qshash.com', // 发送给自己
    subject: `【官网新咨询】来自 ${name} 的咨询`,
    text: `
      姓名：${name}
      电话：${phone}
      意向场景：${serviceType}
      详细需求：${message}
    `,
    html: `
      <h3>官网新咨询详情</h3>
      <p><b>姓名：</b> ${name}</p>
      <p><b>电话：</b> ${phone}</p>
      <p><b>意向场景：</b> ${serviceType}</p>
      <p><b>详细需求：</b> ${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: '邮件发送成功' });
  } catch (error) {
    console.error('发送邮件失败:', error);
    res.status(500).json({ success: false, message: '邮件发送失败', error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Email service server running on port ${PORT}`);
});
