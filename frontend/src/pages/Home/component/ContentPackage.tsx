import React, { useEffect, useState } from 'react';
import styles from './ContentPackage.module.css'
import { Layout } from 'antd';
import { PackageInterface } from '../../../interfaces/IPackage';
import { Tourist_attractionInterface } from '../../../interfaces/ITourist_attraction';
import { useNavigate } from 'react-router-dom';
import { GetTourist_attractions } from '../../../services/http/tourAttractionService';
import { GetPackage } from '../../../services/http/packageService';
import { UserOutlined } from '@ant-design/icons';

function ContentPackage() {
    const successes = () => {
        window.open("http://localhost:3000/ ", "_self");
    }

    const [packages, setPackages] = useState<PackageInterface[]>([]);
    const [touristAttractions, setTouristAttractions] = useState<Tourist_attractionInterface[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const navigateToDetailPackage = (packageId: number | undefined) => {
        if (packageId) {
            // Navigate to the Detail_package page with the packageId
            navigate(`/Detail_package/${packageId}`);
        }
    };

    useEffect(() => {
        // Fetch tourist attractions and packages
        const fetchData = async () => {
            try {
                const touristAttractionData = await GetTourist_attractions();
                if (touristAttractionData) {
                    setTouristAttractions(touristAttractionData);
                }
            } catch (error) {
                console.error('Error fetching tourist attractions:', error);
            }

            try {
                const packageData = await GetPackage();
                if (packageData) {
                    setPackages(packageData);
                }
            } catch (error) {
                console.error('Error fetching packages:', error);
            }
        };

        fetchData();
    }, []);

    // Filtering function
    const filteredPackages = packages.filter((pack) =>
        pack.Name && pack.Name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div>
            <div className={styles.searchbar}>
                <UserOutlined className={styles.searchbar}></UserOutlined>
                <input
                    className={styles.searchbar}
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                /></div>
            <div className={styles.content}>
                <p style={{ position: 'relative', top: '-8px', fontSize: '40px', fontFamily: 'Roboto', fontWeight: 700, color: '#505050' }}>POPULAR TOURS</p>
                <div className={styles.package_content}>

                    {filteredPackages.map((pack, index) => {
                        const attraction = touristAttractions[index]; // Match packages and attractions by index
                        return (
                            <div className={styles.package_item} key={pack.ID} onClick={() => navigateToDetailPackage(pack?.ID)}>
                                <div>
                                    <img className={styles.package_img} src={attraction.Image1} alt={attraction.Name} />
                                </div>

                                <div className={styles.package_name}>
                                    <p style={{ fontSize: '18px' }}>{pack.Name}</p>
                                    <p style={{ fontSize: '18px', fontFamily: 'Roboto' }}>review</p>
                                    <p style={{ fontWeight: '650', fontSize: '40px', fontFamily: 'Roboto' }}>฿ {pack.Pricechil}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ContentPackage;