import ExperienceCard from "./ExperienceCard";
import {
  Button,
  HStack,
  Heading,
  Icon,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import experiences from "@/data/experiences.json";
import { Experience } from "@/utils/types";
import { FaRegFilePdf } from "react-icons/fa";
import { resumeFileName } from "@/utils/links";

export default function ExperienceSummary() {
  function displayExperiences(experiences: Experience[]) {
    const allWork = [];
    for (let i = 0; i < experiences.length; i++) {
      const key = `${experiences[i].title}-card`;
      const newWork = <ExperienceCard key={key} experience={experiences[i]} />;
      allWork.push(newWork);
    }

    return allWork;
  }

  function ResumeButton() {
    return (
      <VStack width="full" alignItems="start">
        <LinkBox>
          <Button
            variant="outline"
            width={{ base: "12rem", xl: "16rem" }}
            borderColor={useColorModeValue("gray.2", "gray.5")}
          >
            <HStack>
              <Icon
                as={FaRegFilePdf}
                color={useColorModeValue("gray.2", "gray.5")}
                boxSize={{
                  base: "1rem",
                  xl: "1.5rem",
                }}
              />
              <Text variant="powerful" fontSize={{ base: "md", xl: "lg" }}>
                <LinkOverlay href={resumeFileName} isExternal>
                  View My Resume
                </LinkOverlay>
              </Text>
            </HStack>
          </Button>
        </LinkBox>
      </VStack>
    );
  }

  const { work, education } = experiences;
  return (
    <VStack
      align="inherit"
      spacing={{
        base: "4rem",
        md: "5rem",
        xl: "6rem",
        "2xl": "7rem",
      }}
    >
      <VStack
        align="inherit"
        spacing={{
          base: "1rem",
          md: "1.5rem",
          xl: "2rem",
          "2xl": "2.5rem",
        }}
      >
        <Heading variant="primary" textAlign="left">
          About Me
        </Heading>
        <Text
          variant="paragraph"
          fontSize={{ base: "md", md: "lg", xl: "xl", "2xl": "2xl" }}
        >
          {
            "As a Full Stack Engineer, I have a passion for crafting efficient and innovative solutions for complex problems. Currently, I am part of the dynamic team at Sap Labs, where I leverage my skills in TypeScript, Node.js, Elixir/Erlang, React.js, postgres, and Kubernetes to develop both frontend and backend components for Sap CBC, a cloud-based platform for business continuity. In my role, I operate in an agile development environment, collaborating with cross-functional teams to design and deploy features that enhance the functionality and performance of Sap CBC. Some of the features I have contributed to include MultiLanguageSupport and CLT, which enable the platform to support multiple languages and handle large-scale data processing. I also tackle critical bugs that come from various sources, ensuring the seamless functionality of our product. My work has resulted in improved user satisfaction, retention, and engagement."
          }
        </Text>
        <ResumeButton />
      </VStack>
      <VStack
        align="inherit"
        spacing={{
          base: "1rem",
          md: "1.5rem",
          xl: "2rem",
          "2xl": "2.5rem",
        }}
      >
        <Heading variant="subPrimary" textAlign="left">
          Work Experience
        </Heading>
        <VStack
          align="inherit"
          spacing={{
            base: "0.5rem",
            md: "0.75rem",
            xl: "1rem",
            "2xl": "1.25rem",
          }}
        >
          {displayExperiences(work)}
        </VStack>
      </VStack>
      <VStack
        align="inherit"
        spacing={{
          base: "1rem",
          md: "1.5rem",
          xl: "2rem",
          "2xl": "2.5rem",
        }}
      >
        <Heading variant="subPrimary" textAlign="left">
          Education
        </Heading>
        <VStack
          align="inherit"
          spacing={{
            base: "0.5rem",
            md: "0.75rem",
            xl: "1rem",
            "2xl": "1.25rem",
          }}
        >
          {displayExperiences(education)}
        </VStack>
      </VStack>
    </VStack>
  );
}
