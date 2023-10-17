import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Details = () => {
  const [firstname, setfirstname] = useState('');
  const [middlename, setmiddlename] = useState('');
  const [lastname, setlastname] = useState('');
  const [sn1, setsn1] = useState('');
  const [sn2, setsn2] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [pin, setpin] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(''); // State for selected country

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="auth-form-container">
      <h2>Personal Details</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input value={firstname} onChange={(e) => setfirstname(e.target.value)} type="text" placeholder="First Name" id="firstname" name="firstname" />

        <label htmlFor="middlename">Middle Name</label>
        <input value={middlename} onChange={(e) => setmiddlename(e.target.value)} type="text" placeholder="Middle Name" id="middlename" name="middlename" />

        <label htmlFor="lastname">Last Name</label>
        <input value={lastname} onChange={(e) => setlastname(e.target.value)} type="text" placeholder="Last Name" id="lastname" name="lastname" />

        <label htmlFor="sn1">Street Name 1</label>
        <input value={sn1} onChange={(e) => setsn1(e.target.value)} type="text" placeholder="Street Name 1" id="sn1" name="sn1" />

        <label htmlFor="sn2">Street Name 2</label>
        <input value={sn2} onChange={(e) => setsn2(e.target.value)} type="text" placeholder="Street Name 2" id="sn2" name="sn2" />

        <label htmlFor="city">City</label>
        <input value={city} onChange={(e) => setcity(e.target.value)} type="text" placeholder="City" id="city" name="city" />

        <label htmlFor="state">State</label>
        <input value={state} onChange={(e) => setstate(e.target.value)} type="text" placeholder="State" id="state" name="state" />

        <label htmlFor="pin">Pin Code</label>
        <input value={pin} onChange={(e) => setpin(e.target.value)} type="text" placeholder="Pin Code" id="pin" name="pin" />

        <label htmlFor="email">Email Id</label>
        <input value={email} onChange={(e) => setemail(e.target.value)} type="text" placeholder="xyz@...com" id="email" name="email" />

        <label htmlFor="phone">Phone Number</label>
        <input value={phone} onChange={(e) => setphone(e.target.value)} type="text" placeholder="Phone Number" id="phone" name="phone" />

        <label htmlFor="country">Select a Country</label>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          id="country"
          name="country"
        >
          <option value="">Select a country</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">United Kingdom</option>
          <option value="australia">Australia</option>
        </select>

        <button onclick="submitDetails()">Submit</button>
      </form>
    </div>
  );
}

export default Details;
