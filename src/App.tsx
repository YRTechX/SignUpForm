import React from "react";
import { HashRouter as Router } from "react-router-dom";
import AppRoutes from "@/router/routes";

const App = () => {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
};

export default App;
