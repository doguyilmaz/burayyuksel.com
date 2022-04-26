import { Box, Container, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <Box bg='#000' h='100vh' overflow='hidden'>
      <Head>
        <title>Buray Yüksel | Product Designer</title>
        <meta name='description' content='Buray Yuksel Website' />
        <link rel='icon' href='/favicon.ico' />

        <link rel='preload' href='/fonts/GopherDisplay/GopherDisplay-Regular.ttf' as='font' crossOrigin='' />
        {/* <link rel='preload' href='/fonts/Montserrat/Montserrat-Light.ttf' as='font' crossOrigin='' /> */}
        <link rel='preload' href='/fonts/Poppins/Poppins-Light.ttf' as='font' crossOrigin='' />
      </Head>

      <Box
        h='full'
        pt={['4rem', '15rem']}
        marginLeft={['1rem', '5rem', '5rem', '6rem', '10rem']}
        backgroundImage='url("/images/layer.png")'
        backgroundRepeat='no-repeat'
        backgroundPosition={['10rem', '8rem', '15rem', '25rem', '30rem', '50rem']}
        backgroundSize='contain'
      >
        <Box>
          <Image objectFit='cover' src='/images/buray.png' alt='Buray Yüksel' />

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
            I have 7 years experience as a designer in UI Designer and Art Director positions. Currently, I work as an Product Designer at Türkiye
            Tourism Promotion and Development Agency, designing user interface and user experience for product across all major platforms - iOS, OS X,
            Android by using Adobe Illustrator, Adobe Photoshop, Sketch App, Figma, inVision and other UX applications, creating assets, icons and
            illustrations, besides this creating wireframes, work flows, prototypes and interactions.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
