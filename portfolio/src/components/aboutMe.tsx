import Image from "next/image";
import DDI from "../app/assets/images/DDi.jpeg";
import MK from "../app/assets/images/MakerZone.jpeg";
import TCC from "../app/assets/images/TCC.jpeg";

export default function AboutMe() {
  let width = 400;

  return (
    <section className="flex flex-col items-center justify-center w-full gap-8 md:justify-items-center md:items-center lg:flex-row lg:justify-between lg:items-stretch">
      <div className="flex flex-col max-w-md text-gray-500">
        <p className="text-lg text-justify">
          Olá! Sou Matheus Gabriel, técnico em Análise e Desenvolvimento de
          Sistemas, com experiência em robótica, desenvolvimento web e ensino
          tecnológico. Ao longo da minha trajetória, participei de competições
          de robótica, desenvolvi protótipos inovadores em espaços makers e
          criei interfaces web modernas que priorizam a experiência do usuário.
        </p>
        <p className="text-lg text-justify mt-4">
          Já conduzi oficinas práticas sobre Arduino e prototipação,
          apresentando tecnologia de forma acessível para novos públicos. Também
          tenho experiência em projetos integrados, como sistemas web com
          back-end em Spring Boot e integração com APIs. Esses desafios me
          ajudaram a aprimorar habilidades técnicas e trabalhar em equipe para
          alcançar resultados impactantes.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Image
          src={MK}
          alt="Foto do Maker Zone"
          width={width}
          className="object-cover h-56"
        />
        <Image
          src={TCC}
          alt="Foto do TCC"
          width={width}
          className="object-cover h-56"
        />
        <Image
          src={DDI}
          alt="Foto da equipe do Desafio de Ideias"
          width={width}
          className="object-cover h-56"
        />
      </div>
    </section>
  );
}
