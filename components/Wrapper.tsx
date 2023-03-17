import { Box, BoxProps } from '@chakra-ui/react';

interface WrapperProps extends BoxProps {
  children: React.ReactNode;
}

const Wrapper = ({ children, ...props }: WrapperProps) => {
  return (
    <Box bg='#000' minH='100vh' overflow='hidden' {...props}>
      <Box
        h='full'
        minH='100vh'
        pt={['2rem', '5rem']}
        marginLeft={['1rem', '5rem', '5rem', '6rem', '10rem']}
        backgroundImage='url("/images/layer.png")'
        backgroundRepeat='no-repeat'
        backgroundPosition={['10rem', '8rem', '15rem', '25rem', '30rem', '50rem']}
        backgroundSize='contain'
      >
        {children}
      </Box>
    </Box>
  );
};

export default Wrapper;
