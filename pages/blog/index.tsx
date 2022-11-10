import Nav from "../../components/nav/nav";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { PostParams } from "./types";
import { getPostsGrayMatter } from "../../lib/mdx";
import { ContentList } from "../../components/blog/content-list";
import { BlogHeader } from "../../components/blog";

const BlogHome = ({ posts }: { posts: PostParams[] }) => {
  return (
    <div>
      <Nav />
      <div>
        <BlogHeader />
        <ContentList posts={posts} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  posts: PostParams[];
}> = async () => {
  const posts = getPostsGrayMatter();
  return {
    props: {
      posts,
    },
  };
};

export default BlogHome;
