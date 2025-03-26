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
export function BulletList({ title, items, className = "" }: BulletListProps) {
  return (
    <div className={`bg-emerald-800 p-8 py-16 rounded-lg shadow-lg ${className}`}>
      <h2 className="text-white text-3xl font-bold text-center mb-12">{title}</h2>

   
      <div className="relative pl-8">
      {items.length > 0 && <div className="absolute  h-full w-0.5 bg-white" />}
        {items.map((item) => (
          <div key={item.title} className="relative pl-8 mb-12 last:mb-0">
            {/* Bullet point */}
            <div className="absolute left-0 top-1.5 w-4 h-4 bg-white rounded-full z-10" />

            {/* Content */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
  )
}




