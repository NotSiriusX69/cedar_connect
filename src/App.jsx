import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";

import "./styles/App.css";
import "./styles/index.css";

import ProtectedRoute from "./components/layout/ProtectedRoute.jsx";
import PublicRoute from "./components/layout/PublicRoute.jsx";

import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import ListingsPage from "./pages/ListingsPage.jsx";
import ListRentalPage from "./pages/ListRentalPage.jsx";
import RentalInfoPage from "./pages/RentalInfoPage.jsx";
import ReserveRentalPage from "./pages/ReserveRentalPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import RentedPage from "./pages/RentedPage.jsx";
import RentalsPage from "./pages/RentalsPage.jsx";
import RentedOfUserPage from "./pages/RentedOfUserPage.jsx";
import AddImagePage from "./pages/AddImagePage.jsx";

function App() {
  return (
    <div className="">
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              path="/listings"
              element={
                <ProtectedRoute>
                  <ListingsPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <AccountPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <SignupPage />
                </PublicRoute>
              }
            ></Route>
            <Route path="/contactus" element={<ContactUsPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/listings/:rental_id" element={<RentalInfoPage />} />
            <Route
              path="/reserve/:rental_id"
              element={
                <ProtectedRoute>
                  <ReserveRentalPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/list-rental"
              element={
                <ProtectedRoute>
                  <ListRentalPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/user-rentals"
              element={
                <ProtectedRoute>
                  <RentalsPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/user-rented"
              element={
                <ProtectedRoute>
                  <RentedPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/user-rented/:rented_id"
              element={
                <ProtectedRoute>
                  <RentedOfUserPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/rental/:rental_id/add-image"
              element={
                <ProtectedRoute>
                  <AddImagePage />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
