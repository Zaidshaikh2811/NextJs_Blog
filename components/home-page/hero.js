import Image from "next/image";
import classes from './hero.module.css'

export default function Hero() {
    return (
        <section className={classes.hero}>

            <div className={classes.image}>
                <Image src="https://th.bing.com/th/id/OIP.D1XVvoFHNkOZx6EWxElJ_gHaHa?rs=1&pid=ImgDetMain" alt="zaid shaikh" width={400} height={400}></Image>
            </div>
            <h1>Hi I'm Zaid Shaikh</h1>
            <p>Full Stack Developer</p>

        </section>
    );
}
