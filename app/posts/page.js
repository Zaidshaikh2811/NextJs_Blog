
"use client"
import AllPosts from "@/components/posts/all-posts";
import Head from "next/head";

import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

function AllPostPage() {

    const { data: posts, error } = useSWR("http://localhost:8000/api/posts", fetcher)



    if (error) return <div>Failed to load</div>
    if (!posts) return <div className="flex justify-center items-center h-screen"><div className="loader"></div></div>

    return <>
        <Head>
            <title>All Posts</title>
            <meta name="Description" content="a list of all programming content" />
        </Head>
        <AllPosts posts={posts} />
    </>
}

export default AllPostPage;