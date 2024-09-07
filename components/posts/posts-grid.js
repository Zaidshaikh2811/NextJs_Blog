
import classes from './post-grid.module.css'
import PostItem from './post-item';

function PostGrid({ posts }) {



    return (
        <ul className={classes.grid}>
            {posts.map((post, slug) => (
                <PostItem post={post} key={slug} />

            ))}
        </ul>
    );

}

export default PostGrid;