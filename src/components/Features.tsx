import React from 'react';
import { TrendingUp, BookOpen, BrainCircuit, DollarSign } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Join Us?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Financial markets are always evolving! 📈
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We need sharp-minded analysts who can help us stay ahead of market trends.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Research & Track Market Trends</p>
              <p className="mt-2 ml-16 text-base text-gray-500">
                Analyze market movements and identify emerging patterns. Get paid $450/month as a Market Research Specialist.
              </p>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Comprehensive Training</p>
              <p className="mt-2 ml-16 text-base text-gray-500">
                Get access to our detailed eBook ($15) packed with market analysis strategies and trading insights.
              </p>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <BrainCircuit className="h-6 w-6" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Prove Your Expertise</p>
              <p className="mt-2 ml-16 text-base text-gray-500">
                Pass our 100-question MCQ exam to join our team of market research specialists.
              </p>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <DollarSign className="h-6 w-6" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Earn Through Referrals</p>
              <p className="mt-2 ml-16 text-base text-gray-500">
                Earn $7 for each successful referral who joins our program. Build your network while earning extra income.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;