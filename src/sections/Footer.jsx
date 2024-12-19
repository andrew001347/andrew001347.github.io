const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        
        {/* Terms & Conditions and Privacy Policy */}
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        {/* Icon Attribution Links */}
        <div className="flex text-white-500 flex-col gap-2">
          <div>
            <a 
              href="https://iconscout.com/icons/android" 
              className="text-underline font-size-sm" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Android
            </a> 
            by 
            <a 
              href="https://iconscout.com/contributors/icon-mafia" 
              className="text-underline font-size-sm" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Icon Mafia
            </a> 
            on 
            <a 
              href="https://iconscout.com" 
              className="text-underline font-size-sm" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              IconScout
            </a>
          </div>
  
          <div>
            <a 
              target="_blank" 
              href="https://icons8.com/icon/39848/unity" 
              rel="noopener noreferrer"
            >
              Unity
            </a> 
            icon by 
            <a 
              target="_blank" 
              href="https://icons8.com" 
              rel="noopener noreferrer"
            >
              Icons8
            </a>
          </div>
  
          <div>
            <a 
              target="_blank" 
              href="https://icons8.com/icon/55205/c-sharp-logo" 
              rel="noopener noreferrer"
            >
              C#
            </a> 
            icon by 
            <a 
              target="_blank" 
              href="https://icons8.com" 
              rel="noopener noreferrer"
            >
              Icons8
            </a>
          </div>
  
          <div>
            <a 
              href="https://www.flaticon.com/free-icons/cyber-security" 
              title="cyber security icons" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Cyber security icons
            </a> 
            created by srip - Flaticon
          </div>
  
          <div>
            <a 
              href="https://www.flaticon.com/free-icons/html" 
              title="html icons" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              HTML icons
            </a> 
            created by Freepik - Flaticon
          </div>
  
          <div>
            <a 
              href="https://www.flaticon.com/free-icons/css" 
              title="css icons" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              CSS icons
            </a> 
            created by Pixel perfect - Flaticon
          </div>
  
          <div>
            <a 
              href="https://www.flaticon.com/free-icons/javascript" 
              title="javascript icons" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              JavaScript icons
            </a> 
            created by Pixel perfect - Flaticon
          </div>
        </div>
  
        {/* Copyright Notice */}
        <p className="text-white-500">© 2024 Andrew Kim. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  