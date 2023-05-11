import React from "react";
import s from './Projects.module.scss'
import stylesContainer from '../../common/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../../common/components/title/Title";
import {Fade} from "react-awesome-reveal";

export const Projects = () => {
    return (
        <div className={s.projectsBlock} id={'projects'}>
            <div className={`${stylesContainer.container} ${s.containerProjects}`}>
                <Title mainTitle={'PORTFOLIO'} title={'My Works'}/>
                <div className={s.projectsWrapper}>
                    <Fade duration={1500} triggerOnce>
                        <Project/>
                        <Project/>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

