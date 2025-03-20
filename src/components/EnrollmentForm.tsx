import React, { useState } from 'react';
import { Copy } from 'lucide-react';

interface EnrollmentFormProps {
  onSubmit: (formData: {
    fullName: string;
    email: string;
    transactionId: string;
    binanceId: string;
    referralEmail?: string;
  }) => void;
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    transactionId: '',
    binanceId: '',
    referralEmail: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleCopyBinanceId = () => {
    navigator.clipboard.writeText('186012924');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Enroll as a Market Research Specialist
        </h2>

        <div className="mb-8 space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment Instructions</h3>
            <p className="text-gray-600 mb-4">
              Please send $15 to our Binance account to receive the eBook and join our program.
            </p>
            <div className="flex items-center justify-between bg-white p-3 rounded-md">
              <div>
                <p className="text-sm text-gray-500 mb-1">Our Binance ID:</p>
                <code className="text-blue-600 font-mono">186012924</code>
              </div>
              <button
                onClick={handleCopyBinanceId}
                className="text-gray-500 hover:text-blue-600 transition-colors"
                title="Copy Binance ID"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Gmail Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700">
                Transaction ID
              </label>
              <input
                type="text"
                id="transactionId"
                placeholder="Enter Binance transaction ID"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.transactionId}
                onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
              />
              <p className="mt-1 text-sm text-gray-500">Enter the transaction ID from your payment</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <label htmlFor="binanceId" className="block text-sm font-medium text-gray-700">
                Your Binance ID
              </label>
              <input
                type="text"
                id="binanceId"
                placeholder="Enter your Binance ID"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.binanceId}
                onChange={(e) => setFormData({ ...formData, binanceId: e.target.value })}
              />
              <p className="mt-1 text-sm text-gray-500">Enter your personal Binance ID</p>
            </div>
          </div>

          <div>
            <label htmlFor="referralEmail" className="block text-sm font-medium text-gray-700">
              Referral Email Address (Optional)
            </label>
            <input
              type="email"
              id="referralEmail"
              placeholder="Enter the email of who referred you"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.referralEmail}
              onChange={(e) => setFormData({ ...formData, referralEmail: e.target.value })}
            />
            <p className="mt-1 text-sm text-gray-500">
              <strong className="font-bold">Referrers earn $7 for each successful enrollment</strong>
            </p>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit Enrollment
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;