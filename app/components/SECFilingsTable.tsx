'use client';

import { useState } from 'react';
import { Search, ChevronDown, FileText, Download, FileSpreadsheet, FileCode, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface Filing {
  date: string;
  form: string;
  description: string;
  group: string;
  formats: ('html' | 'pdf' | 'xls' | 'doc')[];
}

const filings: Filing[] = [
  /*   { date: 'Mar 02, 2026', form: '4', description: 'Statement of changes in beneficial ownership of securities', group: '3,4,5', formats: ['html', 'pdf', 'xls', 'doc'] },
    { date: 'Feb 27, 2026', form: '144', description: 'Filed by "insiders" prior intended sale of restricted stock.', group: 'Other', formats: ['html', 'pdf', 'doc'] },
    { date: 'Feb 25, 2026', form: '10-K', description: 'Annual report which provides a comprehensive overview of the company for the past year', group: 'Annual Filings', formats: ['html', 'pdf', 'xls', 'doc'] },
    { date: 'Feb 19, 2026', form: '4', description: 'Statement of changes in beneficial ownership of securities', group: '3,4,5', formats: ['html', 'pdf', 'xls', 'doc'] },
    { date: 'Feb 19, 2026', form: '4', description: 'Statement of changes in beneficial ownership of securities', group: '3,4,5', formats: ['html', 'pdf', 'xls', 'doc'] },
    { date: 'Feb 19, 2026', form: '4', description: 'Statement of changes in beneficial ownership of securities', group: '3,4,5', formats: ['html', 'pdf', 'xls', 'doc'] },
    { date: 'Feb 18, 2026', form: '8-K', description: 'Report of unscheduled material events or corporate event', group: 'Current Reports', formats: ['html', 'pdf', 'xls', 'doc'] }, */
];

export default function SECFilingsTable() {
  const [searchTerm, setSearchTerm] = useState('');

  const IconMap = {
    html: Globe,
    pdf: FileText,
    xls: FileSpreadsheet,
    doc: FileCode,
  };

  return (
    <div className="space-y-12">
      {/* Intro Text */}
      <div className="max-w-4xl mx-auto text-left space-y-6">
        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-sans">
          Below are the SEC filings for Abuja International Hotels, Inc., which are each required to file reports with the Securities and Exchange Commission.
        </p>
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-sans italic border-l-2 border-[#DC833D] pl-6">
          Abuja International Hotels, Inc. conducts all of its operations through its various subsidiaries and strategic partnerships across high-growth markets. This page provides a comprehensive library of all mandatory disclosures.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-gray-50/50 p-8 md:p-12 border border-gray-100 rounded-sm">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Keyword Search */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl md:text-3xl font-serif text-[#1a2b4b]">SEC Filings Keyword</span>
            <div className="w-12 h-0.5 bg-[#DC833D] mb-4" />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search..."
                className="grow bg-white border border-gray-200 px-6 py-4 text-sm font-sans focus:outline-none focus:border-[#DC833D] transition-colors shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-white border border-[#c4a062] text-[#c4a062] px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#c4a062] hover:text-white transition-all shadow-sm">
                Search
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white border border-gray-100 shadow-xl overflow-x-auto">
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-2xl font-serif text-[#1a2b4b]">SEC Filings</h2>
              <div className="w-8 h-px bg-[#DC833D] mt-2" />
            </div>

            {/* Filter Row */}
            <div className="p-6 bg-[#ECE08F]/10 flex flex-wrap gap-8 items-center border-b border-gray-100">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Group</span>
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-200 px-4 py-2 pr-10 text-xs font-sans focus:outline-none cursor-pointer">
                    <option>Choose from list</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Filing Year</span>
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-200 px-4 py-2 pr-10 text-xs font-sans focus:outline-none cursor-pointer">
                    <option>- Any -</option>
                    <option>2026</option>
                    <option>2025</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Table */}
            <table className="w-full text-left font-sans">
              <thead className="bg-gray-50/50">
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Filing date</th>
                  <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Form</th>
                  <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Description</th>
                  <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Filing Group</th>
                  <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-gray-400 uppercase">View</th>
                </tr>
              </thead>
              <tbody>
                {filings.map((filing, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50/30 transition-colors group">
                    <td className="px-6 py-5 text-sm text-gray-600 whitespace-nowrap">{filing.date}</td>
                    <td className="px-6 py-5 text-sm font-bold text-[#1a2b4b]">{filing.form}</td>
                    <td className="px-6 py-5 text-sm text-[#1a2b4b] max-w-md leading-relaxed">{filing.description}</td>
                    <td className="px-6 py-5 text-sm text-gray-500">{filing.group}</td>
                    <td className="px-6 py-5">
                      <div className="flex gap-2">
                        {filing.formats.map((format) => {
                          const Icon = IconMap[format];
                          return (
                            <button key={format} className="text-gray-300 hover:text-[#DC833D] transition-colors" title={format.toUpperCase()}>
                              <Icon className="w-4 h-4" />
                            </button>
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="p-8 flex justify-center items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center bg-[#1a2b4b] text-white text-xs font-bold rounded-sm">1</button>
              {[2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <button key={num} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[#1a2b4b] text-xs font-bold transition-colors">{num}</button>
              ))}
              <span className="text-gray-300 mx-2">...</span>
              <button className="text-xs font-bold text-gray-400 hover:text-[#1a2b4b] transition-colors uppercase tracking-widest px-4 py-2">Next &gt;</button>
              <button className="text-xs font-bold text-gray-400 hover:text-[#1a2b4b] transition-colors uppercase tracking-widest px-4 py-2">Last &gt;&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
