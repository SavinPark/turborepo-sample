import Head from "next/head";

export const MetaTag = (props: any) => {
  console.log(props.id);
  const { id } = props;
  return (
    <Head>
      <title>TITLE {id}</title>
      <meta name="author" content={`AUTHOR ${id}`} />
      <meta
        key="description"
        name="description"
        content={`DESCRIPTION ${id}`}
      />
    </Head>
  );
};
