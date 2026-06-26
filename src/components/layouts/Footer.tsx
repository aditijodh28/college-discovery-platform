"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              CollegeDiscovery
            </h2>

            <p className="text-slate-300 leading-8">
              India's smart college discovery platform.
              Find the right college for your bright future.
            </p>

            <div className="space-y-6 mt-10">

              <div className="flex items-center gap-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Phone size={18} />
                </div>
                <span>+91 9876543210</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Mail size={18} />
                </div>
                <span>support@collegefinder.in</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <MapPin size={18} />
                </div>
                <span>Amravati, Maharashtra, India</span>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-5 mt-10">
             <Social><FaFacebook size={20} /></Social>

<Social><FaInstagram size={20} /></Social>

<Social><FaTwitter size={20} /></Social>

<Social><FaLinkedin size={20} /></Social>

<Social><FaYoutube size={20} /></Social> </div>
          </div>

          {/* EXPLORE */}
          <div>
            <Title text="EXPLORE" />
            <Item text="All Colleges" />
            <Item text="All Courses" />
            <Item text="All Exams" />
            <Item text="Rankings" />
            <Item text="Compare Colleges" />
            <Item text="Scholarships" />
            <Item text="News & Updates" />
            <Item text="Education Loans" />
            <Item text="AI Predictor" />
            <Item text="Career Explorer" />
          </div>

          {/* STREAMS */}
          <div>
            <Title text="TOP STREAMS" />
            <Item text="Engineering Colleges" />
            <Item text="Management Colleges" />
            <Item text="Medical Colleges" />
            <Item text="Law Colleges" />
            <Item text="Science Colleges" />
            <Item text="Arts Colleges" />
            <Item text="Commerce Colleges" />

            <br />

            <Title text="TOP COURSES" />
            <Item text="B.Tech" />
            <Item text="MBA" />
            <Item text="MBBS" />
            <Item text="BCA" />
            <Item text="BBA" />
          </div>

          {/* EXAMS */}
          <div>
            <Title text="TOP EXAMS" />
            <Item text="JEE Main" />
            <Item text="MHT CET" />
            <Item text="GATE" />
            <Item text="CAT" />
            <Item text="CUET" />
            <Item text="NEET" />

            <br />

            <Title text="QUICK LINKS" />
            <Item text="Privacy Policy" />
            <Item text="Terms of Service" />
            <Item text="Contact Us" />
            <Item text="About Us" />
          </div>

        </div>

        {/* BOTTOM CONTACT */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-emerald-900 to-cyan-900 rounded-3xl p-8 flex flex-col lg:flex-row justify-between items-center gap-8">

            <div>
              <h2 className="text-3xl font-bold">Get In Touch</h2>
              <p className="text-slate-300 mt-2">
                We're here to help with your college journey
              </p>
            </div>

            <div className="flex gap-5 flex-wrap">

              <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-full font-bold flex items-center gap-3 transition duration-300 hover:scale-105">
                <Phone size={18} />
                +91 9876543210
              </button>

              <button className="border border-slate-500 hover:bg-slate-800 px-8 py-4 rounded-full font-bold flex items-center gap-3 transition duration-300 hover:scale-105">
                <Mail size={18} />
                Send Email
              </button>

            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-slate-400">
        © 2026 CollegeFinder | Built by Aditi Jodh
      </div>
    </footer>
  );
}

/* ---------------- HELPERS ---------------- */

function Title({ text }: { text: string }) {
  return <h2 className="font-bold text-2xl mb-6">{text}</h2>;
}

function Item({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5 text-slate-300 hover:text-emerald-400 cursor-pointer transition duration-300">
      <ChevronRight size={16} />
      {text}
    </div>
  );
}

function Social({ children }: { children: ReactNode }) {
  return (
    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-emerald-600 hover:scale-110 transition duration-300">
      {children}
    </div>
  );
}