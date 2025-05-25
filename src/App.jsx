import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FarmingCalculator from "./pages/farmingCalculator";
import BaseLayout from "./components/layout";
import {
  ROUTES_PATH_ROOT,
  ROUTES_PATH_FARMING_CALCULATOR
} from "./constants/routes";

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path={ROUTES_PATH_ROOT} element={<>홈이 필요한가,,?</>} />
          <Route
            path={ROUTES_PATH_FARMING_CALCULATOR}
            element={<FarmingCalculator />}
          />
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;
