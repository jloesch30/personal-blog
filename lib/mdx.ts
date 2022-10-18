import matter from "gray-matter";
import readingTime from "reading-time";
import { bundleMDX } from "mdx-bundler";
import { join } from "path";
import { readdirSync, readFileSync } from "fs";

import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

const postDirectory = join(process.cwd(), "posts");

export function getAllPostSlugs() {
  const fileNames = readdirSync(postDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export function getBlogPostData(slug: string) {
  const fullPath = join(postDirectory, `${slug}.mdx`);
  const postContent = readFileSync(fullPath, "utf8");

  return postContent;
}

export async function getPostData(slug: string) {
  const fullPath = join(postDirectory, `${slug}.mdx`);
  const source = readFileSync(fullPath, "utf8");

  const { code, frontmatter } = await bundleMDX({
    source: source,
    // @ts-ignore
    xdmOptions(options: any) {
      options.rehypePlugins = [...(options?.rehypePlugins ?? []), rehypePrism];
      return options;
    },
  });

  return {
    slug,
    frontmatter,
    code,
  };
}
