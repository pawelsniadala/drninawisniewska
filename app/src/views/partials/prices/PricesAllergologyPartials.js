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

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        borderBottom: '1px solid rgba(224, 224, 224, 0.7)',
        padding: '12px',
        lineHeight: 1
    },
    [`&.${tableCellClasses.body}`]: {
        borderBottom: '1px solid rgba(224, 224, 224, 0.7)',
        padding: '12px',
        lineHeight: 1
    }
}));

const StyledTableRow = styled(TableRow)(() => ({
    '&:last-child td, &:last-child th': {
        border: 0,
    }
}));

const Table1 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Konsultacja dr n. med. Tomasz Matuszewski', 200),
        createData('Testy skórne', 150),
        createData('Odczulanie', 60)
    ];

    return (
        <TableContainer className='table-container' component={Paper} >
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Nazwa
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        Cena
                    </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name} className="caption">
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.price}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const PricesAllergologyPartials = () => {
    return (
        <Box display="grid" gap={3}>
            <Table1 />
        </Box>
    );
}

export default PricesAllergologyPartials;
