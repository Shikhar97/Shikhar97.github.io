import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Project from "@/components/Project";
import ProjectGrid from "@/components/ProjectGrid";
import styles from "./Projects.module.css";
import PROJECTS from "@/data/projects.json";
import { ConstrainedTitle } from "@/components/SectionTitle";

const Projects: React.FC = () => {
  return (
    <div className={styles.projects} id="projects">
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Things I&apos;ve Built</ConstrainedTitle>
        <div className={styles.projectList}>
          <Project project={PROJECTS[0]} side="right" />
          <Project project={PROJECTS[1]} side="left" />
        </div>
      </MaxWidthWrapper>
      <ProjectGrid projects={PROJECTS.slice(2)} />
    </div>
  );
};

export default Projects;
