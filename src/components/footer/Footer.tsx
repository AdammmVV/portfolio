import React from "react";
import s from "./Footer.module.scss"
import stylesContainer from '../../common/Container.module.css'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${stylesContainer.container} ${s.container}`}>
                <h3>Adamchuk Valery</h3>
                <span>Copyright © 2023 Incubator. All Rights Reserved.</span>
            </div>
        </div>
    )
}