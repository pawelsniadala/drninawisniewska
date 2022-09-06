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
        createData('Konsultacja - mgr Milena Juźwiak (30min)', 100),
        createData('Terapia metodą PNF (30/60min)', '80/130'),
        createData('Kineso Taping', 'od 35'),
        createData('Masaż limfatyczny ręczny (1h)', 230),
        createData('Masaż leczniczy całego kręgosłupa (30min)', 80),
        createData('Masaż leczniczy częściowy (20min)', 50),
        createData('Masaż klasyczny całego ciała (90min)', 230),
        createData('Masaż relaksacyjny (60min)', 140),
        createData('Ćwiczenia indywidualne (30min)', 80),
        createData('Rehabilitacja ortopedyczna metoda Cyriax', 150)
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

const PricesPhysioterapyPartials = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <Box display="grid" gap={3}>
            <Table1 />
        </Box>
    );
}

export default PricesPhysioterapyPartials;
