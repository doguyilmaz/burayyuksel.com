import { Box, BoxProps, Image } from '@chakra-ui/react';

interface WrapperProps extends BoxProps {
  children: React.ReactNode;
}

const Wrapper = ({ children, ...props }: WrapperProps) => {
  return (
    <Box bg='#F0E9E3' minH='100vh' overflow='hidden' {...props}>
      <Box
        position='relative'
        h='full'
        minH='100vh'
        py={['2rem', '5rem']}
        mx={['1rem', '20px', '50px', '50px', '100px']}
      >
        <Box as='main' position='relative' zIndex={1}>
          {children}
        </Box>
        <Image
          src='/images/layer.png'
          alt=''
          position='absolute'
          top='0'
          right='0'
          zIndex={0}
          opacity={0.6}
        />
      </Box>
    </Box>
  );
};

export default Wrapper;
