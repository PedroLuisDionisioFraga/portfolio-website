import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const degrees = [
  { title: "M.Sc. Electrical Engineering", institution: "MIT", year: "2013", focus: "Embedded Systems & VLSI Design" },
  { title: "B.Sc. Computer Engineering", institution: "UC Berkeley", year: "2011", focus: "Digital Systems & Microprocessors" },
];

const certs = [
  "Certified Embedded Systems Professional (CESP)",
  "ARM Accredited Engineer (AAE)",
  "AUTOSAR Certified Developer",
  "IPC-A-610 Acceptability of Electronic Assemblies",
  "Functional Safety – ISO 26262 (TÜV)",
  "AWS IoT Core Specialty",
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">{'// Credentials'}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Education & <span className="text-primary text-glow">Certifications</span>
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
              <GraduationCap className="h-5 w-5 text-primary" /> Degrees
            </h3>
            {degrees.map((d) => (
              <div key={d.title} className="p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
                <p className="font-bold">{d.title}</p>
                <p className="text-sm text-muted-foreground">{d.institution} · {d.year}</p>
                <p className="text-xs text-primary/70 font-mono mt-1">{d.focus}</p>
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
              <Award className="h-5 w-5 text-primary" /> Certifications
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
