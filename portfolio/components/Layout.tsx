import { Box, HStack, VStack, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { NextRouter } from "next/router";
import {
  ENTRY_DELAY,
  PAGE_TRANSITION_DURATION,
  footerVariants,
  navBarVariants,
  pageVariants,
} from "@/utils/motion";
import { useAppContext } from "@/context/state";
import Navbar from "./general/Navbar";
import Footer from "./general/Footer";

export default function Layout({
  router,
  children,
}: {
  router: NextRouter;
  children: React.ReactNode;
}) {
  const { isEntryComplete, completeEntry } = useAppContext();

  return (
    <HStack
      width="full"
      backgroundColor={useColorModeValue("gray.9", "gray.0")}
      overflow="hidden"
      justifyContent="center"
    >
      <VStack
        alignItems="center"
        width={{
          base: "90vw",
          md: "85vw",
          xl: "80vw",
          "2xl": "7xl",
        }}
        paddingY={{
          base: "1rem",
          md: "1.5rem",
          xl: "2rem",
          "2xl": "3rem",
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key="navbar-motion"
            initial="barInitial"
            animate="barAnimate"
            variants={navBarVariants}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.2,
              delay: ENTRY_DELAY,
            }}
            onAnimationComplete={completeEntry}
            style={{ width: "inherit" }}
          >
            <Navbar />
          </motion.div>
          <motion.div
            key={router.route}
            initial={isEntryComplete ? "pageInitial" : "pageOriginal"}
            animate="pageAnimate"
            exit="pageExit"
            variants={pageVariants}
            transition={{
              type: "tween",
              duration: isEntryComplete
                ? PAGE_TRANSITION_DURATION
                : ENTRY_DELAY + PAGE_TRANSITION_DURATION,
              ease: isEntryComplete ? "anticipate" : "easeOut",
            }}
            style={{ width: "inherit" }}
          >
            <Box minHeight="55vh">{children}</Box>
          </motion.div>
          <motion.div
            key="footer-motion"
            initial="footerInitial"
            animate="footerAnimate"
            variants={footerVariants}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.2,
              delay: ENTRY_DELAY,
            }}
            style={{ width: "inherit" }}
          >
            <Footer />
          </motion.div>
        </AnimatePresence>
      </VStack>
    </HStack>
  );
}
