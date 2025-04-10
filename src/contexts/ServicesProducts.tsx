import ImageCleaning from "../assets/Cleaning.svg";
import ImagePolishing from "../assets/polishing.svg";
import ImageCarWash from "../assets/CarWash.svg";

import { Button } from "../components/Button";

export function ServicesProducts() {
  return (
    <div
      id="product"
      className=" flex flex-col items-center justify-center mt-[50px]"
    >
      <h1 className="text-4xl font-semibold pt-2.5 pb-3">
        Serviços e produtos
      </h1>

      <div className="xl:flex xl:h-[502px] gap-6">
        <div className="relative mb-6 ">
          <img
            src={ImageCleaning}
            alt="Cleaning"
            className="w-120 xl:h-full xl:w-full"
          />
          <div className="absolute bottom-4 left-4 flex flex-col items-start">
            <h2 className="text-white text-2xl font-semibold mb-2">
              Limpeza Completa
            </h2>
            <a
              href={`https://wa.me/5574981079263?text=${encodeURIComponent(
                "Gostaria de solicitar o serviço de limpeza completa"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Solicitar serviço</Button>
            </a>
          </div>
        </div>
        <div>
          <div className="relative mb-6">
            <img src={ImagePolishing} alt="Polishing" className="w-120" />
            <div className="absolute bottom-4 left-4 flex flex-col items-start">
              <h2 className="text-white text-2xl font-semibold mb-2">
                Polimento
              </h2>
              <a
                href={`https://wa.me/5574981079263?text=${encodeURIComponent(
                  "Gostaria de solicitar o serviço de polimento"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Solicitar serviço</Button>
              </a>
            </div>
          </div>
          <div className="relative mb-6">
            <img src={ImageCarWash} alt="CarWash" className="w-120" />
            <div className="absolute bottom-4 left-4 flex flex-col items-start">
              <h2 className="text-white text-2xl font-semibold mb-2">
                Lava a Jato
              </h2>
              <a
                href={`https://wa.me/5574981079263?text=${encodeURIComponent(
                  "Gostaria de solicitar o serviço de lava a jato"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Solicitar serviço</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
