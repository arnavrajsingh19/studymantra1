import React, { useEffect, useState } from "react";
import Footer from "../components/common/footer";
import ReviewTabs from "../components/core/HomePage/ReviewTabs"
import { useForm } from "react-hook-form";
const Contactus = () => {
  const[loading,setLoading]=useState(false);
  const{
    register,
    handleSubmit,
    reset,
    formState: {errors,isSubmitsuccessfull}
  }=useForm();
  const submitContactForm = async(data)=>{
    console.log("Logging Data",data);
    try{
      setLoading(true);
      //const response=await apiConnector("POST",contactusEndpoint.CONTACT_US_API,data);
      const response={status:"Ok"};
      console.log("Logging Response",response);
      setLoading(false);
    }
    catch(error){
      console.log("Error:",error.message);
      setLoading(false);
    }

  }
  useEffect(()=> {
    if(isSubmitsuccessfull){
      reset({
        email:"",
        firstname:"",
        lastname:"",
        message:"",
        phoneNo:"",
      },[reset,isSubmitsuccessfull])
    }
  })
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Chat on us</h2>
            <p>Our friendly team is here to help.</p>
            <p className="text-yellow-25">@mail address</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">Visit us</h2>
            <p>Come and say hello at our office HQ.</p>
            <p>Here is the location/ address</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">Call us</h2>
            <p>Mon - Fri From 8am to 5pm</p>
            <p className="text-yellow-25">+123 456 7890</p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Got an Idea? We’ve got the skills. Let’s team up</h2>
            <p className="text-gray-400 mb-4">Tell us more about yourself and what you've got in mind.</p>
            <form className="space-y-4" onSubmit={handleSubmit(submitContactForm)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter first name"
                  className="w-full p-3 rounded bg-gray-700 text-black"
                  {...register("firstname",{required:true})}
                />
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Enter last name"
                  className="w-full p-3 rounded bg-gray-700 text-black"
                  {...register("lastname")}
                />
                 {
                errors.firstname && (
                  <span>
                    Please enter your Name
                  </span>
                )
               }
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
                className="w-full p-3 rounded bg-gray-700 text-black"
                {...register("email",{required:true})}
              />
              {
                errors.email && (
                  <span>
                    Please enter your email address
                  </span>
                )
              }
              <input
                type="text"
                placeholder="Enter phone number"
                className="w-full p-3 rounded bg-gray-700 text-black"
              />
              <textarea
                placeholder="Enter your message"
                className="w-full p-3 rounded bg-gray-700 text-black"
                rows="4"
                name="message"
                id="message"
                {...register("message",{required:true})}
              ></textarea>
              <button type='submit' className="w-full bg-yellow-25 text-gray-900 font-semibold p-3 rounded hover:bg-yellow-50">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white '>
             
             <ReviewTabs/>
        </div>
      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Contactus;
