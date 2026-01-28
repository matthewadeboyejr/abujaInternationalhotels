'use client';

import { useState } from 'react';
import { Plus, Minus, MessageSquare, MapPin, HelpCircle } from 'lucide-react';

export default function CommonQueriesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const queries = [
    {
      question: 'Do you offer group discounts?',
      answer: 'Yes, we offer group discounts for bookings of 5 rooms or more. Please contact our reservations team for more information.'
    },
    {
      question: 'How can I make a reservation?',
      answer: 'You can make a reservation directly through our website or by calling our reservations desk.'
    },
    {
      question: 'Is there a cancellation policy?',
      answer: 'Yes, cancellations made 24 hours prior to check-in are free of charge. Late cancellations may incur a fee.'
    },
    {
      question: 'Is there parking available?',
      answer: 'Yes, we provide complimentary secure parking for all our guests.'
    },
    {
      question: 'What is the check-in/check-out time?',
      answer: 'Check-in is from 2:00 PM, and check-out is until 12:00 PM.'
    },
    {
      question: 'What types of accommodations do you offer?',
      answer: 'We offer a range of accommodations from Deluxe Rooms to Royal Suites and Penthouses.'
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-4 md:mx-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Side: Header & Image */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight">
              Common<br />Queries
            </h2>

            <div className="relative rounded-3xl overflow-hidden h-[300px] w-full">
              <img
                src="/hero-image.jpeg"
                alt="Common Queries"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xl font-medium text-black max-w-xs">
              What are the check-in and check-out times for accommodations?
            </p>
          </div>

          {/* Center: Accordion */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {queries.map((query, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg font-medium text-black">{query.question}</span>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                      {query.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Experts Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-4xl p-8 h-full">
              {/* Avatars */}


              <h3 className="text-xl font-medium text-black mb-8 leading-snug">
                Need more help? Chat with our team.
              </h3>

              <div className="space-y-6 mb-12">
                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors group">
                  <HelpCircle className="w-5 h-5" />
                  <span className="group-hover:underline">FAQ Page</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors group">
                  <MapPin className="w-5 h-5" />
                  <span className="group-hover:underline">Contact us</span>
                </a>
              </div>

              <button className="w-full py-4 bg-black text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors mt-auto">
                Chat with us
                <MessageSquare className="w-4 h-4 fill-white" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
