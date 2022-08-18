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
        fontWeight: "800",
        '&.featured': {
            color: '#f8b01b'
        },
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    }
}));

const Table1 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Konsultacja dermatologiczna – dr n. med. Nina Wiśniewska', 200),
        createData('Konsultacja dermatologiczna – lek. med. Katarzyna Zbrońska', 180),
        createData('Konsultacja dermatologiczna – lek. med. Aldona Maciąg', 180),
        createData('Konsultacja dermatologiczna – lek. med. Anna Kułakowska', 180),
        createData('Konsultacja dermatologiczna – lek. med. Paulina Tatara', 150),
        createData('Konsultacja dermatologiczna – lek. med. Justyna Kłoniecka', 150),
        createData('Konsultacja dermatologiczna – lek. med. Katarzyna Myśliwiec-Czajka', 150),
        createData('Konsultacja dermatologiczna – lek. med. Katarzyna Rychlik', 150),
        createData('Konsultacja medycyny estetycznej – dr Olga Lenartowicz-Warakomska', 150),
        createData('Konsultacja medycyny estetycznej – dr Klaudia Malottki', 150),
        createData('Badanie dermatoskopowe zmian skórnych (całe ciało) ', 250),
        createData('Wideodermatoskopia', 300),
        createData('Założenie płatkowych testów kontaktowych, zdjęcie, odczyt i lista alergenów (36 Alergenów)', 350),
        createData('Fototerapia lampa UVB 311 nm – 16 zabiegów ', 350),
        createData('Fototerapia PUVA (dłonie) – 6 zabiegów', 200),
        createData('Fototerapia PUVA (stopy) – 6 zabiegów', 200),
        createData('Fototerapia PUVA (dłonie + stopy) – 12 zabiegów', 400),
        createData('Wycięcie zmiany barwnikowej + badanie histopatologiczne ', 450),
        createData('Biopsja skóry + badanie histopatologiczne ', 300),
        createData('Usunięcie zmian skórnych elektrochirurgicznie ', 100),
        createData('kolejne na tej samej wizycie *', 50)
    ];

    return (
        <TableContainer component={Paper} >
            <Table size="small" aria-label="customized table">
                <caption>* Powyżej 10 zmian skórnych cenę ustala lekarz</caption>
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Laser Alma Harmony – nieablacyjne odmłodzenie skóry
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

const PricesDermatologyPartials = () => {
    return (
        <Box display="grid" gap={3}>
            <Table1 />
        </Box>
    );
};

export default PricesDermatologyPartials;
