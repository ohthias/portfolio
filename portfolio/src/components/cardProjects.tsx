import { projetos } from "../app/data/dataProjects.mjs";
import Image, { StaticImageData } from "next/image";

type Projeto = {
    repositorio: string;
    imagem: {
        url: string | StaticImageData;
        alt: string;
    };
    NomeProjeto: string;
    tags: string[];
    descricao: string;
};

interface ProjetoCardProps {
    projeto: Projeto;
}

function CardProjects({ projeto }: ProjetoCardProps) {
    return (
        <a
            href={projeto.repositorio}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-90 transition w-max"
        >
            <div className="bg-gray-200 p-4 rounded-lg shadow-md h-full max-w-md sm:w-80">
                <Image
                    src={projeto.imagem.url}
                    alt={projeto.imagem.alt}
                    className="h-65 sm:h-48 rounded-lg mb-4 object-cover"
                    aria-label={projeto.imagem.alt}
                />
                <h3 className="text-xl font-bold mb-2">{projeto.NomeProjeto}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {projeto.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-yellow-300 text-gray-600 text-xs font-bold py-1 px-3 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-sm text-gray-600">{projeto.descricao}</p>
            </div>
        </a>
    );
};

export default function Projetos() {
    return (
        <div className="flex flex-col items-start justify-center gap-8 w-max mt-8">
            <h2 className="text-3xl font-bold">Projetos</h2>
            <div id="projetos-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-stretch">
                {projetos.map((projeto, index) => (
                    <CardProjects key={index} projeto={projeto} />
                ))}
            </div>
        </div>
    );
};
