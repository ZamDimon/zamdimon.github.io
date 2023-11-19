//! This script is used to spawn the achievements table in the achievements page

import { AchievementResult} from './result.js';
import { AchievementLevel } from './level.js';
import { Achievement } from './achievement.js';

const achievements = [
    new Achievement({
        name: 'Sahasak Nimavum Research competition',
        year: '2021',
        subject: 'Computational Physics',
        level: AchievementLevel.International,
        result: AchievementResult.SilverMedal.withDescription('Silver medal'),
        url: '',
    }),
    new Achievement({
        name: 'International Festival of Engineering Science and Technology in Tunisia (I-FEST)',
        year: '2021',
        subject: 'Computational Physics',
        level: AchievementLevel.International,
        result: AchievementResult.SilverMedal.withDescription('Silver medal'),
        url: '',
    }),
    new Achievement({
        name: 'International Zhautykov Physics Olympiad',
        year: '2021',
        subject: 'Physics',
        level: AchievementLevel.International,
        result: AchievementResult.BronzeMedal.withDescription('Bronze medal'),
        url: '',
    }),
    new Achievement({
        name: 'European Union Contest for Young Scientists (EUCYS)',
        year: '2021',
        subject: 'Computational Physics',
        level: AchievementLevel.International,
        result: AchievementResult.HonorableMention.withDescription('Ukraine representative'),
        url: '',
    }),
    new Achievement({
        name: 'JASU National Scientific work defense competition - Theoretical Physics',
        year: '2021',
        subject: 'Computational Physics',
        level: AchievementLevel.National,
        result: AchievementResult.GoldMedal.withDescription('First place'),
        url: '',
    })
]

const achievementsTableId = 'achievements-table';
const achievementsTable = document.getElementById(achievementsTableId);

for (const achievement of achievements) {
    achievement.spawnFrom(achievementsTable);
}