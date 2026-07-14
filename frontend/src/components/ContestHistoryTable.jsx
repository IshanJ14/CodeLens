import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Typography,
} from "@mui/material";

import { useState } from "react";

function ContestHistoryTable({ history }) {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper sx={{ mt: 4, borderRadius: 3 }}>
            
            <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ p: 2 }}
            >
                Contest History
            </Typography>

            <TableContainer>

                <Table stickyHeader>

                    <TableHead>

                        <TableRow>

                            <TableCell><strong>Contest</strong></TableCell>
                            <TableCell align="center"><strong>Rank</strong></TableCell>
                            <TableCell align="center"><strong>Old Rating</strong></TableCell>
                            <TableCell align="center"><strong>New Rating</strong></TableCell>
                            <TableCell align="center"><strong>Change</strong></TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>

                        {history
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((contest) => {
                                
                                const diff = contest.newRating - contest.oldRating;

                                return (
                                    <TableRow 
                                        hover
                                        key={contest.contestId}
                                    >
                                        <TableCell>
                                            {contest.contestName}
                                        </TableCell>

                                        <TableCell align="center">
                                            {contest.rank}
                                        </TableCell>

                                        <TableCell align="center">
                                            {contest.oldRating}
                                        </TableCell>

                                        <TableCell align="center">
                                            {contest.newRating}
                                        </TableCell>

                                        <TableCell
                                            align="center"
                                            sx={{
                                                color:
                                                    diff >= 0 
                                                    ? "green"
                                                    : "red",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {diff >= 0 ? `+${diff}` : diff}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[10, 20, 50]}
                component="div"
                count={history.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default ContestHistoryTable;