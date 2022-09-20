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
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

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
    function createData(name, tooltip, price) {
        return { name, tooltip, price };
    }

    const rows = [
        createData('Konsultacja dermatologiczna - dr n. med. Nina Wiśniewska', false, 200),
        createData('Konsultacja dermatologiczna - lek. med. Katarzyna Zbrońska', false, 180),
        createData('Konsultacja dermatologiczna - lek. med. Aldona Maciąg', false, 180),
        createData('Konsultacja dermatologiczna - lek. med. Anna Kułakowska', false, 180),
        createData('Konsultacja dermatologiczna - lek. med. Paulina Tatara', false, 150),
        createData('Konsultacja dermatologiczna - lek. med. Justyna Kłoniecka', false, 150),
        createData('Konsultacja dermatologiczna - lek. med. Katarzyna Myśliwiec-Czajka', false, 150),
        createData('Konsultacja dermatologiczna - lek. med. Katarzyna Rychlik', false, 150),
        createData('Konsultacja medycyny estetycznej - dr Olga Lenartowicz-Warakomska', false, 150),
        createData('Konsultacja medycyny estetycznej - dr Klaudia Malottki', false, 150),
        createData('Badanie dermatoskopowe zmian skórnych (całe ciało) ', false, 250),
        createData('Wideodermatoskopia', false, 300),
        createData('Założenie płatkowych testów kontaktowych, zdjęcie, odczyt i lista alergenów (36 Alergenów)', false, 350),
        createData('Fototerapia lampa UVB 311 nm - 16 zabiegów ', false, 350),
        createData('Fototerapia PUVA (dłonie) - 6 zabiegów', false, 200),
        createData('Fototerapia PUVA (stopy) - 6 zabiegów', false, 200),
        createData('Fototerapia PUVA (dłonie + stopy) - 12 zabiegów', false, 400),
        createData('Wycięcie zmiany barwnikowej + badanie histopatologiczne ', false, 450),
        createData('Biopsja skóry + badanie histopatologiczne ', false, 300),
        createData('Usunięcie zmian skórnych elektrochirurgicznie ', false, 100),
        createData('kolejne na tej samej wizycie', 'Powyżej 10 zmian skórnych cenę ustala lekarz.', 50)
    ];

    return (
        <TableContainer className='table-container' component={Paper} >
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Laser Alma Harmony - nieablacyjne odmłodzenie skóry
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
                                {row.tooltip && tooltip(row.tooltip)}
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
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <Box display="grid" gap={'15px'}>
            <Table1 />
        </Box>
    );
}

export default PricesDermatologyPartials;
