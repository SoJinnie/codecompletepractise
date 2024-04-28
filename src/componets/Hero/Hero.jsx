import React from "react";

import styles from "./Hero.module.css";
import heroImage from "/Webdeveloper/vite-project/assets/hero/heroImage.png"
;

export const Hero = () => {
    return (
        
    <section className={styles.container}>
        
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I am Adrienn!
            </h1>
            <p className={styles.description}>I am learning full-stack development from ZTM Academy. I am willing to learn more and more everyday!</p>
            <a href="mailto:ujj.adrienn.mariann@gmail.com" className={styles.contactBtn}>Contact me!</a>
         </div>
         <img
            src={heroImage}
            alt="Hero image of me"
            className={styles.heroImg}
        />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
            
    </section>
    
    );
};