import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(no, name, price) {
  return { no, name, price };
}

const rows = [
    createData(1, 'Konsultacja dermatologiczna – dr n. med. Nina Wiśniewska', 200),
    createData(2, 'Konsultacja dermatologiczna – lek. med. Katarzyna Zbrońska', 180),
    createData(3, 'Konsultacja dermatologiczna – lek. med. Aldona Maciąg', 180),
    createData(4, 'Konsultacja dermatologiczna – lek. med. Anna Kułakowska', 180),
    createData(5, 'Konsultacja dermatologiczna – lek. med. Paulina Tatara', 150),
    createData(6, 'Konsultacja dermatologiczna – lek. med. Justyna Kłoniecka', 150),
    createData(7, 'Konsultacja dermatologiczna – lek. med. Katarzyna Myśliwiec-Czajka', 150),
    createData(8, 'Konsultacja dermatologiczna – lek. med. Katarzyna Rychlik', 150),
    createData(9, 'Konsultacja medycyny estetycznej – dr Olga Lenartowicz-Warakomska', 150),
    createData(10, 'Konsultacja medycyny estetycznej – dr Klaudia Malottki', 150),
    createData(11, 'Badanie dermatoskopowe zmian skórnych (całe ciało) ', 250),
    createData(12, 'Wideodermatoskopia', 300),
    createData(13, 'Założenie płatkowych testów kontaktowych, zdjęcie, odczyt i lista alergenów (36 Alergenów)', 350),
    createData(14, 'Fototerapia lampa UVB 311 nm – 16 zabiegów ', 350),
    createData(15, 'Fototerapia PUVA (dłonie) – 6 zabiegów', 200),
    createData(16, 'Fototerapia PUVA (stopy) – 6 zabiegów', 200),
    createData(17, 'Fototerapia PUVA (dłonie+stopy) – 12 zabiegów', 400),
    createData(18, 'Wycięcie zmiany barwnikowej + badanie histopatologiczne ', 450),
    createData(19, 'Biopsja skóry + badanie histopatologiczne ', 300),
    createData(20, 'Usunięcie zmian skórnych elektrochirurgicznie ', 100),
    createData(21, 'kolejne na tej samej wizycie*', 50)
];

const PricesDermatologyPartials = () => {
    return (
        <Table aria-label="caption table">
            <caption>*Powyżej 10 zmian skórnych cenę ustala lekarz</caption>
            <TableHead>
                <TableRow>
                    <TableCell>Lp.</TableCell>
                    <TableCell align="left">Nazwa</TableCell>
                    <TableCell align="right">Cena (zł)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.no}
                        </TableCell>
                        <TableCell align="left">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">
                            {row.price}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default PricesDermatologyPartials;
