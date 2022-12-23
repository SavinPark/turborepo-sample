import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Button } from "ui";

export default function Docs() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("docs")}</h1>
      <Button />
      <hr />
      <a href="/">Default ( KO ) ✨</a>
      <br />
      <a href="/ko">KO ✨</a>
      <br />
      <a href="/en">EN ✨</a>
      <hr />
      <a href="/about">[Docs] About ( http://localhost:3001/about )</a>
      <hr />
      <a href="/post/1">[Docs] Post 1 ( http://localhost:3001/post/1 )</a>
      <br />
      <a href="/post/2">[Docs] Post 2 ( http://localhost:3001/post/2 )</a>
      <br />
      <a href="/post/3">[Docs] Post 3 ( http://localhost:3001/post/3 )</a>
    </>
  );
}

export const getStaticProps = async ({ locale, defaultLocale }: any) => ({
  props: {
    ...(await serverSideTranslations((locale || defaultLocale) as string)),
  },
});
