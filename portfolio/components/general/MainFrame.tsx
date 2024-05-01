import { Box, Icon, chakra, shouldForwardProp } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { ENTRY_DELAY, PAGE_TRANSITION_DURATION } from "@/utils/motion";
import { useAppContext } from "@/context/state";

const FrameContainer = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function MainFrame({
  gradientTheme,
}: {
  gradientTheme: string[];
}) {
  const { isEntryComplete } = useAppContext();

  const FrameIconLeft = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...props}>
      <defs>
        <linearGradient id="myGradient" x1="0%" x2="100%" y1="100%" y2="0%">
          <stop offset="0%" stopColor={gradientTheme[0]}></stop>
          <stop offset="50%" stopColor={gradientTheme[1]}></stop>
          <stop offset="100%" stopColor={gradientTheme[0]}></stop>
        </linearGradient>
      </defs>
      <g id="frame-left">
        <path
          id="pathLeft"
          d="M17.930 0.434 C 10.098 1.404,3.409 7.265,1.167 15.123 L 0.717 16.701 0.665 208.197 L 0.613 399.693 13.933 386.374 L 27.252 373.056 27.304 207.686 L 27.357 42.316 27.929 40.487 C 30.098 33.565,35.258 28.774,42.051 27.375 C 43.486 27.079,58.673 27.049,208.445 27.049 L 373.259 27.049 386.680 13.627 L 400.101 0.205 209.733 0.231 C 103.835 0.245,18.728 0.336,17.930 0.434 "
          fill="url('#myGradient')"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
  const FrameIconRight = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...props}>
      <g id="frame-right">
        <path
          id="pathRight"
          d="M386.629 13.883 L 373.361 27.153 373.361 191.817 C 373.361 306.011,373.295 356.855,373.145 357.698 C 371.869 364.904,366.778 370.464,359.523 372.578 L 357.889 373.053 192.519 373.106 L 27.148 373.158 13.831 386.476 L 0.513 399.795 191.394 399.792 C 376.756 399.790,382.328 399.779,384.123 399.408 C 391.447 397.897,397.132 392.630,399.425 385.232 L 399.898 383.709 399.949 225.717 C 399.978 138.822,399.978 52.625,399.949 34.169 L 399.898 0.614 386.629 13.883 "
          fill="url('#myGradient')"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );

  const length = {
    base: "12rem",
    sm: "3xs",
    md: "2xs",
    lg: "xs",
    xl: "sm",
    "2xl": "lg",
  };

  return (
    <Box
      position="absolute"
      width="full"
      height="70vh"
      minHeight={{
        base: "lg",
        md: "xl",
        lg: "38rem",
      }}
    >
      <FrameContainer
        position="absolute"
        top={0}
        left={0}
        initial={
          isEntryComplete
            ? {
                opacity: 1,
              }
            : {
                opacity: 0,
                x: "-10vw",
                y: "-10vw",
              }
        }
        animate={
          isEntryComplete
            ? {}
            : {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  duration: PAGE_TRANSITION_DURATION,
                  delay: ENTRY_DELAY,
                  type: "tween",
                  ease: "anticipate",
                },
              }
        }
      >
        <Icon
          as={FrameIconLeft}
          position="absolute"
          top={0}
          left={0}
          boxSize={length}
        />
      </FrameContainer>
      <FrameContainer
        initial={
          isEntryComplete
            ? {
                opacity: 1,
              }
            : {
                opacity: 0,
                x: "10vw",
                y: "10vw",
              }
        }
        animate={
          isEntryComplete
            ? {}
            : {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  duration: PAGE_TRANSITION_DURATION,
                  delay: ENTRY_DELAY,
                  type: "tween",
                  ease: "anticipate",
                },
              }
        }
        position="absolute"
        right={0}
        bottom={0}
      >
        <Icon
          as={FrameIconRight}
          position="absolute"
          right={0}
          bottom={0}
          boxSize={length}
        />
      </FrameContainer>
    </Box>
  );
}
