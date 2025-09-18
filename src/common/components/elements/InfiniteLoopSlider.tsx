import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface InfiniteLoopSliderProps {
  children: ReactNode;
  isReverse?: boolean;
}

const InfiniteLoopSlider = ({
  children,
  isReverse = false,
}: InfiniteLoopSliderProps) => {
  return (
    <SliderWrapper>
      <StyledSlider className='flex w-fit' isReverse={isReverse}>
        <div className='flex'>{children}</div>
        <div className='flex' aria-hidden='true'>
          {children}
        </div>
      </StyledSlider>
    </SliderWrapper>
  );
};

export default InfiniteLoopSlider;

const SliderWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 70vw; /* Prevent overflow beyond viewport */

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 80px;
    height: 100%;
    z-index: 10;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  /* Dark mode */
  .dark & {
    &::before {
      background: linear-gradient(
        90deg,
        rgba(18, 18, 18, 1) 0%,
        rgba(18, 18, 18, 0) 100%
      );
    }

    &::after {
      background: linear-gradient(
        270deg,
        rgba(18, 18, 18, 1) 0%,
        rgba(18, 18, 18, 0) 100%
      );
    }
  }
`;

const StyledSlider = styled.div<{ isReverse: boolean }>`
  animation: loop 100s linear infinite;
  animation-direction: ${({ isReverse }) => (isReverse ? 'reverse' : 'normal')};

  &:hover {
    animation-play-state: paused;
  }

  @keyframes loop {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;
