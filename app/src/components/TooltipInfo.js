import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';

const TooltipInfo = ({ title }) => (
    <Tooltip title={title}>
        <IconButton
            sx={{
                height: '12px',
                width: '12px',
                marginLeft: '8px',
                color: '#d9ab5a'
            }}
        >
        <InfoIcon fontSize='small' />
        </IconButton>
    </Tooltip>
);

export default TooltipInfo;
