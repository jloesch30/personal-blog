import Link from "next/link";
import styled from "styled-components";
import { MailOutline, ListOutline, HomeOutline } from "react-ionicons";

const Nav = () => {
  return (
    <NavContainer>
      <Div>
        <Link href={"/"}>
          <a>
            <StyledHome />{" "}
          </a>
        </Link>
        <Link href={"/blog"}>
          <a>
            <StyledList />{" "}
          </a>
        </Link>
        <Link href={"/connect"}>
          <a>
            <StyledMail />{" "}
          </a>
        </Link>
      </Div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: fixed; /* positioned absolute to its parent */
  z-index: 1;
  bottom: 0px;
  width: 100%;
`;

const Div = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  background-color: #fff0db;
  border-radius: 32px;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
  margin-inline: auto;
  margin-bottom: 0.5em;
  width: 200px;
  padding: 1em;
`;

const StyledList = styled(ListOutline)`
  svg {
    &:hover {
      color: red;
    }
  }
`;
const StyledHome = styled(HomeOutline)`
  svg {
    &:hover {
      color: red;
    }
  }
`;
const StyledMail = styled(MailOutline)`
  svg {
    &:hover {
      color: red;
    }
  }
`;

export default Nav;
