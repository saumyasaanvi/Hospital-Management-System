import React from 'react';
import PatientManagementModule from './PatientManagementModule';
import ClinicalModule from './ClinicalModule';
import Home from './Home';
import NavBar1 from './NavBar1';
import BillingAndFinancialModule from './BillingAndFinancialModule';
import FeedbackForm from './FeedbackForm';
import Appointment from './Appointment';
import Inventory from './Inventory';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <div>
        <NavBar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PatientManagementModule" element={<PatientManagementModule />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/ClinicalModule" element={<ClinicalModule />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/BillingAndFinancialModule" element={<BillingAndFinancialModule />} />
          <Route path="/FeedbackForm" element={<FeedbackForm />} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;
