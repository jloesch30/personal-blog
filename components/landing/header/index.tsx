import styled from "styled-components";

const Heading = () => {
  return (
    <>
      <Div>
        <H1>I&apos;m</H1>
        <H2>Josh</H2>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

const H1 = styled.h1`
  text-shadow: -10px 7px 0px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.typography.landing.h1.color};
  font-family: "Bungee";
  font-style: normal;
  font-weight: bolder;
  font-size: ${(props) => props.theme.typography.landing.h1.fontSize};
  margin-left: 0.2em;
`;

const H2 = styled.h1`
  font-family: "Bungee Shade";
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => props.theme.typography.landing.h2.fontSize};
  margin: auto;
  line-height: 0.8em;
`;

export default Heading;
