
import './AboutUs.css';

export default function AboutUs() {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-image-wrapper">
                    <img
                        className="about-image"
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=451&h=451&auto=format&fit=crop"
                        alt="Construction Excellence"
                    />
                    <div className="about-team-card">
                        <div className="team-avatars">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" alt="team" className="avatar" />
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200" alt="team" className="avatar" />
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop" alt="team" className="avatar" />
                            <div className="avatar-count">50+</div>
                        </div>
                        <p className="team-text">Expert team members</p>
                    </div>
                </div>
                <div className="about-content">
                    <h2 className="about-title">About Us</h2>
                    <div className="title-underline"></div>
                    <p className="about-text">
                        SSJ Developers transforms visions into architectural reality. With over 15 years of expertise in construction and development, we're committed to delivering exceptional quality that stands the test of time.
                    </p>
                    <p className="about-text">
                        Whether you're building your dream home, commercial space, or residential project, our team of 50+ skilled professionals brings together innovation, craftsmanship, and attention to detail in every build.
                    </p>
                    <p className="about-text">
                        From concept to completion, SSJ Developers empowers you to build beautifully and efficiently—creating structures that tell your unique story with precision and excellence.
                    </p>
                    <a href="#calculator" className="about-btn">
                        <span>Get Estimate</span>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z" fill="#fff" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
