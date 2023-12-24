import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Santa.mn" />
        <meta
          property="og:image"
          content="https://evseg.s3.ap-southeast-1.amazonaws.com/gg.png"
        />
        <meta
          property="og:image"
          content="https://evseg.s3.ap-southeast-1.amazonaws.com/gg.png"
        />
        <meta
          name="description"
          content="Хүсэн хүлээсэн шинэ он хаяанд ирж Santa.mn хүн бүрд бэлэгтэй өндөг авчирлаа"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
