import React from "react";
import s from './Main.module.scss'
import stylesContainer from '../../common/Container.module.css'
import mainPhoto from './../../assets/image/avaMain.avif'
import {SuperButton} from "../../common/components/button/SuperButton";
import {Particle} from "../../common/components/particle/Particle";
import {Slide, Fade} from "react-awesome-reveal"
import ReactTypingEffect from "react-typing-effect";
import {Tilt} from 'react-tilt'
import {api} from "../../api/api";
import {toast} from "react-toastify";

export const Main = () => {

    const photo = {
        backgroundImage: `url(${mainPhoto})`
    }
    const downloadMyCV = () => {
        api.downloadCV()
            .then(() => toast.success('success'))
            .catch((e) => toast.error(e.message))
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
                            <SuperButton name={'Get My CV'}
                                         icon={'save'}
                                         callBack={downloadMyCV}
                                         // href={'https://gmail-nodejs-beige.vercel.app/download'}
                                         variant={'primary'}/>
                            <SuperButton name={'Contact Me'}
                                         variant={'link'}
                                         icon={'arrowCircleDown'} href={'#contact'}/>
                        </div>
                    </div>
                </Slide>
                <Fade direction={'right'}>
                    <Tilt options={{max: 5, scale: 1}} className={s.mainPhoto} style={photo}/>
                </Fade>
            </div>
            <div className={s.arrowWrapper}>
                <div className={s.arrow}/>
            </div>
        </div>
    )
}