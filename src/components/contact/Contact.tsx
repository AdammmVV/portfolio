import React, {useState} from "react";
import s from "./Contact.module.scss"
import stylesContainer from '../../common/Container.module.css'
import {SuperButton} from "../../common/components/button/SuperButton";
import {Fade} from "react-awesome-reveal";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {api} from "./../../api/api";
import {toast} from 'react-toastify'
import {Loader} from "./../../common/components/loader/Loader";


export const Contact = () => {
    const [loader, setLoader] = useState(false)
    type FormData = yup.InferType<typeof schema>
    const schema = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        description: yup.string().required('is a required field')
    })
    const {register, handleSubmit, reset, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: FormData) => {
        setLoader(true)
        api.sendMessage(data)
            .then((res) => {
                reset()
                toast.success(res.data.message)
            })
            .catch((e) => toast.error(e.message))
            .finally(() => setLoader(false))
    }

    return (
        <div className={s.formBlock} id={'contact'}>
            <div className={`${stylesContainer.container} ${s.container}`}>
                <div className={s.formContainer}>
                    <Fade direction={'left'}>
                        <div className={s.descriptionWrapper}>
                            <h2>ADDRESS:</h2>
                            <p>
                                <SuperButton variant={'icon'} icon={'location'}/>
                                Minsk, Belarus<br/>
                            </p>
                            <p>
                                <SuperButton variant={'icon'} icon={'phone'} href={'tel:+375 33 645 76 06'}/>
                                <SuperButton variant={'link'} name={'+375 33 645 76 06'}
                                             href={'tel:+375 33 645 76 06'}/>
                            </p>
                            <p>
                                <SuperButton variant={'icon'} icon={'gmail'} href={'mailto:adammm.web@gmail.com'}/>
                                <SuperButton variant={'link'} name={'Adammm.web@gmail.com'}
                                             href={'mailto:adammm.web@gmail.com'}/>
                            </p>
                            <h2>FOLLOW ME:</h2>
                            <div className={s.followWrapper}>
                                <SuperButton variant={'icon'} icon={'github'} href={'https://github.com/AdammmVV'}/>
                                <SuperButton variant={'icon'} icon={'linkedin'}
                                             href={'https://www.linkedin.com/in/valery-adamchuk-805742278/'}/>
                                <SuperButton variant={'icon'} icon={'telegram'} href={'https://t.me/AdammmVV'}/>
                                <SuperButton variant={'icon'} icon={'instagram'}
                                             href={'https://instagram.com/adammmi4'}/>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction={'right'}>
                        <div className={s.formWrapper}>
                            <h2>SEND US A NOTE</h2>
                            {loader && <Loader/>}
                            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                                <div>What is Your Name:</div>
                                <input type="text" {...register('name')}/>
                                <p style={{color: '#FF0000'}}>{errors.name?.message}</p>
                                <div>Your Email Address:</div>
                                <input type="text" {...register('email')}/>
                                <p style={{color: '#FF0000'}}>{errors.email?.message}</p>
                                <div>How can I Help you?:</div>
                                <textarea id="" {...register('description')}/>
                                <p style={{color: '#FF0000'}}>{errors.description?.message}</p>
                                <div className={s.sendButton}>
                                    <button type={'submit'} disabled={loader}>
                                        <SuperButton name={'Send'}
                                                     variant={'primary'}
                                                     icon={'arrowLeft'}/>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}