import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div className="particles-container">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    particles: {
                        number: { value: 80 },
                        color: { value: "#ffffff" },
                        shape: { type: "circle" },
                        opacity: { value: 0.5, random: true },
                        size: { value: 3, random: true },
                        move: { speed: 2, random: true },
                    },
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "repulse" },
                        },
                    },
                }}
            />
        </div>
    );
}
