import React from "react";
import s from "./Contact.module.scss"
import stylesContainer from '../../common/Container.module.css'
import {SuperButton} from "../../common/components/button/SuperButton";


export const Contact = () => {
    return (
        <div className={s.formBlock} id={'contact'}>
            <div className={`${stylesContainer.container} ${s.container}`}>
                <div className={s.formContainer}>
                    <div className={s.descriptionWrapper}>
                        <h2>ADDRESS:</h2>
                        <p>
                            4th Floor, Plot No.22,<br/>
                            145 Murphy Canyon Rd.<br/>
                            San Diego CA 2028
                        </p>
                        <p>(+060) 444 434 444</p>
                        <p>chat@simone.com</p>
                        <h2>FOLLOW ME:</h2>
                        <div className={s.followWrapper}>
                            <SuperButton variant={'icon'} icon={'github'}/>
                            <SuperButton variant={'icon'} icon={'gmail'}/>
                            <SuperButton variant={'icon'} icon={'telegram'}/>
                            <SuperButton variant={'icon'} icon={'instagram'}/>
                        </div>
                    </div>
                    <div className={s.formWrapper}>
                        <h2>SEND US A NOTE</h2>
                        <form action="#" className={s.form}>
                            <div>What is Your Name:</div>
                            <input type="text"/>
                            <div>Your Email Address:</div>
                            <input type="text"/>
                            <div>How can I Help you?:</div>
                            <textarea name="" id=""/>
                            <div className={s.sendButton}>
                                <SuperButton name={'Send'}
                                             variant={'primary'}
                                             icon={'arrowLeft'}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}