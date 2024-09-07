import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import Layout from "@/components/layout/layout";
export default function Home() {
  return (
    <>
      <Layout>
        <Hero />

        <FeaturedPosts />
      </Layout>

    </>
  );
}
