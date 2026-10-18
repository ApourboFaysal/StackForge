import logo from "../assets/logo-text.png";
const columns = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

const socials = ["GitHub", "Twitter", "LinkedIn"];

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <img src={logo} alt="logo" />
            <p className="mt-4 text-sm text-gray-500 max-w-xs">
              Curated tools, technologies, and resources for developers and
              engineers building modern software.
            </p>
            <div className="mt-4 flex gap-4 text-sm text-gray-700">
              {socials.map((name) => (
                <span key={name} className="hover:text-pink-600 cursor-pointer">
                  {name}
                </span>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-gray-900 uppercase">
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
                {col.links.map((link) => (
                  <li key={link} className="hover:text-pink-600 cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-pink-600 cursor-pointer">Privacy</span>
            <span className="hover:text-pink-600 cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
