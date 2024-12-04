import facebookLogo from "../../assets/footer/facebook.png";
import instagramLogo from "../../assets/footer/instagram.jpg";
import linkedinLogo from "../../assets/footer/linkedin.png";
import pinterestLogo from "../../assets/footer/pinterest.png";
import xLogo from "../../assets/footer/x.jpg";

const footerLinks = {
    company: [
        "About Us",
        "Swiggy Corporate",
        "Careers",
        "Team",
        "Swiggy One",
        "Swiggy Instamart",
        "Swiggy Dineout",
        "Swiggy Genie"
    ],
    contact: [
        "Contact Us",
        "Help & Support",
        "Partner with Us",
        "Ride with Us"
    ],
    legal: [
        "Terms & Conditions",
        "Cookie Policy",
        "Privacy Policy",
        "Investor Relations",
        "Life at Swiggy"
    ],
    explore: [
        "Swiggy News",
        "Snackables",
        "Available in:",
        "Bangalore",
        "Gurgaon",
        "Hyderabad",
        "Delhi",
        "Mumbai",
        "Pune",
        "more cities"
    ],
    social: [
        { name: "Facebook", logo: facebookLogo, alt: "Facebook" },
        { name: "Instagram", logo: instagramLogo, alt: "Instagram" },
        { name: "X", logo: xLogo, alt: "X (Twitter)" },
        { name: "Pinterest", logo: pinterestLogo, alt: "Pinterest" },
        { name: "LinkedIn", logo: linkedinLogo, alt: "LinkedIn" }
    ]
};

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10 px-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <div>
                        <h4 className="font-semibold text-lg mb-3">Company</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((item, index) => (
                                <li key={index} className="hover:text-orange-500 transition-colors">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-3">Contact</h4>
                        <ul className="space-y-2">
                            {footerLinks.contact.map((item, index) => (
                                <li key={index} className="hover:text-orange-500 transition-colors">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-3">Legal</h4>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((item, index) => (
                                <li key={index} className="hover:text-orange-500 transition-colors">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-3">Explore with Swiggy</h4>
                        <ul className="space-y-2">
                            {footerLinks.explore.map((item, index) => (
                                <li key={index} className="hover:text-orange-500 transition-colors">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
                        <ul className="flex space-x-4">
                            {footerLinks.social.map((social, index) => (
                                <li key={index}>
                                    <img
                                        src={social.logo}
                                        alt={social.alt}
                                        className="w-6 h-6 hover:opacity-75 transition-opacity"
                                    />
                                </li>
                            ))}
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
