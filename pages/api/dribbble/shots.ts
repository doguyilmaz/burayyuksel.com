import { NextApiRequest, NextApiResponse } from 'next';

export type Shot = {
  animated: boolean;
  description: string | null;
  height: number;
  html_url: string;
  id: number;
  images: ShotImages;
  low_profile: boolean;
  tags: string[];
  title: string;
  width: number;
  published_at: string;
  updated_at: string;
  attachments: any[];
  projects: any[];
  video: null | string;
};

export type ShotImages = {
  hidpi: string;
  normal: string;
  one_x: string;
  two_x: string;
  four_x: string;
  teaser: string;
};

export type SerializedShot = ReturnType<typeof shotSerializer>[number];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const res = await fetch('https://api.dribbble.com/v2/user/shots'
  if (req.method !== 'GET')
    return res.status(405).json({ success: false, data: null, message: 'Method not allowed' });

  try {
    const response = await fetch('http://localhost:3004/shots');
    const data = await response.json();
    res.status(200).json({ data: shotSerializer(data), success: true, message: 'Success' });
  } catch (error) {
    res.status(500).json({ data: [], success: false, message: 'Error' });
  }
}

const shotSerializer = (data: Shot[]) => {
  return data.map((shot) => ({
    id: shot.id,
    title: shot.title,
    description: shot.description,
    tags: shot.tags,
    image: shot.images.hidpi,
    thumbnail: shot.images.teaser,
    url: shot.html_url,
    published_at: shot.published_at,
    updated_at: shot.updated_at,
  }));
};
