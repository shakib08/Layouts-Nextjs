 "use client"
import React, { useState, useEffect } from 'react';

function Page() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const text = 'your_search_query_here';
  const apiUrl = `https://nominatim.openstreetmap.org/search?q=${text}&format=geojson&addressdetails=1`;

  useEffect(() => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Data fetched successfully, set state
        setData(data);
      })
      .catch(error => {
        // Handle fetch errors
        setError(error);
      });
  }, [apiUrl]); // Only run effect when apiUrl changes

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          {/* Render fetched data here */}
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Page;
