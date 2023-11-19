
/**
 * This enum is used to represent the result of an achievement
 */
export class AchievementResult {
    static GoldMedal = new AchievementResult('GoldMedal');
    static SilverMedal = new AchievementResult('SilverMedal');
    static BronzeMedal = new AchievementResult('BronzeMedal');
    static HonorableMention = new AchievementResult('HonorableMention');
  
    /**
     * Used for initializing the AchievementResult enum
     * @param {string} title of the achievement result enum
     */
    constructor(title) {
        // Defining enum-related information
        this.title = title;
        this.description = title;

        // Defining html-related information
        this.medalIcon = {
            'GoldMedal': 'em-first_place_medal',
            'SilverMedal': 'em-second_place_medal',
            'BronzeMedal': 'em-third_place_medal',
        }[title] ?? 'em-medal';
        this.className = {
            'GoldMedal': 'gold-medal',
            'SilverMedal': 'silver-medal',
            'BronzeMedal': 'bronze-medal',
        }[title] ?? 'neutral';
        this.classNameMobile = `${this.className}-phone`
    }
    /**
     * Sets the description of the achievement result
     * @param {string} description to be displayed near the medal 
     * @returns 
     */
    withDescription(description) {
        this.description = description;
        return this;
    }
    toString() {
        return `AchievementResult.${this.title}`;
    }
}