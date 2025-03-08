import React from 'react';
import { Heart, Award, Calendar, Users, Target, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';   

function About() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-red-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About SARNA DHARMA, West Bengal</h1>
                        <p className="text-xl text-gray-600">
                            Founded in 2021, Sarna Dharma Mission, West Bengal has been dedicated to creating positive change through compassion,
                            action, and collaboration. Our journey is one of hope, resilience, and community impact.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <Image
                                src="/about.png"
                                alt="Sarna Dharma Mission, West Bengal founders"
                                className="rounded-lg shadow-xl"
                                width={600} height={600}
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                Sarna Dharma Mission, West Bengal began with a simple idea: that small acts of kindness can create ripples of change.
                                Founded by Mr. Probhat Konra and Mr. Banamali Sardar after witnessing the struggles in their local community,
                                our organization started as a weekend food program serving 20 families.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Over the years, we&apos;ve grown to address multiple community needs through sustainable programs
                                that empower individuals and strengthen communities. What hasn&apos;t changed is our commitment
                                to treating everyone with dignity and respect.
                            </p>
                            <p className="text-gray-600">
                                Today, Sarna Dharma Mission, West Bengal serves thousands of people annually through our various programs,
                                powered by dedicated staff and hundreds of passionate volunteers who share our vision
                                of a more equitable and compassionate world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Journey</h2>

                    <div className="max-w-4xl mx-auto">
                        {/* Timeline Item */}
                        <div className="flex flex-col md:flex-row mb-12">
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <div className="flex items-center md:justify-end md:pr-10">
                                    <Calendar className="h-6 w-6 text-red-600 mr-2" />
                                    <span className="text-xl font-bold text-gray-800">2021</span>
                                </div>
                            </div>
                            <div className="md:w-2/3 md:border-l-2 border-red-200 md:pl-10 relative">
                                <div className="absolute left-0 top-0 -ml-1 md:-ml-2.5 mt-1 w-2 h-2 rounded-full bg-red-600 hidden md:block"></div>
                                <h3 className="text-xl font-semibold mb-2">Foundation</h3>
                                <p className="text-gray-600">
                                    Sarna Dharma Mission, West Bengal was founded by Shri Probhat Konra and Shri Banamali Sardar with a focus on weekend food programs for families in need.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item */}
                        <div className="flex flex-col md:flex-row mb-12">
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <div className="flex items-center md:justify-end md:pr-10">
                                    <Calendar className="h-6 w-6 text-red-600 mr-2" />
                                    <span className="text-xl font-bold text-gray-800">2022</span>
                                </div>
                            </div>
                            <div className="md:w-2/3 md:border-l-2 border-red-200 md:pl-10 relative">
                                <div className="absolute left-0 top-0 -ml-1 md:-ml-2.5 mt-1 w-2 h-2 rounded-full bg-red-600 hidden md:block"></div>
                                <h3 className="text-xl font-semibold mb-2">Expansion</h3>
                                <p className="text-gray-600">
                                    Launched our education support program, providing tutoring and resources to help students succeed academically.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item */}
                        <div className="flex flex-col md:flex-row mb-12">
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <div className="flex items-center md:justify-end md:pr-10">
                                    <Calendar className="h-6 w-6 text-red-600 mr-2" />
                                    <span className="text-xl font-bold text-gray-800">2023</span>
                                </div>
                            </div>
                            <div className="md:w-2/3 md:border-l-2 border-red-200 md:pl-10 relative">
                                <div className="absolute left-0 top-0 -ml-1 md:-ml-2.5 mt-1 w-2 h-2 rounded-full bg-red-600 hidden md:block"></div>
                                <h3 className="text-xl font-semibold mb-2">Community Center</h3>
                                <p className="text-gray-600">
                                    Opened our first dedicated community center, creating a hub for all our programs and services.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item */}
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <div className="flex items-center md:justify-end md:pr-10">
                                    <Calendar className="h-6 w-6 text-red-600 mr-2" />
                                    <span className="text-xl font-bold text-gray-800">2024</span>
                                </div>
                            </div>
                            <div className="md:w-2/3 md:border-l-2 border-red-200 md:pl-10 relative">
                                <div className="absolute left-0 top-0 -ml-1 md:-ml-2.5 mt-1 w-2 h-2 rounded-full bg-red-600 hidden md:block"></div>
                                <h3 className="text-xl font-semibold mb-2">Regional Impact</h3>
                                <p className="text-gray-600">
                                    Expanded our reach to five neighboring communities, helping over 5,000 people annually through our various programs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our Values</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
                        These core principles guide everything we do at Sarna Dharma Mission, West Bengal.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">Compassion</h3>
                            <p className="text-gray-600 text-center">
                                We approach our work with empathy and understanding, recognizing the dignity in every person we serve.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">Impact</h3>
                            <p className="text-gray-600 text-center">
                                We focus on creating meaningful, measurable change that addresses root causes of community challenges.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">Collaboration</h3>
                            <p className="text-gray-600 text-center">
                                We believe in the power of partnership and work alongside community members and organizations.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">Excellence</h3>
                            <p className="text-gray-600 text-center">
                                We strive for the highest standards in all our programs and services, continuously improving our approach.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Lightbulb className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">Innovation</h3>
                            <p className="text-gray-600 text-center">
                                We embrace creative solutions and adapt to meet evolving community needs effectively.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">Inclusivity</h3>
                            <p className="text-gray-600 text-center">
                                We welcome and respect people of all backgrounds, ensuring our services are accessible to everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our Leadership Team</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
                        Meet the dedicated individuals who guide our organization&apos;s mission and vision.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md items-center flex flex-col justify-center">
                            <Image
                                src="/ShriProbhatKonra.png"
                                alt="Maria Rodriguez" width={100} height={800} 
                                className="w-fit h-96 object-cover object-top"
                            />
                            <div className="p-6 flex flex-col items-center">
                                <h3 className="text-xl font-semibold mb-1">Mr. Probhat Konra</h3>
                                <p className="text-red-600 mb-4">President</p>
                                <p className="text-gray-600 mb-4">
                                    With over 5 years of experience in community development, Mr. Probhat leads our organization with passion and vision.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <Image
                                src="/ShriBanamaliSardar.png"
                                alt="Mr. Banamali Sardar" width={100} height={800}
                                className="w-full h-96 object-cover object-top"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1">Mr. Banamali Sardar</h3>
                                <p className="text-red-600 mb-4">Vice president</p>
                                <p className="text-gray-600 mb-4">
                                    Mr. Banamali oversees our daily operations and program implementation, ensuring we deliver on our promises to the community.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <Image
                                src="/ShriKishoreSardar.png"
                                alt="Mr. Kishore Sardar" width={100} height={100}
                                className="w-full h-96 object-cover object-top"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1">Mr. Kishore Sardar</h3>
                                <p className="text-red-600 mb-4">General Secretary</p>
                                <p className="text-gray-600 mb-4">
                                   Mr. Kishore Sardar develops and manages our educational and community outreach programs with creativity and dedication.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/trustdirectory" className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition font-medium">Meet Our Full Team</Link>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our Partners</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
                        We collaborate with these organizations to maximize our community impact.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                            <p className="text-xl font-bold text-gray-400">City Foundation</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                            <p className="text-xl font-bold text-gray-400">United Way</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                            <p className="text-xl font-bold text-gray-400">Community College</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                            <p className="text-xl font-bold text-gray-400">Local Hospital</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                            <p className="text-xl font-bold text-gray-400">Tech for Good</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                            <p className="text-xl font-bold text-gray-400">Food Bank Network</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                            <p className="text-xl font-bold text-gray-400">Youth Alliance</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                            <p className="text-xl font-bold text-gray-400">Green Initiatives</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-red-600 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
                    <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
                        Be part of our story. Together, we can create lasting positive change in our communities.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link href="/donate" className="bg-white text-red-600 px-6 py-3 rounded-md hover:bg-gray-100 transition font-medium">Donate Now</Link>
                        <Link href="/volunteer" className="border border-white text-white px-6 py-3 rounded-md hover:bg-red-700 transition font-medium">Volunteer</Link>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default About;