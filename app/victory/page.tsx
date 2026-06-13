import Link from 'next/link';
import Image from 'next/image';
import { Trophy, Cpu, Zap, Users, Award, ExternalLink, ArrowLeft } from 'lucide-react';
import { TAPE_STYLE_DECOR } from '@/lib/constants';
import { GRADIENT_TOKENS } from '@/lib/designTokens';

const CANVA_LINK = 'https://www.canva.com/design/DAF_83kML9g/eyFz-kOId7HSrVJLiVLClw/edit?utm_content=DAF_83kML9g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton';

export default function VictoryProject() {
  return (
    <div className="max-w-4xl mx-auto min-h-full flex flex-col justify-center py-16 pb-24 md:py-8 md:pb-8">

      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-hand text-gray-500 hover:text-indigo-600 transition-colors mb-6 ml-1 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back home
      </Link>

      <div className="relative transform -rotate-[0.5deg]">
        <div className="animate-page-sheet relative text-gray-800 shadow-[5px_5px_15px_rgba(0,0,0,0.2)]">

          {/* Tape strips */}
          <div className="absolute -top-1 -left-6 w-24 md:w-32 h-10 shadow-sm z-20 -rotate-[8deg]" style={TAPE_STYLE_DECOR} />
          <div className="absolute -top-1 right-12 w-20 md:w-28 h-8 shadow-sm z-20 rotate-[5deg]" style={TAPE_STYLE_DECOR} />

          {/* Trophy pin */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30">
            <div className="bg-amber-400 rounded-full p-2 shadow-md border-2 border-amber-500 rotate-12">
              <Trophy size={20} className="text-white" />
            </div>
          </div>

          {/* Paper */}
          <div
            className="bg-[#fff9c4] p-6 md:p-12 w-full h-full relative"
            style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%)' }}
          >
            {/* Folded corner */}
            <div className="absolute bottom-0 right-0 pointer-events-none w-[var(--c-corner-fold)] h-[var(--c-corner-fold)] md:w-[var(--c-corner-fold-md)] md:h-[var(--c-corner-fold-md)]" style={{ background: GRADIENT_TOKENS.foldCorner }} />
            <div className="absolute bottom-0 right-0 pointer-events-none w-[var(--c-corner-fold)] h-[var(--c-corner-fold)] md:w-[var(--c-corner-fold-md)] md:h-[var(--c-corner-fold-md)]" style={{ backgroundColor: GRADIENT_TOKENS.foldUnderside, clipPath: 'polygon(0 0, 0 100%, 100% 0)' }} />

            {/* Header */}
            <div className="mb-2 flex items-start justify-between flex-wrap gap-2">
              <div>
                <h1 className="text-4xl md:text-5xl font-hand font-bold text-gray-900 flex items-center gap-3">
                  Victory 🏆
                </h1>
                <p className="font-hand text-lg text-amber-700 font-bold mt-1">My First Hardware Project</p>
              </div>
              <span className="bg-amber-200 text-amber-900 font-hand font-bold text-xs md:text-sm px-3 py-1 rounded-full border border-amber-300 self-start mt-1">
                🔧 Hardware + Embedded Systems
              </span>
            </div>

            <div className="border-b-2 border-gray-400/30 mb-6" />

            {/* What is it */}
            <div className="mb-6 bg-amber-50 border-l-4 border-amber-400 px-4 py-3 rounded-r-lg">
              <p className="font-hand font-bold text-amber-900 text-sm md:text-base">
                ⚡ A smart assistive hardware device — designed, wired, and programmed from scratch. My first dive into the physical world of computing.
              </p>
            </div>

            {/* Main content */}
            <div className="space-y-5 font-hand text-base md:text-lg leading-relaxed text-gray-800">

              <p>
                Victory was my <span className="font-bold bg-amber-200 px-1.5 py-0.5 rounded text-amber-900">first hardware project</span> — built during my early engineering years before I went deep into software. It pushed me to think beyond screens and keyboards, into circuits, sensors, and real-world physical constraints.
              </p>

              {/* Key facts grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
                <div className="bg-white/60 border border-amber-200 rounded-lg p-4 flex flex-col items-center text-center gap-2">
                  <Cpu size={24} className="text-amber-600" />
                  <p className="font-bold text-gray-800 text-sm">Embedded Systems</p>
                  <p className="text-xs text-gray-500">Microcontroller programming & circuit design</p>
                </div>
                <div className="bg-white/60 border border-amber-200 rounded-lg p-4 flex flex-col items-center text-center gap-2">
                  <Zap size={24} className="text-indigo-600" />
                  <p className="font-bold text-gray-800 text-sm">Real-world Impact</p>
                  <p className="text-xs text-gray-500">Built to solve an actual accessibility problem</p>
                </div>
                <div className="bg-white/60 border border-amber-200 rounded-lg p-4 flex flex-col items-center text-center gap-2">
                  <Users size={24} className="text-emerald-600" />
                  <p className="font-bold text-gray-800 text-sm">Team Project</p>
                  <p className="text-xs text-gray-500">Collaborated with peers end-to-end</p>
                </div>
              </div>

              <p>
                The project taught me things no software tutorial ever could — <span className="underline decoration-wavy decoration-amber-400">debugging without a stack trace</span>, working with datasheets, managing power constraints, and the satisfaction of seeing something physical respond to your code for the first time.
              </p>

              <p>
                It planted the seed of understanding that <strong className="text-gray-900">software and hardware together</strong> are more powerful than either alone — a perspective I carry into every full-stack and systems project I build today.
              </p>

              {/* What I learned */}
              <div className="mt-4 pt-4 border-t-2 border-gray-400/20">
                <p className="font-bold text-gray-900 text-base md:text-lg mb-3">📚 What I Learned</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base">
                  <p>🔌 Circuit design and component selection</p>
                  <p>💾 Microcontroller programming (embedded C)</p>
                  <p>🧪 Prototyping and iterative hardware testing</p>
                  <p>🤝 Cross-functional team collaboration</p>
                  <p>📐 Translating a user problem into a physical solution</p>
                  <p>⚡ Power management and hardware constraints</p>
                </div>
              </div>

              {/* Award badge */}
              <div className="mt-4 flex items-center gap-3 bg-white/70 border border-amber-300 rounded-xl px-4 py-3">
                <Award size={28} className="text-amber-500 shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Presented & Demonstrated</p>
                  <p className="text-sm text-gray-600">Showcased at college project exhibition — full documentation in the presentation below</p>
                </div>
              </div>

            </div>


            {/* Photo Gallery */}
            <div className="mt-8 pt-6 border-t-2 border-gray-400/20">
              <p className="font-hand font-bold text-gray-700 text-base md:text-lg mb-4">
                📸 Project Photos
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Photo 1 */}
                <div className="relative group">
                  <div className="bg-white p-2 shadow-md border border-gray-200 rotate-1 group-hover:rotate-0 transition-transform duration-300">
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 shadow-sm z-10 -rotate-1"
                      style={TAPE_STYLE_DECOR}
                    />
                    <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                      <Image
                        src="/resources/victory1.webp"
                        alt="Victory Project - hardware setup"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="font-hand text-xs text-gray-500 text-center mt-2 pb-1">
                      Hardware Setup
                    </p>
                  </div>
                </div>

                {/* Photo 2 */}
                <div className="relative group">
                  <div className="bg-white p-2 shadow-md border border-gray-200 -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 shadow-sm z-10 rotate-1"
                      style={TAPE_STYLE_DECOR}
                    />
                    <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                      <Image
                        src="/resources/victory2.webp"
                        alt="Victory Project - demonstration"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="font-hand text-xs text-gray-500 text-center mt-2 pb-1">
                      Project Demo
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Presentation CTA */}
            <div className="border-t-2 border-gray-400/20 mt-8 pt-6">
              <p className="font-hand font-bold text-gray-700 text-base md:text-lg mb-4">
                📎 Full Project Presentation
              </p>
              <p className="font-hand text-sm text-gray-500 mb-4">
                The complete project — slides, circuit diagrams, component details, photos, and demo — is documented in the presentation below.
              </p>

              {/* CTA button */}
              <a
                href={CANVA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-amber-400 hover:bg-amber-500 text-amber-900 font-hand font-bold rounded-full shadow-md transition-all hover:scale-105 hover:-rotate-1 border-2 border-amber-500"
              >
                <Trophy size={20} />
                View Full Presentation
                <ExternalLink size={16} />
              </a>

              <p className="font-hand text-xs text-gray-400 mt-3">
                Opens in Canva — all project photos, circuit diagrams, and demo documentation inside
              </p>
            </div>

            {/* Back to portfolio */}
            <div className="mt-8 pt-4 border-t-2 border-gray-400/20 flex items-center justify-between flex-wrap gap-3">
              <Link
                href="/projects"
                className="font-hand text-sm text-indigo-600 hover:text-indigo-800 underline underline-offset-2 transition-colors"
              >
                ← See my software projects
              </Link>
              <Link
                href="/chat"
                className="font-hand text-sm text-gray-500 hover:text-indigo-600 transition-colors"
              >
                Ask me about Victory →
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
