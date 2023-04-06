import React from "react";
import s from "./Skill.module.css";

type SkillPropsType = {
    icon: { backgroundImage: string }
    skillTitle: string
    skillDescription: string
}

export const Skill: React.FC<SkillPropsType> = (
    {
        icon,
        skillTitle,
        skillDescription
    }
) => {
    return (
        <div className={s.skillItem}>
            <div className={s.iconItem} style={icon}>
            </div>
            <div className={s.skillTitle}>
                <p>{skillTitle}</p>
            </div>
            {/*<div className={s.skillDescription}>*/}
            {/*    <p>{skillDescription}</p>*/}
            {/*</div>*/}
        </div>
    )
}