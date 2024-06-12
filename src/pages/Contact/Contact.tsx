import { useState, useEffect, useRef, FormEvent } from "react";
import HeaderSection from "../../components/Header/HeaderSection";
import LocationImg from "../../images/352521_location_on_icon (1).png";
import PhoneImg from "../../images/352510_local_phone_icon (1).png";
import EmailImg from "../../images/134146_mail_email_icon.png";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [vaild, setVaild] = useState<boolean>(false);
  const [cols, setCols] = useState<number>(50);
  const emailRegex = /\S+@\S+\.\S+/;
  const form = useRef<HTMLFormElement | null>(null);

  // error handling states
  const [NameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [subjectError, setSubjectError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCols(30);
      } else {
        setCols(80);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nameValidation = (e: FormEvent) => {
    e.preventDefault();

    ("");
    setNameError("");
    setEmailError("");
    setPhoneError("");
    setSubjectError("");
    setMessageError("");

    let hasError = false;

    if (name.trim() === "") {
      setNameError("No name");
      hasError = true;
      setName("");
    }

    if (phone.trim() === "") {
      setPhoneError("No Phone Number");
      hasError = true;
    }

    if (!emailRegex.test(email.trim())) {
      setEmailError("Invalid email");
      setEmail("");
      hasError = true;
    }

    if (email.trim() === "") {
      setEmailError("No Email");
      hasError = true;
    }

    if (subject.trim() === "") {
      setSubjectError("No subject");
      hasError = true;
    }

    if (message.trim() === "") {
      setMessageError("No message");
      hasError = true;
    }

    if (hasError) {
      setTimeout(() => {
        setNameError("");
        setEmailError("");
        setPhoneError("");
        setSubjectError("");
        setMessageError("");
      }, 5000);
      return;
    }

    setVaild(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_qga0l9o",
          "template_9t11bfl",
          form.current,
          "vEO2YhyftI1G5_QqO"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setName("");
            setEmail("");
            setPhone("");
            setSubject("");
            setMessage("");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  return (
    <>
      <HeaderSection title="Contact Us" />
      <section className="mt-10 font-Inter">
        <div className="flex items-center px-[32px] md:px-[50px] lg:px-[110px]">
          <h2 className="font-BankGothic text-[20px] whitespace-nowrap mr-4">
            Contact Us Today
          </h2>
          <hr className="flex-grow h-[1px] bg-gray-100 border-0 rounded" />
        </div>

        {/* Office map */}
        <div className="mt-10">
          <iframe
            width="100%"
            height="308"
            src="https://maps.google.com/maps?width=100%25&amp;height=308&amp;hl=en&amp;q=71-75%20Shelton%20Street,%20Covent%20Garden,%20London,%20WC2H%209JQ+(illusio)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>

        {/* Contact form */}

        <div
          className="flex justify-center items-center flex-col gap-10 
        xl:flex-row xl:items-start xl:justify-between xl:gap-[50px] px-[32px] md:px-[50px] xl:px-[110px]"
        >
          {/*  */}

          <div className="mt-10 xl:w-[600px]">
            <div className="flex justify-center items-center xl:justify-start">
              <h3
                className="font-Inter text-2xl font-medium
            "
              >
                Contact Form
              </h3>
            </div>
            <form ref={form} onSubmit={nameValidation}>
              <div className="flex justify-center items-center flex-col pb-5 xl:items-start">
                <div className="flex justify-center items-center flex-col py-5 md:flex-row md:flex-wrap lg:gap-x-[155px] xl:gap-x-[70px] gap-6 xl:justify-between">
                  <div className="flex justify-start items-start flex-col relative">
                    {NameError && (
                      <span className="text-red-700 font-bold font-Inter absolute -top-3">
                        {NameError}
                      </span>
                    )}
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-white border-[3px] w-[300px] h-[48px] mt-5 rounded-lg bg-transparent shadow-white pl-3 xl:w-[260px]"
                      placeholder="Name*"
                      name="name"
                    />
                  </div>
                  <div className="flex justify-start items-start flex-col relative">
                    {emailError && (
                      <span className="text-red-700 font-bold font-Inter absolute -top-3">
                        {emailError}
                      </span>
                    )}
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-white border-[3px] w-[300px] h-[48px] mt-5 rounded-lg bg-transparent pl-3 xl:w-[260px]"
                      placeholder="Email*"
                      name="email"
                    />
                  </div>
                  <div className="flex justify-start items-start flex-col relative">
                    {phoneError && (
                      <span className="text-red-700 font-bold font-Inter absolute -top-3">
                        {phoneError}
                      </span>
                    )}
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="border-white border-[3px] w-[300px] h-[48px] mt-5 rounded-lg bg-transparent pl-3 xl:w-[260px]"
                      placeholder="Phone*"
                      name="number"
                    />
                  </div>
                  <div className="flex justify-start items-start flex-col relative">
                    {subjectError && (
                      <span className="text-red-700 font-bold font-Inter absolute -top-3">
                        {subjectError}
                      </span>
                    )}
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="border-white border-[3px] w-[300px] h-[48px] mt-5 rounded-lg bg-transparent pl-3 xl:w-[260px]"
                      placeholder="Subject*"
                      name="subject"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center flex-col gap-10 py-5">
                  <div className="mx-[32px] md:mx-[40px] xl:mx-0 flex justify-start items-start flex-col relative">
                    {messageError && (
                      <span className="text-red-700 font-bold font-Inter absolute -top-3">
                        {messageError}
                      </span>
                    )}
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="border-white border-[3px] h-[341px] mt-5 rounded-lg bg-transparent p-3 w-full"
                      placeholder="Message*"
                      cols={cols}
                      name="message"
                    ></textarea>
                  </div>
                </div>
                <button className="w-full h-[84px] bg-[#015A92] text-white px-[25px] py-[15px] font-semibold font-Roboto text-center rounded-md lg:w-[85%] xl:w-full">
                  {vaild === false ? <p>Send Message</p> : <p>Message Sent!</p>}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}

          <div
            className="mt-10 text-center flex justify-center items-center flex-col gap-5 
          xl:items-start xl:text-left xl:w-[550px] xl:px-0"
          >
            <h3 className="font-Inter text-2xl font-medium">Contact Info</h3>
            <p>
              We’d love to hear from you! Please fill in your details below so
              we can assist you promptly. Whether you have questions, feedback,
              or need support, our team is here to help.
            </p>
            <div className="text-center flex justify-center items-start flex-col gap-5">
              <div className="text-center flex justify-center items-center flex-row gap-5 xl:text-left">
                <img src={LocationImg} />
                <p>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
              </div>
              <div className="text-center flex justify-center items-center flex-row gap-5 xl:text-left">
                <img src={PhoneImg} />
                <p>+44 7517439370</p>
              </div>
              <div className="text-center flex justify-center items-center flex-row gap-5 xl:text-left">
                <img src={EmailImg} />
                <p>henriquebaena98@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
