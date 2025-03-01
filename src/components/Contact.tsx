import React, { useEffect } from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  // Load HubSpot form script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js-na2.hsforms.net/forms/embed/242135639.js';
    script.defer = true;
    document.body.appendChild(script);

    // Clean up on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-ide-bg-primary">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-ide-text-secondary max-w-2xl mx-auto">
            Let's discuss how we can work together to bring your AI vision to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-ide-text-link" />
                <a href="mailto:contact@example.com" className="text-ide-text-secondary hover:text-ide-text-primary transition-colors">
                  contact@example.com
                </a>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Office Hours</h4>
                <p className="text-ide-text-secondary">Monday - Friday</p>
                <p className="text-ide-text-secondary">9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
          </div>
          
          <div>
            {/* HubSpot Form */}
            <div 
              className="hs-form-frame" 
              data-region="na2" 
              data-form-id="f99caf4a-521f-43e6-9620-2ca9ac8a676f" 
              data-portal-id="242135639"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
