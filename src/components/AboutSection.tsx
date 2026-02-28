import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Cpu, Layers, Award, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import profileImg from "/public/profile.jpeg";

const stats = [
  { icon: Briefcase, value: "5", label: "Years Experience" },
  // TODO: Fix it
  { icon: Layers, value: "5+", label: "Projects Delivered" },
  // TODO: Fix it
  { icon: Award, value: "3", label: "Certifications" },
  { icon: Cpu, value: "Mid-level Embedded Systems Engineer", label: "Current Role" },
];

const coverLetterParagraphs = [
  "Currently, I work with firmware development as a Mid-level analyst. My work so far involves firmware testing, bug fixing, and the development of new features.",
  "In my experience with firmware, I have worked with photocells connected to each other and to a gateway via a mesh network, and the gateway communicated with our APIs via cellular network, where we displayed information on energy consumption in watts, brightness, luminaire status, and dimming, where I performed bench tests and corrected any bugs found. I worked with pulse counters that were connected to simple pulse outputs, for example, in water or gas meters, and communicated with our system via API that used the NB-IoT network as a communication protocol. I have some personal projects with ESP32 and Arduino in the Smart Home area, such as controlling LED strips via Bluetooth, a presence sensor to turn on lights, and an energy sensor to measure energy consumption.",
  "In my experience with embedded Linux, I participated in the development of the Rockchip PX3 gateway where the photocells connected. I learned and tested the hardware and Linux image in the mesh network connection, cellular network, I/O pins, connection and management of the company's VPN network, certificates and static routes, Ethernet inputs with PoE, and battery control with PMIC.",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [coverLetterOpen, setCoverLetterOpen] = useState(false);

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
            Building <span className="text-primary text-glow">Connected Devices</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Profile picture */}
            <div className="relative w-64 h-64 mx-auto md:mx-0 rounded-lg border border-primary/30 border-glow overflow-hidden bg-secondary">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background to-transparent">
                <p className="font-mono text-xs text-primary/60">profile.jpeg</p>
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
              Specialized in firmware development, I am constantly seeking projects
              to enhance my skills and increase my experience, focusing on performance
              improvement, reduced power consumption, and data security in embedded IoT products,
              along with cybersecurity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am open to freelance opportunities and collaborative environments,
              whether on-site, remote, or hybrid.
            </p>

            {/* Cover Letter */}
            <div className="mt-6 rounded-lg border border-primary/20 bg-card overflow-hidden">
              <button
                onClick={() => setCoverLetterOpen(!coverLetterOpen)}
                className="w-full flex items-center justify-between px-5 py-3 text-left hover:bg-primary/5 transition-colors"
              >
                <span className="font-mono text-sm text-primary">{'// cover_letter.txt'}</span>
                {coverLetterOpen ? (
                  <ChevronUp className="h-4 w-4 text-primary/60" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-primary/60" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{ height: coverLetterOpen ? "auto" : 0, opacity: coverLetterOpen ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 space-y-3 border-t border-primary/10">
                  {coverLetterParagraphs.map((p, i) => (
                    <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
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
