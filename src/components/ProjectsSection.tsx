import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Wifi, Zap, BarChart2, TableCellsSplit } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { LucideIcon } from "lucide-react";

const projectDefs = [
  { icon: Wifi, key: "smartFarm", tags: ["ESP32", "Wi-Fi", "MQTT", "DHT11", "LDR", "HD-38", "IoT"] },
  { icon: BarChart2, key: "parkHere", tags: ["Python", "YoloV8", "Computer Vision", "Mobile", "Parking"] },
  { icon: Zap, key: "energyPrediction", tags: ["Python", "LSTM", "GRU", "Machine Learning", "Time-Series"] },
  { icon: TableCellsSplit, key: "smartLab", tags: ["JavaScript", "Next.js", "Web", "VS1838B KY-022", "KY-005"] },
  // TODO: Add my personal projects
];

interface ProjectCardProps {
  icon: LucideIcon;
  translationKey: string;
  tags: string[];
  index: number;
  inView: boolean;
}

const ProjectCard = ({ icon: Icon, translationKey, tags, index, inView }: ProjectCardProps) => {
  const { t } = useTranslation();
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
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">{t(`projects.items.${translationKey}.title`)}</h3>
            {expanded ? (
              <ChevronUp className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-1">{t(`projects.items.${translationKey}.summary`)}</p>

          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{t(`projects.items.${translationKey}.details`)}</p>
          </motion.div>

          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
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
  const { t } = useTranslation();
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
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">{t("projects.tag")}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {t("projects.titleStart")}<span className="text-primary text-glow">{t("projects.titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projectDefs.map((project, i) => (
            <ProjectCard key={project.key} icon={project.icon} translationKey={project.key} tags={project.tags} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
