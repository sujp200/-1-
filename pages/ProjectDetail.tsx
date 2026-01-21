
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="text-xs tracking-widest text-gray-400 font-bold uppercase">Project Not Found</span>
      </div>
    );
  }

  return (
    <div className="px-8 max-w-[1920px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
        
        {/* Left Section: Info (Sticky on desktop) */}
        <div className="lg:w-1/4 lg:sticky lg:top-40 self-start">
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-serif mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-sm font-sans tracking-[0.15em] text-gray-400 uppercase leading-relaxed">
              {project.titleEn}
            </p>
          </div>

          <div className="space-y-4 mb-16">
            {Object.entries(project.info).map(([key, value]) => (
              <div key={key} className="flex border-b border-gray-100 py-3 group">
                <span className="w-24 text-[9px] tracking-[0.2em] text-gray-400 uppercase font-bold">
                  {key}
                </span>
                <span className="text-xs tracking-wider text-gray-800">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-6 items-center">
            {project.logos.map((logo, idx) => (
              <img 
                key={idx} 
                src={logo} 
                alt="Partner" 
                className="h-6 grayscale opacity-30 hover:opacity-100 transition-all duration-500" 
              />
            ))}
          </div>
        </div>

        {/* Right Section: Description followed by Images */}
        <div className="lg:w-3/4">
          {/* Top: Description Section */}
          <div className="max-w-3xl mb-24">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-[1px] bg-black"></div>
                <h4 className="text-[10px] tracking-[0.4em] text-black uppercase font-bold">Design Philosophy</h4>
              </div>
              
              <p className="text-base leading-[1.8] text-gray-800 whitespace-pre-wrap font-light">
                {project.descriptionKr}
              </p>
              
              <p className="text-sm leading-[1.7] text-gray-400 italic font-serif">
                {project.descriptionEn}
              </p>
            </div>
          </div>

          {/* Bottom: Image Grid (Uniform sizes, 10 images) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((img, idx) => (
              <div 
                key={idx} 
                className="relative aspect-[3/2] overflow-hidden bg-gray-50 cursor-crosshair group"
              >
                <img 
                  src={img} 
                  alt={`${project.title} sequence ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <span className="text-[8px] tracking-[0.3em] text-white bg-black/20 backdrop-blur-sm px-2 py-1">VIEWING {idx + 1} / 10</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <button 
                onClick={() => navigate('/space')}
                className="group flex flex-col items-center gap-2"
            >
                <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-gray-300 group-hover:text-black transition-colors">Return to space archive</span>
                <div className="w-12 h-[1px] bg-gray-200 group-hover:w-24 group-hover:bg-black transition-all duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
