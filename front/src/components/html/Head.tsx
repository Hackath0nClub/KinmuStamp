import type { NextPage } from "next";
import Head from "next/head";

interface MyHeadProps {
  pageName?: string;
  thumbnailUrl?: string;
  description?: string;
}

/** [TODO] headタグに反映されないので修正する */
const MyHead: NextPage<MyHeadProps> = ({
  pageName,
  thumbnailUrl,
  description,
}) => {
  const siteName = process.env.NEXT_SERVICE_NAME;
  const title = pageName ? `${pageName} - ${siteName}` : siteName;

  /** デフォルトの description */
  const defaultDescription = "description";

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={thumbnailUrl ?? ""} />
      <meta
        property="og:description"
        content={description ?? defaultDescription}
      />
    </Head>
  );
};

export default MyHead;
