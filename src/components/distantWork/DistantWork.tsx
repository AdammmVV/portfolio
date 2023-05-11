import React from "react";
import s from "./DistantWork.module.scss"
import stylesContainer from '../../common/Container.module.css'
import {SuperButton} from "../../common/components/button/SuperButton";
import background from './../../assets/image/BacgroundImage/2.avif'
import {Fade, Slide} from "react-awesome-reveal";

export const DistantWork = () => {
    return (
        <div className={s.distantWorkBlock} style={{backgroundImage: `url(${background})`}}>
            <div className={`${stylesContainer.container} ${s.container}`}>
                <Slide direction={'down'} triggerOnce>
                    <h6>Considering remote work options</h6>
                </Slide>
                <Fade delay={500} triggerOnce>
                    <SuperButton name={'Hire Me'} variant={'basic'}/>
                </Fade>
            </div>
        </div>
    )
}