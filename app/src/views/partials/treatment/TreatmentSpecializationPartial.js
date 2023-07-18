import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';

// import CardTreatment from '../../../components/CardTreatment';
import CardProposed from '../../../components/CardProposed';

import { treatment } from '../../../data/treatment';

const TreatmentSpecializationPartial = ({ specialization }) => {
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

    return (
        <Box className='card-wrapper treatment view'>
            {data.map((item) => (
                    <CardProposed
                        key={item.id}
                        cardImage={item.images[0].src}
                        cardTitle={item.title}
                        cardDescription={item.description}
                        cardPath={`${specialization}/${item.treatment}`}
                    />
                    // <CardTreatment
                    //     key={item.id}
                    //     cardImage={item.image}
                    //     cardTitle={item.title}
                    //     cardDescription={item.description}
                    //     cardPath={`${specialization}/${item.treatment}`}
                    // />
                ))
            }
        </Box>
    );
}

export default TreatmentSpecializationPartial;
