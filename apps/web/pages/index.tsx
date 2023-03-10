import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Button } from "ui";

export default function Docs() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("web")}</h1>
      <Button />
      <hr />
      <a href="/">Default ( KO ) ✨</a>
      <br />
      <a href="/ko">KO ✨</a>
      <br />
      <a href="/en">EN ✨</a>
      <hr />
      <a href="/about">[Web] About ( http://localhost:3000/about )</a>
      <hr />
      <a href="/post/1">[Web] Post 1 ( http://localhost:3000/post/1 )</a>
      <br />
      <a href="/post/2">[Web] Post 2 ( http://localhost:3000/post/2 )</a>
      <br />
      <a href="/post/3">[Web] Post 3 ( http://localhost:3000/post/3 )</a>
    </>
  );
}

export const getStaticProps = async ({ locale, defaultLocale }: any) => ({
  props: {
    ...(await serverSideTranslations((locale || defaultLocale) as string)),
  },
});
