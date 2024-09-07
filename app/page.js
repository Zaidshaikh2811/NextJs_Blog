import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import Layout from "@/components/layout/layout";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started With NextJs",
    image: "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png",
    excerpt: "Next.js is a React framework for production.",
    date: "2022-02-10",
  },
  {
    slug: "nextjs-advanced-features",
    title: "Exploring Advanced Features of NextJs",
    image: "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png",
    excerpt: "Learn about the advanced features of Next.js, including dynamic routing and API routes.",
    date: "2022-03-15",
  },
  {
    slug: "deploying-nextjs-applications",
    title: "Deploying NextJs Applications",
    image: "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png",
    excerpt: "A guide to deploying your Next.js applications to production.",
    date: "2022-04-20",
  },
  {
    slug: "nextjs-ssg-vs-ssr",
    title: "SSG vs SSR in NextJs",
    image: "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png",
    excerpt: "Understanding the differences between Static Site Generation (SSG) and Server-Side Rendering (SSR) in Next.js.",
    date: "2022-05-05",
  },
  {
    slug: "styling-in-nextjs",
    title: "Styling in NextJs: CSS, Sass, and Styled Components",
    image: "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png",
    excerpt: "Learn how to style your Next.js applications using CSS, Sass, and Styled Components.",
    date: "2022-06-10",
  }
];


export default function Home() {
  return (
    <>
      <Layout>
        <Hero />

        <FeaturedPosts posts={DUMMY_POSTS} />
      </Layout>

    </>
  );
}
