import { ConstrainedTitle } from "@/components/SectionTitle";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "./Experiences.module.css";
import Image from "next/image";

const Experiences: React.FC = () => {
  return (
    <div className={styles.experiences}>
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Experiences</ConstrainedTitle>
        <div className={styles.items}>
          <div className={styles.timeline}/>
          <div className={styles.item}>
            <Image
                className={styles.image}
                height={100}
                width={100}
                src="/images/asu-small.jpeg"
                alt="ASU"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <Image
                  height={100}
                  width={100}
                  className={styles.mobileImage}
                  src="/images/asu-small.jpeg"
                  alt="ASU"
              ></Image>
              <p className={styles.time}>Aug 2023 - May 2024</p>
              <h4 className={styles.company}>ASU School of Community Resources and Development</h4>
              <h4 className={styles.role}>Front End Engineer</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Leading the development of a dashboard using React.js to provide a comprehensive
                view of climate and community,
                empowering users to build resilience and leverage actionable insights.<br></br>
                ⦿ &nbsp; &nbsp; Designing an interface featuring a GIS-based mapping and analytics tool using
                Leaflet with visualizations using D3.js.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <Image
                height={100}
                width={100}
                className={styles.image}
                src="/images/aruba.jpeg"
                alt="Aruba Networks"
            ></Image>
            <div className={styles.connector}/>
            <div className={styles.infos}>
              <div className={styles.bullet}>
                <div className={styles.dotPrimary}>
                  <div className={styles.dotCore}/>
                </div>
                <div className={styles.info}>
                  <Image
                      className={styles.mobileImage}
                      height={100}
                      width={100}
                      src="/images/aruba.jpeg"
                      alt="Aruba Networks"
                  ></Image>
                  <p className={styles.time}>May 2021 - July 2022</p>
                  <h4 className={styles.company}>Aruba Networks</h4>
                  <h4 className={styles.role}>Senior Software Engineer</h4>
                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Led the development of a cross-platform testing solution using Python for a network security
                    compliance tool, improving
                    end-to-end testing efficiency and reducing resource requirements by 80%.<br/><br/>
                    ⦿ &nbsp; &nbsp; Engineered an innovative Golang-based solution for deploying virtual machines across ESXi,
                    Hyper-V, KVM, AWS, and Azure, resulting in a 60% efficiency boost and streamlined process.<br/><br/>
                    ⦿ &nbsp; &nbsp; Crafted a comprehensive solution using Python to detect vulnerabilities across product code
                    databases, ensuring robustness in software development practices resulting in a 15% reduction in
                    potential security risks.<br/>
                  </p>
                </div>
              </div>
              <div className={styles.bullet}>
                <div className={styles.dotSecondary}>
                  <div className={styles.dotCore}/>
                </div>
                <div className={styles.info}>
                  <p className={styles.time}>July 2019 - April 2021</p>
                  <h4 className={styles.role}>Software Engineer</h4>
                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Contributed to the development of a multi-threaded RESTApi Load Testing tool utilizing Jmeter,
                    leading to a 10%
                    improvement in product performance.<br/><br/>
                    ⦿ &nbsp; &nbsp; Revamped monitoring and logging for a microservice-based architecture with Logstash, Kibana,
                    Filebeat, Grafana, and InfluxDB, boosting performance visibility and cutting troubleshooting time by 50%.<br/>
                  </p>
                </div>
              </div>

              <div className={styles.bullet}>
                <div className={styles.dotSecondary}>
                  <div className={styles.dotCore}/>
                </div>
                <div className={styles.info}>
                  <p className={styles.time}>Jan 2019 - Jun 2019</p>
                  <h4 className={styles.role}>Software Engineer Intern</h4>

                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Developed a Python-based automated UI testing solution using OpenCV, resulting in a 50% reduction in QA workload.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <Image
                className={styles.image}
                height={100}
                width={100}
                src="/images/stylumia.jpeg"
                alt="Stylumia"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <Image
                  className={styles.mobileImage}
                  height={100}
                  width={100}
                  src="/images/stylumia.jpeg"
                  alt="Stylumia"
              />
              <p className={styles.time}>Jun 2018 - Aug 2018</p>
              <h4 className={styles.company}>Stylumia</h4>
              <h4 className={styles.role}>
                Machine Learning Intern
              </h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Crafted a machine learning model for product classification and integrated it with
                a search bar, resulting in a 10% improvement in search efficiency.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Experiences;
