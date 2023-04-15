import path from 'path';
import crypto from 'crypto';
import fs from 'fs/promises';

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ success: false, data: null, message: 'Method not allowed' });
    return;
  }

  if (!req.query.access_token && req.query.key !== process.env.CRON_JOB_HASH) {
    res.status(401).json({
      success: false,
      message: 'Dribbble data sync is failed. Either provide dribbble access token nor cron key.',
    });
    return;
  }

  try {
    const response = req.query.access_token
      ? await fetch(`https://api.dribbble.com/v2/user/shots?access_token=${req.query.access_token}`)
      : await fetch(
          `https://api.dribbble.com/v2/user/shots?access_token=${process.env.DRIBBBLE_ACCESS_TOKEN}`
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
      res.json({ success: true, message: 'Dribbble data sync is successful.' });
    }
  } catch (error) {
    res.status(500).json({ data: [], success: false, message: 'Error' });
  }
}
