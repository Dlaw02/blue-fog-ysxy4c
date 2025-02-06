import React from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Hero Section */}
      <motion.header
        className="w-full bg-blue-900 text-white text-center py-16 px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">
          Unlock Actionable Insights. Drive Business Growth.
        </h1>
        <p className="mt-4 text-lg">
          Custom Data Extraction, Price Intelligence, Market Research &
          Analytics.
        </p>
        <button className="mt-6 bg-yellow-500 px-6 py-2 text-lg rounded-lg shadow-lg">
          Get a Free Consultation
        </button>
      </motion.header>

      {/* Pain Points & Solutions */}
      <section className="w-full max-w-5xl mt-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Data Extraction Challenges",
            desc: "Struggling to gather structured data from multiple sources?",
          },
          {
            title: "Competitive Price Intelligence",
            desc: "Need real-time pricing insights to stay ahead of competitors?",
          },
          {
            title: "Market Research & Analytics",
            desc: "Lacking deep insights to inform strategic business decisions?",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 bg-white shadow-lg rounded-lg"
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Lead Capture Form */}
      <motion.section
        className="w-full max-w-lg mt-12 p-6 bg-white shadow-lg rounded-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center">
          Let’s Discuss Your Data Needs
        </h2>
        <div className="mt-4 space-y-4">
          <input placeholder="Name" className="w-full p-2 border rounded" />
          <input
            placeholder="Business Email"
            className="w-full p-2 border rounded"
          />
          <input
            placeholder="Phone Number"
            className="w-full p-2 border rounded"
          />
          <input
            placeholder="Company Name"
            className="w-full p-2 border rounded"
          />
          <button className="w-full bg-blue-900 text-white py-2 rounded-lg shadow">
            Schedule a Free Consultation
          </button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white text-center py-6 mt-12">
        <p>DataSec Consultants © 2025 | Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
}
