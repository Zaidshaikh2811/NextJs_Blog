"use client"
import PostContent from "@/components/posts/post-detail/post-content";
import Head from "next/head";
import { useParams } from "next/navigation";
import useSWR from "swr";



const fetcher = (url) => fetch(url).then((res) => res.json());
function SinglePostPage() {
    const { slug } = useParams();
    const { data: post, error } = useSWR(`http://localhost:8000/api/posts/${slug}`, fetcher, {
        revalidateOnFocus: false,
        revalidateIfStale: false,
        revalidateOnReconnect: false,
        suspense: false,
    });

    if (error) return <div>Failed to load</div>
    if (!post) return <div className="flex justify-center items-center h-screen"><div className="loader"></div></div>




    return <>
        <Head>
            <title>{post.title}</title>
            <meta name="description" content={post.excerpt} />
        </Head>
        <PostContent post={post} />
    </>

}


export default SinglePostPage;