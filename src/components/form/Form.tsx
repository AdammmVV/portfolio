import React from "react";
import s from "./Form.module.css"
import stylesContainer from '../../common/Container.module.css'


export const Form = () => {
    return (
        <div className={s.formBlock}>
            <div className={`${stylesContainer.container} ${s.container}`}>
                <h3>Контакты</h3>
                <form action="#" className={s.formWrapper}>
                    <input type="text" placeholder={'<input>'}/>
                    <input type="text" placeholder={'<input>'}/>
                    <textarea name="" id="" placeholder={'<textarea>'}/>
                </form>
                <button>Отправить</button>
            </div>
        </div>
    )
}