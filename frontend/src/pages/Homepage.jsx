import React from 'react';

export default function Homepage() {
  return (
    <div className="homepage" style={{ width: '100vw', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section className="hero gradient-bg fade-in">
        <div className="badge">🧠 AI-Powered Rescue Platform</div>
        <h1 className="headline">
          <span className="blue">Save Lives</span> with <span className="pink">Smart</span> Rescue ✨
        </h1>
        <p className="subtext">
          SnugTail uses AI to streamline animal rescue operations, match perfect adoptions, and help rescue centers save more lives through intelligent workflows.
        </p>
        <div className="button-group">
          <button className="btn primary hover-bounce">🚨 Report Emergency</button>
          <button className="btn secondary hover-bounce">💖 Find Your Companion</button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats fade-in">
        <div>🐒 <p className="stat-number">2,847</p> Animals Rescued</div>
        <div>💝 <p className="stat-number">1,923</p> Successful Adoptions</div>
        <div>👥 <p className="stat-number">456</p> Active Volunteers</div>
        <div>🎯 <p className="stat-number">89%</p> AI Match Success</div>
      </section>

      {/* AI Features Section */}
      <section className="features fade-in">
        <h2 className="section-title">
          🔮 Advanced Technology Meets <span className="pink">Compassionate Care</span>
        </h2>
        <p className="section-subtext">
          Our cutting-edge AI makes rescue and adoption more efficient, accurate, and successful than ever before
        </p>
        <div className="features-grid">
          <FeatureCard icon="📷" title="Smart Image Analysis" desc="AI detects animal species, injuries, and urgency level from photos" />
          <FeatureCard icon="🧠" title="Adoption Matchmaking" desc="ML algorithm matches animals with perfect families based on lifestyle" />
          <FeatureCard icon="📈" title="Predictive Analytics" desc="Forecast recovery times, adoption likelihood, and resource needs" />
          <FeatureCard icon="📍" title="Priority Dispatch" desc="AI prioritizes rescue cases based on urgency and location" />
          <FeatureCard icon="🧑‍🤝‍🧑" title="Volunteer Management" desc="Smart assignment of volunteers based on skills and availability" />
          <FeatureCard icon="💗" title="Auto Bio Generation" desc="AI creates compelling adoption stories from animal data" />
        </div>
      </section>

      {/* How You Can Help Section */}
      <section className="help fade-in">
        <h2 className="section-title">How Can You Help? 🤝</h2>
        <div className="help-grid">
          <HelpCard title="Report Animal" emoji="🆘" desc="Found an animal in need? Report it immediately" />
          <HelpCard title="Volunteer" emoji="🙋‍♀️" desc="Join our rescue and care operations" />
          <HelpCard title="Adopt" emoji="💞" desc="Find your perfect companion" />
          <HelpCard title="Admin" emoji="📊" desc="Manage rescue operations" />
        </div>
      </section>

      {/* Join Section */}
      <section className="join fade-in">
        <h2>Join the AI-Powered Rescue Revolution</h2>
        <p>Whether you're reporting, volunteering, or adopting – every action saves lives</p>
        <div className="button-group">
          <button className="btn white hover-bounce">Become a Volunteer</button>
          <button className="btn outline hover-bounce">Access Dashboard</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer gradient-footer">
        <div className="footer-col">
          <div className="logo">💚 <span>SnugTail</span></div>
          <p>AI-powered platform saving animal lives through smart rescue and adoption technology.</p>
        </div>
        <div className="footer-col">
          <h3>Quick Actions</h3>
          <ul>
            <li>🚨 Report Animal</li>
            <li>💝 Browse Adoptions</li>
            <li>🙋‍♀️ Volunteer</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Platform</h3>
          <ul>
            <li>📊 Dashboard</li>
            <li>📈 Analytics</li>
            <li>🧬 API</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Support</h3>
          <ul>
            <li>❓ Help Center</li>
            <li>📞 Contact Us</li>
            <li>🔐 Privacy Policy</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="card hover-float">
      <div className="icon">{icon}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function HelpCard({ emoji, title, desc }) {
  return (
    <div className="card hover-float">
      <div className="icon">{emoji}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}
