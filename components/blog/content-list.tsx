import Link from "next/link";
import styled from "styled-components";
import { PostParams } from "../../pages/blog/types";

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
`;

const A = styled.a`
  font-size: 1.5em;
  font-family: "Bungee";
  text-decoration: none;
  color: ${(props) => props.theme.palette.common.black};
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export { ContentList };
