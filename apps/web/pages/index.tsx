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
    </div>
  );
}

export const getStaticProps = async ({ locale, defaultLocale }: any) => ({
  props: {
    ...(await serverSideTranslations((locale || defaultLocale) as string)),
  },
});
