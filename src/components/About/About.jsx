import styles from "./about.module.css";
import utilClasses from "../../assets/utilstyles/utilClasses.module.css";
export default function About() {
  return (
    <div className={styles.about}>
      <div>
        <h3 className={`${utilClasses.primarySectionHeader}`}>About Me</h3>
        <div className={styles.aboutData}>
          <div>
            <p>Welcome to my world of photography!</p>
            <p>
              I&apos;m Gregory Hayes, a passionate photographer with a deep love
              for capturing the beauty of the world through my lens.
            </p>
            <p>
              Photography has been an integral part of my life for as long as I
              can remember, and it has allowed me to see the extraordinary in
              the ordinary.
            </p>
          </div>
          <img src="https://framerusercontent.com/images/MCPRcD3Iq2aXbe2rP653ZeVypBY.jpg?scale-down-to=4096" />
        </div>
      </div>
    </div>
  );
}
