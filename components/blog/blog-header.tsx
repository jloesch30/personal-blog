import styled from "styled-components";

const BlogHeader = () => {
  return (
    <Div>
      <H1>What&apos;s</H1>
      <H2>New?</H2>
      <SubtitleDiv>
        <P>Keep up with what I am working on and general brain dumps</P>
      </SubtitleDiv>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-inline: 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  font-family: "Bungee";
`;

const H2 = styled(H1)`
  font-family: "Bungee Shade";
`;

const P = styled.p`
  font-size: 1em;
  color: white;
`;

const SubtitleDiv = styled.div`
  display: flex;
  text-align: center;
  background-color: ${(props) => props.theme.palette.primary.main};
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 0 0 ${(props) => props.theme.palette.common.gray};
  border: 0.1rem solid black;
  margin-top: 1em;
`;

export { BlogHeader };
