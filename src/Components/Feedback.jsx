import React, { useState } from 'react';

function Feedback() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle change
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      alert('Please fill in both name and message fields.');
      return;
    }
    
    // Update the submitted feedback state
    setIsSubmitted(true);
    // Clear the form fields
    setName('');
    setMessage('');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px',backgroundColor: 'Gray', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>

      {/* Display submitted feedback */}
      {isSubmitted && (
        <div style={{ marginTop: '20px' }}>
          <h3>Submitted Feedback</h3>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Message:</strong> {message}
          </p>
        </div>
      )}
    </div>
  );
}

export default Feedback;