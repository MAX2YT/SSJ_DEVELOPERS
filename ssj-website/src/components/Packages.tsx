
import { Check, Info } from 'lucide-react';
import './Packages.css';

interface PackageDetail {
    category: string;
    items: string[];
}

const packageDetails: PackageDetail[] = [
    {
        category: 'Design & Engineering',
        items: [
            'Site Assessment & Plan',
            'Structural Design',
            '3D Elevation',
            'Electrical Drawing',
            'Plumbing Drawing'
        ]
    },
    {
        category: 'Structure',
        items: [
            'Steel: TATA/JSW',
            'Cement: Coromandel/Dalmia',
            'Aggregates: M-sand',
            'Bricks: Red Bricks/Solid Blocks',
            'Ceiling Height: 10 feet'
        ]
    },
    {
        category: 'Kitchen',
        items: [
            'Granite Platform',
            'SS Sink',
            'Ceramic Wall Tiles (up to 2ft)',
            'Provision for Chimney',
            'CP Fittings: Jaguar/Parryware'
        ]
    },
    {
        category: 'Bathroom',
        items: [
            'Wall Tiles (up to 7ft)',
            'Sanitary Ware: Parryware/Hindware',
            'CP Fittings: Jaguar/Grohe',
            'Concealed Piping',
            'Provision for Geyser'
        ]
    },
    {
        category: 'Flooring & Painting',
        items: [
            'Living/Dining: Vitrified Tiles',
            'Bedrooms: Vitrified Tiles',
            'Balcony/Parking: Anti-skid Tiles',
            'Interior: Emulsion Paint (Asian)',
            'Exterior: Weather Proof Paint'
        ]
    },
    {
        category: 'Electrical',
        items: [
            'Wires: Finolex/Polycab',
            'Switches: Anchor/Roma',
            'MCB Distribution Box'
        ]
    }
];

const Packages = () => {
    return (
        <section id="packages" className="packages-section">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-2 block">Pricing</span>
                    <h2 className="mb-4">Transparent Pricing</h2>
                    <p className="text-slate-500">
                        No hidden costs. We offer comprehensive construction packages tailored to your needs.
                    </p>
                </div>

                <div className="package-card">
                    <div className="package-header">
                        <h3>Premium Package</h3>
                        <div className="package-price">₹2100<span className="package-unit"> / sq.ft</span></div>
                        <p className="text-slate-300">Complete Turnkey Solution</p>
                    </div>

                    <div className="package-body">
                        <div className="grid md:grid-cols-2 gap-8">
                            {packageDetails.map((section, idx) => (
                                <div key={idx} className="package-category">
                                    <h4 className="category-title">{section.category}</h4>
                                    <div className="specs-grid">
                                        {section.items.map((item, i) => (
                                            <div key={i} className="spec-item">
                                                <Check size={16} className="check-icon" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="package-cta">
                            <p className="text-sm text-slate-500 mb-4 flex items-center justify-center gap-2">
                                <Info size={16} /> Rates may vary based on location and material selection customization.
                            </p>
                            <a href="#contact" className="btn btn-primary">Get Detailed Quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Packages;
