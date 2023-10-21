import React from "react";
import styles from './Home.module.css'
import Headers from "./Components/Header/Headers";
import Taskbar from "./Components/Taskbar/Taskbar";
import Content from "./Components/Content/Content";

function Home() {
    return (
        <>
        <div className={styles.Home}><Headers /></div>
        <div className={styles.border}>
            <div className={styles.Taskbar}><Taskbar /></div>
            <div className={styles.Content}><Content /></div>
        </div>
        </>
    );
}

export default Home;