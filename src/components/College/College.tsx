import styles from "./College.module.css";
import Image from "next/image";
import clsx from "clsx";
import Title from "@/components/Title";

export interface IProps {
  degree: string;
  school: string;
  courses: string[];
  start: number;
  end: number;
  gpa: string;
  imgSrc: string;
  side: "left" | "right";
}

const College: React.FC<IProps> = ({
  degree,
  school,
  courses,
  start,
  end,
  gpa,
  imgSrc,
  side,
  ...delegated
}) => {
  const smallImg = imgSrc.replace(".png", "-small.png");

  return (
    <div className={clsx(styles.college, styles[side])} {...delegated}>
      <div className={styles.stretch}>
        <Image
          className={styles.image}
          height={300}
          width={400}
          src={imgSrc}
          alt={school}
        />
      </div>
      <div className={clsx(styles.info, styles[side])}>
        <Image
          className={styles.smallImage}
          src={smallImg}
          alt={school}
          width={300}
          height={400}
        />
        <h4 className={clsx(styles.degree, styles[side])}>{degree}</h4>
        <h4 className={clsx(styles.school, styles[side])}>{school}</h4>
        <ul className={clsx(styles.courses, styles[side])}>
          <Title>Courses</Title>
          {courses.map((course, i) => (
            <li className={styles.course} key={i}>
              {course}
            </li>
          ))}
        </ul>
        <ul className={clsx(styles.data, styles[side])}>
          <p className={styles.time}>
            {start} - {end}
          </p>
          <p className={styles.gpa}>GPA: {gpa}</p>
        </ul>
      </div>
    </div>
  );
};

export default College;
