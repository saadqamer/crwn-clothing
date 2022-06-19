import HomePage from "./routes/home-page/home-page-component";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./routes/navigation-bar/navigation-bar-component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index={true} element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
