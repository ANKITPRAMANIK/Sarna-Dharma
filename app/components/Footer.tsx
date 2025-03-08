"use client"
import React from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="HelpingHands Logo"
                width={50}
                height={50}
                className="object-contain rounded-full w-20"
              />
              <span className="text-xl font-bold">Sarna Dharma Mission, West Bengal.</span>
            </div>
            <p className="text-gray-400 mb-4">Making a positive impact in the SC ST community since 2021.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/program" className="text-gray-400 hover:text-white">Programs</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Get Involved</Link></li>
              <li><Link href="/donate" className="text-gray-400 hover:text-white">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Education Support</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Food Assistance</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Community Outreach</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Mentorship</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Emergency Relief</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-around">
                <MapPin className="h-20 w-20 text-red-400 mr-1" />
                <span className="text-gray-400">Village- Kashimpur, P.O.-chowgacha, P.S.-chakdaha, Dist- Nadia, PIN- 741223, West Bengal(India)</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-400 mr-2" />
                <span className="text-gray-400">(+91) 9609752070</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-400 mr-2" />
                <span className="text-gray-400">sarnadmwb21@gmail.com</span>
              </li>
              <li className="flex items-center">
                {/* <Mail className="h-5 w-5 text-red-400 mr-2" /> */}
                <span className="text-gray-400"></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Swarna Dharma Mission, West Bengal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer