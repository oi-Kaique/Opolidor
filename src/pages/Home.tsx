import { useState } from "react";

import { Button } from "../components/Button";
import { BulletList } from "../contexts/BulletList";
import { ServicesProducts } from "../contexts/ServicesProducts";
import { Footer } from "../contexts/Footer";

import ImageHero from "../assets/hero.svg";
import ImageLogo from "../assets/logo.svg";
import ImageGroup from "../assets/Group 2.svg";

import IconSpray from "../assets/SprayBottle.svg";
import IconWind from "../assets/Wind.svg";
import IconBroom from "../assets/Broom.svg";
import Whatsap from "../assets/WhatsappLogo.svg";

export function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="overflow-hidden">
      <section
        className="h-screen w-screen bg-cover bg-center bg-no-repeat bg-fixed relative"
        style={{ backgroundImage: `url(${ImageHero})` }}
      >
        <header className="flex justify-between items-center p-4">
          {/* Logo */}
          <div className="w-[150px] h-[100px]">
            <a href="/">
              <img
                src={ImageLogo}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </a>
          </div>
          {/* Botão Hamburguer */}
          <div
            id="menu"
            aria-label="Abrir menu"
            className="w-20 h-20 cursor-pointer flex flex-col justify-evenly items-center z-20 relative"
            onClick={toggleMenu}
          >
            <label>
              <input
                type="checkbox"
                className="peer appearance-none sr-only"
                defaultChecked={false}
                checked={isNavOpen}
                onChange={(e) => setIsNavOpen(!e.target.checked)}
              />
              <div className="relative w-8 h-1 rounded-full peer-checked:bg-transparent bg-black cursor-pointer after:absolute after:-top-2.5 after:left-0 after:w-8 after:h-1 after:bg-black after:rounded-full before:absolute before:top-2.5 before:w-8 before:h-1 before:bg-black before:rounded-full peer-checked:after:top-1/2 peer-checked:after:-translate-y-1/2 peer-checked:after:rotate-45 peer-checked:before:top-1/2 peer-checked:before:-translate-y-1/2 peer-checked:before:-rotate-45"></div>
            </label>
          </div>
          {/* Menu de Navegação */}
          <nav
            className={`fixed top-28 z-10 right-10 w-auto h-auto bg-green-300 flex flex-col items-center p-4 rounded-lg transition-all rot duration-500 ease-in-out shadow-[0_1px_15px_1px_black] ${
              isNavOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col items-center gap-3">
              <li className="cursor-pointer w-full p-2 text-black font-semibold hover:text-white">
                Sobre nós
              </li>
              <li className="cursor-pointer w-full p-2 text-center text-black font-semibold hover:text-white">
                Produtos
              </li>
              <li className="cursor-pointer w-full p-2 text-center text-black font-semibold hover:text-white">
                Contatos
              </li>
            </ul>
          </nav>
        </header>
        <div className=" absolute top-[330px] mx-6 flex flex-col items-center gap-6  ">
          <h1 className="text-7xl font-bold">Seu Carro, Como Novo!</h1>

          <p className="text-xl text-semibold text-center">
            Descubra a diferença que um polimento profissional pode fazer.
            deixe-nos cuidar do seu automovel com os melhores serviços de
            limpeza e tratamento para veiculos.
          </p>

          <div className="w-full flex justify-around">
            <div className="w-[110px] h-[90px] flex flex-col items-center justify-center border-none bg-[#03624c] rounded-md">
              <img src={IconSpray} alt="imgSpray" />
              <p className="text-xs font-medium text-center text-[#f1f7f7]">
                Polimento
              </p>
            </div>

            <div className="w-[110px] h-[90px] flex flex-col items-center justify-center border-none bg-[#03624c] rounded-md">
              <img src={IconBroom} alt="imgBroom" />
              <p className="text-xs text-center  text-[#f1f7f7] font-medium">
                Limpeza interna/externa
              </p>
            </div>

            <div className="w-[110px] h-[90px] flex flex-col items-center justify-center border-none bg-[#03624c] rounded-md">
              <img src={IconWind} alt="imgWind" />
              <p className="text-xs text-center text-[#f1f7f7] font-medium">
                Limpeza de ar-condicionado
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button>Agende um horário</Button>
            <button className="bg-transparent border-2 border-[#042222] px-[16px] py-[12px] font-bold rounded-md text-[#042222] cursor-pointer scale-1">
              Saiba mais
            </button>
          </div>
        </div>
      </section>

      <section className="h-full px-6 pb-3 flex flex-col gap-6">
        <div>
          <h2 className="text-bold text-5xl mt-30 mb-[16px]">Sobre nós</h2>
          <p className="mb-[20px] text-justify">
            No Centro de Estética Automotiva, cada carro que passa por nossas
            mãos carrega uma história, e nossa missão é fazer com que essa
            história brilhe. Não estamos aqui apenas para limpar e polir;
            estamos aqui para celebrar a paixão por veículos impecáveis,
            transformar cada detalhe e devolver a cada automóvel o respeito que
            ele merece. <br /> <br />
            Com mais de uma década de experiência no mercado, nosso amor por
            carros nos impulsiona a superar expectativas. Cada membro de nossa
            equipe é mais do que um profissional; são verdadeiros entusiastas,
            comprometidos em elevar a estética automotiva a um nível de
            excelência que só é possível com dedicação, conhecimento e, acima de
            tudo, paixão. Quando entregamos um veículo, entregamos mais do que
            um serviço — entregamos uma experiência de confiança, excelência e
            satisfação. Esses são os pilares que nos guiam em cada serviço que
            realizamos. Porque, para nós, não se trata apenas de carros;
            trata-se de fazer o seu carro brilhar tanto quanto o dia em que você
            o viu pela primeira vez.
          </p>
          <p className="text-justify">
            Agora que você conhece o cuidado e a paixão que colocamos em cada
            detalhe, está na hora de experimentar a diferença. Deixe seu carro
            nas mãos de quem realmente entende e valoriza cada centímetro dele.
            Seja para um polimento impecável ou uma limpeza profunda, estamos
            prontos para transformar o seu veículo. Agende agora mesmo e
            descubra porque somos o Centro de Estética Automotiva preferido
            pelos amantes de carros!
          </p>
        </div>

        <Button>Agende seu serviço agora !</Button>
        <img src={ImageGroup} alt="ImageGroup" />
      </section>

      <BulletList />
      <ServicesProducts />

      <h2 className="font-bold text-2xl flex items-center justify-center! pb-2.5">
        Agende agora!
      </h2>
      <p className="text-center text-sm px-5 pb-4">
        Não perca tempo em filas ou com longas esperas. Agende de onde estiver,
        no seu tempo, com total flexibilidade.
      </p>
      <div className="flex justify-center w-full pb-4">
        <Button className="flex items-center justify-center gap-1 hover:bg-green-400">
          Agende diretamente via WhatsApp <img src={Whatsap} alt="LogoWhats" />
        </Button>
      </div>

      <Footer />
    </div>
  );
}
