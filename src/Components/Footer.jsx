import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase ">
            Bekalu
          </span>
          <p className="text-[14px] my-4">
            Full-stack developer with a passion  creating secure, user-friendly web applications and mobile app .
          </p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Services
          </h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">Frontend Development</li>
            <li className="my-2">Backend Development</li>
            <li className="my-2">Mobile App Development</li>
            <li className="my-2">Software Testing</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase ">
            Contact
          </h2>
          <p className="text-[14px] my-4">Email: bekelueshete@gmail.com</p>
          <p className="text-[14px] my-4">Phone: +251943188727</p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Follow Me
          </h2>
          <div className="flex space-x-4 mt-4">
            <a target="_blank"
                href="https://github.com/BekaluEshete" className="text-white hover:text-fuchsia-800 transition-all">
              <FaGithub size={24} />
            </a>
            <a target="_blank"
                href="https:www.linkedin.com/in/bekalu-eshete" className="text-white hover:text-fuchsia-800 transition-all">
              <FaLinkedin size={24} />
            </a>
            <a target="_blank"
                href="https://x.com/bekaeshete" className="text-white hover:text-fuchsia-800 transition-all">
              <FaTwitter size={24} />
            </a>
            <a target="_blank" href="https://www.instagram.com/bekeat23m" className="text-white hover:text-fuchsia-800 transition-all">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
