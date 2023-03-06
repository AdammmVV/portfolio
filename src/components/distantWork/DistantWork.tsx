import React from "react";
import s from "./DistantWork.module.css"
import stylesContainer from '../../common/Container.module.css'

export const DistantWork = () => {
    return (
        <div className={s.distantWorkBlock}>
            <div className={`${stylesContainer.container} ${s.container}`}>
                <h3>Рассматриваю варианты удаленной работы</h3>
                <button>Нанять меня</button>
            </div>
        </div>
    )
}