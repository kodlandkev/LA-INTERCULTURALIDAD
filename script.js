// --- Game Data Structure (Se mantiene igual) ---
const gamesData = {
    // México (Lotería)
    'MX': {
        country: 'México',
        game: 'Lotería',
        color: '#FF9800',
        description: `
            <p>La lotería mexicana es un juego de azar similar al bingo, pero usando imágenes tradicionales mexicanas en lugar de números.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Cada jugador recibe una tabla con 9 imágenes diferentes</li>
                <li data-number="2">El cantor saca cartas una por una y les anuncia</li>
                <li data-number="3">Los jugadores marcan las imágenes que tienen en su tabla</li>
                <li data-number="4">El primero en llenar una línea horizontal, vertical o diagonal grita '¡Lotería!' y gana</li>
            </ol>
        `,
        playHtml: `
            <div class="loteria-container">
                <div class="loteria-card-display">
                    <div class="loteria-current-card" id="loteria-current-card">?</div>
                    <small>Carta Actual</small>
                </div>
                <div class="loteria-table" id="loteria-table">
                    <div class="loteria-image" data-card="🎺" data-index="0">🎺</div>
                    <div class="loteria-image" data-card="🤵‍♀️" data-index="1">🤵‍♀️</div>
                    <div class="loteria-image" data-card="💃" data-index="2">💃</div>
                    <div class="loteria-image" data-card="☀️" data-index="3">☀️</div>
                    <div class="loteria-image" data-card="🍌" data-index="4">🍌</div>
                    <div class="loteria-image" data-card="🐦" data-index="5">🐦</div>
                    <div class="loteria-image" data-card="🌮" data-index="6">🌮</div>
                    <div class="loteria-image" data-card="🌺" data-index="7">🌺</div>
                    <div class="loteria-image" data-card="🌵" data-index="8">🌵</div>
                </div>
                <div class="loteria-actions">
                    <button id="loteria-saca-carta-btn">▶ Sacar Carta</button>
                    <button id="loteria-nueva-tabla-btn">Nueva Tabla</button>
                </div>
            </div>
        `,
        initGame: initLoteriaGame
    },

    // Argentina (El Sapo)
    'AR': {
        country: 'Argentina',
        game: 'El Sapo',
        color: '#FF9800',
        description: `
            <p>Juego de puntería donde se lanzan fichas metálicas intentando que entren en la boca de un sapo de metal.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se colocan las fichas a cierta distancia del tablero del sapo</li>
                <li data-number="2">Los jugadores lanzan por turnos intentando encestar</li>
                <li data-number="3">La boca del sapo vale más puntos</li>
                <li data-number="4">Otros agujeros y objetivos tienen diferentes puntajes</li>
                <li data-number="5">Gana quien acumule más puntos.</li>
            </ol>
        `,
        playHtml: `
            <div class="sapo-container">
                <p>Puntuación: <span id="sapo-total-score">0</span> pts | Lanzamientos: <span id="sapo-throws-count">0</span>/10</p>
                <div class="sapo-actions">
                    <div class="progress-bar" id="sapo-progress-bar"></div>
                </div>
                <div class="sapo-score-grid" id="sapo-score-grid">
                    <div class="sapo-score-item" data-points="50" data-difficulty="0.1">
                        🐸
                        <p>50 pts</p>
                        <span>Boca del Sapo</span>
                    </div>
                    <div class="sapo-score-item" data-points="20" data-difficulty="0.3">
                        ⭐
                        <p>20 pts</p>
                        <span>Estrella</span>
                    </div>
                    <div class="sapo-score-item" data-points="15" data-difficulty="0.5">
                        🎯
                        <p>15 pts</p>
                        <span>Diana</span>
                    </div>
                    <div class="sapo-score-item" data-points="10" data-difficulty="0.7">
                        🔵
                        <p>10 pts</p>
                        <span>Círculo Azul</span>
                    </div>
                    <div class="sapo-score-item" data-points="10" data-difficulty="0.7">
                        🟢
                        <p>10 pts</p>
                        <span>Círculo Verde</span>
                    </div>
                    <div class="sapo-score-item" data-points="5" data-difficulty="0.9">
                        ⚪
                        <p>5 pts</p>
                        <span>Círculo Blanco</span>
                    </div>
                </div>
                <div class="sapo-actions">
                    <button id="sapo-reiniciar-btn">↻ Reiniciar</button>
                </div>
            </div>
        `,
        initGame: initSapoGame
    },

    // Venezuela (Trompo)
    'VE': {
        country: 'Venezuela',
        game: 'Trompo',
        color: '#FF9800',
        description: `
            <p>Juego de destreza con un trompo de madera que se hace girar con una cuerda.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Enrollar la cuerda alrededor del trompo</li>
                <li data-number="2">Lanzarlo con fuerza para que gire</li>
                <li data-number="3">Recogerlo bailando en la palma de la mano</li>
                <li data-number="4">Competir por el tiempo de giro más largo</li>
                <li data-number="5">Realizar trucos y piruetas con el trompo girando</li>
            </ol>
        `,
        playHtml: `
            <style>
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .trompo-spinning {
                    animation: spin 0.5s linear infinite;
                }
            </style>
            <div class="trompo-container">
                <div class="trompo-animation">
                    <div class="trompo-icon" id="trompo-icon">
                       <span style="font-size: 5em;">🪀</span> </div>
                    <div class="trompo-spin-bar"></div>
                </div>
                <div class="trompo-record">
                    <p>Récord: <span id="trompo-record-time">0.0</span>s</p>
                </div>
                <div class="trompo-actions">
                    <button id="trompo-lanzar-btn">▶ Lanzar Trompo</button>
                    <button id="trompo-reiniciar-btn">↻ Reiniciar Récord</button>
                </div>
                <div class="trompo-tip">
                    <p>💡 Consejo: Un buen lanzamiento puede hacer girar el trompo por más de 6 segundos</p>
                </div>
            </div>
        `,
        initGame: initTrompoGame
    },

    // Chile (Rayuela)
    'CL': {
        country: 'Chile',
        game: 'Rayuela',
        color: '#FF9800',
        description: `
            <p>Juego tradicional que consiste en saltar sobre casillas dibujadas en el suelo.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se dibuja una secuencia de casillas numeradas del 1 al 10</li>
                <li data-number="2">El jugador lanza una piedra pequeña a la casilla 1</li>
                <li data-number="3">Debe saltar en un pie sobre las demás casillas evitando donde está la piedra</li>
                <li data-number="4">Recoge la piedra en el camino de regreso</li>
                <li data-number="5">Continúa lanzando a las siguientes casillas</li>
            </ol>
        `,
        playHtml: `
            <div class="rayuela-container">
                <div class="rayuela-grid">
                    <div class="casilla" data-casilla="1">1</div>
                    <div class="casilla" data-casilla="2">2</div>
                    <div class="casilla" data-casilla="3">3</div>
                    <div class="casilla" data-casilla="4">4</div>
                    <div class="casilla" data-casilla="5">5</div>
                    <div class="casilla" data-casilla="6">6</div>
                    <div class="casilla" data-casilla="7">7</div>
                    <div class="casilla" data-casilla="8">8</div>
                    <div class="casilla" data-casilla="9">9</div>
                    <div class="casilla" data-casilla="10"></div>
                </div>
                <div class="rayuela-actions">
                    <button id="rayuela-iniciar-btn">Iniciar Juego</button>
                </div>
            </div>
        `,
        initGame: initRayuelaGame
    },

    // Generic placeholder for other games not detailed in images
    'DEFAULT': {
        country: '',
        game: 'Juego Tradicional',
        color: '#4CAF50',
        description: `<p>Información no disponible para este juego, pero puedes hacer click en otra tarjeta para jugar.</p>`,
        playHtml: `<div style="text-align:center; padding: 40px;">¡Pronto podrás jugar a este juego!</div>`,
        initGame: null
    }
};

// --- DOM Elements ---
const modal = document.getElementById('game-modal');
const closeBtn = document.querySelector('.close-button');
const gameCards = document.querySelectorAll('.game-card');

const modalCountryCode = document.getElementById('modal-country-code');
const modalCountryName = document.getElementById('modal-country-name');
const gameDescription = document.getElementById('game-description');
const gamePlay = document.getElementById('game-play');

// --- Modal Functionality (MODIFICADA para asegurar la inicialización) ---
gameCards.forEach(card => {
    card.addEventListener('click', () => {
        const countryCode = card.getAttribute('data-country');
        const countryData = gamesData[countryCode] || gamesData['DEFAULT'];

        // 1. Update Modal Header
        modalCountryCode.textContent = countryCode;
        modalCountryName.textContent = countryData.country;
        modalCountryName.style.backgroundImage = `linear-gradient(to right, ${countryData.color || '#ff7e5f'}, ${countryData.color || '#feb47b'})`;
        document.querySelector('.game-line').style.backgroundColor = countryData.color || '#4CAF50';

        // 2. Update Description Panel
        gameDescription.innerHTML = countryData.description;

        // 3. Update Play Panel (Insertamos el HTML del juego)
        gamePlay.innerHTML = `<h3>Juega Ahora</h3>${countryData.playHtml}`;

        // 4. Display Modal
        modal.style.display = 'block';

        // 5. Initialize Game Logic (Aseguramos que el DOM se haya cargado antes de inicializar)
        // Usamos setTimeout(0) o un pequeño retraso para diferir la inicialización,
        // garantizando que el DOM se haya actualizado con el contenido de gamePlay.innerHTML.
        if (countryData.initGame) {
            setTimeout(() => {
                countryData.initGame();
            }, 50); // Un pequeño retraso de 50ms es suficiente para la mayoría de navegadores
        }
    });
});

// Close modal when close button is clicked
closeBtn.onclick = () => {
    modal.style.display = 'none';
};

// Close modal when user clicks outside of it
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// --- MODIFICACIONES DE LÓGICA DE JUEGO (Se mantienen iguales) ---

// 1. Lotería Game Logic (MX)
function initLoteriaGame() {
    const sacraCartaBtn = document.getElementById('loteria-saca-carta-btn');
    const nuevaTablaBtn = document.getElementById('loteria-nueva-tabla-btn');
    const currentCardDisplay = document.getElementById('loteria-current-card');
    const loteriaImages = document.querySelectorAll('.loteria-image');

    const cards = Array.from(loteriaImages).map(el => el.getAttribute('data-card'));
    let availableCards = [...cards];
    let currentCard = null;
    
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontales
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticales
        [0, 4, 8], [2, 4, 6]             // Diagonales
    ];

    const checkWin = () => {
        // Obtenemos los índices de las casillas marcadas
        const marked = Array.from(loteriaImages)
            .filter(img => img.classList.contains('marcado'))
            .map(img => parseInt(img.getAttribute('data-index')));
        
        for (const combo of winCombinations) {
            // Verificamos si todos los índices de la combinación están marcados
            if (combo.every(index => marked.includes(index))) {
                return true;
            }
        }
        return false;
    };
    
    const pullCard = () => {
        if (checkWin()) {
            alert('¡Ya ganaste! Reinicia el juego.');
            return;
        }
        if (availableCards.length === 0) {
            currentCardDisplay.textContent = '¡Fin!';
            sacraCartaBtn.disabled = true;
            alert('Se terminaron las cartas, nadie ganó. 😞');
            return;
        }
        
        // Pick a random card that hasn't been pulled
        const randomIndex = Math.floor(Math.random() * availableCards.length);
        currentCard = availableCards.splice(randomIndex, 1)[0];
        
        currentCardDisplay.textContent = currentCard;
        sacraCartaBtn.disabled = true; // Disable until a card on the table is clicked
    };

    const resetGame = () => {
        availableCards = [...cards];
        currentCard = null;
        currentCardDisplay.textContent = '?';
        sacraCartaBtn.disabled = false;
        loteriaImages.forEach(image => image.classList.remove('marcado'));
    };
    
    // Logic for marking a card
    loteriaImages.forEach(image => {
        image.onclick = () => {
            // Solo se puede marcar si hay una carta actual y coincide
            if (currentCard && image.textContent === currentCard) {
                // Mark the card
                image.classList.add('marcado');
                sacraCartaBtn.disabled = false; // Enable button to pull next card
                currentCard = null; // Clear current card
                currentCardDisplay.textContent = '✔️'; // Indicador de que fue encontrada

                if (checkWin()) {
                    alert('¡LOTERÍA! 🎉 Ganaste con 3 en línea.');
                    sacraCartaBtn.disabled = true;
                }
            } else if (image.classList.contains('marcado')) {
                // Permite desmarcar (opcional)
                image.classList.remove('marcado');
            }
        };
    });

    sacraCartaBtn.onclick = pullCard;
    nuevaTablaBtn.onclick = resetGame;

    // Initial setup
    resetGame();
}

// 2. El Sapo Game Logic (AR)
function initSapoGame() {
    const totalScoreSpan = document.getElementById('sapo-total-score');
    const throwsCountSpan = document.getElementById('sapo-throws-count');
    const scoreItems = document.querySelectorAll('.sapo-score-item');
    const progressBar = document.getElementById('sapo-progress-bar');
    const reiniciarBtn = document.getElementById('sapo-reiniciar-btn');
    let totalScore = 0;
    let throws = 0;
    const maxThrows = 10;
    
    const getResultEmoji = (success) => {
        const successEmojis = ['✅', '🎯', '✨', '🥳'];
        const failEmojis = ['❌', '🗑️', '😟', '👎'];
        const list = success ? successEmojis : failEmojis;
        return list[Math.floor(Math.random() * list.length)];
    };

    const updateUI = () => {
        totalScoreSpan.textContent = totalScore;
        throwsCountSpan.textContent = throws;
        const progress = (throws / maxThrows) * 100;
        progressBar.style.width = `${progress}%`;
        progressBar.style.backgroundColor = `hsl(${progress * 1.2}, 70%, 50%)`;
    };

    const resetGame = () => {
        totalScore = 0;
        throws = 0;
        updateUI();
        scoreItems.forEach(item => item.disabled = false);
    };

    scoreItems.forEach(item => {
        item.onclick = () => {
            if (throws >= maxThrows) {
                alert(`Juego terminado. Puntuación final: ${totalScore} pts.`);
                return;
            }

            const points = parseInt(item.getAttribute('data-points'));
            const difficulty = parseFloat(item.getAttribute('data-difficulty'));
            
            // Generate a random number (0 to 1). If it's less than (1 - difficulty), it's a success.
            // difficulty=0.1 means 90% chance of success (easy). difficulty=0.9 means 10% chance (hard).
            const isSuccess = Math.random() > difficulty; 
            
            if (isSuccess) {
                totalScore += points;
                item.style.backgroundColor = 'lightgreen';
                alert(`${getResultEmoji(true)} ¡Acertaste en ${points} pts!`);
            } else {
                item.style.backgroundColor = '#ffcdd2'; // Light red
                alert(`${getResultEmoji(false)} ¡Fallaste!`);
            }

            throws++;
            updateUI();

            setTimeout(() => {
                item.style.backgroundColor = '';
                if (throws >= maxThrows) {
                    alert(`Fin de la partida. Puntuación final: ${totalScore} pts.`);
                    // Deshabilita los clics en los items de puntuación si es necesario
                    scoreItems.forEach(i => i.onclick = null); 
                }
            }, 500);
        };
    });

    reiniciarBtn.onclick = resetGame;
    updateUI();
}

// 3. Trompo Game Logic (VE)
function initTrompoGame() {
    const lanzarBtn = document.getElementById('trompo-lanzar-btn');
    const reiniciarBtn = document.getElementById('trompo-reiniciar-btn');
    const recordTimeSpan = document.getElementById('trompo-record-time');
    const trompoIcon = document.getElementById('trompo-icon');
    let currentRecord = parseFloat(localStorage.getItem('trompoRecord')) || 0.0;
    
    recordTimeSpan.textContent = currentRecord.toFixed(1);

    const lanzarTrompo = () => {
        if (lanzarBtn.disabled) return;

        lanzarBtn.textContent = '¡Girando...! 🌀';
        lanzarBtn.disabled = true;
        trompoIcon.classList.add('trompo-spinning'); // Start animation

        // Simulate a spin time between 2.0 and 8.0 seconds
        const spinTime = (Math.random() * 6.0 + 2.0); 

        setTimeout(() => {
            trompoIcon.classList.remove('trompo-spinning'); // Stop animation
            lanzarBtn.textContent = '▶ Lanzar Trompo';
            lanzarBtn.disabled = false;
            
            alert(`Tu tiempo de giro: ${spinTime.toFixed(1)}s`);

            if (spinTime > currentRecord) {
                currentRecord = spinTime;
                localStorage.setItem('trompoRecord', currentRecord);
                recordTimeSpan.textContent = currentRecord.toFixed(1);
                alert(`¡Nuevo Récord! 🏆 ${currentRecord.toFixed(1)}s`);
            }
        }, spinTime * 1000); // Wait for the simulated spin duration
    };

    const reiniciarRecord = () => {
        currentRecord = 0.0;
        localStorage.setItem('trompoRecord', currentRecord);
        recordTimeSpan.textContent = currentRecord.toFixed(1);
        alert('Récord reiniciado a 0.0s');
    };

    lanzarBtn.onclick = lanzarTrompo;
    reiniciarBtn.onclick = reiniciarRecord;
}

// 4. Rayuela Game Logic (CL)
function initRayuelaGame() {
    const iniciarBtn = document.getElementById('rayuela-iniciar-btn');
    const casillas = document.querySelectorAll('.rayuela-grid .casilla');
    let currentCasilla = 1;
    
    const resetCasillas = () => {
        casillas.forEach(c => c.classList.remove('piedra'));
    };

    const startGame = () => {
        resetCasillas();
        currentCasilla = 1;
        
        const startCasilla = document.querySelector(`.casilla[data-casilla="1"]`);
        if (startCasilla) {
             startCasilla.classList.add('piedra');
        }
        
        alert(`¡Rayuela Iniciada! Lanza la piedra a la casilla ${currentCasilla}.`);
    };

    casillas.forEach(casilla => {
        casilla.onclick = () => {
            const num = parseInt(casilla.getAttribute('data-casilla'));
            if (num === currentCasilla) {
                casilla.classList.remove('piedra');
                
                currentCasilla++;
                
                if (currentCasilla <= 9) {
                    const nextCasilla = document.querySelector(`.casilla[data-casilla="${currentCasilla}"]`);
                    if (nextCasilla) {
                         nextCasilla.classList.add('piedra');
                    }
                    alert(`¡Bien! Ahora lanza a la casilla ${currentCasilla}.`);
                } else if (currentCasilla === 10) {
                    alert('¡Llegaste al Cielo (casilla 10)! ¡Ganaste!');
                    currentCasilla++;
                }
            } else if (num > 10 && currentCasilla > 1) {
                alert('Fin de la partida. ¡Pulsa Iniciar Juego para volver a empezar!');
            }
        };
    });

    iniciarBtn.onclick = startGame;
    
    // Initial setup
    resetCasillas();
}