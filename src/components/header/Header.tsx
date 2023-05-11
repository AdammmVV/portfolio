import React, {useState} from 'react'
import {Nav} from "../nav/Nav";
import s from './Header.module.scss'
import {BurgerNav} from "../burgerNav/BurgerNav";

export const Header = () => {
    const [activeBurger, setActiveBurger] = useState(false)
    const onActiveBurger = () => {
        setActiveBurger(!activeBurger)
    }
    return (
        <div className={s.header}>
            <Nav/>
            <BurgerNav activeBurger={activeBurger} onActiveBurger={onActiveBurger}/>
        </div>
    )
}