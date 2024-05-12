"use client";
import Button from "@/components/Button";
import Highlight from "@/components/Highlight";
import Link from "@/components/Link";
import styles from "./Hero.module.css";

const Hero = () => {
  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    contact!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.hero}>
      <p className={styles.text}>
        <Highlight>Hi, my name is</Highlight>
      </p>
      <h2 className={styles.name}>Shikhar Gupta. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h2>
      <h3 className={styles.subText}>I love challenging myself every day</h3>
      <p className={styles.description}>
          I bring over 3 years of experience specializing in full-stack development, CI/CD,
          cloud infrastructure, and automation.
          I have recently graduated from {" "}&nbsp;
        <Link
          href="https://www.asu.edu/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Highlight>Arizona State University </Highlight>
        </Link>
           with a Masters in Computer Science.
      </p>
      <Button className={styles.callToAction} onClick={scrollToContact}>
        Get In Touch
      </Button>
    </div>
  );
};

export default Hero;
