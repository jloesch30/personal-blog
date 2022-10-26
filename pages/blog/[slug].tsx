import { getMDXComponent } from "mdx-bundler/client";
import { FC, useMemo } from "react";
import styled from "styled-components";
import { H1, H2, H3 } from "../../components/mdx/headers/headers";
import { getPostData, getAllPostSlugs } from "../../lib/mdx";
import Link from "next/link";
import Image from "next/image";
import { Router } from "next/router";

interface BlogPostProps {
  code: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
  };
}

const components = {
  h1: (props: any) => <H1 {...props} />,
  h2: (props: any) => <H2 {...props} />,
  h3: (props: any) => <H3 {...props} />,
};

const BlogPost: FC<BlogPostProps> = ({ code, frontmatter }) => {
  const Component = useMemo(
    () => getMDXComponent(code, { Link: Link, Image: Image, Router: Router }),
    [code]
  );

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <Div>
        <Component components={components} />
      </Div>
    </div>
  );
};

export default BlogPost;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: ${(props) =>
    props.theme.spacing.blog.content.mobile.marginInline};
`;

// eslint-disable-next-line require-await
export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  console.log(postData);

  return {
    props: {
      ...postData,
    },
  };
}
