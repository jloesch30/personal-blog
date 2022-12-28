import styled from "styled-components";
import Heading from "../components/landing/header";
import LandingContent from "../components/landing/content";
import Nav from "../components/nav/nav";

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

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 750px) {
    display: grid;
    grid-template-columns: 40% 60%;
    padding-block: 2rem;
    box-shadow: 0px 0px 10px 5px grey;
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: 1em;
`;

export default Index;
