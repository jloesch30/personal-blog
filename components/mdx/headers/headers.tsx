import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  props?: any;
}

const H1 = ({ children, props }: Props): JSX.Element => (
  <StyledH1 {...props}>{children}</StyledH1>
);

const H2 = ({ children, props }: Props): JSX.Element => (
  <StyledH2 {...props}>{children}</StyledH2>
);

const H3 = ({ children, props }: Props): JSX.Element => (
  <StyledH2 {...props}>{children}</StyledH2>
);

const StyledH1 = styled.h1`
  color: ${(props) => props.theme.typography.base.h1.color};
  font-family: "Bungee";
`;

const StyledH2 = styled.h2`
  color: ${(props) => props.theme.typography.base.h2.color};
  font-family: "Bungee";
`;

export { H1, H2, H3 };
