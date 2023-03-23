import s from "./Project.module.css";
import React from "react";

export const Project = () => {
    return (
        <div className={s.itemProject}>
            <div className={s.imgContainer}>
                <button>Смотреть</button>
            </div>
            <div className={s.description}>
                <h6>title</h6>
                <span>Описание</span>
            </div>
        </div>
    )
}