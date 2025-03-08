import {Users} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (

    <div className="min-h-screen bg-white">

      <section className="bg-red-50 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Making a Difference Together</h1>
            <p className="text-xl text-gray-600 mb-8">We are dedicated to creating positive change in the SC, ST community through compassion, action, and collaboration.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact" className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition font-medium text-center">Get Involved</Link>
              <Link href="/about" className="border border-red-600 text-red-600 px-6 py-3 rounded-md text-center hover:bg-red-50 transition font-medium">Learn More</Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/home.png"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            To empower communities through sustainable programs that address critical needs and create lasting positive impact.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-red-100 w-24 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                 {/* <Heart className="h-8 w-8 text-red-600" /> */}
                <img src="https://tathagat.live/cdn/shop/products/IMG_20221021_163426_441-01.jpg?v=1666350761" width={32} height={32} alt="Heart Icon" className="h-32 w-32 rounded-lg" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compassionate Care</h3>
              <p className="text-gray-600">Providing support and resources to those in need with dignity and respect.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Building</h3>
              <p className="text-gray-600">Fostering connections and collaboration to strengthen our communities.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-red-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* <Globe className="h-8 w-8 text-red-600" /> */}
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHm_-Q16apt3Ohlr9AOg94QP4jOlqN98918YCtSPdnDWzpqmQn-nXdJTJOqsWo0D9tGQQFifvodA7kn3UCgYluLQ" width={32} height={32} alt="Globe Icon" className="h-32 w-fit rounded-lg" />
              </div>
               <h3 className="text-xl font-semibold mb-2">Sustainable Impact</h3>
              <p className="text-gray-600">Creating long-term solutions that address root causes of social challenges.</p> 
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-red-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">4+</p>
              <p className="text-lg">Years of Service</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">5,000+</p>
              <p className="text-lg">People Helped</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">20+</p>
              <p className="text-lg">Community Programs</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-lg">Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            We offer a variety of programs designed to address different needs in our community.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/education1.png"
                alt="Education program"
                width={780} height={192}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Education Support</h3>
                <p className="text-gray-600 mb-4">Providing tutoring, mentorship, and resources to help students succeed.</p>
                <a href="#" className="text-red-600 font-medium hover:text-red-800">Learn more →</a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/culture1.png"
                alt="Food assistance program" width={780} height={192}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Culture Assistance</h3>
                <p className="text-gray-600 mb-4">preserving the culture of the Indegenious tribe.</p>
                <a href="#" className="text-red-600 font-medium hover:text-red-800">Learn more →</a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/outreach1.png"
                alt="/Community outreach"
                width={780} height={192}
                className="object-cover h-96"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Community Outreach</h3>
                <p className="text-gray-600 mb-4">Building stronger communities through events, workshops, and support services.</p>
                <a href="/about" className="text-red-600 font-medium hover:text-red-800">Learn more →</a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition font-medium">View All Programs</button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Voices from Our Community</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">The support I received from Sarna Dharma changed my life. Their education program gave me the tools and confidence I needed to pursue my dreams.</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 font-bold">SM</span>
                </div>
                <div>
                  <p className="font-semibold">Manish</p>
                  <p className="text-gray-500 text-sm">Program Participant</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">Volunteering with SARNA DHARMA has been one of the most rewarding experiences of my life. The impact we make together is truly inspiring.</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 font-bold">JD</span>
                </div>
                <div>
                  <p className="font-semibold">Rohit.</p>
                  <Link href="/contact" className="text-gray-500 text-sm">Volunteer</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Us in Making a Difference</h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
            Whether you volunteer, donate, or spread the word, your support helps us create positive change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href={"/donate"} className="bg-white text-red-600 px-6 py-3 rounded-md hover:bg-gray-100 transition font-medium">Donate Now</Link>
            <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-red-700 transition font-medium">Volunteer</button>
          </div>
        </div>
      </section>
    </div>
  );

}
