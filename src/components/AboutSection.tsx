import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Layers, Zap, Award } from "lucide-react";

const stats = [
  { icon: Cpu, value: "12+", label: "Years Experience" },
  { icon: Layers, value: "50+", label: "Projects Delivered" },
  { icon: Zap, value: "8", label: "Patents Filed" },
  { icon: Award, value: "15+", label: "Certifications" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">{'// about me'}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Crafting <span className="text-primary text-glow">Intelligent Hardware</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Profile placeholder */}
            <div className="relative w-64 h-64 mx-auto md:mx-0 rounded-lg border border-primary/30 border-glow overflow-hidden bg-secondary">
              <div className="absolute inset-0 flex items-center justify-center">
                <Cpu className="w-20 h-20 text-primary/30" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background to-transparent">
                <p className="font-mono text-xs text-primary/60">profile.jpg</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              Passionate embedded systems engineer with over 12 years of experience designing and
              developing firmware for resource-constrained devices. I specialize in real-time operating
              systems, low-power IoT devices, and safety-critical automotive systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From bare-metal programming on ARM Cortex-M microcontrollers to complex RTOS-based
              architectures, I bring products from concept to production with a focus on reliability,
              performance, and power efficiency.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
              <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold font-mono text-primary text-glow">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
