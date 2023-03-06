import React from "react";
import s from "./Footer.module.css"
import stylesContainer from '../../common/Container.module.css'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${stylesContainer.container} ${s.container}`}>
                <h3>Адамчук Валерий</h3>
                <div className={s.messengersWrapper}>
                    <div className={s.messenger}>

                    </div>
                    <div className={s.messenger}>

                    </div>
                    <div className={s.messenger}>

                    </div>
                    <div className={s.messenger}>

                    </div>
                </div>
                <span>© 2023 Все права защищены</span>
            </div>
        </div>
    )
}