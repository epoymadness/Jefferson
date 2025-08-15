import Projector from "./Projector";

export default function Projects() {
  const projects = [
    {
      title: "CAFESHOP",
      description:
        "I've always dreamed of owning a café—specifically, one designed for introverts. The idea came to me while I was ordering at a café one day. I always feel a bit uncomfortable standing in front of the cashier, and that sparked something.",
      link: "https://github.com/epoymadness/cafeshop",
    },
    {
      title: "FILMSTACK",
      description:
        "It's a Letterboxd alternative where I log the movies I've recently watched, rate them, and share my thoughts. Such a wonderful creation of mine.",
      link: "https://epoymadness.github.io/Filmstack/",
    },
    {
      title: "MULTIPLAYCATION",
      description:
        "My first commissioned project — a simple, kid-friendly multiplication game that helps children practice math through fun and interactive problems. Clean, easy to use, and built with learning in mind.",
      link: "https://epoymadness.github.io/multiplaycation/",
    },
    {
      title: "MY PORTFOLIO",
      description:
        "This portfolio is a showcase of my skills and projects, built with React and Tailwind CSS. It features a clean design, responsive layout, and easy navigation to highlight my work effectively.",
      link: "https://epoymadness.github.io/Jefferson/",
    },
  ];

  return (
    <div className="h-max w-3/4 flex flex-col  items-center justify-start md:h-min  md:justify-between ">
      {/*project1*/}
      <div className="md:w-full md:h-max md:flex md:flex-row md:justify-evenly md:flex-wrap gap-6">
        {projects.map((project) => (
          <Projector
            title={project.title}
            description={project.description}
            link={project.link}
            key={project.title} // Using title as a unique key for simplicity
          />
        ))}
      </div>
    </div>
  );
}
