import CardCertification from "./cardCertification"
import CLIcon from "../app/assets/icons/CyberLeader.png";
import JavaIcon from "../app/assets/icons/Java.png";
import MOSIcon from "../app/assets/icons/MOS.png";
import PythonIcon from "../app/assets/icons/PYT.png";
import PowerBIIcon from "../app/assets/icons/PowerBI.png";

export default function Certifications() {
    return (
        <div className="flex flex-col items-start justify-center gap-8 mt-8">
            <h2 className="font-bold text-3xl">Certificações</h2>
            <section className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
                <CardCertification
                    src={MOSIcon}
                    alt="Microsoft Office Specialist: Excel Associate (Office 2019)"
                    content="Microsoft Office Specialist: Excel Associate (Office 2019)"
                />
                <CardCertification
                    src={PythonIcon}
                    alt="Python Essentials 1"
                    content="Python Essentials 1"
                />
                <CardCertification
                    src={JavaIcon}
                    alt="Programação em Java pela Escola SENAI “Conde José Vicente Azevedo”"
                    content="Programação em Java pela Escola SENAI “Conde José Vicente Azevedo”"
                />
                <CardCertification
                    src={PowerBIIcon}
                    alt="Power BI pela Escola SENAI “Conde José Vicente Azevedo”"
                    content="Power BI pela Escola SENAI “Conde José Vicente Azevedo”"
                />
                <CardCertification
                    src={CLIcon}
                    alt="Proficiência na utilização do Microsoft Office 365 pelo programa Cyber Leader SESI"
                    content="Proficiência na utilização do Microsoft Office 365 pelo programa Cyber Leader SESI"
                />
            </section>
        </div>
    )
}