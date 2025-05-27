import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ROUTES_PATH_ROOT,
  ROUTES_PATH_FARMING_CALCULATOR,
  ROUTES_PATH_GEAR_RECOMMENDATION
} from "./constants/routes";
import BaseLayout from "./components/layout";
import Home from "./pages/home";
import FarmingCalculator from "./pages/farmingCalculator";
import GearRecommendation from "./pages/gearRecommendation";

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path={ROUTES_PATH_ROOT} element={<Home />} />
          <Route
            path={ROUTES_PATH_FARMING_CALCULATOR}
            element={<FarmingCalculator />}
          />
          <Route
            path={ROUTES_PATH_GEAR_RECOMMENDATION}
            element={<GearRecommendation />}
          />
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;
