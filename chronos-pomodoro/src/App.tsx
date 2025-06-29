import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./Components/Container";
import { Heading } from "./Components/Heading";
import { TimerIcon } from "lucide-react";

export const App = () => {
  return (
    <>
      <Container>
        <Heading>
          Marcos Noronha
          <button>
            <TimerIcon />
          </button>
        </Heading>
      </Container>
      <Container>
        <section>MENU</section>
      </Container>
      <Container>
        <section>FORM</section>
      </Container>
      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  );
};

export default App;
