import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Mens", href: "#" },
    { name: "Womens", href: "#" },
    { name: "Shopping", href: "#" },
  ];
  const socialLinks = [
    { name: "Facebook", icon: <FaFacebook />, href: "#" },
    { name: "Twitter", icon: <FaTwitter />, href: "#" },
    { name: "LinkedIn", icon: <FaLinkedin />, href: "#" },
    { name: "Instagram", icon: <FaInstagram />, href: "#" },
  ];

  return (
    <footer className="bg-[#222222] text-white text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-sans">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-gray-300 transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MdEmail className="mr-2" />
                <a href="" className="hover:text-gray-300 transition duration-300">
                  strydekicks@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MdPhone className="mr-2" />
                <a href="tel:" className="hover:text-gray-300 transition duration-300">
                  +254 115 112760
                </a>
              </li>
              <li className="flex items-center">
                <MdLocationOn className="mr-2" />
                <span>Moi Avenue, Nairobi CBD, Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Social Media</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-gray-300 transition duration-300"
                  aria-label={`Visit our ${link.name} page`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <p>Have a question or want to work together?</p>
            <button
              className="bg-[#222222] border border-[#89E900] rounded-xl text-white font-bold py-2 px-4 transition duration-300"
              aria-label="Contact us"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;