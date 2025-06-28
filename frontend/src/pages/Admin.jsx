import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css"; // Import your custom CSS file here

function Admin() {
  const [activeTab, setActiveTab] = useState("cases");
  const [cases] = useState([
    {
      id: "SNG-001234",
      name: "Buddy",
      breed: "Golden Retriever Mix",
      location: "Central Park, NYC",
      urgency: 9.2,
      aiScore: 95,
      status: "Critical",
      description:
        "Injured dog with visible limping, appears to have been hit by vehicle.",
      reportedBy: "Sarah Johnson",
      assigned: "Team Alpha",
      date: "1/15/2024",
    },
    {
      id: "SNG-001235",
      name: "Luna",
      breed: "Domestic Cat",
      location: "Brooklyn Heights",
      urgency: 6.5,
      aiScore: 87,
      status: "In Progress",
      description: "Stray cat with respiratory issues, needs medical attention.",
      reportedBy: "Mike Chen",
      assigned: "Team Beta",
      date: "1/15/2024",
    },
    {
      id: "SNG-001236",
      name: "Charlie",
      breed: "Mixed Breed Puppy",
      location: "Queens Plaza",
      urgency: 4.2,
      aiScore: 76,
      status: "Rescued",
      description: "Abandoned puppy found in cardboard box, appears healthy.",
      reportedBy: "Anna Rodriguez",
      assigned: "Team Gamma",
      date: "1/15/2024",
    },
  ]);

  const [volunteers] = useState([
    {
      id: "VOL-1001",
      name: "Alex Morgan",
      role: "Rescue Specialist",
      status: "Active",
      casesCompleted: 42,
      rating: 4.9,
      skills: ["First Aid", "Animal Handling", "Emergency Response"],
      joinDate: "03/12/2022",
      lastActive: "Today"
    },
    {
      id: "VOL-1002",
      name: "Jamie Smith",
      role: "Transport Coordinator",
      status: "Active",
      casesCompleted: 28,
      rating: 4.7,
      skills: ["Driving", "Logistics", "Customer Service"],
      joinDate: "05/18/2022",
      lastActive: "Yesterday"
    },
    {
      id: "VOL-1003",
      name: "Taylor Wilson",
      role: "Foster Care",
      status: "On Leave",
      casesCompleted: 15,
      rating: 4.8,
      skills: ["Animal Care", "Behavior Training", "Rehabilitation"],
      joinDate: "08/22/2022",
      lastActive: "1 week ago"
    }
  ]);

  const [animals] = useState([
    {
      id: "ANI-5001",
      name: "Max",
      type: "Dog",
      breed: "Labrador Retriever",
      status: "Adopted",
      intakeDate: "11/05/2023",
      age: "3 years",
      medicalStatus: "Healthy",
      location: "Happy Homes Shelter"
    },
    {
      id: "ANI-5002",
      name: "Bella",
      type: "Cat",
      breed: "Siamese Mix",
      status: "Available",
      intakeDate: "01/10/2024",
      age: "1.5 years",
      medicalStatus: "Under Treatment",
      location: "Central Rescue Center"
    },
    {
      id: "ANI-5003",
      name: "Rocky",
      type: "Dog",
      breed: "German Shepherd",
      status: "In Foster Care",
      intakeDate: "12/15/2023",
      age: "5 months",
      medicalStatus: "Recovering",
      location: "Foster Home - Brooklyn"
    }
  ]);

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Critical":
        return "bg-danger-subtle text-danger";
      case "In Progress":
        return "bg-warning-subtle text-warning";
      case "Rescued":
        return "bg-success-subtle text-success";
      case "Active":
        return "bg-success-subtle text-success";
      case "On Leave":
        return "bg-warning-subtle text-warning";
      case "Adopted":
        return "bg-success-subtle text-success";
      case "Available":
        return "bg-info-subtle text-info";
      case "In Foster Care":
        return "bg-primary-subtle text-primary";
      default:
        return "bg-secondary-subtle text-secondary";
    }
  };

  const getUrgencyTextColor = (urgency) => {
    if (urgency >= 8) return "text-danger";
    if (urgency >= 5) return "text-warning";
    return "text-info";
  };

  const getAiScoreTextColor = (score) => {
    if (score >= 90) return "text-primary";
    if (score >= 70) return "text-info";
    return "text-secondary";
  };

  return (
    <div className="min-vh-100 admin-container">
      <div className="container-fluid py-4 admin-dashboard-container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0 text-primary">
            <i className="bi bi-shield-lock me-2"></i>
            Rescue Admin Dashboard
          </h2>
          <div className="d-flex align-items-center">
            <span className="badge bg-light text-dark me-2">
              <i className="bi bi-bell-fill text-primary"></i>
            </span>
            <div className="dropdown">
              <button 
                className="btn btn-outline-primary dropdown-toggle" 
                type="button" 
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-person-circle me-1"></i> Admin User
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#"><i className="bi bi-gear me-2"></i>Settings</a></li>
                <li><a className="dropdown-item" href="#"><i className="bi bi-box-arrow-right me-2"></i>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card stat-card bg-primary bg-opacity-10 border-primary border-opacity-25">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="text-uppercase text-muted mb-2">Active Cases</h6>
                    <h3 className="mb-0">24</h3>
                  </div>
                  <div className="icon-circle bg-primary bg-opacity-25">
                    <i className="bi bi-clipboard-pulse text-primary"></i>
                  </div>
                </div>
                <p className="text-muted mb-0 mt-2">
                  <span className="text-success me-1"><i className="bi bi-arrow-up"></i> 12%</span>
                  vs last week
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card stat-card bg-success bg-opacity-10 border-success border-opacity-25">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="text-uppercase text-muted mb-2">Volunteers</h6>
                    <h3 className="mb-0">56</h3>
                  </div>
                  <div className="icon-circle bg-success bg-opacity-25">
                    <i className="bi bi-people text-success"></i>
                  </div>
                </div>
                <p className="text-muted mb-0 mt-2">
                  <span className="text-success me-1"><i className="bi bi-arrow-up"></i> 5%</span>
                  vs last month
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card stat-card bg-warning bg-opacity-10 border-warning border-opacity-25">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="text-uppercase text-muted mb-2">Animals Saved</h6>
                    <h3 className="mb-0">142</h3>
                  </div>
                  <div className="icon-circle bg-warning bg-opacity-25">
                    <i className="bi bi-heart-pulse text-warning"></i>
                  </div>
                </div>
                <p className="text-muted mb-0 mt-2">
                  <span className="text-success me-1"><i className="bi bi-arrow-up"></i> 23%</span>
                  vs last month
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card stat-card bg-info bg-opacity-10 border-info border-opacity-25">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="text-uppercase text-muted mb-2">Adoptions</h6>
                    <h3 className="mb-0">87</h3>
                  </div>
                  <div className="icon-circle bg-info bg-opacity-25">
                    <i className="bi bi-house-heart text-info"></i>
                  </div>
                </div>
                <p className="text-muted mb-0 mt-2">
                  <span className="text-success me-1"><i className="bi bi-arrow-up"></i> 8%</span>
                  vs last month
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="d-flex justify-content-center mb-4">
          <div
            className="btn-group rounded-pill overflow-hidden btn-group-tabs shadow-sm"
            role="group"
            aria-label="Dashboard Tabs"
          >
            <button
              type="button"
              className={`btn ${activeTab === 'cases' ? 'active-tab-purple' : 'btn-light'} d-flex align-items-center`}
              onClick={() => setActiveTab('cases')}
            >
              <i className="bi bi-clipboard-data me-2"></i> 
              <span>Rescue Cases</span>
              <span className="badge bg-primary ms-2">24</span>
            </button>
            <button
              type="button"
              className={`btn ${activeTab === 'volunteers' ? 'active-tab-purple' : 'btn-light'} d-flex align-items-center`}
              onClick={() => setActiveTab('volunteers')}
            >
              <i className="bi bi-people me-2"></i>
              <span>Volunteers</span>
              <span className="badge bg-success ms-2">56</span>
            </button>
            <button
              type="button"
              className={`btn ${activeTab === 'animals' ? 'active-tab-purple' : 'btn-light'} d-flex align-items-center`}
              onClick={() => setActiveTab('animals')}
            >
              <i className="bi bi-heart-fill me-2"></i>
              <span>Animals</span>
              <span className="badge bg-warning ms-2">142</span>
            </button>
          </div>
        </div>

        {/* Cases Tab Content */}
        <div className={`tab-content-section ${activeTab === "cases" ? "active" : "d-none"}`}>
          <div className="card shadow-sm border-0">
            <div className="card-header bg-white border-0 pt-3 pb-2">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Active Rescue Cases</h5>
                <div>
                  <button className="btn btn-sm btn-outline-primary me-2">
                    <i className="bi bi-funnel"></i> Filter
                  </button>
                  <button className="btn btn-sm btn-primary">
                    <i className="bi bi-plus-lg"></i> New Case
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Case ID</th>
                      <th>Animal</th>
                      <th>Location</th>
                      <th>Urgency</th>
                      <th>AI Score</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cases.map((caseItem) => (
                      <tr key={caseItem.id}>
                        <td>
                          <span className="fw-semibold">{caseItem.id}</span>
                          <div className="text-muted small">{caseItem.date}</div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="animal-avatar me-2">
                              {caseItem.name.charAt(0)}
                            </div>
                            <div>
                              <div className="fw-semibold">{caseItem.name}</div>
                              <div className="text-muted small">{caseItem.breed}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="fw-semibold">{caseItem.location}</div>
                          <div className="text-muted small">Reported by: {caseItem.reportedBy}</div>
                        </td>
                        <td>
                          <div className={`fw-bold ${getUrgencyTextColor(caseItem.urgency)}`}>
                            {caseItem.urgency}
                          </div>
                          <div className="progress mt-1" style={{height: "4px"}}>
                            <div 
                              className={`progress-bar ${getUrgencyTextColor(caseItem.urgency).replace("text-", "bg-")}`}
                              role="progressbar" 
                              style={{width: `${caseItem.urgency * 10}%`}}
                            ></div>
                          </div>
                        </td>
                        <td>
                          <div className={`fw-bold ${getAiScoreTextColor(caseItem.aiScore)}`}>
                            {caseItem.aiScore}%
                          </div>
                        </td>
                        <td>
                          <span className={`badge ${getStatusBadgeClass(caseItem.status)} rounded-pill`}>
                            {caseItem.status}
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-outline-primary me-1">
                            <i className="bi bi-eye"></i>
                          </button>
                          <button className="btn btn-sm btn-outline-secondary">
                            <i className="bi bi-three-dots-vertical"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer bg-white border-0 py-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="text-muted small">
                  Showing 1 to 3 of 24 entries
                </div>
                <nav aria-label="Page navigation">
                  <ul className="pagination pagination-sm mb-0">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex="-1">Previous</a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Volunteers Tab Content */}
        <div className={`tab-content-section ${activeTab === "volunteers" ? "active" : "d-none"}`}>
          <div className="card shadow-sm border-0">
            <div className="card-header bg-white border-0 pt-3 pb-2">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Volunteer Management</h5>
                <div>
                  <button className="btn btn-sm btn-outline-primary me-2">
                    <i className="bi bi-funnel"></i> Filter
                  </button>
                  <button className="btn btn-sm btn-primary">
                    <i className="bi bi-plus-lg"></i> Add Volunteer
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="row g-3 p-3">
                {volunteers.map((volunteer) => (
                  <div className="col-md-6 col-lg-4" key={volunteer.id}>
                    <div className="card volunteer-card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <div className="d-flex align-items-start mb-3">
                          <div className="volunteer-avatar me-3">
                            {volunteer.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h5 className="mb-1">{volunteer.name}</h5>
                            <div className="d-flex align-items-center mb-2">
                              <span className={`badge ${getStatusBadgeClass(volunteer.status)} rounded-pill me-2`}>
                                {volunteer.status}
                              </span>
                              <span className="text-muted small">
                                <i className="bi bi-star-fill text-warning me-1"></i>
                                {volunteer.rating}
                              </span>
                            </div>
                            <p className="text-muted small mb-2">
                              <i className="bi bi-briefcase me-1"></i>
                              {volunteer.role}
                            </p>
                          </div>
                        </div>
                        <div className="volunteer-stats mb-3">
                          <div className="row text-center">
                            <div className="col-4 border-end">
                              <div className="fw-bold">{volunteer.casesCompleted}</div>
                              <div className="text-muted small">Cases</div>
                            </div>
                            <div className="col-4 border-end">
                              <div className="fw-bold">{volunteer.joinDate}</div>
                              <div className="text-muted small">Joined</div>
                            </div>
                            <div className="col-4">
                              <div className="fw-bold">{volunteer.lastActive}</div>
                              <div className="text-muted small">Last Active</div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <h6 className="small fw-bold mb-2">Skills</h6>
                          <div className="d-flex flex-wrap gap-2">
                            {volunteer.skills.map((skill, index) => (
                              <span key={index} className="badge bg-light text-dark small">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <button className="btn btn-sm btn-outline-primary">
                            <i className="bi bi-envelope me-1"></i> Message
                          </button>
                          <button className="btn btn-sm btn-outline-secondary">
                            <i className="bi bi-person-lines-fill me-1"></i> Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-footer bg-white border-0 py-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="text-muted small">
                  Showing 1 to 3 of 56 volunteers
                </div>
                <nav aria-label="Page navigation">
                  <ul className="pagination pagination-sm mb-0">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex="-1">Previous</a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Animals Tab Content */}
        <div className={`tab-content-section ${activeTab === "animals" ? "active" : "d-none"}`}>
          <div className="card shadow-sm border-0">
            <div className="card-header bg-white border-0 pt-3 pb-2">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Animal Management</h5>
                <div>
                  <button className="btn btn-sm btn-outline-primary me-2">
                    <i className="bi bi-funnel"></i> Filter
                  </button>
                  <button className="btn btn-sm btn-primary">
                    <i className="bi bi-plus-lg"></i> Add Animal
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="row g-3 p-3">
                {animals.map((animal) => (
                  <div className="col-md-6 col-lg-4" key={animal.id}>
                    <div className="card animal-card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <div className="d-flex align-items-start mb-3">
                          <div className={`animal-type-avatar me-3 ${animal.type.toLowerCase()}`}>
                            <i className={`bi ${animal.type === 'Dog' ? 'bi-bone' : 'bi-balloon-heart'}`}></i>
                          </div>
                          <div>
                            <h5 className="mb-1">{animal.name}</h5>
                            <div className="d-flex align-items-center mb-2">
                              <span className={`badge ${getStatusBadgeClass(animal.status)} rounded-pill me-2`}>
                                {animal.status}
                              </span>
                              <span className="text-muted small">
                                <i className="bi bi-calendar me-1"></i>
                                {animal.intakeDate}
                              </span>
                            </div>
                            <p className="text-muted small mb-2">
                              <i className="bi bi-tag me-1"></i>
                              {animal.breed}
                            </p>
                          </div>
                        </div>
                        <div className="animal-details mb-3">
                          <div className="row">
                            <div className="col-6 mb-2">
                              <div className="text-muted small">Type</div>
                              <div className="fw-bold">{animal.type}</div>
                            </div>
                            <div className="col-6 mb-2">
                              <div className="text-muted small">Age</div>
                              <div className="fw-bold">{animal.age}</div>
                            </div>
                            <div className="col-6 mb-2">
                              <div className="text-muted small">Medical Status</div>
                              <div className="fw-bold">{animal.medicalStatus}</div>
                            </div>
                            <div className="col-6 mb-2">
                              <div className="text-muted small">Location</div>
                              <div className="fw-bold">{animal.location}</div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <button className="btn btn-sm btn-outline-primary">
                            <i className="bi bi-file-earmark-medical me-1"></i> Health
                          </button>
                          <button className="btn btn-sm btn-outline-secondary">
                            <i className="bi bi-pencil-square me-1"></i> Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-footer bg-white border-0 py-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="text-muted small">
                  Showing 1 to 3 of 142 animals
                </div>
                <nav aria-label="Page navigation">
                  <ul className="pagination pagination-sm mb-0">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex="-1">Previous</a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;