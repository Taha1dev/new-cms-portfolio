import { Mail, Phone, MapPin, Calendar, Github, Linkedin, Twitter } from "lucide-react";
import AnimatedSection from "./animated-section";
import { FlexibleGlobe } from "./chunks/contact-globe";
import Medium from "./chunks/medium";


export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "taha.bus11@gmail.com",
      link: "mailto:taha.bus11@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+963 99172 9116",
      link: "tel:+963991729116",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Damascus, Syria",
      link: "#",
    },
    {
      icon: Calendar,
      label: "Availability",
      value: "Currently available for projects",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/taha1dev",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/taha-al-mulla-17a76923a/",
    },
    {
      icon: Medium,
      label: "Medium",
      link: "https://medium.com/@TahaDev",
    },
  ];

  return (
    <section id="contact" className="py-20 !bg-background !z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-main-600">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Globe Component - Hidden on mobile, visible on medium screens and up */}
          <div className="hidden md:block order-2 lg:order-1 h-full">
            <FlexibleGlobe />
          </div>

          {/* Right side - Contact Information */}
          <div className="space-y-8 order-1 md:order-2">
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-start gap-6 p-6 rounded-xl border border-border bg-card hover:border-main-600/30 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-main-600/10 border border-main-700/20 flex items-center justify-center group-hover:bg-main-600 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-main-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">
                        {item.label}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-main-600 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Follow me on
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-main-600 hover:border-main-600 hover:scale-110 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}