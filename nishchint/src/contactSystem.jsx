import { useState } from "react";

export default function ContactSystem() {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const launchSystem = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setOpened(true);
    }, 2500);
  };

  const handleSubmit = async () => {
    if (!name || !message) {
      alert("Fill both fields first.");
      return;
    }

    setSending(true);

    try {
      const formData = {
        name,
        message,
        time: new Date().toISOString(),
      };

      await fetch("https://script.google.com/macros/s/AKfycbwvksm3sTlzdUBmqpArxs5CXmY3vkjERgzVLXnKHn8y2EWKJOZByL8mOY5zpxsxZ4zf/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setName("");
      setMessage("");

      alert("Transmission Sent!");
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }

    setSending(false);
  };

  return (
    <section className="relative px-8 md:px-20 py-32 border-t border-white/5 text-white overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#FF2E88]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* INITIAL BUTTON */}
      {!opened && !loading && (
        <div className="flex justify-center">
          <button
            onClick={launchSystem}
            className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-105 transition"
          >
            CONTACT NISHA
          </button>
        </div>
      )}

      {/* LOADING */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-24 h-24 rounded-full border border-white/10 border-t-[#FF2E88] animate-spin" />
          <p className="mt-8 text-sm tracking-[0.3em] text-white/50 font-mono">
            ESTABLISHING CONNECTION...
          </p>
        </div>
      )}

      {/* OPENED SYSTEM */}
      {opened && (
        <div className="max-w-6xl mx-auto animate-contactReveal">

          {/* HEADER */}
          <div className="mb-14">
            <p className="font-mono text-[#FF2E88] tracking-[0.3em] text-xs">
              // CONNECTION ESTABLISHED
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Communication Channels
            </h2>
          </div>
{/* COMMUNICATION CHANNELS */}
<div className="grid md:grid-cols-3 gap-6 mb-14">

  {/* EMAIL */}
  <a
    href="mailto:yourmail@gmail.com"
    className="
      group relative overflow-hidden
      rounded-3xl border border-white/10
      bg-white/[0.03] backdrop-blur-xl
      p-7 transition-all duration-500
      hover:-translate-y-2
      hover:border-[#FF2E88]/40
    "
  >

    {/* glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#FF2E88]/10 via-transparent to-transparent" />

    <p className="relative text-xs tracking-[0.35em] text-white/30 font-mono">
      EMAIL NODE
    </p>

    <h3 className="relative mt-6 text-2xl font-semibold">
      Direct Contact
    </h3>

    <p className="relative mt-3 text-sm text-white/45 leading-relaxed">
      For collaborations, freelance projects, and business inquiries.
    </p>

    <div className="relative mt-10 flex items-center justify-between">
      <span className="text-[#FF2E88] text-sm tracking-[0.2em]">
        Email : mebeingnisha@gmail.com
      </span>

      <span className="text-white/30 group-hover:translate-x-2 transition">
        →
      </span>
    </div>

  </a>

  {/* LINKEDIN */}
  <a
    href="https://www.linkedin.com/in/nisha-shabbir-696758308?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
    className="
      group relative overflow-hidden
      rounded-3xl border border-white/10
      bg-white/[0.03] backdrop-blur-xl
      p-7 transition-all duration-500
      hover:-translate-y-2
      hover:border-[#7A5CFF]/40
    "
  >

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#7A5CFF]/10 via-transparent to-transparent" />

    <p className="relative text-xs tracking-[0.35em] text-white/30 font-mono">
      PROFESSIONAL NODE
    </p>

    <h3 className="relative mt-6 text-2xl font-semibold">
      LinkedIn
    </h3>

    <p className="relative mt-3 text-sm text-white/45 leading-relaxed">
      Explore experience, certifications, and professional presence.
    </p>

    <div className="relative mt-10 flex items-center justify-between">
      <span className="text-[#7A5CFF] text-sm tracking-[0.2em]">
        VIEW PROFILE
      </span>

      <span className="text-white/30 group-hover:translate-x-2 transition">
        →
      </span>
    </div>

  </a>

  {/* INSTAGRAM */}
  <a
    href="https://instagram.com"
    target="_blank"
    className="
      group relative overflow-hidden
      rounded-3xl border border-white/10
      bg-white/[0.03] backdrop-blur-xl
      p-7 transition-all duration-500
      hover:-translate-y-2
      hover:border-pink-400/40
    "
  >

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-pink-400/10 via-transparent to-transparent" />

    <p className="relative text-xs tracking-[0.35em] text-white/30 font-mono">
      SOCIAL NODE
    </p>

    <h3 className="relative mt-6 text-2xl font-semibold">
      Instagram
    </h3>

    <p className="relative mt-3 text-sm text-white/45 leading-relaxed">
      Visual experiments, creative concepts, and aesthetic snapshots.
    </p>

    <div className="relative mt-10 flex items-center justify-between">
      <span className="text-pink-400 text-sm tracking-[0.2em]">
        ENTER FEED
      </span>

      <span className="text-white/30 group-hover:translate-x-2 transition">
        →
      </span>
    </div>

  </a>

</div>

          {/* INPUT BOX */}
          <div className="mt-14 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl space-y-6">

            <h3 className="text-2xl font-semibold mb-4">
              Leave a Message
            </h3>

            {/* NAME */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-[#FF2E88]"
            />

            {/* MESSAGE */}
            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Any comments?"
              className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-[#7A5CFF] resize-none"
            />

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              disabled={sending}
              className="px-8 py-4 rounded-xl bg-[#84023a] hover:scale-105 transition disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Transmission"}
            </button>
          </div>

        </div>
      )}

      {/* STYLES */}
      <style>{`
        @keyframes contactReveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-contactReveal {
          animation: contactReveal 1s ease forwards;
        }
      `}</style>

    </section>
  );
}