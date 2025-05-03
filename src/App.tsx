import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import CreateListing from "./pages/CreateListing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Listing from "./pages/Listing";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="listing" element={<Listing />} />
          <Route path="watchlist" element={<WatchList />} />
          <Route path="create" element={<CreateListing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App