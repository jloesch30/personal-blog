import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import {
  getPostData,
  getAllPostSlugs,
} from "../../lib/mdx";

const BlogPost = ({code, frontmatter}) => {
  const Component = useMemo(() => getMDXComponent(code), [frontmatter]);

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <Component />
    </div>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);

  console.log(postData);

  return {
    props: {
      ...postData,
    },
  };
}
