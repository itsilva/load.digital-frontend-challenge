/** Styles */
import {
  CardContent,
  CardHeader,
  CardLink,
  Flag,
  Label,
  Paragraph,
  Text,
  Title,
  Wrapper,
} from "./card.styles";

/** Types */
import { CardProps } from "./card.props";

const Card: React.FC<CardProps> = ({ details: data }) => {
  return (
    <Wrapper>
      <CardLink to={`/countries/details/${data?.cca3}`}>
        <CardHeader>
          <Flag src={data?.flags?.png} alt={data?.flags?.alt} />
        </CardHeader>
        <CardContent>
          <Title>{data?.name?.official}</Title>
          <Paragraph>
            <Label>Population:</Label>
            <Text>{data?.population?.toLocaleString("en-US")}</Text>
          </Paragraph>
          <Paragraph>
            <Label>Region:</Label>
            <Text>{data?.region}</Text>
          </Paragraph>
          <Paragraph>
            <Label>Capital:</Label>
            <Text>{data?.capital}</Text>
          </Paragraph>
        </CardContent>
      </CardLink>
    </Wrapper>
  );
};

export default Card;
