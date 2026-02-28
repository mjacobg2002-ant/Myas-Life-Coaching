import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Layers,
  Target,
  BookOpen,
  Users
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';


// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
    <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center">
          <Heart className="w-4 h-4 text-white fill-white" />
        </div>
        <span className="font-serif italic text-lg tracking-tight text-stone-800">Abide and Thrive Coaching</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-stone-500">
        <a href="#philosophy" className="hover:text-stone-900 transition-colors">Philosophy</a>
        <a href="#approach" className="hover:text-stone-900 transition-colors">Who It's For</a>
        <a href="#pricing" className="hover:text-stone-900 transition-colors">Pricing</a>
        <a href="https://calendly.com/myagrisard/30min" target="_blank" rel="noopener noreferrer" className="bg-stone-900 text-white px-6 py-3 rounded-full hover:bg-stone-800 transition-all">
          Free Clarity Call
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#faf9f6]">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-px bg-stone-300"></div>
          <span className="text-stone-400 text-xs font-bold tracking-[0.2em] uppercase">
            1-on-1 Christian Coaching & Accountability
          </span>
        </div>
        <h1 className="font-serif italic text-5xl md:text-7xl leading-[1.1] text-stone-900 mb-8">
          Your Faith Isn't Weak — Your Life Just Needs Structure.
        </h1>
        <p className="text-xl text-stone-600 leading-relaxed mb-10 max-w-lg">
          I believe many Christian women are walking around with a <strong>cluttered soul</strong> — not for lack of faith, but for lack of support.
        </p>
        <div className="flex flex-col sm:row gap-4">
          <a href="https://calendly.com/myagrisard/30min" target="_blank" rel="noopener noreferrer" className="bg-stone-900 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-stone-800 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-stone-200">
            Book a Free Clarity Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <p className="mt-8 text-stone-400 text-sm italic flex items-center gap-2">
          <Sparkles className="w-4 h-4" /> 1-on-1 private support for clarity, consistency, and peace.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative"
      >
        <div className="rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
        <ImageWithFallback 
  src="/9678094d24b0a68670340c0c32d7c10e9185a630.png"
  alt="Relatable woman in mid 30s"
  className="w-full h-auto block"
/>
        </div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-stone-200/50 rounded-full blur-3xl -z-0"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/40 rounded-full blur-3xl -z-0"></div>
      </motion.div>
    </div>
  </section>
);

// Quote banner between sections
const QuoteBanner = ({ quote, light = false }: { quote: string; light?: boolean }) => (
  <div className={`py-14 ${light ? 'bg-white' : 'bg-[#f4f0eb]'} border-y border-stone-100`}>
    <div className="max-w-4xl mx-auto px-6 text-center">
      <p className="font-serif italic text-2xl md:text-3xl text-stone-700 leading-relaxed">
        "{quote}"
      </p>
    </div>
  </div>
);

const Philosophy = () => (
  <section id="philosophy" className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="flex items-center gap-3 justify-center mb-6">
        <div className="w-10 h-px bg-stone-300"></div>
        <span className="text-stone-400 text-xs font-bold tracking-[0.2em] uppercase">My Philosophy</span>
        <div className="w-10 h-px bg-stone-300"></div>
      </div>
      <h2 className="font-serif italic text-4xl text-stone-900 mb-12">My Philosophy</h2>
      <div className="p-12 md:p-16 bg-[#faf9f6] rounded-[3rem] border border-stone-100 relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
          <Sparkles className="w-6 h-6 text-stone-400" />
        </div>
        <p className="text-2xl md:text-3xl font-serif italic text-stone-800 leading-relaxed mb-10">
          "I believe every woman has the ability to walk in purpose and freedom. My coaching is designed to guide, support, and equip you with clarity and practical steps so you can move forward with confidence — so you can walk in the freedom He promised."
        </p>
        <div className="w-16 h-px bg-stone-300 mx-auto mb-6"></div>
        <p className="text-stone-500 uppercase tracking-widest text-xs font-bold">— Mya</p>
      </div>
    </div>
  </section>
);

// The warm quote block replacing "What This Isn't"
const WarmQuoteBlock = () => (
  <div className="py-20 bg-[#f7f4ef]">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <div className="relative inline-block">
        <div className="absolute -top-4 -left-4 w-10 h-10 text-stone-300 font-serif" style={{ fontSize: '5rem', lineHeight: 1 }}>"</div>
        <p className="font-serif italic text-2xl md:text-3xl text-stone-800 leading-relaxed px-10 pt-6">
          No awkward couches, no judgement, no 'fixing' you — just real conversations and real growth.
        </p>
        <div className="absolute -bottom-8 -right-4 w-10 h-10 text-stone-300 font-serif" style={{ fontSize: '5rem', lineHeight: 1 }}>"</div>
      </div>
      <div className="mt-12 w-12 h-px bg-stone-300 mx-auto"></div>
    </div>
  </div>
);

const Clarification = () => (
  <section className="py-24 bg-stone-50">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-serif italic text-4xl text-stone-900 mb-6">An Honest Reflection</h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            This is not a replacement for prayer or Scripture. You may already be praying, learning, and seeking God — but knowing the truth and living it out are two different journeys. What's missing is the <strong>bridge between belief and behavior</strong>, along with conviction and consistency.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-stone-100">
              <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-stone-400" />
              </div>
              <div>
                <h4 className="font-bold text-stone-800 mb-2">Structure is the Service</h4>
                <p className="text-sm text-stone-500 leading-relaxed">
                  Structure here is not about pressure or perfection. It's about creating gentle rhythms that support your peace, clarity, and growth. Together, we build a way of living that feels steady, life-giving, and sustainable.
                </p>
                <p className="text-sm text-stone-500 leading-relaxed mt-3">
                  When life feels chaotic, it's rarely a character flaw — it's often a lack of supportive structure. This work helps you build patterns that protect your well-being and reflect what truly matters to you.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-stone-100">
              <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 text-stone-400" />
              </div>
              <div>
                <h4 className="font-bold text-stone-800 mb-2">Faith is the Foundation</h4>
                <p className="text-sm text-stone-500 leading-relaxed">
                  Faith is not treated as a checklist or performance here. It is the grounding, guiding presence beneath everything we do.
                </p>
                <p className="text-sm text-stone-500 leading-relaxed mt-3">
                  Your relationship with God remains central, honored, and deeply respected. This work helps translate that inner conviction into lived experience — into peace, alignment, and steady transformation. Every conversation, reflection, and strategy flows from a Christ-centered perspective of wholeness, grace, and renewal.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right column: Warm quote block replacing "What This Isn't" */}
        <div className="flex flex-col gap-6">
          <div className="p-10 bg-stone-900 rounded-3xl text-white text-center flex flex-col items-center justify-center min-h-[260px]">
            <div className="text-4xl text-stone-600 font-serif mb-2">"</div>
            <p className="font-serif italic text-xl text-stone-200 leading-relaxed">
              No awkward couches, no judgement, no 'fixing' you — just real conversations and real growth.
            </p>
            <div className="text-4xl text-stone-600 font-serif mt-2">"</div>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-stone-100 text-center">
            <p className="font-serif italic text-stone-600 leading-relaxed text-lg">
              "Faith-Filled Structure for the Life You're Praying For."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhoIsItFor = () => (
  <section id="approach" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <div className="flex items-center gap-3 justify-center mb-6">
        <div className="w-10 h-px bg-stone-300"></div>
        <span className="text-stone-400 text-xs font-bold tracking-[0.2em] uppercase">Is This You?</span>
        <div className="w-10 h-px bg-stone-300"></div>
      </div>
      <h2 className="font-serif italic text-4xl text-stone-900 mb-4 leading-snug">
        For the woman who loves Jesus deeply,<br />
        but feels like life still feels harder than it should.
      </h2>
      <p className="text-stone-500 mb-16 max-w-xl mx-auto">You are not alone in this. You are simply missing the right support.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { 
            title: "The Woman Who Holds Everything Together", 
            desc: "You feel capable in your career or home, but privately exhausted by the mental load. You carry so much — and no one really sees it." 
          },
          { 
            title: "The Woman Pulled in Too Many Directions", 
            desc: "You love God but feel mentally cluttered and unable to focus on what matters most. The noise won't quiet." 
          },
          { 
            title: "The Woman Seeking Consistency", 
            desc: "You want a version of discipline that feels aligned with your values — gentle, steady, and not shame-driven." 
          },
          { 
            title: "The Woman Who Appears 'Fine'", 
            desc: "You want deep, 1-on-1 personal support, not the visibility of a group setting. Your inner world deserves space too." 
          },
          { 
            title: "The Woman Who Looks Like She Has It All Together", 
            desc: "You're getting it all done, but at the cost of your internal peace and joy. Something still feels missing." 
          },
          { 
            title: "The Woman Ready to Move Forward", 
            desc: "You are tired of knowing what to do and not doing it. You're ready for someone to walk beside you, week by week." 
          }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-[2rem] border border-stone-100 bg-[#faf9f6] text-left hover:border-stone-200 hover:shadow-sm transition-all">
            <div className="w-8 h-px bg-stone-300 mb-5"></div>
            <h4 className="text-base font-bold text-stone-800 mb-3 leading-snug">{item.title}</h4>
            <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowYoullBeSupported = () => (
  <section className="py-24 bg-stone-900 text-stone-100">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-stone-600"></div>
            <span className="text-stone-500 text-xs font-bold tracking-[0.2em] uppercase">What's Included</span>
          </div>
          <h2 className="font-serif italic text-4xl mb-6">How You'll Be Supported</h2>
          <p className="text-stone-400">Structure + Support. Not just more teaching.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: <Calendar className="w-5 h-5" />, title: "Private Weekly Calls", desc: "High-frequency, 1-on-1 calls to keep you focused, accountable, and consistently moving forward each week." },
          { icon: <Target className="w-5 h-5" />, title: "Personalized Goal Planning", desc: "We map out exactly what you need to do, breaking big dreams into clear, actionable steps tailored to your life." },
          { icon: <ShieldCheck className="w-5 h-5" />, title: "Confidential Space", desc: "A judgment-free zone where you can be fully honest about your struggles, your pace, and your heart." },
          { icon: <Layers className="w-5 h-5" />, title: "Practical Execution", desc: "Worksheets, habit trackers, and reflection exercises to ground your growth in real, everyday consistency." },
          { icon: <BookOpen className="w-5 h-5" />, title: "Reflection & Habit Tools", desc: "Curated tools to help you stay aligned — not just inspired. Because insight without action is just information." },
          { icon: <Users className="w-5 h-5" />, title: "Community & Group Access", desc: "Connection with a like-minded community of women on the same journey toward faith-filled, purposeful living." }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center mb-6 text-stone-300">
              {item.icon}
            </div>
            <h4 className="text-lg font-bold mb-3">{item.title}</h4>
            <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Accent quote row between sections
const AccentQuoteRow = () => (
  <div className="py-12 bg-[#faf9f6] border-y border-stone-100 overflow-hidden">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-6 text-center">
        {[
          "Grow Spiritually. Live Intentionally.",
          "Where Faith Meets Focus.",
          "Clarity, Confidence, and Christ-Centered Direction."
        ].map((q, i) => (
          <div key={i} className="px-4 py-6 border-r border-stone-200 last:border-0">
            <p className="font-serif italic text-stone-600 text-sm leading-relaxed">"{q}"</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AboutMya = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div className="relative group">
        <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-[12px] border-stone-50">
        <ImageWithFallback 
  src="/26c4c6d824b28b2bb9e22b119ec297f1e45a2c69.png"
  alt="Mya - Christian Life Coach"
  className="w-full h-full object-cover grayscale-[15%]"
/>
        </div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-100 rounded-full -z-0"></div>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-px bg-stone-300"></div>
          <span className="text-stone-400 text-xs font-bold tracking-[0.2em] uppercase">About Mya</span>
        </div>
        <h2 className="font-serif italic text-4xl text-stone-900 mb-8 text-center md:text-left">Meet Mya.</h2>
        <div className="space-y-5 text-stone-600 leading-relaxed text-center md:text-left">
          <p>
            Mya is a Christian life coach for women with a deep heart to serve others. Her passion for coaching flows from her belief that serving people is part of her God-given purpose. As a firm believer in Christ, she is dedicated to helping women strengthen their faith, rediscover their identity in Him, and step confidently into the life they were created for.
          </p>
          <p>
            Recently married and based in Northern Virginia, she runs her coaching business virtually, supporting women wherever they are. Through faith-centered guidance, encouragement, and practical tools, she empowers women to grow spiritually, overcome self-doubt, and walk boldly in purpose.
          </p>
          <div className="pt-4">
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 inline-block text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Professional Disclaimer</p>
              <p className="text-[10px] text-stone-400 italic max-w-sm">
                This is faith-based life coaching and accountability, not therapy, counseling, or mental health treatment. We focus on clarity, discipline, and follow-through.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-24 bg-[#faf9f6]">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <div className="flex items-center gap-3 justify-center mb-6">
        <div className="w-10 h-px bg-stone-300"></div>
        <span className="text-stone-400 text-xs font-bold tracking-[0.2em] uppercase">Invest in Yourself</span>
        <div className="w-10 h-px bg-stone-300"></div>
      </div>
      <h2 className="font-serif italic text-4xl text-stone-900 mb-4">Guided Growth.</h2>
      <p className="text-stone-500 mb-12">Designed for depth, not volume. Only 15 spots available.</p>
      
      <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-stone-100 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-2 bg-stone-900"></div>
        <div className="absolute top-8 right-8 bg-stone-900 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
          Limited Capacity
        </div>
        
        <h3 className="text-2xl font-serif italic mb-2 text-stone-800">Monthly Private Accountability</h3>
        <div className="flex items-baseline justify-center gap-1 mb-10">
          <span className="text-6xl font-serif text-stone-900">$350</span>
          <span className="text-stone-400 font-medium">/ month</span>
        </div>
        
        <ul className="space-y-5 mb-12 text-left max-w-sm mx-auto">
          {[
            "2 Private Coaching Calls Weekly",
            "Continuous Text & Audio Support",
            "Custom Action & Goal Planning",
            "Worksheets, Habit Trackers & Reflection Tools",
            "Community & Group Access",
            "Month-to-Month (No Contracts)",
            "Strictly limited to 15 clients"
          ].map((item, i) => (
            <li key={i} className="flex gap-4 items-center text-stone-700">
              <CheckCircle2 className="w-5 h-5 text-stone-300 shrink-0" />
              <span className="text-sm font-medium">{item}</span>
            </li>
          ))}
        </ul>
        
        <a href="https://calendly.com/myagrisard/30min" target="_blank" rel="noopener noreferrer" className="block w-full bg-stone-900 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-stone-800 transition-all mb-4 shadow-lg shadow-stone-200 text-center">
          Book a Free Clarity Call
        </a>
        <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">
          Currently 12/15 spots filled
        </p>
      </div>
    </div>
  </section>
);

const FinalInvitation = () => (
  <section className="py-32 bg-white text-center">
    <div className="max-w-4xl mx-auto px-6">
      <div className="flex items-center gap-3 justify-center mb-8">
        <div className="w-10 h-px bg-stone-300"></div>
        <span className="text-stone-400 text-xs font-bold tracking-[0.2em] uppercase">You Don't Have to Do This Alone</span>
        <div className="w-10 h-px bg-stone-300"></div>
      </div>
      <h2 className="font-serif italic text-5xl md:text-6xl text-stone-900 mb-8 leading-tight">
        Your faith is ready — <br />you just need structure and support.
      </h2>
      <p className="text-xl text-stone-500 mb-4 max-w-xl mx-auto leading-relaxed">
        You don't need to try harder. You need clarity. And you certainly don't have to carry this season alone.
      </p>
      <p className="font-serif italic text-stone-400 mb-12 text-lg">
        "Because you're not supposed to do life alone."
      </p>
      <a href="https://calendly.com/myagrisard/30min" target="_blank" rel="noopener noreferrer" className="bg-stone-900 text-white px-12 py-6 rounded-full text-lg font-medium hover:bg-stone-800 transition-all flex items-center justify-center gap-3 mx-auto group shadow-2xl shadow-stone-300">
        Book a Free Clarity Call
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
      <p className="mt-8 text-stone-400 text-xs uppercase tracking-widest font-bold">
        From overwhelmed and inconsistent → focused and surrendered.
      </p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-stone-50 border-t border-stone-100 py-20">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 rounded-full bg-stone-900 flex items-center justify-center">
              <Heart className="w-3 h-3 text-white fill-white" />
            </div>
            <span className="font-serif italic text-lg tracking-tight text-stone-800">Abide and Thrive Coaching</span>
          </div>
          <p className="text-sm text-stone-500 max-w-sm leading-relaxed mb-4">
            Helping Christian women bridge the gap between their faith and their daily consistency through 1-on-1 private support.
          </p>
          <p className="font-serif italic text-stone-400 text-sm mb-8">
            "Accountability Rooted in Grace."
          </p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-stone-400">
            <a href="#" className="hover:text-stone-900">Instagram</a>
            <a href="#" className="hover:text-stone-900">Email</a>
            <a href="#" className="hover:text-stone-900">Terms</a>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-stone-100">
          <h5 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">Legal Disclaimer</h5>
          <p className="text-[10px] text-stone-400 leading-relaxed">
            MYA IS A LIFE COACH, NOT A LICENSED THERAPIST OR MENTAL HEALTH PROFESSIONAL. THIS SERVICE DOES NOT PROVIDE MEDICAL, PSYCHOLOGICAL, OR SPIRITUAL DIRECTION IN PLACE OF CHURCH LEADERSHIP. WE FOCUS ON ACTION-ORIENTED ACCOUNTABILITY AND PRACTICAL GOAL SETTING.
          </p>
        </div>
      </div>
      <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between gap-4">
        <p className="text-xs text-stone-400 italic">© 2026 Abide and Thrive Coaching. All rights reserved.</p>
        <p className="text-xs text-stone-400">Faith is the foundation. Structure is the service.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans text-stone-900 bg-white selection:bg-stone-200 scroll-smooth">
      <Navbar />
      <Hero />
      <QuoteBanner quote="Where Faith Meets Focus." light />
      <Philosophy />
      <AccentQuoteRow />
      <Clarification />
      <WhoIsItFor />
      <QuoteBanner quote="Because you're not supposed to do life alone." />
      <HowYoullBeSupported />
      <QuoteBanner quote="Accountability Rooted in Grace." light />
      <AboutMya />
      <Pricing />
      <FinalInvitation />
      <Footer />
    </div>
  );
}
