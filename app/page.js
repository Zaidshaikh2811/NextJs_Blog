"use client"
import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import Layout from "@/components/layout/layout";
import Head from "next/head";

import useSWR from "swr";



const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: posts, error } = useSWR("http://localhost:8000/api/posts", fetcher)


  if (error) return <div>Failed to load</div>
  if (!posts) return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader"></div>
    </div>
  )



  return (
    <>
      <Layout>
        <Head>
          <title>Zaid's Blog </title>
          <meta name="viewport" content="width=device-width , initial-scale=1"></meta>
        </Head>
        <Hero />

        <FeaturedPosts posts={posts} />
      </Layout>

    </>
  );
}




