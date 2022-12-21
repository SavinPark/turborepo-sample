import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Button } from "ui";

export default function Docs() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("docs")}</h1>
      <Button />
      <hr />
      <a href="http://localhost:3001/">Default ( KO ) ✨</a>
      <br />
      <a href="http://localhost:3001/ko/">KO ✨</a>
      <br />
      <a href="http://localhost:3001/en">EN ✨</a>
    </div>
  );
}

export const getStaticProps = async ({ locale, defaultLocale }: any) => ({
  props: {
    ...(await serverSideTranslations((locale || defaultLocale) as string)),
  },
});
