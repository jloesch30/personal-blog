import styled from "styled-components";

const BlogHeader = () => {
  return (
    <Div>
      <H1>What&apos;s</H1>
      <H2>New?</H2>
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
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  font-family: "Bungee";
`;

const H2 = styled(H1)`
  font-family: "Bungee Shade";
`;

export { BlogHeader };
