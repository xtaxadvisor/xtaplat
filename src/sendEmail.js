// sendEmail.ts (TypeScript) or sendEmail.js (JavaScript)
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

async function sendEmailSESv2() {
  // 1. Initialize the SESv2 client for a Global Endpoint
  const sesClient = new SESv2Client({
    region: "aws-global",                  // Use 'aws-global' for a global endpoint
    endpointId: "sibj86ojij6n0001.pa7",    // The global endpoint ID you copied
    // If you created a second global endpoint, you could swap in its ID here
  });

  // 2. Define your sendEmail params
  const params = {
    FromEmailAddress: "sender@example.com", // must be verified in each region
    Destination: {
      ToAddresses: ["recipient@example.com"],
    },
    Content: {
      Simple: {
        Subject: { Data: "Hello from Global Endpoint!" },
        Body: {
          Text: {
            Data: "Hey Giba, just testing the new global endpoint!",
          },
        },
      },
    },
  };

  // 3. Send the email
  try {
    const data = await sesClient.send(new SendEmailCommand(params));
    console.log("Success:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}

// Only call it if you're running this file directly
sendEmailSESv2();