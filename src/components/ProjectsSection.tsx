import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Wifi, Zap, BarChart2, Home } from "lucide-react";

const projects = [
  {
    icon: Wifi,
    title: "Smart Farm",
    summary: "Mobile application with embedded system integration via MQTT protocol for remote farm monitoring.",
    details: "Developed during my undergraduate research fellowship. Integrated an embedded system with a mobile app using MQTT for lightweight, real-time data exchange. The system enabled remote monitoring and control of farm sensors, bridging hardware and software layers.",
    tags: ["MQTT", "Embedded Systems", "Mobile", "IoT"],
  },
  {
    icon: BarChart2,
    title: "Park Here",
    summary: "YoloV8-based parking space analysis system integrated with a mobile application.",
    details: "Used YoloV8 object detection to identify occupied and available parking spaces from camera feeds. Integrated real-time analysis results with a mobile application, displaying live occupancy data. Focused on applying computer vision in a practical urban mobility use case.",
    tags: ["YoloV8", "Python", "Computer Vision", "Mobile"],
  },
  {
    icon: Zap,
    title: "Energy Consumption Prediction",
    summary: "LSTM and GRU neural networks for energy consumption forecasting based on historical data.",
    details: "Implemented and compared LSTM and GRU recurrent architectures to predict energy usage patterns. Trained on time-series datasets of past consumption. The model outputs short-term forecasts useful for demand planning and efficiency improvements in smart grid applications.",
    tags: ["LSTM", "GRU", "Python", "Machine Learning", "Time-Series"],
  },
  {
    icon: Home,
    title: "Smart Home (Personal)",
    summary: "ESP32/Arduino smart home projects: BLE-controlled LED strips, presence sensor, and energy monitor.",
    details: "Built several personal IoT projects: LED strip control via Bluetooth using ESP32, a PIR-based presence sensor to automate lighting, and an energy sensor measuring real-time power consumption of my gaming/development setup and air conditioning.",
    tags: ["ESP32", "Arduino", "BLE", "Smart Home", "IoT"],
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
