import Image from "next/image";
import Link from "next/link";
import classes from './post-item.module.css'

function PostItem({ post }) {


    return (
        <li className={classes.post}>
            <Link href={`/posts/${post.slug}`}>
                <div className={classes.image}>
                    <Image src={post.image} alt={post.title} width={300} height={300} layout="responsive" />
                </div>
                <div className={classes.content}>
                    <h3>{post.title}</h3>
                    <time>{new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                    <p>{post.excerpt}</p>
                </div>
            </Link>
        </li>
    );

}

export default PostItem;