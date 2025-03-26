// Tipos
interface BulletItem {
  title: string
  description: string
}

interface BulletListProps {
  title: string
  items: BulletItem[]
  className?: string
}

// Componente BulletList
export function BulletList() {
  return (
    <div className="px-4 xl:px-0 bg-[#03624C] rounded py-4 space-y-8">
      <h2 className="font-bold text-6xl text-white text-center">Como Funciona</h2>
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
            <strong className="text-white block">Agendamento Simples e Rápido</strong>
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
              Serviço Realizado com Excelência
            </strong>
            <p className="text-zinc-200">
              Nossos profissionais qualificados realizarão o serviço com máxima
              qualidade e atenção aos detalhes, garantindo sua total satisfação.
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}