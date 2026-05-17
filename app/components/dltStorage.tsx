'use client';
import { JSX, useRef } from "react";
import styles from "../controls/page.module.css";
import { itemVariants, MotionBtn, MotionDiv } from "../exports";

export default function DltStorageComp(): JSX.Element {
    const mainDialog = useRef<HTMLDialogElement>(null);

    function dltData(): void {
        localStorage.clear();
        mainDialog.current?.close();
    }

    return (
        <MotionDiv variants={itemVariants} className={styles.doc_info}>
            <MotionBtn 
                className={styles.danger_btn} 
                onClick={() => mainDialog.current?.showModal()}
                whileTap={{ scale: 0.8 }}
            >Delete All Scores</MotionBtn>
            <dialog ref={mainDialog} className={styles.dialog}>
                <div className={styles.flex_center}>
                    <h1> Are You Sure Deleting All Your Scores</h1>
                    <button 
                        className={`${styles.dialog_btn} ${styles.yes}`}
                        onClick={dltData}
                    >Yes</button>
                    <button 
                        className={styles.dialog_btn}
                        onClick={() => mainDialog.current?.close()}
                    >No</button>
                </div>
            </dialog>
        </MotionDiv>
    )
}