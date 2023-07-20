import LogInImg_tab2 from '../../assets/images/log-in-img_tab@2.webp';
import LogInImg_tab1 from '../../assets/images/log-in-img_tab@1.webp';
import LogInImg_desk2 from '../../assets/images/log-in-img_desk@2.webp';
import LogInImg_desk1 from '../../assets/images/log-in-img_desk@1.webp';
import AuthenticationForms from 'modules/AuthenticationForms/AuthenticationForms';
import BgElipses from 'components/BgElipses/BgElipses';
import { useWindowSize } from 'hooks/useResize';

import {
  Wrapper,
  LeftContainer,
  PictureWrapper,
  Picture,
  Title,
  RightContainer,
  BgFilter,
} from './AuthenticationPage.styled';

const AuthenticationPage = () => {
  const screenWidth = useWindowSize();

  return (
    <>
      <Wrapper>
        {screenWidth >= 768 && (
          <LeftContainer>
            <PictureWrapper>
              <picture>
                <source
                  srcSet={`${LogInImg_tab1} 1x, ${LogInImg_tab2} 1x`}
                  media="(max-width: 1279px)"
                />
                <source
                  srcSet={`${LogInImg_desk1} 1x, ${LogInImg_desk2} 2x`}
                  media="(min-width: 1280px)"
                />
                <Picture src={LogInImg_desk2} alt="jar with milk" />
              </picture>
              <Title>Finance App</Title>
            </PictureWrapper>
          </LeftContainer>
        )}

        <RightContainer>
          <AuthenticationForms />
        </RightContainer>

        {screenWidth >= 768 && <BgElipses />}
      </Wrapper>
      {screenWidth >= 1280 && <BgFilter />}
    </>
  );
};

export default AuthenticationPage;
