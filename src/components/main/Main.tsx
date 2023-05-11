import React from "react";
import s from './Main.module.scss'
import stylesContainer from '../../common/Container.module.css'
import mainPhoto from './../../assets/image/avaMain.jpg'
import {SuperButton} from "../../common/components/button/SuperButton";
import {Particle} from "../../common/components/particle/Particle";
import {Slide, Fade} from "react-awesome-reveal"
import ReactTypingEffect from "react-typing-effect";
import {Tilt} from 'react-tilt'

export const Main = () => {

    const photo = {
        backgroundImage: `url(${mainPhoto})`
    }

    return (
        <div className={s.main} id={'home'}>
            <Particle className={s.particle}/>
            <div className={stylesContainer.container}>
                <Slide direction={'left'}>
                    <div className={s.description}>
                        <h2>Hi! My name is</h2>
                        <h1>Valery <br/>Adamchuk</h1>
                        <span>I`m </span>
                        <ReactTypingEffect
                            text={'Front-end developer'}
                            speed={70}
                            eraseSpeed={100}/>
                        <div className={s.navigation}>
                            <SuperButton name={'View My Works'}
                                         variant={'primary'}/>
                            <SuperButton name={'Contact Me'}
                                         variant={'link'}
                                         icon={'arrowCircleDown'}/>
                        </div>
                    </div>
                </Slide>
                <Fade direction={'right'}>
                    <Tilt options={{max: 5, scale: 1}} className={s.mainPhoto} style={photo}>
                        <div/>
                    </Tilt>
                </Fade>
            </div>
            <div className={s.arrowWrapper}>
                <div className={s.arrow}/>
            </div>
        </div>
    )
}