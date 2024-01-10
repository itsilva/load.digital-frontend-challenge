import { LayoutProps } from "./layout.props";
import { Header, Wrapper } from "./layout.styles";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <b>Where in the world?</b>
        <p>Dark Mode</p>
      </Header>
      {children}
    </Wrapper>
  );
};

export default Layout;
