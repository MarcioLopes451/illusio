import { useState, useEffect } from "react";
import HeaderSection from "../../components/Header/HeaderSection";
import LocationImg from "../../images/352521_location_on_icon (1).png";
import PhoneImg from "../../images/352510_local_phone_icon (1).png";
import EmailImg from "../../images/134146_mail_email_icon.png";

export default function Contact() {
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [cols, setCols] = useState<number>(50);
  //const [validation, setValidation] = useState<boolean>(false);
  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex =
    /^(?:\+44|0)\s?\d{4}\s?\d{6}$|^(?:\+44|0)\s?\d{3}\s?\d{3}\s?\d{4}$|^(?:\+44|0)\s?\d{2}\s?\d{4}\s?\d{4}$/;

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

  const nameValidation = () => {
    if (firstName.trim() === "") {
      console.log("no name");
      return;
    }

    if (!phoneRegex.test(phone.trim())) {
      console.log("invalid phone number");
      return;
    }

    if (!emailRegex.test(email.trim())) {
      console.log("invalid email");
      return;
    }

    if (subject.trim() === "") {
      console.log("no subject");
      return;
    }

    if (message.trim() === "") {
      console.log("no message");
      return;
    }

    setFirstName("");
    setMessage("");
    setEmail("");
    setSubject("");
    setPhone("");
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
          <div className="mt-10">
            <h3 className="font-Inter text-2xl text-center font-medium xl:text-left">
              Contact Form
            </h3>
            <div className="flex justify-center items-center flex-col pb-5">
              <div className="flex justify-center items-center flex-col py-5 md:flex-row md:flex-wrap gap-6 xl:justify-start">
                <div>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border-white border-[3px] w-[300px] h-[48px] mt-5 rounded-lg bg-transparent shadow-white pl-3 xl:w-[285px]"
                    placeholder="Name*"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-white border-[3px] w-[300px] h-[48px] mt-5 rounded-lg bg-transparent pl-3 xl:w-[285px]"
                    placeholder="Email*"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border-white border-[3px] w-[300px] h-[48px] mt-5 rounded-lg bg-transparent pl-3 xl:w-[285px]"
                    placeholder="Phone*"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="border-white border-[3px] w-[300px] h-[48px] mt-5 rounded-lg bg-transparent pl-3 xl:w-[285px]"
                    placeholder="Subject*"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col gap-10 py-5">
                <div className="mx-[32px] md:mx-[40px]">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border-white border-[3px] h-[341px] mt-5 rounded-lg bg-transparent p-3 w-full"
                    placeholder="Message*"
                    cols={cols}
                  ></textarea>
                </div>
              </div>
              <button
                className="w-full h-[84px] bg-[#015A92] text-white px-[25px] py-[15px] font-semibold font-Roboto text-center rounded-md"
                onClick={nameValidation}
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Info */}

          <div
            className="mt-10 px-[32px] text-center flex justify-center items-center flex-col gap-5 
          xl:items-start xl:text-left xl:w-[550px] xl:px-0"
          >
            <h3 className="font-Inter text-2xl font-medium">Contact Info</h3>
            <p>
              We’d love to hear from you! Please fill in your details below so
              we can assist you promptly. Whether you have questions, feedback,
              or need support, our team is here to help.
            </p>
            <div className="text-center flex justify-center items-start flex-col gap-5">
              <div className="text-center flex justify-center items-center flex-row gap-5">
                <img src={LocationImg} />
                <p>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
              </div>
              <div className="text-center flex justify-center items-center flex-row gap-5">
                <img src={PhoneImg} />
                <p>+44 7517439370</p>
              </div>
              <div className="text-center flex justify-center items-center flex-row gap-5">
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
