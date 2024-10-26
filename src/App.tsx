import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "@/router/routes";

const App = () => {
    return (
        <Router>
            <nav className="flex justify-around p-4 bg-gray-200">
                <Link to="/signup" className="text-blue-500">
                    Register
                </Link>
                <Link to="/signin" className="text-blue-500">
                    Login
                </Link>
                <Link to="/welcome" className="text-blue-500">
                    Welcome
                </Link>
            </nav>
            <AppRoutes /> {/* Use the Routes component here */}
        </Router>
    );
};

export default App;
