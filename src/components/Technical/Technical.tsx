"use client";
import { useState } from "react";
import { DesktopTitle, MobileTitle } from "@/components/SectionTitle";
import SKILLS from "@/data/skills.json";
import styles from "./Technical.module.css";
import clsx from "clsx";

const Technical: React.FC = () => {
  const sortedSkills = SKILLS.sort((a, b) => b.level - a.level);
  const [active, setActive] = useState(0);
  const activeSkill = sortedSkills[active];

  const Stars = [];
  for (let i = 0; i < activeSkill.level; i++) {
    Stars.push(<div className={styles.star} key={i} />);
  }

  for (let i = 0; i < 5 - activeSkill.level; i++) {
    Stars.push(<div className={clsx(styles.star, styles.empty)} key={i} />);
  }

  return (
    <div className={styles.technical}>
      <div className={styles.display}>
        <h3 className={styles.title}>{activeSkill.name}</h3>
        <p className={styles.content}>{activeSkill.content}</p>
        <div className={styles.level}>{Stars}</div>
      </div>

      <div className={styles.skillList}>
        <DesktopTitle className={clsx(styles.technicalTitle)} side="left">
          Technical Skills
        </DesktopTitle>
        <MobileTitle className={clsx(styles.technicalTitle)} side="right">
          Technical Skills
        </MobileTitle>

        <ul className={styles.options}>
          {sortedSkills.map((skill, index) => (
            <li
              className={clsx(styles.option, active === index && styles.active)}
              key={skill.name}
              onMouseEnter={() => setActive(index)}
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Technical;
