import { HeadingSectionProps } from "./HeadingSection.types.ts";
import { Container, Heading, Text } from "../../fundamentals";
import { cn } from "../../../utils/helpers.ts";

export const HeadingSection = (props: HeadingSectionProps) => {
  const { size, variant, header, description, className, ...domProps } = props;

  return (
    <Container className="text-center">
      <Heading
        variant={variant}
        size={size}
        className={cn(className)}
        {...domProps}
      >
        {header}
      </Heading>
      <Text size="lg" className="mt-4">
        {" "}
        {description}{" "}
      </Text>
    </Container>
  );
};
