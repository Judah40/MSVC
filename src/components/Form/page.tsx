'use client'

import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';
import Alert from "@mui/material/Alert";
interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Form: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    console.log(formValues);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValues)
  
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className='items-center w-full md:w-96 p-6 md:p-8 gap-4 flex flex-col border shadow-xl'>
      <div className="w-11/12 h-14 pl-4 border-2 gap-2 flex flex-row items-center">
        <label>
          <FaUser /> 
        </label>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          required
          placeholder='name'
          className='bg-transparent pl-2 w-full h-full'
        />
      </div>
      <div className="w-11/12 h-14 pl-4 border-2 flex gap-2 flex-row items-center">
        <label>
          <FaEnvelope /> 
        </label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
          placeholder='email'
          className='bg-transparent pl-2 w-full h-full'
        />
      </div>
      <div className="w-11/12 h-14 pl-4 border-2 gap-2 flex flex-row items-center">
        <label>
          <FaPhone /> 
        </label>
        <input
          type="tel"
          name="phone"
          placeholder='Phone'
          value={formValues.phone}
          onChange={handleChange}
          required
          className='bg-transparent pl-2 w-full h-full border-none'
        />
      </div>
      <div className="w-11/12  gap-1 h-40 pl-4 border-2 flex flex-row  p-4">
        <label>
        <FaComment /> 
        </label>
        <textarea
          name="message"
          placeholder='Message'
          value={formValues.message}
          onChange={handleChange}
          required
          className='bg-transparent pl-2 w-full'
        />
      </div>
     
      <button
      className='w-11/12 h-16 bg-[#9DBDFF] text-white'
      type="submit">Submit</button>
    </form>
  );
};

export default Form;
