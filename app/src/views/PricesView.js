
import {
    useState,
    useEffect
} from "react";
import {
    Link,
    useLocation
} from "react-router-dom";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Box from '@mui/material/Box';
import Container from '../components/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from '@mui/material/Divider';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import PricesDermatologyPartials from './partials/prices/PricesDermatologyPartials';
import PricesAestheticMedicinePartials from "./partials/prices/PricesAestheticMedicinePartials";
import PricesHematologyPartials from "./partials/prices/PricesHematologyPartials";
import PricesCosmetologyPartials from "./partials/prices/PricesCosmetologyPartials";
import PricesPhysioterapyPartials from "./partials/prices/PricesPhysioterapyPartials";
import PricesCosmeticSurgeryPartials from "./partials/prices/PricesCosmeticSurgeryPartials";
import PricesAllergologyPartials from "./partials/prices/PricesAllergologyPartials";
import PricesUsgPartials from "./partials/prices/PricesUsgPartials";

const PricesView = () => {
    const [ pricesTab, setTab ] = useState(() => {
        const pathname = window.location.pathname;

        const selectTab = (pathname) => {
            switch(pathname) {
                case "/prices":
                    return (
                        "prices-dermatology"
                    );
                case "/prices/dermatology":
                    return (
                        "prices-dermatology"
                    );
                case "/prices/aesthetic-medicine":
                    return (
                        "prices-aesthetic-medicine"
                    );
                case "/prices/hematology":
                    return (
                        "prices-hematology"
                    );
                case "/prices/cosmetology":
                    return (
                        "prices-cosmetology"
                    );
                case "/prices/physioterapy":
                    return (
                        "prices-physioterapy"
                    );
                case "/prices/cosmetic-surgery":
                    return (
                        "prices-cosmetic-surgery"
                    );
                case "/prices/allergology":
                    return (
                        "prices-allergology"
                    );
                case "/prices/usg":
                    return (
                        "prices-usg"
                    );
                default:
            }
        }

        return selectTab(pathname);
    });

    const renderTabContent = (photoTab) => {
        switch(photoTab) {
            case "prices-dermatology":
                return (
                    <PricesDermatologyPartials />
                );
            case "prices-aesthetic-medicine":
                return (
                    <PricesAestheticMedicinePartials />
                );
            case "prices-hematology":
                return (
                    <PricesHematologyPartials />
                );
            case "prices-cosmetology":
                return (
                    <PricesCosmetologyPartials />
                );
            case "prices-physioterapy":
                return (
                    <PricesPhysioterapyPartials />
                );
            case "prices-cosmetic-surgery":
                return (
                    <PricesCosmeticSurgeryPartials />
                );
            case "prices-allergology":
                return (
                    <PricesAllergologyPartials />
                );
            case "prices-usg":
                return (
                    <PricesUsgPartials />
                );
            default:
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <Box className="contact-view">
            <Box className="view-wrapper">
                <Box className="view-header prices">
                    <Container className="header-wrapper">
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="smform" />}
                            aria-label="breadcrumb"
                        >
                            <Link
                                to="/"
                                aria-current="page"
                            >
                                Home
                            </Link>
                            <Typography color="text.primary">
                                Cennik
                            </Typography>
                        </Breadcrumbs>
                        <Box>
                            <Typography variant='h4' className='heading-view'>
                                Cennik
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className="view-body">
                    <Container className="body-wrapper prices">
                        <Box className='prices-navigation'>
                            <Box className='navigation-wrapper'>
                                {/* <Box
                                    class="nav flex-column nav-pills me-3"
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                >
                                    <li className="nav-item">
                                        <Link
                                            to="/prices/dermatology"
                                            className={(`nav-link ${pricesTab === "prices-dermatology" ? "active" : ""}`).trim()}
                                            aria-current="page"
                                            onClick={() => setTab("prices-dermatology")}
                                        >
                                            Dermatologia
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/prices/aesthetic-medicine"
                                            className={(`nav-link ${pricesTab === "prices-aesthetic-medicine" ? "active" : ""}`).trim()}
                                            aria-current="page"
                                            onClick={() => setTab("prices-aesthetic-medicine")}
                                        >
                                            Medycyna estetyczna
                                        </Link>
                                    </li>
                                </Box> */}

                        
                                <List className='list'>
                                    <ListItem className='list-item' disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            to="/prices/dermatology"
                                            className='list-item-button'
                                            aria-current="page"
                                            selected={pricesTab === "prices-dermatology"}
                                            onClick={() => setTab("prices-dermatology")}
                                        >
                                            <ListItemText className='list-item-text' primary="Dermatologia" />
                                            <ListItemIcon className='list-item-icon'>
                                                <KeyboardArrowRightIcon />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider className='divider' disablePadding/>
                                    <ListItem className='list-item' disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            to="/prices/aesthetic-medicine"
                                            className='list-item-button'
                                            aria-current="page"
                                            selected={pricesTab === "prices-aesthetic-medicine"}
                                            onClick={() => setTab("prices-aesthetic-medicine")}
                                        >
                                            <ListItemText className='list-item-text' primary="Medycyna estetyczna" />
                                            <ListItemIcon className='list-item-icon'>
                                                <KeyboardArrowRightIcon />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider className='divider' disablePadding/>
                                    <ListItem className='list-item' disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            to="/prices/hematology"
                                            className='list-item-button'
                                            aria-current="page"
                                            selected={pricesTab === "prices-hematology"}
                                            onClick={() => setTab("prices-hematology")}
                                        >
                                            <ListItemText className='list-item-text' primary="Hematologia" />
                                            <ListItemIcon className='list-item-icon'>
                                                <KeyboardArrowRightIcon />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider className='divider' disablePadding/>
                                    <ListItem className='list-item' disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            to="/prices/cosmetology"
                                            className='list-item-button'
                                            aria-current="page"
                                            selected={pricesTab === "prices-cosmetology"}
                                            onClick={() => setTab("prices-cosmetology")}
                                        >
                                            <ListItemText className='list-item-text' primary="Kosmetologia" />
                                            <ListItemIcon className='list-item-icon'>
                                                <KeyboardArrowRightIcon />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider className='divider' disablePadding/>
                                    <ListItem className='list-item' disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            to="/prices/physioterapy"
                                            className='list-item-button'
                                            aria-current="page"
                                            selected={pricesTab === "prices-physioterapy"}
                                            onClick={() => setTab("prices-physioterapy")}
                                        >
                                            <ListItemText className='list-item-text' primary="Fizjoterapia" />
                                            <ListItemIcon className='list-item-icon'>
                                                <KeyboardArrowRightIcon />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider className='divider' disablePadding/>
                                    <ListItem className='list-item' disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            to="/prices/cosmetic-surgery"
                                            className='list-item-button'
                                            aria-current="page"
                                            selected={pricesTab === "prices-cosmetic-surgery"}
                                            onClick={() => setTab("prices-cosmetic-surgery")}
                                        >
                                            <ListItemText className='list-item-text' primary="Chirurgia plastyczna" />
                                            <ListItemIcon className='list-item-icon'>
                                                <KeyboardArrowRightIcon />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider className='divider' disablePadding/>
                                    <ListItem className='list-item' disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            to="/prices/allergology"
                                            className='list-item-button'
                                            aria-current="page"
                                            selected={pricesTab === "prices-allergology"}
                                            onClick={() => setTab("prices-allergology")}
                                        >
                                            <ListItemText className='list-item-text' primary="Alergologia" />
                                            <ListItemIcon className='list-item-icon'>
                                                <KeyboardArrowRightIcon />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider className='divider' disablePadding/>
                                    <ListItem className='list-item' disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            to="/prices/usg"
                                            className='list-item-button'
                                            aria-current="page"
                                            selected={pricesTab === "prices-usg"}
                                            onClick={() => setTab("prices-usg")}
                                        >
                                            <ListItemText className='list-item-text' primary="USG" />
                                            <ListItemIcon className='list-item-icon'>
                                                <KeyboardArrowRightIcon />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider className='divider' disablePadding/>
                                    <ListItem className='list-item' disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            to="/prices/usg"  
                                            className='list-item-button'
                                            aria-current="page"
                                            selected={pricesTab === "prices-endocrinology"}
                                            onClick={() => setTab("prices-endocrinology")}
                                        >
                                            <ListItemText className='list-item-text' primary="Endykrologia" />
                                            <ListItemIcon className='list-item-icon'>
                                                <KeyboardArrowRightIcon />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider className='divider' disablePadding/>
                                    <ListItem className='list-item' disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            to="/prices/usg"  
                                            className='list-item-button'
                                            aria-current="page"
                                            selected={pricesTab === "prices-gynecology"}
                                            onClick={() => setTab("prices-gynecology")}
                                        >
                                            <ListItemText className='list-item-text' primary="Ginekologia" />
                                            <ListItemIcon className='list-item-icon'>
                                                <KeyboardArrowRightIcon />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider className='divider' disablePadding/>
                                    <ListItem className='list-item' disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            to="/prices/usg"  
                                            className='list-item-button'
                                            aria-current="page"
                                            selected={pricesTab === "prices-orthopedics"}
                                            onClick={() => setTab("prices-orthopedics")}
                                        >
                                            <ListItemText className='list-item-text' primary="Ortopedia" />
                                            <ListItemIcon className='list-item-icon'>
                                                <KeyboardArrowRightIcon />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider className='divider' disablePadding/>
                                    <ListItem className='list-item' disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            to="/prices/usg"  
                                            className='list-item-button'
                                            aria-current="page"
                                            selected={pricesTab === "prices-vascular-surgery"}
                                            onClick={() => setTab("prices-vascular-surgery")}
                                        >
                                            <ListItemText className='list-item-text' primary="Chirurgia naczyniowa" />
                                            <ListItemIcon className='list-item-icon'>
                                                <KeyboardArrowRightIcon />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider className='divider' disablePadding/>
                                    <ListItem className='list-item' disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            to="/prices/usg"  
                                            className='list-item-button'
                                            aria-current="page"
                                            selected={pricesTab === "prices-clinical-dietitian"}
                                            onClick={() => setTab("prices-clinical-dietitian")}
                                        >
                                            <ListItemText className='list-item-text' primary="Dietetyka Kliniczna" />
                                            <ListItemIcon className='list-item-icon'>
                                                <KeyboardArrowRightIcon />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                </List>

                            </Box>
                        </Box>
                        <Box className='prices-tabels'>
                            <Box
                                className="tab-pane fade show active"
                                id={`pills-${pricesTab}`}
                                role="tabpanel"
                                aria-labelledby={`pills-${pricesTab}-tab`}
                            >
                                {renderTabContent(pricesTab)}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default PricesView;
