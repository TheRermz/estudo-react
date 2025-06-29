import type { ReactNode } from "react";
import { Container } from "../../Components/Container";
import { Footer } from "../../Components/Footer";
import { Logo } from "../../Components/Logo";
import { Menu } from "../../Components/Menu";

type MainTemplateProps = {
  children: ReactNode;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
};
