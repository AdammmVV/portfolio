import React from "react";
import s from './Main.module.scss'
import stylesContainer from '../../common/Container.module.css'
import mainPhoto from './../../assets/image/avaMain.jpg'
import {SuperButton} from "../../common/components/button/SuperButton";

export const Main = () => {

    const photo = {
        backgroundImage: `url(${mainPhoto})`
    }

    return (
        <div className={s.main} id={'home'}>
            <div className={stylesContainer.container}>
                <div className={s.description}>
                    <h2>Hi! My name is</h2>
                    <h1>Valery <br/>Adamchuk</h1>
                    <span>I`m Front-end developer</span>
                    <div className={s.navigation}>
                        <SuperButton name={'View My Works'}
                                     variant={'primary'} />
                        <SuperButton name={'Contact Me'}
                                     variant={'link'}
                                     icon={'arrowCircleDown'}/>
                    </div>
                </div>
                <div className={s.mainPhoto} style={photo} />
            </div>
            <div className={s.arrow}/>
        </div>
    )
}