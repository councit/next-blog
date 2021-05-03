import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        src="/../public/profile.jpeg"
        alt="Taylors Profile Image"
        width="300"
        height="300"
        className={styles.image}
      ></Image>
      <h1>Welcome to my corner of the internet!</h1>
      <p>
        Hi, my name is Taylor Council. I am a Software Engineer focusing on
        Front End Development. Please see below for my most current blog posts.
      </p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
