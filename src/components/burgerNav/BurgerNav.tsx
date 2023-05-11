import React from "react";
import s from './BurgerNav.module.scss'
import {Link} from "react-scroll";

type BurgerNavType = {
    activeBurger: boolean
    onActiveBurger: () => void
}

export const BurgerNav: React.FC<BurgerNavType> = ({activeBurger, onActiveBurger}) => {
    return (
        <div className={s.burgerNavWrapper}>
            <div className={s.btnWrapper}>
                <div onClick={onActiveBurger}
                     className={`${s.burgerBtn} ${activeBurger ? s.activeBtn : ''}`}>
                    <span/>
                </div>
            </div>
            <div className={`${s.burgerNav} ${activeBurger ? s.activeBurgerNav : ''}`}>
                <Link activeClass={s.active}
                      to='home'
                      spy={true}
                      smooth={true}
                      offset={-71}
                      duration={500}>
                    Home
                </Link>
                <Link activeClass={s.active}
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-71}
                      duration={500}>
                    Skills
                </Link>
                <Link activeClass={s.active}
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-71}
                      duration={500}>
                    Projects
                </Link>
                <Link activeClass={s.active}
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-110}
                      duration={500}>
                    Contact
                </Link>
            </div>
        </div>

    )
}