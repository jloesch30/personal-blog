import styled from "styled-components";
import Heading from "../components/landing/header";
import LandingContent from "../components/landing/content";
import Nav from "../components/nav/nav";
import Link from "next/link";
import Image from "next/image";
import logo from "assets/logos.png";

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
          <div>
            <h1>What am I up to?</h1>
            <p>
              I am currently a Fullstack Software Engineer in Austin, TX working
              with{" "}
              <Link href={"https://www.srpatx.com"} target="_blank">
                Stronghold Resource Partners.
              </Link>{" "}
              My work consits of building out core business applications and
              integrating them with various business units. In my spare time, I
              enjoy developing freelance applications or dabbling in
              photography.
            </p>
          </div>
          <div>
            <h1>Some of the things I work with...</h1>
            <p>
              Python, Ruby, Typescript, Javascript, SQL, Azure, Kafka, Redis,
              etc..
            </p>
            <ImageWrapper>
              <Image src={logo} height={350} width={350} alt="logos" />
            </ImageWrapper>
          </div>
        </StyledBody>
      </div>
    </>
  );
};

const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: 0rem auto !important;
  margin-bottom: 10rem;

  > div {
    margin-inline: 10%;
    margin-top: 2rem;

    > h1 {
      color: ${(props) => props.theme.palette.common.black};
      margin-bottom: 0.25em;
    }
  }

  > div:last-child {
    margin-bottom: 6rem;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export default Index;
