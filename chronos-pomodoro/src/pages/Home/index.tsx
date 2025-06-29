import { Container } from "../../Components/Container";
import { Countdown } from "../../Components/Countdown";
import { MainForm } from "../../Components/MainForm";
import { MainTemplate } from "../../templates/MainTemplate";

export const Home = () => {
  return (
    <MainTemplate>
      <Container>
        <Countdown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
};
