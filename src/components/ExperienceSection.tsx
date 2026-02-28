import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const experienceKeys = ["nouvennMid", "nouvennIntern", "inatelMonitor", "inatelResearch"] as const;

const ExperienceSection = () => {
  const { t } = useTranslation();
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
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">{t("experience.tag")}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {t("experience.titleStart")}<span className="text-primary text-glow">{t("experience.titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {experienceKeys.map((key, i) => {
            const highlights = t(`experience.items.${key}.highlights`, { returnObjects: true }) as string[];
            return (
              <motion.div
                key={key}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 mt-6 z-10" />

                <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="font-mono text-xs text-primary">{t(`experience.items.${key}.period`)}</span>
                  <h3 className="text-lg font-bold mt-1">{t(`experience.items.${key}.role`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`experience.items.${key}.company`)}</p>
                  <ul className={`mt-3 space-y-1 ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                    {highlights.map((h) => (
                      <li key={h} className="text-sm text-muted-foreground">
                        <span className="text-primary/60 mr-1">›</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
