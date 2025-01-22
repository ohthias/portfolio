import Image, { StaticImageData } from "next/image";

interface CardCertificationProps {
    src: string | StaticImageData;
    alt: string;
    content: string;
}

export default function CardCertification({ src, alt, content }: CardCertificationProps) {
    return (
        <div className="flex flex-col items-center justify-start w-28">
            <Image
                src={src}
                alt={alt}
                width={100}
                height={100}
                className="object-contain w-24 h-24"
            />
            <p className="text-xs text-center text-gray-500 mt-4">{content}</p>
        </div>
    );
}
