import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "An exceptional AI developer who consistently delivers innovative solutions. Their work on our ML infrastructure transformed our capabilities.",
    author: "Sarah Chen",
    role: "CTO, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    quote: "Rare combination of technical expertise and business acumen. They don't just build AI systems; they create value.",
    author: "Michael Rodriguez",
    role: "VP Engineering, DataTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    quote: "Their leadership in AI product development has been instrumental in our success. Highly recommended for complex AI initiatives.",
    author: "Emily Watson",
    role: "Product Director, AI Innovations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-ide-bg-primary">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-ide-text-secondary max-w-2xl mx-auto">
            Trusted by industry leaders to deliver exceptional AI solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-ide-bg-dropdown rounded-xl p-6 shadow-sm border border-ide-ui-border">
              <Quote className="w-10 h-10 text-ide-text-link mb-4" />
              <blockquote className="text-ide-text-secondary mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-ide-text-primary">{testimonial.author}</div>
                  <div className="text-ide-text-secondary text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
