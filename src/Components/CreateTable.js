import React , { useState }  from 'react'
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead,Box, TableRow, Paper } from '@mui/material';
import { saveAs } from 'file-saver';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";



function CreateTable({fetchData}) {

    const [search, setSearch] = useState('');
    const { data, status } = useSelector((state) => state.data);

    const filteredData = data.filter(
        (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.body.toLowerCase().includes(search.toLowerCase())
    );

    const handleExport = () => {
        const csvData = data
            .map((item) => `${item.id},${item.title},${item.body}`)
            .join('\n');
        const blob = new Blob([`id,title,body\n${csvData}`], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'data.csv');
    };
    
    
    return (
        <div>
            CreateTable

            <Box>
                <TextField
                    label="Ara"
                    variant="outlined"
                    size="small"
                    style={{ margin: '20px 0' }}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleExport}>
                    CSV Olarak Dışa Aktar
                </Button>
                {status === 'loading' && <p>Yükleniyor...</p>}
                {status === 'succeeded' && (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Başlık</TableCell>
                                    <TableCell>İçerik</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredData.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.title}</TableCell>
                                        <TableCell>{row.body}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
                {status === 'failed' && <p>Veri alınamadı!</p>}
            </Box>

        </div>
    )
}

export default CreateTable