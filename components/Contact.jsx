import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="h-full">
              <div>
                <Image
                  className="rounded-xl"
                  src="/../public/assets/contact_image.jpg"
                  width="450px"
                  height="325px"
                  alt="/"
                />
              </div>
            </div>
          </div>

          {/* right */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
