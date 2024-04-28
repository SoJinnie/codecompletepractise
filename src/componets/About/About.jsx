import React from "react";
import {useState} from "react";
import styles from "./About.module.css";

import aboutImage from "/Webdeveloper/vite-project/assets/about/aboutImage.png";
import cursorIcon from "/Webdeveloper/vite-project/assets/about/cursorIcon.png";
import serverIcon from "/Webdeveloper/vite-project/assets/about/serverIcon.png";
import uiIcon from "/Webdeveloper/vite-project/assets/about/uiIcon.png";

export const About = () => {
    return (
        
    <section className={styles.container} id="about">

         <h2 className={styles.title}>
                About
         </h2>
        
        <div className={styles.content}>
        
            <img src={aboutImage} alt="cukikep" className={styles.aboutImage} />

        <ul className={styles.aboutItems}>
            <il className={styles.aboutItem}>
                <img
                    src={cursorIcon}
                    alt="cursoricon"
                    className={styles.cursorIcon}
                />
                <div className={styles.aboutItemText}>
                    <h1>
                    Frontend Developer
                    </h1>
                    <p className={styles.description}>I am a front-end developer with experience in building responsive and optimazed sites!</p>
                </div>
            </il>
            <il className={styles.aboutItem}>
                <img
                    src={serverIcon}
                    alt="servericon"
                    className={styles.serverIcon}
                />
                <div className={styles.aboutItemText}>
                    <h1>
                        Backend Developer
                    </h1>
                    <p className={styles.description}>I am a back-end developer with experience in building responsive and optimazed sites!</p>
                </div>
            </il>
            <il className={styles.aboutItem}>
                <img
                    src={uiIcon}
                    alt="uiicon"
                    className={styles.uiIcon}
                />
                <div className={styles.aboutItemText}>
                    <h1>
                        UI Designer
                    </h1>
                    <p className={styles.description}>I have desinged multiple landing pages and have created systems as well.</p>
                </div>
            </il>
        </ul>

        </div>
    </section>
    
    );
};