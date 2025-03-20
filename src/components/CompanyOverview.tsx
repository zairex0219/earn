import React from 'react';
import { LineChart, Users, Trophy } from 'lucide-react';

const CompanyOverview = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Leading Market Research Firm</h2>
          <p className="mt-4 text-lg text-gray-500">
            We specialize in financial markets, trading trends, and investment strategies, providing data-driven insights
            to help traders and investors make informed decisions.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="flex justify-center">
                <LineChart className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Data-Driven Analysis</h3>
              <p className="mt-2 text-gray-500">
                Comprehensive market analysis backed by solid data and research
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Expert Team</h3>
              <p className="mt-2 text-gray-500">
                Join our team of experienced market research specialists
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="flex justify-center">
                <Trophy className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Proven Track Record</h3>
              <p className="mt-2 text-gray-500">
                Consistent success in identifying market opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;