import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./Components/Container";
import { Logo } from "./Components/Logo";
import { Menu } from "./Components/Menu";
import { Countdown } from "./Components/Countdown";
import { Input } from "./Components/Input";
import { Cycles } from "./Components/Cycles";
import { Button } from "./Components/Button";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./Components/Footer";

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

      <Container>
        <form className="form">
          <div className="formRow">
            <Input
              id="teste"
              placeholder="Digite algo"
              labelText="task"
              type="text"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <Button
              icon={
                <>
                  <PlayCircleIcon />
                </>
              }
            />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default App;
