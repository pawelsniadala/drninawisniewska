import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Page from '../components/Page';
import Container from '../components/Container';
import TeamSpecializationPartial from './partials/team/TeamSpecializationPartial';

const TeamView = () => {
    const location = useLocation();

    const [ teamTab, setTab ] = useState(() => {
        const pathname = window.location.pathname;

        const selectTab = (pathname) => {
            switch(pathname) {
                case '/team':
                    return 'team-dermatology';
                case '/team/aesthetic-medicine':
                    return 'team-aesthetic-medicine';
                case '/team/cosmetology':
                    return 'team-cosmetology';
                case '/team/physioterapy':
                    return 'team-physioterapy';
                case '/team/cosmetic-surgery':
                    return 'team-cosmetic-surgery';
                case '/team/allergology':
                    return 'team-allergology';
                case '/team/usg':
                    return 'team-usg';
                case '/team/endocrinology':
                    return 'team-endocrinology';
                case '/team/gynecology':
                    return 'team-gynecology';
                case '/team/orthopedics':
                    return 'team-orthopedics';
                case '/team/vascular-surgery':
                    return 'team-vascular-surgery';
                case '/team/clinical-dietitian':
                    return 'team-clinical-dietitian';
                case '/team/rheumatology':
                    return 'team-rheumatology';
                case '/team/cardiology':
                    return 'team-cardiology';
                default:
            }
        }

        return selectTab(pathname);
    });

    const { specialization } = useParams();

    const renderTabContent = (teamTab) => {
        switch(teamTab) {
            case 'team-dermatology':
                return <TeamSpecializationPartial specialization='dermatology' />;
            case 'team-aesthetic-medicine':
                return <TeamSpecializationPartial specialization={specialization} />;
            case 'team-cosmetology':
                return <TeamSpecializationPartial specialization={specialization} />;
            case 'team-physioterapy':
                return <TeamSpecializationPartial specialization={specialization} />;
            case 'team-cosmetic-surgery':
                return <TeamSpecializationPartial specialization={specialization} />;
            case 'team-allergology':
                return <TeamSpecializationPartial specialization={specialization} />;
            case 'team-usg':
                return <TeamSpecializationPartial specialization={specialization} />;
            case 'team-endocrinology':
                return <TeamSpecializationPartial specialization={specialization} />;
            case 'team-gynecology':
                return <TeamSpecializationPartial specialization={specialization} />;
            case 'team-orthopedics':
                return <TeamSpecializationPartial specialization={specialization} />;
            case 'team-vascular-surgery':
                return <TeamSpecializationPartial specialization={specialization} />;
            case 'team-clinical-dietitian':
                return <TeamSpecializationPartial specialization={specialization} />;
            case 'team-rheumatology':
                return <TeamSpecializationPartial specialization={specialization} />;
            case 'team-cardiology':
                return <TeamSpecializationPartial specialization={specialization} />;
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
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs className='breadcrumb back' aria-label='breadcrumb'>
                                <Link to='/' aria-current='page'>
                                    <ArrowBackIcon />
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
                                    Specjaliści
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Specjaliści
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper team'>
                        <Box className='team-navigation'>
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
                                        to={`/team`}
                                        value={`/team`}
                                        onClick={() => setTab('team-dermatology')}
                                    />
                                    <Tab
                                        label='Medycyna estetyczna'
                                        component={Link}
                                        to={`/team/aesthetic-medicine`}
                                        value={`/team/aesthetic-medicine`}
                                        onClick={() => setTab('team-aesthetic-medicine')}
                                    />
                                    <Tab
                                        label='Kosmetologia'
                                        component={Link}
                                        to={`/team/cosmetology`}
                                        value={`/team/cosmetology`}
                                        onClick={() => setTab('team-cosmetology')}
                                    />
                                    <Tab
                                        label='Fizjoterapia'
                                        component={Link}
                                        to={`/team/physioterapy`}
                                        value={`/team/physioterapy`}
                                        onClick={() => setTab('team-physioterapy')}
                                    />
                                    <Tab
                                        label='Chirurgia plastyczna'
                                        component={Link}
                                        to={`/team/cosmetic-surgery`}
                                        value={`/team/cosmetic-surgery`}
                                        onClick={() => setTab('team-cosmetic-surgery')}
                                    />
                                    <Tab
                                        label='Alergologia'
                                        component={Link}
                                        to={`/team/allergology`}
                                        value={`/team/allergology`}
                                        onClick={() => setTab('team-allergology')}
                                    />
                                    <Tab
                                        label='USG'
                                        component={Link}
                                        to={`/team/usg`}
                                        value={`/team/usg`}
                                        onClick={() => setTab('team-usg')}
                                    />
                                    <Tab
                                        label='Endokrynologia'
                                        component={Link}
                                        to={`/team/endocrinology`}
                                        value={`/team/endocrinology`}
                                        onClick={() => setTab('team-endocrinology')}
                                    />
                                    <Tab
                                        label='Ginekologia'
                                        component={Link}
                                        to={`/team/gynecology`}
                                        value={`/team/gynecology`}
                                        onClick={() => setTab('team-gynecology')}
                                    />
                                    <Tab
                                        label='Ortopedia'
                                        component={Link}
                                        to={`/team/orthopedics`}
                                        value={`/team/orthopedics`}
                                        onClick={() => setTab('team-orthopedics')}
                                    />
                                    <Tab
                                        label='Chirurgia naczyniowa'
                                        component={Link}
                                        to={`/team/vascular-surgery`}
                                        value={`/team/vascular-surgery`}
                                        onClick={() => setTab('team-vascular-surgery')}
                                    />
                                    <Tab
                                        label='Dietetyka Kliniczna'
                                        component={Link}
                                        to={`/team/clinical-dietitian`}
                                        value={`/team/clinical-dietitian`}
                                        onClick={() => setTab('team-clinical-dietitian')}
                                    />
                                    <Tab
                                        label='Reumatologia'
                                        component={Link}
                                        to={`/team/rheumatology`}
                                        value={`/team/rheumatology`}
                                        onClick={() => setTab('team-rheumatology')}
                                    />
                                    <Tab
                                        label='Kardiologia'
                                        component={Link}
                                        to={`/team/cardiology`}
                                        value={`/team/cardiology`}
                                        onClick={() => setTab('team-cardiology')}
                                    />
                                </Tabs>
                            </Box>
                        </Box>
                        <Box className='team-tabels'>
                            <Box
                                className='tab-pane fade show active'
                                id={`pills-${teamTab}`}
                                role='tabpanel'
                                aria-labelledby={`pills-${teamTab}-tab`}
                            >
                                {renderTabContent(teamTab)}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TeamView);
