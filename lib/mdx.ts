import { bundleMDX } from "mdx-bundler";
import path, { join } from "path";
import { readdirSync, readFileSync } from "fs";
import rehypePrism from "rehype-prism-plus";
import matter from "gray-matter";

export const ROOT = process.cwd();
export const POSTS_PATH = path.join(ROOT, "/posts");

const postDirectory = join(process.cwd(), "posts");

export function getPostsGrayMatter() {
  const contents = readdirSync(postDirectory);
  const onlyFiles = contents.filter((name) => {
    return name.endsWith(".mdx");
  });
  const allPostsData = onlyFiles.map((fileName) => {
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug: fileName.replace(/\.mdx$/, ""),
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
      description: matterResult.data.description,
    };
  });
  return allPostsData;
}

export function getAllPostSlugs() {
  const contents = readdirSync(POSTS_PATH);
  const onlyFiles = contents.filter((name) => {
    return name.endsWith(".mdx");
  });
  return onlyFiles.map((fileName) => {
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

  try {
    if (process.platform === "win32") {
      process.env.ESBUILD_BINARY_PATH = path.join(
        ROOT,
        "node_modules",
        "esbuild",
        "esbuild.exe"
      );
    } else {
      process.env.ESBUILD_BINARY_PATH = path.join(
        ROOT,
        "node_modules",
        "esbuild",
        "bin",
        "esbuild"
      );
    }
    const { code, frontmatter } = await bundleMDX({
      cwd: POSTS_PATH,
      source: source,
      globals: {
        "next/router": "Router",
        "next/link": "Link",
        "next/image": "Image",
      },
      esbuildOptions: (options) => {
        options.define = {
          "process.env.__NEXT_TRAILING_SLASH": JSON.stringify(
            process.env.__NEXT_TRAILING_SLASH
          ),
          "process.env.__NEXT_IMAGE_OPTS": JSON.stringify(
            process.env.__NEXT_IMAGE_OPTS
          ),
          "process.env.__NEXT_REACT_ROOT": JSON.stringify(
            process.env.__NEXT_REACT_ROOT
          ),
          "process.env.__NEXT_OPTIMIZE_FONTS": JSON.stringify(
            process.env.__NEXT_OPTIMIZE_FONTS
          ),
        };
        return options;
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      xdmOptions(options: any) {
        options.rehypePlugins = [
          ...(options?.rehypePlugins ?? []),
          rehypePrism,
        ];
        return options;
      },
    });
    return {
      slug,
      frontmatter,
      code,
    };
  } catch (e: any) {
    throw new Error(e);
  }
}
