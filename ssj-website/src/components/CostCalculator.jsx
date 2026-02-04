import React, { useState } from 'react';
import './CostCalculator.css';

const CostCalculator = () => {
    const [area, setArea] = useState('');
    const [packageType, setPackageType] = useState(2500); // Default base rate

    const calculateCost = () => {
        const areaNum = parseFloat(area);
        if (!areaNum) return 0;
        return (areaNum * packageType).toLocaleString('en-IN');
    };

    return (
        <section id="calculator" className="calculator-section">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-2 block">Estimate</span>
                        <h2 className="mb-4 text-slate-900">Construction Cost Estimator</h2>
                        <p className="text-slate-600 mb-8">
                            Get a quick ballpark estimate for your construction project.
                            Enter the built-up area and choose a package type to see the estimated cost.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-slate-700">
                                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-accent font-bold">1</span>
                                Enter Plot/Built-up Area
                            </li>
                            <li className="flex items-center gap-3 text-slate-700">
                                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-accent font-bold">2</span>
                                Select Quality Grade
                            </li>
                            <li className="flex items-center gap-3 text-slate-700">
                                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-accent font-bold">3</span>
                                Get Instant Estimate
                            </li>
                        </ul>
                    </div>

                    <div className="calculator-wrapper">
                        <div className="form-group">
                            <label className="form-label">Built-up Area (Sq. ft)</label>
                            <input
                                type="number"
                                className="form-input"
                                placeholder="Ex: 1200"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Package Grade</label>
                            <select
                                className="form-select"
                                value={packageType}
                                onChange={(e) => setPackageType(Number(e.target.value))}
                            >
                                <option value="2100">Basic (₹2100/sq.ft)</option>
                                <option value="2500">Premium (₹2500/sq.ft)</option>
                                <option value="2999">Luxury (₹2999/sq.ft)</option>
                            </select>
                        </div>

                        <div className="calc-result">
                            <div className="result-label">Estimated Construction Cost</div>
                            <div className="result-value">₹ {calculateCost()}</div>
                            <p className="text-xs text-slate-400 mt-2">*Indicative pricing only. Contact us for final quote.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CostCalculator;
