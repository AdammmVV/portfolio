import React from "react";
import s from './Main.module.css'
import stylesContainer from '../../common/Container.module.css'

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={stylesContainer.container}>
                <div className={s.description}>
                    <span>Привет!</span>
                    <h1>Меня зовут Валерий Адамчук.</h1>
                    <p>Я front-end разработчик</p>
                </div>
                <div className={s.mainPhoto}>
                </div>
            </div>
        </div>
    )
}