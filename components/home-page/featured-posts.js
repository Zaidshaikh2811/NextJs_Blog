import { Fragment } from "react";
import classes from './featured-posts.module.css'
import PostGrid from "../posts/posts-grid";
export default function FeaturedPosts(props) {
    return (
        <section className={classes.latest}>
            <h3 className="font-bold text-3xl flex justify-center">Featured Posts</h3>
            <PostGrid posts={props.posts} />
        </section>
    );
}
