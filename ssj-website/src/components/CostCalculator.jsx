import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import './CostCalculator.css';

const CostCalculator = () => {
    // Contact Information
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');

    // Project Details
    const [landArea, setLandArea] = useState('');
    const [floors, setFloors] = useState('Ground');
    const [packageType, setPackageType] = useState(2199); // Basic package rate

    // Cost Breakdown Table Items
    const [groundFloorArea, setGroundFloorArea] = useState('');
    const [waterSumpValue, setWaterSumpValue] = useState('');
    const [septicTankValue, setSepticTankValue] = useState('');
    const [compoundWallValue, setCompoundWallValue] = useState('');

    // Submission state
    const [showSuccess, setShowSuccess] = useState(false);

    // Cost calculation functions
    const calculateGroundFloorCost = () => {
        const area = parseFloat(groundFloorArea);
        return area && !isNaN(area) ? (area * packageType).toFixed(0) : '0';
    };

    const calculateWaterSumpCost = () => {
        const value = parseFloat(waterSumpValue);
        return value && !isNaN(value) ? (value * 35).toFixed(0) : '0';
    };

    const calculateSepticTankCost = () => {
        const value = parseFloat(septicTankValue);
        return value && !isNaN(value) ? (value * 20).toFixed(0) : '0';
    };

    const calculateCompoundWallCost = () => {
        const value = parseFloat(compoundWallValue);
        return value && !isNaN(value) ? (value * 1850).toFixed(0) : '0';
    };

    const calculateTotalCost = () => {
        const total =
            parseInt(calculateGroundFloorCost()) +
            parseInt(calculateWaterSumpCost()) +
            parseInt(calculateSepticTankCost()) +
            parseInt(calculateCompoundWallCost());
        return total.toLocaleString('en-IN');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Trigger confetti animation
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = {
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 9999,
            colors: ['#C5A059', '#9F7E3A', '#F5F5F4', '#E7E5E4', '#44403C']
        };

        const randomInRange = (min, max) => {
            return Math.random() * (max - min) + min;
        };

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);

        // Show success message
        setShowSuccess(true);

        // Hide success message after 5 seconds
        setTimeout(() => {
            setShowSuccess(false);
        }, 5000);
    };

    return (
        <section id="calculator" className="calculator-section">
            <div className="container">
                <div className="calculator-header">
                    <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-2 block">Estimate</span>
                    <h2 className="mb-4 text-slate-900">Construction Cost Estimator</h2>
                    <p className="text-slate-600 mb-8">
                        Get a detailed estimate for your construction project. Fill in your details and project requirements below.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="calculator-wrapper">
                    {/* Contact Information Section */}
                    <div className="form-section">
                        <h3 className="section-title">Contact Information</h3>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label">Name *</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Phone Number *</label>
                                <input
                                    type="tel"
                                    className="form-input"
                                    placeholder="Enter phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email *</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    placeholder="Enter email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Location *</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Enter location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Project Details Section */}
                    <div className="form-section">
                        <h3 className="section-title">Project Details</h3>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label">Total Land Area *</label>
                                <input
                                    type="number"
                                    className="form-input"
                                    placeholder="Enter total area"
                                    value={landArea}
                                    onChange={(e) => setLandArea(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">No. of Floors *</label>
                                <select
                                    className="form-select"
                                    value={floors}
                                    onChange={(e) => setFloors(e.target.value)}
                                    required
                                >
                                    <option value="Ground">Ground</option>
                                    <option value="Ground + 1st Floor">Ground + 1st Floor</option>
                                    <option value="Ground + 1st Floor + 2nd Floor">Ground + 1st Floor + 2nd Floor</option>
                                </select>
                            </div>

                            <div className="form-group form-group-full">
                                <label className="form-label">Package *</label>
                                <select
                                    className="form-select"
                                    value={packageType}
                                    onChange={(e) => setPackageType(Number(e.target.value))}
                                    required
                                >
                                    <option value="1999">Basic Package @ ₹1999/sqft</option>
                                    <option value="2199">Standard Package @ ₹2199/sqft</option>
                                    <option value="2499">Premium Package @ ₹2499/sqft</option>
                                    <option value="2999">Luxury Package @ ₹2999/sqft</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Cost Breakdown Table */}
                    <div className="form-section">
                        <h3 className="section-title">Cost Breakdown</h3>
                        <div className="cost-table-wrapper">
                            <table className="cost-table">
                                <thead>
                                    <tr>
                                        <th>Work</th>
                                        <th>Area</th>
                                        <th>Unit</th>
                                        <th>Rate</th>
                                        <th>Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Work">Area for Ground Floor</td>
                                        <td data-label="Enter Area">
                                            <input
                                                type="number"
                                                className="table-input"
                                                placeholder="Area in sqft"
                                                value={groundFloorArea}
                                                onChange={(e) => setGroundFloorArea(e.target.value)}
                                                inputMode="decimal"
                                            />
                                        </td>
                                        <td data-label="Unit">sqft</td>
                                        <td data-label="Rate">₹{packageType}</td>
                                        <td className="cost-cell" data-label="Cost">₹{parseInt(calculateGroundFloorCost()).toLocaleString('en-IN')}</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Work">Size of RCC Water Sump (3000 litre)</td>
                                        <td data-label="Enter Value">
                                            <input
                                                type="number"
                                                className="table-input"
                                                placeholder="Value"
                                                value={waterSumpValue}
                                                onChange={(e) => setWaterSumpValue(e.target.value)}
                                                inputMode="decimal"
                                            />
                                        </td>
                                        <td data-label="Unit">litre</td>
                                        <td data-label="Rate">₹35</td>
                                        <td className="cost-cell" data-label="Cost">₹{parseInt(calculateWaterSumpCost()).toLocaleString('en-IN')}</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Work">Size of Septic Tank (10000 litre)</td>
                                        <td data-label="Enter Value">
                                            <input
                                                type="number"
                                                className="table-input"
                                                placeholder="Value"
                                                value={septicTankValue}
                                                onChange={(e) => setSepticTankValue(e.target.value)}
                                                inputMode="decimal"
                                            />
                                        </td>
                                        <td data-label="Unit">litre</td>
                                        <td data-label="Rate">₹20</td>
                                        <td className="cost-cell" data-label="Cost">₹{parseInt(calculateSepticTankCost()).toLocaleString('en-IN')}</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Work">Compound Wall (Height 5ft)</td>
                                        <td data-label="Enter Value">
                                            <input
                                                type="number"
                                                className="table-input"
                                                placeholder="Value"
                                                value={compoundWallValue}
                                                onChange={(e) => setCompoundWallValue(e.target.value)}
                                                inputMode="decimal"
                                            />
                                        </td>
                                        <td data-label="Unit">RFT</td>
                                        <td data-label="Rate">₹1850</td>
                                        <td className="cost-cell" data-label="Cost">₹{parseInt(calculateCompoundWallCost()).toLocaleString('en-IN')}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="total-row">
                                        <td colSpan="4">Total Estimated Cost</td>
                                        <td className="total-cost">₹{calculateTotalCost()}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="submit-btn">
                        GET FREE ESTIMATE NOW
                    </button>

                    {/* Success Message */}
                    {showSuccess && (
                        <div className="success-message">
                            <h3>🎉 Congrats on your new house!</h3>
                            <p>We've received your estimate request and will get back to you soon.</p>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default CostCalculator;
