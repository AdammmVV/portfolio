import React, {useState} from "react";
import s from './Projects.module.scss'
import stylesContainer from '../../common/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import taskTrack from './../../assets/image/IconProject/taskTrack.avif'
import smartCards from './../../assets/image/IconProject/smartCards.avif'

const stateProjects = [
    {id: 'taskTrack', title: 'Task Track', href: 'https://adammmvv.github.io/mainTodolist/#/', img: taskTrack,
    description: 'During the development of the "TaskTrack" project, React with TypeScript was used. Redux(RTK) was employed to manage the application state, providing a convenient and unified API for working with the data store. REST API was utilized for server interaction and data retrieval. As a result, the "TaskTrack" project was created, enabling users to create, edit, and delete tasks, mark them as completed, and manage their to-do list.'
    },
    {id: 'smartCard', title: 'Smart Cards', href: 'https://romanchuchval.github.io/smart-cards/#/', img: smartCards,
        description: 'Collaborative development using Git version control system. Creating custom hooks and React components. Designing project architecture (UI, BLL, DAL, Server). Complete authentication process (registration, login, password recovery). Form handling and validation. Protected routes and user redirection. Interacting with server using Ajax and RESTful APIs (CRUD operations). Pagination, search, filtering, sorting. Image uploading. Refactoring to eliminate code duplication and fix errors. Test coverage with Jest. Reusable utility functions. Modal windows. Performance optimization (useCallback, useMemo, React.memo).'
    }
]


export const Projects = () => {
    const [projects, setProjects] = useState<{id: string, title: string, href: string, img: string, description: string}[]>(stateProjects)

    const mapProjects = projects.map(p => {
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

