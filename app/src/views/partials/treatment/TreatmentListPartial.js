import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';

import CardProposed from '../../../components/CardProposed';
import CardTreatment from '../../../components/CardTreatment';

import { treatment } from '../../../data/treatment';

const TreatmentListPartial = ({ specialization }) => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const filtered = treatment.filter(item => item.specialization.includes(specialization));
            setData(filtered);
        };
        fetchData();
    }, [specialization]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [specialization]);

    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return { width };
    }

    function useWindowDimensions() {
        const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }

    const { width } = useWindowDimensions();

    return (
        <Box className='card-wrapper treatment view'>

            {width >= 991.98 ? (
                data.map((item) => (
                    <CardTreatment
                        key={item.id}
                        cardImage={item.images[0].src}
                        cardTitle={item.title}
                        cardDescription={item.description}
                        cardPath={`${specialization}/${item.treatment}`}
                    />
                ))
            ) : (
                data.map((item) => (
                    <CardProposed
                        key={item.id}
                        cardImage={item.images[0].src}
                        cardTitle={item.title}
                        cardDescription={item.description}
                        cardPath={`${specialization}/${item.treatment}`}
                    />
                ))
            )}
        </Box>
    );
}

export default TreatmentListPartial;
