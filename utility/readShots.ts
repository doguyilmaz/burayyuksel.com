import { Tables } from '@/database.types';

type ShotImages = {
  hidpi: string;
  normal: string;
  one_x: string;
  two_x: string;
  four_x: string;
  teaser: string;
};

export type SerializedShot = ReturnType<typeof shotSerializer>[number];

export const shotSerializer = (data: Tables<'shots'>[] | null) => {
  return (
    data?.map((shot) => ({
      id: shot.id,
      title: shot.title,
      description: shot.description,
      tags: shot.tags,
      image: (shot.images as ShotImages).hidpi,
      thumbnail: (shot.images as ShotImages).normal,
      teaser: (shot.images as ShotImages).teaser,
      url: shot.html_url,
      published_at: shot.published_at,
      updated_at: shot.updated_at,
    })) || []
  );
};
