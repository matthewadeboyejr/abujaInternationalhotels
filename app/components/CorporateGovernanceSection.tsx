'use client';

import React from 'react';

const EnsureItemsLeft = [
    "A majority of our Board members are independent of management.",
    "The committees of the Board are Audit; Compensation; and Nominating, Governance and Corporate Responsibility. We apply board standards uniformly.",
    "The independent members of the Board meet regularly without the presence of management."
];

const EnsureItemsRight = [
    "The charters of our Board committees clearly establish their respective roles and responsibilities.",
    "The Board of Directors has adopted and reviewed conflicts of interest policy to ensure that no corporate decision are made by directors who do not have an independent mind and do not receive separate from their interest as company officials.",
    "Our non-management directors are subject to strong stock ownership targets in the company and are subject to stock ownership guidelines."
];

const Charters = [
    "Audit Committee Charter",
    "Culture and Compensation Committee Charter",
    "Nominating, Governance and Corporate Responsibility Committee Charter"
];

const GovDocs = [
    "Corporate Governance Guidelines",
    "Bylaws",
    "Director Independence Standards",
    "Executive Stock Ownership Guidelines",
    "Code of Business Conduct and Ethics",
    "Human Rights Policy",
    "Supplier Code of Conduct",
    "Environmental Policy",
    "Occupational Health and Safety Policy"
];

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:text-[#1a2b4b] transition-colors">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black mx-auto">
      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
    </svg>
);

const DocIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black mx-auto">
      <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clipRule="evenodd" />
      <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
    </svg>
);


export default function CorporateGovernanceSection() {
    const renderBlock = (items: string[]) => (
        <div className="flex flex-col gap-10">
            {items.map((item, idx) => (
                <div key={idx} className="text-center h-full flex flex-col justify-between">
                    <p className="text-xs md:text-sm font-semibold tracking-wide leading-relaxed text-[#1a2b4b]">
                        {item}
                    </p>
                    {idx < items.length - 1 && (
                        <div className="w-6 h-px bg-[#DC833D] mx-auto mt-10" />
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <div className="w-full bg-white pb-32">
            {/* Ensuring the Following Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
                <h2 className="text-3xl md:text-5xl font-extralight text-[#1a2b4b] text-center mb-16 uppercase tracking-tight">
                    Ensuring the Following
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 relative">
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-100" />
                    {renderBlock(EnsureItemsLeft)}
                    {renderBlock(EnsureItemsRight)}
                </div>
            </section>

            {/* Committee Composition Section */}
            <section className="bg-[#fcfcfc] py-24 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <h2 className="text-3xl md:text-4xl font-extralight text-[#1a2b4b] text-center mb-6 uppercase tracking-tight flex items-center justify-center gap-4">
                        Committee Composition
                        <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">↑</span>
                    </h2>
                    <p className="text-center text-xs text-gray-500 mb-12">
                        Below is a summary of our committee structure and membership information.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs text-[#1a2b4b] border-collapse bg-[#f2ebd9]/30 rounded-lg overflow-hidden">
                            <thead className="bg-[#e8dec6]/50 border-b border-[#d8cdb6]">
                                <tr>
                                    <th className="py-4 px-6 font-bold uppercase tracking-widest"><UserIcon /> Chairperson</th>
                                    <th className="py-4 px-6 font-bold uppercase tracking-widest"><UserIcon /> Member</th>
                                    <th className="py-4 px-6 font-bold uppercase tracking-widest text-center"><DocIcon /> Financial Expert</th>
                                    <th className="py-4 px-6 font-bold uppercase tracking-widest text-center">⚑ Lead Director</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-[#e8dec6]">
                                    <td colSpan={4} className="py-3 px-6 text-center text-[10px] uppercase font-bold tracking-[0.2em]">
                                        <div className="grid grid-cols-3">
                                            <span>Audit<br />Committee</span>
                                            <span>Culture and Compensation<br />Committee</span>
                                            <span>Nominating, Governance and Corporate<br />Responsibility Committee</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b border-[#e8dec6] hover:bg-white/50 transition-colors">
                                    <td className="py-3 px-6">Dr. Adetunji Adeniyi</td>
                                    <td className="py-3 px-6 text-center"></td>
                                    <td className="py-3 px-6 flex justify-center"><UserIcon /></td>
                                    <td className="py-3 px-6 text-center"><UserIcon /></td>
                                </tr>
                                <tr className="border-b border-[#e8dec6] hover:bg-white/50 transition-colors">
                                    <td className="py-3 px-6 relative">Sir Abayomi Apata <span className="absolute right-4">⚑</span></td>
                                    <td className="py-3 px-6 flex justify-center"><UserIcon /></td>
                                    <td className="py-3 px-6 text-center"></td>
                                    <td className="py-3 px-6 flex justify-center"><UserIcon /></td>
                                </tr>
                                <tr className="border-b border-[#e8dec6] hover:bg-white/50 transition-colors">
                                    <td className="py-3 px-6">Dr. Oluwaseun Isaiah Jimoh-Ibrahim</td>
                                    <td className="py-3 px-6 text-center"></td>
                                    <td className="py-3 px-6 flex justify-center"><UserIcon /></td>
                                    <td className="py-3 px-6 flex justify-center"><UserIcon /></td>
                                </tr>
                                <tr className="border-b border-[#e8dec6] hover:bg-white/50 transition-colors">
                                    <td className="py-3 px-6">Chief (Dr.) Mrs. Modupe Jimoh-Ibrahim</td>
                                    <td className="py-3 px-6 flex justify-center"><UserIcon /></td>
                                    <td className="py-3 px-6 text-center"></td>
                                    <td className="py-3 px-6 flex justify-center"><UserIcon /></td>
                                </tr>
                                <tr className="border-b border-[#e8dec6] hover:bg-white/50 transition-colors">
                                    <td className="py-3 px-6 relative">Eziafa Rachel Kehinde-Famojuro <span className="absolute right-4 text-[10px]">FE</span></td>
                                    <td className="py-3 px-6 text-center"></td>
                                    <td className="py-3 px-6 flex justify-center"><UserIcon /></td>
                                    <td className="py-3 px-6 flex justify-center"><UserIcon /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Documents Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-extralight text-[#1a2b4b] mb-10 pb-4 border-b border-gray-200">
                            Committee Charters
                        </h3>
                        <ul className="space-y-4">
                            {Charters.map((doc, idx) => (
                                <li key={idx}>
                                    <a href="#" className="group flex items-start justify-between py-3 border-b border-gray-100 hover:border-[#DC833D] transition-colors">
                                        <span className="text-xs md:text-sm font-semibold text-[#1a2b4b] group-hover:text-[#DC833D] transition-colors pr-6">
                                            {doc}
                                        </span>
                                        <DownloadIcon />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <span className="absolute -top-12 -right-12 w-8 h-8 rounded-full bg-black text-white items-center justify-center text-xs hidden md:flex">↑</span>
                        <h3 className="text-2xl md:text-3xl font-extralight text-[#1a2b4b] mb-10 pb-4 border-b border-gray-200">
                            Governance Documents
                        </h3>
                        <ul className="space-y-4">
                            {GovDocs.map((doc, idx) => (
                                <li key={idx}>
                                    <a href="#" className="group flex items-start justify-between py-3 border-b border-gray-100 hover:border-[#DC833D] transition-colors">
                                        <span className="text-xs md:text-sm font-semibold text-[#1a2b4b] group-hover:text-[#DC833D] transition-colors pr-6">
                                            {doc}
                                        </span>
                                        <DownloadIcon />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
