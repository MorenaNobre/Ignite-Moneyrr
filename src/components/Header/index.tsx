import faviconLogo from "../../assets/favicon.png";
import { Container, Content, LogoContainer } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={faviconLogo} alt="moneyrr logo" />
          <h1>moneyrr</h1>
        </LogoContainer>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
