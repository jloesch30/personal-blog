import { PostParams } from "../../pages/blog/types";

const ContentList = ({ posts }: { posts: PostParams[] }) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
        </div>
      ))}
    </>
  );
};

export { ContentList };
