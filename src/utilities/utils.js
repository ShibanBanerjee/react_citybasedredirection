async function fetchClientCity(apiKey) {
    try {
      // Get client IP
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();
  
      // Get city based on IP using ipgeolocation.io API over HTTPS
      const geoResponse = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ipData.ip}`);
      const geoData = await geoResponse.json();
        
      console.log('Client city:', geoData.city);
      return geoData.city;
    } catch (error) {
      console.error('Error fetching client city:', error.message);
      return null;
    }
  }
  
  export { fetchClientCity };