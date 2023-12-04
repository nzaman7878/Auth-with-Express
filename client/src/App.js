// Importing styles and necessary components from external files and libraries
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Importing individual components for different routes
import Home from './components/Home.js';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import PageNotFound from './components/PageNotFound';

// Main App component
function App() {
  return (
    // Container div with styling using Tailwind CSS classes
    <div className="App  h-[100vh]  flex justify-center items-center">

      {/* React Router configuration for handling different routes */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />

        {/* Route for the sign-in page */}
        <Route path="/signin" element={<SignIn />} />

        {/* Route for the sign-up page */}
        <Route path="/signup" element={<SignUp />} />

        {/* Route for the forgot password page */}
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Route for resetting password with a token */}
        <Route
          path="/reset-password/:resetPasswordToken"
          element={<ResetPassword />}
        />

        {/* Catch-all route for any other paths not matched above */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
