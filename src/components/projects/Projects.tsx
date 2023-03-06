import React from "react";
import s from './Projects.module.css'
import stylesContainer from '../../common/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${stylesContainer.container} ${s.projectContainer}`}>
                <h2>Мои Работы</h2>
                <div className={s.projectsWrapper}>
                    <Project/>
                    <Project/>
                </div>
            </div>

        </div>
    )
}

