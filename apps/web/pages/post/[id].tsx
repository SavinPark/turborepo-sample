function Post({ posts }: any) {
  console.log(posts);
  return (
    <>
      {/* {posts.map((post: any) => (
        <li>{post.title}</li>
        <li>{post.number}</li>
      ))} */}
      {posts.map((post: any) => (
        <div>
          <p>Post No. : {post.number}</p>
          <p>Post Title : {post.title}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

// --- SSG : 페이지의 path 가 외부의 데이터에 의존하는 경우 --- //
export async function getStaticPaths() {
  const paths = [
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
  ];

  return { paths, fallback: false };
}
export async function getStaticProps({ params }: any) {
  return {
    props: {
      posts: [
        { title: "제목1", number: params.id },
        { title: "제목2", number: params.id },
      ],
    },
  };
}
// --- SSR :  --- //
// --- ISR :  --- //

export default Post;
