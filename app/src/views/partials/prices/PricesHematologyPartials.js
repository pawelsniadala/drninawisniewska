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
    createData(1, 'Konsultacja dr Mirosław Majewski', 250)
];

const PricesDermatologyPartials = () => {
    return (
        <Table sx={{ minWidth: 650 }} aria-label="table">
            <TableHead>
                <TableRow>
                    <TableCell>
                        Lp.
                    </TableCell>
                    <TableCell align="left">
                        Nazwa
                    </TableCell>
                    <TableCell align="right">
                        Cena (zł)
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
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
