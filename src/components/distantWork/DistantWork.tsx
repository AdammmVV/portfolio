import React from "react";
import s from "./DistantWork.module.scss"
import stylesContainer from '../../common/Container.module.css'
import {SuperButton} from "../../common/components/button/SuperButton";
import background from './../../assets/image/BacgroundImage/2.avif'

export const DistantWork = () => {
    return (
        <div className={s.distantWorkBlock} style={{backgroundImage: `url(${background})`}}>
            <div className={`${stylesContainer.container} ${s.container}`}>
                <h6>Considering remote work options</h6>
                <SuperButton name={'Hire Me'} variant={'basic'} />
            </div>
        </div>
    )
}