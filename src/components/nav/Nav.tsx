import React from "react";
import s from './Nav.module.scss'
import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <div className={s.navWrapper}>
            <div className={s.nav}>
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