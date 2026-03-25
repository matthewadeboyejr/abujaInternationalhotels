'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const boardMembers = [
    {
        name: 'Dr. Adetunji Adeniyi',
        title: 'Chairman',
        bio: 'Dr. Adeniyi is the Chairman of Abuja International Hotels Limited. Educated at the Universities of Ibadan (BSc; MSc; PhD Agricultural Economics) and Lagos (MBA, Accounting and Finance), Nigeria, Tunji is an Honorary Senior Member of the Chartered Institute of Bankers (HCIB) of Nigeria. He also had Executive Management training at Harvard Business School; International Development Institute, Dublin, Ireland; and Georgetown University, Washington D.C., USA.\n\nHe is a Member, Institute of Directors of Nigeria; Member, Nigeria Institute of Management; Fellow, Kenya Institute of Management; Member, African Sustainable Development Network (ASUDNET); Pioneer Member, Governing Council, Allover Central Polytechnic, Nigeria; Member, Governing Council, Ekiti State University (2007-2010) and Member, Governing Council, Management University of Africa, Kenya (2012-2014). He is a Fellow, Institute of Strategic Management of Nigeria, and Fellow of the Certified Institute of Public Administrators, Ghana.\n\nAdetunji was a pioneer Member of the Commonwealth Business Council; and a Member of the Governing Council of the Financial Institution Training Centre, Nigeria (2002/03/04). He was a Director and Chairman of the Audit Committee of Associated Discount House (ADH) Limited (2005); and, the 1st Vice President of the Nigeria Bankers Employers Group (2005).\n\nThe current Chairman of Nigeria Reinsurance Corporation, Tunji was the Managing Director/Chief Executive Officer of Trade Bank Plc (2004-2005) in Nigeria and UBA (Kenyan Bank) Limited (2012-214). He was a Volunteer Member of the Cocoa Value Chain Transformation Agenda of the Federal Government of Nigeria that developed the 18-month cocoa hybrid [CRIN Tc-1, Tc-2, and Tc-3] which the committee multiplied and distributed across the cocoa belt in Nigeria. In December 2019, Adetunji designed / charted the Cocoa Value Chain for the Central Bank of Nigeria, pro bono.\n\nHe also served as a State Commissioner for Finance and Economic Development, where he designed and implemented Best Practices in Public Financial Management (Fiscal Responsibility, Public Procurement, Public Debt Management, Accountability, Probity and Transparency). In Kenya, Tunji and his Team received an Award from the President for “Innovation and Facilitation of Government Business” for innovating and implementing an electronic tax collection platform (i-Tax) in 2013. The iTax solution won the prestigious Adam Smith Global Award in the category of ‘Best-in-Class Treasury Solution in Africa’ for the Kenyan Revenue Authority in 2016. The Adam Smith Award is globally recognised as the ultimate industry benchmark in treasury excellence.\n\nHe currently superintends over the business of Tunji Adeniyi and Associates Limited, a multi-cultural and multi-sectoral consultancy founded by him.',
        image: '/adetunji.jpg',
    },
    {
        name: 'Stephen Abiodun Ojo',
        title: 'Managing Director',
        bio: 'Otunba Ojo is the Managing Director of Abuja International Hotels Limited. A seasoned administrator, Otunba is a 1989 graduate of Accounting from Obafemi Awolowo University, Ile-Ife, Nigeria. He also earned a Master’s Degree in Accounting from Nasarawa State University, Keffi, Nigeria. He has earned the Fellowship of the following professional bodies:\n- Institute of Chartered Accountants of Nigeria (FCA)\n- Institute of Management Consultants (FIMC)\n- Institute of Credit Administration (FICA)\n- Chartered Institute of Administration (FCIA)\n\nHe is also an associate member of the following professional bodies:\n- Nigeria Institute of Taxation\n- Nigeria Institute of Management\n- Institute of Directors\n\nHe has attended many local and international courses and conferences.\n\nPrior to this role, Otunba was the Group Executive Director, Energy Group of Companies, a conglomerate that comprises Insurance, Reinsurance, Banking, Oil & Gas, Hotels and properties companies.\n\nAn experienced business / financial executive, he previously worked at:\n- Mobolaji Oluwa & Co (Chartered Accountants) as Audit Manager;\n- Nigerian Aviation Handling Company Plc (NAHCO) as Chief Finance Officer;\n- Stephen Abiodun Ojo & Co. (Chartered Accountants) as Managing Partner;\n- Great Nigeria Insurance Plc as Executive Director, Finance & Administration;\n- NICON Insurance Limited as Chief Finance Officer and Executive Director, Finance & Administration; and,\n- Air Nigeria Limited as Executive Director, Finance.\n\nStephen is also presently on the board of NICON Insurance Limited, NICON Asset Management Company (NAMCO), NICON Trustee Ltd, Omiye Microfinance Bank, Ilupeju-Ekiti Dam Oil Ltd, Trendy Hotels Ltd\n\nHe was formerly on the board of:\n- Great Nigeria Insurance Plc\n- Air Nigeria Limited\n- Ilupeju Ekiti Community Bank Limited\n- Nigeria Electricity Supply Corporation Ltd; and,\n- Nigeria Reinsurance Corporation.\n\nA socialite of high repute, Stephen is a member of:\n- Classic Club, Ilupeju Ekiti\n- Island Club, Lagos\n- Lagos Lawn Tennis Club, Lagos\n- Lagos State Civil Service Club, Lagos\n- Ijesa Sports Club, Ilesa, Osun State\n- Association of Friends Club (ASSO) Lagos\n- IBB Golf Club, Abuja\n- Ikoyi Club 1938, Lagos.',
        image: '/stephen.jpg',
    },
    {
        name: 'Oluwaseun Isaiah Jimoh-Ibrahim, MSt, LLM, PhD (Cantab) Esq',
        title: 'Director',
        bio: 'Dr. Jimoh-Ibrahim is a Solicitor and Barrister of the Supreme Court of Nigeria, qualified in 2023, with specialization in corporate, financial, and governance law. He holds an MSt in Entrepreneurship from the University of Cambridge (2020–2022), focusing on LMX motivational theory and its applications in sub-Saharan emerging markets, emphasizing leadership and innovation. He also earned an LLM in Law (specializing in Financial Services) from the University of Buckingham in 2019.\n\nAs a Director at Nicon Hotel, Abuja (since 2020), he provides strategic oversight for operations, renovations, expansions, governance improvements, policy updates, and transparency enhancements. He is a dynamic leader in finance, law, and entrepreneurship, bringing board-level experience in hospitality, insurance, and investments. His expertise includes corporate governance, strategic investments, high-stake negotiations, transparency, policy innovation, and ethical decision-making.\n\nSeun is Head of Investments across the Nicon Group, directing group-wide investment strategies in hospitality, real estate, and finance to optimize returns, mitigate risks, and lead advocacy for enhanced board governance through improved documentation, policy, and transparency.\n\nDr. Jimoh-Ibrahim is a founding Member of the Board of Trustees of the University of Fortune, Nigeria, guiding governance, educational policies, strategic planning, resource allocation, ethical standards, and long-term academic excellence. Seun started his corporate career as an Intern at First Atlantic Bank (formerly Energy Bank Ghana) Ghana in 2017. He is a member of the Board at Nicon Insurance, Nigeria (since 2025), contributing to risk management, financial strategies, compliance, and advocacy for robust policies and transparent practices to support sustainable growth.\n\nHis core skills include investment strategy and portfolio management, corporate governance, negotiation, legal compliance (KYC, AML), policy development, entrepreneurship and leadership in emerging markets, strategic planning and technical proficiency with systems such as Apple MacBook, Arch Linux, and Lenovo.',
        image: '/oluwaseun.jpg',
    },
    {
        name: 'Sir Abayomi Apata',
        title: 'Non-Executive Director',
        bio: 'Sir Abayomi Apata is a non-executive director of Abuja International Hotels Limited. A graduate of law from Obafemi Awolowo University, Sir Apata was called to the bar in 1991. He also obtained a Master of Laws from the University of Salford in the United Kingdom. He has also participated in several professional and leadership programmes, including the Advanced Leadership Programme at the University of Cambridge.\n\nHe is an accomplished legal practitioner of three and a half decades in corporate and commercial law, civil law, litigation, and general practice. He is presently the Chairman of the board of directors of Nicon Insurance Limited.',
        image: '/abayomi.jpg',
    },
    {
        name: 'Chief (Dr.) Mrs. Modupe Jimoh-Ibrahim',
        title: 'Director',
        bio: 'Dr. Mrs. Modupe Jimoh-Ibrahim, a prominent Nigerian businesswoman, philanthropist, and advocate for women\'s empowerment, is a Director. Married to the Very Distinguished Senator Jimoh Ibrahim, CFR, she supports in overseeing the Global Fleet Group, a diversified conglomerate with interests in oil and gas, real estate, media, insurance, hotels (including Abuja International Hotels) Insurance and Reinsurance.\n\nShe holds Business Administration, and Management Degrees from the Universities of Lagos, Calabar. Earlier, she earned HND in Accountancy from Lagos State Polytechnic in 1997. She later obtained a PGD in Accounting from Baze University, Abuja. She also completed the Women in Leadership Training Course at Oxford University (2016) and received an Honorary PhD from the European African American University (2014) in recognition of her contributions to leadership and community service.\n\nHer competences are in business oversight in family-led enterprises across sectors such as oil and gas, real estate, media, insurance, and hospitality, where she ensures operational efficiency, growth, and strategic directions. She is recognized for innovative approaches to entrepreneurship, economic empowerment, media communication, and youth development.\n\nAs the Founder and President of the African Women Foundation (AWF), an NGO dedicated to women\'s rights, welfare, and empowerment across Africa, she leads initiatives focused on raising awareness for gender equality, promoting education and empowerment for women and children, organizing grassroots campaigns, and addressing poverty and inequality through community development efforts.\n\nHer philanthropic and leadership contributions have earned her numerous awards and recognitions, including, but not limited to the following:\n- Icon Award of Excellence (Association of Local Governments Vice Chairmen of Nigeria - ALGOVC) (2022)\n- Women Excellence Award (2015)\n- Award of Excellence (Role Model) (2014)\n- Eminent African Leader Merit Award by Top Lead Media Communication (2008)\n- Development Association and Youth Award (2008)\n- Excellent Women Award (2007)\n- Outstanding African Women Achiever Awards (2006/07)\n- Development of Youth Award (2006/07)\n- Entrepreneurship Excellence Award (2006)\n- Role Model Gold Award by Today People Internationals (2006)\n- Business Report International Merit Award (NASOS) (2005)',
        image: '/modupe.jpg',
    },
    {
        name: 'Eziafa Rachel Kehinde-Famojuro',
        title: 'Company Secretary',
        bio: 'Mrs. Kehinde-Famojuro is a solicitor and advocate of the Supreme Court of Nigeria. She holds a Bachelor of Law (LLB) degree from the Obafemi Awolowo University, Ile-Ife, Nigeria, a Barrister at Law (B.L.) from the Nigerian Law School and a Master of Law(LLM) from the University of South Wales, United Kingdom.\n\nRachel also has a Certificate in Leadership Principles from the Harvard Business School, a Certificate in Project Management from the University of Adelaide, a Google Project Management Professional Certificate, a Certificate in Public Relations from www.alison.com, a Diploma in Human Resources, and a Certificate in Negotiation and Conflict Management from the Negotiation and Conflict Management Group (NCMG) which has also adequately prepared her for Alternative Dispute Resolution (ADR).\n\nShe is an experienced professional with strong leadership skills and is an excellent communicator. She was the Head, Legal Department of Energy Group of Companies into Hospitality, Oil & Gas, Banking, Insurance, Investments, Media and Properties Investment, with business presence in Ghana, Sao Tome & Principe, Nigeria and the UAE.\n\nShe is an active member of the Nigeria Bar Association and a registered Professional with the Financial Reporting Council of Nigeria (FRCN). She is currently the Company Secretary of Abuja International Hotel Limited.',
        image: '/eziafa.jpg',
    }
];

const managementTeam = [
    {
        name: 'Stephen Abiodun Ojo',
        title: 'Managing Director',
        bio: 'Otunba Ojo is the Managing Director of Abuja International Hotels Limited. A seasoned administrator, Otunba is a 1989 graduate of Accounting from Obafemi Awolowo University, Ile-Ife, Nigeria. He also earned a Master\'s Degree in Accounting from Nasarawa State University, Keffi, Nigeria. He has earned the Fellowship of the following professional bodies:\n- Institute of Chartered Accountants of Nigeria (FCA)\n- Institute of Management Consultants (FIMC)\n- Institute of Credit Administration (FICA)\n- Chartered Institute of Administration (FCIA)\n\nHe is also an associate member of the following professional bodies:\n- Nigeria Institute of Taxation\n- Nigeria Institute of Management\n- Institute of Directors\n\nHe has attended many local and international courses and conferences.\n\nPrior to this role, Otunba was the Group Executive Director, Energy Group of Companies, a conglomerate that comprises Insurance, Reinsurance, Banking, Oil & Gas, Hotels and properties companies.\n\nAn experienced business / financial executive, he previously worked at:\n- Mobolaji Oluwa & Co (Chartered Accountants) as Audit Manager;\n- Nigerian Aviation Handling Company Plc (NAHCO) as Chief Finance Officer;\n- Stephen Abiodun Ojo & Co. (Chartered Accountants) as Managing Partner;\n- Great Nigeria Insurance Plc as Executive Director, Finance & Administration;\n- NICON Insurance Limited as Chief Finance Officer and Executive Director, Finance & Administration; and,\n- Air Nigeria Limited as Executive Director, Finance.\n\nStephen is also presently on the board of NICON Insurance Limited, NICON Asset Management Company (NAMCO), NICON Trustee Ltd, Omiye Microfinance Bank, Ilupeju-Ekiti Dam Oil Ltd, Trendy Hotels Ltd\n\nHe was formerly on the board of:\n- Great Nigeria Insurance Plc\n- Air Nigeria Limited\n- Ilupeju Ekiti Community Bank Limited\n- Nigeria Electricity Supply Corporation Ltd; and,\n- Nigeria Reinsurance Corporation.\n\nA socialite of high repute, Stephen is a member of:\n- Classic Club, Ilupeju Ekiti\n- Island Club, Lagos\n- Lagos Lawn Tennis Club, Lagos\n- Lagos State Civil Service Club, Lagos\n- Ijesa Sports Club, Ilesa, Osun State\n- Association of Friends Club (ASSO) Lagos\n- IBB Golf Club, Abuja\n- Ikoyi Club 1938, Lagos.',
        image: '/stephen.jpg',
    },
    {
        name: 'Olufolake Tawose',
        title: 'Financial Controller',
        bio: 'Ms. Olufolake Tawose is the Financial Controller of Abuja International Hotels Limited, a position she assumed since 2021. A graduate of Accounting and Fellow of the Institute of Chartered Accountants of Nigeria (ICAN), she is an accomplished finance professional with over thirty years of post-qualification experience, spanning banking, insurance, aviation, education and hospitality.\n\nHer career trajectory reflects a steady rise through leadership roles in finance and administration. From 2015 to 2021, Ms. Tawose was the Director of Finance and Administration at Energy Bank São Tomé and Príncipe. Prior to that, she served as Bursar at Premier University, São Tomé and Príncipe between 2013 and 2015.\n\nMs. Tawose began her career at Nicon Insurance Plc, where she worked as Manager (General Accounts) and later as Head of Internal Control, strengthening financial oversight and risk management. She was the Head of Risk and Business Assurance at Air Nigeria Development Limited, Lagos.\n\nOlufolake has consistently invested in professional development through local and international training. She attended the London Leadership Conference (2005) and the Association of Accounting Bodies in West Africa Conference, Ghana (2001). She has been a regular participant in the ICAN Mandatory Continuing Professional Education (MCPE) programme annually since 1998, and the ICAN Annual Conference biennially since 1995, reflecting her dedication to continuous learning and professional excellence.',
        image: '/olufolake.jpg',
    },
    {
        name: 'Seye S. Igbasan',
        title: 'Head of Marketing',
        bio: 'Mr Igbasan is the Head of Marketing. An accomplished administrator, Seye, has held management positions across institutions and industries, spanning public sector, data systems, higher education and hospitality. In his current role, he has demonstrated strong capacity for driving business development, and sales performance. He is committed to sustainable revenue growth.\n\nWith a solid background in data analysis, and commercial strategy, Mr. Igbasan applies evidence-based approach to decision-making, marketing and performance management.\n\nPrior to his current role, Seye held academic positions as a lecturer at Nasarawa State University, and Akwa Ibom State Polytechnic, where he contributed to national data collection, survey design, quality assurance, and research coordination. He is widely published in peer-reviewed journals and recognized for his integrity, analytical depth, and commitment to institutional excellence.\n\nSeye holds a Master\'s degree in Statistics.',
        image: '/seye.jpg',
    },
    {
        name: 'Gilbert Bolaji Folorunso',
        title: 'Head of Internal Audit and Control',
        bio: 'Mr. Folorunso is the Head of Internal Audit and Control. A Fellow of the Institute of Chartered Accountants and an Associate Member of the Chartered Institute of Taxation, Bolaji also holds an MBA. He is a committed and focused due process, compliance and assurance professional bringing his long-standing experience to bear on the hotel\'s business and in regulatory reporting and tax self-assessment and compliance. He is an experienced EDP auditor.\n\nGilbert has multi-sectoral experience, having work across manufacturing, consultancy, non-governmental organisations, financial services and Hospitality. Prior to this assignment, he played similar roles at Nicon Insurance Limited. Before joining Nicon Insurance, he was an assurance and risk management consultant with GIL Financial Consulting Services, as a Senior Consultant. Between June 2013 and November 2014, he was Finance Manager, Operations, at Centre for Integrated Health Programs (an NGO). He was Audit Officer at Nigerite limited between July 1999 and October, 2006. Gilbert became Audit Senior between April 1996 and June 1999 at Ijewere & Co. (Chartered Accountants), following his professional qualification.',
        image: '/gilbert.jpg',
    },
    {
        name: 'John Cletus',
        title: 'ICT Manager',
        bio: 'Mr. Cletus is the ICT Manager. An accomplished Information Technology professional, he has over 20 years of continuous experience in hardware, software and network support, including IT security management. He holds a Bachelor of Science degree in Computer Science and Mathematics, a Master of Science degree in Information Technology, and professional certifications as a Microsoft Certified Professional (MCP), Cisco Certified Network Associate (CCNA), and Certified Wireless Network Associate (CWNA).\n\nHe is highly skilled in the design, implementation, and management of wired and wireless network infrastructures, datacenter operations, and enterprise IT systems. His expertise spans firewalls, servers, databases, electronic keycard lock systems, and helpdesk support. With a proven ability to translate business needs into technology solutions, he has successfully managed all phases of IT projects, from requirements analysis and vendor selection to implementation, training, and ongoing support.\n\nJohn began his career at Rockview Hotels (2002–2006), later served at Abuja Le Meridien, which transitioned into Nicon Luxury Abuja since 2006. At Nicon Luxury, he played a pivotal role in designing and implementing the hotel\'s datacenter and property management system. Between 2008 and 2010, he also served as Head of Human Resources while continuing to oversee ICT management, demonstrating versatility and leadership across multiple domains.\n\nCurrently, John manages the entire IT infrastructure of Nicon Luxury Abuja, where he is responsible for all technology installations and support services that ensure seamless operations and exceptional guest experience.',
        image: '/john.jpg',
    },
    {
        name: 'Alih Mohammed',
        title: 'Legal Adviser / Head of Legal',
        bio: 'Mr Mohammed is the Legal Adviser and Head of the Legal Department. He is a solicitor and advocate of the Supreme Court of Nigeria. He holds a Bachelor of Law (LLB) degree from Ahmadu Bello University, Nigeria, and a Barrister at Law (B.L.) from the Nigerian Law School. Alih holds a Master of Law (LL.M) from the Nasarawa State University, Nigeria, specializing in Corporate Governance and Finance Law. He started honing his leadership skills right from the Ahmadu Bello University, Zaria, where he was the Chief Registrar of the Student Union Government between 2005 and 2006; Secretary, Precision Chambers, Faculty of Law, in 2004; Ambassador at Large, Capital Market Students Association in 2004; Publicity Secretary, Oil and Gas Law Students Association in 2004. He was Legal Officer at the Ogun State Board of Internal Revenue during his NYSC. Before this assignment, he was Senior Manager Legal Services and Acting Company Secretary/Legal Adviser at Nicon Insurance Limited. Earlier, he had a brief stint at West Point Chambers, as Counsel (2010-2013). He was also an Associate at Head Chambers between 2014 and 2017.',
        image: '/alih.jpg',
    },
    {
        name: 'Esther Chinwendu Ugochukwu',
        title: 'Head of Human Resources',
        bio: 'Chinwendu is the Head of Human Resources and has practice the trade across several institutions, including A.C. Okocha Motors, Golden Guinea Breweries, Umuahia, Nigeria and Nicon Insurance Limited, over the last several years. An HND graduate of the Institute of Management and Technology (IMT), Enugu, Esther, has a Post Graduate Diploma in Public Administration from the University of Abuja before obtaining a Master’s degree in the same field. She is a student member of the Chartered Institute of Personnel Management (CIPM).',
        image: '/esther.jpg',
    },
    {
        name: 'Izundu Chinedu Onyeagwara',
        title: 'Maintenance Manager',
        bio: 'Mr. Onyeagwara is the Maintenance Manager at NICON Luxury Hotel. As a senior facilities leader, he is responsible for the reliable operation and maintenance of all hotel mechanical, electrical, and plumbing engineering (MEP) systems and guest-facing infrastructure. He drives preventive maintenance programs and ensures compliance with brand standards and local regulations. He sits on the senior management team, partnering with the General Manager, Operations, Finance, and Security leads. His key qualifications include education from NIIT Education & Training Centre, credentials as a Microsoft Certified Systems Engineer (MCSE), and 22 years of experience in facility maintenance. His core competencies include technical proficiency with good knowledge in HVAC, electrical distribution, mechanical, plumbing, and life safety systems; leadership in team management, budget awareness, and risk management; and communication skills for effective interaction with operation teams and guests, with the ability to translate technical needs into actionable plans. The scope of his responsibilities includes overseeing daily maintenance of guest rooms, public areas, kitchen, and back areas of the house system; monitoring energy usage, equipment upkeep, and maintenance key performance indicators (KPI) to drive cost controls; and ensuring safety, compliance, and quality standards across Nigerian regulatory and brand requirements.',
        image: '/izundu.png',
    },
    {
        name: 'Pius Abah Ogbe',
        title: 'Food and Beverage Manager',
        bio: 'Mr. Ogbe is the Food and Beverage Manager at NICON Luxury Hotel. As a senior Food and Beverage expert across the department in the hospitality industry, he sits on the senior management team, partnering with the General Manager, Operations, Sales Executives teams, Finance, and Security leads. He drives preventive measures on food handling and local regulations. His key qualifications include a Senior School Certificate Examination, First School Leaving Certificate, and over 20 years of experience in Food and Beverage. His core competencies encompass expertise in cocktails, cappuccino, mocktails, espresso, and coffee latte. The scope of his responsibilities includes overseeing that daily guest complaints are met, ensuring all service areas are working smoothly, and ensuring guest satisfaction in the hotel.',
        image: '/pius.png',
    },
    {
        name: 'Peter Isaac',
        title: 'Housekeeping Manager',
        bio: 'Peter is the Housekeeping Manager at NICON Luxury Hotel. He oversees the entire operation in the Housekeeping Department, comprising rooms and public areas. He sits on the senior management team, partnering with other Heads of Departments such as Maintenance, Front Office, and the General Manager for effective operation in the hotel. His key qualifications include a Senior School Certificate Examination, and several on-the-job training and development. He has over 20 years\' experience in the Housekeeping Department. His core competencies include expertise in cleaning and attention to details. The scope of his responsibilities includes overseeing general operation in the department, ensuring that all staff are on their toes, and ensuring guest satisfaction in the rooms.',
        image: '/peter.jpg',
    },
];

export default function LeadershipSection() {
    const [activeTab, setActiveTab] = useState<'management' | 'board'>('board');
    const [selectedMember, setSelectedMember] = useState<any>(null);
    const activeData = activeTab === 'board' ? boardMembers : managementTeam;

    const truncateBio = (text: string, limit: number = 250) => {
        if (text.length <= limit) return text;
        return text.slice(0, limit).trim() + '...';
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                {/* Tabs Navigation */}
                <div className="flex justify-center mb-32">
                    <div className="flex items-center gap-12 border-b border-gray-100 pb-4">
                        <button
                            onClick={() => setActiveTab('management')}
                            className={`text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 relative pb-4 -mb-[17px] ${activeTab === 'management'
                                ? 'text-[#DC833D] border-b-2 border-[#DC833D]'
                                : 'text-gray-300 hover:text-[#1a2b4b]'
                                }`}
                        >
                            Management Team
                        </button>
                        <div className="w-px h-4 bg-gray-100" />
                        <button
                            onClick={() => setActiveTab('board')}
                            className={`text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 relative pb-4 -mb-[17px] ${activeTab === 'board'
                                ? 'text-[#DC833D] border-b-2 border-[#DC833D]'
                                : 'text-gray-300 hover:text-[#1a2b4b]'
                                }`}
                        >
                            Board of Directors
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="space-y-40">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                            className="space-y-40"
                        >
                            {activeData.map((member, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col md:flex-row gap-16 lg:gap-32 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Text Content */}
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <div className={`w-12 h-px bg-[#DC833D] mb-8 ${index % 2 === 0 ? '' : 'ml-auto'}`} />
                                        <h3 className="text-3xl md:text-5xl font-quicksand text-[#1a2b4b] mb-4 uppercase tracking-tight">
                                            {member.name}
                                        </h3>
                                        <p className="text-[#DC833D] text-[10px] font-bold tracking-[0.2em] uppercase mb-10">
                                            {member.title}
                                        </p>
                                        <div className="text-gray-500 font-sans leading-relaxed text-sm md:text-base max-w-xl mx-auto md:mx-0">
                                            <p className="mb-6">
                                                {truncateBio(member.bio)}
                                            </p>
                                            {member.bio.length > 250 && (
                                                <button
                                                    onClick={() => setSelectedMember(member)}
                                                    className="text-[#DC833D] text-[10px] font-bold tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
                                                >
                                                    Read Full Biography
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className="flex-1 w-full max-w-sm lg:max-w-md">
                                        <div className="relative aspect-4/5 overflow-hidden transition-all duration-700 group shadow-2xl">
                                            <div className="absolute inset-0 bg-[#1a2b4b]/5 group-hover:bg-transparent transition-colors z-10" />
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bio Modal */}
                <AnimatePresence>
                    {selectedMember && (
                        <div className="fixed inset-0 z-100 flex items-center justify-center p-6 md:p-12">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedMember(null)}
                                className="absolute inset-0 bg-[#1a2b4b]/95 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", duration: 0.5 }}
                                className="relative bg-white w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl rounded-sm"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="absolute top-6 right-6 text-gray-400 hover:text-[#1a2b4b] transition-colors z-20"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="p-8 md:p-16 flex flex-col md:flex-row gap-12">
                                    <div className="w-full md:w-1/3">
                                        <div className="relative aspect-4/5 overflow-hidden shadow-xl">
                                            <Image
                                                src={selectedMember.image}
                                                alt={selectedMember.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="w-12 h-px bg-[#DC833D] mb-8" />
                                        <h3 className="text-3xl md:text-4xl font-quicksand text-[#1a2b4b] mb-4 uppercase tracking-tight">
                                            {selectedMember.name}
                                        </h3>
                                        <p className="text-[#DC833D] text-[10px] font-bold tracking-[0.2em] uppercase mb-10">
                                            {selectedMember.title}
                                        </p>
                                        <div className="text-gray-600 font-sans leading-relaxed text-sm md:text-base space-y-4">
                                            {selectedMember.bio.split('\n').map((para: string, i: number) => (
                                                <p key={i}>{para}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
