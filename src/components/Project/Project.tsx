import { IconLink } from "@/components/Socials";
import styles from "./Project.module.css";
import clsx from "clsx";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoOpen } from "react-icons/io5";
export interface IProject {
  name: string;
  techs: string[];
  description: string;
  github: string;
  website: string;
  imgSrc: string;
  type: string;
}

export interface IProps {
  project: IProject;
  side: "left" | "right";
}

const Project: React.FC<IProps> = ({ project, side, ...delegated }) => {
  return (
    <div className={clsx(styles.project, styles[side])} {...delegated}>
      <div className={styles.stretch}>
        <a href={project.website}>
          <Image
            className={styles.tiltingImage}
            src={project.imgSrc}
            alt={project.name}
            width={400}
            height={200}
          />
        </a>
        <Image
          width={100}
          height={100}
          className={styles.staticImage}
          src={project.imgSrc}
          alt={project.name}
        />
      </div>

      <div className={clsx(styles.info, styles[side])}>
        <h4 className={clsx(styles.feature, styles[side])}>{project.type}</h4>
        <h4 className={clsx(styles.name, styles[side])}>{project.name}</h4>
        <h4 className={clsx(styles.description, styles[side])}>
          {project.description}
        </h4>
        <ul className={clsx(styles.techs, styles[side])}>
          {project.techs.map((tech, idx) => (
            <li className={styles.tech} key={tech}>
              {tech}
            </li>
          ))}
        </ul>
        <ul className={clsx(styles.links, styles[side])}>
          {project.github.length > 0 && (
            <IconLink href={project.github} target="_blank">
              <FaGithub size={32} />
            </IconLink>
          )}
          {project.website.length > 0 && (
          <IconLink href={project.website} target="_blank">
            <IoOpen size={32} />
          </IconLink>
              )}
        </ul>
      </div>
    </div>
  );
};

export default Project;
