import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const H1 = ({ children }: Props): JSX.Element => (
  <StyledH1>{children}</StyledH1>
);

const H2 = ({ children }: Props): JSX.Element => (
  <StyledH2>{children}/</StyledH2>
);

const StyledH1 = styled.h1`
  color: ${(props) => props.theme.typography.base.h1.color};
  font-family: "Bungee";
`;

const StyledH2 = styled.h1`
  color: red;
`;

export { H1, H2 };
