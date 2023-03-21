// import React from 'react';
// import { Link } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Tabs, { tabsClasses } from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// import Page from '../../../components/Page';
// import Container from '../../../components/Container';
// import CardTeamProposed2 from '../../../components/CardTeamProposed2';

// import { team, ninaWisniewska } from '../../../data/team';

// const TeamNinaWisniewskaPartial = () => {
//     const ninaWisniewskaCopy = [{ ...ninaWisniewska }];

//     return (
//         <Box className='team-view'>
//             <Box className='view-wrapper'>
//                 <Box className='view-header services-aesthetic-medicine'>
//                     <Container className='header-wrapper'>
//                         <Box className='nav-wrapper'>
//                             <Breadcrumbs
//                                 className='breadcrumb back'
//                                 aria-label='breadcrumb'
//                             >
//                                 <Link to='/team' aria-current='page'>
//                                     <Box>Home</Box>
//                                 </Link>
//                             </Breadcrumbs>
//                             <Breadcrumbs
//                                 className='breadcrumb nav'
//                                 separator={<NavigateNextIcon fontSize='smform' />}
//                                 aria-label='breadcrumb'
//                             >
//                                 <Link to='/' aria-current='page'>
//                                     Home
//                                 </Link>
//                                 <Link to='/team' aria-current='page'>
//                                     Specjaliści
//                                 </Link>
//                                 <Typography color='text.primary'>
//                                     {ninaWisniewska.name}
//                                 </Typography>
//                             </Breadcrumbs>
//                         </Box>
//                         <Box className='heading-wrapper'>
//                             <Typography variant='h4' className='heading-view'>
//                                 Specjaliści
//                             </Typography>
//                         </Box>
//                     </Container>
//                 </Box>
//                 <Box className='view-body'>
//                     <Container className='body-wrapper team'>
//                         <Box className='team-navigation'>
//                             <Box className='navigation-wrapper'>
//                                 <Tabs
//                                     variant='scrollable'
//                                     scrollButtons='auto'
//                                     aria-label='scrollable auto tabs example'
//                                     TabIndicatorProps={{ style: { background: 'transparent' }}}
//                                     sx={{
//                                         [`& .${tabsClasses.scrollButtons}`]: {
//                                             '&.Mui-disabled': { opacity: 0.3 },
//                                         },
//                                     }}
//                                 >
//                                     <Tab
//                                         label='Dermatologia'
//                                         component={Link}
//                                         to={`/team/dermatology`}
//                                         value={`/team/dermatology`}
//                                     />
//                                 </Tabs>
//                             </Box>
//                         </Box>
//                         <Box className='team-description'>
//                             <Box className='team-details'>
//                                 {ninaWisniewskaCopy.map((item, index) => (
//                                     <Box key={index}>
//                                         <Card className='card-introduction'>
//                                             {item.background ? (
//                                                 <Box
//                                                     className='card-background'
//                                                     component={LazyLoadImage}
//                                                     height={1}
//                                                     width={1}
//                                                     src={item.background}
//                                                     alt={item.title}
//                                                     effect='blur'
//                                                 />
//                                             ) : (
//                                                 <Box className='card-background-color' />
//                                             )}
//                                             <Box
//                                                 className='card-image'
//                                                 component={LazyLoadImage}
//                                                 src={item.image}
//                                                 alt={item.title}
//                                                 effect='blur'
//                                             />
//                                             <CardContent className='card-content'>
//                                                 <Typography className='card-name'>
//                                                     {item.name}
//                                                 </Typography>
//                                                 <Typography className='card-speciality'>
//                                                     {item.speciality}
//                                                 </Typography>
//                                                 {item.summary && (
//                                                     <Typography className='card-text'>
//                                                         {item.summary}
//                                                     </Typography>
//                                                 )}
//                                             </CardContent>
//                                         </Card>
//                                         {item.education && (
//                                             <Card className='card-education'>
//                                                 <CardContent className='card-content'>
//                                                     <Typography className='card-header'>
//                                                         Wykształcenie
//                                                     </Typography>
//                                                     <Typography className='card-text'>
//                                                         {item.education}
//                                                     </Typography>
//                                                 </CardContent>
//                                             </Card>
//                                         )}
//                                         {item.experience && (
//                                             <Card className='card-experience'>
//                                                 <CardContent className='card-content'>
//                                                     <Typography className='card-header'>
//                                                         Doświadczenie
//                                                     </Typography>
//                                                     <Typography className='card-text'>
//                                                         {item.experience}
//                                                     </Typography>
//                                                 </CardContent>
//                                             </Card>
//                                         )}
//                                         {item.interested && (
//                                             <Card className='card-interested'>
//                                                 <CardContent className='card-content'>
//                                                     <Typography className='card-header'>
//                                                         Zainteresowania
//                                                     </Typography>
//                                                     <Typography className='card-text'>
//                                                         {item.interested}
//                                                     </Typography>
//                                                 </CardContent>
//                                             </Card>
//                                         )}
//                                     </Box>
//                                 ))}
//                             </Box>
//                             <Box className='team-proposed'>
//                                 <Box className='card-wrapper team-proposed'>
//                                     {team
//                                         .filter(item => item.services.includes('dermatology'))
//                                         .filter(item => item.designation !== 'ninaWisniewska')
//                                         .map((item, index) => (
//                                             <CardTeamProposed2
//                                                 key={index}
//                                                 cardTitle={item.name}
//                                                 cardSpeciality={item.speciality}
//                                                 cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
//                                                 cardImage={item.image}
//                                                 cardPath={item.path}
//                                             />
//                                         ))
//                                     }
//                                 </Box>
//                             </Box>
//                         </Box>
//                     </Container>
//                 </Box>
//             </Box>
//         </Box>
//     );
// }

// export default Page(TeamNinaWisniewskaPartial);
