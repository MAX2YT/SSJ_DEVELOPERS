import React from 'react';
import { Tilt } from "@/components/ui/tilt";
import { Spotlight } from "@/components/ui/spotlight";
import { MapPin } from 'lucide-react';

interface ProjectCardProps {
    image: string;
    customer: string;
    location: string;
}

export default function ProjectCard({ image, customer, location }: ProjectCardProps) {
    return (
        <div className='w-full'>
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
                className='group relative rounded-xl overflow-hidden'
            >
                <Spotlight
                    className='z-10 from-white/50 via-white/20 to-white/10 blur-2xl'
                    size={248}
                    springOptions={{
                        stiffness: 26.7,
                        damping: 4.1,
                        mass: 0.2,
                    }}
                />
                <img
                    src={image}
                    alt={customer}
                    className='w-full aspect-[4/3] object-cover duration-700'
                />
            </Tilt>
            <div className='flex flex-col space-y-1 pt-4'>
                <h3 className='font-bold text-lg text-slate-800 leading-tight'>
                    {customer}
                </h3>
                <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-pink-500" />
                    <span className='text-sm font-medium text-slate-500 max-w-[90%] truncate'>{location}</span>
                </div>
            </div>
        </div>
    );
}
