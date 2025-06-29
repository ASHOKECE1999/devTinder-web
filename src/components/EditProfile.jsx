import axios, { formToJSON } from "axios";
import React, { useState } from "react";
import { BASE_FETCH_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

export default function ProfileEditForm(props) {
  const { showToastCall } = props;
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    about: "",
    profileUrl:
      "https://res.cloudinary.com/dhowpxwxx/image/upload/v1751107747/ASHOK/WhatsApp_Image_2025-05-14_at_10.04.36_63e64c07_e7gyqf.jpg",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    try {
      const { firstName, lastName, age, about, profileUrl } = formData;
      const res = await axios.patch(
        BASE_FETCH_URL + "/profile/edit",
        { firstName, lastName, age, about, profileUrl },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      dispatch(addUser(res.data.data));
      showToastCall(true);
      const timer = setTimeout(() => {
        showToastCall(false);
      }, 9000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 w-2/3">
      <form
        onSubmit={handleSubmit}
        className="card card-dash bg-base-100 w-full max-w-md p-3 shadow-xl"
      >
        <div className="card-body w-full">
          <h2 className="card-title text-center">Profile Edit Form</h2>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">First Name</legend>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="First Name"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Last Name</legend>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Last Name"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">About</legend>
            <input
              type="text"
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="About"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Profile URL</legend>
            <input
              type="text"
              name="profileUrl"
              value={formData.profileUrl}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Profile URL"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Age</legend>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Age"
            />
          </fieldset>

          <div className="card-actions justify-center mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
