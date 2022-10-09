import styled from "styled-components";
import Heading from "../components/landing/header";
import Nav from "../components/nav";
import LandingContent from "../components/landing/content";

const Index = () => {
  return (
    <>
      <Nav />
      <Div>
        <Heading />
        <Body>
          <LandingContent />
        </Body>
      </Div>
    </>
  );
};

// This is how you pass props
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 430px) {
    display: grid;
    grid-template-columns: 40% 60%;
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: 1em;
`;

export default Index;
