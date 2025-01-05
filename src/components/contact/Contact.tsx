import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';
import { SupernovaSection } from '../background/SupernovaSection';

export default function Contact() {
  return (
    <SupernovaSection>
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-xl text-gray-300">
              Get in touch to learn more about our mission or to volunteer
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-lg">
              <div className="space-y-8">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-rose-500" />
                  <span className="ml-4 text-gray-300">Alwar, Rajasthan, India</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-rose-500" />
                  <span className="ml-4 text-gray-300">contact@alwaranimalwelfare.org</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-rose-500" />
                  <span className="ml-4 text-gray-300">+91 98765 43210</span>
                </div>
              </div>
              
              <SocialLinks />
              
              <div className="mt-8 aspect-w-16 aspect-h-9">
                <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56757.31295819273!2d76.57981582167969!3d27.566861199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397299642c861c7d%3A0x4f42f69bc8431cbb!2sAlwar%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin"
                  className="w-full h-64 rounded-lg shadow-lg"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="glass-card p-8 rounded-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </SupernovaSection>
  );
}