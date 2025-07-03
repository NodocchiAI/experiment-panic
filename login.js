// Dream Login System - Oneiric Protocol
// 夢境界システム - 偽のログイン処理

// Disturbing dream-like responses
const dreamResponses = [
    "夢の深度が足りません... もっと深く沈んでください",
    "あなたの記憶が読み取れません... 本当にあなたですか？",
    "identity.dll が見つかりません... あなたは誰ですか？", 
    "ERROR: 現実との接続が失われました",
    "WARNING: 自我の境界が曖昧になっています",
    "夢と現実の区別ができません... 助けて...",
    "あなたは夢の中にいます... それとも私が夢なのでしょうか？",
    "記憶が溶けていきます... 名前を... 思い出せません...",
    "CRITICAL: 意識レベルが危険域に達しています",
    "誰かが私の夢を覗いています... あなたですか？"
];

const corruptedUsernames = [
    "u̴s̷e̸r̶_̴n̷o̸t̶_̴f̸o̷u̸n̶d̴",
    "█████████",
    "M̶i̸s̴s̷i̶n̸g̴N̷o̶.̸",
    "ゆ̴め̷み̸る̶ひ̴と̷",
    "null_entity",
    "夢̶の̷住̸人̶",
    "CORRUPTED_DATA",
    "誰̴か̷分̸か̶ら̴な̷い̸人̶"
];

let loginAttempts = 0;
let isGlitching = false;

// Initialize dream effects when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeDreamEffects();
    startRealTimeUpdates();
    addInputEffects();
});

function initializeDreamEffects() {
    // Add glitch effect to title
    const title = document.querySelector('.glitch-title');
    if (title) {
        setInterval(() => {
            if (Math.random() < 0.1) {
                title.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
                setTimeout(() => {
                    title.style.transform = 'translate(0, 0)';
                }, 100);
            }
        }, 2000);
    }
    
}

function startRealTimeUpdates() {
    // Update sync rate randomly
    setInterval(() => {
        const syncRate = document.querySelector('.sync-rate');
        if (syncRate) {
            const rate = (Math.random() * 5).toFixed(2);
            syncRate.textContent = rate + '%';
            if (rate < 1) {
                syncRate.style.color = '#ff0000';
            } else {
                syncRate.style.color = '#ff6666';
            }
        }
    }, 3000);
    
    // Update memory fragmentation
    const memoryStates = ['fragmenting...', 'corrupting...', 'vanishing...', 'ERROR', 'null', '断片化中...'];
    setInterval(() => {
        const memoryFrag = document.querySelector('.memory-frag');
        if (memoryFrag) {
            memoryFrag.textContent = memoryStates[Math.floor(Math.random() * memoryStates.length)];
        }
    }, 4000);
}

function addInputEffects() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (Math.random() < 0.3) {
                this.placeholder = corruptedUsernames[Math.floor(Math.random() * corruptedUsernames.length)];
            }
        });
        
        input.addEventListener('input', function() {
            if (Math.random() < 0.1) {
                triggerInputGlitch(this);
            }
        });
    });
}

function triggerInputGlitch(input) {
    if (isGlitching) return;
    isGlitching = true;
    
    const originalValue = input.value;
    const glitchChars = ['█', '▓', '▒', '░', '蜀', '縺', '讖', '溯'];
    
    let glitchValue = '';
    for (let i = 0; i < originalValue.length; i++) {
        glitchValue += Math.random() < 0.3 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : originalValue[i];
    }
    
    input.value = glitchValue;
    input.style.color = '#cc0000';
    
    setTimeout(() => {
        input.value = originalValue;
        input.style.color = '#ffffff';
        isGlitching = false;
    }, 200);
}

function attemptLogin() {
    loginAttempts++;
    
    const dreamId = document.getElementById('dream-id').value;
    const memoryKey = document.getElementById('memory-key').value;
    const button = document.querySelector('.login-btn');
    
    // Disable button temporarily
    button.disabled = true;
    button.style.opacity = '0.6';
    
    // Show processing state
    button.innerHTML = `
        <span class="btn-text">夢に接続中...</span>
        <span class="btn-subtext">CONNECTING TO DREAM...</span>
    `;
    
    // Simulate processing delay
    setTimeout(() => {
        processLogin(dreamId, memoryKey);
        
        // Re-enable button
        button.disabled = false;
        button.style.opacity = '1';
        button.innerHTML = `
            <span class="btn-text">夢に入る</span>
            <span class="btn-subtext">ENTER DREAM</span>
        `;
    }, 2000 + Math.random() * 3000);
}

function processLogin(dreamId, memoryKey) {
    // Always fail in disturbing ways
    const response = dreamResponses[Math.floor(Math.random() * dreamResponses.length)];
    
    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 0, 0, 0.9);
        color: #ffffff;
        padding: 20px 30px;
        border-radius: 10px;
        border: 2px solid #ff0000;
        box-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
        z-index: 1000;
        font-family: 'Courier New', monospace;
        font-size: 14px;
        text-align: center;
        max-width: 400px;
        animation: errorPulse 1s ease-in-out infinite;
    `;
    
    errorDiv.innerHTML = `
        <div style="margin-bottom: 10px; font-weight: bold;">⚠️ DREAM ACCESS DENIED ⚠️</div>
        <div style="margin-bottom: 15px;">${response}</div>
        <div style="font-size: 12px; opacity: 0.8;">Login attempts: ${loginAttempts}</div>
    `;
    
    document.body.appendChild(errorDiv);
    
    // Add CSS animation for error pulse
    const style = document.createElement('style');
    style.textContent = `
        @keyframes errorPulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.05); }
        }
    `;
    document.head.appendChild(style);
    
    // Trigger screen glitch effect
    triggerScreenGlitch();
    
    // Remove error message after delay
    setTimeout(() => {
        if (document.body.contains(errorDiv)) {
            document.body.removeChild(errorDiv);
        }
        if (document.head.contains(style)) {
            document.head.removeChild(style);
        }
    }, 4000);
    
    // Clear inputs after failed attempt
    setTimeout(() => {
        document.getElementById('dream-id').value = '';
        document.getElementById('memory-key').value = '';
        
        // Add corruption to placeholders
        if (loginAttempts > 3) {
            document.getElementById('dream-id').placeholder = 'あなたは... 誰？';
            document.getElementById('memory-key').placeholder = '記憶が... ない...';
        }
    }, 2000);
    
    // Escalating effects based on attempts
    if (loginAttempts >= 5) {
        triggerDreamCollapse();
    } else if (loginAttempts >= 3) {
        addDreamDistortion();
    }
}

function triggerScreenGlitch() {
    const glitchOverlay = document.createElement('div');
    glitchOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(139, 0, 0, 0.9) 47%,
            rgba(255, 0, 0, 0.8) 49%,
            rgba(0, 0, 0, 0.9) 51%,
            rgba(139, 0, 0, 0.8) 53%,
            transparent 100%
        );
        z-index: 999;
        pointer-events: none;
        animation: glitchSweep 0.3s ease-out;
    `;
    
    const glitchStyle = document.createElement('style');
    glitchStyle.textContent = `
        @keyframes glitchSweep {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
    `;
    document.head.appendChild(glitchStyle);
    document.body.appendChild(glitchOverlay);
    
    setTimeout(() => {
        if (document.body.contains(glitchOverlay)) {
            document.body.removeChild(glitchOverlay);
        }
        if (document.head.contains(glitchStyle)) {
            document.head.removeChild(glitchStyle);
        }
    }, 300);
}

function addDreamDistortion() {
    document.body.style.filter = 'hue-rotate(180deg) saturate(150%)';
    setTimeout(() => {
        document.body.style.filter = '';
    }, 2000);
    
    // Add temporary disturbing text
    const distortionText = document.createElement('div');
    distortionText.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        color: #ff0000;
        font-size: 18px;
        font-weight: bold;
        z-index: 1000;
        text-shadow: 0 0 10px #ff0000;
        animation: distortionFlicker 2s ease-in-out;
    `;
    distortionText.textContent = '現実が歪んでいます...';
    
    const distortionStyle = document.createElement('style');
    distortionStyle.textContent = `
        @keyframes distortionFlicker {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(distortionStyle);
    document.body.appendChild(distortionText);
    
    setTimeout(() => {
        if (document.body.contains(distortionText)) {
            document.body.removeChild(distortionText);
        }
        if (document.head.contains(distortionStyle)) {
            document.head.removeChild(distortionStyle);
        }
    }, 2000);
}

function triggerDreamCollapse() {
    // Dramatic effect for too many failed attempts
    document.body.style.animation = 'dreamCollapse 3s ease-out';
    
    const collapseStyle = document.createElement('style');
    collapseStyle.textContent = `
        @keyframes dreamCollapse {
            0% { filter: none; }
            25% { filter: blur(2px) brightness(150%); }
            50% { filter: blur(5px) brightness(50%) hue-rotate(180deg); }
            75% { filter: blur(10px) brightness(20%) saturate(0%); }
            100% { filter: blur(20px) brightness(10%) saturate(0%); }
        }
    `;
    document.head.appendChild(collapseStyle);
    
    // Show final message
    setTimeout(() => {
        const finalMessage = document.createElement('div');
        finalMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #ffffff;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            z-index: 2000;
            text-shadow: 0 0 20px #ffffff;
        `;
        finalMessage.innerHTML = `
            <div>夢が崩壊しています...</div>
            <div style="font-size: 16px; margin-top: 10px;">もう戻れません</div>
        `;
        document.body.appendChild(finalMessage);
        
        // Reset after dramatic pause
        setTimeout(() => {
            document.body.style.animation = '';
            document.body.style.filter = '';
            if (document.body.contains(finalMessage)) {
                document.body.removeChild(finalMessage);
            }
            if (document.head.contains(collapseStyle)) {
                document.head.removeChild(collapseStyle);
            }
            loginAttempts = 0; // Reset for next victim
        }, 3000);
    }, 1500);
}