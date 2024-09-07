import Image from "next/image";
import Link from "next/link";
import classes from './post-item.module.css'
function PostItem(props) {
    const { post } = props;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: 'long',
        year: 'numeric'
    })


    return <li className={classes.post}>
        <Link>
            <div className={classes.image}>
                {/* <Image src={post } alt={post.title} width={300} height={300} /> */}
            </div>
            <div className={classes.content}>
                <h3>{post.title}</h3>
                <time >{formattedDate}</time>
                <p>{post.excerpt}</p>
            </div>
        </Link>

    </li >
}

export default PostItem;