const Footer = () => {
    return (
<footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
  <div className="text-white-500 flex gap-2">
    <p>Terms & Conditions</p>
    <p>|</p>
    <p>Privacy Policy</p>
  </div>

   <div className="flex items-center gap-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/andrew-kim001347" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white-500 hover:text-yellow-300 transition"
        >
          <img
            src="/assets/linkedin.png"
            alt="LinkedIn"
            className="w-4 h-4 opacity-80 hover:opacity-100"
          />
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>



  <p className="text-white-500 text-sm">
    Icons by{" "}
    <a
      href="https://www.flaticon.com"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-white"
    >
      Flaticon
    </a>{" "}
    &{" "}
    <a
      href="https://icons8.com"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-white"
    >
      Icons8
    </a>
  </p>

  <p className="text-white-500 text-sm">
    © 2025 Andrew Kim. All rights reserved.
  </p>
</footer>

    );
  };
  
  export default Footer;
  