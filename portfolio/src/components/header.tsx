import Image from "next/image";
import myPhoto from "../app/assets/images/myPhoto.svg";

export default function Header() {
    return (
        <header className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-center p-4">
            <Image
                src={myPhoto}
                alt="Foto de Matheus Gabriel"
                width={300}
                priority
                className="mb-4 sm:mb-0 sm:mr-6 w-32 sm:w-40 md:w-48 lg:w-60"
            />
            <div className="text-center sm:text-left max-w-md">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    Matheus Gabriel
                </h1>
                <p className="text-gray-500 mt-2 text-sm sm:text-base md:text-lg">
                    Técnico em Desenvolvimento de Sistemas | Front-End Developer | Estágio | UI Design | Apaixonado por Robótica e Inovação
                </p>
            </div>
        </header>
    );
}
