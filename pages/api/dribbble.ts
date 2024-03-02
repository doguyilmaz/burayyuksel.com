import { supabase } from '@/utils/supabase';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(403).json({ success: false, data: null, message: 'Forbidden' });

  // if (req.method !== 'GET') {
  //   res.status(405).json({ success: false, data: null, message: 'Method not allowed' });
  //   return;
  // }

  // const formattedData = dbjson.shots.map(({ id, ...shot }) => ({
  //   d_id: id,
  //   ...shot,
  // }));

  // try {
  //   const { error } = await supabase.from('shots').insert(dbjson.shots);
  //   if (error) {
  //     console.log(error);
  //     return res.status(500).json({ data: [], success: false, message: error.message, error });
  //   }
  //   res.status(200).json({ success: true, message: 'Data inserted successfully' });
  // } catch (error) {
  //   res.status(500).json({ data: [], success: false, message: 'Error' });
  // }
}
