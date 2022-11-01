import Nav from "../../components/nav/nav";
import { getPostsGrayMatter } from "../../lib/mdx";
import { PostParams } from "./types";

interface BlogHomeProps {
  posts: PostParams[];
}

const BlogHome = ({ posts }: BlogHomeProps) => {
  return (
    <div>
      <h1>Content</h1>
      {posts.map((post) => {
        console.log(post);
        return (
          <div>
            <h2>{post.title}</h2>
            <p>
              <small>{post.description}</small>
            </p>
          </div>
        );
      })}
      <Nav />
    </div>
  );
};

// get all post slugs
export async function getStaticProps() {
  const posts = getPostsGrayMatter();
  return {
    props: {
      posts,
    },
  };
}

export default BlogHome;
