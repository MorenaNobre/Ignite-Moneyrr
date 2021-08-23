import faviconLogo from "../../assets/favicon.png";
import { Container, Content, LogoContainer } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={faviconLogo} alt="moneyrr logo" />
          <h1>moneyrr</h1>
        </LogoContainer>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
