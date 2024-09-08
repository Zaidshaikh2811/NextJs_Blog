import PostHeader from "./post-header";
import classes from './psot-content.module.css'

function PostContent({ post }) {


    return (
        <article className={classes.content}>

            <PostHeader title={post.title}
                image={post.image} />
            <p className="font-bold">
                {post.content}
            </p >
        </article>


    )
}

export default PostContent;