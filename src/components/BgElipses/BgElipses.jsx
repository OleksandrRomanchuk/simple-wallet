import { EllipseIcon } from 'components/shared/Icons/EllipseIcon';

import { PinkEllipses, VioletEllipses } from './BgElipses.styled';

const BgElipses = () => {
  return (
    <>
      <PinkEllipses>
        <EllipseIcon fill={'#FFD8D0'} />
      </PinkEllipses>
      <VioletEllipses>
        <EllipseIcon fill={'#C5BAFF'} />
      </VioletEllipses>
    </>
  );
};

export default BgElipses;
