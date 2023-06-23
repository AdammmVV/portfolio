import React, {useCallback} from "react";
import Particles from "react-tsparticles";
import type {Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";

type ParticleType = {
    className: string
}

export const Particle: React.FC<ParticleType> = ({className}) => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className={className}
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: 0
                },
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 5000,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: false,
                    },
                    modes: {
                        push: {
                            quantity: 1,
                        },
                        repulse: {
                            distance: 70,
                            duration: 0.1,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#212529",
                    },
                    links: {
                        color: "#212529",
                        distance: 150,
                        enable: true,
                        opacity: 0.1,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};