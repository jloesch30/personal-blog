import styled from "styled-components";
import Nav from "../../components/nav/nav";
import { Form as ConnectForm } from "../../components/connect/form";

const Connect = () => {
  return (
    <ConnectContainer>
      <Nav />
      <Content>
        <Headers>
          <H1>Connect</H1>
          <H2>With me!</H2>
          <p>Feel free to reach out</p>
        </Headers>
        <div id="connect-form">
          <ConnectForm />
        </div>
      </Content>
    </ConnectContainer>
  );
};

const ConnectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;
  margin-inline: 2rem;
  max-width: 500px;

  div#connect-form {
    margin-inline: 1rem;
  }
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
