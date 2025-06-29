import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Welcome from "./pages/Welcome/Welcome";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import Entities from "./pages/Entities/Entities";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Welcome />} />
          <Route path="/main" element={<Main />} />
          <Route path="/entities" element={<Entities />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
