import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-amber-800 mr-3" />
              <a href="mailto:atmanezarkaoui@gmail.com" className="hover:text-amber-800">
                atmanezarkaoui@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-amber-800 mr-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-amber-800 mr-3" />
              <span>123 Traditional Ave, Fashion District</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};