async function fetchClientCity() {
    try {
      // Get client IP
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();
  
      // Get city based on IP
      const geoResponse = await fetch(`http://ip-api.com/json/${ipData.ip}`);
      const geoData = await geoResponse.json();
      console.log('Client city:', geoData.city);
      return geoData.city;
    } catch (error) {
      console.error('Error fetching client city:', error.message);
      return null;
    }
  }
  
  export { fetchClientCity };
  