const cron = require('node-cron');
const skolaService = require('../services/skola.service');

const calculateAverageScoreTask = cron.schedule('0 0 0 * * *', async () => {
    try {
        const skolaList = await skolaService.getAllSkola();
        
        let totalScore = 0;
        let numberOfScores = 0;

        for (const skola of skolaList) {
            if (skola.mark1) {
                totalScore += skola.mark1;
                numberOfScores++;
            }

            if (skola.mark2) {
                totalScore += skola.mark2;
                numberOfScores++;
            }
        }

        const averageScore = numberOfScores > 0 ? totalScore / numberOfScores : 0;
        
        console.log('Average score:', averageScore);
    } catch (error) {
        console.error('Error calculating average score:', error);
    }
}, {
    scheduled: false 
});

calculateAverageScoreTask.start();

module.exports = calculateAverageScoreTask;
