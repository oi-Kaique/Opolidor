import { useState } from "react";

import { Button } from "../componet/Button";

import ImageHero from "../assets/hero.svg";
import ImageLogo from "../assets/logo.svg";

export function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <section className="h-screen w-screen bg-cover bg-center bg-no-repeat bg-fixed relative" style={{ backgroundImage: `url(${ImageHero})` }}> 
      <header className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="w-[150px] h-[100px]">
         <a href="/"><img src={ImageLogo} alt="logo" className="w-full h-full object-contain" /></a>
        </div>

        {/* Botão Hamburguer */}
        <div
          id="menu"
          aria-label="Abrir menu"
          className="w-20 h-10 cursor-pointer flex flex-col justify-evenly items-center z-20 relative"
          onClick={toggleMenu}
        >
        <div className="flex flex-col gap-1.5 cursor-pointer z-20 justify-center items-center " onClick={() => setIsNavOpen(!isNavOpen)}>
          <div className={`h-[4px] w-9 bg-black rounded transition-all duration-300 ease-in-out ${isNavOpen ? "rotate-45 absolute translate-y-[8.5px]" : ""}`}></div>
          <div className={`h-[4px] w-9 bg-black rounded transition-all duration-300 ease-in-out ${isNavOpen ? "hidden" : ""}`}></div>
          <div className={`h-[4px] w-9 bg-black rounded transition-all duration-300 ease-in-out ${isNavOpen ? "-rotate-45 absolute -translate-y-[8.5px]" : ""}`}></div>
        </div>

        </div>

        {/* Menu de Navegação */}
        <nav
          className={`fixed top-28 right-10 w-auto h-auto bg-green-300 flex flex-col items-center p-4 rounded-lg transition-all duration-500 ease-in-out shadow-[0_1px_15px_1px_black] ${
            isNavOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-3">
            <li className="cursor-pointer w-full p-2 text-black font-semibold hover:text-white">Inicio</li>
            <li className="cursor-pointer w-full p-2 text-black font-semibold hover:text-white">Sobre nós</li>
            <li className="cursor-pointer w-full p-2 text-center text-black font-semibold hover:text-white">Produtos</li>
            <li className="cursor-pointer w-full p-2 text-center text-black font-semibold hover:text-white">Contatos</li>
          </ul>
        </nav>
      </header>
      <div className=" absolute bottom-[30px] mx-6 flex flex-col gap-6">
        <h1 className="text-7xl font-bold ">Seu Carro, Como Novo!</h1>
        
        <p className="text-xl text-semibold">
          Descubra a diferença que um polimento profissional pode fazer.
          deixe-nos cuidar do seu automovel com os melhores serviços de limpeza
          e tratamento para veiculos.
        </p>
        <div className="flex gap-4">
          <Button className="">Agende um horário</Button>
          <button className="bg-transparent border-2 border-[#042222] px-[16px] py-[12px] font-bold rounded-md text-[#042222] cursor-pointer scale-1">Saiba mais</button>
        </div>
      </div>
    </section>
    
    
  );
}
