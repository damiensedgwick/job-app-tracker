import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Home - Job Application Tracker</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="container mx-auto py-3 text-center">
            <a href="/applications">View Applications</a>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Home;
