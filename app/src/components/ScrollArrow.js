import { useState } from "react";
// import arrowUp from "./../assets/common/arrowUp.svg";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';


const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", checkScrollTop)

    return (
        <div className="scrollup"
            onClick={scrollTop}
            style={{ display: showScroll ? "flex" : "none" }}
        >
            {/* <button className="btn btn-secondary">
                <ArrowUpwardIcon fontSize="large" />
            </button> */}

            <Button
                //   component={Link}
                //   to={`/services`}
                  variant="contained"
                //   color="primary"
                //   size="large"
                //   fullWidth={isMd ? false : true}
              >
                  <KeyboardDoubleArrowUpIcon />
              </Button>

        </div>
    );
}

export default ScrollArrow;
