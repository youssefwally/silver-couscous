import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpsPage from "./pages/NewMeetUp";
import FavPage from "./pages/Fav";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
          <Routes>
            <Route path="/" element={<AllMeetUpsPage />} />
            <Route path="/new" element={<NewMeetUpsPage />} />
            <Route path="/fav" element={<FavPage />} />
          </Routes>
    </Layout>
  );
}

export default App;
