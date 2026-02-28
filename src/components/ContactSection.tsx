import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: t("contact.toastTitle"), description: t("contact.toastDescription") });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">{t("contact.tag")}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {t("contact.titleStart")}<span className="text-primary text-glow">{t("contact.titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Input
              placeholder={t("contact.namePlaceholder")}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-card border-border focus:border-primary"
            />
            <Input
              type="email"
              placeholder={t("contact.emailPlaceholder")}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-card border-border focus:border-primary"
            />
            <Textarea
              placeholder={t("contact.messagePlaceholder")}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="bg-card border-border focus:border-primary"
            />
            <Button type="submit" className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 border-glow w-full">
              <Send className="h-4 w-4 mr-2" /> {t("contact.send")}
            </Button>
          </motion.form>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-secondary">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t("contact.emailLabel")}</p>
                <p className="font-mono text-sm">pedrodfraga@hotmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-secondary">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t("contact.locationLabel")}</p>
                <p className="font-mono text-sm">{t("contact.location")}</p>
              </div>
            </div>

            <div className="circuit-line w-full my-6" />

            <div className="flex gap-4">
              <a href="https://github.com/PedroLuisDionisioFraga" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-secondary hover:bg-primary/10 border border-border hover:border-primary/30 transition-colors">
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a href="https://www.linkedin.com/in/pedro-luis-dionisio-fraga/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-secondary hover:bg-primary/10 border border-border hover:border-primary/30 transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a href="mailto:pedrodfraga@hotmail.com" className="p-3 rounded-lg bg-secondary hover:bg-primary/10 border border-border hover:border-primary/30 transition-colors">
                <Mail className="h-5 w-5 text-primary" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
