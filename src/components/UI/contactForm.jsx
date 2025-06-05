import React from "react";
import { TextField } from "@mui/material";
import Button from "../UI/button";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function ContactForm() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mhh17ao",
        "template_4g7dpbt",
        formRef.current,
        "NahaF3AMvxaOT2EkS"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent!");
          formRef.current.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
        }
      );
  };
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <form ref={formRef} onSubmit={sendEmail}>
        {" "}
        {/* first name */}
        <div className=" w-full flex lg:flex-row justify-between items-center px-10 gap-10 shadow-[-6px_-5px_7px_-5px_rgba(255,255,255,0.6),0_1px_5px_2px_rgba(0,0,0,0.1)] xl:!shadow-[-5px_-2px_20px_-6px_rgba(255,255,255,0.6),0_2px_5px_1px_rgba(0,0,0,0.1)] p-10 rounded-2xl mb-4">
          <TextField
            id="standard-basic"
            label="First Name"
            name="first_name"
            variant="standard"
            className="w-full"
            inputProps={{
              pattern: "^[A-Za-z]+$",
              title: "First name should only contain letters.",
            }}
            required
            sx={{
              "& .MuiInputLabel-root": {
                color: "black",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "black",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "black",
              },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottomColor: "gray",
              },
            }}
          />

          {/* last name */}
          <TextField
            id="standard-basic"
            label="Last Name"
            name="last_name"
            variant="standard"
            className="w-full"
            inputProps={{
              pattern: "^[A-Za-z]+$",
              title: "Last name should only contain letters.",
            }}
            required
            sx={{
              "& .MuiInputLabel-root": {
                color: "black",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "black",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "black",
              },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottomColor: "gray",
              },
            }}
          />
        </div>
        {/* email */}
        <div className=" w-full flex lg:flex-row justify-between items-center  px-10 mb-4 p-10 rounded-2xl shadow-[-6px_-5px_7px_-5px_rgba(255,255,255,0.6),0_1px_5px_2px_rgba(0,0,0,0.1)] xl:!shadow-[-5px_-2px_20px_-6px_rgba(255,255,255,0.6),0_2px_5px_1px_rgba(0,0,0,0.1)]">
          <TextField
            id="standard-basic"
            type="email"
            label="Email"
            name="user_email"
            variant="standard"
            className="w-full"
            requried
            sx={{
              "& .MuiInputLabel-root": {
                color: "black",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "black",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "black",
              },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottomColor: "gray",
              },
            }}
          />
        </div>
        {/* subject and message */}
        <div className=" w-full  flex flex-col justify-between items-center 2xl:!px-10 gap-10 p-5 xl:!p-10 rounded-2xl shadow-[-6px_-5px_7px_-5px_rgba(255,255,255,0.6),0_1px_5px_2px_rgba(0,0,0,0.1)] xl:!shadow-[-5px_-2px_20px_-6px_rgba(255,255,255,0.6),0_2px_5px_1px_rgba(0,0,0,0.1)]">
          {/* subject */}
          <TextField
            id="standard-basic"
            label="Subject"
            name="subject"
            variant="standard"
            className="w-full"
            required
            sx={{
              "& .MuiInputLabel-root": {
                color: "black",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "black",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "black",
              },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottomColor: "gray",
              },
            }}
          />
          {/* message */}
          <TextField
            id="outlined-textarea"
            label="Message"
            name="message"
            multiline
            rows={7}
            className="w-full h-full"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px", // Adjust border radius
                "&.Mui-focused fieldset": {
                  borderColor: "black", // Change to your desired color
                },
              },
              "& .MuiInputLabel-root": {
                color: "black",
                "&.Mui-focused": {
                  color: "black",
                },
              },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderColor: "gray",
              },
            }}
          />
        </div>
        <div className="mt-4">
          <Button type="submit" buttonText={"Submit"} />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
