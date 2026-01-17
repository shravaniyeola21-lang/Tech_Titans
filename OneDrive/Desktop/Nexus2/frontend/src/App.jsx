import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PlanningWizard from './pages/PlanningWizard';
import TravelPlan from './pages/TravelPlan';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plan" element={<PlanningWizard />} />
          <Route path="/travel-plan" element={<TravelPlan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
