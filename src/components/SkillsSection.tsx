import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Cpu, Wrench, Radio } from "lucide-react";
import { useTranslation } from "react-i18next";

// TODO: Think another way to show skill levels, maybe with icons instead of bars, or just a list without levels
const skillCategories = [
  {
    icon: Code,
    titleKey: "skills.categories.languages",
    skills: [
      { name: "C / C++", level: 100 },
      { name: "Bash / Shell", level: 90 },
      { name: "Python", level: 80 },
      { name: "Rust", level: 55 },
    ],
  },
  {
    icon: Cpu,
    titleKey: "skills.categories.platforms",
    skills: [
      { name: "ESP32", level: 100 },
      { name: "EFR32 / EFM32 (Silabs)", level: 100 },
      { name: "STM32", level: 80 },
      { name: "RP2040 / RP2350", level: 70 },
      { name: "Raspberry Pi CM4 / Rockchip PX3-SE", level: 60 },
    ],
  },
  {
    icon: Wrench,
    titleKey: "skills.categories.tools",
    skills: [
      { name: "VS Code / Simplicity Studio", level: 100 },
      { name: "STMCube / Arduino", level: 80 },
      { name: "CMake / Make / Ninja", level: 75 },
      { name: "Git / GitHub / GitLab", level: 100 },
      { name: "Docker / WSL2", level: 70 },
    ],
  },
  {
    icon: Radio,
    titleKey: "skills.categories.protocols",
    skills: [
      { name: "UART / SPI / I2C / CAN", level: 90 },
      { name: "MQTT", level: 90 },
      { name: "BLE / Wi-Fi / Mesh", level: 85 },
      { name: "NB-IoT / Cellular", level: 75 },
      { name: "HTTP/HTTPS / USB / USB OTG", level: 70 },
    ],
  },
];

const SkillsSection = () => {
  const { t } = useTranslation();
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
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">{t("skills.tag")}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {t("skills.titleStart")}<span className="text-primary text-glow">{t("skills.titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.titleKey}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <cat.icon className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold font-mono">{t(cat.titleKey)}</h3>
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
