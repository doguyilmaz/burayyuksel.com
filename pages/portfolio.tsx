import { Flex, Image, Link, Stack, Tag, Text } from '@chakra-ui/react';
import Wrapper from '@/components/Wrapper';
import { randomColor } from '@/utility/randomHashedColor';
import type { SerializedShot } from './api/dribbble/shots';
import type { GetStaticProps } from 'next';

const Portfolio = ({ shots }: { shots: SerializedShot[] }) => {
  return (
    <Wrapper pb={20}>
      <Flex wrap='wrap' rowGap={10} columnGap={5}>
        {shots.map((shot) => (
          <Stack key={shot.id}>
            <Text fontSize={12} color='#FFF' mx='auto' borderRadius={6} bg='whiteAlpha.300'>
              {shot.title}
            </Text>
            <Link href={shot.url} target='_blank'>
              <Image src={shot.thumbnail} alt={shot.title} borderRadius={12} h={150} w={200} />
            </Link>
            <Flex maxW={200} wrap='wrap' rowGap={2} columnGap={1}>
              {shot.tags.map((tag) => (
                <Tag
                  key={tag}
                  size='xs'
                  px='5px'
                  fontSize={10}
                  variant='solid'
                  colorScheme={randomColor(tag)}
                >
                  {tag}
                </Tag>
              ))}
            </Flex>
          </Stack>
        ))}
      </Flex>
    </Wrapper>
  );
};

export default Portfolio;

export const getStaticProps: GetStaticProps = async () => {
  let shots = [];
  try {
    const response = await fetch('http://localhost:3000/api/dribbble/shots')
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
        return [];
      });
    shots = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      shots,
    },
  };
};
