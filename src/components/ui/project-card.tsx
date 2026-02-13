
import { Tilt } from "@/components/ui/tilt";
import { Spotlight } from "@/components/ui/spotlight";
import { MapPin, Layers, Maximize, Hash, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
    image: string;
    customer: string;
    location: string;
    type?: string;
    area?: string;
    floors?: number;
    plotNo?: string;
}

export default function ProjectCard({ image, customer, location, type, area, floors, plotNo }: ProjectCardProps) {
    return (
        <Tilt
            rotationFactor={6}
            isRevese
            style={{
                transformOrigin: 'center center',
            }}
            springOptions={{
                stiffness: 26.7,
                damping: 4.1,
                mass: 0.2,
            }}
            className='group relative rounded-2xl overflow-hidden bg-white border border-stone-200/80 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500'
        >
            <Spotlight
                className='z-10 from-[#C5A059]/20 via-[#C5A059]/5 to-transparent blur-3xl'
                size={300}
                springOptions={{
                    stiffness: 26.7,
                    damping: 4.1,
                    mass: 0.2,
                }}
            />

            {/* Image Container */}
            <div className='relative overflow-hidden'>
                <img
                    src={image}
                    alt={customer}
                    className='w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
                />

                {/* Top-right arrow icon */}
                <div className='absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md border border-stone-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 shadow-sm'>
                    <ArrowUpRight className='w-4 h-4 text-stone-700' />
                </div>

                {/* Type badge on image */}
                {type && (
                    <div className='absolute top-3 left-3 px-3 py-1 rounded-full bg-[#C5A059] shadow-md'>
                        <span className='text-[10px] font-bold tracking-wider uppercase text-white'>{type}</span>
                    </div>
                )}
            </div>

            {/* Info Section - Below Image */}
            <div className='p-4 space-y-2.5'>
                <h3 className='font-bold text-base text-slate-800 leading-tight tracking-tight'>
                    {customer}
                </h3>
                <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                    <span className='text-sm text-slate-500 truncate'>{location}</span>
                </div>

                {/* Specs Row */}
                {(area || floors || plotNo) && (
                    <div className='flex items-center gap-2 pt-2 border-t border-stone-100'>
                        {area && (
                            <div className='flex items-center gap-1 px-2.5 py-1 bg-stone-50 rounded-lg'>
                                <Maximize className="w-3 h-3 text-[#C5A059] flex-shrink-0" />
                                <span className='text-[11px] font-semibold text-slate-600 whitespace-nowrap'>{area}</span>
                            </div>
                        )}
                        {floors && (
                            <div className='flex items-center gap-1 px-2.5 py-1 bg-stone-50 rounded-lg'>
                                <Layers className="w-3 h-3 text-[#C5A059] flex-shrink-0" />
                                <span className='text-[11px] font-semibold text-slate-600 whitespace-nowrap'>{floors} Floor{floors > 1 ? 's' : ''}</span>
                            </div>
                        )}
                        {plotNo && (
                            <div className='flex items-center gap-1 px-2.5 py-1 bg-stone-50 rounded-lg'>
                                <Hash className="w-3 h-3 text-[#C5A059] flex-shrink-0" />
                                <span className='text-[11px] font-semibold text-slate-600 whitespace-nowrap'>{plotNo}</span>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Bottom accent line */}
            <div className='absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center' />
        </Tilt>
    );
}
