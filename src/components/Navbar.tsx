import { useState } from "react";
import { Menu, Terminal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

const navKeys = [
  { key: "nav.about", href: "#about" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.experience", href: "#experience" },
  { key: "nav.education", href: "#education" },
  { key: "nav.contact", href: "#contact" },
];

const languages = [
  { code: "en", label: "English", flagIso: "us" },
  { code: "pt-BR", label: "Português (BR)", flagIso: "br" },
  { code: "pt-PT", label: "Português (PT)", flagIso: "pt" },
  { code: "es", label: "Español", flagIso: "es" },
];

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const current = languages.find((l) => l.code === i18n.language) ?? languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="mr-2 flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold border border-primary/40 rounded-full text-primary hover:bg-primary/10 transition-colors">
          <span className={`fi fi-${current.flagIso} rounded-sm`} style={{ fontSize: "1rem", lineHeight: 1 }} />
          <span>{current.code.toUpperCase()}</span>
          <ChevronDown className="h-3 w-3" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px] bg-background border-border">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`font-mono text-xs cursor-pointer gap-2 ${
              i18n.language === lang.code ? "text-primary font-bold" : "text-muted-foreground"
            }`}
          >
            <span className={`fi fi-${lang.flagIso} rounded-sm`} style={{ fontSize: "1.1rem", lineHeight: 1 }} />
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="absolute top-4 left-10 flex items-center gap-2 font-mono text-primary text-glow">
          <Terminal className="h-5 w-5" />
          <span className="font-bold tracking-wider">&lt;ENG/&gt;</span>
        </a>

        {/* Desktop */}
        <div className="absolute top-4 right-10 hidden md:flex items-center gap-1">
          <LanguageDropdown />
          {navKeys.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="px-3 py-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              {t(item.key)}
            </button>
          ))}
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border">
            <SheetTitle className="text-primary font-mono">{t("nav.navigation")}</SheetTitle>
            <div className="mt-8 flex flex-col gap-4">
              {navKeys.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-left px-3 py-2 font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(item.key)}
                </button>
              ))}
              <div className="mt-4 space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`flex items-center gap-2 px-3 py-2 text-sm font-mono rounded-lg transition-colors w-full text-left ${
                      i18n.language === lang.code
                        ? "text-primary font-bold bg-primary/10 border border-primary/30"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <span className={`fi fi-${lang.flagIso} rounded-sm`} style={{ fontSize: "1.2rem", lineHeight: 1 }} />
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
