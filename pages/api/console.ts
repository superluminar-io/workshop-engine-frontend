import { requireAuth, users } from '@clerk/nextjs/api'
import { STS } from "@aws-sdk/client-sts";
import fetch from 'node-fetch';

const client = new STS({
  region: 'eu-central-1',
  credentials: {
    accessKeyId: process.env.CONSOLE_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.CONSOLE_AWS_SECRET_ACCESS_KEY,
  }
});

const consoleUrl = "https://eu-central-1.console.aws.amazon.com"
const signinEndpoint = 'https://signin.aws.amazon.com/federation';

// Based on: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-custom-url.html#STSConsoleLink_programRuby
export default requireAuth(async (req, res) => {
  const userId = req.session.userId;
  const user = await users.getUser(userId);
  const emailAddress = user.emailAddresses[0].emailAddress;
  const awsAccountId = user.publicMetadata.aws_account_id;
  
  const assumedRole = await client.assumeRole({
    RoleArn: `arn:aws:iam::${awsAccountId}:role/Clerk`,
    RoleSessionName: emailAddress
  });

  const session = JSON.stringify({
    sessionId: assumedRole.Credentials.AccessKeyId,
    sessionKey: assumedRole.Credentials.SecretAccessKey,
    sessionToken: assumedRole.Credentials.SessionToken,
  });

  const url = `${signinEndpoint}?Action=getSigninToken&SessionType=json&Session=${encodeURIComponent(session)}`
  const response = await fetch(url);
  const body = await response.json();
  const loginUrl = `${signinEndpoint}?Action=login&SigninToken=${encodeURIComponent(body.SigninToken)}&Destination=${encodeURIComponent(consoleUrl)}`

  res.redirect(307, loginUrl)
})
