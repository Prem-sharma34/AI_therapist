// components/Reviews.jsx
import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Ananya",
    text: "This helped me feel heard when I had no one else to talk to.",
    tone: "from-purple-500 to-pink-500",
  },
  {
    name: "Rahul",
    text: "The empathetic responses really lifted my mood!",
    tone: "from-emerald-400 to-teal-500",
  },
  {
    name: "Anuj",
    text: "Loved the voice interaction, felt like a real therapist.",
    tone: "from-indigo-500 to-purple-500",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-4xl font-bold mb-12"
        >
          What People Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: "easeOut",
              }}
            //   whileHover={{
            //     scale: 1.08,
            //     y: -6,
            //     boxShadow:
            //       "0 0 20px rgba(167, 85, 247, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)",
            //   }}
            whileHover={{
  scale: 1.08,
  y: -6,
  boxShadow:
    "0 0 20px rgba(167, 85, 247, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)",
  transition: { duration: 0.25, ease: "easeOut" },
}}

              className="relative p-6 rounded-2xl border border-white/10 
                         backdrop-blur-md shadow-xl overflow-hidden bg-white/6 
                         transition-transform duration-300"
            >
              {/* glow blob */}
              <div className="absolute inset-0 -z-10 pointer-events-none">
                <div
                  className={`absolute -right-8 -top-8 w-52 h-52 rounded-full blur-3xl opacity-60 bg-gradient-to-br ${r.tone}`}
                />
              </div>

              <p className="text-gray-200 italic text-lg">“{r.text}”</p>
              <h4 className="mt-4 text-purple-200 font-semibold">— {r.name}</h4>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/6 border border-white/8 flex items-center justify-center">
                    {r.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-200 font-medium">
                      {r.name}
                    </div>
                    <div className="text-xs text-gray-400">Verified user</div>
                  </div>
                </div>

                <div className="text-sm text-gray-300">⭐️⭐️⭐️⭐️</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <motion.a
            whileHover={{
              scale: 1.08,
              boxShadow:
                "0 10px 40px rgba(99,102,241,0.25), 0 0 30px rgba(236,72,153,0.2)",
            }}
            href="/chat"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 shadow-lg transition-transform duration-300"
          >
            Start a Secure Chat
          </motion.a>
        </div>
      </div>
    </section>
  );
}