import s from './SuperButton.module.scss'
import React from "react";
import arrowCircleDown from './../../../assets/image/btnIcon/arrow-circle-down-svgrepo-com.svg'
import arrowDown from './../../../assets/image/btnIcon/arrow-down-svgrepo-com.svg'
import arrowLeft from './../../../assets/image/btnIcon/arrow-right-svgrepo-com.svg'
import telegram from './../../../assets/image/btnIcon/btnMessage/telegram.svg'
import github from './../../../assets/image/btnIcon/btnMessage/github.svg'
import gmail from './../../../assets/image/btnIcon/btnMessage/gmail.svg'
import instagram from './../../../assets/image/btnIcon/btnMessage/instagram.svg'


type SuperButtonPropsType = {
    name?: string
    variant: 'primary' | 'basic' | 'secondary' | 'link' | 'icon'
    icon?:
        'arrowCircleDown'
        | 'arrowDown'
        | 'arrowLeft'
        | 'telegram'
        | 'github'
        | 'gmail'
        | 'instagram'
}

export const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        name,
        variant,
        icon,
    }
) => {

    let finalClassName = s.button

    if (variant === 'primary') {
        finalClassName += ' ' + s.btnDefault
    } else if (variant === 'basic') {
        finalClassName += ' ' + s.btnBasic
    } else if (variant === 'secondary') {
        finalClassName += ' ' + s.btnSecondary
    } else if (variant === 'link') {
        finalClassName += ' ' + s.btnLink
    } else if (variant === 'icon') {
        finalClassName += ''
    }

    const allIcons = {
        arrowCircleDown,
        arrowDown,
        arrowLeft,
        telegram,
        github,
        gmail,
        instagram,
    }
    const iconForButton = {backgroundImage: `url(${icon && allIcons[icon]})`}

    return <a href="#" className={finalClassName}>
        {name}
        {variant === 'icon'
            ? <span className={s.btnIcon} style={iconForButton}/>
            : icon && <span className={variant === 'primary' ? s.span : s.spanForIcon} style={iconForButton}/>
        }
    </a>
}
