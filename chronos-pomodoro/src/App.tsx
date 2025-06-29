import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./Components/Container";
import { Logo } from "./Components/Logo";
import { Menu } from "./Components/Menu";
import { Countdown } from "./Components/Countdown";

export const App = () => {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Countdown />
      </Container>
    </>
  );
};

export default App;
