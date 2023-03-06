import s from "./Skill.module.css";
import React from "react";

export const Skill = () => {
    return (
        <div className={s.skillItem}>
            <div className={s.iconItem}>

            </div>
            <div className={s.titleIcon}>
                <p>React</p>
            </div>
            <div className={s.description}>
                <p>Подробное описание навыка</p>
            </div>
        </div>
    )
}