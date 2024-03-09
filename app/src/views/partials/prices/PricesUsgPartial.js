import React, { useEffect } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

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
        border: 0
    }
}));

const Table1 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('USG jamy brzusznej', 160),
        createData('USG tarczycy', 160),
        createData('USG piersi', 160),
        createData('USG ślinianek', 160),
        createData('USG węzłów chłonnych', 160),
        createData('USG prostaty', 160),
        createData('USG jąder', 160),
        createData('USG układu moczowego', 160),
        createData('USG barku', 200),
        createData('USG ręki', 200),
        createData('USG kolana', 200),
        createData('Doppler tętnic szyjnych', 170),
        createData('Doppler kończyn dolnych (jedna noga)', 170),
        createData('Doppler kończyn dolnych (dwie nogi)', 250)
    ];

    return (
        <TableContainer className='table-container' component={Paper} >
            <Table size='small' aria-label='customized table'>
                <TableHead>
                    <TableRow>
                    <StyledTableCell className='featured'>
                        Nazwa
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                        Cena
                    </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name} className='caption'>
                            <StyledTableCell component='th' scope='row'>
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align='right' className='nowrap'>
                                {row.price}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const PricesUsgPartial = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Box display='grid' gap={'15px'}>
            <Table1 />
        </Box>
    );
}

export default PricesUsgPartial;
