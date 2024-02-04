import { Achievement } from './achievement.js';
import { AchievementLevel } from './level.js';
import { AchievementResult } from './result.js';

export class Parser {
    /**
     * Parses the achievements from the JSON file.
     * @param {list} achievements - array of achievements
     * @returns {Achievement[]} - array of achievements
     */
    parseAchievements(achievements) {
        return achievements.map((element) => {
            const { name, url, year, subject, level, place, result } = element.attributes

            return new Achievement({
                name: name,
                year: year,
                subject: subject,
                level: AchievementLevel.fromInt(level),
                result: AchievementResult.fromInt(place).withDescription(result),
                url: url,
            })
        });
    }
}