"useclient"
import React from 'react';
import { Mail, Linkedin, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    email?: string;
    linkedin?: string;
    website?: string;
  }
const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Mr.Probhat Konra",
      role: "President",
      bio: "Mr. Probhat has over 15 years of experience in nonprofit leadership and international development. She previously worked with UNICEF and holds a Master's in Public Administration from Harvard Kennedy School.",
      image: "/ShriProbhatKonra.png",
      email: "sarah@example.org",
      linkedin: "https://linkedin.com/in/example",
      website: "https://example.com"
    },
    {
      id: 2,
      name: "Mr. Banamali Sardar",
      role: "Vice President",
      bio: "Mr. Banamali is a seasoned business leader with a passion for social impact. He founded three successful tech startups and now dedicates his time to nonprofit governance and strategic planning.",
      image: "/ShriBanamaliSardar.png",
      email: "michael@example.org",
      linkedin: "https://linkedin.com/in/example"
    },
    {
      id: 3,
      name: "Mr. Kishore Sardar",
      role: "General Secretary",
      bio: "Mr. Kishore has spent a decade implementing community development programs across Africa and Asia. He specializes in education initiatives and holds a PhD in International Development from LSE.",
      image: "/ShriKishoreSardar.png",
      email: "amara@example.org"
    },
    {
      id: 4,
      name: "Mr. Barun Mahato",
      role: "Treasurer",
      bio: "Mr. Barun brings 20 years of financial management experience to our organization. He previously served as CFO at major international relief organizations and ensures our resources create maximum impact.",
      image: "/ShriBarunMahato.png",
      email: "david@example.org",
      linkedin: "https://linkedin.com/in/example"
    },
    {
      id: 5,
      name: "Mr. Biplab Sardar",
      role: "Assistant Secretary",
      bio: "Mr. Biplab is a human rights attorney who has worked with the UN and various international NGOs. She brings legal expertise and a deep commitment to justice to our governance team.",
      image: "/ShriBiplabSardar.png",
      linkedin: "https://linkedin.com/in/example"
    },
    {
      id: 6,
      name: "Mr. swapan Sardar",
      role: "Executive Member- I",
      bio: "Mr. Swapan our global operations and logistics. With a background in international relief work, he ensures our programs are delivered efficiently and effectively in challenging environments.",
      image: "/ShriSwapanSardar.png",
      email: "james@example.org"
    },
    {
      id: 7,
      name: " Mr. Golak Sardar",
      role: "Executive Member- II",
      bio: "Mr. Golak our global operations and logistics. With a background in international relief work, he ensures our programs are delivered efficiently and effectively in challenging environments.",
      image: "/ShriGolakSardar.png",
      email: "james@example.org"
    }
  ];
 const TrustDirectory = () => {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                Our Leadership Team
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
                Meet the dedicated individuals who guide our mission and ensure accountability in all we do.
              </p>
            </div>
  
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <li key={member.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                  <div className="w-full flex flex-col items-center p-6 space-y-6">
                    <Image height={128} width={128}
                      className="w-36 h-36 rounded-full object-cover object-top" 
                      src={member.image} 
                      alt={member.name} 
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-medium text-black">{member.name}</h3>
                      <p className="text-red-600 font-medium">{member.role}</p>
                    </div>
                    <p className="text-gray-700 text-sm text-center">{member.bio}</p>
                    <div className="flex space-x-3">
                      {member.email && (
                        <Link 
                          href={`mailto:${member.email}`} 
                          className="text-gray-600 hover:text-red-500"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="h-5 w-5" />
                        </Link>
                      )}
                      {member.linkedin && (
                        <Link
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-600 hover:text-red-500"
                          aria-label={`LinkedIn profile of ${member.name}`}
                        >
                          <Linkedin className="h-5 w-5" />
                        </Link>
                      )}
                      {member.website && (
                        <Link
                          href={member.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-600 hover:text-red-500"
                          aria-label={`Website of ${member.name}`}
                        >
                          <Globe className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
  
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-black mb-4">Our Commitment to Transparency</h3>
            <p className="text-gray-700 mb-4">
              We believe in complete transparency in our operations, finances, and impact. Our annual reports, financial statements, and program evaluations are available to the public.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold text-lg text-black mb-2">Annual Reports</h4>
                <p className="text-gray-700 text-sm">Access our detailed annual reports showcasing our impact, challenges, and financial overview.</p>
                <Link href="#" className="text-red-600 hover:text-red-800 text-sm font-medium mt-2 inline-block">View Reports →</Link>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold text-lg text-black mb-2">Financial Statements</h4>
                <p className="text-gray-700 text-sm">Review our audited financial statements and see how we allocate resources.</p>
                <Link href="#" className="text-red-600 hover:text-red-800 text-sm font-medium mt-2 inline-block">View Finances →</Link>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold text-lg text-black mb-2">Governance Documents</h4>
                <p className="text-gray-700 text-sm">Learn about our organizational structure, bylaws, and governance policies.</p>
                <Link href="#" className="text-red-600 hover:text-red-800 text-sm font-medium mt-2 inline-block">View Documents →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default TrustDirectory;