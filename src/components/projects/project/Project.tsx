import s from "./Project.module.scss";
import React from "react";
import {SuperButton} from "../../../common/components/button/SuperButton";

type ProjectPropsType = {
    title: string
    href: string
    img: string
    description: string
}

export const Project: React.FC<ProjectPropsType> = ({ title, img, description, href}) => {
    return (
        <div className={s.itemProject}>
            <div className={s.imgContainer} style={{backgroundImage: `url(${img})`}}>
                <SuperButton name={'Watch'} variant={'secondary'} href={href}/>
            </div>
            <div className={s.description}>
                <h6>{title}</h6>
                <span>{description}</span>
            </div>
        </div>
    )
}