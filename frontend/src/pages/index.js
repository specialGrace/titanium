import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Home/Hero/Hero";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Dashboard Styled with Tailwind</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      
    </Layout>
  );
};

export default Home;
