import s from "./Project.module.scss";
import React from "react";
import {SuperButton} from "../../../common/components/button/SuperButton";
import socialNetwork from './../../../assets/image/IconProject/connected-world-concept-illustration_114360-7523.avif'

export const Project = () => {
    return (
        <div className={s.itemProject}>
            <div className={s.imgContainer} style={{backgroundImage: `url(${socialNetwork})`}}>
                <SuperButton name={'Watch'} variant={'secondary'} />
            </div>
            <div className={s.description}>
                <h6>Social Network</h6>
                <span>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt earum eius explicabo fuga illo impedit maxime modi mollitia optio possimus quae quaerat quasi quis, ratione repellat suscipit temporibus totam vero?</span>
            </div>
        </div>
    )
}