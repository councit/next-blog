import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Head>
        <title>Council About Section</title>
      </Head>
      <h1>About Section</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
