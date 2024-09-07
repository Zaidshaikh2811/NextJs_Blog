import PostHeader from "./post-header";
import classes from './psot-content.module.css'

function PostContent() {
    const dummyData =
    {
        slug: "getting-started-with-nextjs",
        title: "Getting Started With NextJs",
        image: "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png",
        excerpt: "Next.js is a React framework for production.",
        date: "2022-02-10",
        content: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat optio esse quasi repellendus aspernatur laudantium quibusdam inventore temporibus, ab maxime!'

    }

    return (
        <article className={classes.content}>

            <PostHeader title={dummyData.title}
                image={dummyData.image} />
            <p className="font-bold">
                {dummyData.content}
            </p >
        </article>


    )
}

export default PostContent;