import React, { useState } from 'react';
import axios from 'axios';
import LandingPage from './LandingPage';
import ResultPage from './ResultPage';

function App() {
    const [feeling, setFeeling] = useState('');
    const [ayat, setAyat] = useState('');
    const [showResult, setShowResult] = useState(false);

    const fetchContent = async (selectedFeeling) => {
        try {
            console.log(`Fetching content for feeling: ${selectedFeeling}`);
            const response = await axios.get(`https://feeling-app-six.vercel.app/backend/api/${selectedFeeling}/ayat`);
            console.log("API response:", response.data);
            setAyat(response.data.text);
            setShowResult(true);
        } catch (error) {
            console.error("Error fetching data:", error.response ? error.response.data : error.message);
            setAyat("Sorry, there was an error. Please try again later.");
            setShowResult(true);
        }
    };

    const fetchMoreAyat = async () => {
        try {
            console.log(`Fetching more ayats for feeling: ${feeling}`);
            const response = await axios.get(`https://feeling-app-six.vercel.app/backend/api/${feeling}/ayat`);
            console.log("API response:", response.data);
            setAyat(response.data.text);
        } catch (error) {
            console.error("Error fetching more ayats:", error.response ? error.response.data : error.message);
            setAyat("Sorry, there was an error. Please try again later.");
        }
    };

    const fetchMoreHadith = async () => {
        try {
            console.log(`Fetching more hadith for feeling: ${feeling}`);
            const response = await axios.get(`https://feeling-app-six.vercel.app/backend/api/${feeling}/hadith`);
            console.log("API response:", response.data);
            setAyat(response.data.text);
        } catch (error) {
            console.error("Error fetching more hadith:", error.response ? error.response.data : error.message);
            setAyat("Sorry, there was an error. Please try again later.");
        }
    };

    return (
        <div>
            {showResult ? (
                <ResultPage 
                    feeling={feeling} 
                    ayat={ayat} 
                    onBack={() => setShowResult(false)}
                    onMoreAyat={fetchMoreAyat}
                    onMoreHadith={fetchMoreHadith}
                />
            ) : (
                <LandingPage 
                    onSelectFeeling={(selectedFeeling) => {
                        setFeeling(selectedFeeling);
                        fetchContent(selectedFeeling);
                    }} 
                />
            )}
        </div>
    );
}

export default App;
