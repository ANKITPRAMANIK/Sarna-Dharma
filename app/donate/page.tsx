"use client";
import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
import Head from "next/head";

interface FormData {
  name: string;
  email: string;
  amount: number;
  transactionId: string;
  message?: string;
}
interface Donor {
  id: string,
  name: string,
  email: string,
  transactionId: string,
  message: string,
  amount: number,
  approved: boolean,
  createdAt: Date
}

export default function DonatePage() {
  const [showThankYou, setShowThankYou] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [donors, setDonors] = useState<(Donor | undefined)[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  // Add state for form fields
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    amount: 0,
    transactionId: "",
    message: ""
  });

  const handleonChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!formData.name || !formData.email || formData.amount <= 0 || !formData.transactionId) {
      
      return; // Stop execution if validation fails
    }

    
    // Handle form submission logic here
    const data = await fetch('/api/submitpayment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
      }),
    })
    const res = await data.json();
    if (res.message === "sucess") {
      
      setShowThankYou(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowThankYou(false);
        if (formRef.current) {
          formRef.current.reset();
        }
      }, 3000);
      setFormData({
        name: "",
        email: "",
        amount: 0,
        transactionId: "",
      })
    }
  };
  const fetchDonors = async () => {
    setLoading(true); // Set loading to true before fetch starts
    try {
      const data = await fetch('/api/submitpayment', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await data.json();
      
      setDonors(res);
    } catch (error) {
      console.error("Failed to fetch donors:", error);
    } finally {
      setLoading(false); // Set loading to false when fetch completes
    }
  }

  useEffect(() => {
    fetchDonors()
  }, [])


  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Donate - Our Organization</title>
      </Head>

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-red-700 text-center mb-8">
          Make a Difference Today
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column: Donation information */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">
              Bank Transfer Details
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-white border border-red-100 rounded">
                <h3 className="text-lg font-medium text-red-600">Organization Name</h3>
                <p className="text-gray-700">SARNA DHARMA MISSION WEST BENGAL</p>
              </div>

              <div className="p-4 bg-white border border-red-100 rounded">
                <h3 className="text-lg font-medium text-red-600">Bank Account</h3>
                <p className="text-gray-700">Account Number:10220005651151</p>
                <p className="text-gray-700">Bank Name: Bandhan Bank(chowgachha)</p>
                <p className="text-gray-700">IFSC Code: BDBL0001576</p>
                <p className="text-gray-700">Branch Code: 001576</p>
                <p className="text-gray-700">MICR Code: 741750601</p>
              </div>

              <div className="p-4 bg-white border border-red-100 rounded">
                <h3 className="text-lg font-medium text-red-600">Tax Benefits</h3>
                <p className="text-gray-700">
                  Your donations towards Mission has 80 G Tax exemptions and hold Registration No. IV-130100095/2021
                </p>
              </div>

              <div className="p-4 bg-white border border-red-100 rounded">
                <h3 className="text-lg font-medium text-red-600">Contact Us</h3>
                <p className="text-gray-700">Email: donations@organization.org</p>
                <p className="text-gray-700">Phone: (+91) 9609752070</p>
              </div>
            </div>
          </div>

          {/* Right column: Donation form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            {showThankYou ? (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center">
                <h3 className="text-xl font-bold">Thank You for Your Donation!</h3>
                <p className="mt-2">Your support helps us make a difference.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">
                  Submit Your Donation Details
                </h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name" value={formData.name}
                      required onChange={(e) => handleonChange(e)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email" value={formData.email}
                      required onChange={(e) => handleonChange(e)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="amount" className="block text-gray-700 mb-1">Donation Amount</label>
                    <input
                      type="number"
                      id="amount" value={formData.amount}
                      required onChange={(e) => handleonChange(e)}
                      min="1"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="transactionId" className="block text-gray-700 mb-1">Transaction ID</label>
                    <input
                      type="text"
                      id="transactionId" value={formData.transactionId}
                      onChange={(e) => handleonChange(e)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-1">Message (Optional)</label>
                    <textarea
                      id="message" value={formData.message}
                      onChange={(e) => handleonChange(e)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition-colors"
                  >
                    Submit Donation Details
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Previous donors section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-red-700 text-center mb-8">
            Our Generous Donors
          </h2>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600 mb-4"></div>
              <p className="text-lg text-gray-600">Loading donor information...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-red-600 text-black">
                  <tr>
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left">Amount</th>
                    <th className="px-6 py-3 text-left">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {donors.length > 0 && donors.map((donor, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{donor?.name}</td>
                      <td className="px-6 py-4 border-b border-gray-200 text-gray-700">₹{donor?.amount.toLocaleString()}</td>
                      <td className="px-6 py-4 border-b border-gray-200 text-gray-700 italic">{donor?.message || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="text-center mt-6">
            <p className="text-gray-600 italic">
              We extend our heartfelt gratitude to all our donors. Your generosity makes our mission possible.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}