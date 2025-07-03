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
            <div class="panel-header">DATA_STREAM</div>
            <div class="data-content">
                <div class="waveform">
                    <div class="wave-line"></div>
                    <div class="wave-line"></div>
                    <div class="wave-line"></div>
                    <div class="wave-line"></div>
                </div>
                <div class="data-metrics">
                    <div class="metric">
                        <span class="metric-label">DIARY_ENTRIES</span>
                        <span class="metric-value">∞</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">NOVELS</span>
                        <span class="metric-value">127</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">CONNECTION</span>
                        <span class="metric-value">UNSTABLE</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="diary-panel">
            <div class="panel-header">MEMORY_LOG</div>
            <div class="diary-entries">
                <div class="entry-item">
                    <div class="entry-timestamp">2024.07.02_20:30:15</div>
                    <div class="entry-content">現実と仮想の境界が曖昧になっている。Wiredの中で自分を見つけた時、それは本当の自分なのだろうか？</div>
                    <div class="entry-glitch">E̴R̷R̸O̶R̵_̸M̷E̴M̸O̷R̶Y̵_̴C̶O̸R̷R̸U̶P̴T̵E̷D̸</div>
                </div>
                <div class="entry-item">
                    <div class="entry-timestamp">2024.07.01_03:15:42</div>
                    <div class="entry-content">誰もが接続されている。誰もが一人でいる。この矛盾こそがWiredの本質なのかもしれない。</div>
                </div>
                <div class="entry-item">
                    <div class="entry-timestamp">2024.06.30_23:59:59</div>
                    <div class="entry-content">リアルとサイバースペースの区別がつかなくなってきた。これが進化なのか、それとも...</div>
                </div>
            </div>
        </section>

        <section class="novel-panel">
            <div class="panel-header">FICTION_DATABASE</div>
            <div class="novel-grid">
                <div class="novel-item">
                    <div class="novel-status">ACTIVE</div>
                    <div class="novel-title">電子の海の向こう側</div>
                    <div class="novel-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 67%"></div>
                        </div>
                        <span>67% COMPLETE</span>
                    </div>
                </div>
                <div class="novel-item">
                    <div class="novel-status">DRAFT</div>
                    <div class="novel-title">接続された孤独</div>
                    <div class="novel-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 23%"></div>
                        </div>
                        <span>23% COMPLETE</span>
                    </div>
                </div>
                <div class="novel-item">
                    <div class="novel-status">ERROR</div>
                    <div class="novel-title">私は存在するか？</div>
                    <div class="novel-progress">
                        <div class="progress-bar error">
                            <div class="progress-fill" style="width: 100%"></div>
                        </div>
                        <span>FILE_CORRUPTED</span>
                    </div>
                </div>
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
    
    addEntryClickHandlers();
}

function showDiaryView() {
    contentGrid.innerHTML = `
        <section class="diary-panel" style="grid-column: span 3;">
            <div class="panel-header">MEMORY_ARCHIVE // SERIAL_EXPERIMENTS</div>
            <div class="diary-entries" style="max-height: 500px;">
                <div class="entry-item">
                    <div class="entry-timestamp">2024.07.02_20:30:15</div>
                    <div class="entry-content">現実と仮想の境界が曖昧になっている。Wiredの中で自分を見つけた時、それは本当の自分なのだろうか？昨日のように、画面の向こう側から誰かが私を見ているような感覚がある。それは私自身なのか、それとも別の存在なのか。</div>
                    <div class="entry-glitch">E̴R̷R̸O̶R̵_̸M̷E̴M̸O̷R̶Y̵_̴C̶O̸R̷R̸U̶P̴T̵E̷D̸</div>
                </div>
                <div class="entry-item">
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
                <div class="novel-item">
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
                <div class="novel-item">
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
                <div class="waveform" style="margin-bottom: 30px;">
                    <div class="wave-line"></div>
                    <div class="wave-line"></div>
                    <div class="wave-line"></div>
                    <div class="wave-line"></div>
                </div>
                <div class="data-metrics">
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
                        <span class="metric-value">UNSTABLE</span>
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
        'compile darkness.c -o enlightenment'
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
        'Compilation successful: enlightenment through darkness'
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
        
    }, 500 + Math.random() * 1000); // Faster response
}

// Initialize default view
showTerminalView();

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