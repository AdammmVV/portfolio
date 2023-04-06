import React from "react";
import s from './Title.module.css'

type TitlePropsType = {
    mainTitle: string
    title: string
}

export const Title: React.FC<TitlePropsType> = ({
    mainTitle,
    title
                                                }) => {
    return (
        <div className={s.title}>
            <h2>{mainTitle}</h2>
            <p>{title}</p>
        </div>
    )
}