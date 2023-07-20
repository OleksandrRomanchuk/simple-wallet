import { BigLogoIcon, SmallLogoIcon } from 'components/shared/Icons/icons';
import { useWindowSize } from 'hooks/useResize';

import { Wrapper, Text } from './Logo.styled';

const Logo = () => {
  const screenWidth = useWindowSize();

  return (
    <Wrapper to="/">
      {screenWidth < 768 && <SmallLogoIcon />}
      {screenWidth >= 768 && <BigLogoIcon />}
      <Text>Wallet</Text>
    </Wrapper>
  );
};

export default Logo;
