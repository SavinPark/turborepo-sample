import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Button } from "ui";

export default function Docs() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("web")}</h1>
      <Button />
      <hr />
      <a href="http://localhost:3000/">Default ( KO ) ✨</a>
      <br />
      <a href="http://localhost:3000/ko/">KO ✨</a>
      <br />
      <a href="http://localhost:3000/en">EN ✨</a>
      <hr />
      <a href="http://localhost:3000/post/1">
        [Web] Post 1 ( http://localhost:3000/post/1 )
      </a>
      <br />

      <a href="http://localhost:3000/post/2">
        [Web] Post 2 ( http://localhost:3000/post/2 )
      </a>
      <br />

      <a href="http://localhost:3000/post/3">
        [Web] Post 3 ( http://localhost:3000/post/3 )
      </a>
    </div>
  );
}

export const getStaticProps = async ({ locale, defaultLocale }: any) => ({
  props: {
    ...(await serverSideTranslations((locale || defaultLocale) as string)),
  },
});
