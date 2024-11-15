import React, { Fragment, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast"; // Import react-hot-toast

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    requirement: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.fullName) formErrors.fullName = "Full Name is required";
    if (!formData.email) formErrors.email = "Email Address is required";
    if (!formData.phone) formErrors.phone = "Phone Number is required";
    if (!formData.requirement) formErrors.requirement = "Requirement is required";

    return formErrors;
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // If no errors, show success toast and submit the form
      toast.success("Form submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        requirement: "",
      });
    } else {
      // Show error toast and set form validation errors
      toast.error("Please fill all required fields.");
      setErrors(formErrors);
    }
  };

  return (
    <Fragment>
      <div>
        <h5 className="text-[#999] text-[12px] md:text-[16px] lg:text-[20px] gap-10 ">
          <span className="border-b-2 w-fit border-[#999] ">Just A Small</span>{" "}
          Form, We Will Give Our Big Time
        </h5>
        <form onSubmit={handleContactSubmit}>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="mt-7 text-[10px] md:text-[14px] lg:text-[16px] text-[#000] outline-none border-b-2 w-[100%] border-black"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="mt-7 text-[10px] md:text-[14px] lg:text-[16px] text-[#000] outline-none border-b-2 w-[100%] border-black"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="mt-7 text-[10px] md:text-[14px] lg:text-[16px] text-[#000] outline-none border-b-2 w-[100%] border-black"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}

          <input
            type="text"
            name="requirement"
            value={formData.requirement}
            onChange={handleInputChange}
            placeholder="Enter Your Requirement"
            className="mt-7 text-[10px] md:text-[14px] lg:text-[16px] text-[#000] outline-none border-b-2 w-[100%] border-black"
          />
          {errors.requirement && (
            <p className="text-red-500 text-sm">{errors.requirement}</p>
          )}

          <button
            type="submit"
            className="mt-10 text-[12px] md:text-[16px] lg:text-[20px] text-[#000] font-bold flex items-center"
          >
            Submit <FaArrowRight className="ms-3"></FaArrowRight>
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default ContactForm;
