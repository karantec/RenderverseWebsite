import React, { useState } from "react";

const FrequentAction = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Renderverse offer?",
      answer:
        "Renderverse offers a wide range of creative services, including video editing, graphic design, 3D modeling, animation, UI/UX design, and web development. We tailor our solutions to meet the unique needs of each client, ensuring high-quality and impactful results.",
    },
    {
      question: "How do I get started with a project at Renderverse?",
      answer:
        "Getting started is easy! Simply contact us through our website’s contact form, email. Provide us with some details about your project, and our team will reach out to discuss your requirements and how we can assist you.",
    },
    {
      question: "What is the typical turnaround time for a project?",
      answer:
        "Turnaround times vary depending on the complexity and scope of the project. Once we understand your specific needs, we will provide an estimated timeline. We are committed to delivering high-quality work within agreed-upon deadlines.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our pricing depends on the nature and complexity of the project. We offer competitive rates and customized quotes based on your specific needs. Contact us for a detailed consultation and pricing information.",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 max-w-8xl">
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
                activeIndex === index ? "bg-gray-800" : ""
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left py-4 px-6 flex justify-between items-center text-sm sm:text-base md:text-lg font-medium focus:outline-none"
              >
                <span className="font-poppins">{faq.question}</span>
                <span
                  className={`transition-transform transform ${
                    activeIndex === index ? "rotate-180" : ""
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
