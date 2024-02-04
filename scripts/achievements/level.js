//! This file contains the AchievementLevel class.

export class AchievementLevel {
    static International = new AchievementLevel('International');
    static National = new AchievementLevel('National');
    static Regional = new AchievementLevel('Regional');
    
    constructor(title) {
        this.title = title;
    }
    
    toString() {
        return `AchievementLevel.${this.title}`;
    }

    /**
     * Converts an int representation of the achievement level to the enum
     * @param {int} value - value of the achievement level 
     */
    static fromInt(value) {
        return {
            1: AchievementLevel.International,
            2: AchievementLevel.National,
            3: AchievementLevel.Regional,
        }[value] ?? AchievementLevel.Regional;
    }
}