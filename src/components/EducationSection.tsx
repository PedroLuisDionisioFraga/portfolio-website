import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const degreeKeys = ["bsc"] as const;

const EducationSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const certs = t("education.certs", { returnObjects: true }) as string[];

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">{t("education.tag")}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {t("education.titleStart")}<span className="text-primary text-glow">{t("education.titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Degrees */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="flex items-center gap-2 text-lg font-bold font-mono mb-6">
              <GraduationCap className="h-5 w-5 text-primary" /> {t("education.degreesLabel")}
            </h3>
            {degreeKeys.map((key) => (
              <div key={key} className="p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
                <p className="font-bold">{t(`education.degrees.${key}.title`)}</p>
                <p className="text-sm text-muted-foreground">{t(`education.degrees.${key}.institution`)} · {t(`education.degrees.${key}.year`)}</p>
                <p className="text-xs text-primary/70 font-mono mt-1">{t(`education.degrees.${key}.focus`)}</p>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="flex items-center gap-2 text-lg font-bold font-mono mb-6">
              <Award className="h-5 w-5 text-primary" /> {t("education.certsLabel")}
            </h3>
            <div className="space-y-3">
              {certs.map((c) => (
                <div key={c} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                  <span className="text-sm">{c}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
