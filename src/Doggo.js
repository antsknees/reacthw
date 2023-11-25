import React, { useState, useEffect } from 'react';

const DogImage = () => {
  const [dogImageUrl, setDogImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://random.dog/woof.json');
        const data = await response.json();
        setDogImageUrl(data.url);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dog image:', error);
        setLoading(false);
      }
    };

    fetchDogImage();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Random Dog Image</h1>
      <img src={dogImageUrl} alt="Random Dog" style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default DogImage;