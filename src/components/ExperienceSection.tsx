import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "2021 – Present",
    role: "Senior Embedded Systems Engineer",
    company: "TechDynamics Inc.",
    highlights: [
      "Lead firmware team of 8 engineers on automotive ADAS platform",
      "Architected modular HAL reducing porting time by 60%",
      "Implemented OTA update system for 100K+ deployed devices",
    ],
  },
  {
    period: "2018 – 2021",
    role: "Embedded Software Engineer",
    company: "IoT Solutions Corp.",
    highlights: [
      "Developed BLE mesh networking firmware for smart building systems",
      "Optimized power consumption by 40% on battery-powered sensors",
      "Built automated test framework reducing QA cycle from 2 weeks to 2 days",
    ],
  },
  {
    period: "2015 – 2018",
    role: "Firmware Developer",
    company: "MedTech Devices Ltd.",
    highlights: [
      "Designed safety-critical firmware for Class III medical devices",
      "Achieved IEC 62304 and FDA 510(k) clearance for 3 products",
      "Implemented real-time DSP algorithms for biosignal processing",
    ],
  },
  {
    period: "2013 – 2015",
    role: "Junior Embedded Engineer",
    company: "Industrial Automation Co.",
    highlights: [
      "Developed PLC communication drivers (Modbus, Profibus)",
      "Created motor control firmware for industrial servo drives",
      "Wrote board support packages for custom ARM9 platforms",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">{'// Career Path'}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Work <span className="text-primary text-glow">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.period}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 mt-6 z-10" />

              <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <span className="font-mono text-xs text-primary">{exp.period}</span>
                <h3 className="text-lg font-bold mt-1">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <ul className={`mt-3 space-y-1 ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                  {exp.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted-foreground">
                      <span className="text-primary/60 mr-1">›</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
