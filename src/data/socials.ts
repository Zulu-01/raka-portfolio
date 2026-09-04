import { Instagram, Github, Linkedin, MessageCircle, Mail, type LucideIcon } from "lucide-react";

export interface SocialLink {
  label: string;
  icon: LucideIcon;
  url: string;
  color: string;
  colorTo: string;
}

export const socials: SocialLink[] = [
  { label: "Instagram", icon: Instagram, url: "https://www.instagram.com/raka_s.w.a.t/", color: "#e1306c", colorTo: "#c13584" },
  { label: "GitHub", icon: Github, url: "https://github.com/Zulu-11", color: "#e6edf3", colorTo: "#8b949e" },
  { label: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/raka-satya-wurya-andhika-63873932a/", color: "#0a66c2", colorTo: "#38bdf8" },
  { label: "WhatsApp", icon: MessageCircle, url: "https://wa.me/+6281223927487", color: "#25d366", colorTo: "#128c7e" },
  { label: "Email", icon: Mail, url: "https://mail.google.com/mail/u/0/?view=cm&to=rakaicha1@gmail.com", color: "#ea4335", colorTo: "#fbbc04" }
];
