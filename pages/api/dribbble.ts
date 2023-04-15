import fs from 'fs/promises';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ success: false, data: null, message: 'Method not allowed' });
    return;
  }

  try {
    const db = await fs.readFile(process.cwd() + '/db.json', 'utf8');
    const data = JSON.parse(db);

    res.json({
      last_update: data.last_update,
      syncons: data.syncons,
    });
  } catch (error) {
    res.status(500).json({ data: [], success: false, message: 'Error' });
  }
}
