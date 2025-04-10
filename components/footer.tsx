import Link from "next/link";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2025 Haruka Matsuda
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            href="https://x.com/lapurasu0422"
            className="ml-3 text-gray-500"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://github.com/haruka0422"
            className="ml-3 text-gray-500"
          >
            <FaGithub />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
