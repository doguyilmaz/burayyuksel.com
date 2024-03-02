import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/utils/supabase';

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

  const per_page = req.query.per_page || 45;

  try {
    const response = req.query.access_token
      ? await fetch(`https://api.dribbble.com/v2/user/shots?access_token=${req.query.access_token}&page=1&per_page=${per_page}`)
      : await fetch(`https://api.dribbble.com/v2/user/shots?access_token=${process.env.DRIBBBLE_ACCESS_TOKEN}&page=1&per_page=${per_page}`);
    const data = await response.json();

    if (data.message === 'Bad credentials.') {
      res.status(401).json({ data: [], success: false, message: 'Bad credentials.' });
    } else {
      const deleteAll = await supabase.from('shots').delete().neq('id', 0);

      if (deleteAll.error) {
        return res
          .status(500)
          .json({ data: [], success: false, message: 'Dribbble data sync is not successfull due to delete all.', error: deleteAll.error });
      }

      const insertAll = await supabase.from('shots').insert(data);

      if (insertAll.error) {
        return res
          .status(500)
          .json({ data: [], success: false, message: 'Dribbble data sync is not successfull due to insert all.', error: insertAll.error });
      }

      res.json({ success: true, message: 'Dribbble data sync is successful.' });
    }
  } catch (error) {
    res.status(500).json({ data: [], success: false, message: 'Error' });
  }
}
