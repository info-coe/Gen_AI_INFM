import React, { useState, useEffect, useRef } from "react";
import scan1 from "./Images/scan1.jpg";
import scan2 from "./Images/scan2.jpg";
import scan3 from "./Images/scan3.jpg";
import info from "./Images/info-scan.jpg";
import contactImage from "./Images/contactus2.jpeg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RegisterModal from "./RegisterModal";
import { Link } from "react-router-dom";

export default function InfoScan() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
    captchaInput: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [captcha, setCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  useEffect(() => {
    if (localStorage.getItem("firstLoadDone") === null) {
      localStorage.setItem("firstLoadDone", 1);
      generateCaptcha();
    } else {
      generateCaptcha();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captchaInput !== captcha) {
      setCaptchaError("Invalid captcha");
    } else {
      setCaptchaError("");
      window.location.href = `mailto:info@infomericainc.com?subject=Contact&body=${encodeURIComponent(`
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Organization: ${formData.organization}
            Message: ${formData.message}
          `)}`;
      setFormData(initialFormData); // Clear the form fields
    }
  };

  const generateCaptcha = () => {
    const captchaElement = document.getElementById("image");
    let uniquechar = "";
    const randomchar =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 1; i < 7; i++) {
      uniquechar += randomchar.charAt(
        Math.floor(Math.random() * randomchar.length)
      );
    }
    captchaElement.innerHTML = uniquechar;
    setCaptcha(uniquechar);
  };

  const [showModal, setShowModal] = useState(false);

  // Function to handle the opening of the modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Function to handle the closing of the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const infoScanFeatures = [
    {
      title: "AI-Driven Domain Security Assessments",
      content:
        "Automatically detect and receive expert recommendations on potential vulnerabilities, ensuring your domain is protected against cyber threats.",
    },
    {
      title: "AI-Based SEO Insights",
      content:
        "Gain expert recommendations on improving your website’s speed and search engine visibility through advanced AI analysis.",
    },
    {
      title: "Custom LLM and Plugin Integration",
      content:
        "Enhance your assessments by integrating custom Large Language Models (LLMs) and plugins tailored to your needs.",
    },
    {
      title: "Comprehensive PDF Reporting",
      content:
        "Generate and download in-depth PDF reports that provide actionable insights into your domain's security status and SEO performance.",
    },
    {
      title: "Automated Email Notifications",
      content:
        "Stay informed with real-time email alerts that keep you updated on any changes in your domain’s security or SEO scores.",
    },
    {
      title: "Seamless Deployment",
      content:
        "Deploy Info Scan anywhere—whether on-premises or in the cloud—with ease, thanks to its Dockerized architecture.",
    },
  ];

  const infoScanServices = [
    {
      image: scan1,
      title: "Free Domain Security Assessment",
      content:
        "Register with your business email, role, and domain details to receive a complimentary security assessment report.",
    },
    {
      image: scan2,
      title: "SEO Performance Analysis",
      content:
        "Improve your website’s SEO performance with our in-depth analysis, designed to help you achieve better search engine rankings.",
    },
    {
      image: scan3,
      title: "Consultation and Issue Resolution",
      content:
        "Once you receive your assessment report, our experts will guide you through fixing any identified issues, offering commercial solutions tailored to your specific needs.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="awsmain">
        <img
          src="https://www.infomericainc.com/Content/images/services-banner.jpg"
          alt="Aws Services"
          width="100%"
        />
      </div>
      <div className="">
        <div className=" p-3 mt-3 mb-3">
          <h1 className="text-center">Info Scan</h1>
          <div>
            <div className="row align-items-center">
              <div className="col-md-4 text-center">
                <img
                  src={info}
                  alt="Info Scan"
                  width="80%"
                  style={{ filter: "revert(100%)" }}
                />
              </div>
              <div className="col-md-8 ">
                <p>
                  Info Scan is an AI-based, all-in-one web assessment solution
                  meticulously engineered to safeguard your online presence.
                  This advanced tool scans your domain for vulnerabilities,
                  offering predictive insights to help you secure potential
                  attack surfaces before they are exploited. In addition to its
                  robust security features, Info Scan also provides valuable SEO
                  analysis, enabling you to optimize your website’s performance
                  and improve search engine rankings.
                </p>
                <p>
                  Info Scan is designed to be the cornerstone of your digital
                  security and performance strategy. By automating critical
                  assessments, it frees you to focus on what matters
                  most—growing your business and delivering value to your
                  customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container  pt-4">
          <h2 className="section-header">Features</h2>

          <div className="grid-container">
            {infoScanFeatures.map((item, index) => (
              <div className=" m-2 grid-item" key={index}>
                <div className="features-box">
                  <div>
                    <h4 className="features-title">{item.title}</h4>
                    <p className="features-description">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-4 mb-4">
          <h2 className="section-header">Our Services</h2>
          <div className="grid-container">
            {infoScanServices.map((item, index) => (
              <div
                key={index}
                className="grid-item shadow m-2 p-3 zoomAnimation"
                style={{ cursor: "pointer" }}
                onClick={handleOpenModal}
              >
                <Link to="#" className="text-decoration-none text-dark">
                <div className="" style={{ height: "54%" }}>
                  <img src={item.image} alt="Services" width="70%" />
                </div>
                <h4 style={{ height: "17%" }}>{item.title}</h4>
                <p>{item.content}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="contactusdiv mt-3" ref={contactRef}>
        <h1 className="text-center">Contact Us</h1>
        <p className="text-center mt-3">
          Please take a moment to get in touch, we will get back to you shortly.
        </p>
        <div className="d-lg-flex">
          <div className="col-lg-6 contactdiv">
            <img
              src={contactImage}
              alt="contact"
              width="100%"
              height="100%"
              style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            ></img>
          </div>
          <div className="d-flex flex-column gap-2 col-lg-6 p-2 ps-md-5 pe-md-5 pt-md-4 pb-md-4 bg-light contactdiv">
            <form onSubmit={handleSubmit}>
              <div className="m-1">
                <label>
                  <b>Your Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="m-1">
                <label>
                  <b>Email Address</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="m-1">
                <label>
                  <b>Phone Number</b>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  minLength={10}
                  maxLength={10}
                  required
                />
              </div>
              <div className="m-1">
                <label>
                  <b>Organization</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="m-1">
                <label>
                  <b>Message</b>
                </label>
                <textarea
                  rows="2"
                  cols="50"
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="d-flex justify-content-center mt-2 mb-2">
                <div id="user-input" className="d-flex m-2 gap-2">
                  <input
                    type="text"
                    className="mr-2 form-control"
                    id="submit"
                    name="captchaInput"
                    placeholder="Enter Captcha"
                    value={formData.captchaInput}
                    onChange={handleChange}
                    required
                  />
                  <div className="mr-2 mt-1" onClick={generateCaptcha}>
                    <i className="fas fa-sync"></i>
                  </div>
                  <div
                    id="image"
                    className="bg-secondary text-decoration-line-through fst-italic p-1 rounded fs-5 no-select"
                    selectable="False"
                  ></div>
                </div>
              </div>
              {captchaError && (
                <p className="text-danger text-center">{captchaError}</p>
              )}
              <button
                type="submit"
                className="btn fs-6 w-100 text-white"
                style={{ backgroundColor: "rgb(14, 46, 78)" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {showModal && (
        <RegisterModal showmodal={showModal} onClose={handleCloseModal} />
      )}
      <Footer />
    </>
  );
}
