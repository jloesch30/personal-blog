import styled from "styled-components";
import Nav from "../../components/nav/nav";
import { Form as ConnectForm } from "../../components/connect/form";

const Connect = () => {
  return (
    <div>
      <Nav />
      <Content>
        <Headers>
          <H1>Connect</H1>
          <H2>With me!</H2>
          <p>Feel free to reach out</p>
        </Headers>
        <ConnectForm />
      </Content>
    </div>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-inline: 2rem;
`;

const Headers = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  font-family: "Bungee";
`;

const H2 = styled(H1)`
  font-size: 2.5rem;
  font-family: "Bungee Shade";
`;

export default Connect;
