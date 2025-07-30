import React from 'react';

const WhyWereFounded = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Why We Were Founded
        </h2>

        <div className="prose prose-lg mx-auto">
          <p className="text-gray-600 mb-8">
            ApexNova was born out of frustration with how companies adopt technology.
            We watched brilliant teams fail to get ROI from powerful tools because they
            lacked the systems, structure, and training to make those tools stick.
          </p>

          <p className="text-gray-600 mb-12">
            AI is the greatest transformation opportunity of our time — but only if your
            people can use it confidently and consistently. That's why we exist: to help
            companies turn digital chaos into competitive clarity through enablement, not hype.
          </p>

          <div className="bg-gray-50 p-8 rounded-xl">
            <p className="text-xl text-gray-700 mb-4">
              Our mission is simple:
            </p>
            <p className="text-2xl font-bold text-blue-600">
              Turn your investment into action.
              <br />
              Turn your tools into transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWereFounded;