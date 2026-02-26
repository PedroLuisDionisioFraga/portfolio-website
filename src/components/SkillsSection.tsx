import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Cpu, Wrench, Radio } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: [
      { name: "C", level: 95 },
      { name: "C++", level: 90 },
      { name: "Python", level: 80 },
      { name: "Assembly (ARM)", level: 75 },
      { name: "Rust", level: 60 },
    ],
  },
  {
    icon: Cpu,
    title: "Platforms",
    skills: [
      { name: "ARM Cortex-M", level: 95 },
      { name: "STM32", level: 90 },
      { name: "ESP32", level: 85 },
      { name: "RISC-V", level: 70 },
      { name: "NXP i.MX", level: 75 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "JTAG/SWD", level: 90 },
      { name: "Oscilloscope", level: 85 },
      { name: "Logic Analyzer", level: 90 },
      { name: "Git/CI-CD", level: 85 },
      { name: "KiCad/Altium", level: 65 },
    ],
  },
  {
    icon: Radio,
    title: "Protocols",
    skills: [
      { name: "SPI / I2C / UART", level: 95 },
      { name: "CAN / LIN", level: 85 },
      { name: "MQTT", level: 80 },
      { name: "BLE / Zigbee", level: 75 },
      { name: "USB", level: 70 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">{'// Technical Skills'}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Tech <span className="text-primary text-glow">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <cat.icon className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold font-mono">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-mono text-muted-foreground">{skill.name}</span>
                      <span className="text-xs font-mono text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + ci * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
