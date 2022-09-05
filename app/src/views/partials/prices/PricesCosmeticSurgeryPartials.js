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
        createData('Konsultacja - lek. med. Konrad Kochan', 200),
        createData('Plastyka powiek górnych', 5000),
        createData('Plastyka powiek dolnych', 8000),
        createData('Korekta odstających uszu', 6000),
        createData('Usunięcie kępek żółtych jednostronne', 1500),
        createData('Usunięcie kępek żółtych dwustronne', 3000),
        createData('Plastyka blizn', 'od 1500'),
        createData('Podniesienie górnej wargi', 5000),
        createData('Usuwanie dużych zmian nowotworowych z przeszczepem skóry', 700),
        createData('Usunięcie zmian skórnych twarzy', 'od 500'),
        createData('Usunięcie zmian skórnych z ciała', 'od 500'),
        createData('Chirurgiczne usunięcie kaszaka, tłuszczaka, włókniaka', '600 - 1500'),
        createData('Nowotwory skóry i tkanek podskórnych', '600 - 3000')
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

const PricesCosmeticSurgeryPartials = () => {
    return (
        <Box display="grid" gap={3}>
            <Table1 />
        </Box>
    );
}

export default PricesCosmeticSurgeryPartials;
