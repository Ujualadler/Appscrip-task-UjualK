import React, { useState } from "react";

function Footer() {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showFollowUs, setShowFollowUs] = useState(false);

  const toggleAboutUs = () => {
    setShowAboutUs(!showAboutUs);
  };
  const toggleQuickLinks = () => {
    setShowQuickLinks(!showQuickLinks);
  };
  const toggleFollowUs = () => {
    setShowFollowUs(!showFollowUs);
  };
  return (
    <footer className="bg-black text-white  flex justify-center items-center ">
      <div className="sm:w-[80%] w-[90%] mt-10">
        <div className="flex flex-col sm:flex-row  justify-between  gap-16 sm:border-b-2 sm:border-gray-400   ">
          <div className="flex flex-col sm:w-[50%] justify-center gap-5 sm:pb-8 pb-4 sm:border-0 border-b-2 border-gray-400 ">
            <div className="flex justify-start">
              <h3 className="text-white sm:text-xl text-lg font-bold font-['Simplon Norm'] uppercase">
                Be the first to know
              </h3>
            </div>
            <div className="flex justify-start">
              <p className=" text-white text-base font-normal font-['Simplon Norm']">
                Sign up for updates from mettā muse.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                className="bg-white p-2 text-black h-10 w-[63%]"
                type="text"
              />
              <div className="w-[33%] h-10 opacity-30 bg-black rounded-[5px] border border-white justify-center items-center flex">
                <div className="text-white text-lg font-medium font-['Simplon Norm'] uppercase">
                  Subscribe
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col col-span-2 mt-5 sm:0 sm:col-span-1 justify-center gap-5 ">
            <div className="flex flex-col gap-3 sm:border-0 border-b-2 border-gray-400 sm:pb-8 pb-4  ">
              <h3 className="text-white sm:text-xl text-lg font-bold font-['Simplon Norm'] uppercase">
                CONTACT US
              </h3>
              <div className="flex items-start flex-col gap-2">
                <a
                  href="tel:+442211335360"
                  className="text-white sm:text-base text-sm  font-normal font-['Simplon Norm']"
                >
                  +44 221 133 5360
                </a>
                <span className="block sm:hidden h-1 w-1 bg-white"></span>
                <a
                  href="mailto:customercare@mettamuse.com"
                  className="text-white sm:text-base text-sm  font-normal font-['Simplon Norm']"
                >
                  customercare@mettamuse.com
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:border-0 border-b-2 border-gray-400 sm:pb-8 pb-4">
              <h3 className="text-white sm:text-xl text-lg font-bold font-['Simplon Norm'] uppercase">
                Currency
              </h3>
              <div className="flex items-center gap-1">
                <img src="/america.png" alt="" />
                <span className="h-1 w-1 bg-white"></span>
                <h3 className="text-white text-base font-bold font-['Simplon Norm'] tracking-wide">
                  USD
                </h3>
              </div>
              <p className="sm:block hidden  text-white text-xs font-normal font-['Simplon Norm']">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 ">
          <div className="sm:col-span-1 col-span-3 sm:mt-10 mt-4 sm:border-0 border-b-2 border-gray-400 sm:pb-8 pb-4 ">
            <div className="flex justify-between">
              <h3 className="text-white sm:text-2xl text-lg mb-3 font-bold font-['Simplon Norm']">
                mettā muse
              </h3>
              {showAboutUs ? (
                <img
                  className="w-10 sm:hidden"
                  onClick={toggleAboutUs}
                  src="/arrowright.png"
                  alt="Toggle Follow Us Dropdown"
                />
              ) : (
                <img
                  className="w-10 sm:hidden"
                  onClick={toggleAboutUs}
                  src="/arrowdown.png"
                  alt="Toggle Follow Us Dropdown"
                />
              )}
            </div>

            {showAboutUs && (
              <ul className="space-y-3  sm:text-lg text-md ">
                <li className="text-white  font-normal font-['Simplon Norm']">
                  About Us
                </li>
                <li className="text-white  font-normal font-['Simplon Norm']">
                  Stories
                </li>
                <li className="text-white  font-normal font-['Simplon Norm']">
                  Artisans
                </li>
                <li className="text-white  font-normal font-['Simplon Norm']">
                  Boutiques
                </li>
                <li className="text-white  font-normal font-['Simplon Norm']">
                  Contact us
                </li>
                <li className="text-white  font-normal font-['Simplon Norm']">
                  EU Compliances Docs
                </li>
              </ul>
            )}
          </div>

          <div className="sm:col-span-1 col-span-3 sm:border-0 border-b-2 sm:mt-10 mt-4 border-gray-400 sm:pb-8 pb-4 ">
            <div className="flex justify-between">
              <h3 className="text-white sm:text-2xl text-lg mb-3 font-bold font-['Simplon Norm']">
                Quick Links
              </h3>
              {showQuickLinks ? (
                <img
                  className="w-10 sm:hidden"
                  onClick={toggleQuickLinks}
                  src="/arrowright.png"
                  alt="Toggle Follow Us Dropdown"
                />
              ) : (
                <img
                  className="w-10 sm:hidden"
                  onClick={toggleQuickLinks}
                  src="/arrowdown.png"
                  alt="Toggle Follow Us Dropdown"
                />
              )}
            </div>

            {showQuickLinks && (
              <ul className="space-y-3 sm:text-lg text-md ">
                <li className="text-white  font-normal font-['Simplon Norm']">
                  Orders & Shipping
                </li>
                <li className="text-white  font-normal font-['Simplon Norm']">
                  Join/Login as a Seller
                </li>
                <li className="text-white  font-normal font-['Simplon Norm']">
                  Payment & Pricing
                </li>
                <li className="text-white  font-normal font-['Simplon Norm']">
                  Return & Refunds
                </li>
                <li className="text-white  font-normal font-['Simplon Norm']">
                  FAQs
                </li>
                <li className="text-white  font-normal font-['Simplon Norm']">
                  Privacy Policy
                </li>
                <li className="text-white  font-normal font-['Simplon Norm']">
                  Terms & Conditions
                </li>
              </ul>
            )}
          </div>

          <div className="sm:col-span-1 col-span-3 flex flex-col  sm:border-0 border-b-2 sm:mt-10 mt-4 border-gray-400 sm:pb-8 pb-4 ">
            <div>
              <div className="flex justify-between">
                <h3 className="text-white sm:text-2xl text-xl mb-3 font-bold font-['Simplon Norm']">
                  Follow Us
                </h3>
                {showFollowUs ? (
                  <img
                    className="w-10 sm:hidden"
                    onClick={toggleFollowUs}
                    src="/arrowright.png"
                    alt="Toggle Follow Us Dropdown"
                  />
                ) : (
                  <img
                    className="w-10 sm:hidden"
                    onClick={toggleFollowUs}
                    src="/arrowdown.png"
                    alt="Toggle Follow Us Dropdown"
                  />
                )}
              </div>
              {showFollowUs && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-500">
                    <img src="/instagram.png" alt="Instagram Link" />
                  </div>
                  <div className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-500">
                    <img src="/linkedin.png" alt="Linkedin Link" />
                  </div>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-white sm:text-xl text-lg sm:mt-10 mt-4 mb-4 font-bold font-['Simplon Norm']">
                mettā muse Accepts
              </h3>
              <div className="grid grid-cols-6 gap-1">
                <img
                  className="w-10 sm:w-14 h-9"
                  src="/gpay.png"
                  alt="Google Pay"
                />
                <img
                  className="w-10 sm:w-14 h-9"
                  src="/mastercard.png"
                  alt="Mastercard"
                />
                <img
                  className="w-12 sm:w-14 h-9"
                  src="/paypal.png"
                  alt="PayPal"
                />
                <img
                  className="w-12 sm:w-14 h-9"
                  src="/amex.png"
                  alt="American Express"
                />
                <img
                  className="w-12 sm:w-14 h-9"
                  src="/applepay.png"
                  alt="Apple Pay"
                />
                <img
                  className="w-12 sm:w-14 h-9"
                  src="/dpay.png"
                  alt="Digital Payment"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-center sm:p-3 py-3 sm:py-0 text-white text-sm  font-normal font-['Simplon Norm']">
            Copyright © 2023 mettamuse. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
