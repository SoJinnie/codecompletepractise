import React from "react";
import skills from "/Webdeveloper/vite-project/src/data/skill.json";
import history from "/Webdeveloper/vite-project/src/data/history.json";
import { getImageUrl } from "/Webdeveloper/vite-project/src/utils.js";
import styles from "./Experience.module.css";



export const Experience = () => {

    
    return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill, id) => {
                   return (
                   <div key ={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img 
                            scr={getImageUrl(skill.imageSrc)}
                            alt={skill.title}
                            />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                   );
            })}
            </div>
            <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        return (
                        <li key={id} className={styles.historyItem}>
                            <img
                                src={getImageUrl(history.imageSrc)}
                                alt={`${historyItem.organisation} Logo`}
                            />
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>
                                    {historyItem.experiences.map((experience, id) => {
                                    return <li key={id}>{experience}</li>;
                                })}
                                </ul>
                            </div>
                        </li>
                    )})}
            </ul>
        </div>
     </section>
    
    );
};