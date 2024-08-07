import React from "react";
import featureImage1 from "./Images/featuresImage1.jpg";
import featureImage2 from "./Images/featuresImage2.jpg";
import featureImage3 from "./Images/featuresImage3.jpg";
import featureImage4 from "./Images/featuresImage4.jpg";
import featureImage5 from "./Images/featuresImage5.png";
import Contactus from "./Contactus";

export default function GENAI() {
  const featuresData = [
    {
      heading: "Advanced LLM Configuration",
      content:
        "Leverage the power of Large Language Models with Infomerica’s tailored AI solutions. We develop, configure, and train advanced ML models to meet your requirements. Each model undergoes rigorous validation using robust data sets and comprehensive security audits to ensure industry-standard adherence.",
    },
    {
      heading: "Personalized Chatbot AI Assistants",
      content:
        "Enhance customer interactions with our intelligent chatbots designed for sales, marketing, and support. Whether integrated into your applications or deployed as standalone solutions, our chatbots offer personalized, intuitive user experiences that boost engagement and satisfaction.",
    },
    {
      heading: "Comprehensive Knowledge Base Creation",
      content:
        "Transform your unstructured organizational data into valuable assets for your AI models. Our solutions convert PDFs, internal websites, and images into embeddings, creating a long-term memory for your AI system that enhances its efficiency and performance.",
    },
    {
      heading: "Expert Prompt Engineering",
      content:
        "Our specialized teams create and optimize prompts to ensure your generative AI models deliver high-quality, relevant, and unbiased responses. With Infomerica, experience superior model accuracy and performance tailored to your business needs.",
    },
  ];

  const servicesData = [
    {
      heading: "Generative AI Consulting",
      content:
        "Infomerica provides end-to-end AI consulting services to help you explore AI integration opportunities. From initial consultation to seamless implementation, we guide you through every step, ensuring your AI solutions are aligned with your business objectives.",
    },
    {
      heading: "Large Language Model (LLM) Configuration",
      content:
        "We offer tailored solutions for developing, configuring, and training large language models. Our services include robust data validation, security audits, and model testing to ensure your AI systems are reliable and secure.",
    },
    {
      heading: "Knowledge Base Creation",
      content:
        "Our AI solutions convert unstructured data into useful embeddings, enhancing the knowledge base of your AI models. This service ensures your AI systems are well-informed, efficient, and capable of making better decisions.",
    },
  ];

  return (
    <div>
      <div className="awsmain">
        <img
          src="https://www.infomericainc.com/Content/images/services-banner.jpg"
          alt="Aws Services"
          width="100%"
        />
      </div>
      <div className="container">
        <h2 className="text-center mt-4 mb-4">
          Elevate Your Business with Infomerica's Generative AI Services
        </h2>
        <p>
          At Infomerica, we harness the transformative power of Generative AI to
          drive innovation and growth for your business. Our expert consulting
          services identify opportunities for AI integration, build custom
          solutions tailored to your needs, and optimize your existing
          systems—partner with us to unlock the potential of AI and stay ahead
          in an ever-evolving technological landscape.
        </p>
        <div className="mt-4">
          <h3>Our Services</h3>
          <section className="ServicesContainer">
            {servicesData.map((item, index) => (
                <div className="card" key={index}>
                  <div className="content">
                    <h3>{item.heading}</h3>
                    <p>{item.content}</p>
                  </div>
                </div>
            ))}
          </section>
        </div>
        <div className="mt-5 shadow p-4 rounded d-md-flex">
          <div className="col-md-5">
            <img src={featureImage5} alt="whychooseus" width="90%"></img>
          </div>
          <div className="col-md-7 d-md-flex justify-content-center align-items-center">
            <div>
            <h2>Why Choose Infomerica as Your AI Solution Partner?</h2>
            <p>
              Infomerica is your ideal AI solution partner, offering expert
              professionals with deep expertise in machine learning, natural
              language processing, and computer vision. We prioritize security,
              follow industry-leading practices, and have a proven track record
              of successful AI implementations across various domains. Our
              end-to-end development services ensure a seamless experience from
              consultation to integration, and we adhere to ethical AI
              principles to respect user privacy, promote fairness, and prevent
              biases.
            </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3>Features</h3>
          <div className="d-md-flex">
            {featuresData.map((item, index) => (
              <div key={index} className="border p-3 m-2">
                <h5>{item.heading}</h5>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contactus/>
    </div>
  );
}
