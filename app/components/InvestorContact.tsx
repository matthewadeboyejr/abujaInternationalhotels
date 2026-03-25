'use client';

import { motion } from 'framer-motion';

const contactColumns = [
  {
    title: 'Investor Information',
    items: [
      { label: 'Investor Relations', value: '601 International Avenue, Suite 100\nAbuja, Nigeria' },
      { label: 'Phone', value: '+234 9 123 4567' },
      { label: 'Email', value: 'investor.relations@abujainternational.com' },
    ],
  },
  {
    title: 'Shareholder Services',
    items: [
      { label: 'Transfer Agent', value: 'ComputerShare Investor Services\nP.O. Box 43078\nProvidence, RI 02940-3078' },
      { label: 'Toll Free', value: '800 522 6645' },
      { label: 'Shareholder Website', value: 'www.computershare.com/investors' },
    ],
  },
  {
    title: 'Corporate Headquarters',
    items: [
      { label: 'Executive Offices', value: 'Abuja International Hotel\nCentral Business District\nAbuja, Nigeria 900211' },
    ],
  },
];

export default function InvestorContact() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {contactColumns.map((col, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-xs font-bold font-quicksand tracking-[0.2em] uppercase text-[#1a2b4b] mb-8 pb-4 border-b border-gray-100">
                {col.title}
              </h3>
              <div className="space-y-8">
                {col.items.map((item, iIdx) => (
                  <div key={iIdx}>
                    <span className="text-[10px] md:text-xs font-bold font-quicksand tracking-[0.1em] uppercase text-gray-400 block mb-1">
                      {item.label}
                    </span>
                    <p className="text-sm md:text-base text-[#1a2b4b]/80 font-sans leading-relaxed whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
