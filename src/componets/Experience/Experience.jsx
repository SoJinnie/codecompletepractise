import React from "react";
import skills from "/Webdeveloper/vite-project/src/data/skill.json";
import history from "/Webdeveloper/vite-project/src/data/history.json";
import { getImageUrl } from "/Webdeveloper/vite-project/src/utils.js";
import {useState} from "react";
import styles from "./Experience.module.css";


export const Experience = () => {
    return (
    <section id="experience">
        <h2>Experience</h2>
        <div>
            <div>
                {skills.map((skill, id) => {
                   return (
                   <div key ={id}>
                        <div>
                            <img scr={getImageUrl(skill.imageSrc)}
                                alt={skill.title}></img>
                        </div>
                        <p>{skill.title}</p>
                    </div>
                   );
            })}
            </div>
            <ul>
                {
                    history.map((historyItem, id) => {
                        return <li key={id}>
                            <img src={getImageUrl(history.imageSrc)} alt={`${historyItem.organisation} Logo`} />
                        </li>
                    })
                }

            </ul>
        </div>
     </section>
    
    );
};