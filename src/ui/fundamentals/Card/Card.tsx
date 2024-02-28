import { CardProps } from "./Card.types.ts";
import { Text, Heading } from "../../fundamentals";

export const Card = (props: CardProps) => {
  const {
    title,
    description,
    category,
    featureImage,
    alt,
    avatarImage,
    author,
    className,
    ...domProps
  } = props;

  return (
    <article {...domProps} className="@container">
      <div className="@lg:flex">
        <div>
          <img className="aspect-video" src={featureImage} alt={alt} />
        </div>
        <div>
          <Text size="sm">{category}</Text>
          <Heading variant="h2" size="md">
            {title}
          </Heading>
          <Text size="md">{description}</Text>
          <div className="flex">
            <img src={avatarImage} alt="" />
            <Text size="sm">{author}</Text>
          </div>
        </div>
      </div>
    </article>
  );
};
