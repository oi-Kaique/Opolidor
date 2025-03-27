import ImageCleaning from "../assets/Cleaning.svg";
import ImagePolishing from "../assets/polishing.svg";
import ImageCarWash from "../assets/CarWash.svg";

import { Button } from "../components/Button";

export function ServicesProducts(){
  return (
    <div className=" flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold pt-2.5 pb-3">Serviços e produtos</h1>

      <div className="relative mb-6">
        <img src={ImageCleaning} alt="Cleaning" className="w-120 hover:scale-1.1" />
        <div className="absolute bottom-4 left-4 flex flex-col items-start">
          <h2 className="text-white text-2xl font-semibold mb-2">Limpeza Completa</h2>
          <Button>Solicitar serviço</Button>
        </div>
      </div>

      <div className="relative mb-6">
        <img src={ImagePolishing} alt="Polishing" className="w-120" />
        <div className="absolute bottom-4 left-4 flex flex-col items-start">
          <h2 className="text-white text-2xl font-semibold mb-2">Polimento</h2>
          <Button>Solicitar serviço</Button>
        </div>
      </div>

      <div className="relative mb-6">
        <img src={ImageCarWash} alt="CarWash" className="w-120" />
        <div className="absolute bottom-4 left-4 flex flex-col items-start">
          <h2 className="text-white text-2xl font-semibold mb-2">Lava a Jato</h2>
          <Button>Solicitar serviço</Button>
        </div>
      </div>
    </div>
  )
}