import Link from 'next/link';
import { Box, Flex, HStack, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import type { SerializedShot } from '@/utility/readShots';

const Portfolio = ({ shots }: { shots: SerializedShot[] }) => {
  const mt = useBreakpointValue({ base: 150, md: 230 }, { fallback: 'md' });
  const rowGap = useBreakpointValue({ base: '40px', md: '80px' }, { fallback: 'md' });
  const columnGap = useBreakpointValue({ base: '20px', md: '40px' }, { fallback: 'md' });

  return (
    <Box id='portfolio' mt={mt}>
      <Text
        width={1050}
        bgGradient='linear(to-l,  #05FDB3 76.65%, #8105FD 86.58%, #FDC605 96.38%)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
      >
        Portfolio
      </Text>

      <Flex wrap='wrap' mt='40px' rowGap={rowGap} columnGap={columnGap}>
        {shots.map((shot) => (
          <PortfolioItem key={shot.id} shot={shot} />
        ))}
      </Flex>
    </Box>
  );
};

export default Portfolio;

const PortfolioItem = ({ shot }: { shot: SerializedShot }) => {
  const height = useBreakpointValue({ base: 225, lg: 318, xl: 410 }, { fallback: 'xl' });
  const width = useBreakpointValue({ base: 300, lg: 423, xl: 546 }, { fallback: 'xl' });
  // const imgKey = useBreakpointValue({ base: 'teaser', md: 'thumbnail' }, { fallback: 'md' });

  return (
    <Link href={shot.url || '#'} target='_blank'>
      <Stack key={shot.id}>
        <Image src={shot.thumbnail} alt={shot.title} borderRadius={12} h={height} w={width} />

        <HStack justify='space-between'>
          <Text fontSize={30} fontWeight={500} lineHeight='45px' color='#271525' noOfLines={2} maxW={300} h={90}>
            {shot.title}
          </Text>
          <Image src='/images/arrow-top-right.png' alt='arrow' />
        </HStack>
      </Stack>
    </Link>
  );
};
