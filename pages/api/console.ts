import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch';

interface CreateAwsSignUrlResponse { 
  data: {
    createAwsSignInUrl: string; 
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const awsAccountId = req.query.awsAccountId;
  const workshopEngineApiEndpoint = process.env.NEXT_PUBLIC_APPSYNC_URL;
  const sessionToken = req.cookies['__session'];

  const response = await fetch(workshopEngineApiEndpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sessionToken}`,
    },
    body: JSON.stringify({
      query: `
        mutation CreateAwsSignUrl($awsAccountId: String!) {
          createAwsSignInUrl(awsAccountId: $awsAccountId) 
        }
      `,
      variables: {
        awsAccountId
      }
    })
  });

  const body = await response.json() as CreateAwsSignUrlResponse;
  res.redirect(307, body.data.createAwsSignInUrl)
}
