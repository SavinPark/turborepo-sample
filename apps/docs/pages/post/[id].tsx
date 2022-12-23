import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Post({ posts }: any) {
  const { t } = useTranslation();
  const postNumber = posts[0].number;

  return (
    <>
      {posts.map((post: any) => (
        <div>
          <p>
            {t("postNo")} : {post.number}
          </p>
          <p>
            {t("postTitle")} : {post.title}
          </p>
          <hr />
        </div>
      ))}
      <div>
        <a href={`/post/${postNumber}`}>Default ( KO ) ✨</a>
        <br />
        <a href={`/ko/post/${postNumber}`}>KO ✨</a>
        <br />
        <a href={`/en/post/${postNumber}`}>EN ✨</a>
      </div>
    </>
  );
}

// --------- SSR :  --------- //
// export async function getServerSideProps({
//   query,
//   locale,
//   defaultLocale,
// }: any) {
//   const { id } = query;
//   const posts = [
//     { title: "제목1", number: id },
//     { title: "제목2", number: id },
//     { title: "제목3", number: id },
//   ];
//   return {
//     props: {
//       posts,
//       ...(await serverSideTranslations((locale || defaultLocale) as string)),
//     },
//   };
// }

// --------- getInitialProps :  --------- //
// next-i18next를 사용할 경우 getInitialProps와 serverSideTranslations 호환되지 않기 때문에 getInitialProps 는 사용 불가
Post.getInitialProps = async ({ query, locale, defaultLocale }: any) => {
  const { id } = query;
  const posts = [
    { title: "제목1", number: id },
    { title: "제목2", number: id },
    { title: "제목3", number: id },
  ];
  return {
    posts,
    // ...(await serverSideTranslations((locale || defaultLocale) as string)),
  };
};

// --------- SSG : 페이지의 path가 외부의 데이터에 의존하는 경우 --------- //
// export async function getStaticPaths() {
//   const paths = [
//     { params: { id: "1" } },
//     { params: { id: "2" } },
//     { params: { id: "3" } },
//   ];

//   return { paths, fallback: false };
// }
// export async function getStaticProps({ params }: any) {
//   return {
//     props: {
//       posts: [
//         { title: "제목1", number: params.id },
//         { title: "제목2", number: params.id },
//       ],
//     },
//   };
// }

export default Post;
