import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const ProvincesList = () => {
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(1);  // You can change the limit value here
  const [recaptchaToken, setRecaptchaToken] = useState(null); // Store reCAPTCHA token

  const CallProvinces = async (limit) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://geonames.farzai.com/api/v1/thailand-address/provinces?limit=${limit}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      console.log('res:', res);

      setProvinces(res.data.data || []);
    } catch (error) {
      console.error('Error fetching provinces:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReCaptchaChange = (value) => {
    console.log("ReCAPTCHA value:", value);
    setRecaptchaToken(value); // Save the token
  };

  useEffect(() => {
    CallProvinces(limit);  // Pass the limit as a parameter
  }, [limit]);  // Re-fetch if limit changes

  return (
    <div>
      <div>
        <label>Limit: </label>
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}  // Update the limit state
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {provinces.map((province) => (
            <li key={province.id}>{province.name}</li>
          ))}
        </ul>
      )}

      <ReCAPTCHA
        sitekey={process.env.REACT_APP_SITE_KEY}
        onChange={handleReCaptchaChange}
      />

      {/* You can further use the recaptchaToken to validate or send to the server */}
    </div>
  );
};

export default ProvincesList;