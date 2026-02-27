import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const specialties = ["Firmware Development", "IoT Systems", "MQTT / BLE / WiFi", "ESP32 · STM32 · Silabs", "Embedded Linux"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Animated circuit lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute circuit-line w-full"
            style={{ top: `${20 + i * 15}%` }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 2, delay: i * 0.3, ease: "easeOut" }}
          />
        ))}
        {/* Corner accents */}
        <div className="absolute top-20 left-10 w-20 h-20 border-l border-t border-primary/20" />
        <div className="absolute bottom-20 right-10 w-20 h-20 border-r border-b border-primary/20" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.p
          className="font-mono text-primary text-sm mb-4 tracking-[0.3em] uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {'> Hello, World'}
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Firmware Developer
          <br />
          <span className="text-primary text-glow">Junior Analyst</span>
        </motion.h1>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {specialties.map((s, i) => (
            <motion.span
              key={s}
              className="px-3 py-1 text-xs font-mono border border-primary/30 rounded-full text-primary/80"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              {s}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Button
            size="lg"
            className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 border-glow"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-mono border-primary/50 text-primary hover:bg-primary/10"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Me
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6 text-primary/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
