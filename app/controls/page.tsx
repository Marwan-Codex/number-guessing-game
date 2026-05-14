import { JSX } from "react";
import styles from "./page.module.css";
import { 
  parentVariants, itemVariants, MotionLink, 
  MotionDiv, MotionMain, MotionH1, MotionP, MotionSpan, MotionSection, MotionH6, MotionFooter, 
  MotionA
} from "../exports";

export default function Controls(): JSX.Element {
  return (
    <MotionDiv className={styles.page}>
      <MotionLink 
        href={"../"}
        className={styles.home}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >Home</MotionLink>
      <MotionMain
        className={styles.main}
        variants={parentVariants}
        initial="hidden"
        animate="visible"
      >
        <MotionSection className={styles.controls_div} variants={itemVariants}>
          <MotionH1 className={styles.controls_title} variants={itemVariants}>Controls:</MotionH1>
          <MotionDiv className={styles.main_para} variants={itemVariants}>
            <MotionP className={styles.key_info_para} variants={itemVariants}>
              <MotionSpan className={styles.btn_txt}>ESC</MotionSpan>
              <MotionSpan className={styles.info_txt}> =&gt; Exit Button</MotionSpan>
            </MotionP>
            <MotionP className={styles.key_info_para} variants={itemVariants}>
                <MotionSpan className={styles.btn_txt}>Enter</MotionSpan>
                <MotionSpan className={styles.info_txt}> =&gt; Submit Button</MotionSpan>
            </MotionP>
            <MotionP className={styles.key_info_para} variants={itemVariants}>
                <MotionSpan className={styles.btn_txt}>Ctrl + R</MotionSpan>
                <MotionSpan className={styles.info_txt}> =&gt; Refresh Page (If There Is Any Error)</MotionSpan>
            </MotionP>
          </MotionDiv>
        </MotionSection>
        <MotionSection className={styles.controls_div} variants={itemVariants}>
          <MotionH1 className={styles.controls_title} variants={itemVariants}>Document:</MotionH1>
          <MotionDiv className={styles.main_para} variants={itemVariants}>
            <MotionP className={styles.doc_para} variants={itemVariants}>
              <MotionH6 className={`${styles.bold} ${styles.doc_heading}`} variants={itemVariants}>Warning:</MotionH6>
              <MotionP className={styles.doc_info} variants={itemVariants}>
                This Website Saves The Data in Your Browser&apos;s Local Storage, So If You Clear Your Browser Data or Use Incognito Mode or Entered The Website in Another Browser or Device You Will Not Find Your Data (You Can Find it in Your Browser if You Don&apos;t Delete Your Browser Data)
              </MotionP>
            </MotionP>
          </MotionDiv>
        </MotionSection>
        <MotionSection className={styles.controls_div} variants={itemVariants}>
          <MotionH1 className={styles.controls_title} variants={itemVariants}>News Feed</MotionH1>
          <MotionDiv className={`${styles.main_para} ${styles.list_before_div}`} variants={itemVariants}>
            <MotionP className={styles.doc_info} variants={itemVariants}>
              We Will Change Our Domain From <MotionA className={styles.news_link} href="https://number-guessing-game-void.vercel.app" target="_blank">number-guessing-game-void.vercel.app</MotionA> To <MotionA className={styles.news_link} href="https://ngg-void.vercel.app" target="_blank">ngg-void.vercel.app</MotionA>, The <MotionSpan className={styles.bold}>DeadLine</MotionSpan> is <MotionSpan className={styles.bold}>1/6...</MotionSpan>, And Also All Data Deleted 😅
            </MotionP>
          </MotionDiv>
        </MotionSection>
      </MotionMain>
      <MotionFooter
        className={styles.footer}
        variants={parentVariants}
        initial="hidden"
        animate="visible"
      >
        <MotionP
          className={styles.copyright_para} variants={itemVariants}
        >&copy; 2026 - {new Date().getFullYear()} Marwan Void</MotionP>
      </MotionFooter>
    </MotionDiv>
  );
}
