import Link from "next/link";
import styled from "styled-components";
import { PostParams } from "../../components//blog/types";

const ContentList = ({ posts }: { posts: PostParams[] }) => {
  return (
    <>
      {posts.map((post) => (
        <Div key={post.slug}>
          <Link
            href="/blog/[slug]"
            as={`/blog/${post.slug}`}
            passHref
            legacyBehavior
          >
            <A>{post.title}</A>
          </Link>
          <p>{post.date}</p>
        </Div>
      ))}
    </>
  );
};

const Div = styled.div`
  display: grid;
  margin-inline: 3em;

  @media screen and (min-width: 580px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const A = styled.a`
  font-size: 1.5em;
  font-family: "Bungee";
  text-decoration: none;
  color: ${(props) => props.theme.palette.common.black};
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    color: ${(props) => props.theme.palette.secondary.main};
  }

  @media screen and (min-width: 580px) {
    font-size: 2em;
  }
`;

export { ContentList };
