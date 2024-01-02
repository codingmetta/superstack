'use client';
import { FaApplePay, FaPaypal, FaShopify } from "react-icons/fa";
import { SiKlarna, SiVisa } from "react-icons/si";

function FooterPayment() {
    return (
        <section>
            <ul className="flex flex-wrap items-center justify-center gap-2">
                <li>
                    <div className="flex items-center justify-center w-10 h-6 bg-white border rounded">
                        <img
                            className="object-scale-down w-full max-h-3.5"
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
                            alt="Amazon Payment Logo"
                        />
                    </div>
                </li>
                <li>
                    <div className="flex items-center justify-center w-10 h-6 overflow-hidden border-transparent rounded">
                        <svg className="object-fill" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" aria-labelledby="pi-american_express"><title id="pi-american_express">American Express</title><g fill="none"><path fill="#000" d="M35,0 L3,0 C1.3,0 0,1.3 0,3 L0,21 C0,22.7 1.4,24 3,24 L35,24 C36.7,24 38,22.7 38,21 L38,3 C38,1.3 36.6,0 35,0 Z" opacity=".07"></path><path fill="#006FCF" d="M35,1 C36.1,1 37,1.9 37,3 L37,21 C37,22.1 36.1,23 35,23 L3,23 C1.9,23 1,22.1 1,21 L1,3 C1,1.9 1.9,1 3,1 L35,1"></path><path fill="#FFF" d="M8.971,10.268 L9.745,12.144 L8.203,12.144 L8.971,10.268 Z M25.046,10.346 L22.069,10.346 L22.069,11.173 L24.998,11.173 L24.998,12.412 L22.075,12.412 L22.075,13.334 L25.052,13.334 L25.052,14.073 L27.129,11.828 L25.052,9.488 L25.046,10.346 L25.046,10.346 Z M10.983,8.006 L14.978,8.006 L15.865,9.941 L16.687,8 L27.057,8 L28.135,9.19 L29.25,8 L34.013,8 L30.494,11.852 L33.977,15.68 L29.143,15.68 L28.065,14.49 L26.94,15.68 L10.03,15.68 L9.536,14.49 L8.406,14.49 L7.911,15.68 L4,15.68 L7.286,8 L10.716,8 L10.983,8.006 Z M19.646,9.084 L17.407,9.084 L15.907,12.62 L14.282,9.084 L12.06,9.084 L12.06,13.894 L10,9.084 L8.007,9.084 L5.625,14.596 L7.18,14.596 L7.674,13.406 L10.27,13.406 L10.764,14.596 L13.484,14.596 L13.484,10.661 L15.235,14.602 L16.425,14.602 L18.165,10.673 L18.165,14.603 L19.623,14.603 L19.647,9.083 L19.646,9.084 Z M28.986,11.852 L31.517,9.084 L29.695,9.084 L28.094,10.81 L26.546,9.084 L20.652,9.084 L20.652,14.602 L26.462,14.602 L28.076,12.864 L29.624,14.602 L31.499,14.602 L28.987,11.852 L28.986,11.852 Z"></path></g></svg>
                    </div>
                </li>
                <li>
                    <div className="flex items-center justify-center w-10 h-6 overflow-hidden bg-white border border-black rounded">
                        <FaApplePay className="w-10 h-6" />
                    </div>
                </li>
                <li>
                    <div className="flex items-center justify-center w-10 h-6 overflow-hidden bg-white border-transparent rounded">
                        <img
                            className="object-scale-down w-full max-h-4"
                            src="https://upload.wikimedia.org/wikipedia/commons/8/87/Giropay.svg"
                            alt="Giropay Logo"
                        />
                    </div>
                </li>
                <li>
                    <div className="flex items-center justify-center w-10 h-6 overflow-hidden bg-white border-transparent rounded">
                        <img
                            className="object-scale-down w-full max-h-4"
                            src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
                            alt="Google Pay Logo"
                        />
                    </div>
                </li>
                <li>
                    <div className="flex items-center justify-center w-10 h-6 overflow-hidden bg-[#ffb3c7] border-transparent rounded">
                        <SiKlarna className="w-8" />
                    </div>
                </li>
                <li>
                    <div className="flex items-center justify-center w-10 h-6 overflow-hidden bg-white border-transparent rounded">
                        <img
                            className="object-scale-down w-full max-h-4"
                            src="https://upload.wikimedia.org/wikipedia/commons/8/80/Maestro_2016.svg"
                            alt="Maestro Logo"
                        />
                    </div>
                </li>
                <li>
                    <div className="flex items-center justify-center w-10 h-6 overflow-hidden bg-white border-transparent rounded">
                        <img
                            className="object-scale-down w-full max-h-4"
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg "
                            alt="Mastercard Logo"
                        />
                    </div>
                </li>
                <li>
                    <div className="flex items-center justify-center w-10 h-6 overflow-hidden bg-white border-transparent rounded">
                        <FaPaypal className="text-blue-900" />
                    </div>
                </li>
                <li>
                    <div className="flex items-center justify-center w-10 h-6 overflow-hidden bg-white border-transparent rounded">
                        <FaShopify className="text-blue-900" />
                    </div>
                </li>
                <li>
                    <div className="flex items-center justify-center w-10 h-6 overflow-hidden bg-white border-transparent rounded">
                        <img
                            className="object-scale-down w-full max-h-4"
                            src="https://upload.wikimedia.org/wikipedia/commons/1/11/Sofort-klarna-logo.svg "
                            alt="Sofort Überweisung Logo"
                        />
                    </div>
                </li>
                <li>
                    <div className="flex items-center justify-center w-10 h-6 overflow-hidden bg-white border-transparent rounded">
                        <img
                            className="object-cover"
                            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/UnionPay_logo.svg "
                            alt="Union Pay Logo"
                        />
                    </div>
                </li>
                <li>
                    <div className="flex items-center justify-center w-10 h-6 overflow-hidden bg-white border-transparent rounded">
                        <SiVisa />
                    </div>
                </li>
            </ul>
        </section>
    );
}
export default FooterPayment 