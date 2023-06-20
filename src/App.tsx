import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {DistantWork} from "./components/distantWork/DistantWork";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
    return (
        <div className="App">
            <Header/>

            <Main/>
            <Skills/>
            <Projects/>
            <DistantWork />
            <Contact />

            <Footer />
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}