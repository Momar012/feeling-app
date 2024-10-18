import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

function LandingPage({ onSelectFeeling }) {
    const feelings = [
        { name: 'Sad', icon: <SentimentVeryDissatisfiedIcon fontSize="large" /> },
        { name: 'Happy', icon: <SentimentSatisfiedAltIcon fontSize="large" /> },
        { name: 'Anxious', icon: <SentimentDissatisfiedIcon fontSize="large" /> },
        { name: 'Grateful', icon: <SentimentVerySatisfiedIcon fontSize="large" /> }
    ];

    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4" gutterBottom style={{ color: '#2e7d32', fontWeight: 'bold' }}>
                How are you feeling today?
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {feelings.map((feeling) => (
                    <Grid item key={feeling.name}>
                        <Button
                            variant="contained"
                            onClick={() => onSelectFeeling(feeling.name)}
                            style={{
                                padding: '15px 20px',
                                backgroundColor: '#81c784',
                                borderRadius: '15px',
                                minWidth: '150px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                color: '#fff',
                                fontSize: '16px',
                                textTransform: 'capitalize',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {feeling.icon}
                            {feeling.name}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default LandingPage;
