
import React from 'react';
import { team } from '../data';

const About: React.FC = () => {
  return (
    <div className="px-8 max-w-[1920px] mx-auto">
      {/* CEO Section */}
      <section className="flex flex-col lg:flex-row gap-20 mb-40 items-center lg:items-start">
        <div className="lg:w-1/2">
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/id/447/1000/1200" 
              alt="CEO Representative" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-serif mb-12 tracking-tight">
            뻐꾸기 인테리어
            <br />
            <span className="text-sm font-sans tracking-[0.3em] text-gray-400 italic uppercase">BBeogGuGi STUDIO</span>
          </h2>
          
          <div className="space-y-10 max-w-lg text-sm leading-[1.8]">
            <div className="group">
              <p className="mb-4 text-gray-800 transition-colors group-hover:text-black">
                우리는 공간이 단순히 머무는 장소를 넘어, 그 안에서 살아가는 이들의 가치관과 삶의 철학을 담아내는 그릇이어야 한다고 믿습니다.
              </p>
              <p className="text-gray-400 font-serif italic text-xs">
                We believe that a space should be more than just a place to stay; it should be a vessel that contains the values and philosophy of life of those who live in it.
              </p>
            </div>
            
            <div className="w-16 h-[1px] bg-black"></div>

            <div className="group">
              <p className="mb-4 text-gray-800 transition-colors group-hover:text-black">
                뻐꾸기인테리어는 미니멀한 건축적 접근을 통해 군더더기를 덜어내고, 본질에 집중하는 하이엔드 공간을 설계합니다.
              </p>
              <p className="text-gray-400 font-serif italic text-xs">
                BBeogGuGi Interior designs high-end spaces that focus on the essence by removing unnecessary elements through a minimalist architectural approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="pb-20">
        <h3 className="text-[10px] tracking-[0.6em] text-center mb-24 uppercase font-bold text-gray-300">The Creative Team</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center max-w-5xl mx-auto">
          {team.map((member) => (
            <div key={member.id} className="flex flex-col items-center group">
              <div className="w-28 h-28 rounded-full bg-gray-50 overflow-hidden mb-8 border border-gray-100 relative">
                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                <div className="absolute inset-0 border border-black/0 group-hover:border-black/10 rounded-full transition-all"></div>
              </div>
              <h4 className="text-xs tracking-[0.2em] mb-2 font-bold uppercase">{member.name}</h4>
              <p className="text-[9px] text-gray-400 uppercase tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
