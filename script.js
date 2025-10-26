// --- Game Data Structure (COMPLETADA CON LOS 35 PAÍSES) ---
const gamesData = {
    // México (Lotería) - Existente
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

    // Chile (Rayuela) - Existente
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

    // Argentina (El Sapo) - Existente
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

    // Colombia (Tejo) - NUEVO (Basado en Sapo)
    'CO': {
        country: 'Colombia',
        game: 'Tejo',
        color: '#FF9800',
        description: `
            <p>Juego de puntería de Colombia. Se lanzan discos de metal (tejos) a un objetivo de arcilla que contiene 'mechas' (pólvora).</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Lanzar el tejo desde la zona de lanzamiento (cancha)</li>
                <li data-number="2">Intentar acertar en el 'bocín' (anillo metálico central)</li>
                <li data-number="3">Hacer explotar una 'mecha' (sobre el bocín) da más puntos</li>
                <li data-number="4">Acertar en el bocín ('embocinada') da más puntos</li>
                <li data-number="5">Gana quien acumule más puntos.</li>
            </ol>
        `,
        playHtml: `
            <div class="sapo-container">
                <p>Puntuación: <span id="tejo-total-score">0</span> pts | Lanzamientos: <span id="tejo-throws-count">0</span>/10</p>
                <div class="sapo-actions">
                    <div class="progress-bar" id="tejo-progress-bar"></div>
                </div>
                <div class="sapo-score-grid" id="tejo-score-grid">
                    <div class="sapo-score-item" data-points="50" data-difficulty="0.1">
                        💥
                        <p>50 pts</p>
                        <span>Mecha</span>
                    </div>
                    <div class="sapo-score-item" data-points="20" data-difficulty="0.3">
                        🎯
                        <p>20 pts</p>
                        <span>Embocinada</span>
                    </div>
                    <div class="sapo-score-item" data-points="10" data-difficulty="0.7">
                        ⚪
                        <p>10 pts</p>
                        <span>Cerca</span>
                    </div>
                    <div class="sapo-score-item" data-points="5" data-difficulty="0.9">
                        ❌
                        <p>5 pts</p>
                        <span>En la arcilla</span>
                    </div>
                </div>
                <div class="sapo-actions">
                    <button id="tejo-reiniciar-btn">↻ Reiniciar</button>
                </div>
            </div>
        `,
        initGame: initTejoGame
    },

    // Perú (Sapo) - NUEVO (Basado en Sapo)
    'PE': {
        country: 'Perú',
        game: 'Sapo',
        color: '#FF9800',
        description: `
            <p>Versión peruana del juego de la rana o el sapo. Similar al argentino, el objetivo es meter fichas en los agujeros del tablero.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Lanzar las 10 fichas (tejos) por turno</li>
                <li data-number="2">Cada agujero tiene un puntaje diferente</li>
                <li data-number="3">La boca del sapo es el puntaje máximo</li>
                <li data-number="4">Se suman los puntos de las fichas encestadas</li>
                <li data-number="5">Gana quien tenga más puntos tras varias rondas.</li>
            </ol>
        `,
        playHtml: `
             <div class="sapo-container">
                <p>Puntuación: <span id="sapo-pe-total-score">0</span> pts | Lanzamientos: <span id="sapo-pe-throws-count">0</span>/10</p>
                <div class="sapo-actions">
                    <div class="progress-bar" id="sapo-pe-progress-bar"></div>
                </div>
                <div class="sapo-score-grid" id="sapo-pe-score-grid">
                    <div class="sapo-score-item" data-points="100" data-difficulty="0.1">
                        🐸
                        <p>100 pts</p>
                        <span>Boca del Sapo</span>
                    </div>
                    <div class="sapo-score-item" data-points="50" data-difficulty="0.3">
                        ⭐
                        <p>50 pts</p>
                        <span>Estrella</span>
                    </div>
                    <div class="sapo-score-item" data-points="20" data-difficulty="0.5">
                        🎯
                        <p>20 pts</p>
                        <span>Diana</span>
                    </div>
                    <div class="sapo-score-item" data-points="10" data-difficulty="0.7">
                        🔵
                        <p>10 pts</p>
                        <span>Agujero</span>
                    </div>
                </div>
                <div class="sapo-actions">
                    <button id="sapo-pe-reiniciar-btn">↻ Reiniciar</button>
                </div>
            </div>
        `,
        initGame: initSapoPeGame
    },

    // Brasil (Peteca) - NUEVO (Basado en Sapo)
    'BR': {
        country: 'Brasil',
        game: 'Peteca',
        color: '#FF9800',
        description: `
            <p>Juego similar al bádminton pero jugado con las manos, usando una 'peteca' (volante con plumas).</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se juega en una cancha dividida por una red</li>
                <li data-number="2">Se golpea la peteca con la palma de la mano</li>
                <li data-number="3">El objetivo es pasarla al campo contrario</li>
                <li data-number="4">Se anota punto si el oponente no la devuelve</li>
                <li data-number="5">Esta simulación es de puntería al golpear.</li>
            </ol>
        `,
        playHtml: `
            <div class="sapo-container">
                <p>Puntuación: <span id="peteca-total-score">0</span> pts | Golpes: <span id="peteca-throws-count">0</span>/10</p>
                <div class="sapo-actions">
                    <div class="progress-bar" id="peteca-progress-bar"></div>
                </div>
                <div class="sapo-score-grid" id="peteca-score-grid">
                    <div class="sapo-score-item" data-points="30" data-difficulty="0.2">
                        🎯
                        <p>30 pts</p>
                        <span>¡Smash!</span>
                    </div>
                    <div class="sapo-score-item" data-points="20" data-difficulty="0.4">
                        👟
                        <p>20 pts</p>
                        <span>Al fondo</span>
                    </div>
                    <div class="sapo-score-item" data-points="10" data-difficulty="0.6">
                        ✋
                        <p>10 pts</p>
                        <span>Buen golpe</span>
                    </div>
                    <div class="sapo-score-item" data-points="5" data-difficulty="0.8">
                        ❌
                        <p>5 pts</p>
                        <span>A la red</span>
                    </div>
                </div>
                <div class="sapo-actions">
                    <button id="peteca-reiniciar-btn">↻ Reiniciar</button>
                </div>
            </div>
        `,
        initGame: initPetecaGame
    },

    // Venezuela (Trompo) - Existente
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

    // Ecuador (Zumbambico) - NUEVO (Basado en Trompo)
    'EC': {
        country: 'Ecuador',
        game: 'Zumbambico',
        color: '#FF9800',
        description: `
            <p>Juego que usa un botón grande y un hilo para hacerlo girar y zumbar.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Pasar un hilo por los dos agujeros de un botón</li>
                <li data-number="2">Atar los extremos del hilo</li>
                <li data-number="3">Enrollar el hilo girando el botón</li>
                <li data-number="4">Estirar y encoger el hilo para que el botón gire y zumbe</li>
                <li data-number="5">Se compite por el zumbido más largo o fuerte.</li>
            </ol>
        `,
        playHtml: `
            <style>
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .trompo-spinning { animation: spin 0.2s linear infinite; }
            </style>
            <div class="trompo-container">
                <div class="trompo-animation">
                    <div class="trompo-icon" id="zumbambico-icon">
                       <span style="font-size: 5em;">🌀</span> </div>
                    <div class="trompo-spin-bar"></div>
                </div>
                <div class="trompo-record">
                    <p>Récord de Zumbido: <span id="zumbambico-record-time">0.0</span>s</p>
                </div>
                <div class="trompo-actions">
                    <button id="zumbambico-lanzar-btn">▶ Hacer Zumbar</button>
                    <button id="zumbambico-reiniciar-btn">↻ Reiniciar Récord</button>
                </div>
                <div class="trompo-tip">
                    <p>💡 Consejo: Un buen ritmo puede mantener el zumbido por mucho tiempo.</p>
                </div>
            </div>
        `,
        initGame: initZumbambicoGame
    },

    // Bolivia (Canicas) - NUEVO (Basado en Sapo)
    'BO': {
        country: 'Bolivia',
        game: 'Canicas',
        color: '#FF9800',
        description: `
            <p>Juego de puntería con pequeñas esferas de vidrio (canicas).</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se dibuja un círculo o un hoyo ('opa') en la tierra</li>
                <li data-number="2">Los jugadores intentan golpear las canicas de los oponentes</li>
                <li data-number="3">También se puede jugar a meter la canica en el hoyo</li>
                <li data-number="4">El jugador se queda con las canicas que saca del círculo</li>
                <li data-number="5">Gana quien consiga más canicas.</li>
            </ol>
        `,
        playHtml: `
            <div class="sapo-container">
                <p>Puntuación: <span id="canicas-total-score">0</span> pts | Tiros: <span id="canicas-throws-count">0</span>/10</p>
                <div class="sapo-actions">
                    <div class="progress-bar" id="canicas-progress-bar"></div>
                </div>
                <div class="sapo-score-grid" id="canicas-score-grid">
                    <div class="sapo-score-item" data-points="50" data-difficulty="0.1">
                        🎯
                        <p>50 pts</p>
                        <span>¡Al Hoyo!</span>
                    </div>
                    <div class="sapo-score-item" data-points="20" data-difficulty="0.3">
                        💥
                        <p>20 pts</p>
                        <span>Golpe Directo</span>
                    </div>
                    <div class="sapo-score-item" data-points="10" data-difficulty="0.6">
                        🔵
                        <p>10 pts</p>
                        <span>Roce</span>
                    </div>
                    <div class="sapo-score-item" data-points="5" data-difficulty="0.8">
                        ❌
                        <p>5 pts</p>
                        <span>Fallo</span>
                    </div>
                </div>
                <div class="sapo-actions">
                    <button id="canicas-reiniciar-btn">↻ Reiniciar</button>
                </div>
            </div>
        `,
        initGame: initCanicasGame
    },

    // Paraguay (Payupé) - NUEVO (Basado en Trompo)
    'PY': {
        country: 'Paraguay',
        game: 'Payupé',
        color: '#FF9800',
        description: `
            <p>Juego de habilidad manual, también conocido como "juego de la soga" o cuna de gato.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se utiliza un lazo de cuerda o hilo</li>
                <li data-number="2">Un jugador crea una figura con el hilo en sus manos</li>
                <li data-number="3">El siguiente jugador debe tomar el hilo y formar otra figura</li>
                <li data-number="4">Se van turnando hasta que alguien comete un error</li>
                <li data-number="5">Esta simulación mide tu habilidad para hacer figuras.</li>
            </ol>
        `,
        playHtml: `
            <style>
                @keyframes spin { from { transform: scale(1); } to { transform: scale(1.1); } }
                .trompo-spinning { animation: spin 0.5s ease-in-out infinite alternate; }
            </style>
            <div class="trompo-container">
                <div class="trompo-animation">
                    <div class="trompo-icon" id="payupe-icon">
                       <span style="font-size: 5em;">🕸️</span> </div>
                    <div class="trompo-spin-bar"></div>
                </div>
                <div class="trompo-record">
                    <p>Récord de Figuras: <span id="payupe-record-time">0</span></p>
                </div>
                <div class="trompo-actions">
                    <button id="payupe-lanzar-btn">▶ Hacer Figura</button>
                    <button id="payupe-reiniciar-btn">↻ Reiniciar Récord</button>
                </div>
                <div class="trompo-tip">
                    <p>💡 Consejo: Cada "clic" es una figura. Intenta hacer más que tu oponente.</p>
                </div>
            </div>
        `,
        initGame: initPayupeGame
    },

    // Uruguay (Bolita) - NUEVO (Basado en Sapo)
    'UY': {
        country: 'Uruguay',
        game: 'Bolita',
        color: '#FF9800',
        description: `
            <p>Similar al juego de canicas de otros países, se juega con bolitas de vidrio.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se dibuja un círculo en la tierra ('opí')</li>
                <li data-number="2">Cada jugador pone bolitas dentro del círculo</li>
                <li data-number="3">Por turnos, se lanza la bolita desde fuera</li>
                <li data-number="4">El objetivo es sacar las bolitas del círculo</li>
                <li data-number="5">El jugador se queda con las bolitas que saca.</li>
            </ol>
        `,
        playHtml: `
            <div class="sapo-container">
                <p>Bolitas Ganadas: <span id="bolita-total-score">0</span> | Tiros: <span id="bolita-throws-count">0</span>/10</p>
                <div class="sapo-actions">
                    <div class="progress-bar" id="bolita-progress-bar"></div>
                </div>
                <div class="sapo-score-grid" id="bolita-score-grid">
                    <div class="sapo-score-item" data-points="5" data-difficulty="0.2">
                        💥
                        <p>+5</p>
                        <span>¡Sacaste 5!</span>
                    </div>
                    <div class="sapo-score-item" data-points="3" data-difficulty="0.4">
                        🔥
                        <p>+3</p>
                        <span>¡Sacaste 3!</span>
                    </div>
                    <div class="sapo-score-item" data-points="1" data-difficulty="0.6">
                        🔵
                        <p>+1</p>
                        <span>¡Sacaste 1!</span>
                    </div>
                    <div class="sapo-score-item" data-points="0" data-difficulty="0.9">
                        ❌
                        <p>0</p>
                        <span>Fallo</span>
                    </div>
                </div>
                <div class="sapo-actions">
                    <button id="bolita-reiniciar-btn">↻ Reiniciar</button>
                </div>
            </div>
        `,
        initGame: initBolitaGame
    },

    // Estados Unidos (Four Square) - NUEVO (Basado en Trompo)
    'US': {
        country: 'Estados Unidos',
        game: 'Four Square',
        color: '#FF9800',
        description: `
            <p>Juego de pelota jugado en un cuadrado dividido en cuatro cuadrantes.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Un jugador en cada cuadrado (Rey, Reina, Jack, Servidor)</li>
                <li data-number="2">El Rey sirve la pelota al cuadrado de otro jugador</li>
                <li data-number="3">La pelota debe botar una vez y ser golpeada a otro cuadrado</li>
                <li data-not-number="4">Si un jugador falla, es eliminado y otros avanzan</li>
                <li data-number="5">El objetivo es llegar a ser el Rey y mantenerse.</li>
            </ol>
        `,
        playHtml: `
            <style>
                @keyframes spin { from { transform: scale(1); } to { transform: scale(1.05); } }
                .trompo-spinning { animation: spin 0.3s ease-in-out infinite alternate; }
            </style>
            <div class="trompo-container">
                <div class="trompo-animation">
                    <div class="trompo-icon" id="foursquare-icon">
                       <span style="font-size: 5em;">🏀</span> </div>
                    <div class="trompo-spin-bar"></div>
                </div>
                <div class="trompo-record">
                    <p>Récord de Rally: <span id="foursquare-record-time">0</span></p>
                </div>
                <div class="trompo-actions">
                    <button id="foursquare-lanzar-btn">▶ Golpear Pelota</button>
                    <button id="foursquare-reiniciar-btn">↻ Reiniciar Récord</button>
                </div>
                <div class="trompo-tip">
                    <p>💡 Simulación de rally. Cada clic es un golpe exitoso.</p>
                </div>
            </div>
        `,
        initGame: initFourSquareGame
    },

    // Canadá (Crokinole) - NUEVO (Basado en Sapo)
    'CA': {
        country: 'Canadá',
        game: 'Crokinole',
        color: '#FF9800',
        description: `
            <p>Juego de mesa de destreza donde los jugadores lanzan discos sobre un tablero circular.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Lanzar los discos por turnos hacia el centro</li>
                <li data-number="2">Si hay discos oponentes, se debe golpear uno</li>
                <li data-number="3">El hoyo central vale 20 puntos</li>
                <li data-number="4">Otras zonas del tablero valen 15, 10 y 5 puntos</li>
                <li data-number="5">Gana quien sume más puntos.</li>
            </ol>
        `,
        playHtml: `
            <div class="sapo-container">
                <p>Puntuación: <span id="crokinole-total-score">0</span> pts | Discos: <span id="crokinole-throws-count">0</span>/8</p>
                <div class="sapo-actions">
                    <div class="progress-bar" id="crokinole-progress-bar"></div>
                </div>
                <div class="sapo-score-grid" id="crokinole-score-grid">
                    <div class="sapo-score-item" data-points="20" data-difficulty="0.1">
                        🎯
                        <p>20 pts</p>
                        <span>Hoyo Central</span>
                    </div>
                    <div class="sapo-score-item" data-points="15" data-difficulty="0.3">
                        🔴
                        <p>15 pts</p>
                        <span>Círculo 15</span>
                    </div>
                    <div class="sapo-score-item" data-points="10" data-difficulty="0.5">
                        🔵
                        <p>10 pts</p>
                        <span>Círculo 10</span>
                    </div>
                    <div class="sapo-score-item" data-points="5" data-difficulty="0.7">
                        ⚪
                        <p>5 pts</p>
                        <span>Círculo 5</span>
                    </div>
                </div>
                <div class="sapo-actions">
                    <button id="crokinole-reiniciar-btn">↻ Reiniciar</button>
                </div>
            </div>
        `,
        initGame: initCrokinoleGame
    },

    // Guatemala (Barrilete) - NUEVO (Basado en Trompo)
    'GT': {
        country: 'Guatemala',
        game: 'Barrilete',
        color: '#FF9800',
        description: `
            <p>Juego de volar cometas (barriletes), especialmente popular en el Día de Todos los Santos.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Construir un barrilete con papel y cañas</li>
                <li data-number="2">Salir a un lugar abierto con viento</li>
                <li data-number="3">Correr para elevar el barrilete</li>
                <li data-number="4">Soltar y recoger hilo para mantenerlo en el aire</li>
                <li data-number="5">Se compite por el más grande o el que vuela más alto.</li>
            </ol>
        `,
        playHtml: `
            <style>
                @keyframes spin { from { transform: translateY(0px); } to { transform: translateY(-10px); } }
                .trompo-spinning { animation: spin 0.5s ease-in-out infinite alternate; }
            </style>
            <div class="trompo-container">
                <div class="trompo-animation">
                    <div class="trompo-icon" id="barrilete-icon">
                       <span style="font-size: 5em;">🪁</span> </div>
                    <div class="trompo-spin-bar"></div>
                </div>
                <div class="trompo-record">
                    <p>Récord de Vuelo: <span id="barrilete-record-time">0.0</span>s</p>
                </div>
                <div class="trompo-actions">
                    <button id="barrilete-lanzar-btn">▶ Elevar Barrilete</button>
                    <button id="barrilete-reiniciar-btn">↻ Reiniciar Récord</button>
                </div>
                <div class="trompo-tip">
                    <p>💡 Mantén presionado para "soltar hilo" y ganar tiempo. ¡Suelta antes de que caiga!</p>
                </div>
            </div>
        `,
        initGame: initBarrileteGame
    },

    // Honduras (Tinjoroch) - NUEVO (Basado en Trompo)
    'HN': {
        country: 'Honduras',
        game: 'Tinjoroch',
        color: '#FF9800',
        description: `
            <p>Juego similar al Zumbambico, usando una chapa (tapa de botella) o botón con hilo.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Aplanar una chapa y hacerle dos agujeros</li>
                <li data-number="2">Pasar un hilo por los agujeros y atarlo</li>
                <li data-number="3">Enrollar el hilo girando la chapa</li>
                <li data-number="4">Estirar y encoger el hilo para que gire y zumbe</li>
                <li data-number="5">Se compite por el zumbido más largo.</li>
            </ol>
        `,
        playHtml: `
            <style>
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .trompo-spinning { animation: spin 0.2s linear infinite; }
            </style>
            <div class="trompo-container">
                <div class="trompo-animation">
                    <div class="trompo-icon" id="tinjoroch-icon">
                       <span style="font-size: 5em;">💿</span> </div>
                    <div class="trompo-spin-bar"></div>
                </div>
                <div class="trompo-record">
                    <p>Récord de Zumbido: <span id="tinjoroch-record-time">0.0</span>s</p>
                </div>
                <div class="trompo-actions">
                    <button id="tinjoroch-lanzar-btn">▶ Hacer Zumbar</button>
                    <button id="tinjoroch-reiniciar-btn">↻ Reiniciar Récord</button>
                </div>
                <div class="trompo-tip">
                    <p>💡 Cuanto más rápido zumba, más segundos acumulas.</p>
                </div>
            </div>
        `,
        initGame: initTinjorochGame
    },

    // El Salvador (Chibola) - NUEVO (Basado en Sapo)
    'SV': {
        country: 'El Salvador',
        game: 'Chibola',
        color: '#FF9800',
        description: `
            <p>Juego de canicas. El objetivo es ganar las 'chibolas' (canicas) de los oponentes.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se dibuja un triángulo o círculo</li>
                <li data-number="2">Cada jugador 'apuesta' chibolas dentro</li>
                <li data-number="3">Se lanza desde una línea ('mica')</li>
                <li data-number="4">El objetivo es sacar las chibolas del área</li>
                <li data-number="5">Gana las chibolas que logras sacar.</li>
            </ol>
        `,
        playHtml: `
            <div class="sapo-container">
                <p>Chibolas Ganadas: <span id="chibola-total-score">0</span> | Tiros: <span id="chibola-throws-count">0</span>/10</p>
                <div class="sapo-actions">
                    <div class="progress-bar" id="chibola-progress-bar"></div>
                </div>
                <div class="sapo-score-grid" id="chibola-score-grid">
                    <div class="sapo-score-item" data-points="5" data-difficulty="0.2">
                        💥
                        <p>+5</p>
                        <span>¡Tiro Maestro!</span>
                    </div>
                    <div class="sapo-score-item" data-points="3" data-difficulty="0.4">
                        🔥
                        <p>+3</p>
                        <span>¡Buen tiro!</span>
                    </div>
                    <div class="sapo-score-item" data-points="1" data-difficulty="0.6">
                        🔵
                        <p>+1</p>
                        <span>¡Sacaste una!</span>
                    </div>
                    <div class="sapo-score-item" data-points="0" data-difficulty="0.9">
                        ❌
                        <p>0</p>
                        <span>Fallo</span>
                    </div>
                </div>
                <div class="sapo-actions">
                    <button id="chibola-reiniciar-btn">↻ Reiniciar</button>
                </div>
            </div>
        `,
        initGame: initChibolaGame
    },

    // Nicaragua (Trompo Nica) - NUEVO (Basado en Trompo)
    'NI': {
        country: 'Nicaragua',
        game: 'Trompo Nica',
        color: '#FF9800',
        description: `
            <p>Juego de destreza con el trompo, muy popular en Nicaragua.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Enrollar la cuerda (manila) en el trompo</li>
                <li data-number="2">Lanzarlo para que 'baile' (gire)</li>
                <li data-number="3">Hacer trucos como 'la palomita' (recogerlo en la mano)</li>
                <li data-number="4">Competir por el tiempo de giro</li>
                <li data-number="5">También se juega a 'chocar' trompos.</li>
            </ol>
        `,
        playHtml: `
            <style>
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .trompo-spinning { animation: spin 0.5s linear infinite; }
            </style>
            <div class="trompo-container">
                <div class="trompo-animation">
                    <div class="trompo-icon" id="tromponica-icon">
                       <span style="font-size: 5em;">🪀</span> </div>
                    <div class="trompo-spin-bar"></div>
                </div>
                <div class="trompo-record">
                    <p>Récord: <span id="tromponica-record-time">0.0</span>s</p>
                </div>
                <div class="trompo-actions">
                    <button id="tromponica-lanzar-btn">▶ Lanzar Trompo</button>
                    <button id="tromponica-reiniciar-btn">↻ Reiniciar Récord</button>
                </div>
                <div class="trompo-tip">
                    <p>💡 ¡Demuestra tu destreza con un lanzamiento largo!</p>
                </div>
            </div>
        `,
        initGame: initTrompoNicaGame
    },

    // Costa Rica (Yaces) - NUEVO (Basado en Sapo)
    'CR': {
        country: 'Costa Rica',
        game: 'Yaces',
        color: '#FF9800',
        description: `
            <p>Juego de destreza (Jacks) que usa piezas de plástico o metal y una pelota.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se lanzan los yaces al suelo</li>
                <li data-number="2">Se lanza la pelota al aire</li>
                <li data-number="3">Se debe recoger un yaz y atrapar la pelota antes que bote</li>
                <li data-number="4">En la siguiente ronda, se recogen dos yaces, y así</li>
                <li data-number="5">Pierde quien no atrape la pelota o mueva yaces.</li>
            </ol>
        `,
        playHtml: `
            <div class="sapo-container">
                <p>Yaces Recogidos: <span id="yaces-total-score">0</span> | Intentos: <span id="yaces-throws-count">0</span>/10</p>
                <div class="sapo-actions">
                    <div class="progress-bar" id="yaces-progress-bar"></div>
                </div>
                <div class="sapo-score-grid" id="yaces-score-grid">
                    <div class="sapo-score-item" data-points="5" data-difficulty="0.1">
                        🌟
                        <p>+5</p>
                        <span>¡5 Yaces!</span>
                    </div>
                    <div class="sapo-score-item" data-points="3" data-difficulty="0.3">
                        🔥
                        <p>+3</p>
                        <span>¡3 Yaces!</span>
                    </div>
                    <div class="sapo-score-item" data-points="1" data-difficulty="0.5">
                        ✨
                        <p>+1</p>
                        <span>¡1 Yaz!</span>
                    </div>
                    <div class="sapo-score-item" data-points="0" data-difficulty="0.8">
                        ❌
                        <p>0</p>
                        <span>Fallaste</span>
                    </div>
                </div>
                <div class="sapo-actions">
                    <button id="yaces-reiniciar-btn">↻ Reiniciar</button>
                </div>
            </div>
        `,
        initGame: initYacesGame
    },

    // Panamá (Peregrina) - NUEVO (Basado en Rayuela)
    'PA': {
        country: 'Panamá',
        game: 'Peregrina',
        color: '#FF9800',
        description: `
            <p>El juego de la 'Peregrina' es la versión panameña de la rayuela.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se dibuja el diagrama de la peregrina en el suelo</li>
                <li data-number="2">Se lanza una piedra o teja a la casilla 1</li>
                <li data-number="3">Se salta en un pie (o dos, si hay casillas dobles) sin pisar la casilla de la piedra</li>
                <li data-number="4">Se llega al 'cielo' (última casilla) y se regresa</li>
                <li data-number="5">Se recoge la piedra y se lanza a la siguiente casilla.</li>
            </ol>
        `,
        playHtml: `
            <div class="rayuela-container">
                <p>Lanza la piedra a la casilla: <span id="peregrina-current-casilla">1</span></p>
                <div class="rayuela-grid" id="peregrina-grid">
                    <div class="casilla" data-casilla="1">1</div>
                    <div class="casilla" data-casilla="2">2</div>
                    <div class="casilla" data-casilla="3">3</div>
                    <div class="casilla" data-casilla="4">4</div>
                    <div class="casilla" data-casilla="5">5</div>
                    <div class="casilla" data-casilla="6">6</div>
                    <div class="casilla" data-casilla="7">7</div>
                    <div class="casilla" data-casilla="8">8</div>
                    <div class="casilla" data-casilla="9">9</div>
                    <div class="casilla" data-casilla="10">Cielo</div>
                </div>
                <div class="rayuela-actions">
                    <button id="peregrina-iniciar-btn">Iniciar Juego</button>
                </div>
            </div>
        `,
        initGame: initPeregrinaGame
    },

    // Cuba (Escondidas) - NUEVO (Basado en Rayuela)
    'CU': {
        country: 'Cuba',
        game: 'Escondidas',
        color: '#FF9800',
        description: `
            <p>El clásico juego de las escondidas o 'escondido'.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Un jugador ('el que la queda') cuenta hasta un número</li>
                <li data-number="2">Los demás jugadores se esconden</li>
                <li data-number="3">El contador debe buscar a los demás</li>
                <li data-number="4">Al encontrar a alguien, debe correr a 'la base' y decir su nombre</li>
                <li data-number="5">Si un jugador escondido llega a la base antes, se salva.</li>
            </ol>
        `,
        playHtml: `
            <div class="rayuela-container">
                <p>Encuentra a los 5 jugadores escondidos. ¡Haz clic en los lugares!</p>
                <div class="rayuela-grid" id="escondidas-grid" style="grid-template-columns: repeat(3, 1fr);">
                    <div class="casilla" data-casilla="1">🌳</div>
                    <div class="casilla" data-casilla="2">🚗</div>
                    <div class="casilla" data-casilla="3">🏠</div>
                    <div class="casilla" data-casilla="4">🚪</div>
                    <div class="casilla" data-casilla="5">📦</div>
                    <div class="casilla" data-casilla="6"> bụi </div>
                </div>
                <div class="rayuela-actions">
                    <button id="escondidas-iniciar-btn">Jugar de Nuevo</button>
                </div>
            </div>
        `,
        initGame: initEscondidasGame
    },

    // Haití (Osle) - NUEVO (Basado en Rayuela)
    'HT': {
        country: 'Haití',
        game: 'Osle',
        color: '#FF9800',
        description: `
            <p>El 'Osle' (del francés 'osselet') es el juego de la rayuela en Haití.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Similar a otras rayuelas, se dibuja un patrón en el suelo</li>
                <li data-number="2">Se lanza una piedra (roche) a la primera casilla</li>
                <li data-number="3">Se salta el recorrido sin pisar la línea ni la casilla con la piedra</li>
                <li data-number="4">Se recoge la piedra al regreso</li>
                <li data-number="5">Se avanza a la siguiente casilla.</li>
            </ol>
        `,
        playHtml: `
            <div class="rayuela-container">
                <p>Lanza la 'roche' a la casilla: <span id="osle-current-casilla">1</span></p>
                <div class="rayuela-grid" id="osle-grid">
                    <div class="casilla" data-casilla="1">1</div>
                    <div class="casilla" data-casilla="2">2</div>
                    <div class="casilla" data-casilla="3">3</div>
                    <div class="casilla" data-casilla="4">4</div>
                    <div class="casilla" data-casilla="5">5</div>
                    <div class="casilla" data-casilla="6">6</div>
                    <div class="casilla" data-casilla="7">7</div>
                    <div class="casilla" data-casilla="8">8</div>
                    <div class="casilla" data-casilla="9">9</div>
                    <div class="casilla" data-casilla="10">Ciel</div>
                </div>
                <div class="rayuela-actions">
                    <button id="osle-iniciar-btn">Iniciar Juego</button>
                </div>
            </div>
        `,
        initGame: initOsleGame
    },

    // República Dominicana (Vitilla) - NUEVO (Basado en Sapo)
    'DO': {
        country: 'República Dominicana',
        game: 'Vitilla',
        color: '#FF9800',
        description: `
            <p>Juego similar al béisbol, pero se usa un palo de escoba y una 'vitilla' (tapa de botella).</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se juega en dos equipos: lanzador y bateador</li>
                <li data-number="2">El lanzador tira la vitilla (tapa)</li>
                <li data-number="3">El bateador debe golpearla con el palo</li>
                <li data-number="4">Si la golpea, corre por las bases (como en béisbol)</li>
                <li data-number="5">Es un juego de gran destreza por el movimiento errático de la tapa.</li>
            </ol>
        `,
        playHtml: `
            <div class="sapo-container">
                <p>Carreras: <span id="vitilla-total-score">0</span> | Bateos: <span id="vitilla-throws-count">0</span>/10</p>
                <div class="sapo-actions">
                    <div class="progress-bar" id="vitilla-progress-bar"></div>
                </div>
                <div class="sapo-score-grid" id="vitilla-score-grid">
                    <div class="sapo-score-item" data-points="4" data-difficulty="0.1">
                        ⚾
                        <p>+4</p>
                        <span>¡Home Run!</span>
                    </div>
                    <div class="sapo-score-item" data-points="2" data-difficulty="0.3">
                        🔥
                        <p>+2</p>
                        <span>¡Doble!</span>
                    </div>
                    <div class="sapo-score-item" data-points="1" data-difficulty="0.6">
                        💨
                        <p>+1</p>
                        <span>¡Hit!</span>
                    </div>
                    <div class="sapo-score-item" data-points="0" data-difficulty="0.8">
                        ❌
                        <p>0</p>
                        <span>¡Out!</span>
                    </div>
                </div>
                <div class="sapo-actions">
                    <button id="vitilla-reiniciar-btn">↻ Batear de Nuevo</button>
                </div>
            </div>
        `,
        initGame: initVitillaGame
    },

    // Puerto Rico (Bolas Criollas) - NUEVO (Basado en Sapo)
    'PR': {
        country: 'Puerto Rico',
        game: 'Bolas Criollas',
        color: '#FF9800',
        description: `
            <p>Juego de puntería similar a la petanca o bochas. Se lanzan bolas para acercarse a una bola más pequeña.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se lanza una bola pequeña ('mingo')</li>
                <li data-number="2">Dos equipos lanzan sus bolas (de color diferente)</li>
                <li data-number="3">El objetivo es dejar las bolas de tu equipo más cerca del mingo</li>
                <li data-number="4">Se pueden golpear las bolas del oponente</li>
                <li data-number="5">Gana el equipo que acumule más puntos (bolas más cercanas).</li>
            </ol>
        `,
        playHtml: `
            <div class="sapo-container">
                <p>Puntos: <span id="bolas-total-score">0</span> | Lanzamientos: <span id="bolas-throws-count">0</span>/8</p>
                <div class="sapo-actions">
                    <div class="progress-bar" id="bolas-progress-bar"></div>
                </div>
                <div class="sapo-score-grid" id="bolas-score-grid">
                    <div class="sapo-score-item" data-points="10" data-difficulty="0.2">
                        🎯
                        <p>+10</p>
                        <span>¡Pegado al Mingo!</span>
                    </div>
                    <div class="sapo-score-item" data-points="5" data-difficulty="0.4">
                        👍
                        <p>+5</p>
                        <span>¡Muy cerca!</span>
                    </div>
                    <div class="sapo-score-item" data-points="1" data-difficulty="0.7">
                        ⚪
                        <p>+1</p>
                        <span>Cerca</span>
                    </div>
                    <div class="sapo-score-item" data-points="0" data-difficulty="0.9">
                        ❌
                        <p>0</p>
                        <span>Lejos</span>
                    </div>
                </div>
                <div class="sapo-actions">
                    <button id="bolas-reiniciar-btn">↻ Reiniciar</button>
                </div>
            </div>
        `,
        initGame: initBolasGame
    },

    // Jamaica (Dandy Shandy) - NUEVO (Basado en Trompo)
    'JM': {
        country: 'Jamaica',
        game: 'Dandy Shandy',
        color: '#FF9800',
        description: `
            <p>Un juego de lanzar y atrapar, donde se usa una pelota hecha de cajas de jugo (box juice).</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Un jugador lanza la 'pelota' contra una pared</li>
                <li data-number="2">Mientras está en el aire, debe realizar una acción (aplaudir, girar)</li>
                <li data-number="3">Debe atrapar la pelota antes de que caiga</li>
                <li data-number="4">El juego aumenta en dificultad (dos aplausos, etc.)</li>
                <li data-number="5">Pierde quien falle en la acción o no atrape la pelota.</li>
            </ol>
        `,
        playHtml: `
            <style>
                @keyframes spin { from { transform: scale(1); } to { transform: scale(1.05); } }
                .trompo-spinning { animation: spin 0.3s ease-in-out infinite alternate; }
            </style>
            <div class="trompo-container">
                <div class="trompo-animation">
                    <div class="trompo-icon" id="dandy-icon">
                       <span style="font-size: 5em;">👏</span> </div>
                    <div class="trompo-spin-bar"></div>
                </div>
                <div class="trompo-record">
                    <p>Récord de Aplausos: <span id="dandy-record-time">0</span></p>
                </div>
                <div class="trompo-actions">
                    <button id="dandy-lanzar-btn">▶ Lanzar y Aplaudir</button>
                    <button id="dandy-reiniciar-btn">↻ Reiniciar Récord</button>
                </div>
                <div class="trompo-tip">
                    <p>💡 Cada clic es un lanzamiento y aplauso exitoso.</p>
                </div>
            </div>
        `,
        initGame: initDandyGame
    },

    // Trinidad y Tobago (All Fours) - NUEVO (Placeholder)
    'TT': {
        country: 'Trinidad y Tobago',
        game: 'All Fours',
        color: '#4CAF50',
        description: `
            <p>Un juego de cartas de estrategia muy popular en Trinidad y Tobago, jugado en equipos de dos.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se juega con una baraja estándar de 52 cartas</li>
                <li data-number="2">El objetivo es ganar 'puntos' (High, Low, Jack, Game)</li>
                <li data-number="3">Se reparten 6 cartas a cada uno de los 4 jugadores</li>
                <li data-number="4">Se juega por 'bazas', intentando ganar cartas de valor</li>
                <li data-number="5">Gana el equipo que llegue primero a la puntuación meta.</li>
            </ol>
        `,
        playHtml: `<div style="text-align:center; padding: 40px;">¡Este juego de cartas es muy complejo para simular aquí! Pronto podrás jugarlo.</div>`,
        initGame: null
    },

    // Barbados (Warri) - NUEVO (Placeholder)
    'BB': {
        country: 'Barbados',
        game: 'Warri',
        color: '#4CAF50',
        description: `
            <p>Un juego de tablero de la familia Mancala, de origen africano y muy popular en el Caribe.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se juega en un tablero con dos filas de seis hoyos</li>
                <li data-number="2">Se usan 48 semillas ('nicker nuts')</li>
                <li data-number="3">Los jugadores toman las semillas de un hoyo y las 'siembran'</li>
                <li data-number="4">El objetivo es capturar semillas del oponente</li>
                <li data-number="5">Gana el jugador que capture 25 semillas o más.</li>
            </ol>
        `,
        playHtml: `<div style="text-align:center; padding: 40px;">¡Este juego de estrategia es muy complejo para simular aquí! Pronto podrás jugarlo.</div>`,
        initGame: null
    },

    // Bahamas (Ring Play) - NUEVO (Basado en Trompo)
    'BS': {
        country: 'Bahamas',
        game: 'Ring Play',
        color: '#FF9800',
        description: `
            <p>Juegos tradicionales cantados que se juegan en un círculo, involucrando ritmo y movimiento.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Los niños se forman en un círculo</li>
                <li data-number="2">Cantan canciones tradicionales</li>
                <li data-number="3">Un jugador en el centro realiza acciones (bailar, elegir a otro)</li>
                <li data-number="4">Se siguen las instrucciones de la canción</li>
                <li data-number="5">El objetivo es socializar y seguir el ritmo.</li>
            </ol>
        `,
        playHtml: `
            <style>
                @keyframes spin { from { transform: scale(1); } to { transform: scale(1.05); } }
                .trompo-spinning { animation: spin 0.5s ease-in-out infinite alternate; }
            </style>
            <div class="trompo-container">
                <div class="trompo-animation">
                    <div class="trompo-icon" id="ring-icon">
                       <span style="font-size: 5em;">🎶</span> </div>
                    <div class="trompo-spin-bar"></div>
                </div>
                <div class="trompo-record">
                    <p>Récord de Ritmo: <span id="ring-record-time">0</span></p>
                </div>
                <div class="trompo-actions">
                    <button id="ring-lanzar-btn">▶ Seguir el Ritmo</button>
                    <button id="ring-reiniciar-btn">↻ Reiniciar Récord</button>
                </div>
                <div class="trompo-tip">
                    <p>💡 ¡Haz clic para mantener el ritmo de la canción!</p>
                </div>
            </div>
        `,
        initGame: initRingGame
    },

    // Belice (Conch Shell) - NUEVO (Placeholder)
    'BZ': {
        country: 'Belice',
        game: 'Conch Shell',
        color: '#4CAF50',
        description: `
            <p>Un juego de habilidad que involucra lanzar objetos a una caracola (conch shell).</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se coloca una caracola grande en el suelo</li>
                <li data-number="2">Los jugadores se paran a una distancia</li>
                <li data-number="3">Intentan lanzar objetos pequeños (piedras, semillas)</li>
                <li data-number="4">El objetivo es que el objeto caiga dentro de la caracola</li>
                <li data-number="5">Gana quien enceste más veces.</li>
            </ol>
        `,
        playHtml: `<div style="text-align:center; padding: 40px;">¡Juego en desarrollo! Pronto podrás lanzar a la caracola.</div>`,
        initGame: null // Se puede implementar con lógica Sapo en el futuro
    },

    // Guyana (Ten-Ten) - NUEVO (Basado en Trompo)
    'GY': {
        country: 'Guyana',
        game: 'Ten-Ten',
        color: '#FF9800',
        description: `
            <p>Un juego de palmas rítmico, similar a 'Pat-a-cake', jugado en parejas.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Dos jugadores se sientan uno frente al otro</li>
                <li data-number="2">Siguen un patrón de aplausos (propias manos, manos del compañero)</li>
                <li data-number="3">El ritmo y la canción se aceleran</li>
                <li data-number="4">Pierde el jugador que se equivoca en el patrón</li>
                <li data-number="5">El objetivo es mantener la coordinación.</li>
            </ol>
        `,
        playHtml: `
            <style>
                @keyframes spin { from { transform: scale(1); } to { transform: scale(1.05); } }
                .trompo-spinning { animation: spin 0.3s ease-in-out infinite alternate; }
            </style>
            <div class="trompo-container">
                <div class="trompo-animation">
                    <div class="trompo-icon" id="tenten-icon">
                       <span style="font-size: 5em;">👏</span> </div>
                    <div class="trompo-spin-bar"></div>
                </div>
                <div class="trompo-record">
                    <p>Récord de Ritmo: <span id="tenten-record-time">0</span></p>
                </div>
                <div class="trompo-actions">
                    <button id="tenten-lanzar-btn">▶ Aplaudir</button>
                    <button id="tenten-reiniciar-btn">↻ Reiniciar Récord</button>
                </div>
                <div class="trompo-tip">
                    <p>💡 ¡Sigue el ritmo! Cada clic es un aplauso a tiempo.</p>
                </div>
            </div>
        `,
        initGame: initTenTenGame
    },

    // Surinam (Awari) - NUEVO (Placeholder)
    'SR': {
        country: 'Surinam',
        game: 'Awari',
        color: '#4CAF50',
        description: `
            <p>Versión local del juego de tablero Mancala (similar al Warri de Barbados).</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se juega en un tablero con dos filas de seis hoyos</li>
                <li data-number="2">Se usan 48 semillas</li>
                <li data-number="3">Los jugadores 'siembran' las semillas por turnos</li>
                <li data-number="4">El objetivo es capturar semillas del oponente</li>
                <li data-number="5">Gana el jugador que capture más de la mitad.</li>
            </ol>
        `,
        playHtml: `<div style="text-align:center; padding: 40px;">¡Este juego de estrategia es muy complejo para simular aquí! Pronto podrás jugarlo.</div>`,
        initGame: null
    },

    // Guayana Francesa (Pétanque Créole) - NUEVO (Basado en Sapo)
    'GF': {
        country: 'Guayana Francesa',
        game: 'Pétanque Créole',
        color: '#FF9800',
        description: `
            <p>Versión criolla del juego francés de petanca. Se lanzan bolas de metal lo más cerca posible de una bola objetivo.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se lanza la bola objetivo ('cochonnet' o 'bouchon')</li>
                <li data-number="2">Los jugadores lanzan sus bolas (pétanque)</li>
                <li data-number="3">El objetivo es quedar más cerca del 'bouchon' que el oponente</li>
                <li data-number="4">Se puede 'disparar' (tirer) a las bolas oponentes</li>
                <li data-number="5">Se puntúa por cada bola más cercana.</li>
            </ol>
        `,
        playHtml: `
            <div class="sapo-container">
                <p>Puntos: <span id="petanque-total-score">0</span> | Bolas: <span id="petanque-throws-count">0</span>/6</p>
                <div class="sapo-actions">
                    <div class="progress-bar" id="petanque-progress-bar"></div>
                </div>
                <div class="sapo-score-grid" id="petanque-score-grid">
                    <div class="sapo-score-item" data-points="10" data-difficulty="0.2">
                        🎯
                        <p>+10</p>
                        <span>¡Carreau! (Tiro perfecto)</span>
                    </div>
                    <div class="sapo-score-item" data-points="5" data-difficulty="0.4">
                        👍
                        <p>+5</p>
                        <span>¡Bien 'pointé'! (Cerca)</span>
                    </div>
                    <div class="sapo-score-item" data-points="1" data-difficulty="0.7">
                        ⚪
                        <p>+1</p>
                        <span>En juego</span>
                    </div>
                    <div class="sapo-score-item" data-points="0" data-difficulty="0.9">
                        ❌
                        <p>0</p>
                        <span>Lejos</span>
                    </div>
                </div>
                <div class="sapo-actions">
                    <button id="petanque-reiniciar-btn">↻ Reiniciar</button>
                </div>
            </div>
        `,
        initGame: initPetanqueGame
    },

    // Granada (Jacks) - NUEVO (Basado en Sapo)
    'GD': {
        country: 'Granada',
        game: 'Jacks',
        color: '#FF9800',
        description: `
            <p>Juego de destreza con 'jacks' (piezas metálicas) y una pelota de goma.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se esparcen los jacks en el suelo</li>
                <li data-number="2">Se lanza la pelota al aire</li>
                <li data-number="3">Se recoge un jack ('onesies') y se atrapa la pelota</li>
                <li data-number="4">Se repite, aumentando el número de jacks a recoger ('twosies', etc.)</li>
                <li data-number="5">Pierde quien falle al recoger o atrapar la pelota.</li>
            </ol>
        `,
        playHtml: `
            <div class="sapo-container">
                <p>Jacks Recogidos: <span id="jacks-total-score">0</span> | Intentos: <span id="jacks-throws-count">0</span>/10</p>
                <div class="sapo-actions">
                    <div class="progress-bar" id="jacks-progress-bar"></div>
                </div>
                <div class="sapo-score-grid" id="jacks-score-grid">
                    <div class="sapo-score-item" data-points="5" data-difficulty="0.1">
                        🌟
                        <p>+5</p>
                        <span>¡Fivesies!</span>
                    </div>
                    <div class="sapo-score-item" data-points="3" data-difficulty="0.3">
                        🔥
                        <p>+3</p>
                        <span>¡Threesies!</span>
                    </div>
                    <div class="sapo-score-item" data-points="1" data-difficulty="0.5">
                        ✨
                        <p>+1</p>
                        <span>¡Onesies!</span>
                    </div>
                    <div class="sapo-score-item" data-points="0" data-difficulty="0.8">
                        ❌
                        <p>0</p>
                        <span>Fallaste</span>
                    </div>
                </div>
                <div class="sapo-actions">
                    <button id="jacks-reiniciar-btn">↻ Reiniciar</button>
                </div>
            </div>
        `,
        initGame: initJacksGame
    },

    // Antigua y Barbuda (Hopscotch Tropical) - NUEVO (Basado en Rayuela)
    'AG': {
        country: 'Antigua y Barbuda',
        game: 'Hopscotch Tropical',
        color: '#FF9800',
        description: `
            <p>La versión caribeña de la rayuela, a menudo dibujada en la arena de la playa.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se dibuja el diagrama de 'Hopscotch'</li>
                <li data-number="2">Se lanza una piedra ('marker') a la casilla 1</li>
                <li data-number="3">Se salta el recorrido, evitando la casilla con el marcador</li>
                <li data-number="4">Se recoge el marcador en el camino de regreso</li>
                <li data-number="5">Se avanza el marcador a la siguiente casilla.</li>
            </ol>
        `,
        playHtml: `
            <div class="rayuela-container">
                <p>Lanza el 'marker' a la casilla: <span id="hopscotch-current-casilla">1</span></p>
                <div class="rayuela-grid" id="hopscotch-grid">
                    <div class="casilla" data-casilla="1">1</div>
                    <div class="casilla" data-casilla="2">2</div>
                    <div class="casilla" data-casilla="3">3</div>
                    <div class="casilla" data-casilla="4">4</div>
                    <div class="casilla" data-casilla="5">5</div>
                    <div class="casilla" data-casilla="6">6</div>
                    <div class="casilla" data-casilla="7">7</div>
                    <div class="casilla" data-casilla="8">8</div>
                    <div class="casilla" data-casilla="9">9</div>
                    <div class="casilla" data-casilla="10">🌴</div>
                </div>
                <div class="rayuela-actions">
                    <button id="hopscotch-iniciar-btn">Iniciar Juego</button>
                </div>
            </div>
        `,
        initGame: initHopscotchGame
    },

    // Santa Lucía (Marble Game) - NUEVO (Basado en Sapo)
    'LC': {
        country: 'Santa Lucía',
        game: 'Marble Game',
        color: '#FF9800',
        description: `
            <p>Juego de canicas ('marbles') muy popular entre los niños de la isla.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Se dibuja un círculo ('ring')</li>
                <li data-number="2">Se colocan canicas dentro</li>
                <li data-number="3">Los jugadores lanzan su canica ('taw')</li>
                <li data-number="4">El objetivo es sacar las canicas del círculo</li>
                <li data-number="5">El jugador se queda con las canicas que saca.</li>
            </ol>
        `,
        playHtml: `
            <div class="sapo-container">
                <p>Canicas Ganadas: <span id="marble-total-score">0</span> | Tiros: <span id="marble-throws-count">0</span>/10</p>
                <div class="sapo-actions">
                    <div class="progress-bar" id="marble-progress-bar"></div>
                </div>
                <div class="sapo-score-grid" id="marble-score-grid">
                    <div class="sapo-score-item" data-points="5" data-difficulty="0.2">
                        💥
                        <p>+5</p>
                        <span>¡Tiro Limpio!</span>
                    </div>
                    <div class="sapo-score-item" data-points="3" data-difficulty="0.4">
                        🔥
                        <p>+3</p>
                        <span>¡Buen tiro!</span>
                    </div>
                    <div class="sapo-score-item" data-points="1" data-difficulty="0.6">
                        🔵
                        <p>+1</p>
                        <span>¡Sacaste una!</span>
                    </div>
                    <div class="sapo-score-item" data-points="0" data-difficulty="0.9">
                        ❌
                        <p>0</p>
                        <span>Fallo</span>
                    </div>
                </div>
                <div class="sapo-actions">
                    <button id="marble-reiniciar-btn">↻ Reiniciar</button>
                </div>
            </div>
        `,
        initGame: initMarbleGame
    },

    // San Vicente y Granadinas (Rounders Caribbean) - NUEVO (Basado en Sapo)
    'VC': {
        country: 'San Vicente y Granadinas',
        game: 'Rounders Caribbean',
        color: '#FF9800',
        description: `
            <p>Juego de bate y pelota, precursor del béisbol, muy jugado en las escuelas.</p>
            <h3>Reglas del Juego:</h3>
            <ol>
                <li data-number="1">Similar al béisbol, con un bate y una pelota</li>
                <li data-number="2">Un lanzador ('bowler') tira la pelota</li>
                <li data-number="3">Un bateador debe golpearla</li>
                <li data-number="4">El bateador corre por postes o bases</li>
                <li data-number="5">Se anota un 'rounder' (carrera) al completar el circuito.</li>
            </ol>
        `,
        playHtml: `
            <div class="sapo-container">
                <p>Rounders: <span id="rounders-total-score">0</span> | Bateos: <span id="rounders-throws-count">0</span>/10</p>
                <div class="sapo-actions">
                    <div class="progress-bar" id="rounders-progress-bar"></div>
                </div>
                <div class="sapo-score-grid" id="rounders-score-grid">
                    <div class="sapo-score-item" data-points="4" data-difficulty="0.1">
                        ⚾
                        <p>+4</p>
                        <span>¡Home Run!</span>
                    </div>
                    <div class="sapo-score-item" data-points="2" data-difficulty="0.3">
                        🔥
                        <p>+2</p>
                        <span>¡Doble!</span>
                    </div>
                    <div class="sapo-score-item" data-points="1" data-difficulty="0.6">
                        💨
                        <p>+1</p>
                        <span>¡Hit!</span>
                    </div>
                    <div class="sapo-score-item" data-points="0" data-difficulty="0.8">
                        ❌
                        <p>0</p>
                        <span>¡Out!</span>
                    </div>
                </div>
                <div class="sapo-actions">
                    <button id="rounders-reiniciar-btn">↻ Batear de Nuevo</button>
                </div>
            </div>
        `,
        initGame: initRoundersGame
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
        // Usamos el código de país o 'DEFAULT' si no se encuentra
        const countryData = gamesData[countryCode] || gamesData['DEFAULT'];

        // Si es 'DEFAULT', intentamos al menos poner el nombre del país de la tarjeta
        if (countryCode && !gamesData[countryCode]) {
            countryData.country = card.querySelector('h3').textContent || 'País';
        }

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
        if (countryData.initGame) {
            setTimeout(() => {
                countryData.initGame();
            }, 50); 
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

// --- LÓGICA DE JUEGOS EXISTENTES ---

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
        const marked = Array.from(loteriaImages)
            .filter(img => img.classList.contains('marcado'))
            .map(img => parseInt(img.getAttribute('data-index')));
        
        for (const combo of winCombinations) {
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
        
        const randomIndex = Math.floor(Math.random() * availableCards.length);
        currentCard = availableCards.splice(randomIndex, 1)[0];
        
        currentCardDisplay.textContent = currentCard;
        sacraCartaBtn.disabled = true; 
    };

    const resetGame = () => {
        availableCards = [...cards];
        currentCard = null;
        currentCardDisplay.textContent = '?';
        sacraCartaBtn.disabled = false;
        loteriaImages.forEach(image => image.classList.remove('marcado'));
    };
    
    loteriaImages.forEach(image => {
        image.onclick = () => {
            if (currentCard && image.textContent === currentCard) {
                image.classList.add('marcado');
                sacraCartaBtn.disabled = false; 
                currentCard = null; 
                currentCardDisplay.textContent = '✔️'; 

                if (checkWin()) {
                    alert('¡LOTERÍA! 🎉 Ganaste con 3 en línea.');
                    sacraCartaBtn.disabled = true;
                }
            } else if (image.classList.contains('marcado')) {
                image.classList.remove('marcado');
            }
        };
    });

    sacraCartaBtn.onclick = pullCard;
    nuevaTablaBtn.onclick = resetGame;
    resetGame();
}

// 2. El Sapo Game Logic (AR)
function initSapoGame() {
    const totalScoreSpan = document.getElementById('sapo-total-score');
    const throwsCountSpan = document.getElementById('sapo-throws-count');
    const scoreItems = document.querySelectorAll('#sapo-score-grid .sapo-score-item');
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
        throwsCountSpan.textContent = `${throws}/${maxThrows}`;
        const progress = (throws / maxThrows) * 100;
        progressBar.style.width = `${progress}%`;
        progressBar.style.backgroundColor = `hsl(${120 - (progress * 1.2)}, 70%, 50%)`;
    };

    const resetGame = () => {
        totalScore = 0;
        throws = 0;
        updateUI();
        scoreItems.forEach(item => item.onclick = onItemClick);
    };

    const onItemClick = (e) => {
        if (throws >= maxThrows) {
            alert(`Juego terminado. Puntuación final: ${totalScore} pts.`);
            return;
        }

        const item = e.currentTarget;
        const points = parseInt(item.getAttribute('data-points'));
        const difficulty = parseFloat(item.getAttribute('data-difficulty'));
        
        const isSuccess = Math.random() > difficulty; 
        
        if (isSuccess) {
            totalScore += points;
            item.style.backgroundColor = 'lightgreen';
            alert(`${getResultEmoji(true)} ¡Acertaste! ${points} pts.`);
        } else {
            item.style.backgroundColor = '#ffcdd2';
            alert(`${getResultEmoji(false)} ¡Fallaste!`);
        }

        throws++;
        updateUI();

        setTimeout(() => {
            item.style.backgroundColor = '';
            if (throws >= maxThrows) {
                alert(`Fin de la partida. Puntuación final: ${totalScore} pts.`);
                scoreItems.forEach(i => i.onclick = null); 
            }
        }, 500);
    };

    scoreItems.forEach(item => {
        item.onclick = onItemClick;
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
        trompoIcon.classList.add('trompo-spinning'); 

        const spinTime = (Math.random() * 6.0 + 2.0); 

        setTimeout(() => {
            trompoIcon.classList.remove('trompo-spinning'); 
            lanzarBtn.textContent = '▶ Lanzar Trompo';
            lanzarBtn.disabled = false;
            
            alert(`Tu tiempo de giro: ${spinTime.toFixed(1)}s`);

            if (spinTime > currentRecord) {
                currentRecord = spinTime;
                localStorage.setItem('trompoRecord', currentRecord);
                recordTimeSpan.textContent = currentRecord.toFixed(1);
                alert(`¡Nuevo Récord! 🏆 ${currentRecord.toFixed(1)}s`);
            }
        }, spinTime * 1000); 
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
            const numAttr = casilla.getAttribute('data-casilla');
            if (!numAttr) return; // Si es la casilla 10 (sin número)
            
            const num = parseInt(numAttr);
            
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
            } else if (num < currentCasilla) {
                 alert('Ya pasaste esa casilla. Lanza a la ' + currentCasilla);
            } else if (num > currentCasilla) {
                 alert('¡Te saltaste! Debes lanzar a la casilla ' + currentCasilla);
            }
        };
    });

    iniciarBtn.onclick = startGame;
    resetCasillas();
}


// --- LÓGICA DE JUEGOS NUEVOS ---

// (Generic Sapo Logic) - Plantilla para juegos de puntería
function createSapoLikeGame(ids) {
    const totalScoreSpan = document.getElementById(ids.score);
    const throwsCountSpan = document.getElementById(ids.throws);
    const scoreItems = document.querySelectorAll(`#${ids.grid} .sapo-score-item`);
    const progressBar = document.getElementById(ids.progress);
    const reiniciarBtn = document.getElementById(ids.reset);
    let totalScore = 0;
    let throws = 0;
    const maxThrows = ids.maxThrows || 10;
    
    const getResultEmoji = (success) => {
        const successEmojis = ['✅', '🎯', '✨', '🥳', '👍', '🔥'];
        const failEmojis = ['❌', '🗑️', '😟', '👎', '😥'];
        const list = success ? successEmojis : failEmojis;
        return list[Math.floor(Math.random() * list.length)];
    };

    const updateUI = () => {
        totalScoreSpan.textContent = totalScore;
        throwsCountSpan.textContent = `${throws}/${maxThrows}`;
        const progress = (throws / maxThrows) * 100;
        progressBar.style.width = `${progress}%`;
        progressBar.style.backgroundColor = `hsl(${120 - (progress * 1.2)}, 70%, 50%)`;
    };

    const resetGame = () => {
        totalScore = 0;
        throws = 0;
        updateUI();
        scoreItems.forEach(item => item.onclick = onItemClick);
    };

    const onItemClick = (e) => {
        if (throws >= maxThrows) {
            alert(`Juego terminado. Puntuación final: ${totalScore} pts.`);
            return;
        }

        const item = e.currentTarget;
        const points = parseInt(item.getAttribute('data-points'));
        const difficulty = parseFloat(item.getAttribute('data-difficulty'));
        
        const isSuccess = Math.random() > difficulty; 
        
        if (isSuccess) {
            totalScore += points;
            item.style.backgroundColor = 'lightgreen';
            alert(`${getResultEmoji(true)} ¡Acertaste! ${points > 0 ? `+${points}`: ''} pts.`);
        } else {
            item.style.backgroundColor = '#ffcdd2';
            alert(`${getResultEmoji(false)} ¡Fallaste!`);
        }

        throws++;
        updateUI();

        setTimeout(() => {
            item.style.backgroundColor = '';
            if (throws >= maxThrows) {
                alert(`Fin de la partida. Puntuación final: ${totalScore} pts.`);
                scoreItems.forEach(i => i.onclick = null); 
            }
        }, 500);
    };

    scoreItems.forEach(item => item.onclick = onItemClick);
    reiniciarBtn.onclick = resetGame;
    updateUI();
}

// (Generic Trompo Logic) - Plantilla para juegos de tiempo/habilidad
function createTrompoLikeGame(ids, isScoreBased = false) {
    const lanzarBtn = document.getElementById(ids.lanzar);
    const reiniciarBtn = document.getElementById(ids.reiniciar);
    const recordTimeSpan = document.getElementById(ids.record);
    const trompoIcon = document.getElementById(ids.icon);
    const storageKey = ids.storageKey;
    let currentRecord = parseFloat(localStorage.getItem(storageKey)) || 0.0;
    
    recordTimeSpan.textContent = isScoreBased ? currentRecord : currentRecord.toFixed(1);

    const lanzar = () => {
        if (lanzarBtn.disabled) return;

        if (isScoreBased) {
            // Lógica de puntuación (como Dandy Shandy)
            lanzarBtn.textContent = '¡Sigue!';
            trompoIcon.classList.add('trompo-spinning');
            
            currentRecord++;
            localStorage.setItem(storageKey, currentRecord);
            recordTimeSpan.textContent = currentRecord;
            
            // Simula un "fallo" después de un tiempo
            clearTimeout(lanzar.timer);
            lanzar.timer = setTimeout(() => {
                trompoIcon.classList.remove('trompo-spinning');
                alert(`¡Fallaste! Tu récord fue ${currentRecord}.`);
                reiniciarRecord();
            }, 2000 + Math.random() * 3000); // Falla entre 2 y 5 segundos si no se reinicia

        } else {
            // Lógica de tiempo (como Trompo)
            lanzarBtn.textContent = '¡Girando...! 🌀';
            lanzarBtn.disabled = true;
            trompoIcon.classList.add('trompo-spinning'); 

            const spinTime = (Math.random() * 6.0 + 2.0); 

            setTimeout(() => {
                trompoIcon.classList.remove('trompo-spinning'); 
                lanzarBtn.textContent = '▶ Lanzar';
                lanzarBtn.disabled = false;
                
                alert(`Tu tiempo: ${spinTime.toFixed(1)}s`);

                if (spinTime > currentRecord) {
                    currentRecord = spinTime;
                    localStorage.setItem(storageKey, currentRecord);
                    recordTimeSpan.textContent = currentRecord.toFixed(1);
                    alert(`¡Nuevo Récord! 🏆 ${currentRecord.toFixed(1)}s`);
                }
            }, spinTime * 1000); 
        }
    };

    const reiniciarRecord = () => {
        currentRecord = 0.0;
        localStorage.setItem(storageKey, currentRecord);
        recordTimeSpan.textContent = isScoreBased ? currentRecord : currentRecord.toFixed(1);
        lanzarBtn.textContent = '▶ Empezar';
        trompoIcon.classList.remove('trompo-spinning');
        clearTimeout(lanzar.timer);
        alert('Récord reiniciado a 0.');
    };

    lanzarBtn.onclick = lanzar;
    reiniciarBtn.onclick = reiniciarRecord;
}

// (Generic Rayuela Logic) - Plantilla para juegos de secuencia
function createRayuelaLikeGame(ids) {
    const iniciarBtn = document.getElementById(ids.iniciar);
    const casillas = document.querySelectorAll(`#${ids.grid} .casilla`);
    const currentCasillaSpan = document.getElementById(ids.currentCasilla);
    let currentCasilla = 1;
    const maxCasilla = ids.maxCasilla || 9;
    
    const resetCasillas = () => {
        casillas.forEach(c => c.classList.remove('piedra'));
    };

    const startGame = () => {
        resetCasillas();
        currentCasilla = 1;
        if (currentCasillaSpan) currentCasillaSpan.textContent = currentCasilla;
        
        const startCasilla = document.querySelector(`#${ids.grid} .casilla[data-casilla="1"]`);
        if (startCasilla) {
             startCasilla.classList.add('piedra');
        }
        
        alert(`¡Juego Iniciado! Lanza a la casilla ${currentCasilla}.`);
    };

    casillas.forEach(casilla => {
        casilla.onclick = () => {
            const numAttr = casilla.getAttribute('data-casilla');
            if (!numAttr) return;
            const num = parseInt(numAttr);
            
            if (num === currentCasilla) {
                casilla.classList.remove('piedra');
                currentCasilla++;
                
                if (currentCasilla <= maxCasilla) {
                    if (currentCasillaSpan) currentCasillaSpan.textContent = currentCasilla;
                    const nextCasilla = document.querySelector(`#${ids.grid} .casilla[data-casilla="${currentCasilla}"]`);
                    if (nextCasilla) {
                         nextCasilla.classList.add('piedra');
                    }
                    alert(`¡Bien! Ahora lanza a la casilla ${currentCasilla}.`);
                } else {
                    if (currentCasillaSpan) currentCasillaSpan.textContent = '¡Fin!';
                    alert(`¡Llegaste al final! ¡Ganaste!`);
                    currentCasilla++;
                }
            } else if (num < currentCasilla) {
                 alert('Ya pasaste esa casilla. Lanza a la ' + currentCasilla);
            } else if (num > currentCasilla) {
                 alert('¡Te saltaste! Debes lanzar a la casilla ' + currentCasilla);
            }
        };
    });

    iniciarBtn.onclick = startGame;
    resetCasillas();
}

// --- INICIALIZADORES PARA CADA JUEGO NUEVO ---

// 5. Tejo (CO)
function initTejoGame() {
    createSapoLikeGame({
        score: 'tejo-total-score',
        throws: 'tejo-throws-count',
        grid: 'tejo-score-grid',
        progress: 'tejo-progress-bar',
        reset: 'tejo-reiniciar-btn'
    });
}

// 6. Sapo (PE)
function initSapoPeGame() {
    createSapoLikeGame({
        score: 'sapo-pe-total-score',
        throws: 'sapo-pe-throws-count',
        grid: 'sapo-pe-score-grid',
        progress: 'sapo-pe-progress-bar',
        reset: 'sapo-pe-reiniciar-btn'
    });
}

// 7. Peteca (BR)
function initPetecaGame() {
    createSapoLikeGame({
        score: 'peteca-total-score',
        throws: 'peteca-throws-count',
        grid: 'peteca-score-grid',
        progress: 'peteca-progress-bar',
        reset: 'peteca-reiniciar-btn'
    });
}

// 8. Zumbambico (EC)
function initZumbambicoGame() {
    createTrompoLikeGame({
        lanzar: 'zumbambico-lanzar-btn',
        reiniciar: 'zumbambico-reiniciar-btn',
        record: 'zumbambico-record-time',
        icon: 'zumbambico-icon',
        storageKey: 'zumbambicoRecord'
    }, false);
}

// 9. Canicas (BO)
function initCanicasGame() {
    createSapoLikeGame({
        score: 'canicas-total-score',
        throws: 'canicas-throws-count',
        grid: 'canicas-score-grid',
        progress: 'canicas-progress-bar',
        reset: 'canicas-reiniciar-btn'
    });
}

// 10. Payupé (PY)
function initPayupeGame() {
    createTrompoLikeGame({
        lanzar: 'payupe-lanzar-btn',
        reiniciar: 'payupe-reiniciar-btn',
        record: 'payupe-record-time',
        icon: 'payupe-icon',
        storageKey: 'payupeRecord'
    }, true); // Es basado en puntuación (clics)
}

// 11. Bolita (UY)
function initBolitaGame() {
    createSapoLikeGame({
        score: 'bolita-total-score',
        throws: 'bolita-throws-count',
        grid: 'bolita-score-grid',
        progress: 'bolita-progress-bar',
        reset: 'bolita-reiniciar-btn'
    });
}

// 12. Four Square (US)
function initFourSquareGame() {
    createTrompoLikeGame({
        lanzar: 'foursquare-lanzar-btn',
        reiniciar: 'foursquare-reiniciar-btn',
        record: 'foursquare-record-time',
        icon: 'foursquare-icon',
        storageKey: 'foursquareRecord'
    }, true); // Basado en puntuación (rally)
}

// 13. Crokinole (CA)
function initCrokinoleGame() {
    createSapoLikeGame({
        score: 'crokinole-total-score',
        throws: 'crokinole-throws-count',
        grid: 'crokinole-score-grid',
        progress: 'crokinole-progress-bar',
        reset: 'crokinole-reiniciar-btn',
        maxThrows: 8
    });
}

// 14. Barrilete (GT)
function initBarrileteGame() {
    createTrompoLikeGame({
        lanzar: 'barrilete-lanzar-btn',
        reiniciar: 'barrilete-reiniciar-btn',
        record: 'barrilete-record-time',
        icon: 'barrilete-icon',
        storageKey: 'barrileteRecord'
    }, false);
}

// 15. Tinjoroch (HN)
function initTinjorochGame() {
    createTrompoLikeGame({
        lanzar: 'tinjoroch-lanzar-btn',
        reiniciar: 'tinjoroch-reiniciar-btn',
        record: 'tinjoroch-record-time',
        icon: 'tinjoroch-icon',
        storageKey: 'tinjorochRecord'
    }, false);
}

// 16. Chibola (SV)
function initChibolaGame() {
    createSapoLikeGame({
        score: 'chibola-total-score',
        throws: 'chibola-throws-count',
        grid: 'chibola-score-grid',
        progress: 'chibola-progress-bar',
        reset: 'chibola-reiniciar-btn'
    });
}

// 17. Trompo Nica (NI)
function initTrompoNicaGame() {
    createTrompoLikeGame({
        lanzar: 'tromponica-lanzar-btn',
        reiniciar: 'tromponica-reiniciar-btn',
        record: 'tromponica-record-time',
        icon: 'tromponica-icon',
        storageKey: 'tromponicaRecord'
    }, false);
}

// 18. Yaces (CR)
function initYacesGame() {
     createSapoLikeGame({
        score: 'yaces-total-score',
        throws: 'yaces-throws-count',
        grid: 'yaces-score-grid',
        progress: 'yaces-progress-bar',
        reset: 'yaces-reiniciar-btn'
    });
}

// 19. Peregrina (PA)
function initPeregrinaGame() {
    createRayuelaLikeGame({
        iniciar: 'peregrina-iniciar-btn',
        grid: 'peregrina-grid',
        currentCasilla: 'peregrina-current-casilla',
        maxCasilla: 9
    });
}

// 20. Escondidas (CU)
function initEscondidasGame() {
    const iniciarBtn = document.getElementById('escondidas-iniciar-btn');
    const casillas = document.querySelectorAll('#escondidas-grid .casilla');
    let encontrados = 0;
    const totalJugadores = 5;
    let jugadores = [];

    const resetGame = () => {
        encontrados = 0;
        jugadores = [];
        casillas.forEach(c => {
            c.classList.remove('piedra'); // 'piedra' se usa como 'encontrado'
            c.textContent = c.getAttribute('data-casilla') === '6' ? ' bụi ' : ['🌳', '🚗', '🏠', '🚪', '📦'][parseInt(c.getAttribute('data-casilla'))-1];
        });

        // Esconder 5 jugadores
        while (jugadores.length < totalJugadores) {
            const pos = Math.floor(Math.random() * casillas.length);
            if (!jugadores.includes(pos)) {
                jugadores.push(pos);
            }
        }
        alert('¡A buscar! Hay 5 jugadores escondidos.');
    };

    casillas.forEach((casilla, index) => {
        casilla.onclick = () => {
            if (casilla.classList.contains('piedra')) return; // Ya encontrado

            if (jugadores.includes(index)) {
                casilla.classList.add('piedra');
                casilla.textContent = '😃';
                encontrados++;
                alert(`¡Encontraste a ${encontrados} de ${totalJugadores}!`);
                
                if (encontrados === totalJugadores) {
                    alert('¡Los encontraste a todos! ¡Ganaste!');
                }
            } else {
                casilla.textContent = '❌';
                alert('¡Aquí no hay nadie!');
            }
        };
    });

    iniciarBtn.onclick = resetGame;
    resetGame();
}

// 21. Osle (HT)
function initOsleGame() {
    createRayuelaLikeGame({
        iniciar: 'osle-iniciar-btn',
        grid: 'osle-grid',
        currentCasilla: 'osle-current-casilla',
        maxCasilla: 9
    });
}

// 22. Vitilla (DO)
function initVitillaGame() {
    createSapoLikeGame({
        score: 'vitilla-total-score',
        throws: 'vitilla-throws-count',
        grid: 'vitilla-score-grid',
        progress: 'vitilla-progress-bar',
        reset: 'vitilla-reiniciar-btn'
    });
}

// 23. Bolas Criollas (PR)
function initBolasGame() {
    createSapoLikeGame({
        score: 'bolas-total-score',
        throws: 'bolas-throws-count',
        grid: 'bolas-score-grid',
        progress: 'bolas-progress-bar',
        reset: 'bolas-reiniciar-btn',
        maxThrows: 8
    });
}

// 24. Dandy Shandy (JM)
function initDandyGame() {
    createTrompoLikeGame({
        lanzar: 'dandy-lanzar-btn',
        reiniciar: 'dandy-reiniciar-btn',
        record: 'dandy-record-time',
        icon: 'dandy-icon',
        storageKey: 'dandyRecord'
    }, true); // Basado en puntuación
}

// 25. Ring Play (BS)
function initRingGame() {
     createTrompoLikeGame({
        lanzar: 'ring-lanzar-btn',
        reiniciar: 'ring-reiniciar-btn',
        record: 'ring-record-time',
        icon: 'ring-icon',
        storageKey: 'ringRecord'
    }, true); // Basado en puntuación (ritmo)
}

// 26. Ten-Ten (GY)
function initTenTenGame() {
    createTrompoLikeGame({
        lanzar: 'tenten-lanzar-btn',
        reiniciar: 'tenten-reiniciar-btn',
        record: 'tenten-record-time',
        icon: 'tenten-icon',
        storageKey: 'tentenRecord'
    }, true); // Basado en puntuación (ritmo)
}

// 27. Pétanque Créole (GF)
function initPetanqueGame() {
    createSapoLikeGame({
        score: 'petanque-total-score',
        throws: 'petanque-throws-count',
        grid: 'petanque-score-grid',
        progress: 'petanque-progress-bar',
        reset: 'petanque-reiniciar-btn',
        maxThrows: 6
    });
}

// 28. Jacks (GD)
function initJacksGame() {
    createSapoLikeGame({
        score: 'jacks-total-score',
        throws: 'jacks-throws-count',
        grid: 'jacks-score-grid',
        progress: 'jacks-progress-bar',
        reset: 'jacks-reiniciar-btn'
    });
}

// 29. Hopscotch Tropical (AG)
function initHopscotchGame() {
     createRayuelaLikeGame({
        iniciar: 'hopscotch-iniciar-btn',
        grid: 'hopscotch-grid',
        currentCasilla: 'hopscotch-current-casilla',
        maxCasilla: 9
    });
}

// 30. Marble Game (LC)
function initMarbleGame() {
    createSapoLikeGame({
        score: 'marble-total-score',
        throws: 'marble-throws-count',
        grid: 'marble-score-grid',
        progress: 'marble-progress-bar',
        reset: 'marble-reiniciar-btn'
    });
}

// 31. Rounders Caribbean (VC)
function initRoundersGame() {
    createSapoLikeGame({
        score: 'rounders-total-score',
        throws: 'rounders-throws-count',
        grid: 'rounders-score-grid',
        progress: 'rounders-progress-bar',
        reset: 'rounders-reiniciar-btn'
    });
}
