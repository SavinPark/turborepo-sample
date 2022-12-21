import React from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const AboutPage: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("h1")}</h1>
      <ul>
        <li>
          {t("currentUrl")} : http://localhost:3000
          {router.locale !== "ko" && "/" + router.locale}
          {router.pathname}
        </li>
        <li>locale: {router.locale}</li>
        <li>pathname: {router.pathname}</li>
        <li>{t("description")}</li>
      </ul>
      <hr />
      <a href="http://localhost:3000/about">Default ( KO ) ✨</a>
      <br />
      <a href="http://localhost:3000/ko/about">KO ✨</a>
      <br />
      <a href="http://localhost:3000/en/about">EN ✨</a>
    </div>
  );
};

export const getStaticProps = async ({ locale, defaultLocale }: any) => ({
  props: {
    ...(await serverSideTranslations((locale || defaultLocale) as string)),
  },
});

export default AboutPage;
