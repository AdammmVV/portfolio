import React from "react";
import s from './Projects.module.scss'
import stylesContainer from '../../common/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import {stateProjects} from './config';

export const Projects = () => {
    const mapProjects = stateProjects.map(p => {
        return <Project key={p.id} title={p.title} href={p.href} img={p.img} description={p.description}/>
    })
    return (
        <div className={s.projectsBlock} id={'projects'}>
            <div className={`${stylesContainer.container} ${s.containerProjects}`}>
                <Title mainTitle={'PORTFOLIO'} title={'My Works'}/>
                <div className={s.projectsWrapper}>
                    <Fade duration={1500} triggerOnce>
                        {mapProjects}
                    </Fade>
                </div>
            </div>
        </div>
    )
}

