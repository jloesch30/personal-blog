import styled from "styled-components";

const Heading = () => {
  return (
    <>
      <Div>
        <H1>I'm</H1>
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
  color: #eb583f;
  font-family: "Bungee";
  font-style: normal;
  font-weight: bolder;
  font-size: 128px;
  margin-left: 0.2em;
`;

const H2 = styled.h1`
  align-self: center;
  font-family: "Bungee Shade";
  font-style: normal;
  font-weight: 400;
  font-size: 128px;
  line-height: 154px;
`;

export default Heading;
