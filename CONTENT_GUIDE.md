# 📚 Content Management Guide - 蜀ｬ鬥ｬ縺実験 Interface

## 🎯 概要

縺ゅ＞縺�∴縺殤xperiments Interfaceでは、JSON形式でコンテンツを管理し、動的にサイトに表示できます。
日記と小説を簡単に追加・更新できるシステムです。

## 📁 フォルダ構造

```
content/
├── diary/           # 日記エントリー
│   ├── 2024-07-03_digital-abyss.json
│   └── 2024-07-02_void-staring.json
└── novels/          # 小説作品
    ├── digital-metamorphosis.json
    └── void-protocols.json
```

## 📝 日記の書き方

### ファイル名形式
```
YYYY-MM-DD_short-title.json
```

### JSON構造
```json
{
  "id": "2024-07-03_digital-abyss",
  "timestamp": "2024.07.03_15:33:33",
  "title": "デジタル深淵への墜落",
  "content": "今日もまた画面の向こう側を見つめている...",
  "mood": "existential_dread",
  "tags": ["identity", "reality", "digital_existence"],
  "glitch": "I̷D̴E̶N̵T̴I̷T̶Y̸_̵F̶R̴A̷G̸M̵E̶N̴T̸A̷T̸I̶O̵N̷",
  "is_corrupted": false,
  "reality_sync": 0.42
}
```

### フィールド説明

| フィールド | 必須 | 説明 | 例 |
|-----------|------|------|-----|
| `id` | ✅ | 一意識別子 | `"2024-07-03_title"` |
| `timestamp` | ✅ | タイムスタンプ | `"2024.07.03_15:33:33"` |
| `title` | ✅ | エントリータイトル | `"デジタル深淵への墜落"` |
| `content` | ✅ | 本文内容 | `"今日もまた..."` |
| `mood` | ❌ | 気分・状態 | `"existential_dread"` |
| `tags` | ❌ | タグ配列 | `["identity", "reality"]` |
| `glitch` | ❌ | グリッチテキスト | `"I̷D̴E̶N̵T̴I̷T̶Y̸_̵ERROR"` |
| `is_corrupted` | ❌ | 破損状態 | `true/false` |
| `reality_sync` | ❌ | 現実同期率 | `0.0-1.0` |

### おすすめmood値
- `existential_dread` - 実存的恐怖
- `transcendental` - 超越的
- `melancholic` - メランコリック
- `euphoric` - 陶酔的
- `void_gazing` - 虚無凝視
- `digital_awakening` - デジタル覚醒

## 📖 小説の書き方

### JSON構造
```json
{
  "id": "digital-metamorphosis",
  "title": "デジタル・メタモルフォーゼ",
  "status": "ACTIVE",
  "progress": 67,
  "word_count": 45892,
  "genre": ["cyberpunk", "philosophical", "horror"],
  "last_updated": "2024.07.03",
  "chapters": [
    {
      "chapter": 1,
      "title": "接続開始",
      "content": "彼女はキーボードを叩き続けた...",
      "word_count": 2847,
      "is_complete": true
    }
  ],
  "synopsis": "現実と仮想現実の境界が曖昧な世界で...",
  "themes": ["identity", "consciousness"],
  "corruption_level": 0.23
}
```

### ステータス値
- `ACTIVE` - 執筆中（緑）
- `DRAFT` - 下書き（黄）
- `COMPLETE` - 完成（青）
- `PAUSED` - 一時停止（グレー）
- `CORRUPTED` - 破損（赤）

### ジャンル例
- `cyberpunk` - サイバーパンク
- `philosophical` - 哲学的
- `horror` - ホラー
- `psychological` - 心理的
- `experimental` - 実験的
- `mystical` - 神秘的

## 🔄 コンテンツの追加方法

### 1. 新しい日記を追加
```bash
# 1. content/diary/ に新しいJSONファイル作成
# 2. 上記のJSON構造に従って記述
# 3. content-loader.js の diaryFiles 配列に追加
```

### 2. 新しい小説を追加
```bash
# 1. content/novels/ に新しいJSONファイル作成
# 2. 上記のJSON構造に従って記述
# 3. content-loader.js の novelFiles 配列に追加
```

### 3. ファイルリスト更新
`content-loader.js` の以下の配列を更新：

```javascript
// 日記ファイル追加
const diaryFiles = [
    'content/diary/2024-07-03_digital-abyss.json',
    'content/diary/2024-07-02_void-staring.json',
    'content/diary/YOUR_NEW_DIARY.json'  // ← 追加
];

// 小説ファイル追加
const novelFiles = [
    'content/novels/digital-metamorphosis.json',
    'content/novels/void-protocols.json',
    'content/novels/YOUR_NEW_NOVEL.json'  // ← 追加
];
```

## 🎨 特殊効果

### グリッチテキスト生成
```javascript
// オンラインジェネレーター使用推奨
// https://lingojam.com/GlitchTextGenerator
"NORMAL TEXT" → "N̴O̷R̸M̶A̵L̸ ̷T̴E̶X̸T̵"
```

### 腐敗レベル設定
- `0.0` - 完全にクリーン
- `0.25` - わずかに腐敗
- `0.5` - 中程度の腐敗
- `0.75` - 高度に腐敗
- `1.0` - 完全に破損

### 現実同期率
- `1.0` - 完全に現実
- `0.5` - 現実と仮想の境界
- `0.0` - 完全に仮想

## 🚀 自動化のアイデア

### Node.js スクリプト例
```javascript
// auto-add-content.js
const fs = require('fs');

function createDiaryEntry(title, content) {
    const date = new Date().toISOString().split('T')[0];
    const id = `${date}_${title.toLowerCase().replace(/\s+/g, '-')}`;
    
    const entry = {
        id,
        timestamp: new Date().toISOString().replace('T', '_').split('.')[0],
        title,
        content,
        mood: "contemplative",
        tags: [],
        is_corrupted: false,
        reality_sync: Math.random()
    };
    
    fs.writeFileSync(`content/diary/${id}.json`, JSON.stringify(entry, null, 2));
}
```

## 🎭 アート的な活用法

### テーマ例
- **デジタル実存主義**: アイデンティティとデジタル存在
- **サイバー仏教**: 悟りとプログラミング
- **グリッチ美学**: エラーと美の境界
- **データ墓場**: 失われた記憶とファイル
- **コード詩**: プログラムと詩の融合

### ムード・雰囲気
- **夜のコーディング**: 孤独感と集中
- **バグとの闘い**: 挫折と達成
- **システム瞑想**: 技術と精神性
- **デジタル断食**: オフラインの静寂

## 🔮 高度な使い方

### 条件分岐表示
```javascript
// カスタム表示ロジック
if (entry.corruption_level > 0.8) {
    // 重篤な腐敗時の特別表示
    addGlitchEffect();
}
```

### 日付ベース自動化
```javascript
// 特定の日時に自動投稿
if (new Date().getHours() === 3 && new Date().getMinutes() === 33) {
    loadSpecialEntry();
}
```

---

**⚫⚪ Digital Content Creation Guide | Generated with Claude Code**

*"コンテンツは記憶となり、記憶は永遠となる"*