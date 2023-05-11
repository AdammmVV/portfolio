import React from "react";
import s from './Title.module.scss'
import {Fade, Slide} from "react-awesome-reveal";

type TitlePropsType = {
    mainTitle: string
    title: string
}

export const Title: React.FC<TitlePropsType> =
    ({mainTitle, title}) => {
    return (
        <div className={s.titleWrapper}>
            <Slide className={s.mainTitle} direction={'down'}>
                <h2>{mainTitle}</h2>
            </Slide>
            <Fade className={s.title} delay={200}>
                <p>{title}</p>
            </Fade>
        </div>
    )
}