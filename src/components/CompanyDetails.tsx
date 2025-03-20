import React from 'react';
import { Building2, Mail, MapPin } from 'lucide-react';

const CompanyDetails = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Zairex</h2>
          <p className="mt-4 text-xl text-gray-500">
            Leading the way in financial market research and analysis
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                At Zairex, we specialize in providing cutting-edge market research and analysis 
                for the global financial markets. Our team of experts works tirelessly to identify 
                emerging trends, analyze market patterns, and develop winning investment strategies 
                for our clients.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Do</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Comprehensive market trend analysis</li>
                <li>• Investment opportunity identification</li>
                <li>• Risk assessment and management</li>
                <li>• Trading strategy development</li>
                <li>• Real-time market monitoring</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Building2 className="h-6 w-6 text-blue-500 mr-3" />
                <span className="text-gray-700">Zairex GmbH</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-500 mr-3" />
                <span className="text-gray-700">Königsallee 92, 40212 Düsseldorf, Germany</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-500 mr-3" />
                <a href="mailto:zairex0219@gmail.com" className="text-blue-600 hover:text-blue-800">
                  zairex0219@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;