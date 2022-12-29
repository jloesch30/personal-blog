import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";
import Copy from "./copy.mdx";

const components = {
  h1: styled.h1`
    font-size: 2em;
    font-family: "Bungee";
    color: ${(props) => props.theme.palette.common.black};
    transition: 0.2s ease-in-out;

    @media screen and (min-width: 750px) {
      font-size: 3em;
      text-shadow: -10px 7px 0px rgba(0, 0, 0, 0.1);
    }
  `,
};

const LandingContent = () => {
  return (
    <Div>
      <MDXProvider components={components}>
        <Copy />
      </MDXProvider>
    </Div>
  );
};

const Div = styled.div`
  margin-top: 3em;

  @media screen and (min-width: 750px) {
    p {
      color: ${(props) => props.theme.palette.common.white};
    }
  }
`;

export default LandingContent;
