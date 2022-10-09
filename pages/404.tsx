import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import Nav from "../components/nav";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }, []);

  return (
    <>
      <Nav />
      <Div>
        <h1>Oops! It looks like I have not finished this page :(</h1>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80vh;
  margin-inline: 3em;
`;

export default Custom404;
