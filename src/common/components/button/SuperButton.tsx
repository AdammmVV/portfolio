import s from './SuperButton.module.scss'
import React from "react";
import arrowCircleDown from './../../../assets/image/btnIcon/arrow-circle-down-svgrepo-com.svg'
import arrowDown from './../../../assets/image/btnIcon/arrow-down-svgrepo-com.svg'
import arrowLeft from './../../../assets/image/btnIcon/arrow-right-svgrepo-com.svg'
import telegram from './../../../assets/image/btnIcon/btnMessage/telegram.svg'
import github from './../../../assets/image/btnIcon/btnMessage/github.svg'
import gmail from './../../../assets/image/btnIcon/btnMessage/gmail.svg'
import instagram from './../../../assets/image/btnIcon/btnMessage/instagram.svg'
import location from './../../../assets/image/btnIcon/btnMessage/location.svg'
import phone from './../../../assets/image/btnIcon/btnMessage/phone.svg'
import linkedin from './../../../assets/image/btnIcon/btnMessage/linkedin.svg'

type SuperButtonPropsType = {
    name?: string
    variant: 'primary' | 'basic' | 'secondary' | 'link' | 'icon'
    href?: string
    icon?:
        'arrowCircleDown'
        | 'arrowDown'
        | 'arrowLeft'
        | 'telegram'
        | 'github'
        | 'gmail'
        | 'instagram'
        | 'location'
        | 'phone'
        | 'linkedin'
}

export const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        name,
        variant,
        icon,
        href
    }
) => {

    let finalClassName = s.button

    switch (variant) {
        case 'primary':
            finalClassName += ' ' + s.btnDefault
            break
        case 'basic':
            finalClassName += ' ' + s.btnBasic
            break
        case 'secondary':
            finalClassName += ' ' + s.btnSecondary
            break
        case 'link':
            finalClassName += ' ' + s.btnLink
            break
        case 'icon':
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
        location,
        phone,
        linkedin
    }
    const iconForButton = {backgroundImage: `url(${icon && allIcons[icon]})`}

    return <a href={href} className={finalClassName}>
        {name}
        {variant === 'icon'
            ? <span className={s.btnIcon} style={iconForButton}/>
            : icon && <span className={variant === 'primary' ? s.span : s.spanForIcon} style={iconForButton}/>
        }
    </a>
}
