import { Achievement } from "./achievement.js";
import { AchievementLevel } from "./level.js";
import { AchievementResult } from "./result.js";

export const defaultAchievements = [
    new Achievement({
        name: 'Sahasak Nimavum Research competition',
        year: '2021',
        subject: 'Computational Physics',
        level: AchievementLevel.International,
        result: AchievementResult.SilverMedal.withDescription('Silver medal'),
        url: 'research.html',
    }),
    new Achievement({
        name: 'International Festival of Engineering Science and Technology in Tunisia (I-FEST)',
        year: '2021',
        subject: 'Computational Physics',
        level: AchievementLevel.International,
        result: AchievementResult.SilverMedal.withDescription('Silver medal'),
        url: 'research.html',
    }),
    new Achievement({
        name: 'International Zhautykov Physics Olympiad',
        year: '2021',
        subject: 'Physics',
        level: AchievementLevel.International,
        result: AchievementResult.BronzeMedal.withDescription('Bronze medal'),
        url: 'https://izho.kz/contest/results-izho-2021/',
    }),
    new Achievement({
        name: 'European Union Contest for Young Scientists (EUCYS)',
        year: '2021',
        subject: 'Computational Physics',
        level: AchievementLevel.International,
        result: AchievementResult.HonorableMention.withDescription('Ukraine representative'),
        url: 'https://eucys2021.usal.es/physics-07-2021/',
    }),
    new Achievement({
        name: 'JASU National Scientific work defense competition - Theoretical Physics',
        year: '2021',
        subject: 'Computational Physics',
        level: AchievementLevel.National,
        result: AchievementResult.GoldMedal.withDescription('First place'),
        url: 'research.html',
    })
]