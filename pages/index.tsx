import styled from "styled-components";
import Heading from "../components/landing/header";
import LandingContent from "../components/landing/content";
import Nav from "../components/nav/nav";
import Link from "next/link";
import logo from "../assets/logo-srp.png";
import Image from "next/image";

const Index = () => {
  return (
    <>
      <Nav />
      <div>
        <StyledHeaderContainer>
          <div>
            <Heading />
            <LandingContent />
          </div>
        </StyledHeaderContainer>
        <StyledBody>
          <h1>What am I up to?</h1>
          <p>
            I am currently a Fullstack Software Engineer in Austin, TX working
            with{" "}
            <Link href={"https://www.srpatx.com"} target="_blank">
              Stronghold Resource Partners.
            </Link>{" "}
            My work consits of building out core business applications and
            integrate them with various business units. In my spare time, I
            enjoy developing freelance applications or dabbling in photography.
          </p>
        </StyledBody>
      </div>
    </>
  );
};

const StyledHeaderContainer = styled.div`
  @media screen and (min-width: 750px) {
    background-color: ${(props) => props.theme.palette.primary.main};
    box-shadow: 0px 0px 10px 5px grey;
    padding-bottom: 4rem;
  }

  > div:first-child {
    display: flex;
    flex-direction: column;
    margin-inline: 10%;
    @media screen and (min-width: 750px) {
      gap: 40px;
      flex-direction: row;
      max-width: 1500px;
    }
  }
`;

const StyledBody = styled.div`
  margin-top: 3rem;
  margin-inline: 10%;
  max-width: 1500px;
  margin-bottom: 10rem;

  > h1 {
    color: ${(props) => props.theme.palette.common.black};
    margin-bottom: 0.25em;
  }
`;

export default Index;
