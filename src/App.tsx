import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import EnrollmentForm from './components/EnrollmentForm';
import Hero from './components/Hero';
import Features from './components/Features';
import CompanyOverview from './components/CompanyOverview';
import CompanyDetails from './components/CompanyDetails';
import { supabase } from './lib/supabase';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleEnrollClick = () => {
    setShowForm(true);
    const formElement = document.getElementById('enrollment-section');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (formData: {
    fullName: string;
    email: string;
    transactionId: string;
    binanceId: string;
    referralEmail?: string;
  }) => {
    try {
      const { error } = await supabase.from('enrollments').insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          transaction_id: formData.transactionId,
          binance_id: formData.binanceId,
          referral_email: formData.referralEmail || null,
        },
      ]);

      if (error) throw error;
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting enrollment:', error);
      alert('Failed to submit enrollment. Please try again.');
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex items-center text-xl font-bold text-blue-600">
                  Zairex
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero onEnrollClick={handleEnrollClick} />
                <Features />
                <CompanyOverview />
                <section id="enrollment-section" className="py-16 px-4 md:px-8">
                  {!submitted ? (
                    <EnrollmentForm onSubmit={handleSubmit} />
                  ) : (
                    <div className="max-w-2xl mx-auto text-center bg-white p-8 rounded-2xl shadow-lg">
                      <div className="text-green-500 mb-4">
                        <ChevronRight className="w-16 h-16 mx-auto" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Thank you for enrolling!
                      </h2>
                      <p className="text-gray-600">
                        Please check your email for further instructions. The exam will be held on
                        the 25th of every month.
                      </p>
                    </div>
                  )}
                </section>
              </>
            }
          />
          <Route path="/about" element={<CompanyDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;