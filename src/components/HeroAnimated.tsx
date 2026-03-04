import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { ArrowRight, Home, Ruler, Hammer } from 'lucide-react';
import './HeroAnimated.css';

// ─── Blueprint gold color ───
const GOLD = '#C5A059';
const GOLD_FAINT = '#d4b97a';

// ─── Smooth easing helpers ───
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const smoothstep = (t: number) => t * t * (3 - 2 * t);

// ─── Helper: Animated wireframe box ───
interface WireBoxProps {
    position: [number, number, number];
    size: [number, number, number];
    delay: number;
    color?: string;
}

const WireBox = ({ position, size, delay, color = GOLD }: WireBoxProps) => {
    const ref = useRef<THREE.Group>(null);
    const matRef = useRef<THREE.LineBasicMaterial>(null);

    const edges = useMemo(() => {
        const box = new THREE.BoxGeometry(size[0], size[1], size[2]);
        return new THREE.EdgesGeometry(box);
    }, [size]);

    useFrame(({ clock }) => {
        const elapsed = clock.getElapsedTime();
        const raw = Math.max(0, (elapsed - delay) / 2.0);
        const progress = Math.min(1, easeOutCubic(raw));

        if (matRef.current) {
            matRef.current.opacity = progress * 0.85;
        }
        if (ref.current) {
            const s = progress > 0.01 ? 0.01 + progress * 0.99 : 0;
            ref.current.scale.set(s, s, s);
        }
    });

    return (
        <group ref={ref} position={position}>
            <lineSegments geometry={edges}>
                <lineBasicMaterial ref={matRef} color={color} transparent opacity={0} depthWrite={false} />
            </lineSegments>
        </group>
    );
};

// ─── Helper: Animated single line ───
interface LineProps {
    points: [number, number, number][];
    delay: number;
    color?: string;
    opacity?: number;
}

const WireLine = ({ points, delay, color = GOLD, opacity = 0.6 }: LineProps) => {
    const matRef = useRef<THREE.LineBasicMaterial>(null);

    const geo = useMemo(() => {
        const verts = points.map(p => new THREE.Vector3(...p));
        return new THREE.BufferGeometry().setFromPoints(verts);
    }, [points]);

    useFrame(({ clock }) => {
        const elapsed = clock.getElapsedTime();
        const raw = Math.max(0, (elapsed - delay) / 1.8);
        const progress = Math.min(1, easeOutCubic(raw));
        if (matRef.current) {
            matRef.current.opacity = progress * opacity;
        }
    });

    return (
        // @ts-ignore - type collision with SVG <line> element
        <line geometry={geo}>
            <lineBasicMaterial ref={matRef} color={color} transparent opacity={0} depthWrite={false} />
        </line>
    );
};

// ─── Blueprint Grid ───
const Grid = () => {
    const ref = useRef<THREE.GridHelper>(null);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        const opacity = Math.min(0.2, t * 0.05);
        if (ref.current) {
            const mat = ref.current.material as THREE.LineBasicMaterial;
            mat.opacity = opacity;
            mat.transparent = true;
        }
    });

    return (
        <gridHelper
            ref={ref}
            args={[30, 30, new THREE.Color(GOLD), new THREE.Color(GOLD)]}
            position={[0, 0, 0]}
        />
    );
};

// ─── Smooth Camera Controller ───
const CameraRig = () => {
    const { camera } = useThree();
    const target = useMemo(() => new THREE.Vector3(0, 2.5, 0), []);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();

        let x: number, y: number, z: number;

        if (t < 5) {
            // Phase 1: Smooth zoom from far high angle
            const p = easeOutCubic(t / 5);
            x = THREE.MathUtils.lerp(30, 15, p);
            y = THREE.MathUtils.lerp(20, 10, p);
            z = THREE.MathUtils.lerp(30, 18, p);
        } else if (t < 12) {
            // Phase 2: Smooth orbit to 3/4 front view
            const p = smoothstep((t - 5) / 7);
            const angle = THREE.MathUtils.lerp(0.88, 0.5, p);
            const radius = THREE.MathUtils.lerp(23, 22, p);
            y = THREE.MathUtils.lerp(10, 8, p);
            x = Math.sin(angle) * radius;
            z = Math.cos(angle) * radius;
        } else {
            // Phase 3: Gentle idle float
            const idle = t - 12;
            const angle = 0.5 + Math.sin(idle * 0.12) * 0.04;
            const radius = 22 + Math.sin(idle * 0.08) * 0.3;
            y = 8 + Math.sin(idle * 0.1) * 0.2;
            x = Math.sin(angle) * radius;
            z = Math.cos(angle) * radius;
        }

        camera.position.set(x, y, z);
        camera.lookAt(target);
    });

    return null;
};

// ─── Complete House (clean, no overlapping edges) ───
const House = () => {
    return (
        <group>
            <Grid />

            {/* ══ FOUNDATION ══ */}
            <WireBox position={[0, 0.06, 0]} size={[18, 0.1, 10]} delay={0.5} />

            {/* ══ MAIN BLOCK (center) — 3 floors ══ */}
            <WireBox position={[0, 3, 0]} size={[7, 5.8, 6]} delay={1.2} />
            {/* Floor slabs */}
            <WireLine points={[[-3.5, 2, -3], [3.5, 2, -3], [3.5, 2, 3], [-3.5, 2, 3], [-3.5, 2, -3]]} delay={2.8} opacity={0.4} />
            <WireLine points={[[-3.5, 4, -3], [3.5, 4, -3], [3.5, 4, 3], [-3.5, 4, 3], [-3.5, 4, -3]]} delay={3.0} opacity={0.4} />
            {/* Roof overhang */}
            <WireBox position={[0, 6.05, 0]} size={[7.8, 0.15, 6.6]} delay={3.8} />

            {/* ══ PENTHOUSE ══ */}
            <WireBox position={[-0.8, 7.2, 0]} size={[3.5, 2, 3.8]} delay={4.2} />
            <WireBox position={[-0.8, 8.35, 0]} size={[3.9, 0.12, 4.2]} delay={4.5} color={GOLD_FAINT} />

            {/* ══ LEFT WING ══ */}
            <WireBox position={[-6.2, 2.3, 0.3]} size={[4.2, 4.4, 5.2]} delay={1.8} />
            <WireBox position={[-6.2, 4.65, 0.3]} size={[4.6, 0.12, 5.6]} delay={4.0} color={GOLD_FAINT} />
            {/* Floor */}
            <WireLine points={[[-8.3, 2, -2.3], [-4.1, 2, -2.3], [-4.1, 2, 2.9], [-8.3, 2, 2.9], [-8.3, 2, -2.3]]} delay={3.2} opacity={0.35} />

            {/* ══ RIGHT WING ══ */}
            <WireBox position={[5.8, 2.6, 0]} size={[4, 5, 5.8]} delay={2.0} />
            <WireBox position={[5.8, 5.25, 0]} size={[4.4, 0.12, 6.2]} delay={4.1} color={GOLD_FAINT} />
            {/* Floor */}
            <WireLine points={[[3.8, 2, -2.9], [7.8, 2, -2.9], [7.8, 2, 2.9], [3.8, 2, 2.9], [3.8, 2, -2.9]]} delay={3.3} opacity={0.35} />

            {/* ══ GARAGE ══ */}
            <WireBox position={[9.8, 1.5, 0]} size={[3.5, 2.8, 4.8]} delay={2.5} />
            <WireBox position={[9.8, 3.05, 0]} size={[3.8, 0.12, 5.1]} delay={4.3} color={GOLD_FAINT} />

            {/* ══ FRONT WINDOWS — Main Block top floor ══ */}
            <WireBox position={[-1.8, 4.8, 3.01]} size={[2.6, 1.5, 0.02]} delay={5.0} />
            <WireLine points={[[-1.8, 4.05, 3.02], [-1.8, 5.55, 3.02]]} delay={5.2} opacity={0.35} />
            <WireBox position={[1.6, 4.8, 3.01]} size={[1.6, 1.5, 0.02]} delay={5.3} />

            {/* Main Block mid floor windows */}
            <WireBox position={[-1.5, 2.8, 3.01]} size={[2, 1.2, 0.02]} delay={5.6} />
            <WireBox position={[1.5, 2.8, 3.01]} size={[2, 1.2, 0.02]} delay={5.8} />

            {/* Main Block ground floor windows */}
            <WireBox position={[-2, 0.9, 3.01]} size={[2.2, 1.2, 0.02]} delay={6.2} />
            <WireBox position={[2.2, 0.9, 3.01]} size={[2, 1.2, 0.02]} delay={6.4} />

            {/* ══ GRAND ENTRANCE ══ */}
            <WireBox position={[0, 1.15, 3.01]} size={[1.4, 2.1, 0.02]} delay={5.4} />
            <WireLine points={[[0, 0.1, 3.02], [0, 2.2, 3.02]]} delay={5.5} opacity={0.4} />
            {/* Pillars */}
            <WireBox position={[-1, 1.15, 3.2]} size={[0.2, 2.2, 0.2]} delay={5.6} />
            <WireBox position={[1, 1.15, 3.2]} size={[0.2, 2.2, 0.2]} delay={5.6} />
            {/* Portico */}
            <WireBox position={[0, 2.35, 3.3]} size={[2.4, 0.1, 0.8]} delay={5.8} />
            {/* Steps */}
            <WireBox position={[0, 0.08, 3.6]} size={[1.8, 0.08, 0.5]} delay={7.5} color={GOLD_FAINT} />
            <WireBox position={[0, 0.02, 3.95]} size={[2.1, 0.05, 0.4]} delay={7.7} color={GOLD_FAINT} />

            {/* ══ LEFT WING WINDOWS ══ */}
            <WireBox position={[-6, 3.5, 2.91]} size={[1.6, 1, 0.02]} delay={6.0} />
            <WireBox position={[-7.5, 3.5, 2.91]} size={[1, 1, 0.02]} delay={6.1} />
            <WireBox position={[-6.2, 1, 2.91]} size={[2.2, 1.3, 0.02]} delay={6.3} />

            {/* ══ RIGHT WING WINDOWS ══ */}
            <WireBox position={[5.3, 3.6, 2.91]} size={[1.4, 1.1, 0.02]} delay={6.2} />
            <WireBox position={[6.8, 3.6, 2.91]} size={[1.1, 1.1, 0.02]} delay={6.3} />
            <WireBox position={[5.5, 1, 2.91]} size={[1.3, 1.3, 0.02]} delay={6.5} />
            <WireBox position={[7, 1, 2.91]} size={[1.3, 1.3, 0.02]} delay={6.6} />

            {/* ══ PENTHOUSE WINDOWS ══ */}
            <WireBox position={[-1.8, 7.2, 1.91]} size={[1, 1, 0.02]} delay={7.0} />
            <WireBox position={[-0.2, 7.2, 1.91]} size={[1.4, 1, 0.02]} delay={7.1} />

            {/* ══ BALCONY — Main top floor ══ */}
            <WireBox position={[2.2, 4.05, 3.5]} size={[2.2, 0.06, 1]} delay={6.8} color={GOLD_FAINT} />
            {/* Railing posts */}
            {[1.2, 1.8, 2.4, 3.0, 3.3].map((x, i) => (
                <WireLine key={`br1-${i}`} points={[[x, 4.05, 4], [x, 4.65, 4]]} delay={7.0 + i * 0.08} opacity={0.4} />
            ))}
            <WireLine points={[[1.2, 4.65, 4], [3.3, 4.65, 4]]} delay={7.5} opacity={0.5} />

            {/* ══ BALCONY — Left wing ══ */}
            <WireBox position={[-6.2, 2.5, 3.3]} size={[2.6, 0.06, 0.8]} delay={7.2} color={GOLD_FAINT} />
            {[-7.5, -6.8, -6.1, -5.4, -4.9].map((x, i) => (
                <WireLine key={`br2-${i}`} points={[[x, 2.5, 3.7], [x, 3.1, 3.7]]} delay={7.4 + i * 0.08} opacity={0.35} />
            ))}
            <WireLine points={[[-7.5, 3.1, 3.7], [-4.9, 3.1, 3.7]]} delay={7.8} opacity={0.45} />

            {/* ══ GARAGE DOORS ══ */}
            <WireBox position={[9.2, 0.85, 2.41]} size={[1.2, 1.5, 0.02]} delay={7.0} />
            <WireBox position={[10.6, 0.85, 2.41]} size={[1.2, 1.5, 0.02]} delay={7.1} />
            {/* Horizontal slats */}
            {[0.3, 0.65, 1.0, 1.35].map((y, i) => (
                <group key={`gs-${i}`}>
                    <WireLine points={[[8.6, y, 2.42], [9.8, y, 2.42]]} delay={7.3 + i * 0.1} opacity={0.3} />
                    <WireLine points={[[10, y, 2.42], [11.2, y, 2.42]]} delay={7.35 + i * 0.1} opacity={0.3} />
                </group>
            ))}

            {/* ══ ROOF DETAILS ══ */}
            {/* Water tank */}
            <WireBox position={[-2.2, 8.9, -1]} size={[0.8, 0.8, 0.8]} delay={8.5} />
            {/* Antenna */}
            <WireLine points={[[-2.2, 9.3, -1], [-2.2, 10.5, -1]]} delay={8.8} opacity={0.5} />
            <WireLine points={[[-2.45, 9.9, -1], [-1.95, 9.9, -1]]} delay={9.0} opacity={0.4} />
            {/* AC units */}
            <WireBox position={[0.6, 8.55, -0.5]} size={[0.5, 0.35, 0.5]} delay={9.2} color={GOLD_FAINT} />
            <WireBox position={[1.3, 8.55, -0.5]} size={[0.5, 0.35, 0.5]} delay={9.3} color={GOLD_FAINT} />

            {/* ══ TREES ══ */}
            {/* Tree 1 — far left */}
            <WireLine points={[[-9, 0.05, 4], [-9, 1.8, 4]]} delay={9.5} opacity={0.5} />
            <WireBox position={[-9, 2.3, 4]} size={[1, 1, 1]} delay={9.6} color={GOLD_FAINT} />
            {/* Tree 2 — right */}
            <WireLine points={[[11.5, 0.05, 3.5], [11.5, 1.3, 3.5]]} delay={9.8} opacity={0.45} />
            <WireBox position={[11.5, 1.8, 3.5]} size={[0.9, 0.9, 0.9]} delay={9.9} color={GOLD_FAINT} />
            {/* Tree 3 — back */}
            <WireLine points={[[-4, 0.05, -4.5], [-4, 1.6, -4.5]]} delay={10.0} opacity={0.45} />
            <WireBox position={[-4, 2.1, -4.5]} size={[1.1, 1.1, 1.1]} delay={10.1} color={GOLD_FAINT} />

            {/* ══ COMPOUND WALLS ══ */}
            <WireBox position={[-8.5, 0.3, 4.8]} size={[1.8, 0.5, 0.15]} delay={10.3} color={GOLD_FAINT} />
            <WireBox position={[10.5, 0.3, 4.8]} size={[2, 0.5, 0.15]} delay={10.4} color={GOLD_FAINT} />

            {/* ══ BACK WINDOWS ══ */}
            <WireBox position={[-1.5, 4.5, -3.01]} size={[2.2, 1.3, 0.02]} delay={8.0} />
            <WireBox position={[1.5, 4.5, -3.01]} size={[1.8, 1.3, 0.02]} delay={8.1} />
            <WireBox position={[0, 1, -3.01]} size={[2.8, 1.3, 0.02]} delay={8.3} />

            {/* Left wing side window */}
            <WireBox position={[-8.31, 3.2, 0.3]} size={[0.02, 1, 1.6]} delay={7.8} />
            {/* Right wing side window */}
            <WireBox position={[7.81, 3.5, 0]} size={[0.02, 1.1, 1.8]} delay={8.0} />
        </group>
    );
};

// ─── Main Component ───
const HeroAnimated = () => {
    return (
        <section className="hero-animated">
            {/* 3D Canvas — contained to left side */}
            <div className="house-container-3d">
                <Canvas
                    camera={{ position: [30, 20, 30], fov: 32, near: 0.1, far: 100 }}
                    gl={{ antialias: true, alpha: true }}
                    style={{ background: 'transparent' }}
                    dpr={[1, 1.5]}
                >
                    <CameraRig />
                    <House />
                </Canvas>
            </div>

            {/* Floating construction icons */}
            <div className="floating-icons-3d">
                <div className="floating-icon icon-1">
                    <Home size={24} />
                </div>
                <div className="floating-icon icon-2">
                    <Ruler size={20} />
                </div>
                <div className="floating-icon icon-3">
                    <Hammer size={22} />
                </div>
            </div>

            {/* Animated Grid Overlay */}
            <div className="grid-overlay"></div>

            {/* Top Header */}
            <div className="hero-header">
                <div className="hero-header-inner">
                    <div className="coords">
                        <span>AVADI, CHENNAI</span>
                        <div className="coord-dot"></div>
                        <span>TAMIL NADU</span>
                    </div>
                    <div className="brand-section">
                        <div className="brand-divider"></div>
                        <span className="brand-tagline">SINCE 2015</span>
                    </div>
                </div>
            </div>

            {/* Corner Accents */}
            <div className="corner-accent top-left"></div>
            <div className="corner-accent top-right"></div>
            <div className="corner-accent bottom-left"></div>
            <div className="corner-accent bottom-right"></div>

            {/* Main Content */}
            <div className="hero-main">
                <div className="content-wrapper">
                    <div className="content-box">
                        <div className="top-decoration">
                            <div className="deco-line"></div>
                            <span className="deco-symbol">◊</span>
                            <div className="deco-line-full"></div>
                        </div>

                        <div className="title-wrapper">
                            <div className="title-accent"></div>
                            <h1 className="hero-title">
                                BUILDING <span className="accent">DREAMS</span>
                            </h1>
                        </div>

                        <div className="dots-decoration">
                            {Array.from({ length: 40 }).map((_, i) => (
                                <div key={i} className="dot"></div>
                            ))}
                        </div>

                        <div className="description-wrapper">
                            <p className="description">
                                We provide complete end-to-end construction solutions. From blueprint to final handover, we build efficient, beautiful, and durable homes in Chennai's western region.
                            </p>
                            <div className="description-accent">
                                <div className="description-accent-dot"></div>
                            </div>
                        </div>

                        <div className="cta-buttons flex gap-4">
                            <a href="#calculator" className="btn btn-primary h-14 px-8 text-lg rounded-full flex items-center gap-2">
                                GET FREE QUOTE <ArrowRight size={18} />
                            </a>
                            <a href="/services" className="btn btn-outline h-14 px-8 text-lg rounded-full flex items-center gap-2 bg-stone-50 hover:bg-stone-200 border-stone-300 text-stone-600 hover:text-stone-900">
                                EXPLORE SERVICES
                            </a>
                        </div>

                        <div className="bottom-decoration">
                            <span className="symbol">◊</span>
                            <div className="line"></div>
                            <span className="text">SSJ.DEVELOPERS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroAnimated;
