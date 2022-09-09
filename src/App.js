import { Route, Routes } from "react-router-dom";

import { publicRoutes } from "./routes/routesList";
import "./App.css";

function App() {
  return (
    <Routes>
      {publicRoutes.map(({ path, component: Component, exact }, idx) => {
        return (
          <Route key={idx} path={path} exact={exact} element={<Component />} />
        );
      })}
    </Routes>
  );
}

export default App;
