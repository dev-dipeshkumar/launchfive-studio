'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import Logo from '@/components/common/Logo';
import Reveal from '@/components/common/Reveal';

const footerLinks = {
  services: [
    'Full-Stack Development',
    'Mobile App Development',
    'Website Design',
    'UI/UX Design',
    'Graphic Design',
    'Branding Kits',
  ],
  company: [
    { label: 'About Us', href: '#team' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Our Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
};

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:launchfive.studio@gmail.com', label: 'Email' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id='footer' className='relative border-t border-border bg-muted/50 overflow-x-hidden'>
      <Reveal direction='up' duration={0.6} className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16'>
        {/* Mobile: 1-col stacked, Tablet: 2-col, Desktop: 4-col */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-10'>
          {/* Brand */}
          <div className='sm:col-span-2 lg:col-span-1'>
            <Logo
              iconSize={32}
              wordmarkLayout='stacked'
              wordmarkSize='default'
              className='mb-4'
            />
            <p className='text-muted-foreground text-sm leading-relaxed mb-6'>
              LaunchFive Studio is a focused 5-member creative-tech studio helping
              businesses build websites, apps, UI/UX, branding, graphics, logos,
              templates, and ad creatives with clean execution and clear communication.
            </p>
            <div className='flex gap-3 flex-wrap'>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className='w-9 h-9 min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 sm:w-9 sm:h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:shadow-[0_0_16px_rgba(124,58,237,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all'
                  whileHover={{ y: -3, scale: 1.12 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-foreground font-semibold text-sm mb-3 sm:mb-4'>Services</h4>
            <ul className='space-y-2'>
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <span className='text-muted-foreground text-sm hover:text-foreground transition-colors cursor-default'>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className='text-foreground font-semibold text-sm mb-3 sm:mb-4'>Company</h4>
            <ul className='space-y-2'>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className='relative text-muted-foreground text-sm hover:text-foreground transition-colors inline-block py-0.5 min-h-[44px] sm:min-h-0 sm:py-0 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm'
                  >
                    <span className='relative'>
                      {link.label}
                      <span className='absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full hover:w-full' />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='sm:col-span-2 lg:col-span-1'>
            <h4 className='text-foreground font-semibold text-sm mb-3 sm:mb-4'>Get in Touch</h4>
            <div className='space-y-2 sm:space-y-3'>
              <p className='text-muted-foreground text-sm'>
                <span className='text-foreground'>Email:</span> launchfive.studio@gmail.com
              </p>
              <p className='text-muted-foreground text-sm'>
                <span className='text-foreground'>Phone:</span> +91 9783569106
              </p>
              <p className='text-muted-foreground text-sm'>
                <span className='text-foreground'>WhatsApp:</span> +91 9783569106
              </p>
              <p className='text-muted-foreground text-sm'>
                <span className='text-foreground'>Hours:</span> Mon - Sat, 10AM - 7PM IST
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4'>
          <p className='text-muted-foreground text-sm'>
            &copy; {new Date().getFullYear()} LaunchFive Studio. All rights reserved.
          </p>
          <p className='text-muted-foreground text-sm flex items-center gap-1'>
            Made with <Heart size={14} className='text-[#F43F5E] fill-[#F43F5E]' /> by LaunchFive Studio
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
