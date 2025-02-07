import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  return (
    <Particles
      init={loadFull}
      options={{
        background: { color: "#000" },
        particles: {
          number: { value: 50 },
          move: { enable: true, speed: 0.5 }, // Fix shaking issue
          size: { value: 3 },
          color: { value: "#ffffff" },
          links: { enable: true, color: "#ffffff" }
        }
      }}
      className="particles"
    />
  );
}
