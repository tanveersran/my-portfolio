import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { PageInfo } from "../typings";
type Props = {
  pageInfo: PageInfo;
};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}
function ContactMe({pageInfo}: Props) {


  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    window.location.href = `mailto:randhawazora99@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. My message for you: ${data.message}. Feel free to contact me at my email: ${data.email}`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
      &nbsp;Contact
      </h3>
      <div className="flex flex-col space-y-5 mt-14">
        <h4 className="text-1xl sm:text-3xl md:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let's talk.</span>
        </h4>

        <div className="space-y-2 md:space-y-5">
          <div className="contactDiv">
            <PhoneIcon className="contactIcon" />
            <p className="contactText">{pageInfo?.phoneNumber}</p>
          </div>

          <div className="contactDiv">
            <EnvelopeIcon className="contactIcon" />
            <p className="contactText">{pageInfo?.email}</p>
          </div>

          <div className="contactDiv">
            <MapPinIcon className="contactIcon" />
            <p className="contactText">{pageInfo?.address}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register('name')} className="contactInput" type="text" placeholder="Name"/>
            <input {...register('email')} className="contactInput" type="text" placeholder="Email"/>
          </div>

          <input {...register('subject')} className="contactInput w-full" type="text" placeholder="Subject"/>

          <textarea {...register('message')} className="contactInput w-full" placeholder="Message"/>

          <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg]">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
