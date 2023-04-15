import path from 'path';
import crypto from 'crypto';
import { promises as fs } from 'fs';

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET')
    return res.status(405).json({ success: false, data: null, message: 'Method not allowed' });

  try {
    const response = await fetch(
      `https://api.dribbble.com/v2/user/shots?access_token=${req.query.access_token}`
    );
    const data = await response.json();
    const date = new Date().toISOString();

    if (data.message === 'Bad credentials.') {
      res.status(401).json({ data: [], success: false, message: 'Bad credentials.' });
    } else {
      // read old file
      const oldFile = await fs.readFile(process.cwd() + '/db.json', 'utf8');
      const oldData = JSON.parse(oldFile);

      // update data
      oldData.shots = data;
      oldData.last_update = date;
      oldData.syncons.unshift({ id: crypto.randomUUID(), date });

      // write new data to file
      await fs.writeFile(path.join(process.cwd(), 'db.json'), JSON.stringify(oldData), 'utf8');
      res.json({ data, success: true, message: 'Success' });
    }
  } catch (error) {
    res.status(500).json({ data: [], success: false, message: 'Error' });
  }
}
