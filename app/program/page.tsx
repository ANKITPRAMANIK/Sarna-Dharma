'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the activity interface
interface Activity {
  id: number;
  title: string;
  description: string;
  image?: string;
  video?: string; // Optional video URL
  date: string;
  location: string;
}

// Define the activities type
type ActivitiesData = {
  ongoing: Activity[];
  upcoming: Activity[];
  past: Activity[];
}

// Define valid tab options as a type
type ActivityTab = 'ongoing' | 'upcoming' | 'past';

export default function ProgramPage() {
  const [activeTab, setActiveTab] = useState<ActivityTab>('ongoing');

  const activities: ActivitiesData = {
    ongoing: [
      {
        id: 1,
        title: "Raising Voice Against Reservation Violation",
        description: "Submission of Deputation against Violation of Reservation Rule in MAKAUT,W.B",
        video: "/protest.mp4", // Add video URL
        date: "Ongoing",
        location: "MAKAUT Main Campus"
      },
      {
        id: 2,
        title: "protest Against the issuance of the caste certificate",
        description: "Protest against the issuance of the caste certificate to the non-ST candidates in the reserved category.",
        video: "/protest2.mp4",
        date: "",
        location: "SDO office"
      }
    ],
    upcoming: [
      {
        id: 4,
        title: "Annual Cultural Festival",
        description: "Celebrating the rich cultural heritage of SC/ST communities through performances and exhibitions.",
        image: "/images/cultural-fest.jpg",
        date: "April 15, 2025",
        location: "City Hall"
      },
      {
        id: 5,
        title: "Legal Rights Workshop",
        description: "Expert-led sessions to educate community members about their legal rights and protections.",
        image: "/images/legal-workshop.jpg",
        date: "March 20, 2025",
        location: "Community Center"
      }
    ],
    past: [
      {
        id: 6,
        title: "protesting for the illeagal issuance of the caste certificate",
        description: "Illeagal issuance of the caste certificate to the non-ST candidates in the reserved category. The SC/ST candidates are deprived of their rights.",
        image: "/protest1.png",
        date: "December 2024",
        location: "kalyani SDO office"
      },
      {
        id: 7,
        title: "corruption in the recruitment of the MAKAUT",
        description: "Huge corruption has taken place at the recruitment process of the MAKAUT university. Reservation Laws of 1976 are violated. The SC/ST candidates are not getting their due rights. ",
        image: "/protest2.png",
        date: "",
        location: "MAKAUT Main Campus"
      },
      {
        id: 8,
        title: "Denying to issue the caste certificate of the ST candidates",
        description: "The SDO office is denying to issue the caste certificate of the ST candidates. The ST candidates are deprived of their constitutional rights.",
        image: "/protest3.png",
        date: "December 2024",
        location: "Kalyani SDO office"
      },
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Activities</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Dedicated to empowering and uplifting the SC/ST communities through various initiatives and programs.
          </p>
        </div>
      </div>

      {/* Activities Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-red-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveTab('ongoing')}
              className={`px-6 py-3 text-lg font-medium ${activeTab === 'ongoing'
                  ? 'bg-red-700 text-white'
                  : 'bg-white text-red-700 hover:bg-red-50'
                }`}
            >
              Ongoing
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 text-lg font-medium ${activeTab === 'upcoming'
                  ? 'bg-red-700 text-white'
                  : 'bg-white text-red-700 hover:bg-red-50'
                }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-3 text-lg font-medium ${activeTab === 'past'
                  ? 'bg-red-700 text-white'
                  : 'bg-white text-red-700 hover:bg-red-50'
                }`}
            >
              Past
            </button>
          </div>
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities[activeTab].map((activity: Activity) => (
            <div
              key={activity.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-96 relative">
                {activeTab === 'ongoing' && activity.video ? (
                  <video
                    src={activity.video}
                    controls
                    className="object-cover h-full w-full"
                    poster={activity.image}
                  />
                ) : (
                  <Image
                    src={activity.image ?? ""}
                    alt={activity.title}
                    fill
                    className="object-contain h-96 object-top"
                  />
                )}
              </div>
              <div className="p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                    {activity.date}
                  </span>
                  <span className="text-gray-600 text-sm">
                    {activity.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Get Involved?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in our mission to create positive change. Volunteer your time or support our cause through donations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              Volunteer Now
            </Link>
            <Link href="/donate" className="border-2 border-red-700 text-red-700 hover:bg-red-50 px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}