import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {DistantWork} from "./components/distantWork/DistantWork";
import {Form} from "./components/form/Form";
import {Footer} from "./components/footer/Footer";

export const App = () => {
    return (
        <div className="App">
            <Header/>

            <Main/>
            <Skills/>
            <Projects/>
            <DistantWork />
            <Form />

            <Footer />
        </div>
    );
}