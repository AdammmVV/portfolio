import React from "react";
import s from './Skills.module.scss'
import stylesContainer from '../../common/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/title/Title";
import reactIcon from './../../assets/image/react-svgrepo-com.svg'
import reduxtIcon from './../../assets/image/redux-svgrepo-com.svg'
import typeScriptIcon from './../../assets/image/typescript-svgrepo-com.svg'
import javaScriptIcon from './../../assets/image/javascript-svgrepo-com.svg'
import HTMLIcon from './../../assets/image/html-svgrepo-com.svg'
import CSSIcon from './../../assets/image/css-3-svgrepo-com.svg'
import SASSIcon from './../../assets/image/sass-svgrepo-com.svg'
import axiosIcon from './../../assets/image/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png'
import RestAPIIcon from './../../assets/image/api.svg'
import gitIcon from './../../assets/image/git-svgrepo-com.svg'
import UnitTestIcon from './../../assets/image/jest-svgrepo-com.svg'
import StorybookIcon from './../../assets/image/storybook-icon-svgrepo-com.svg'
import PostmanIcon from './../../assets/image/postman-icon-svgrepo-com.svg'


export const Skills = () => {

    const skills = [
        {title: 'React', icon: {backgroundImage: `url(${reactIcon})`}},
        {title: 'Redux', icon: {backgroundImage: `url(${reduxtIcon})`}},
        {title: 'TypeScript', icon: {backgroundImage: `url(${typeScriptIcon})`}},
        {title: 'JavaScript', icon: {backgroundImage: `url(${javaScriptIcon})`}},
        {title: 'HTML', icon: {backgroundImage: `url(${HTMLIcon})`}},
        {title: 'CSS', icon: {backgroundImage: `url(${CSSIcon})`}},
        {title: 'SASS', icon: {backgroundImage: `url(${SASSIcon})`}},
        {title: 'axios', icon: {backgroundImage: `url(${axiosIcon})`}},
        {title: 'Rest API', icon: {backgroundImage: `url(${RestAPIIcon})`}},
        {title: 'git', icon: {backgroundImage: `url(${gitIcon})`}},
        {title: 'Unit-test', icon: {backgroundImage: `url(${UnitTestIcon})`}},
        {title: 'Storybook', icon: {backgroundImage: `url(${StorybookIcon})`}},
        {title: 'Postman', icon: {backgroundImage: `url(${PostmanIcon})`}},
    ]

    const skillMap = skills.map((s, index) => {
        return (
            <Skill key={index} icon={s.icon} skillTitle={s.title} skillDescription={''}/>
        )
    })

    return (
        <div className={s.skillsBlock} id={'skills'}>
            <div className={`${stylesContainer.container} ${s.container}`}>
                <Title mainTitle={'Skills'} title={'My Skills'}/>
                <div className={s.skillWrapper}>
                    {skillMap}
                </div>
            </div>
        </div>
    )
}

