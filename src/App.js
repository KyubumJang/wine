import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import { HomePage, AboutPage } from './pages/';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
