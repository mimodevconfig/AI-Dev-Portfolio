import React from 'react';
import { Footer } from './blocks/footer';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Blocks, 
  Code2, 
  Briefcase,
  Users,
  MessageSquare,
  Scale,
  Handshake
} from 'lucide-react';

export default function AppFooter() {
  return (
    <Footer
      brand={{
        name: "Michael Moceri",
        description: "AI Product Developer and Technology Leader",
      }}
      socialLinks={[
        {
          name: "Github",
          href: "https://github.com/yourusername",
        },
        {
          name: "LinkedIn",
          href: "https://linkedin.com/in/yourusername",
        },
        {
          name: "YouTube",
          href: "https://youtube.com",
        },
				{
          name: "Instagram",
          href: "https://instagram.com",
        },
      ]}
      columns={[
        {
          title: "Navigation",
          links: [
            {
              name: "Projects",
              Icon: Blocks,
              href: "#projects",
            },
            {
              name: "Skills",
              Icon: Code2,
              href: "#skills",
            },
            {
              name: "Experience",
              Icon: Briefcase,
              href: "#experience",
            },
            {
              name: "About",
              Icon: Users,
              href: "#about",
            },
            {
              name: "Contact",
              Icon: MessageSquare,
              href: "#contact",
            },
          ],
        },
        {
          title: "Resources",
          links: [
            {
              name: "Resume",
              Icon: FileText,
              href: "/resume.pdf",
            },
            {
              name: "Github",
              Icon: Github,
              href: "https://github.com/yourusername",
            },
            {
              name: "LinkedIn",
              Icon: Linkedin,
              href: "https://linkedin.com/in/yourusername",
            },
            {
              name: "Email",
              Icon: Mail,
              href: "mailto:your.email@example.com",
            },
          ],
        },
        {
          title: "Legal",
          links: [
            {
              name: "Privacy Policy",
              Icon: Scale,
              href: "https://www.youtube.com/watch?v=qItugh-fFgg",
              target: "_blank",
              rel: "noopener noreferrer"
            },
            {
              name: "Terms of Service",
              Icon: Handshake,
              href: "https://www.youtube.com/watch?v=6X_kx2xhx8M",
              target: "_blank",
              rel: "noopener noreferrer"
            },
          ],
        },
      ]}
      copyright="© 2025 Michael Moceri. All rights reserved."
    />
  );
}
