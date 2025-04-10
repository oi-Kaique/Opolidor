// Componente BulletList
import { Button } from "../components/Button";
export function BulletList() {
  return (
    <div className="px-4 bg-[#03624C] rounded py-4 space-y-8 xl:px-[250px] xl:py-[50px]">
      <h2 className="font-bold text-6xl text-white text-center">
        Como Funciona
      </h2>
      <ul>
        <li className="relative h-full after:absolute after:top-0 after:w-0.5 after:h-full after:bg-white before:absolute before:z-10 before:-left-1 before:top-1/2 before:-translate-y-1/2 before:bg-white before:size-3 before:rounded-full">
          <div className="p-4 px-8 space-y-2">
            <strong className="text-white block">
              Escolha o Serviço Ideal para o Seu Veículo
            </strong>
            <p className="text-zinc-200">
              Visite nossa página ou entre em contato conosco diretamente para
              conhecer todos os serviços que oferecemos, como polimento, limpeza
              interna/externa ou higienização de ar-condicionado
            </p>
          </div>
        </li>
        <li className="relative h-full after:absolute after:top-0 after:w-0.5 after:h-full after:bg-white before:absolute before:z-10 before:-left-1 before:top-1/2 before:-translate-y-1/2 before:bg-white before:size-3 before:rounded-full">
          <div className="p-4 px-8 space-y-2">
            <strong className="text-white block">
              Agendamento Simples e Rápido
            </strong>
            <p className="text-zinc-200">
              Assim que escolher o serviço desejado, você pode agendar de forma
              fácil, preenchendo o formulário no site ou fale conosco
              diretamente pelo whatsapp.
            </p>
          </div>
        </li>
        <li className="relative h-full after:absolute after:top-0 after:w-0.5 after:h-full after:bg-white before:absolute before:z-10 before:-left-1 before:top-1/2 before:-translate-y-1/2 before:bg-white before:size-3 before:rounded-full">
          <div className="p-4 px-8 space-y-2">
            <strong className="text-white block">
              Chegada ao Local ou Solicitação de Coleta
            </strong>
            <p className="text-zinc-200">
              Leve seu carro ao nosso centro: Chegue no horário agendado e nossa
              equipe já estará pronta para iniciar o serviço. Solicitação de
              coleta (opcional): Se preferir, também oferecemos a opção de
              buscar o seu veículo no local combinado (residência ou trabalho) e
              levá-lo de volta após a conclusão dos serviços. Tudo com segurança
              e praticidade.
            </p>
          </div>
        </li>
        <li className="relative h-full after:absolute after:top-0 after:w-0.5 after:h-full after:bg-white before:absolute before:z-10 before:-left-1 before:top-1/2 before:-translate-y-1/2 before:bg-white before:size-3 before:rounded-full">
          <div className="p-4 px-8 space-y-2">
            <strong className="text-white block">Execução do Serviço</strong>
            <p className="text-zinc-200">
              Nosso time de profissionais qualificados se encarrega de cada
              detalhe. O processo é executado com produtos de alta qualidade e
              técnicas especializadas para garantir o melhor resultado. Nosso
              objetivo é deixar seu carro brilhando e como novo.
            </p>
          </div>
        </li>
        <li className="relative h-full after:absolute after:top-0 after:w-0.5 after:h-full after:bg-white before:absolute before:z-10 before:-left-1 before:top-1/2 before:-translate-y-1/2 before:bg-white before:size-3 before:rounded-full">
          <div className="p-4 px-8 space-y-2">
            <strong className="text-white block">
              Revisão e Entrega do Veículo
            </strong>
            <p className="text-zinc-200">
              Após o término do serviço, faremos uma revisão completa para
              garantir que tudo foi feito com perfeição. Se você estiver no
              local, poderá fazer uma inspeção final. No caso de coleta,
              devolvemos o veículo no horário e local combinados, com a garantia
              de um serviço impecável.
            </p>
          </div>
        </li>
        <li className="relative h-full after:absolute after:top-0 after:w-0.5 after:h-full after:bg-white before:absolute before:z-10 before:-left-1 before:top-1/2 before:-translate-y-1/2 before:bg-white before:size-3 before:rounded-full">
          <div className="p-4 px-8 space-y-2">
            <strong className="text-white block">
              Pagamento e Satisfação Garantida
            </strong>
            <p className="text-zinc-200">
              Você poderá realizar o pagamento de forma segura, seja online ou
              presencialmente, com diversas opções disponíveis. Garantimos a sua
              satisfação com nosso trabalho e, se por algum motivo você não
              estiver 100% satisfeito, nossa equipe está pronta para resolver
              qualquer questão
            </p>
          </div>
        </li>
      </ul>
      <h3 className="font-bold text-white text-2xl">
        É isso! Agora é só agendar e aproveitar um serviço de limpeza automotiva
        de excelência!
      </h3>
      <div className="flex justify-center">
        <a
          href={`https://wa.me/5574981079263?text=${encodeURIComponent(
            "Gostaria de fazer um agendamento de limpeza automotiva. Poderia me ajudar?"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Solicitar serviço</Button>
        </a>
      </div>
    </div>
  );
}
