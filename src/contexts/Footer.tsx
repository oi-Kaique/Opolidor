import ImageLogo from "../assets/logo.svg";
import IconInstagram from "../assets/InstagramLogo.svg";
import Whatsapp from "../assets/WhatsappLogo.svg";

export function Footer() {
  return (
    <footer className="bg-[#03624C] text-white py-4 w-full">
      <div className="container mx-auto flex px-5 items-center justify-center">
        <div className="flex items-center w-full justify-between">
          <img src={ImageLogo} alt="Logo" className="h-12 mr-4" />
          <p className="text-sm">© 2025 Todos os direitos reservados.</p>
          
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/opolidoresteticajacobina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IconInstagram} alt="Instagram" className="h-6 " />
            </a>
            <a
              href="https://wa.me/5511987654321"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Whatsapp}
                alt="WhatsApp"
                className="h-6 bg-white rounded-full p-1"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
