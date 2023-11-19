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
}