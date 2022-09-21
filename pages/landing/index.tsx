import styled from "styled-components";
import Heading from "../../components/landing/header";
import Nav from "../../components/nav";

const Landing = () => {
  return (
    <>
      <Nav />
      <Div>
        <Heading />
      </Div>
    </>
  );
};

// This is how you pass props
interface IProps {
  hello?: string;
}

const Div = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 480px) {
    display: grid;
    grid-template-columns: 40% 60%;
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`;

export default Landing;
