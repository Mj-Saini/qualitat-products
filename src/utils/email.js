// src/utils/email.js
import emailjs from '@emailjs/browser';

export const sendEmail = async (formData) => {
  const templateParams = {
    first_name: formData.firstName,
    last_name: formData.lastName,
    address: formData.address,
    phone: formData.phone,
    query: formData.query
  };

  try {
    const result = await emailjs.send(
      'service_188fgu9',     
      'template_j4aqotk',   
      templateParams,
      'A7kWaOn36_TB6sQfr'      
    );

    console.log('Email successfully sent!', result.status, result.text);
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};
