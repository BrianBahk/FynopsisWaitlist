const AWS = require("aws-sdk");
require("dotenv").config();

const SES_CONFIG = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
};

const AWS_SES = new AWS.SES(SES_CONFIG);

const sendEmail = async (recipientEmail, name) => {
  const params = {
    Source: process.env.AWS_SES_SENDER,
    Destination: {
      ToAddresses: [recipientEmail],
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: "<html>This is the body</html>",
        },
        Text: {
          Charset: "UTF-8",
          Data: "This is the body",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "This is the subject",
      },
    },
  };

  try {
    const res = await AWS_SES.sendEmail(params).promise();
    console.log("Email has been sent!", res);
  } catch (error) {
    console.error(error);
  }
};

export async function POST(req, res) {
  if (req.method === "POST") {
    const { email, name } = await req.json();
    try {
      await sendEmail(email, name);
      res.json({ message: "Email sent" });
    } catch (error) {
      res.json({ error: "Failed to send email" });
    }
  } else {
    res.json({ error: "Method not allowed" });
  }
}
