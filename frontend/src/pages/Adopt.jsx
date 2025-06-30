import React, { useState } from 'react';
import './Adopt.css'; // We will create this CSS file next

// Icons from react-icons (ensure you've run 'npm install react-icons')
import { FaHeart, FaPaw, FaHome, FaRunning, FaChild, FaCheckCircle, FaTimes } from 'react-icons/fa';

// --- Mock Data: Adoptable Animals ---
const mockAnimals = [
  {
    id: 1, name: 'Sunny', type: 'Golden Retriever', age: '2 years', gender: 'Female',
    // CORRECTED URL for Sunny
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fgolden-retriever&psig=AOvVaw3f5bX5MVP74HiSB04SfsAD&ust=1751370208800000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCnusuImY4DFQAAAAAdAAAAABAE',
    traits: { activity: 'High', home: 'House', kids: true }
  },
  {
    id: 2, name: 'Mittens', type: 'Domestic Shorthair', age: '3 years', gender: 'Female',
    imageUrl: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=500&q=80',
    traits: { activity: 'Low', home: 'Apartment', kids: true }
  },
  {
    id: 3, name: 'Dash', type: 'Beagle', age: '1 year', gender: 'Male',
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&q=80',
    traits: { activity: 'High', home: 'House', kids: true }
  },
  {
    id: 4, name: 'Shadow', type: 'Bombay Cat', age: '5 years', gender: 'Male',
    // CORRECTED URL for Shadow
    imageUrl: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=500&q=80',
    traits: { activity: 'Moderate', home: 'Any', kids: false }
  },
   {
    id: 5, name: 'Rex', type: 'German Shepherd', age: '4 years', gender: 'Male',
    imageUrl: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=500&q=80',
    traits: { activity: 'High', home: 'House', kids: true }
  },
   {
    id: 6, name: 'Luna', type: 'Siamese', age: '2 years', gender: 'Female',
    // CORRECTED URL for Luna
    imageUrl: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=500&q=80',
    traits: { activity: 'Moderate', home: 'Apartment', kids: false }
  },
];
// --- End Mock Data ---


export default function AdoptPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showApplication, setShowApplication] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [bestMatch, setBestMatch] = useState(null);
  
  // --- "AI" Matchmaking Logic (Simulation) ---
  const handleQuizSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userPrefs = {
      activity: formData.get('activity'),
      home: formData.get('home'),
      kids: formData.get('kids') === 'true',
    };

    let bestScore = -1;
    let matchId = null;

    mockAnimals.forEach(animal => {
      let score = 0;
      if (animal.traits.activity === userPrefs.activity) score++;
      if (animal.traits.home === userPrefs.home || animal.traits.home === 'Any') score++;
      if (animal.traits.kids === userPrefs.kids) score++;
      
      if (score > bestScore) {
        bestScore = score;
        matchId = animal.id;
      }
    });
    setBestMatch(matchId);
    setShowQuiz(false);
  };

  const handleApplyClick = (animal) => {
    setSelectedAnimal(animal);
    setShowApplication(true);
  };

  return (
    <div className="adoption-portal">
      {/* --- Section 1: AI Matchmaker --- */}
      <section className="matchmaker-section">
        <div className="matchmaker-content">
          <h1>Find Your Perfect Companion</h1>
          <p>Answer a few questions about your lifestyle, and our AI will suggest the most compatible pet for you.</p>
          <button className="cta-button large-cta" onClick={() => setShowQuiz(true)}>
            <FaHeart /> Get Your Match
          </button>
        </div>
      </section>

      {/* --- Section 2: Animal Gallery --- */}
      <section className="gallery-section">
        <h2>Ready for a Home</h2>
        <div className="animal-gallery">
          {mockAnimals.map(animal => (
            <div key={animal.id} className={`animal-card ${bestMatch === animal.id ? 'best-match' : ''}`}>
              {bestMatch === animal.id && <div className="best-match-badge"><FaCheckCircle/> Best Match!</div>}
              <img src={animal.imageUrl} alt={animal.name} className="animal-image"/>
              <div className="animal-info">
                <h3>{animal.name}</h3>
                <p>{animal.type}</p>
                <p>{animal.age} old, {animal.gender}</p>
                <button className="cta-button" onClick={() => handleApplyClick(animal)}>
                  <FaPaw/> Adopt Me
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 3: How It Works --- */}
      <section className="how-it-works-section">
        <h2>Our Adoption Process</h2>
        <div className="steps-container">
          <div className="step-card"><span>1</span><h4>Apply</h4><p>Fill out the form for the animal you love.</p></div>
          <div className="step-card"><span>2</span><h4>Review</h4><p>Our team reviews your application carefully.</p></div>
          <div className="step-card"><span>3</span><h4>Meet & Greet</h4><p>Schedule a visit to meet your potential new friend.</p></div>
          <div className="step-card"><span>4</span><h4>Go Home</h4><p>Complete the adoption and welcome them home.</p></div>
        </div>
      </section>

      {/* --- MODALS --- */}
      {/* Quiz Modal */}
      {showQuiz && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setShowQuiz(false)}><FaTimes /></button>
            <h2>Find Your Match</h2>
            <p>Tell us about your lifestyle.</p>
            <form onSubmit={handleQuizSubmit} className="modal-form">
              <label><FaRunning /> What is your activity level?</label>
              <select name="activity" required><option value="Low">Low</option><option value="Moderate">Moderate</option><option value="High">High</option></select>
              <label><FaHome /> What is your home type?</label>
              <select name="home" required><option value="Apartment">Apartment</option><option value="House">House w/ Yard</option></select>
              <label><FaChild /> Will the pet live with children?</label>
              <select name="kids" required><option value="true">Yes</option><option value="false">No</option></select>
              <button type="submit" className="cta-button">See My Match</button>
            </form>
          </div>
        </div>
      )}

      {/* Application Modal */}
      {showApplication && (
        <div className="modal-backdrop">
          <div className="modal-content large-modal">
            <button className="close-modal" onClick={() => setShowApplication(false)}><FaTimes /></button>
            <h2>Adoption Application for {selectedAnimal?.name}</h2>
            <form className="modal-form">
              <div className="form-grid">
                <div><label>Full Name</label><input type="text" name="fullName" required /></div>
                <div><label>Email Address</label><input type="email" name="email" required /></div>
                <div><label>Phone Number</label><input type="tel" name="phone" required /></div>
                <div><label>Address</label><input type="text" name="address" required /></div>
              </div>
              <label>Tell us a bit about your home and lifestyle. Why do you want to adopt {selectedAnimal?.name}?</label>
              <textarea name="about" rows="6" required></textarea>
              <p className="form-consent">I certify that the information provided is true and I am over 18 years of age.</p>
              <button type="submit" className="cta-button">Submit Application</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 