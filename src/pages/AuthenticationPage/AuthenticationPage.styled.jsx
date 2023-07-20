import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;

    height: 720px;
  }
`;

const LeftContainer = styled.div`
  display: flex;

  width: 100%;
  padding-top: ${({ theme }) => theme.space[6] - 4 + 'px'};
  padding-left: ${({ theme }) => theme.space[5] * 3 - 2 + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 42%;
    padding-top: ${({ theme }) => theme.space[4] * 10 - 10 + 'px'};
    padding-left: 0;
  }
`;

const PictureWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3] * 5 + 'px'};

  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;

    gap: ${({ theme }) => theme.space[5] - 4 + 'px'};
  }
`;

const Picture = styled.img`
  position: relative;

  z-index: 1;
`;

const Title = styled.h1`
  position: relative;

  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  font-size: ${({ theme }) => theme.fontSizes[6]};

  z-index: 1;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.space[4] * 3 + 2 + 'px'};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 58%;

    margin-top: ${({ theme }) => theme.space[0]};
  }
`;

const BgFilter = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 42%;
  right: -20px;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(25px);

  z-index: 1;
`;

export {
  Wrapper,
  LeftContainer,
  PictureWrapper,
  Picture,
  Title,
  RightContainer,
  BgFilter,
};
