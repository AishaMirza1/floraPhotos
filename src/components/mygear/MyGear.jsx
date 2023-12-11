import styles from "./mygear.module.css";
import utilClasses from "../../assets/utilstyles/utilClasses.module.css";
import OnScrollRevealAnimation from "../../assets/utilstyles/OnScrollRevealAnimation";
export default function MyGear() {
  return (
    <div className={styles.myGear}>
      <div>
        <OnScrollRevealAnimation>
          {" "}
          <h3 className={`${utilClasses.primarySectionHeader}`}>My Gear</h3>
        </OnScrollRevealAnimation>
        <OnScrollRevealAnimation>
          <div className={styles.myGearData}>
            <div>
              <img src="https://framerusercontent.com/images/lXufyMb8xC4LVOyUZ2TBrXBt8.png" />
              <p>Canon EOS 5D Mark IV.</p>
            </div>
            <div>
              <img src="https://framerusercontent.com/images/nkPrjX4JSl1TGHj4s58FVKs1yCU.png" />
              <p>Canon EOS 90D.</p>
            </div>
            <div>
              <img src="https://framerusercontent.com/images/4uGGTaWbJdqq7rR4Sw9RZbiQ.png" />
              <p>Galaxy S23 Ultra.</p>
            </div>
          </div>
        </OnScrollRevealAnimation>
      </div>
    </div>
  );
}
