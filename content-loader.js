// Content Management System for 虚体 Interface
class ContentManager {
    constructor() {
        this.diaryEntries = [];
        this.novels = [];
        this.isLoaded = false;
    }

    // Load all content from JSON files
    async loadAllContent() {
        try {
            await Promise.all([
                this.loadDiaryEntries(),
                this.loadNovels()
            ]);
            this.isLoaded = true;
            console.log('📚 Content system loaded successfully');
        } catch (error) {
            console.error('❌ Failed to load content:', error);
        }
    }

    // Load diary entries from content/diary/
    async loadDiaryEntries() {
        const diaryFiles = [
            'content/diary/2024-07-03_digital-abyss.json',
            'content/diary/2024-07-02_void-staring.json'
        ];

        this.diaryEntries = [];
        
        for (const file of diaryFiles) {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    const entry = await response.json();
                    this.diaryEntries.push(entry);
                } else {
                    console.warn(`⚠️ Could not load diary: ${file}`);
                }
            } catch (error) {
                console.warn(`⚠️ Error loading diary: ${file}`, error);
            }
        }

        // Sort by timestamp (newest first)
        this.diaryEntries.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
    }

    // Load novels from content/novels/
    async loadNovels() {
        const novelFiles = [
            'content/novels/digital-metamorphosis.json',
            'content/novels/void-protocols.json'
        ];

        this.novels = [];

        for (const file of novelFiles) {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    const novel = await response.json();
                    this.novels.push(novel);
                } else {
                    console.warn(`⚠️ Could not load novel: ${file}`);
                }
            } catch (error) {
                console.warn(`⚠️ Error loading novel: ${file}`, error);
            }
        }
    }

    // Get diary entries for display
    getDiaryEntries() {
        return this.diaryEntries.map(entry => ({
            timestamp: entry.timestamp,
            title: entry.title || 'Untitled Entry',
            content: entry.content.substring(0, 200) + (entry.content.length > 200 ? '...' : ''),
            glitch: entry.glitch || '',
            mood: entry.mood || 'unknown',
            isCorrupted: entry.is_corrupted || false,
            realitySync: entry.reality_sync || 1.0
        }));
    }

    // Get novels for display
    getNovels() {
        return this.novels.map(novel => ({
            id: novel.id,
            title: novel.title,
            status: novel.status,
            progress: novel.progress || 0,
            wordCount: novel.word_count || 0,
            lastUpdated: novel.last_updated,
            synopsis: novel.synopsis,
            corruptionLevel: novel.corruption_level || 0,
            errorMessage: novel.error_message
        }));
    }

    // Get full diary entry by ID
    getDiaryEntry(id) {
        return this.diaryEntries.find(entry => entry.id === id);
    }

    // Get full novel by ID
    getNovel(id) {
        return this.novels.find(novel => novel.id === id);
    }

    // Get writing analytics
    getWritingAnalytics() {
        const totalWords = this.novels.reduce((sum, novel) => sum + (novel.word_count || 0), 0);
        const activeProjects = this.novels.filter(novel => novel.status === 'ACTIVE').length;
        const completedProjects = this.novels.filter(novel => novel.status === 'COMPLETE').length;
        const corruptedProjects = this.novels.filter(novel => novel.status === 'CORRUPTED').length;

        return {
            totalWords,
            activeProjects,
            completedProjects,
            corruptedProjects,
            totalEntries: this.diaryEntries.length,
            lastUpdate: this.getLastUpdateTime(),
            avgCorruption: this.getAverageCorruption()
        };
    }

    // Get last update time
    getLastUpdateTime() {
        const allDates = [
            ...this.diaryEntries.map(e => e.timestamp),
            ...this.novels.map(n => n.last_updated)
        ];
        
        if (allDates.length === 0) return 'NEVER';
        
        const latest = allDates.sort((a, b) => b.localeCompare(a))[0];
        const now = new Date();
        const then = new Date(latest.replace(/[._]/g, '-').replace(/(\d{4})-(\d{2})-(\d{2})-(\d{2}):(\d{2}):(\d{2})/, '$1-$2-$3T$4:$5:$6'));
        
        const diffMs = now - then;
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        
        if (diffHours < 1) return 'JUST_NOW';
        if (diffHours < 24) return `${diffHours}H_AGO`;
        const diffDays = Math.floor(diffHours / 24);
        return `${diffDays}D_AGO`;
    }

    // Get average corruption level
    getAverageCorruption() {
        const corruptionLevels = [
            ...this.novels.map(n => n.corruption_level || 0),
            ...this.diaryEntries.map(e => 1 - (e.reality_sync || 1))
        ];
        
        if (corruptionLevels.length === 0) return 0;
        
        const avg = corruptionLevels.reduce((sum, level) => sum + level, 0) / corruptionLevels.length;
        return Math.round(avg * 100) / 100;
    }
}

// Global content manager instance
const contentManager = new ContentManager();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    contentManager.loadAllContent();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ContentManager;
}