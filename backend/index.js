const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const data = {
    sad: {
        ayats: [
            "And be patient, for indeed, Allah does not allow to be lost the reward of those who do good. (Quran 11:115)",
            "Indeed, with hardship [will be] ease. (Quran 94:6)",
            "So be patient. Indeed, the promise of Allah is truth. (Quran 30:60)",
            "Do not grieve; indeed, Allah is with us. (Quran 9:40)",
            "Say, 'Nothing will happen to us except what Allah has decreed for us. He is our protector.' (Quran 9:51)",
            "Allah does not burden a soul beyond that it can bear. (Quran 2:286)",
            "Verily, in the remembrance of Allah do hearts find rest. (Quran 13:28)",
            "And We will surely test you with something of fear and hunger and a loss of wealth and lives, but give good tidings to the patient. (Quran 2:155)",
            "And whoever puts his trust in Allah, then He will suffice him. (Quran 65:3)",
            "And those who have believed and whose hearts are assured by the remembrance of Allah. (Quran 13:28)",
            "For indeed, it is not their eyes that are blinded, but blinded are the hearts which are within the breasts. (Quran 22:46)",
            "So lose not heart, nor fall into despair, for you must gain mastery if you are true in faith. (Quran 3:139)",
            "But they plan, and Allah plans. And Allah is the best of planners. (Quran 8:30)",
            "Indeed, the patient will be given their reward without measure. (Quran 39:10)",
            "Say, 'O My servants who have transgressed against themselves, do not despair of the mercy of Allah. (Quran 39:53)"
        ],
        hadiths: [
            "The strong believer is better and more beloved to Allah than the weak believer, while there is good in both. (Muslim)",
            "Verily, Allah does not look at your appearance or wealth, but rather He looks at your hearts and deeds. (Muslim)",
            "The most beloved of deeds to Allah are those that are most consistent, even if they are small. (Bukhari)",
            "No fatigue, nor disease, nor sorrow, nor sadness, nor hurt, nor distress befalls a Muslim, even if it were the prick he receives from a thorn, but that Allah expiates some of his sins for that. (Bukhari)",
            "Whoever is patient, Allah will give him patience, and no one is granted a gift better and more comprehensive than patience. (Bukhari)",
            "Indeed, the greatest reward comes with the greatest trial. (Tirmidhi)",
            "When Allah loves a servant, He tests him. (Bukhari)",
            "If Allah wants to do good to somebody, He afflicts him with trials. (Bukhari)",
            "Be mindful of Allah, and you will find Him in front of you. (Tirmidhi)",
            "Allah is with the patient. (Bukhari)",
            "Whoever is deprived of gentleness is deprived of all good. (Muslim)",
            "He who relieves a hardship of this world for a believer, Allah will relieve a hardship for him on the Day of Resurrection. (Muslim)",
            "O son of Adam, as long as you call upon Me and ask of Me, I shall forgive you for what you have done, and I shall not mind. (Tirmidhi)",
            "Allah does not wrong the people at all, but it is the people who are wronging themselves. (Quran 10:44)",
            "Shall I not inform you of the greatest of major sins? Associating partners with Allah, and disobeying one's parents. (Bukhari)"
        ]
    },
    happy: {
        ayats: [
            "Say, 'In the bounty of Allah and in His mercy - in that let them rejoice; it is better than what they accumulate.' (Quran 10:58)",
            "And it is He who made the night and day in succession for whoever desires to remember or desires gratitude. (Quran 25:62)",
            "And whoever is grateful, he is only grateful for the benefit of his own soul. (Quran 31:12)",
            "And if you would count the favors of Allah, you could not enumerate them. (Quran 14:34)",
            "So remember Me; I will remember you. And be grateful to Me and do not deny Me. (Quran 2:152)",
            "Verily, in the remembrance of Allah do hearts find rest. (Quran 13:28)",
            "Is there any reward for good other than good? (Quran 55:60)",
            "But those who believe and work deeds of righteousness - We will admit them to gardens beneath which rivers flow. (Quran 4:57)",
            "And your Lord is the Forgiving, Full of Mercy. (Quran 18:58)",
            "So do not weaken and do not grieve, and you will be superior if you are true believers. (Quran 3:139)",
            "But Allah is your protector, and He is the best of helpers. (Quran 3:150)",
            "Indeed, Allah loves those who rely upon Him. (Quran 3:159)",
            "And We have already created man and know what his soul whispers to him, and We are closer to him than his jugular vein. (Quran 50:16)",
            "And whoever obeys Allah and His Messenger has certainly attained a great attainment. (Quran 33:71)",
            "For each one are successive angels before and behind him who protect him by the decree of Allah. (Quran 13:11)"
        ],
        hadiths: [
            "Be happy for others' joy, for the joy of the believer reflects his faith. (Tirmidhi)",
            "The best among you are those who have the best manners and character. (Bukhari)",
            "The best richness is the richness of the soul. (Bukhari)",
            "A smile in the face of your brother is charity. (Tirmidhi)",
            "The most beloved deed to Allah is the most regular and constant even if it were little. (Bukhari)",
            "He who believes in Allah and the Last Day should either speak good or remain silent. (Bukhari)",
            "The best of people are those who are best to others. (Bukhari)",
            "The most beloved of people according to Allah is he who brings most benefit. (Bukhari)",
            "Exchange gifts, as that will lead to increasing your love to one another. (Bukhari)",
            "The best gift to a child is good manners. (Tirmidhi)",
            "Allah will not show mercy to him who does not show mercy to others. (Muslim)",
            "He who does not thank people is not thankful to Allah. (Abu Dawood)",
            "The believer is the mirror of his brother. (Abu Dawood)",
            "None of you [truly] believes until he loves for his brother what he loves for himself. (Bukhari)",
            "There is nothing heavier in the scales than good character. (Abu Dawood)"
        ]
    },
    anxious: {
        ayats: [
            "And whoever fears Allah - He will make for him a way out. (Quran 65:2)",
            "Indeed, your Lord is the All-Knowing Creator. (Quran 15:86)",
            "Allah does not burden a soul beyond that it can bear. (Quran 2:286)",
            "And rely upon Allah; and sufficient is Allah as Disposer of affairs. (Quran 33:3)",
            "Do not lose hope, nor be sad. (Quran 3:139)",
            "So be patient with gracious patience. (Quran 70:5)",
            "My mercy encompasses all things. (Quran 7:156)",
            "Indeed, Allah is with the patient. (Quran 2:153)",
            "And seek help through patience and prayer. (Quran 2:45)",
            "He is with you wherever you are. (Quran 57:4)",
            "For indeed, with hardship comes ease. (Quran 94:5)",
            "Whoever puts his trust in Allah, He will be enough for him. (Quran 65:3)",
            "And those who strive for Us - We will surely guide them to Our ways. (Quran 29:69)",
            "So remember Me; I will remember you. (Quran 2:152)",
            "Indeed, after hardship, there is ease. (Quran 94:6)"
        ],
        hadiths: [
            "Remember Allah, and He will ease your heart. (Bukhari)",
            "The strong believer is better and more beloved to Allah than the weak believer. (Muslim)",
            "If anyone of you becomes angry, let him keep silent. (Bukhari)",
            "Patience is a light. (Muslim)",
            "Whoever says, 'Allah is sufficient for me,' Allah will suffice him. (Tirmidhi)",
            "Make things easy for people and do not make them difficult. (Bukhari)",
            "Allah is with those who restrain themselves. (Quran 16:128)",
            "Seek refuge in Allah from anxiety and grief. (Bukhari)",
            "The one who strives in patience, Allah will make him patient. (Muslim)",
            "Remember Allah during times of ease and He will remember you during times of difficulty. (Tirmidhi)",
            "The servant of Allah does not bear a greater burden than he can handle. (Quran 2:286)",
            "Do not be sad, verily Allah is with us. (Quran 9:40)",
            "Allah is with those who are patient. (Bukhari)",
            "Allah does not test a person beyond his capability. (Bukhari)",
            "Be optimistic, and do not despair. (Tirmidhi)"
        ]
    },
    grateful: {
        ayats: [
            "If you are grateful, I will surely increase you [in favor]. (Quran 14:7)",
            "And when you have been blessed with goodness, be thankful. (Quran 4:36)",
            "And He gave you from all you asked of Him. (Quran 14:34)",
            "Indeed, those who are patient and grateful, those will have their reward. (Quran 25:75)",
            "Allah loves those who are grateful. (Quran 2:152)",
            "Remember Me; I will remember you. (Quran 2:152)",
            "They recognize the favor of Allah; then they deny it. (Quran 16:83)",
            "Say, 'It is Allah who provides for you.' (Quran 34:24)",
            "And thank Allah for what He has given you. (Quran 16:114)",
            "But if they repent and establish prayer and give zakah, they are your brothers in religion. (Quran 9:11)",
            "If you are grateful, I will surely increase you. (Quran 14:7)",
            "And remember Allah's favor upon you. (Quran 3:103)",
            "Those who say, 'Our Lord is Allah' and remain steadfast. (Quran 41:30)",
            "Indeed, the reward for the patient and the grateful is Paradise. (Quran 25:75)",
            "He is with you wherever you are. (Quran 57:4)"
        ],
        hadiths: [
            "He who does not thank people is not thankful to Allah. (Abu Dawood)",
            "The best form of gratitude is to share what you have. (Bukhari)",
            "If one wakes up and finds themselves safe in their home and has food for the day, they are blessed. (Tirmidhi)",
            "Gratitude is the key to Allah's favor. (Bukhari)",
            "Shall I not guide you to the best of deeds? Be thankful to Allah. (Bukhari)",
            "Allah loves those who are grateful and patient. (Bukhari)",
            "The one who has found goodness must give thanks. (Muslim)",
            "Exchange gifts, as that will increase love. (Muslim)",
            "The true wealth of a person is their gratitude. (Muslim)",
            "The best among you are those who are good to their families. (Tirmidhi)",
            "Allah loves those who are grateful. (Muslim)",
            "Exchange gifts to show gratitude and build affection. (Muslim)",
            "Thankfulness is the key to contentment. (Tirmidhi)",
            "He who is grateful for a little is grateful for much. (Tirmidhi)",
            "He who does not show gratitude to people will not show gratitude to Allah. (Bukhari)"
        ]
    }
};

// Endpoint to get either an Ayat or Hadith randomly
app.get('/api/feeling/:emotion', (req, res) => {
    const { emotion } = req.params;
    const category = data[emotion];

    if (category) {
        const type = Math.random() > 0.5 ? 'ayats' : 'hadiths';
        const items = category[type];
        const randomItem = items[Math.floor(Math.random() * items.length)];
        res.json({ text: randomItem });
    } else {
        res.status(404).json({ message: 'Content not found for this emotion' });
    }
});

app.get('/api/feeling/:emotion/ayat', (req, res) => {
    const { emotion } = req.params;
    const normalizedEmotion = emotion.toLowerCase();  // Normalize to lowercase

    // Make sure the data object keys are also in lowercase
    const category = data[normalizedEmotion];
    if (category && category.ayats.length > 0) {
        const randomAyat = category.ayats[Math.floor(Math.random() * category.ayats.length)];
        res.json({ text: randomAyat });
    } else {
        res.status(404).json({ message: 'Ayat not found for this emotion' });
    }
});

app.get('/api/feeling/:emotion/hadith', (req, res) => {
    const { emotion } = req.params;
    const normalizedEmotion = emotion.toLowerCase();  // Normalize to lowercase

    // Make sure the data object keys are also in lowercase
    const category = data[normalizedEmotion];
    if (category && category.hadiths.length > 0) {
        const randomHadith = category.hadiths[Math.floor(Math.random() * category.hadiths.length)];
        res.json({ text: randomHadith });
    } else {
        res.status(404).json({ message: 'Hadith not found for this emotion' });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
