import Link from "next/link";

import classes from './main-navigation.module.css'
import Logo from "./logo";


function MainNavigation() {
    return (
        <header className={classes.header}>
            <Link href="/" className={classes.logo}><Logo /></Link>
            <nav>
                <ul className={classes.links}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/posts">Posts</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );

}


export default MainNavigation;