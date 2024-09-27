import { PropsWithChildren } from "react";

interface FeaturedProjectProps {
  title: string;
  src: string;
  alt: string;
  links: string[][];
}

export default function FeaturedProject(props: PropsWithChildren<FeaturedProjectProps>) {
  return (
    <div className="flex flex-row gap-8 flex-wrap align-middle justify-center">
      <img src={props.src} alt={props.alt} className="object-cover aspect-project-thumbnail w-60 rounded-lg shadow-lg hover:scale-105 transition-all" />
      <div className="flex flex-col flex-shrink-0 w-80 font-serif text-lg">
        <h2 className="text-3xl mb-4">{props.title}</h2>
        {props.children}
        <div className="flex-grow"></div>
        <div className="flex flex-row gap-4">
          {props.links.map(pair => {
            const [name, url] = pair;
            return (
              <p key={name}><a className="link" href={url} target="_blank">{name}</a></p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
