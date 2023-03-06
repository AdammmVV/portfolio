import React from "react";
import s from './Skills.module.css'
import stylesContainer from '../../common/Container.module.css'
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${stylesContainer.container} ${s.container}`}>
                <h2 className={s.skillsTitle}>Мои скиллы</h2>
                <div className={s.skillWrapper}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    )
}

