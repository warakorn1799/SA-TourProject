import React from 'react';
import styles from './ContentPackage.module.css'
import { Layout } from 'antd';

function ContentPackage() {
    const successes = () => {
        window.open("http://localhost:3000/ ", "_self");
    }
    return (
        <div className={styles.content}>
            <div className={styles.package_content}>
                <div className={styles.package_item} >
                    <div>
                        <img className={styles.package_img} src="https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG91cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className={styles.package_name}>ตลาดน้ำดำเนินสะดวก</div>
                    <div className="package-review">
                        <h6>review</h6>
                    </div>
                    <div className="package-price">
                        <h2>3500 ฿</h2>
                    </div>
                </div>
                <div className={styles.package_item}>
                    <div>
                        <img className={styles.package_img} src="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG91cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className={styles.package_name}>เกาะพีพี</div>
                    <div className="package-review">
                        <h6>review</h6>
                    </div>
                    <div className="package-price">
                        <h2>3500 ฿</h2>
                    </div>
                </div>
                <div className={styles.package_item}>
                    <div>
                        <img className={styles.package_img} src="https://images.unsplash.com/photo-1606820854416-439b3305ff39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className={styles.package_name}>ม่อนแจ่ม</div>
                    <div className="package-review">
                        <h6>review</h6>
                    </div>
                    <div className="package-price">
                        <h2>3500 ฿</h2>
                    </div>
                </div>
                <div className={styles.package_item}>
                    <div>
                        <img className={styles.package_img} src="https://images.unsplash.com/photo-1490077476659-095159692ab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className={styles.package_name}>วัดพระแก้ว</div>
                    <div className="package-review">
                        <h6>review</h6>
                    </div>
                    <div className="package-price">
                        <h2>3500 ฿</h2>
                    </div>
                </div>
                <div className={styles.package_item}>
                    <div>
                        <img className={styles.package_img} src="https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG91cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className={styles.package_name}>ตลาดน้ำดำเนินสะดวก</div>
                    <div className="package-review">
                        <h6>review</h6>
                    </div>
                    <div className="package-price">
                        <h2>3500 ฿</h2>
                    </div>
                </div>
                <div className={styles.package_item}>
                    <div>
                        <img className={styles.package_img} src="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG91cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className={styles.package_name}>เกาะพีพี</div>
                    <div className="package-review">
                        <h6>review</h6>
                    </div>
                    <div className="package-price">
                        <h2>3500 ฿</h2>
                    </div>
                </div>
                <div className={styles.package_item}>
                    <div>
                        <img className={styles.package_img} src="https://images.unsplash.com/photo-1606820854416-439b3305ff39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className={styles.package_name}>ม่อนแจ่ม</div>
                    <div className="package-review">
                        <h6>review</h6>
                    </div>
                    <div className="package-price">
                        <h2>3500 ฿</h2>
                    </div>
                </div>
                <div className={styles.package_item}>
                    <div>
                        <img className={styles.package_img} src="https://images.unsplash.com/photo-1490077476659-095159692ab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className={styles.package_name}>วัดพระแก้ว</div>
                    <div className="package-review">
                        <h6>review</h6>
                    </div>
                    <div className="package-price">
                        <h2>3500 ฿</h2>
                    </div>
                </div>
                <div className={styles.package_item}>
                    <div>
                        <img className={styles.package_img} src="https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG91cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className={styles.package_name}>ตลาดน้ำดำเนินสะดวก</div>
                    <div className="package-review">
                        <h6>review</h6>
                    </div>
                    <div className="package-price">
                        <h2>3500 ฿</h2>
                    </div>
                </div>
                <div className={styles.package_item}>
                    <div>
                        <img className={styles.package_img} src="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG91cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className={styles.package_name}>เกาะพีพี</div>
                    <div className="package-review">
                        <h6>review</h6>
                    </div>
                    <div className="package-price">
                        <h2>3500 ฿</h2>
                    </div>
                </div>
                <div className={styles.package_item}>
                    <div>
                        <img className={styles.package_img} src="https://images.unsplash.com/photo-1606820854416-439b3305ff39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className={styles.package_name}>ม่อนแจ่ม</div>
                    <div className="package-review">
                        <h6>review</h6>
                    </div>
                    <div className="package-price">
                        <h2>3500 ฿</h2>
                    </div>
                </div>
                <div className={styles.package_item}>
                    <div>
                        <img className={styles.package_img} src="https://images.unsplash.com/photo-1490077476659-095159692ab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className={styles.package_name}>วัดพระแก้ว</div>
                    <div className="package-review">
                        <h6>review</h6>
                    </div>
                    <div className="package-price">
                        <h2>3500 ฿</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentPackage;