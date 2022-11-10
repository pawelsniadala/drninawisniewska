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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
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

const Table1 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Konsultacja kosmetologiczna', 100)
    ];

    return (
        <TableContainer className='table-container' component={Paper}>
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell>
                        Nazwa
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        Cena
                    </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
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

const Table2 = () => {
    function createData(name, price, fat) {
        return { name, price, fat, };
    }

    const rows = [
        createData('Twarz', 400, 1600),
        createData('Termolifting powiek dolnych', 300, 1200),
        createData('Twarz, szyja', 600, 2400),
        createData('Twarz, szyja, dekolt', 1000, 4000),
        createData('Szyja', 400, 1600),
        createData('Dekolt', 400, 1600),
        createData('Podbródek = dolna część twarzy', 400, 1600),
        createData('Ramiona', 400, 1600),
        createData('Kolana', 400, 1600),
        createData('Dłonie', 400, 1600),
        createData('Dekolt plus piersi', 600, 2400),
        createData('Pośladki', 400, 1600),
        createData('Brzuch', 400, 1600),
        createData('Wewnętrzna strona ud', 400, 1600)
    ];

    return (
        <TableContainer className='table-container' component={Paper}>
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Accent Ultra V termolifting z ultradźwiękami (ujędrnienie plus redukcja tkanki tłuszczowej)
                    </StyledTableCell>
                    <StyledTableCell colSpan={2} align="right">
                        Cena
                    </StyledTableCell>
                    </TableRow>
                    <TableRow>
                    <StyledTableCell>
                        Okolica
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        1 zabieg
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        5 zabiegów
                    </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.price}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.fat}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const Table3 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Zabieg na twarz', 350),
        createData('Cena w pakiecie 3 zabiegów', 900)
    ];

    return (
        <TableContainer className='table-container' component={Paper} >
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Peeling Liftingujący
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        Cena
                    </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
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

const Table4 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Zabieg na twarz', 350),
        createData('Cena w pakiecie 3 zabiegów', 900)
    ];

    return (
        <TableContainer className='table-container' component={Paper} >
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Biorewitalizacja bez igieł
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        Cena
                    </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
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

const Table5 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Oczy', 250),
        createData('Zabieg na twarz', 350),
        createData('Cena w pakiecie 3 zabiegów', 900),
        createData('Twarz, szyja, dekolt', 600),
        createData('Seria w pakiecie 3 zabiegów', 1600)
    ];

    return (
        <TableContainer className='table-container' component={Paper} >
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Terapia Anty-Aging
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        Cena
                    </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
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

const Table7 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Kwas salicylowy', 200),
        createData('Kwas migdałowy', 200),
        createData('Kwas mlekowy', 200),
        createData('Melanostop', 180),
        createData('Modified Jessner', 180),
        createData('Azelan', 180),
        createData('TCA soft 15%', 220),
        createData('TCA 35%', 220),
        createData('Kwas ferulowy', 200),
        createData('Kwas laktobionowy', 200),
        createData('Kwas traneksamowy', 300),
        createData('Nomelan Cafeico', 350),
        createData('A.C. Solution', 250),
        createData('C.R. Complex', 250)
    ];

    return (
        <TableContainer className='table-container' component={Paper} >
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Peelingi medyczne
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        Cena
                    </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
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

const Table9 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Szyja', 600),
        createData('Oczy', 400),
        createData('Policzki', 500)
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
                        <StyledTableRow key={row.name}>
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

const Table10 = () => {
    function createData(name, price, fat) {
        return { name, price, fat, };
    }

    const rows = [
        createData('Górna warga', 190, '-'),
        createData('Broda', 190, 560),
        createData('Wąsik', 190, 560),
        createData('Szyja, policzki', 250, '-'),
        createData('Okolica między brwiami', 50, '-'),
        createData('Pachy', 250, 700),
        createData('Kark', 'Od 250', '-'),
        createData('Tors/Klatka piersiowa', 400, '-'),
        createData('Plecy', 400, '-'),
        createData('Plecy męskie', 'Od 400', '-'),
        createData('Brzuch', 200, '-'),
        createData('Ramiona', 200, '-'),
        createData('Przedramiona', 200, '-'),
        createData('Pośladki', 250, '-'),
        createData('Łydki', 350, 1000),
        createData('Uda', 400, 1100),
        createData('Całe nogi', 600, 2000),
        createData('Bikini podstawowe', 300, 840),
        createData('Bikini pełne', 400, 1100)
    ];

    return (
        <TableContainer className='table-container' component={Paper}>
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Vectus - epilacja laserowa
                    </StyledTableCell>
                    <StyledTableCell colSpan={2} align="right">
                        Cena
                    </StyledTableCell>
                    </TableRow>
                    <TableRow>
                    <StyledTableCell>
                        Okolica
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        1 zabieg
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        4 zabiegi
                    </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.price}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.fat}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const Table11 = () => {
    function createData(name, price, price2, price3) {
        return { name, price, price2, price3};
    }

    const rows = [
        createData('Twarz', 250, 950, 1800),
        createData('Ciało (30min) 1 Focus - 1 Okolica', 300, 1400, 2600),
        createData('Ciało (40min) 2 Focusy - 2 Okolice', 350, 1600, 2800),
        createData('Ciało (50min) 3 Focusy - 3 Okolice', 400, 1850, 3000),
        createData('Ciało (60min) 4 Focusy - 4 Okolice', 450, 2150, 3300)
    ];

    return (
        <TableContainer className='table-container' component={Paper}>
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Icoone Laser Med 2
                    </StyledTableCell>
                    <StyledTableCell align="right" colSpan={3}>
                        Cena
                    </StyledTableCell>
                    </TableRow>
                    <TableRow>
                    <StyledTableCell>
                        Okolica
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        1 zabieg
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        5 zabiegów
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        10 zabiegów
                    </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.price}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.price2}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.price3}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const PricesCosmetologyPartials = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <Box display="grid" gap={'15px'}>
            <Table1 />
            <Table2 />
            <Table3 />
            <Table4 />
            <Table5 />
            <Table7 />
            <Table9 />
            <Table10 />
            <Table11 />
        </Box>
    );
};

export default PricesCosmetologyPartials;
