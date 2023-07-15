import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../components/Page';
import Container from '../components/Container';
import TreatmentSpecializationPartial from './partials/treatment/TreatmentSpecializationPartial';

const TreatmentView = () => {
    const location = useLocation();

    const [ treatmentTab, setTab ] = useState(() => {
        const pathname = window.location.pathname;

        const selectTab = (pathname) => {
            switch(pathname) {
                case '/treatment':
                    return 'treatment-dermatology';
                case '/treatment/aesthetic-medicine':
                    return 'treatment-aesthetic-medicine';
                case '/treatment/cosmetology':
                    return 'treatment-cosmetology';
                case '/treatment/physioterapy':
                    return 'treatment-physioterapy';
                case '/treatment/cosmetic-surgery':
                    return 'treatment-cosmetic-surgery';
                case '/treatment/allergology':
                    return 'treatment-allergology';
                // case '/treatment/usg':
                //     return 'treatment-usg';
                // case '/treatment/endocrinology':
                //     return 'treatment-endocrinology';
                // case '/treatment/gynecology':
                //     return 'treatment-gynecology';
                // case '/treatment/orthopedics':
                //     return 'treatment-orthopedics';
                case '/treatment/vascular-surgery':
                    return 'treatment-vascular-surgery';
                // case '/treatment/clinical-dietitian':
                //     return 'treatment-clinical-dietitian';
                // case '/treatment/rheumatology':
                //     return 'treatment-rheumatology';
                // case '/treatment/cardiology':
                //     return 'treatment-cardiology';
                default:
            }
        }

        return selectTab(pathname);
    });

    const { specialization } = useParams();

    const renderTabContent = (treatmentTab) => {

        switch(treatmentTab) {
            case 'treatment-dermatology':
                return <TreatmentSpecializationPartial specialization='dermatology' />;
            case 'treatment-aesthetic-medicine':
                return <TreatmentSpecializationPartial specialization={specialization} />;
            case 'treatment-cosmetology':
                return <TreatmentSpecializationPartial specialization={specialization} />;
            case 'treatment-physioterapy':
                return <TreatmentSpecializationPartial specialization={specialization} />;
            case 'treatment-cosmetic-surgery':
                return <TreatmentSpecializationPartial specialization={specialization} />;
            case 'treatment-allergology':
                return <TreatmentSpecializationPartial specialization={specialization} />;
            // case 'treatment-usg':
            //     return <TreatmentSpecializationPartial specialization={specialization} />;
            // case 'treatment-endocrinology':
            //     return <TreatmentSpecializationPartial specialization={specialization} />;
            // case 'treatment-gynecology':
            //     return <TreatmentSpecializationPartial specialization={specialization} />;
            // case 'treatment-orthopedics':
            //     return <TreatmentSpecializationPartial specialization={specialization} />;
            case 'treatment-vascular-surgery':
                return <TreatmentSpecializationPartial specialization={specialization} />;
            // case 'treatment-clinical-dietitian':
            //     return <TreatmentSpecializationPartial specialization={specialization} />;
            // case 'treatment-rheumatology':
            //     return <TreatmentSpecializationPartial specialization={specialization} />;
            // case 'treatment-cardiology':
            //     return <TreatmentSpecializationPartial specialization={specialization} />;
            default:
        }
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, []);

    return (
        <Box className='treatment-view'>
            <Box className='view-wrapper'>
                <Box className='view-header'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
                                    <Box>Home</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
                                className='breadcrumb nav'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
                                    Home
                                </Link>
                                <Typography color='text.primary'>
                                    Zabiegi
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Zabiegi
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment'>
                        <Box className='treatment-navigation'>
                            <Box className='navigation-wrapper'>
                                <Tabs
                                    value={location.pathname}
                                    variant='scrollable'
                                    scrollButtons='auto'
                                    aria-label='scrollable auto tabs example'
                                    TabIndicatorProps={{ style: { background: 'transparent' }}}
                                    sx={{
                                        [`& .${tabsClasses.scrollButtons}`]: {
                                            '&.Mui-disabled': { opacity: 0.3 },
                                        },
                                    }}
                                >
                                    <Tab
                                        label='Dermatologia'
                                        component={Link}
                                        to={`/treatment`}
                                        value={`/treatment`}
                                        onClick={() => setTab('treatment-dermatology')}
                                    />
                                    <Tab
                                        label='Medycyna estetyczna'
                                        component={Link}
                                        to={`/treatment/aesthetic-medicine`}
                                        value={`/treatment/aesthetic-medicine`}
                                        onClick={() => setTab('treatment-aesthetic-medicine')}
                                    />
                                    <Tab
                                        label='Kosmetologia'
                                        component={Link}
                                        to={`/treatment/cosmetology`}
                                        value={`/treatment/cosmetology`}
                                        onClick={() => setTab('treatment-cosmetology')}
                                    />
                                    <Tab
                                        label='Fizjoterapia'
                                        component={Link}
                                        to={`/treatment/physioterapy`}
                                        value={`/treatment/physioterapy`}
                                        onClick={() => setTab('treatment-physioterapy')}
                                    />
                                    <Tab
                                        label='Chirurgia plastyczna'
                                        component={Link}
                                        to={`/treatment/cosmetic-surgery`}
                                        value={`/treatment/cosmetic-surgery`}
                                        onClick={() => setTab('treatment-cosmetic-surgery')}
                                    />
                                    <Tab
                                        label='Alergologia'
                                        component={Link}
                                        to={`/treatment/allergology`}
                                        value={`/treatment/allergology`}
                                        onClick={() => setTab('treatment-allergology')}
                                    />
                                    {/* <Tab
                                        label='USG'
                                        component={Link}
                                        to={`/treatment/usg`}
                                        value={`/treatment/usg`}
                                        onClick={() => setTab('treatment-usg')}
                                    /> */}
                                    {/* <Tab
                                        label='Endokrynologia'
                                        component={Link}
                                        to={`/treatment/endocrinology`}
                                        value={`/treatment/endocrinology`}
                                        onClick={() => setTab('treatment-endocrinology')}
                                    /> */}
                                    {/* <Tab
                                        label='Ginekologia'
                                        component={Link}
                                        to={`/treatment/gynecology`}
                                        value={`/treatment/gynecology`}
                                        onClick={() => setTab('treatment-gynecology')}
                                    /> */}
                                    {/* <Tab
                                        label='Ortopedia'
                                        component={Link}
                                        to={`/treatment/orthopedics`}
                                        value={`/treatment/orthopedics`}
                                        onClick={() => setTab('treatment-orthopedics')}
                                    /> */}
                                    <Tab
                                        label='Chirurgia naczyniowa'
                                        component={Link}
                                        to={`/treatment/vascular-surgery`}
                                        value={`/treatment/vascular-surgery`}
                                        onClick={() => setTab('treatment-vascular-surgery')}
                                    />
                                    {/* <Tab
                                        label='Dietetyka Kliniczna'
                                        component={Link}
                                        to={`/treatment/clinical-dietitian`}
                                        value={`/treatment/clinical-dietitian`}
                                        onClick={() => setTab('treatment-clinical-dietitian')}
                                    /> */}
                                    {/* <Tab
                                        label='Reumatologia'
                                        component={Link}
                                        to={`/treatment/rheumatology`}
                                        value={`/treatment/rheumatology`}
                                        onClick={() => setTab('treatment-rheumatology')}
                                    /> */}
                                    {/* <Tab
                                        label='Kardiologia'
                                        component={Link}
                                        to={`/treatment/cardiology`}
                                        value={`/treatment/cardiology`}
                                        onClick={() => setTab('treatment-cardiology')}
                                    /> */}
                                </Tabs>
                            </Box>
                        </Box>
                        <Box className='treatment-tabels'>
                            <Box
                                className='tab-pane fade show active'
                                id={`pills-${treatmentTab}`}
                                role='tabpanel'
                                aria-labelledby={`pills-${treatmentTab}-tab`}
                            >
                                {renderTabContent(treatmentTab)}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TreatmentView);
