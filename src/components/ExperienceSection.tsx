import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "Feb 2025 – Present",
    role: "Mid-level Embedded Systems Engineer",
    company: "Nouvenn IoT",
    highlights: [
      "Firmware developer specializing in Silabs (EFR32/EFM32), ESP32, and STM32 microcontrollers",
      "Developing and optimizing firmware and communication protocols: MQTT, Bluetooth, cellular, Wi-Fi and MESH",
      "Develop new features, conducting code reviews, fixing found bugs, project supervision, and writing test documentation",
    ],
  },
  {
    period: "Oct 2023 – Jan 2025",
    role: "IoT Firmware Intern",
    company: "Nouvenn IoT",
    highlights: [
      "Testing firmware for photocell mesh networks communicating with cloud APIs via cellular (NB-IoT)",
      "Worked on pulse counter devices for water/gas meters using NB-IoT network protocol",
      "Participated in Rockchip PX3-SE embedded Linux gateway development: mesh, cellular, VPN, PoE, PMIC",
    ],
  },
  {
    period: "Jul 2022 – Jun 2023",
    role: "Laboratory Monitor",
    company: "National Institute of Telecommunications (INATEL)",
    highlights: [
      "Microcontroller Systems: Embedded C programming, state machine, GPIO, interrupts, PWM, ADC, UART/USART and I2C",
      "Analog Electronics II and III: Circuit analysis with diodes, transistors, op-amps, filters, oscillators, power supplies, logical ports",
      "Oriented Object Programming: Java programming, OOP concepts, design patterns and UML diagrams",
      "Python Programming: OOP concepts, data structures, data analysis, algorithms and UML",
    ],
  },
  {
    period: "May 2022 – Oct 2023",
    role: "Undergraduate Research Fellow",
    company: "National Institute of Telecommunications (INATEL)",
    highlights: [
      "Smart Farm: mobile app with embedded system integration via MQTT protocol",
      "Park Here: YoloV8-based parking space analysis integrated with a mobile application",
      "Smart Lab: Next.js web app integrated with server and SQL database for managing lab environment",
      "Energy Consumption Prediction: LSTM and GRU models for energy forecasting based on historical data",
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
