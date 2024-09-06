import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Calendar App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto py-8">{children}</main>
    </div>
  );
}
