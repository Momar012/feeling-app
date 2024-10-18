import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RepeatIcon from '@mui/icons-material/Repeat';

function ResultPage({ feeling, ayat, onBack, onMoreAyat, onMoreHadith }) {
    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
            <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f0f4c3', borderRadius: '15px' }}>
                <Typography variant="h5" gutterBottom style={{ color: '#1b5e20', fontWeight: 'bold' }}>
                    You are feeling: {feeling}
                </Typography>
                <Typography variant="body1" style={{ fontStyle: 'italic', margin: '20px 0', fontSize: '20px', color: '#424242' }}>
                    {ayat}
                </Typography>
            </Paper>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: '30px' }}>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onMoreAyat}
                        startIcon={<RepeatIcon />}
                        style={{ borderRadius: '15px', textTransform: 'capitalize' }}
                    >
                        More Ayats
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={onMoreHadith}
                        startIcon={<RepeatIcon />}
                        style={{ borderRadius: '15px', textTransform: 'capitalize' }}
                    >
                        More Hadiths
                    </Button>
                </Grid>
            </Grid>
            <Button
                variant="outlined"
                color="default"
                onClick={onBack}
                startIcon={<ArrowBackIcon />}
                style={{ marginTop: '30px', borderRadius: '15px', textTransform: 'capitalize' }}
            >
                Back
            </Button>
        </Container>
    );
}

export default ResultPage;
