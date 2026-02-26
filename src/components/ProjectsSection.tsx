import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Wifi, Car, Factory, Watch } from "lucide-react";

const projects = [
  {
    icon: Wifi,
    title: "IoT Sensor Network",
    summary: "Distributed wireless sensor network for smart agriculture with ultra-low power nodes.",
    details: "Designed a mesh network of 200+ sensor nodes using ESP32 and LoRa modules. Implemented custom power management achieving 2-year battery life on coin cells. Built edge gateway firmware for data aggregation and MQTT-based cloud connectivity.",
    tags: ["ESP32", "LoRa", "FreeRTOS", "MQTT", "Low Power"],
  },
  {
    icon: Car,
    title: "Automotive ECU Firmware",
    summary: "AUTOSAR-compliant engine control unit firmware for next-gen hybrid vehicles.",
    details: "Developed safety-critical firmware (ASIL-D) for a hybrid powertrain ECU on Infineon AURIX. Implemented CAN/CAN-FD communication stacks, diagnostic protocols (UDS), and calibration interfaces. Achieved MISRA-C compliance with full MC/DC coverage.",
    tags: ["AUTOSAR", "CAN-FD", "AURIX", "MISRA-C", "ASIL-D"],
  },
  {
    icon: Factory,
    title: "Industrial Control System",
    summary: "Real-time PLC replacement for precision manufacturing with sub-millisecond response.",
    details: "Architected a custom RTOS-based control system replacing legacy PLCs. Used STM32H7 with deterministic scheduling achieving 100μs control loops. Implemented EtherCAT master for servo drives and Modbus TCP for HMI integration.",
    tags: ["STM32H7", "EtherCAT", "RTOS", "Modbus", "Real-time"],
  },
  {
    icon: Watch,
    title: "Medical Wearable Device",
    summary: "Continuous health monitoring wearable with FDA-grade signal processing.",
    details: "Led firmware development for a medical-grade wearable tracking ECG, SpO2, and motion. Implemented DSP algorithms on nRF52840 for real-time signal analysis. Designed BLE protocol for secure data streaming to mobile apps. Achieved IEC 62304 Class C compliance.",
    tags: ["nRF52840", "BLE", "DSP", "IEC 62304", "Zephyr"],
  },
];

const ProjectCard = ({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-all cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-secondary">
          <project.icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">{project.title}</h3>
            {expanded ? (
              <ChevronUp className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-1">{project.summary}</p>

          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{project.details}</p>
          </motion.div>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="font-mono text-xs border-primary/30 text-primary/80">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">{'// Featured Projects'}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Selected <span className="text-primary text-glow">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
