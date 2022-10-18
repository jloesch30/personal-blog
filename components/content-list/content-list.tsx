/*
 * Get content list from items in blog
 * folder
 */
const ContentList = ({ items }) => {
  return (
    <Ul>
      {items.map((item) => {
        return (
          <Li key={item.slug}>
            <Link href={`/blog/${item.slug}`}>
              <a>
                <H3>{item.title}</H3>
              </a>
            </Link>
          </Li>
        );
      })}
    </Ul>
  );
};

export async function getStaticProps() {
  const items = await getItems();
  return {
    props: {
      items,
    },
  };
}
