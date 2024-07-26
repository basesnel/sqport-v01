import Welcome from "./pages/Welcome/Welcome";
import Main from "./pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Welcome />} />
          <Route path="/main" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      {/* <Header />
      <div className="container">
        <Main />
      </div> */}
    </>
  );
};

export default App;
