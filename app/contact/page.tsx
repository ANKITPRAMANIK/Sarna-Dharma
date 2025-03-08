'use client';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        text: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Here you would normally send the data to your backend
        // Simulating API call
        try {
            const data = await fetch('/api/submitmessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const response = await data.json();
            
            if (response.message) {
                setSubmitMessage('Thank you for your message. We will get back to you soon!');
                setFormData({ name: '', email: '', subject: '', text: '' });
            }
        } catch (_error) {
            console.log(_error, 'error');
            setSubmitMessage('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-red-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Contact Us</h1>
                    <p className="text-xl max-w-3xl mx-auto text-center">
                        We are here to help. Reach out to Sarna Dharma Mission, West Bengal with any questions or concerns.
                    </p>
                </div>
            </div>

            {/* Contact Information Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6 text-red-600">Send us a message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                                <textarea
                                    id="text"
                                    name="text"
                                    value={formData.text}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium transition duration-300 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Submit Message'}
                            </button>
                            {submitMessage && (
                                <p className={`mt-4 ${submitMessage.includes('thank you') ? 'text-green-600' : 'text-red-600'}`}>
                                    {submitMessage}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-red-600">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="text-red-600 mr-4 mt-1">
                                    <FaMapMarkerAlt className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Our Location</h3>
                                    <p className="text-gray-700">
                                        Village- Kashimpur, P.O.-chowgacha, P.S.-chakdaha,<br />
                                        Dist- Nadia, PIN- 741223, West Bengal(India)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="text-red-600 mr-4 mt-1">
                                    <FaPhone className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Phone</h3>
                                    <p className="text-gray-700">(+91) 9609752070</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="text-red-600 mr-4 mt-1">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Email</h3>
                                    <p className="text-gray-700">sarnadmwb21@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="text-red-600 mr-4 mt-1">
                                    <FaClock className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Hours</h3>
                                    <p className="text-gray-700">
                                        Monday-Friday: 9am - 5pm<br />
                                        Saturday: 10am - 2pm<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}