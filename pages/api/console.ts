import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch';

const workshopEngineApiEndpoint = 'https://2ucii2rhcjblfoyfk534fou2gi.appsync-api.eu-west-1.amazonaws.com/graphql';

export default async (req: NextApiRequest, res: NextApiResponse) => {
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
        awsAccountId: '770747224463'
      }
    })
  });

  const body = await response.json();
  res.redirect(307, body.data.createAwsSignInUrl)
}
