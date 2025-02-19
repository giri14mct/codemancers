import { Metadata } from 'next'
import { clients } from '../../data/clients'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Some of our clients',
}

const ClientCard = () => {
  return (
    <div className="mt-16">
      {clients.map((client, index) => (
        <div
          key={index}
          className="to-gray-10 mb-8 flex flex-wrap items-start gap-8 overflow-hidden rounded-2xl border border-solid border-neutral-200 bg-gradient-to-br from-white p-8 max-md:px-5"
        >
          <header className="flex w-full flex-col items-center justify-center text-center text-base whitespace-nowrap uppercase md:w-7.75">
            <span className={client.logo}></span>
            <h1 className="text-custom-gray mt-1">{client.name}</h1>
          </header>

          <div className="flex min-w-60 flex-1 shrink basis-0 flex-col items-start gap-8">
            {client.requirements && (
              <div className="w-full">
                <h2 className="text-custom-gray text-xl leading-8 font-semibold">
                  Requirements:
                </h2>
                <p className="text-gray-70 mt-4 text-base leading-6">
                  {client.requirements}
                </p>
              </div>
            )}

            <div className="w-full">
              <h2 className="text-custom-gray text-xl leading-8 font-semibold">
                How we helped:
              </h2>
              <p className="text-gray-70 mt-4 text-base leading-6">
                {client.description}
              </p>
            </div>

            <div className="w-full">
              <h2 className="text-custom-gray text-xl leading-8 font-semibold">
                Tech used:
              </h2>
              <ul className="mt-4 flex w-full flex-wrap gap-4 text-base whitespace-nowrap text-black">
                {client.techUsed.map((tech, i) => (
                  <li key={i} className="flex h-full items-center gap-1">
                    <span className={tech.logo}></span>
                    <span className="text-custom-gray my-auto self-stretch">
                      {tech.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ClientCard
