import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { fetchClientCity } from './utilities/utils';

const HomePage = () => (
  <div>
    <h1>You are on the default home page</h1>
  </div>
);

const LP2Page = () => (
  <div>
    <h1>You are on the Bengaluru page</h1>
  </div>
);


const App = () => {
  const [clientCity, setClientCity] = useState(null);

  useEffect(() => {
    async function loadClientCity() {
      const city = await fetchClientCity();
      setClientCity(city);
    }

    loadClientCity();
  }, []);

  if (clientCity === null) {
    return <div>Loading...</div>;
  }

  const redirectToLP2 = clientCity === 'Bengaluru';

  return (
    <Router>
      <Routes>
        <Route path="/" element={redirectToLP2 ? <LP2Page /> : <HomePage />} />
        <Route path="/lp2" element={<LP2Page />} />
      </Routes>
    </Router>
  );
}

export default App;
