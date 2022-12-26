import { useTranslation } from "next-i18next";
import Head from "next/head";

export const MetaTag = (props: any) => {
  const { id } = props;
  const { t } = useTranslation();

  return (
    <Head>
      <title>POST #{id}</title>
      <meta name="author" content={`${t("metaAuthor")} ${id}`} />
      <meta
        key="description"
        name="description"
        content={`${t("metaDescription")} ${id}`}
      />
    </Head>
  );
};
