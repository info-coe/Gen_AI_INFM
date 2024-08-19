import React, { useEffect, useState, useRef } from "react";
import AI1 from "./Images/AI1.jpg";
import AI2 from "./Images/AI2.jpg";
import AI3 from "./Images/AI3.jpg";
import AIBanner from "./Images/AIBanner.jpg";
import contactImage from "./Images/contactus2.jpeg";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function InfoAIAccelerator() {
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

  const infoAIAcceleratorFeatures = [
    {
      title: "Unified LLM Training and Testing",
      description:
        "Conduct all your LLM training, building, and testing in one integrated platform, simplifying your workflow with an easy-to-use UI.",
    },
    {
      title: "Optimized GPU Utilization",
      description:
        "Reduce GPU memory usage by 40%, allowing for more efficient training and resource management.",
    },
    {
      title: "Enhanced Processing Speed",
      description:
        "Benefit from 2x faster model training and testing, thanks to our advanced multithreading capabilities.",
    },
    {
      title: "Interactive Testing with Custom Prompts",
      description:
        "Test your models interactively using custom prompts, refining them quickly through our intuitive user interface.",
    },
    {
      title: "Flexible Model Export Options",
      description:
        "Export your trained models to various platforms such as S3, Azure Data Blob, Hugging Face, or Ollama, depending on your configuration.",
    },
    {
      title: "Seamless Deployment",
      description:
        "Deploy Info AI Accelerator anywhere, whether in the cloud or on-premises, with our simple automation scripts that require just a single file to set up.",
    },
  ];

  const infoAIAcceleratorServices = [
    {
      image: AI1,
      title: "Custom LLM Training",
      description:
        "Utilize our platform to train LLMs with your specific data, optimizing them for your unique business needs.",
    },
    {
      image: AI3,
      title: "Model Fine-Tuning and Testing",
      description:
        "Leverage our tools to fine-tune and test your models with reduced resource usage and faster processing times.",
    },
    {
      image: AI2,
      title: "Deployment and Integration Support",
      description:
        "Get expert assistance in deploying your trained models, whether to cloud platforms like AWS and Azure or other specialized environments.",
    },
  ];

  return (
    <>
    <Navbar/>
      <div className="awsmain">
        <img
          src="https://www.infomericainc.com/Content/images/services-banner.jpg"
          alt="Aws Services"
          width="100%"
        />
      </div>
      <div className="">
        <div className="mt-5 mb-3 pe-5 ps-5">
          <h1 className="text-center">Info AI Accelerator</h1>
          <div className="d-md-flex gap-4 align-items-center">
            <div className="text-center col-md-3" style={{}}>
              <img src={AIBanner} alt="Services" width="100%" />
            </div>
            <div className="col-md-9">
              <p>
                Info AI Accelerator is a revolutionary platform that simplifies
                the training, building, and testing of Large Language Models
                (LLMs). Traditional LLM development is often hampered by high
                resource demands and time-consuming processes. Info AI
                Accelerator addresses these challenges by offering a
                user-friendly interface that significantly reduces GPU usage and
                accelerates model training with advanced multithreading
                technology. This tool allows you to focus on innovation and
                fine-tuning while we take care of the technical complexities.
              </p>
              <p>
                Info AI Accelerator is ideal for data scientists, AI
                researchers, and developers who need a robust, efficient
                solution to streamline their LLM workflows.
              </p>
            </div>
          </div>
        </div>

        <div className="container pt-4">
          <h2 className="section-header">Features</h2>
          <div className="grid-container">
            {infoAIAcceleratorFeatures.map((item, index) => (
              <div className=" m-2 grid-item" key={index}>
                <div className="features-box">
                  <div>
                    <h4 className="features-title">{item.title}</h4>
                    <p className="features-description">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mb-4">
          <h2 className="section-header">Our Services</h2>
          <div className="grid-container">
            {infoAIAcceleratorServices.map((item, index) => (
              <div
                key={index}
                className="grid-item shadow m-2 p-3"
                style={{ cursor: "pointer" }}
                onClick={scrollToContact}
              >
                <div className="" style={{ height: "54%" }}>
                  <img src={item.image} alt="Services" width="70%" />
                </div>
                <h4 style={{ height: "17%" }}>{item.title}</h4>
                <p>{item.description}</p>
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
      <Footer/>
    </>
  );
}
