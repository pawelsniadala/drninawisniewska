import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';

import CardTeam from '../../../components/CardTeam';
import CardTeamProposed from '../../../components/CardTeamProposed';

import { team } from '../../../data/team';

const SpecialistsListPartial = ({ specialization }) => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const filtered = team.filter(item => item.specialization.includes(specialization));
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
        <Box className='card-wrapper team view'>
            {width >= 991.98 ? (
                data.map((item) => (
                    <CardTeam
                        key={item.id}
                        cardImage={item.image}
                        cardBackground={item.background}
                        cardTitle={item.title}
                        cardName={item.name}
                        cardSpeciality={item.speciality}
                        cardDescription={item.experience ? item.experience : item.education}
                        cardPath={`${specialization}/${item.specialist}`}
                    />
                ))
            ) : (
                data.map((item) => (
                    <CardTeamProposed
                        key={item.id}
                        cardTitle={item.name}
                        cardSpeciality={item.speciality}
                        cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></>}
                        cardImage={item.image}
                        cardPath={`${specialization}/${item.specialist}`}
                    />
                ))
            )}
        </Box>
    );
}

export default SpecialistsListPartial;
