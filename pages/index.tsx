import Wrapper from '@/components/Wrapper';
import { Heading, HStack, Image, Link, Text } from '@chakra-ui/react';
import Head from 'next/head';

const EXPERIENCE_YEAR = new Date().getFullYear() - 2014;

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Buray Yüksel | Product Designer</title>
        <meta name='description' content='Buray Yuksel Personal Website' />
        <link rel='icon' href='/favicon.ico' />
        {/* <link rel='preload' href='/fonts/GopherDisplay/GopherDisplay-Regular.ttf' as='font' crossOrigin='' />
         <link rel='preload' href='/fonts/Poppins/Poppins-Light.ttf' as='font' crossOrigin='' /> */}
      </Head>

      <Image objectFit='cover' src='/images/buray.png' alt='Buray Yüksel' h='135px' w='135px' />

      <Heading
        fontSize={['20px', '40px', '45px', '55px', '65px', '91px']}
        lineHeight={['50px', '91px']}
        mt={[1, 2, 3, 5]}
        fontFamily='Poppins'
        fontWeight={275}
        color='#FFFFFF'
      >
        Buray Yüksel
      </Heading>
      <Heading
        fontWeight={400}
        fontSize={[30, 60, 70, 80, 90, 140]}
        lineHeight={['10px', '50px', '50px', '60px', '65px', '91px']}
        mt={[0, 1, 2, 2, 5]}
        fontFamily='GopherDisplay'
        color='#FFFFFF'
      >
        Product Designer
      </Heading>

      <Text
        fontSize={['16px', '18px']}
        lineHeight={['25px', '27px']}
        mt={[10, 30, 50]}
        fontFamily='Poppins'
        fontWeight={275}
        color='#FFFFFF'
        w={['340px', '380px', '620px', '864px']}
      >
        I have {EXPERIENCE_YEAR} years experience as a designer in UI Designer and Art Director
        positions. Currently, I work as an Product Design Coordinator at Türkiye Tourism Promotion
        and Development Agency, designing user interface and user experience for product across all
        major platforms - iOS, OS X, Android by using Adobe Illustrator, Adobe Photoshop, Sketch
        App, Figma, inVision and other UX applications, creating assets, icons and illustrations,
        besides this creating wireframes, work flows, prototypes and interactions.
      </Text>

      <HStack mt={['2rem', '8rem']} spacing='30px'>
        <Link href='https://dribbble.com/burayyuksel' isExternal>
          <Image
            src='/images/social-dribbble.png'
            alt='Behance'
            objectFit='cover'
            w='23px'
            h='23px'
          />
        </Link>
        <Link href='https://www.behance.net/buray_yuksel' isExternal>
          <Image
            src='/images/social-behance.png'
            alt='Behance'
            objectFit='cover'
            w='33px'
            h='21px'
          />
        </Link>
        <Link href='https://www.instagram.com/buray_yuksel/' isExternal>
          <Image
            src='/images/social-instagram.png'
            alt='Behance'
            objectFit='cover'
            w='22px'
            h='21px'
          />
        </Link>
        <Link href='https://www.linkedin.com/in/burayyuksel/' isExternal>
          <Image
            src='/images/social-linkedin.png'
            alt='Behance'
            objectFit='cover'
            w='22px'
            h='22px'
          />
        </Link>
      </HStack>
    </Wrapper>
  );
}
