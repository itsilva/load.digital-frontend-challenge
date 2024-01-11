import { FaMoon } from "react-icons/fa";
import { LayoutProps } from "./layout.props";
import { Container, Header, Title, Wrapper } from "./layout.styles";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <Title onClick={() => window?.location?.replace("/")}>
          Where in the world?
        </Title>
        <Container
          onClick={() =>
            alert("We are deeply sorry, but this feature is under development")
          }
        >
          <FaMoon />
          <p>Dark Mode</p>
        </Container>
      </Header>
      {children}
    </Wrapper>
  );
};

export default Layout;
