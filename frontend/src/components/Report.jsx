import React, { useState, useEffect } from 'react';

// CSS styles are embedded here to resolve the import error.
const Styles = () => (
  <style>
    {`
      /* General Styling for the Report Page Container */
      .report-page-container {
          display: flex;
          justify-content: center;
          align-items: center; /* Changed from flex-start to center */
          min-height: 100vh;
          padding: 60px 20px;
          background: linear-gradient(135deg, #e0f7fa 0%, #f0f4c3 100%);
          font-family: 'Inter', sans-serif;
      }

      /* The main form card */
      .report-form-card {
          background-color: #ffffff;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          width: 100%;
          max-width: 650px;
          transition: all 0.3s ease-in-out;
      }

      /* Form Header styles */
      .form-header {
          text-align: center;
          margin-bottom: 35px;
      }

      .form-header h1 {
          font-size: 2.25rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 10px;
      }

      .form-header p {
          font-size: 1.1rem;
          color: #576a7e;
      }

      /* General Form Group styling */
      .report-form .form-group {
          margin-bottom: 25px;
      }

      .report-form .form-label {
          display: block;
          font-weight: 600;
          color: #34495e;
          margin-bottom: 8px;
          font-size: 1rem;
      }

      /* Input and Textarea base styles */
      .form-input,
      .form-textarea {
          box-sizing: border-box; /* Ensures padding doesn't affect final width */
          width: 100%;
          padding: 12px 15px;
          border-radius: 8px;
          border: 1px solid #dce4ec;
          background-color: #f9fafb;
          font-size: 1rem;
          color: #2c3e50;
          transition: border-color 0.2s, box-shadow 0.2s;
      }

      .form-input:focus,
      .form-textarea:focus {
          outline: none;
          border-color: #ff6b81; /* Accent pink from screenshot */
          box-shadow: 0 0 0 3px rgba(255, 107, 129, 0.2);
      }

      /* Location input with GeoTag button */
      .location-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
      }

      .location-input-wrapper .form-input {
          padding-right: 50px;
      }

      .geotag-btn {
          position: absolute;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
          background-color: #eef2f7;
          border: 1px solid #dce4ec;
          border-radius: 6px;
          height: calc(100% - 10px);
          width: 40px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #576a7e;
          transition: background-color 0.2s;
      }

      .geotag-btn:hover {
          background-color: #e1e8f0;
      }

      /* Image Upload Box styles */
      .image-upload-box {
          width: 100%;
          border: 2px dashed #dce4ec;
          border-radius: 10px;
          padding: 10px;
          background-color: #f9fafb;
          transition: border-color 0.3s;
      }
      .image-upload-box:hover {
          border-color: #ff8a9b;
      }

      .image-upload-label {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          min-height: 180px;
      }

      .upload-placeholder {
          text-align: center;
          color: #a7aabd;
      }
      .upload-placeholder span {
          display: block;
          margin-top: 10px;
          font-weight: 500;
      }

      .image-preview {
          width: 100%;
          height: auto;
          max-height: 300px;
          object-fit: cover;
          border-radius: 8px;
      }

      /* Submit Button styling */
      .submit-btn {
          width: 100%;
          padding: 15px;
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(45deg, #ff6b81, #ff8a9b);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 15px rgba(255, 107, 129, 0.4);
      }

      .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 129, 0.5);
      }

      .submit-btn:disabled {
          background: #cccccc;
          box-shadow: none;
          cursor: not-allowed;
      }

      /* Success Message styles */
      .success-message {
          text-align: center;
          padding: 40px 20px;
      }

      .success-icon {
          font-size: 4rem;
          width: 80px;
          height: 80px;
          line-height: 80px;
          border-radius: 50%;
          background-color: #2ecc71;
          color: white;
          margin: 0 auto 20px;
      }

      .success-message h2 {
          font-size: 2rem;
          color: #2c3e50;
          margin-bottom: 10px;
      }

      .success-message p {
          font-size: 1.1rem;
          color: #576a7e;
          margin-bottom: 15px;
      }

      .case-id {
          background-color: #eef2f7;
          padding: 10px 15px;
          border-radius: 8px;
          display: inline-block;
          font-size: 1.1rem;
      }
      .case-id strong {
          color: #ff6b81;
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
          .report-page-container {
              padding: 40px 15px;
          }
          .report-form-card {
              padding: 30px;
          }
          .form-header h1 {
              font-size: 1.8rem;
          }
          .form-header p {
              font-size: 1rem;
          }
      }
    `}
  </style>
);

// Simple Map Pin SVG Icon
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

// Simple Upload Cloud SVG Icon
const UploadCloudIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#a7aabd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-upload-cloud">
        <path d="M18 10h-1.26A8 8 0 1 0 4 16.25"></path>
        <path d="M8 17a4.5 4.5 0 0 1-4.5-4.5A4.5 4.5 0 0 1 8 8a4.5 4.5 0 0 1 4.5 4.5A4.5 4.5 0 0 1 8 17zM16 16.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
        <path d="M12 12.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"></path>
        <path d="M16 8.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
    </svg>
);


const Report = () => {
  const [animalType, setAnimalType] = useState('');
  const [condition, setCondition] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [caseId, setCaseId] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);


  useEffect(() => {
    // Clean up the object URL to avoid memory leaks
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImage(null);
      setImagePreview('');
      // Optional: show an error message to the user
    }
  };

  const generateCaseId = () => {
    const timestamp = Date.now();
    const randomPart = Math.random().toString(36).substring(2, 9).toUpperCase();
    return `CASE-${timestamp}-${randomPart}`;
  };

  const handleGeotag = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // For demonstration, we'll just use the coordinates.
          // In a real app, you might use a reverse geocoding service
          // to convert these coordinates into a human-readable address.
          setLocation(`Lat: ${latitude.toFixed(5)}, Lon: ${longitude.toFixed(5)}`);
        },
        (error) => {
          console.error("Geolocation error: ", error);
          // Replaced alert with a console log for a better user experience in some environments
          console.log("Could not retrieve your location. Please ensure you've enabled location services for your browser and try again. You can also enter the address manually.");
        }
      );
    } else {
      // Replaced alert with a console log
      console.log("Geolocation is not supported by your browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!animalType || !location || !image) {
        // Replaced alert with a console log
        console.log('Please fill in all required fields: Animal Type, Location, and Image.');
        return;
    }
    
    setIsSubmitting(true);
    const newCaseId = generateCaseId();
    setCaseId(newCaseId);

    // Simulate an API call
    console.log('Submitting Report:');
    console.log({
      caseId: newCaseId,
      animalType,
      condition,
      location,
      imageName: image ? image.name : 'No image',
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      // Reset form after a few seconds
      setTimeout(() => {
        setShowSuccess(false);
        setAnimalType('');
        setCondition('');
        setLocation('');
        setImage(null);
        setImagePreview('');
        setCaseId('');
      }, 5000);
    }, 2000);
  };

  return (
    <>
      <Styles />
      <div className="report-page-container">
        <div className="report-form-card">
          {!showSuccess ? (
            <>
              <div className="form-header">
                <h1>Report an Animal in Need</h1>
                <p>Your report can save a life. Please provide as much detail as possible.</p>
              </div>
              <form onSubmit={handleSubmit} className="report-form" noValidate>
                
                {/* Image Upload Section */}
                <div className="form-group">
                  <label htmlFor="image-upload" className="form-label">Upload Image*</label>
                  <div className="image-upload-box">
                    <input 
                      type="file" 
                      id="image-upload" 
                      accept="image/*"
                      onChange={handleImageChange}
                      style={{ display: 'none' }} 
                    />
                    <label htmlFor="image-upload" className="image-upload-label">
                      {imagePreview ? (
                        <img src={imagePreview} alt="Animal preview" className="image-preview" />
                      ) : (
                        <div className="upload-placeholder">
                          <UploadCloudIcon />
                          <span>Click or drag to upload</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Location Section */}
                <div className="form-group">
                  <label htmlFor="location" className="form-label">Location*</label>
                  <div className="location-input-wrapper">
                    <input
                      type="text"
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g., Near City Park, Main Street"
                      required
                      className="form-input"
                    />
                    <button type="button" className="geotag-btn" onClick={handleGeotag} title="Use my current location">
                      <MapPinIcon />
                    </button>
                  </div>
                </div>

                {/* Animal Type Section */}
                <div className="form-group">
                  <label htmlFor="animalType" className="form-label">Animal Type*</label>
                  <input
                    type="text"
                    id="animalType"
                    value={animalType}
                    onChange={(e) => setAnimalType(e.target.value)}
                    placeholder="e.g., Dog, Cat, Bird"
                    required
                    className="form-input"
                  />
                </div>

                {/* Condition Section */}
                <div className="form-group">
                  <label htmlFor="condition" className="form-label">Describe Condition (Optional)</label>
                  <textarea
                    id="condition"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    placeholder="e.g., Injured leg, seems lost, very thin"
                    rows="4"
                    className="form-textarea"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Report Emergency'}
                </button>
              </form>
            </>
          ) : (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h2>Thank You!</h2>
              <p>Your report has been submitted successfully.</p>
              <p className="case-id">Your Case ID is: <strong>{caseId}</strong></p>
              <p>Our team will review the information and take action shortly.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Report;
