import React from 'react';
import './Volunteer.css'; // We will replace this file's content next

// Importing icons - run 'npm install react-icons' if you haven't
import { FaPaw, FaPlus, FaTasks, FaCalendarAlt, FaBullhorn, FaMedkit } from 'react-icons/fa';

// --- New Mock Data for an Event-Driven Dashboard ---
const mockEvents = [
  {
    type: 'APPOINTMENT',
    icon: <FaCalendarAlt />,
    iconBg: '#e0f7fa',
    iconColor: '#00796b',
    title: 'Vet Checkup for Buddy',
    time: 'Today, 2:00 PM',
    details: 'Annual vaccination and checkup at Northwood Vets.',
  },
  {
    type: 'TASK',
    icon: <FaTasks />,
    iconBg: '#fff3e0',
    iconColor: '#f57c00',
    title: 'Log evening feeding for Whiskers',
    time: 'Today, 6:00 PM',
    details: 'Remember to log quantity and any notes on appetite.',
  },
  {
    type: 'ANNOUNCEMENT',
    icon: <FaBullhorn />,
    iconBg: '#f3e5f5',
    iconColor: '#7b1fa2',
    title: 'Adoption Day This Saturday!',
    time: 'June 29, 2024, 11:00 AM - 3:00 PM',
    details: 'We need all hands on deck to help find forever homes.',
  },
   {
    type: 'TASK',
    icon: <FaMedkit />,
    iconBg: '#ffebee',
    iconColor: '#d32f2f',
    title: 'Administer Rocky\'s Medication',
    time: 'Tomorrow, 8:00 AM',
    details: 'One tablet, hidden in a treat as prescribed.',
  },
];

const mockAssignedAnimals = [
    { name: 'Buddy', type: 'Golden Retriever Mix' },
    { name: 'Whiskers', type: 'Domestic Shorthair' },
    { name: 'Rocky', type: 'Mixed Breed Puppy' },
];
// --- End Mock Data ---

export default function VolunteerDashboard() {
  return (
    <div className="volunteer-dashboard">
      <header className="dashboard-header">
        <h1>Your Volunteer Dashboard</h1>
        <button className="log-hours-btn">
          <FaPlus /> Log General Hours
        </button>
      </header>

      <div className="dashboard-content">
        {/* Main Content: Events Timeline */}
        <main className="timeline-container">
          <h2>Upcoming Events & Tasks</h2>
          <div className="event-timeline">
            {mockEvents.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-icon" style={{ backgroundColor: event.iconBg, color: event.iconColor }}>
                  {event.icon}
                </div>
                <div className="event-details">
                  <p className="event-title">{event.title}</p>
                  <p className="event-time">{event.time}</p>
                  <p className="event-description">{event.details}</p>
                </div>
                <button className="event-action-btn">View Details</button>
              </div>
            ))}
          </div>
        </main>

        {/* Sidebar */}
        <aside className="sidebar-container">
          {/* Stats Section */}
          <div className="sidebar-widget">
            <h3>Your Stats</h3>
            <div className="stats-grid">
                <div className="stat-item">
                    <span className="stat-value">32</span>
                    <span className="stat-label">Hours Logged (Month)</span>
                </div>
                <div className="stat-item">
                    <span className="stat-value">3</span>
                    <span className="stat-label">Active Cases</span>
                </div>
            </div>
          </div>

          {/* Assigned Animals Section */}
          <div className="sidebar-widget">
            <h3>My Assigned Animals</h3>
            <ul className="animal-list">
              {mockAssignedAnimals.map((animal, index) => (
                <li key={index}>
                  <div className="animal-icon"><FaPaw /></div>
                  <div className="animal-info">
                    <span className="animal-name">{animal.name}</span>
                    <span className="animal-type">{animal.type}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
           <div className="sidebar-widget">
                <h3>Request Supplies</h3>
                <button className="button-fullwidth">Submit a Request</button>
            </div>
        </aside>
      </div>
    </div>
  );
}