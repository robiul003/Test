import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: "#000"
                },
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            area: 800
                        }
                    },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    move: { enable: true, speed: 2 },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                    },
                },
                detectRetina: true,
            }}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                zIndex: 0,
            }}
        />
    );
}
