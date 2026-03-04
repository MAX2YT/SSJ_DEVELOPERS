
import { MapPin, Building2, User } from 'lucide-react';

interface ProjectCardProps {
    image: string;
    projectName: string;
    clientName: string;
    location: string;
    type: string;
}

export default function ProjectCard({ image, projectName, clientName, location, type }: ProjectCardProps) {
    return (
        <div className="group relative rounded-2xl overflow-hidden bg-white border border-stone-200/60 shadow-sm hover:shadow-xl hover:shadow-stone-300/30 transition-all duration-500 hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt={projectName}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Type badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#C5A059] shadow-md">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-white">{type}</span>
                </div>
            </div>

            {/* Info Section */}
            <div className="p-5 space-y-3">
                <h3
                    className="font-bold text-lg text-slate-800 leading-tight tracking-tight"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    {projectName}
                </h3>

                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                        <span className="text-sm text-slate-500">{clientName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                        <span className="text-sm text-slate-500">{location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                        <span className="text-sm text-slate-500">{type}</span>
                    </div>
                </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
        </div>
    );
}
