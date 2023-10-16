import styles from './ContentPackage.module.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {Tourist_attractionInterface} from '../../../interfaces/ITourist_attraction';
import {PackageInterface} from '../../../interfaces/IPackage';
import { GetTourist_attractions, GetTourist_attractionsById } from "../../../services/http/tourAttractionService";
import { GetPackage, GetPackageById} from "../../../services/http/packageService";
import { GetReview, GetReviewById} from "../../../services/http/reviewService";


function ContentPackage() {
  
    const [packages, setPackages] = useState<PackageInterface[]>([]);
    const [touristAttractions, setTouristAttractions] = useState<Tourist_attractionInterface[]>([]);

  useEffect(() => {
    // ดึงข้อมูลสถานที่
    const fetchTouristAttractions = async () => {
      try {
        const touristAttractionData = await GetTourist_attractions();
        if (touristAttractionData) {
          setTouristAttractions(touristAttractionData);
        }
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูลสถานที่ท่องเที่ยว:", error);
      }
    };

    const fetchPackages = async () => {
      try {
        // ดึงข้อมูลแพคเกจ
        const packageData = await GetPackage();
        if (packageData) {
          setPackages(packageData);
        }
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูลแพคเกจ:", error);
      }
    };

    fetchTouristAttractions();
    fetchPackages();
  }, []);

    return (
        <div className={styles.content}>
            <p style={{ position: 'relative', top: '-8px', fontSize: '40px', fontFamily: 'Roboto', fontWeight: 700, color: '#505050' }}>POPULAR TOURS</p>
            <div className={styles.package_content}>
              {packages.map((packages, index) => (
                  touristAttractions.map((attraction, index) => (
                      <Link to={`/Detail_package${packages.ID}`} key={packages.ID}>
                          <div className={styles.package_item} key={index}>
                            <div>
                                <img className={styles.package_img} src={attraction.Image1} alt={packages.Name} />
                            </div>

                            <div className={styles.package_name}>
                                <p>{packages.Name}</p>
                                <p style={{ fontSize: '18px', fontFamily: 'Roboto',top:'-5px',position:'relative' }}>review</p>
                                <p style={{fontWeight:'650', fontSize: '40px',fontFamily: 'Roboto',top:'-5px',left:'-3px',position:'relative' }}>฿ {packages.Pricechil}</p>
                            </div>
                          </div>
                      </Link>
                    ))
                ))}

            </div>
        </div>
    ); 
}

export default ContentPackage;