import Header from "@/components/header";
import AboutMe from "@/components/aboutMe";
import Certifications from "@/components/certifications";
import Projetos from "@/components/cardProjects";
import Contacts from "@/components/contacts";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="flex flex-col items-start justify-center m-auto mb-8 gap-8 w-max mt-8">
        <AboutMe />
        <Certifications />
        <Projetos />
      </div>
      <Contacts />
    </div>
  );
}
