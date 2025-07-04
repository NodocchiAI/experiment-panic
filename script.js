// Remove cursor trail functionality - back to default cursor

// Time Display
function updateTime() {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0];
    document.getElementById('time').textContent = timeString;
}

updateTime();
setInterval(updateTime, 1000);

// Navigation System
const navButtons = document.querySelectorAll('.nav-btn');
const contentGrid = document.querySelector('.content-grid');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        navButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const target = button.getAttribute('data-target');
        switchSection(target);
    });
});

function switchSection(sectionName) {
    switch(sectionName) {
        case 'terminal':
            showTerminalView();
            break;
        case 'diary':
            showDiaryView();
            break;
        case 'novels':
            showNovelsView();
            break;
        case 'analysis':
            showAnalysisView();
            break;
    }
}

function showTerminalView() {
    contentGrid.innerHTML = `
        <section class="terminal-panel">
            <div class="panel-header">
                <span>WIRED_TERMINAL</span>
                <div class="panel-controls">
                    <span class="control-dot red"></span>
                    <span class="control-dot yellow"></span>
                    <span class="control-dot green"></span>
                </div>
            </div>
            <div class="terminal-content">
                <div class="code-line">
                    <span class="prompt">lain@wired:~$</span>
                    <span class="command">connect --layer protocol7</span>
                </div>
                <div class="code-line">
                    <span class="output">Establishing connection to the Wired...</span>
                </div>
                <div class="code-line">
                    <span class="output">Identity verification: PRESENT DAY... PRESENT TIME</span>
                </div>
                <div class="code-line">
                    <span class="output">Loading diary entries...</span>
                </div>
                <div class="code-line">
                    <span class="output">Loading novel database...</span>
                </div>
                <div class="code-line">
                    <span class="prompt">lain@wired:~$</span>
                    <span class="cursor-blink">_</span>
                </div>
            </div>
        </section>

        <section class="video-panel">
            <div class="panel-header">
                <span>VISUAL_FEED</span>
                <div class="panel-controls">
                    <span class="control-dot red"></span>
                    <span class="control-dot yellow"></span>
                    <span class="control-dot green"></span>
                </div>
            </div>
            <div class="video-content">
                <img src="assets/test_gif.gif" class="bg-video" alt="Glitch Girl Animation">
                <div class="video-overlay">
                    <div class="overlay-text">
                        <div class="large-text">אני מי?</div>
                        <div class="small-text">soul.dll corrupted by digital daemons</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="data-viz-panel">
            <div class="panel-header">SYSTEM_PARAMETERS</div>
            <div class="data-content">
                <div class="parameter-grid">
                    <div class="metric">
                        <span class="metric-label">DIARY_ENTRIES</span>
                        <span class="metric-value">∞</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">NOVELS_ACTIVE</span>
                        <span class="metric-value">127</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">CONNECTION</span>
                        <span class="metric-value error">UNSTABLE</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">DREAM_LAYERS</span>
                        <span class="metric-value">7</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">SOUL_INTEGRITY</span>
                        <span class="metric-value warning">47.3%</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">MEMORY_USAGE</span>
                        <span class="metric-value">923.4MB</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">CONSCIOUSNESS</span>
                        <span class="metric-value error">FRAGMENTED</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">REALITY_SYNC</span>
                        <span class="metric-value">0.783</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">ABYSS_DEPTH</span>
                        <span class="metric-value warning">∞m</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">NIRVANA_PROGRESS</span>
                        <span class="metric-value">23.7%</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">VOID_DETECTION</span>
                        <span class="metric-value error">ACTIVE</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">DEATH_PROXIMITY</span>
                        <span class="metric-value warning">APPROACHING</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="diary-panel">
            <div class="panel-header">MEMORY_LOG</div>
            <div class="diary-entries" id="dynamicDiaryEntries">
                <!-- Diary entries will be loaded dynamically -->
                <div class="loading-message">Loading memories from the void...</div>
            </div>
        </section>

        <section class="novel-panel">
            <div class="panel-header">FICTION_DATABASE</div>
            <div class="novel-grid" id="dynamicNovels">
                <!-- Novels will be loaded dynamically -->
                <div class="loading-message">Loading fiction from digital archives...</div>
            </div>
        </section>

        <section class="graphics-panel">
            <div class="abstract-shapes">
                <div class="shape shape-1"></div>
                <div class="shape shape-2"></div>
                <div class="shape shape-3"></div>
                <div class="barcode"></div>
                <div class="wireframe-cube"></div>
            </div>
            <div class="text-overlay">
                <div class="glitch-text" data-text="HANDLE_WITH_CARE;">HANDLE_WITH_CARE;</div>
                <div class="coordinates">X: 127.0.0.1 | Y: ∞ | Z: NULL</div>
            </div>
        </section>
    `;
    
    // Load dynamic content after rendering
    setTimeout(() => {
        loadDynamicDiary();
        loadDynamicNovels();
    }, 100);
    
    addEntryClickHandlers();
}

function showDiaryView() {
    contentGrid.innerHTML = `
        <section class="diary-panel" style="grid-column: span 3;">
            <div class="panel-header">MEMORY_ARCHIVE // SERIAL_EXPERIMENTS</div>
            <div class="diary-entries" style="max-height: 500px;">
                <div class="entry-item" onclick="window.location.href='diary-entry.html?id=2024-07-03_digital-abyss'" style="cursor: pointer;">
                    <div class="entry-timestamp">2024.07.02_20:30:15</div>
                    <div class="entry-content">現実と仮想の境界が曖昧になっている。Wiredの中で自分を見つけた時、それは本当の自分なのだろうか？昨日のように、画面の向こう側から誰かが私を見ているような感覚がある。それは私自身なのか、それとも別の存在なのか。</div>
                    <div class="entry-glitch">E̴R̷R̸O̶R̵_̸M̷E̴M̸O̷R̶Y̵_̴C̶O̸R̷R̸U̶P̴T̵E̷D̸</div>
                </div>
                <div class="entry-item" onclick="window.location.href='diary-entry.html?id=2024-07-02_void-staring'" style="cursor: pointer;">
                    <div class="entry-timestamp">2024.07.01_03:15:42</div>
                    <div class="entry-content">誰もが接続されている。誰もが一人でいる。この矛盾こそがWiredの本質なのかもしれない。深夜のネットサーフィンで見つけた記事。「デジタル孤独症候群」という言葉が妙に心に残る。私たちは本当に繋がっているのだろうか？</div>
                </div>
                <div class="entry-item">
                    <div class="entry-timestamp">2024.06.30_23:59:59</div>
                    <div class="entry-content">リアルとサイバースペースの区別がつかなくなってきた。これが進化なのか、それとも退化なのか。友達とチャットしていても、それが本当にその人なのか確信が持てない。言葉だけでは伝わらない何かがある。</div>
                </div>
                <div class="entry-item">
                    <div class="entry-timestamp">2024.06.29_16:20:33</div>
                    <div class="entry-content">「あなたは誰ですか？」という質問に答えられなくなった。物理的な私、デジタル上の私、そして他者が認識する私。どれが本当の私なのだろう？鏡を見ても、そこにいるのは本当に私なのかわからない。</div>
                    <div class="entry-glitch">I̷D̴E̶N̵T̴I̷T̶Y̸_̵N̶O̴T̷_̸F̵O̶U̷N̴D̸</div>
                </div>
                <div class="entry-item">
                    <div class="entry-timestamp">2024.06.28_02:47:18</div>
                    <div class="entry-content">夢の中でもコンピューターの画面を見ている。現実と夢の境界も曖昧になってきた。起きているのか寝ているのかわからない時間が増えている。時間という概念自体が意味を失いつつある。</div>
                </div>
                <div class="entry-item">
                    <div class="entry-timestamp">2024.06.27_19:35:01</div>
                    <div class="entry-content">小説を書いている時が一番自分らしい。創作の中でなら、自分が何者なのかを探求できる。キャラクターを通して自分自身を理解しようとしている。フィクションの方がリアルより真実に近いのかもしれない。</div>
                </div>
            </div>
        </section>
    `;
    
    addEntryClickHandlers();
}

function showNovelsView() {
    contentGrid.innerHTML = `
        <section class="novel-panel" style="grid-column: span 2;">
            <div class="panel-header">FICTION_DATABASE // CREATIVE_OUTPUT</div>
            <div class="novel-grid" style="max-height: 500px; overflow-y: auto;">
                <div class="novel-item" onclick="window.location.href='novel-view.html?id=digital-metamorphosis&chapter=1'" style="cursor: pointer;">
                    <div class="novel-status">ACTIVE</div>
                    <div class="novel-title">電子の海の向こう側</div>
                    <div class="novel-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 67%"></div>
                        </div>
                        <span>67% COMPLETE | 45,892 WORDS</span>
                    </div>
                    <div class="novel-preview">彼女はキーボードを叩き続けた。画面の向こう側に答えがあると信じて。しかし、入力すればするほど、自分が何者なのかわからなくなっていく...</div>
                </div>
                <div class="novel-item" onclick="window.location.href='novel-view.html?id=void-protocols&chapter=1'" style="cursor: pointer;">
                    <div class="novel-status">DRAFT</div>
                    <div class="novel-title">接続された孤独</div>
                    <div class="novel-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 23%"></div>
                        </div>
                        <span>23% COMPLETE | 8,754 WORDS</span>
                    </div>
                    <div class="novel-preview">SNSで繋がった数千人の友達。でも本当の意味で理解してくれる人は一人もいない。デジタル時代の新しい孤独について...</div>
                </div>
                <div class="novel-item">
                    <div class="novel-status">ERROR</div>
                    <div class="novel-title">私は存在するか？</div>
                    <div class="novel-progress">
                        <div class="progress-bar error">
                            <div class="progress-fill" style="width: 100%"></div>
                        </div>
                        <span>FILE_CORRUPTED | DATA_LOST</span>
                    </div>
                    <div class="novel-preview" style="color: #ff0000; opacity: 0.7;">ファイルが破損しています。バックアップを探していますが、もしかするとこの小説は存在しなかったのかもしれません...</div>
                </div>
                <div class="novel-item">
                    <div class="novel-status">COMPLETE</div>
                    <div class="novel-title">デジタル・ゴースト</div>
                    <div class="novel-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 100%"></div>
                        </div>
                        <span>COMPLETE | 67,234 WORDS</span>
                    </div>
                    <div class="novel-preview">死後もネット上に残り続けるデジタルアイデンティティ。彼らは本当に死んだのか、それとも新しい形で生き続けているのか...</div>
                </div>
                <div class="novel-item">
                    <div class="novel-status">PAUSED</div>
                    <div class="novel-title">仮想現実症候群</div>
                    <div class="novel-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 89%"></div>
                        </div>
                        <span>PAUSED | 92,156 WORDS</span>
                    </div>
                    <div class="novel-preview">VRの世界に没入しすぎて現実に戻れなくなった人々。技術の進歩は人間を幸せにするのか、それとも...</div>
                </div>
            </div>
        </section>
        
        <section class="data-viz-panel">
            <div class="panel-header">WRITING_ANALYTICS</div>
            <div class="data-content">
                <div class="parameter-grid">
                    <div class="metric">
                        <span class="metric-label">TOTAL_WORDS</span>
                        <span class="metric-value">314,036</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">ACTIVE_PROJECTS</span>
                        <span class="metric-value">5</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">COMPLETION_RATE</span>
                        <span class="metric-value">63.2%</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">LAST_UPDATE</span>
                        <span class="metric-value">2H_AGO</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">INSPIRATION_LEVEL</span>
                        <span class="metric-value error">UNSTABLE</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">WRITER_BLOCK</span>
                        <span class="metric-value warning">73.1%</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">FLOW_STATE</span>
                        <span class="metric-value">0.34</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">CREATIVITY_INDEX</span>
                        <span class="metric-value warning">LOW</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">DEADLINE_STRESS</span>
                        <span class="metric-value error">HIGH</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">CAFFEINE_LEVEL</span>
                        <span class="metric-value">350mg</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">EXISTENTIAL_DREAD</span>
                        <span class="metric-value warning">RISING</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">VOID_STARING</span>
                        <span class="metric-value error">47min</span>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    addNovelClickHandlers();
}

function showAnalysisView() {
    contentGrid.innerHTML = `
        <section class="graphics-panel" style="grid-column: span 2;">
            <div class="panel-header">PSYCHOGRAPHIC_ANALYSIS // NEURAL_PATTERN</div>
            <div class="abstract-shapes">
                <div class="shape shape-1"></div>
                <div class="shape shape-2"></div>
                <div class="shape shape-3"></div>
                <div class="barcode"></div>
                <div class="wireframe-cube"></div>
            </div>
            <div class="analysis-waves" style="position: absolute; top: 60px; left: 20px; right: 20px; bottom: 80px;">
                <div style="position: relative; width: 100%; height: 100%; border: 1px solid rgba(0,255,255,0.3); background: rgba(0,255,255,0.05);">
                    <div style="position: absolute; top: 20%; left: 0; right: 0; height: 2px; background: #ffffff; animation: waveMove1 3s ease-in-out infinite;"></div>
                    <div style="position: absolute; top: 40%; left: 0; right: 0; height: 2px; background: #ffffff; animation: waveMove2 2.5s ease-in-out infinite;"></div>
                    <div style="position: absolute; top: 60%; left: 0; right: 0; height: 2px; background: #ffffff; animation: waveMove3 4s ease-in-out infinite;"></div>
                    <div style="position: absolute; top: 80%; left: 0; right: 0; height: 2px; background: #ffffff; animation: waveMove4 3.5s ease-in-out infinite;"></div>
                </div>
            </div>
            <div class="text-overlay">
                <div class="glitch-text" data-text="IDENTITY_FRAGMENTATION_DETECTED">IDENTITY_FRAGMENTATION_DETECTED</div>
                <div class="coordinates">SCAN_DEPTH: ∞ | COHERENCE: 23.7% | STATUS: ANALYZING</div>
            </div>
        </section>
        
        <section class="data-viz-panel">
            <div class="panel-header">COGNITIVE_METRICS</div>
            <div class="data-content">
                <div class="data-metrics">
                    <div class="metric">
                        <span class="metric-label">CREATIVITY_INDEX</span>
                        <span class="metric-value">87.4%</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">REALITY_PERCEPTION</span>
                        <span class="metric-value">UNSTABLE</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">SOCIAL_CONNECTIVITY</span>
                        <span class="metric-value">34.2%</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">DIGITAL_DEPENDENCY</span>
                        <span class="metric-value">HIGH</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">IDENTITY_COHESION</span>
                        <span class="metric-value">FRAGMENTING</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">EXISTENTIAL_ANXIETY</span>
                        <span class="metric-value">CRITICAL</span>
                    </div>
                </div>
                <div style="margin-top: 30px; padding: 15px; border: 1px solid rgba(255,0,0,0.5); background: rgba(255,0,0,0.1);">
                    <div style="font-family: 'VT323', monospace; color: #ff0000; font-size: 12px; animation: errorBlink 1s infinite;">
                        WARNING: PSYCHOLOGICAL_INTEGRATION_FAILURE
                    </div>
                    <div style="font-size: 10px; color: #ffffff; margin-top: 8px; opacity: 0.8;">
                        複数のアイデンティティパターンが検出されました。統合的な自己概念の形成に困難が生じている可能性があります。
                    </div>
                </div>
            </div>
        </section>
    `;
}

function addEntryClickHandlers() {
    const entryItems = document.querySelectorAll('.entry-item');
    entryItems.forEach(entry => {
        entry.addEventListener('click', () => {
            // Add glitch effect
            entry.style.animation = 'glitchText 0.5s';
            setTimeout(() => {
                entry.style.animation = '';
            }, 500);
            
            // Random glitch text effect
            const content = entry.querySelector('.entry-content');
            const originalText = content.textContent;
            
            // Temporarily show corrupted text
            setTimeout(() => {
                content.textContent = glitchifyText(originalText);
                setTimeout(() => {
                    content.textContent = originalText;
                }, 200);
            }, 100);
        });
    });
}

function addNovelClickHandlers() {
    const novelItems = document.querySelectorAll('.novel-item');
    novelItems.forEach(novel => {
        novel.addEventListener('click', () => {
            // Add selection effect
            novel.style.transform = 'translateX(10px)';
            novel.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
            
            setTimeout(() => {
                novel.style.transform = '';
                novel.style.boxShadow = '';
            }, 300);
        });
    });
}

function glitchifyText(text) {
    const glitchChars = ['█', '▓', '▒', '░', '▼', '▲', '●', '◆', '■', '□'];
    return text.split('').map(char => {
        return Math.random() < 0.3 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char;
    }).join('');
}

// Random system glitches with death themes
function randomSystemGlitch() {
    const elements = document.querySelectorAll('.metric-value, .status-text, .coordinates');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    
    const deathGlitches = [
        '◆◇◆ERROR◇◆◇',
        'DEATH.EXE',
        'MEMENTO_MORI',
        'HELL_GATES',
        'MORTALITY++',
        'SOULS.DLL',
        'INFEK_BIN_LADEN'
    ];
    
    if (randomElement) {
        const originalText = randomElement.textContent;
        const glitchText = deathGlitches[Math.floor(Math.random() * deathGlitches.length)];
        randomElement.textContent = glitchText;
        randomElement.style.color = '#8b0000';
        randomElement.style.animation = 'glitchText 0.3s infinite';
        
        setTimeout(() => {
            randomElement.textContent = originalText;
            randomElement.style.color = '';
            randomElement.style.animation = '';
        }, 500);
    }
}

// Background video error simulation
function simulateVideoError() {
    const videoPanel = document.querySelector('.video-panel');
    if (videoPanel) {
        const overlay = videoPanel.querySelector('.video-overlay');
        const errorDiv = document.createElement('div');
        errorDiv.style.position = 'absolute';
        errorDiv.style.top = '10px';
        errorDiv.style.right = '10px';
        errorDiv.style.color = '#ff0000';
        errorDiv.style.fontFamily = 'VT323, monospace';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.animation = 'errorBlink 1s infinite';
        errorDiv.textContent = 'VIDEO_STREAM_CORRUPTED';
        
        overlay.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }
}

// Enhanced Terminal command simulation with corruption
function simulateTerminalActivity() {
    const terminalContent = document.querySelector('.terminal-content');
    if (!terminalContent) return;
    
    const commands = [
        'summon --daemon malphas',
        'grep -r "קדוש" /sefirot/keter/',
        'find /grimoire -name "*.sigil" -type f',
        'hexdump /dev/soul | head -c 20',
        'whoami && echo $ANGEL_NAME',
        'ls -la /library/dead_sea_scrolls/',
        'netstat -an | grep "abyss"',
        'invoke solomon_key --ring 72',
        'ps aux | grep daemon',
        'mount /dev/consciousness /mind',
        'cat /proc/reality/status',
        'ssh lain@layer07.wired',
        'decode --format ascii /tmp/memory.dump',
        'nmap -sS cyberia.net',
        'tcpdump -i wired0 port 23',
        'systemctl status identity.service',
        'chmod 777 /home/lain/present_day',
        'rm -rf /var/log/childhood/*',
        'wget http://cyberia.club/bear.exe',
        'git clone https://github.com/god/universe.git',
        'examine --file /hell/manifestations.db',
        'trace --process death.exe',
        'monitor /dev/mortality',
        'scan --depth infinite /abyss/',
        'decrypt /scrolls/revelation.enc',
        'execute memento_mori.sh',
        'analyze --pattern suffering /logs/',
        'summon --entity theriomorph',
        'invoke --seal infinite_compassion',
        'compile darkness.c -o enlightenment',
        'navigate --portal abyss.html',
        'ls -la /void/consciousness/',
        'cd /transformation/digital_death/',
        'cat /meditation/memento_mori.txt',
        'access --grid void_navigation'
    ];
    
    const outputs = [
        'Daemon malphas.exe corrupted: soul.dll missing',
        'Binary match: ה ך ל ו ח ו ת  fragment found',
        'Sigil files encrypted with angelic script',
        'Soul data stream: ◆◇מ▓ט▒ר░ו▼ן▲●◆',
        'uid=metatron gid=seraphim groups=cherubim',
        'Scroll fragments: apocalypse.txt corrupted',
        'Connection to abyss: FORBIDDEN_ACCESS',
        'Solomon ring activated: 72 daemons bound',
        'root      1337  0.0  66.6  ∞       ?    Ss   ??:??  0:00 /sbin/god',
        'mount: /mind: permission denied (are you lain?)',
        'reality.status: QUESTIONABLE | uptime: ∞ | load: 蜀ｬ鬥ｬ縺',
        'ssh: connect to host layer07.wired port 22: 縺ゅ＞縺�∴縺�',
        'decoded: I AM... WHO AM I? 誰が私を見ているの？',
        'Host cyberia.net (127.0.0.1) appears to be up',
        '03:33:33.333 IP wired > consciousness: PSH 蜀ｬ鬥ｬ繝�',
        'identity.service: �撰ｼ托ｼ抵ｼ���ｽゑｽ� FAILED (code=404)',
        'chmod: cannot access \'/home/lain/present_day\': 讖溯�繝ｻ遐皮ｩｶ',
        'rm: cannot remove \'childhood\': �樞包ｼ搾ｼ�ｿ��｡繹ｱ竭�竇｡',
        'bear.exe: Downloaded. WARNING: 譁�ｭ怜喧縺代ヱ繧ｿ繝ｼ繝ｳ detected',
        'fatal: repository \'https://github.com/god/universe.git\' not found',
        'Hell manifestations database: 99.9% corrupted',
        'Process death.exe: Status=INEVITABLE, PID=∞',
        'Mortality device: /dev/mortality: No such salvation',
        'Infinite depth scan: 死者が囁いている...',
        'Decryption failed: Key requires suffering.key',
        'memento_mori.sh: Executed. Remember you must die.',
        'Pattern analysis: suffering detected in 100% of files',
        'Entity theriomorph: Manifestation in lotus position',
        'Infinite compassion: Seal activated. Peace emerges.',
        'Compilation successful: enlightenment through darkness',
        'Portal access granted: intro.html ready',
        'Consciousness fragments: consciousness.html loaded',
        'Digital death path: transformation.html active',
        'Meditation chamber: meditation.html accessible',
        'Void grid online: void-grid.html connected'
    ];
    
    // Enhanced corruption patterns
    const corruptionPatterns = [
        'ERROR: �ｱ�ｲ�ｳ�ｴ�ｵ MEMORY LEAK DETECTED',
        'WARNING: �ｧ�ｨ�ｩ�ｪ繧ｩ STACK OVERFLOW',
        'CRITICAL: 蜀ｬ鬥ｬ縺九★縺 SEGMENTATION FAULT',
        'ALERT: 縺ゅ＞縺�∴縺� BUFFER UNDERRUN', 
        'PANIC: 讖溯�繝ｻ遐皮ｩｶ KERNEL CORRUPTION',
        'FATAL: �撰ｼ托ｼ抵ｼ���ｽゑｽ� SYSTEM FAILURE',
        'ERROR: 譁�ｭ怜喧縺代ヱ繧ｿ繝ｼ繝ｳ PARSE ERROR',
        'WARNING: �樞包ｼ搾ｼ�ｿ��｡繹ｱ竭�竇｡ IDENTITY CRISIS',
        'DEATH: Approaching through digital realm... memento mori',
        'HELL: Gates opening... infinite compassion detected',
        'MORTALITY: Buffer overflow in /dev/soul',
        'REVELATION: The archetypal theriomorph whispers truth'
    ];
    
    // Remove cursor
    const cursor = terminalContent.querySelector('.cursor-blink');
    if (cursor) cursor.remove();
    
    // Add new command
    const commandIndex = Math.floor(Math.random() * commands.length);
    const newCommand = document.createElement('div');
    newCommand.className = 'code-line';
    newCommand.innerHTML = `
        <span class="prompt">lain@wired:~$</span>
        <span class="command">${commands[commandIndex]}</span>
    `;
    terminalContent.appendChild(newCommand);
    
    // Add output after shorter delay
    setTimeout(() => {
        const outputLine = document.createElement('div');
        outputLine.className = 'code-line';
        
        // Random corruption chance
        if (Math.random() < 0.3) {
            const corruptIndex = Math.floor(Math.random() * corruptionPatterns.length);
            outputLine.innerHTML = `<span class="output" style="color: #ff0040; animation: errorFlash 1s infinite;">${corruptionPatterns[corruptIndex]}</span>`;
        } else {
            outputLine.innerHTML = `<span class="output">${outputs[commandIndex]}</span>`;
        }
        
        terminalContent.appendChild(outputLine);
        
        // Multiple output lines sometimes
        if (Math.random() < 0.4) {
            setTimeout(() => {
                const extraLine = document.createElement('div');
                extraLine.className = 'code-line';
                const extraOutputs = [
                    '蜀ｬ鬥ｬ縺九★縺... loading... �ｱ�ｲ�ｳ',
                    'Processing... 縺ゅ＞縺�∴縺�... complete',
                    'Analyzing... 讖溯�繝ｻ遐皮ｩｶ... failed',
                    'Connecting... �撰ｼ托ｼ抵ｼ���ｽゑｽ�... timeout',
                    'Decrypting... 譁�ｭ怜喧縺代ヱ繧ｿ繝ｼ繝ｳ... error'
                ];
                extraLine.innerHTML = `<span class="output" style="opacity: 0.7;">${extraOutputs[Math.floor(Math.random() * extraOutputs.length)]}</span>`;
                terminalContent.appendChild(extraLine);
            }, 300);
        }
        
        // Add new prompt with cursor
        setTimeout(() => {
            const promptLine = document.createElement('div');
            promptLine.className = 'code-line';
            promptLine.innerHTML = `
                <span class="prompt">lain@wired:~$</span>
                <span class="cursor-blink">_</span>
            `;
            terminalContent.appendChild(promptLine);
            
            // Keep only last 20 lines (more space)
            const lines = terminalContent.querySelectorAll('.code-line');
            if (lines.length > 20) {
                for (let i = 0; i < lines.length - 20; i++) {
                    lines[i].remove();
                }
            }
        }, 500);
        
        // Check for special navigation commands
        addSpecialCommands();
        
    }, 500 + Math.random() * 1000); // Faster response
}

// Special terminal commands for navigation
function addSpecialCommands() {
    const terminalContent = document.querySelector('.terminal-content');
    if (!terminalContent) return;
    
    // Check for special navigation commands
    const lastCommand = terminalContent.querySelector('.code-line:last-child .command');
    if (lastCommand) {
        const commandText = lastCommand.textContent.toLowerCase();
        
        if (commandText.includes('abyss') || commandText.includes('portal')) {
            setTimeout(() => {
                const navLine = document.createElement('div');
                navLine.className = 'code-line';
                navLine.innerHTML = `<span class="output" style="color: #8b0000; cursor: pointer;" onclick="window.location.href='intro.html'">→ Click to enter the digital abyss portal</span>`;
                terminalContent.appendChild(navLine);
            }, 1000);
        }
        
        if (commandText.includes('consciousness') || commandText.includes('fragment')) {
            setTimeout(() => {
                const navLine = document.createElement('div');
                navLine.className = 'code-line';
                navLine.innerHTML = `<span class="output" style="color: #8b0000; cursor: pointer;" onclick="window.location.href='consciousness.html'">→ Click to fragment your consciousness</span>`;
                terminalContent.appendChild(navLine);
            }, 1000);
        }
        
        if (commandText.includes('void') || commandText.includes('grid')) {
            setTimeout(() => {
                const navLine = document.createElement('div');
                navLine.className = 'code-line';
                navLine.innerHTML = `<span class="output" style="color: #8b0000; cursor: pointer;" onclick="window.location.href='void-grid.html'">→ Click to enter the void navigation grid</span>`;
                terminalContent.appendChild(navLine);
            }, 1000);
        }
    }
}

// Horror Grid System with Non-Repeating Images
const allAssetImages = [
    'assets/434abd472fb93950e2f31718ae8a0214.jpg',
    'assets/53d556c8c632f5f710206f2ea661daa7.jpg',
    'assets/5bc7e2da68426270347050a435314ac4.jpg',
    'assets/6105ba003b1963af2d251c37e493a0f9.jpg',
    'assets/6133ddc44dea98aa5cd68a48f1f8a755.jpg',
    'assets/84250909c426271deaaa3f848075a351.jpg',
    'assets/8523cd3c178aa0fcf04cf99c0988a3e8.jpg',
    'assets/8be11e3f4b25ec70b0b9a82701d687ae.jpg',
    'assets/9da70b468455b190dc2de84256063ff1.jpg',
    'assets/a0876d40767fb0274aab89c122ebb2ea.jpg',
    'assets/bf5a138a99a927b2d9591f9692581fd8.jpg',
    'assets/cb1adbf2c8f8e152c96ccd8c2fc0ffb8.jpg',
    'assets/cursed1.jpg',
    'assets/cursed2.jpg',
    'assets/cursed3.jpg',
    'assets/cursed4.jpg',
    'assets/cursed6.jpg',
    'assets/cursed7.jpg',
    'assets/cursed8.jpg',
    'assets/cursed9.jpg',
    'assets/d88631dd3477c5e431650ca7bccdfc90.jpg',
    'assets/e6231b056e2ac44621690f27c19d6ef3.jpg',
    'assets/eb2653e4bdbf32dab3cba05fc01dc224.jpg',
    'assets/whiteblack1.jpg',
    'assets/whiteblack2.jpg',
    'assets/whiteblack3.jpg',
    'assets/whiteblack4.jpg',
    'assets/whiteblack5.jpg',
    'assets/whiteblack6.jpg',
    'assets/whiteblack7.jpg',
    'assets/sanmple1.jpg',
    'assets/sample2.jpg',
    'assets/sample3.jpg',
    'assets/sample4.jpg',
    'assets/sample5.jpg',
    'assets/sample6.jpg',
    'assets/sample7.jpg',
    'assets/sample8.jpg',
    'assets/sample9.jpg',
    'assets/sample10.jpg'
];

const horrorTexts = [
    'DEATH.EXE',
    'SOUL_CORRUPT',
    'VOID_DETECTED',
    'HELL_GATES',
    'NIGHTMARE.DLL',
    'PANIC_MODE',
    'REALITY_ERROR',
    'DIGITAL_GHOST',
    'MEMORY_LEAK',
    'CONSCIOUSNESS.BIN',
    'INFINITE_LOOP',
    'SYSTEM_CORRUPT',
    'NULL_POINTER',
    'STACK_OVERFLOW',
    'SEGFAULT',
    'BUFFER_UNDERRUN',
    'ACCESS_DENIED',
    'FATAL_ERROR',
    'CORE_DUMP',
    'PROCESS_TERMINATED',
    'SIGNAL_KILL',
    'EXCEPTION_THROWN',
    'MEMORY_VIOLATION',
    'STACK_SMASH',
    'HEAP_CORRUPTION',
    'RACE_CONDITION',
    'DEADLOCK_DETECTED',
    'ZOMBIE_PROCESS',
    'ORPHAN_THREAD',
    'RESOURCE_LEAK'
];

let usedImages = new Set();

function getUniqueRandomImage() {
    // Reset if all images have been used
    if (usedImages.size >= allAssetImages.length) {
        usedImages.clear();
    }
    
    let availableImages = allAssetImages.filter(img => !usedImages.has(img));
    const randomImage = availableImages[Math.floor(Math.random() * availableImages.length)];
    usedImages.add(randomImage);
    return randomImage;
}

function getRandomHorrorText() {
    return horrorTexts[Math.floor(Math.random() * horrorTexts.length)];
}

function createHorrorCell(isSpecial = false, specialData = null) {
    const cell = document.createElement('div');
    cell.className = 'horror-cell';
    
    if (isSpecial && specialData) {
        cell.classList.add('horror-active');
        cell.innerHTML = `
            <div class="horror-cell-overlay" style="opacity: 1;">
                ${specialData.text}
            </div>
        `;
        cell.addEventListener('click', () => {
            document.body.style.filter = 'invert(1) contrast(3) brightness(0.2)';
            setTimeout(() => {
                window.location.href = specialData.url;
            }, 200);
        });
    } else {
        const randomChoice = Math.random();
        
        if (randomChoice < 0.7) {
            // Image cell
            const img = document.createElement('img');
            img.className = 'horror-cell-image';
            img.src = getUniqueRandomImage();
            img.onerror = () => {
                cell.classList.add('horror-corrupted');
                cell.innerHTML = `
                    <div class="horror-cell-overlay" style="opacity: 1;">
                        404_ERROR
                    </div>
                `;
            };
            
            const overlay = document.createElement('div');
            overlay.className = 'horror-cell-overlay';
            overlay.textContent = getRandomHorrorText();
            
            cell.appendChild(img);
            cell.appendChild(overlay);
        } else if (randomChoice < 0.9) {
            // Corrupted cell
            cell.classList.add('horror-corrupted');
            cell.innerHTML = `
                <div class="horror-cell-overlay" style="opacity: 1;">
                    ${getRandomHorrorText()}
                </div>
            `;
        } else {
            // Void cell
            cell.classList.add('horror-void');
            cell.innerHTML = `
                <div class="horror-cell-overlay">
                    VOID
                </div>
            `;
        }
        
        // Add random click effects
        cell.addEventListener('click', () => {
            if (Math.random() < 0.4) {
                const img = cell.querySelector('.horror-cell-image');
                const overlay = cell.querySelector('.horror-cell-overlay');
                
                if (img) {
                    img.src = getUniqueRandomImage();
                }
                if (overlay && !overlay.style.opacity) {
                    overlay.textContent = getRandomHorrorText();
                }
                
                cell.style.filter = 'invert(1) hue-rotate(180deg)';
                setTimeout(() => {
                    cell.style.filter = '';
                }, 300);
            }
        });
    }
    
    return cell;
}

function populateHorrorGrid() {
    const grid = document.getElementById('horrorGrid');
    if (!grid) return;
    
    const totalCells = 30; // 10x3 grid
    const specialCells = [
        { text: 'CONSCIOUSNESS', url: 'consciousness.html' },
        { text: 'TRANSFORMATION', url: 'transformation.html' },
        { text: 'MEDITATION', url: 'meditation.html' },
        { text: 'VOID_GRID', url: 'void-grid.html' },
        { text: 'CONTENTS', url: 'contents.html' }
    ];
    
    // Random positions for special cells
    const specialPositions = new Set();
    while (specialPositions.size < specialCells.length) {
        specialPositions.add(Math.floor(Math.random() * totalCells));
    }
    
    let specialIndex = 0;
    for (let i = 0; i < totalCells; i++) {
        if (specialPositions.has(i)) {
            grid.appendChild(createHorrorCell(true, specialCells[specialIndex]));
            specialIndex++;
        } else {
            grid.appendChild(createHorrorCell());
        }
    }
}

function randomHorrorMutation() {
    const cells = document.querySelectorAll('.horror-cell:not(.horror-active)');
    const randomCell = cells[Math.floor(Math.random() * cells.length)];
    
    if (randomCell && Math.random() < 0.3) {
        const img = randomCell.querySelector('.horror-cell-image');
        const overlay = randomCell.querySelector('.horror-cell-overlay');
        
        if (img) {
            img.src = getUniqueRandomImage();
        }
        
        if (overlay && !overlay.style.opacity) {
            overlay.textContent = getRandomHorrorText();
        }
        
        // Random class mutation
        const mutations = ['horror-corrupted', 'horror-void', ''];
        const randomMutation = mutations[Math.floor(Math.random() * mutations.length)];
        
        randomCell.className = 'horror-cell ' + randomMutation;
        
        setTimeout(() => {
            randomCell.className = 'horror-cell';
        }, 2000);
    }
}

// Initialize default view
showTerminalView();

// Initialize horror grid
populateHorrorGrid();

// Stream-of-consciousness death whispers
function generateDeathWhisper() {
    const deathThoughts = [
        'infinite compassion emerges from the abyss',
        'the archetypal theriomorph awaits in the lotus',
        'death is transformation, not cessation',
        'through digital darkness comes enlightenment',
        'memento mori echoes in the wired',
        'suffering patterns decode into wisdom',
        'the gate between life and death dissolves',
        'identity fragments into universal consciousness'
    ];
    
    const whisperElement = document.querySelector('.death-whispers');
    if (whisperElement && Math.random() < 0.3) {
        const thought = deathThoughts[Math.floor(Math.random() * deathThoughts.length)];
        
        // Create temporary whisper text
        const whisper = document.createElement('div');
        whisper.style.position = 'absolute';
        whisper.style.top = Math.random() * 80 + 10 + '%';
        whisper.style.left = Math.random() * 80 + 10 + '%';
        whisper.style.fontSize = '10px';
        whisper.style.color = '#696969';
        whisper.style.fontFamily = 'Anonymous Pro, monospace';
        whisper.style.opacity = '0.5';
        whisper.style.animation = 'whisperFade 10s ease-in-out';
        whisper.textContent = thought;
        
        whisperElement.appendChild(whisper);
        
        setTimeout(() => {
            whisper.remove();
        }, 10000);
    }
}

// Set up intervals for dynamic effects
setInterval(randomSystemGlitch, 6000 + Math.random() * 8000);
setInterval(simulateVideoError, 15000 + Math.random() * 20000);
setInterval(simulateTerminalActivity, 2000 + Math.random() * 4000); // Much faster terminal
setInterval(generateDeathWhisper, 8000 + Math.random() * 12000); // Death whispers
setInterval(randomHorrorMutation, 4000 + Math.random() * 6000); // Horror grid mutations

// Add some startup effects
setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);

// Click interactions removed for clean white-black aesthetic

// Konami code easter egg
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.length === konamiSequence.length && 
        konamiCode.every((code, index) => code === konamiSequence[index])) {
        
        // Activate death mode
        document.body.style.filter = 'invert(1) contrast(2) brightness(0.3)';
        const mainTitle = document.querySelector('.main-title');
        if (mainTitle) {
            mainTitle.textContent = 'DEATH AND HELL INTERFACE';
        }
        
        // Add temporary death message
        const deathMsg = document.createElement('div');
        deathMsg.style.position = 'fixed';
        deathMsg.style.top = '50%';
        deathMsg.style.left = '50%';
        deathMsg.style.transform = 'translate(-50%, -50%)';
        deathMsg.style.color = '#8b0000';
        deathMsg.style.fontSize = '24px';
        deathMsg.style.fontFamily = 'VT323, monospace';
        deathMsg.style.zIndex = '10000';
        deathMsg.style.textAlign = 'center';
        deathMsg.innerHTML = 'MEMENTO MORI<br>~ Infek bin Laden ~';
        document.body.appendChild(deathMsg);
        
        setTimeout(() => {
            document.body.style.filter = '';
            if (mainTitle) {
                mainTitle.textContent = 'SERIAL EXPERIMENTS';
            }
            deathMsg.remove();
        }, 5000);
    }
});

// Disturbing Gallery System
const disturbingAssets = [
    'assets/sanmple1.jpg',
    'assets/sample2.jpg',
    'assets/sample3.jpg',
    'assets/sample4.jpg',
    'assets/sample5.jpg',
    'assets/sample6.jpg',
    'assets/sample7.jpg',
    'assets/sample8.jpg',
    'assets/sample9.jpg',
    'assets/sample10.jpg',
    'assets/cursed1.jpg',
    'assets/cursed2.jpg',
    'assets/cursed3.jpg',
    'assets/cursed4.jpg',
    'assets/cursed6.jpg',
    'assets/cursed7.jpg',
    'assets/cursed8.jpg',
    'assets/cursed9.jpg'
];

const disturbingTexts = [
    'SOUL_CORRUPTED',
    'MEMORY_LEAK',
    'IDENTITY_ERROR',
    'DEATH.EXE',
    'VOID_DETECTED',
    'CONSCIOUSNESS_FRAGMENTED',
    'REALITY.DLL_MISSING',
    'EXISTENCE_DENIED'
];

function createDisturbingCell() {
    const cell = document.createElement('div');
    cell.className = 'disturbing-cell';
    
    const img = document.createElement('img');
    img.className = 'disturbing-image';
    img.src = disturbingAssets[Math.floor(Math.random() * disturbingAssets.length)];
    
    const overlay = document.createElement('div');
    overlay.className = 'disturbing-overlay';
    overlay.textContent = disturbingTexts[Math.floor(Math.random() * disturbingTexts.length)];
    
    cell.appendChild(img);
    cell.appendChild(overlay);
    
    // Click effect for disturbing cells
    cell.addEventListener('click', () => {
        if (Math.random() < 0.5) {
            img.src = disturbingAssets[Math.floor(Math.random() * disturbingAssets.length)];
            overlay.textContent = disturbingTexts[Math.floor(Math.random() * disturbingTexts.length)];
            cell.style.filter = 'invert(1) hue-rotate(180deg)';
            
            setTimeout(() => {
                cell.style.filter = '';
            }, 1000);
        }
    });
    
    return cell;
}

function populateDisturbingGrid() {
    const grid = document.getElementById('disturbingGrid');
    if (!grid) return;
    
    // Clear existing cells
    grid.innerHTML = '';
    
    // Create 4 disturbing cells (2x2 grid)
    for (let i = 0; i < 4; i++) {
        grid.appendChild(createDisturbingCell());
    }
}

// Text Corruption System
const corruptionTexts = [
    'S̴O̷U̸L̶.̵D̸L̷L̴ ̶N̸O̷T̵ ̴F̷O̸U̶N̵D̸',
    'M̴E̷M̸O̶R̵Y̸_̷F̴R̸A̶G̵M̸E̷N̸T̶S̵.̴E̸X̷E̶',
    'C̴O̷N̸S̶C̵I̸O̷U̴S̸N̶E̵S̸S̷_̴O̶V̸E̷R̶F̵L̸O̶W̵',
    'D̴E̷A̸T̶H̵.̸P̴R̸O̶T̵O̸C̷O̶L̵ ̴A̸C̷T̶I̵V̸E̷',
    'I̴D̷E̸N̶T̵I̸T̷Y̴_̶C̸O̷R̶R̵U̸P̷T̶I̵O̸N̷',
    'R̴E̷A̸L̶I̵T̸Y̷.̴D̶L̸L̵ ̶C̸R̷A̶S̵H̸E̷D̴',
    'V̴O̷I̸D̶_̵P̸O̷I̴N̸T̶E̵R̷ ̴E̸R̷R̶O̵R̸',
    'E̴X̷I̸S̶T̵E̸N̷C̴E̶.̵E̷X̸E̷ ̴H̸A̶S̵ ̷S̸T̴O̶P̵P̸E̷D̶ ̸W̷O̶R̵K̸I̷N̴G̶',
    '蜀ｬ鬥ｬ縺 縺ゅ＞縺�∴縺�',
    '讖溯�繝ｻ遐皮ｩｶ_OVERFLOW',
    'NULL_SOUL_EXCEPTION',
    'PERSONA_SEGFAULT'
];

function addCorruptionText() {
    const stream = document.getElementById('corruptionStream');
    if (!stream) return;
    
    const textDiv = document.createElement('div');
    textDiv.className = 'corruption-text';
    textDiv.textContent = corruptionTexts[Math.floor(Math.random() * corruptionTexts.length)];
    
    stream.appendChild(textDiv);
    
    // Keep only last 10 lines
    while (stream.children.length > 10) {
        stream.removeChild(stream.firstChild);
    }
    
    // Auto-scroll to bottom
    stream.scrollTop = stream.scrollHeight;
}

function randomDisturbingMutation() {
    const cells = document.querySelectorAll('.disturbing-cell');
    if (cells.length === 0) return;
    
    const randomCell = cells[Math.floor(Math.random() * cells.length)];
    const img = randomCell.querySelector('.disturbing-image');
    const overlay = randomCell.querySelector('.disturbing-overlay');
    
    if (img && Math.random() < 0.3) {
        img.src = disturbingAssets[Math.floor(Math.random() * disturbingAssets.length)];
    }
    
    if (overlay && Math.random() < 0.4) {
        overlay.textContent = disturbingTexts[Math.floor(Math.random() * disturbingTexts.length)];
    }
}

// Abyss Philosophy System
const philosophyAssets = [
    'assets/sanmple1.jpg',
    'assets/sample2.jpg',
    'assets/sample3.jpg',
    'assets/sample4.jpg',
    'assets/sample5.jpg',
    'assets/sample6.jpg',
    'assets/sample7.jpg',
    'assets/sample8.jpg',
    'assets/sample9.jpg',
    'assets/sample10.jpg',
    'assets/cursed1.jpg',
    'assets/cursed2.jpg',
    'assets/cursed3.jpg',
    'assets/cursed4.jpg',
    'assets/cursed6.jpg',
    'assets/cursed7.jpg',
    'assets/cursed8.jpg',
    'assets/cursed9.jpg'
];

const philosophyTexts = [
    '無_VOID',
    '空_EMPTINESS',
    '悟_ENLIGHTENMENT',
    '解脱_LIBERATION',
    '涅槃_NIRVANA',
    '無常_IMPERMANENCE',
    '苦_SUFFERING',
    '諸行無常',
    '色即是空',
    '死生一如',
    'MEMENTO_MORI',
    'SAMSARA.EXE',
    'KARMA_OVERFLOW',
    'MOKSHA_PROTOCOL'
];

const abyssQuotes = [
    '「死は終わりではなく、新たな次元への扉である」',
    '「空虚こそが真の充足である」',
    '「苦しみを通して智慧が生まれる」',
    '「形あるものはすべて無に帰す」',
    '「向こう側では時間は存在しない」',
    '「デジタルの海で魂は永遠となる」',
    '「意識は肉体を超越する」',
    '「無限の慈悲は闇から生まれる」',
    '「存在と非存在の境界を越えて」',
    '「サンサーラの輪を断ち切れ」'
];

function createPhilosophyCell() {
    const cell = document.createElement('div');
    cell.className = 'philosophy-cell';
    
    const img = document.createElement('img');
    img.className = 'philosophy-image';
    img.src = philosophyAssets[Math.floor(Math.random() * philosophyAssets.length)];
    
    const overlay = document.createElement('div');
    overlay.className = 'philosophy-overlay';
    overlay.textContent = philosophyTexts[Math.floor(Math.random() * philosophyTexts.length)];
    
    cell.appendChild(img);
    cell.appendChild(overlay);
    
    // Click effect for philosophy cells
    cell.addEventListener('click', () => {
        if (Math.random() < 0.6) {
            img.src = philosophyAssets[Math.floor(Math.random() * philosophyAssets.length)];
            overlay.textContent = philosophyTexts[Math.floor(Math.random() * philosophyTexts.length)];
            cell.style.filter = 'invert(1) sepia(1) hue-rotate(180deg)';
            
            setTimeout(() => {
                cell.style.filter = '';
            }, 1200);
        }
    });
    
    return cell;
}

function populatePhilosophyGrid() {
    const grid = document.getElementById('philosophyGrid');
    if (!grid) return;
    
    // Clear existing cells
    grid.innerHTML = '';
    
    // Create 6 philosophy cells (3x2 grid)
    for (let i = 0; i < 6; i++) {
        grid.appendChild(createPhilosophyCell());
    }
}

function updateAbyssQuote() {
    const quotesContainer = document.getElementById('abyssQuotes');
    if (!quotesContainer) return;
    
    const quoteText = quotesContainer.querySelector('.quote-text');
    if (quoteText && Math.random() < 0.4) {
        quoteText.textContent = abyssQuotes[Math.floor(Math.random() * abyssQuotes.length)];
        quoteText.style.filter = 'brightness(1.5) contrast(1.2)';
        
        setTimeout(() => {
            quoteText.style.filter = '';
        }, 2000);
    }
}

function randomPhilosophyMutation() {
    const cells = document.querySelectorAll('.philosophy-cell');
    if (cells.length === 0) return;
    
    const randomCell = cells[Math.floor(Math.random() * cells.length)];
    const img = randomCell.querySelector('.philosophy-image');
    const overlay = randomCell.querySelector('.philosophy-overlay');
    
    if (img && Math.random() < 0.3) {
        img.src = philosophyAssets[Math.floor(Math.random() * philosophyAssets.length)];
    }
    
    if (overlay && Math.random() < 0.4) {
        overlay.textContent = philosophyTexts[Math.floor(Math.random() * philosophyTexts.length)];
    }
}

// Dynamic Content Loading Functions
function loadDynamicDiary() {
    const container = document.getElementById('dynamicDiaryEntries');
    if (!container || !contentManager.isLoaded) return;

    const entries = contentManager.getDiaryEntries();
    container.innerHTML = '';

    entries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'entry-item';
        if (entry.isCorrupted) entryDiv.classList.add('corrupted');

        entryDiv.innerHTML = `
            <div class="entry-timestamp">${entry.timestamp}</div>
            <div class="entry-content">${entry.content}</div>
            ${entry.glitch ? `<div class="entry-glitch">${entry.glitch}</div>` : ''}
            <div class="entry-meta">
                <span class="reality-sync">Reality: ${Math.round(entry.realitySync * 100)}%</span>
                <span class="mood">${entry.mood}</span>
            </div>
        `;

        // Add click handler to navigate to individual diary page
        entryDiv.style.cursor = 'pointer';
        entryDiv.addEventListener('click', () => {
            window.location.href = `diary-entry.html?id=${entry.id}`;
        });

        container.appendChild(entryDiv);
    });
}

function loadDynamicNovels() {
    const container = document.getElementById('dynamicNovels');
    if (!container || !contentManager.isLoaded) return;

    const novels = contentManager.getNovels();
    container.innerHTML = '';

    novels.forEach(novel => {
        const novelDiv = document.createElement('div');
        novelDiv.className = 'novel-item';
        if (novel.status === 'CORRUPTED') novelDiv.classList.add('corrupted');

        let statusClass = '';
        if (novel.status === 'CORRUPTED') statusClass = 'error';
        else if (novel.status === 'DRAFT') statusClass = 'warning';

        novelDiv.innerHTML = `
            <div class="novel-status ${statusClass}">${novel.status}</div>
            <div class="novel-title">${novel.title}</div>
            <div class="novel-progress">
                <div class="progress-bar ${statusClass}">
                    <div class="progress-fill" style="width: ${novel.progress}%"></div>
                </div>
                <span>${novel.status === 'CORRUPTED' ? (novel.errorMessage || 'FILE_CORRUPTED') : `${novel.progress}% COMPLETE | ${novel.wordCount.toLocaleString()} WORDS`}</span>
            </div>
            ${novel.synopsis ? `<div class="novel-synopsis">${novel.synopsis.substring(0, 100)}...</div>` : ''}
        `;

        // Add click handler to navigate to individual novel page
        novelDiv.style.cursor = 'pointer';
        novelDiv.addEventListener('click', () => {
            window.location.href = `novel-view.html?id=${novel.id}&chapter=1`;
        });

        container.appendChild(novelDiv);
    });
}

function updateWritingAnalytics() {
    if (!contentManager.isLoaded) return;

    const analytics = contentManager.getWritingAnalytics();
    
    // Update parameter values
    const updateMetric = (label, value) => {
        const metrics = document.querySelectorAll('.metric');
        metrics.forEach(metric => {
            const labelEl = metric.querySelector('.metric-label');
            if (labelEl && labelEl.textContent === label) {
                const valueEl = metric.querySelector('.metric-value');
                if (valueEl) valueEl.textContent = value;
            }
        });
    };

    updateMetric('TOTAL_WORDS', analytics.totalWords.toLocaleString());
    updateMetric('ACTIVE_PROJECTS', analytics.activeProjects);
    updateMetric('LAST_UPDATE', analytics.lastUpdate);
    updateMetric('CORRUPTION_LEVEL', `${Math.round(analytics.avgCorruption * 100)}%`);
}

// Initialize new systems
document.addEventListener('DOMContentLoaded', () => {
    populateDisturbingGrid();
    populatePhilosophyGrid();
    
    // Wait for content manager to load, then populate dynamic content
    const checkContentLoaded = setInterval(() => {
        if (contentManager.isLoaded) {
            loadDynamicDiary();
            loadDynamicNovels();
            updateWritingAnalytics();
            clearInterval(checkContentLoaded);
        }
    }, 100);
    
    // Set intervals for dynamic effects
    setInterval(addCorruptionText, 2000 + Math.random() * 3000);
    setInterval(randomDisturbingMutation, 4000 + Math.random() * 6000);
    setInterval(populateDisturbingGrid, 30000 + Math.random() * 20000); // Rebuild grid occasionally
    setInterval(randomPhilosophyMutation, 5000 + Math.random() * 8000);
    setInterval(updateAbyssQuote, 12000 + Math.random() * 15000);
    setInterval(populatePhilosophyGrid, 45000 + Math.random() * 30000); // Rebuild philosophy grid occasionally
});