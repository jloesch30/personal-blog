import Nav from "../../components/nav/nav";
import { GetStaticProps } from "next/types";
import { PostParams } from "../../components/blog/types";
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
}> = () => {
  const posts = getPostsGrayMatter();
  return {
    props: {
      posts,
    },
  };
};

export default BlogHome;
