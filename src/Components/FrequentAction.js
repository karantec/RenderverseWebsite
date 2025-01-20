import React, { useState } from 'react';

const FrequentAction = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: 'What services does Renderverse offer?', answer: 'We offer a range of services including...' },
    { question: 'How do I get started with a project at Renderverse?', answer: 'To get started, contact us at...' },
    { question: 'What is the typical turnaround time for a project?', answer: 'Turnaround time varies depending on...' },
    { question: 'How much do your services cost?', answer: 'Our pricing is tailored to your project...' },
    { question: 'Do you offer revisions on the work you deliver?', answer: 'Yes, we offer revisions to ensure...' },
    { question: 'What file formats will you deliver?', answer: 'We deliver in formats such as...' },
    { question: 'How do I pay for your services?', answer: 'We accept payments through...' },
    { question: 'Do you offer ongoing support after project completion?', answer: 'Yes, we provide ongoing support...' },
    { question: 'Can Renderverse handle large-scale projects?', answer: 'Absolutely, we specialize in...' },
    { question: 'How do you ensure the quality of your work?', answer: 'We ensure quality through...' },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 font-poppins text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
          Frequently Asked Questions
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-center font-bold text-gray-400 mb-10">
          Have any questions? We've got you covered!
        </p>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-700 rounded-lg overflow-hidden transition-all ${
                activeIndex === index ? 'bg-gray-800' : ''
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left py-4 px-6 flex justify-between items-center text-sm sm:text-base md:text-lg font-medium focus:outline-none"
              >
                <span className="font-poppins">{faq.question}</span>
                <span
                  className={`transition-transform transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 font-poppins text-gray-400 text-sm sm:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentAction;
