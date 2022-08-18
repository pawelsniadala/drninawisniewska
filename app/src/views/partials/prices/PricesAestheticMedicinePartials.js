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
        }
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    }
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
        createData('Leczenie powikłań po zabiegach z zakresu medycyny estetycznej', 'Od 550'),
    ];

    return (
        <TableContainer component={Paper} >
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
};

const Table2 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Jedna okolica', 500),
        createData('Dwie okolice', 900),
        createData('Trzy okolice', 1100),
        createData('Okolica kurzych łapek - 30 j. toksyny botulinowej *', 500),
        createData('Okolica kurzych łapek - 60 j. toksyny botulinowej *', 800),
        createData('Broda', 300),
        createData('Bruksizm', 900),
        createData('Uśmiech dziąsłowy', 500),
        createData('Korekta opadającego nosa', 300),
        createData('Szyja', 900),
        createData('Dekolt', 900),
        createData('Leczenie nadpotliwości pach', 1500),
        createData('Leczenie nadpotliwości dłoni', 1500),
    ];

    return (
        <TableContainer component={Paper} >
            <Table size="small" aria-label="customized table">
                <caption style={{ fontSize: 13 }}>
                    Cena zabiegu poprawkowego po zabiegach wykonanych w innych klinikach, gabinetach kosmetycznych – cena podstawowa + 20% dopłaty<br/>
                    * "Okolica" to: zmarszczki poprzeczne czoła, zmarszczka między brwiami i zmarszczki wokół oczu.<br/>
                    * Jeśli na wizycie wykonywana jest toksyna botulinowa na 2 okolice, tj. kurze łapki + czoło/lwia zmarszczka, wówczas do zapłaty jest 900 zł
                </caption>
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Korekcja zmarszczek mimicznych (Botox, Azzalure)
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
};

const Table3 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Bruzdy nosowo-wargowe', 'od 1100'),
        createData('Zmarszczki między brwiami (lwia zmarszczka)', 'od 1100'),
        createData('Okolica dolnej powieki (dolina łez)', 'od 1100'),
        createData('Usta – korekta konturu, korekta kształtu, powiększenie', 'od 1100'),
        createData('Okolica jarzmowa (kości policzkowe)', 'od 1100'),
        createData('Okolica skroniowa', 'od 1100'),
        createData('Korekta nosa', 'od 1100'),
        createData('Korekta brody', 'od 1100'),
        createData('Korekta brwi', 'od 1100'),
        createData('Dłonie', 'od 1100'),
    ];

    return (
        <TableContainer component={Paper} >
            <Table size="small" aria-label="customized table">
                <caption style={{ fontSize: 13 }}>
                    Cena zabiegu poprawkowego po zabiegach wykonanych w innych klinikach, gabinetach kosmetycznych – cena podstawowa + 20% dopłaty
                </caption>
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Wypełniacze na bazie kwasu hialuronowego
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
};

const Table4 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Twarz', 'od 350'),
        createData('Twarz szyja', 'od 500'),
        createData('Twarz szyja dekolt', 'od 800'),
        createData('Okolice oczu', 'od 300'),
        createData('Skinbooster', 900),
    ];

    return (
        <TableContainer component={Paper} >
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Mezoterapia skóry
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
};

const Table5 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Nucleofill', 1100),
        createData('Nucleofill Soft Eyes', 1100),
        createData('Juvenus', 1100),
        createData('Pluryal Silk', 1200),
        createData('Profhilo', 1200),
        createData('Kolagen (4 okolice)', 1200),
        createData('Kolagen (cała twarz)', 700),
    ];

    return (
        <TableContainer component={Paper} >
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Stymulatory kolagenu
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
};

const Table6 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('First Lift Barb 3D / 4D z haczykami', 'od 450 za jedną nić'),
        createData('Nici mono', 'od 75 za jedną nić')
    ];

    return (
        <TableContainer component={Paper} >
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Nici Liftingujące / Modelujące / Rewitalizujące
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
};

const Table7 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('1 zabieg', 900),
        createData('Pełna seria 4 zabiegów', 3200)
    ];

    return (
        <TableContainer component={Paper} >
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Dr. Cyj Hair Filler – Terapia Włosów i Łysienia
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
};

const Table8 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Twarz', 800),
        createData('Twarz, szyja lub dekolt', 1100),
        createData('Skóra głowy', 800),
    ];

    return (
        <TableContainer component={Paper} >
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Osocze Bogatopłytkowe
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
};

const Table9 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Redensity II', 1100),
        createData('Mezoterapia (Light Eyes, NCTF, CytoCare)', 'od 300')
    ];

    return (
        <TableContainer component={Paper} >
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Korekcja cieni i dołów pod oczami
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
};

const Table10 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Rystylane SkinBooster Vital 1ml', 900),
    ];

    return (
        <TableContainer component={Paper} >
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Hydrobalans SkinBoosters
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
};

const Table11 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('NCTF / NCTF HA 3ml', 450),
        createData('Dermaheal HSR, SR, SB 5ml', 450),
        createData('Stretchcare', 450),
        createData('Jalupro', 450),
        createData('Jalupro (oczy) + Botoks', 550)
    ];

    return (
        <TableContainer component={Paper} >
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Mezoterapia Igłowa
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
};

const Table12 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Okolice oczu', 1600),
        createData('Linia żuchwy', 2000),
        createData('Szyja', 2100),
        createData('Dekolt', 2600),
        createData('Cała twarz', 3200),
        createData('Okolica ust', 2000),
        createData('Cała twarz + okolica oczu', 4200),
        createData('Cała twarz + podbródek', 4200),
        createData('Podbródek', 1900),
        createData('Piersi', '2800 - 4200'),
        createData('Ramiona', '2800 - 4200'),
        createData('Okolice nad kolanami', 1900),
        createData('Uda', 4000),
        createData('Pośladki', '2300 - 4000'),
        createData('Brzuch', '3500 - 4000')
    ];

    return (
        <TableContainer component={Paper} >
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        SonoQueen – lifting bez skalpela
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
};

const Table13 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Laser frakcyjny cała twarz', 'od 800'),
        createData('Redukcja przebarwień cała twarz', '150 (pojedyncze przebarwienie) do 800 (cała twarz)'),
        createData('Likwidacja rumienia na twarzy', 'od 600 (policzki) do 800 (cała twarz)'),
        createData('Zamykanie naczynek – nos', 'od 200 *'),
        createData('Zamykanie naczyń na kończynach dolnych', 'od 200 *'),
        createData('Blizny potrądzikowe', 'od 200 *'),
        createData('Rozstępy, blizny', 'od 200 *'),
    ];

    return (
        <TableContainer component={Paper} >
            <Table size="small" aria-label="customized table">
                <caption style={{ fontSize: 13 }}>
                    * Dokładną cenę ustala lekarz
                </caption>
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Alma Laser Harmony XL PRO – nr 1 na świecie
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
};

const Table14 = () => {
    function createData(name, price) {
        return { name, price };
    }

    const rows = [
        createData('Oczy', 600),
        createData('Policzki', 600),
        createData('Cała twarz', 1000),
        createData('Cała twarz + oczy', 1200),
        createData('Cała twarz + szyja', 1500),
        createData('Cała twarz + szyja + dekolt', 1800),
        createData('Dekolt', 800),
        createData('Szyja + dekolt', 1400),
        createData('Blizny potrądzikowe', 'od 300 *'),
        createData('Rozstępy', 'od 1000 *'),
        createData('Usuwanie znamion', 'od 300 *')
    ];

    return (
        <TableContainer component={Paper} >
            <Table size="small" aria-label="customized table">
                <caption style={{ fontSize: 13 }}>
                    * Dokładną cenę ustala lekarz
                </caption>
                <TableHead>
                    <TableRow>
                    <StyledTableCell className="featured">
                        Laser frakcyjny CO2
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
};

const PricesAestheticMedicinePartials = () => {
    return (
        <Box display="grid" gap={3}>
            <Table1 />
            <Table2 />
            <Table3 />
            <Table4 />
            <Table5 />
            <Table6 />
            <Table7 />
            <Table8 />
            <Table9 />
            <Table10 />
            <Table11 />
            <Table12 />
            <Table13 />
            <Table14 />
        </Box>
    );
};

export default PricesAestheticMedicinePartials;
