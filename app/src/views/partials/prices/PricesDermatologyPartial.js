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

const tooltip = (title) => (
    <Tooltip title={title}>
    <IconButton
        sx={{
            height: '12px',
            width: '12px',
            marginLeft: '8px',
            // color: '#008AC9',
            color: '#d9ab5a'
        }}
    >
      <InfoIcon fontSize='small' />
    </IconButton>
  </Tooltip>
);

const Table1 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('dr n. med. Nina Wiśniewska', 250),
        createData('lek. med. Katarzyna Zbrońska', 200),
        createData('lek. med. Aldona Maciąg', 200),
        createData('lek. med. Paulina Tatara', 180),
        createData('lek. med. Justyna Kłoniecka', 180),
        createData('lek. med. Katarzyna Myśliwiec-Czajka', 180),
        createData('lek. med. Katarzyna Rychlik', 180)
    ];

    return (
        <TableContainer className='table-container' component={Paper} >
            <Table size='small' aria-label='customized table'>
                <TableHead>
                    <TableRow>
                    <StyledTableCell className='featured'>
                        Konsultacja dermatologiczna
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
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const Table2 = () => {
    function createData(name, tooltip, price) {
        return { name, tooltip, price };
    }

    const rows = [
        createData('Badanie dermatoskopowe zmian skórnych (całe ciało) ', false, 250),
        createData('Wideodermatoskopia', false, 300),
        createData('Założenie płatkowych testów kontaktowych, zdjęcie, odczyt i lista alergenów (36 Alergenów)', false, 350),
        createData('Fototerapia lampa UVB 311 nm - 16 zabiegów ', false, 350),
        createData('Fototerapia PUVA (dłonie) - 6 zabiegów', false, 200),
        createData('Fototerapia PUVA (stopy) - 6 zabiegów', false, 200),
        createData('Fototerapia PUVA (dłonie + stopy) - 12 zabiegów', false, 400),
        createData('Wycięcie zmiany barwnikowej (1 zmiana) + badanie histopatologiczne', false, 450),
        createData('Biopsja skóry + badanie histopatologiczne ', false, 300),
        createData('Usunięcie zmian skórnych elektrochirurgicznie ', false, 300),
        createData('kolejne na tej samej wizycie', 'Powyżej 10 zmian skórnych cenę ustala lekarz.', 50)
    ];

    return (
        <TableContainer className='table-container' component={Paper} sx={{ width: '100%', overflow: 'auto' }}>
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
                                {row.tooltip && tooltip(row.tooltip)}
                            </StyledTableCell>
                            <StyledTableCell align='right'>
                                {row.price}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const PricesDermatologyPartial = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Box display='grid' gap={'15px'}>
            <Table1 />
            <Table2 />
        </Box>
    );
}

export default PricesDermatologyPartial;
