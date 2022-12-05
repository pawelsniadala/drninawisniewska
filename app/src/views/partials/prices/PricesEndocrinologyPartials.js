import React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import Page from '../../../components/Page';

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        borderBottom: '1px solid rgba(224, 224, 224, 0.6)',
        padding: '12px 16px',
        lineHeight: 1.25,
        color: '#535353'
    },
    [`&.${tableCellClasses.body}`]: {
        borderBottom: '1px solid rgba(224, 224, 224, 0.6)',
        padding: '12px 16px',
        lineHeight: 1.25,
        color: '#535353'
    }
}));

const StyledTableRow = styled(TableRow)(() => ({
    '&:last-child td, &:last-child th': {
        border: 0,
    }
}));

const tooltip = (title) => (
    <Tooltip title={title}>
    <IconButton
        sx={{
            height: '12px',
            width: '12px',
            marginLeft: '8px',
            color: '#008AC9',
        }}
    >
      <InfoIcon fontSize='small' />
    </IconButton>
  </Tooltip>
);

const Table1 = () => {
    function createData(name, price, tooltip) {
        return { name, price, tooltip };
    }

    const rows = [
        createData('Konsultacja endokrynologiczna - dr Justyna Filipek', 200, false),
        createData('Konsultacja ginekologiczno - endokrynologiczna', 250, false)
    ];

    return (
        <TableContainer className='table-container' component={Paper} >
            <Table size='small' aria-label='customized table'>
                <TableHead>
                    <TableRow>
                    <StyledTableCell>
                        Nazwa
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                        Cena
                    </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component='th' scope='row'>
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align='right'>
                                {row.price}
                                {row.tooltip && tooltip(row.tooltip)}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const PricesEndocrinologyPartials = () => {
    return (
        <Box display='grid' gap={'15px'}>
            <Table1 />
        </Box>
    );
}

export default Page(PricesEndocrinologyPartials);
