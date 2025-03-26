import { useState } from "react";

import { Button } from "../componet/Button";
import { BulletList } from "../context/BulletList";

import ImageHero from "../assets/hero.svg";
import ImageLogo from "../assets/logo.svg";
import ImageGroup from "../assets/Group 2.svg";

import IconSpray from "../assets/SprayBottle.svg";
import IconWind from "../assets/Wind.svg";
import IconBroom from "../assets/Broom.svg";

export function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="">
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
        <div className=" absolute bottom-[30px] mx-6 flex flex-col items-center gap-6  ">
          
          <h1 className="text-7xl font-bold">Seu Carro, Como Novo!</h1>
      
          <p className="text-xl text-semibold text-center">
            Descubra a diferença que um polimento profissional pode fazer.
            deixe-nos cuidar do seu automovel com os melhores serviços de limpeza
            e tratamento para veiculos.
          </p>

            <div className="w-full flex justify-around">
              <div className="w-[110px] h-[90px] flex flex-col items-center justify-center border-none bg-[#03624c] rounded-md">
                <img src={IconSpray} alt="imgSpray" />
                <p className="text-xs font-medium text-center text-[#f1f7f7]">Polimento</p>
              </div>

              <div className="w-[110px] h-[90px] flex flex-col items-center justify-center border-none bg-[#03624c] rounded-md">
                <img src={IconBroom} alt="imgBroom" />
                <p className="text-xs text-center  text-[#f1f7f7] font-medium">Limpeza interna/externa</p>
              </div>

              <div className="w-[110px] h-[90px] flex flex-col items-center justify-center border-none bg-[#03624c] rounded-md">
                <img src={IconWind} alt="imgWind" />
                <p className="text-xs text-center text-[#f1f7f7] font-medium">Limpeza de ar-condicionado</p>
              </div>
            </div>

          <div className="flex gap-4">
            <Button className="">Agende um horário</Button>
            <button className="bg-transparent border-2 border-[#042222] px-[16px] py-[12px] font-bold rounded-md text-[#042222] cursor-pointer scale-1">Saiba mais</button>
          </div>
        </div>
      </section>

      <section className="h-screen px-[24px] flex flex-col gap-[24px]">
        <div>
          <h2 className="text-bold text-5xl mt-10 mb-[16px]">
            Sobre nós
          </h2>
          <p className="mb-[20px] text-justify">
            No Centro de Estética Automotiva, cada carro que
            passa por nossas mãos carrega uma história, e nossa
            missão é fazer com que essa história brilhe. Não
            estamos aqui apenas para limpar e polir; estamos
            aqui para celebrar a paixão por veículos impecáveis,
            transformar cada detalhe e devolver a cada automóvel
            o respeito que ele merece. <br /> <br />
            Com mais de uma década de experiência no mercado,
            nosso amor por carros nos impulsiona a superar expectativas.
            Cada membro de nossa equipe é mais do que um profissional;
            são verdadeiros entusiastas, comprometidos em elevar a
            estética automotiva a um nível de excelência que só é possível
            com dedicação, conhecimento e, acima de tudo, paixão.
            Quando entregamos um veículo, entregamos mais do que um
            serviço — entregamos uma experiência de confiança, excelência e satisfação.
            Esses são os pilares que nos guiam em cada serviço que realizamos. Porque,
            para nós, não se trata apenas de carros; trata-se de fazer o seu carro brilhar
            tanto quanto o dia em que você o viu pela primeira vez.
          </p>
          <p className="text-justify">
            Agora que você conhece o cuidado e a paixão que colocamos em cada detalhe,
            está na hora de experimentar a diferença. Deixe seu carro nas mãos de quem
            realmente entende e valoriza cada centímetro dele. Seja para um polimento
            impecável ou uma limpeza profunda, estamos prontos para transformar o
            seu veículo. Agende agora mesmo e descubra porque somos o Centro de
            Estética Automotiva preferido pelos amantes de carros!
          </p>
        </div>

        <Button>Agende seu serviço agora !</Button>

             {/* Logo  <img src={ImageGroup} alt="ImageGroup" />*/}

      </section>

      <BulletList 
        title="Nossos Serviços"
        items={[
          {          
            title: "Escolha o Serviço Ideal para o Seu Veículo",
            description:
              "Visite nossa página ou entre em contato conosco diretamente para conhecer todos os serviços que oferecemos, como polimento, limpeza interna/externa ou higienização de ar-condicionado",
          },
          {       
            title: "Agendamento Simples e Rápido",
            description:
              "Assim que escolher o serviço desejado, você pode agendar de forma fácil, preenchendo o formulário no site ou fale conosco diretamente pelo whatsapp.",
          },
          {
            title: "Serviço Realizado com Excelência",
            description:
              "Nossos profissionais qualificados realizarão o serviço com máxima qualidade e atenção aos detalhes, garantindo sua total satisfação.",
          },
        ]}
      />
    </div>
  );
}