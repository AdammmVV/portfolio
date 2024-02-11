import React from "react";
import s from './Skills.module.scss'
import stylesContainer from '../../common/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import {skills} from './config';

export const Skills = () => {
    const skillMap = skills.map((s, index) => {
        return (
            <Skill key={index} icon={s.icon} skillTitle={s.title} skillDescription={''}/>
        )
    })

    return (
        <div className={s.skillsBlock} id={'skills'}>
            <div className={`${stylesContainer.container} ${s.container}`}>
                <Title mainTitle={'Skills'} title={'My Skills'}/>
                <Fade duration={1500} triggerOnce>
                <div className={s.skillWrapper}>
                    {skillMap}
                </div>
                </Fade>
            </div>
        </div>
    )
}

