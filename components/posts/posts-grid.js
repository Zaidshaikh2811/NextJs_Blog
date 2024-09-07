
import classes from './post-grid.module.css'
import PostItem from './post-item';
function PostGrid(props) {
    const { posts } = props;


    return <ul className={classes.grid}>
        {posts.map((post, index) => {
            return <PostItem post={post} key={index} />
        })}
    </ul>
}

export default PostGrid;