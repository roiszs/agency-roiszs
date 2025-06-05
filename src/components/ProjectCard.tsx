// src/components/ProjectCard.tsx

interface ProjectCardProps {
    title: string;
    description: string;
    imgSrc?: string;
    link?: string;
  }
  
  export function ProjectCard({
    title,
    description,
    imgSrc,
    link = "#",
  }: ProjectCardProps) {
    return (
      <a
        href={link}
        className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
      >
        {imgSrc && (
          <div className="h-40 w-full overflow-hidden">
            <img
              src={imgSrc}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </a>
    );
  }
  