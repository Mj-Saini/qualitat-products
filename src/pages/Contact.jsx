import React, { useState } from 'react'
import { DialIcons, MailBoxIcons, StarIcons } from '../components/common/Icons'
import CommonBtn from '../components/common/CommonBtn'
import { Link } from 'react-router'
import { sendEmail } from '../utils/email'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
    // Optionally reset form:
    setFormData({ firstName: '', lastName: '', address: '', phone: '', query: '' });

     const success = await sendEmail(formData);

  if (success) {
    alert("Thanks! Your message has been sent.");
    setFormData({ firstName: '', lastName: '', address: '', phone: '', query: '' });
  } else {
    alert("Something went wrong. Please try again later.");
  }
  };
  return (
    <>
      <section className='py-14 bg-[#C8F9E4] min-h-[calc(100vh-87px)] flex'>
        <div className='custom_container container px-5 mx-auto grow'>
          <div className="flex flex-wrap justify-between lg:-mx-4 h-full items-center">
            <div className='w-full lg:w-5/12 lg:px-4'>
              <div className='flex flex-col'>
                <p className='font-semibold text-lg text-[#2E3646] md:text-xl xl:text-2xl flex items-center gap-2 uppercase'> <span className='black_star'><StarIcons /></span>Contact Us</p>
                <h2 className='font-semibold text-3xl md:text-5xl xl:text-6xl xl:leading-[120%] py-3 text-[#2E3646]'>Get in Touch</h2>
                <p className='font-normal text-lg lg:text-xl text-[#2E3646]/90 leading-[160%] border-b border-[#030F26] pb-6'>We're here to help. Whether you have questions, feedback, or simply want to say hello, we'd love to hear from you. Fill out the form below or reach out to us using the contact information provided.</p>

                <div className='flex gap-2.5 mt-6  border-b border-[#030F26] pb-6'>
                  <span><MailBoxIcons /></span> <Link to={'mailto:info@cmdistributors.in'} className='text-[#9E1E1D] font-semibold text-lg lg:text-xl'>
                    info@cmdistributors.in</Link>
                </div>
                <div className='flex gap-2.5 mt-6  border-b border-[#030F26] pb-6'>
                  <span className='red_Icon'><DialIcons /></span> <Link to={'tel:(123)456-789'} className='text-[#9E1E1D] font-semibold text-lg lg:text-xl'>
                    (123)456-789</Link>
                </div>

              </div>
            </div>
            <div className='w-full lg:w-6/12 bg-white p-4 md:p-8 mt-12 lg:mt-0'>
              <div className='flex flex-col'>
                <h3 className='text-[#030F26] text-2xl md:text-3xl lg:text-[32px] font-semibold'>Contact Us</h3>
                 <form onSubmit={handleSubmit} className='flex flex-col gap-8 mt-6'>
                  <div className='flex gap-6'>
                    <input required
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder='First Name'
                      className='border-b border-[#030F26]/20 outline-none pb-3 w-full'
                    />
                    <input required
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder='Last Name'
                      className='border-b border-[#030F26]/20 outline-none pb-3 w-full'
                    />
                  </div>
                  <input required
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder='Address'
                    className='border-b border-[#030F26]/20 outline-none pb-3 w-full'
                  />
                  <input required
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='Phone'
                    className='border-b border-[#030F26]/20 outline-none pb-3 w-full'
                  />
                  <textarea
                    required
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    placeholder='Query'
                    className='border-b border-[#030F26]/20 outline-none pb-3 w-full h-[150px]'
                  ></textarea>
                  <div>
                    <button type="submit">
                    <CommonBtn btnName="Submit" btnStyling=" py-2.5 px-3 xl:px-6" type="submit" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Contact
