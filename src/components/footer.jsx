import facebookLogo from "../assets/footer/facebook.png"
import instagramLogo from "../assets/footer/instagram.jpg"
import linkedinLogo from "../assets/footer/linkedin.png"
import pinterestLogo from "../assets/footer/pinterest.png"
import xLogo from "../assets/footer/x.jpg"

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 py-10 px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <div>
                        <h4 className="font-semibold text-black text-lg mb-3">Company</h4>
                        <ul className="space-y-2">
                            <li>About Us</li>
                            <li>Swiggy Corporate</li>
                            <li>Careers</li>
                            <li>Team</li>
                            <li>Swiggy One</li>
                            <li>Swiggy Instamart</li>
                            <li>Swiggy Dineout</li>
                            <li>Swiggy Genie</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-black text-lg mb-3">Contact</h4>
                        <ul className="space-y-2">
                            <li>Contact Us</li>
                            <li>Help & Support</li>
                            <li>Partner with Us</li>
                            <li>Ride with Us</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-black text-lg mb-3">Legal</h4>
                        <ul className="space-y-2">
                            <li>Terms & Conditions</li>
                            <li>Cookie Policy</li>
                            <li>Privacy Policy</li>
                            <li>Investor Relations</li>
                            <li>Life at Swiggy</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-black text-lg mb-3">Explore with Swiggy</h4>
                        <ul className="space-y-2">
                            <li>Swiggy News</li>
                            <li>Snackables</li>
                            <li>Available in:</li>
                            <li>Bangalore</li>
                            <li>Gurgaon</li>
                            <li>Hyderabad</li>
                            <li>Delhi</li>
                            <li>Mumbai</li>
                            <li>Pune</li>
                            <li className="border border-gray-400 mr-36 rounded-md p-1">679 cities</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-black text-lg mb-3">Follow Us</h4>
                        <ul className="flex space-x-4">
                            <li>
                                    <img src={facebookLogo} alt="LinkedIn" className="w-6 h-6" />
                            </li>
                            <li>
                                    <img src={instagramLogo} alt="Instagram" className="w-6 h-6" />
                            </li>
                            <li>
                                    <img src={xLogo} alt="Facebook" className="w-6 h-6" />
                            </li>
                            <li>
                                    <img src={pinterestLogo} alt="Pinterest" className="w-6 h-6" />
                            </li>
                            <li>
                                    <img src={linkedinLogo} alt="Pinterest" className="w-6 h-6" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Swiggy. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
