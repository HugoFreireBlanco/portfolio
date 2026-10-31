# HUGO / Personal portfolio

Portfolio individual estático ambientado dentro de un ordenador comprometido.
Interfaz de arranque, misión de recuperación y escenario 3D explorable.

## Desarrollo

```sh
npm install
npm run dev
```

## Producción

```sh
npm run build
npm run preview
```

`dist/` contiene la aplicación estática generada. No necesita backend ni cuentas.

## Estructura

```text
public/                     Recursos estáticos
src/
  main.ts                   Punto de entrada
  features/loader/
    loader.ts               Boot, señal inestable, interrupción, blackout, intrusión y entrada
    boot.ts                 Tareas reales de preparación; conectar aquí futuros recursos 3D
    circuit.ts              Decoración SVG procedural
    particles.ts            Fragmentos de datos que reaccionan al ratón
    audio.ts                Sonidos opcionales mediante Web Audio
  features/world/
    world.ts                Renderizado, recorrido de cámara, estados y controles
    environment.ts          Kit procedural: placa, RAM, CPU, conducto, bus y reflejos
    hardware.ts             Haz curvo transitable, GPU superior, chasis y daños físicos
    atmosphere.ts           Alerta roja gradual, balizas y chispas del techo
    landing.ts              Contacto de carcasa inclinada y rotación balística
    traffic.ts              Veinte paquetes instanciados, circuitos locales y rescate
    recovery-state.ts       Registros, identificadores y guardado local versionado
    recovery.ts             AUX, terminales, objetivos, diálogo e interacción
    recovery.css            Interfaz y diálogos de recuperación
    memory.ts               Tarjetas de sección, indicadores instanciados y lector de chips
    memory.css              Selector de chips y fichas PDA
    ending.ts               Compuerta CORE, recorrido final, carga al 100 % y créditos
    ending.css              Transición final y firma adaptable
    byte.ts                 Personaje con núcleo y visor luminosos
    materials.ts            Paleta, geometría básica y carteles generados en canvas
    world.css               Transición, HUD y controles táctiles
  styles/
    base.css                Tokens, tipografía y estilos globales
    loader.css              Loader, transiciones y responsive
```

## Comportamiento

La descarga del motor, generación del entorno, compilación de shaders y primeras
pasadas de GPU se preparan tras la interfaz durante el handshake inicial.
Se precalientan la entrada, el aterrizaje y ambos laterales con el posprocesado real.
El acceso solo se habilita cuando termina esa preparación; si hace falta, el blackout
espera a la GPU. El motor se descarga en un módulo separado del loader.
El handshake ficticio representa:
conexión hasta el 65 %, interferencias crecientes hasta el 87 %, pérdida de señal
y regreso en rojo con el estado «SYSTEM COMPROMISED». La barra representa esa
secuencia narrativa, no una descarga. Solo llega al 100 % al completar la recuperación
y reanudar el sistema desde el CORE.
La secuencia completa dura unos 7 segundos (más breve con movimiento reducido).
Los mensajes de corrupción son ficción narrativa, no diagnósticos del dispositivo.
Al pulsar Enter, la barra se convierte en un paquete con ojos y da paso al byte 3D.
La cámara sigue un conducto curvo con raíles de apoyo, íntegramente dentro del
chasis. Al salir por la boca, el byte conserva su velocidad y cae por gravedad
hasta tocar la altura real de los cables con su carcasa inclinada. Conserva giro
en el aire, rebota brevemente y desliza con fricción antes de recuperar el equilibrio.
El seguimiento pasa después a una cámara orbital ligeramente lateral y elevada.
El viaje dura aproximadamente ocho segundos y se puede omitir con Escape o
con «Omitir». Con movimiento reducido se accede directamente al escenario.

## Explorar

La navegación compartida permite alternar entre **Explorar**, **Archivo** y
**Sobre mí**, incluso antes de completar la entrada 3D. Archivo reúne proyectos,
experiencia, educación, premios y aptitudes en HTML seleccionable con índice y
desplazamiento normal. Cada proyecto abre una ficha con cierre por Escape.
Las URLs `#archivo/educacion`, `#sobre-mi` y `#proyecto/internal-system` son
compartibles y funcionan con el historial del navegador. Al leer, el mundo y las
partículas del loader se pausan; al regresar se conserva la sesión y la recuperación.
El contenido se centraliza en `src/features/portfolio/content.ts`. Los datos
personales todavía no aportados se indican como pendientes, sin inventar historial.

### Idiomas

Los catálogos completos están en `src/i18n/en.ts` y `src/i18n/es.ts`.
La primera visita comienza en inglés; el selector EN/ES de la esquina superior
derecha cambia el idioma y guarda la preferencia en `localStorage` (`hugo-language`).
El cambio conserva partida, ruta, diálogos y foco. Incluye contenido del Archivo,
avisos dinámicos, accesibilidad y carteles generados en canvas del mundo 3D.
Los nombres propios, tecnologías, códigos y rutas internas mantienen su identidad.

- **WASD / flechas:** desplazarse por el puente, con límites laterales.
- **Espacio:** saltar.
- **E:** hablar con AUX o interactuar con un terminal cercano.
- **Objetivos:** disponibles al hablar con AUX; permiten consultar progreso y localizar un registro.
- **Clic izquierdo mantenido y arrastre:** cámara orbital alrededor del byte.
- **Rueda:** ajustar distancia de cámara (con límites).
- **Movimiento relativo a la cámara:** el personaje avanza hacia donde estás mirando.
- **Móvil:** joystick analógico con zona muerta y velocidad proporcional al desplazamiento;
  arrastrar el escenario con otro dedo gira la cámara. El botón de salto aparece
  cuando hay al menos 560 px de ancho disponible.
- **Repetir entrada:** vuelve a reproducir la transición sin recargar recursos.

El escenario es procedural y utiliza materiales metálicos, iluminación de entorno,
reflejo planar y bloom. Las piezas estáticas se agrupan por material y tramos de
32 unidades para descartar bloques fuera de cámara sin multiplicar excesivamente
las llamadas de dibujo. El reflejo planar se actualiza como máximo a 20 Hz en
escritorio; móvil usa el mapa de entorno metálico sin una segunda pasada de escena.
El bloom trabaja al 60 % de resolución por eje; geometría y textos conservan su
resolución. El tráfico decorativo se interpola en cada fotograma con una tabla precalculada
del conducto; los paquetes recuperables mantienen actualización en cada fotograma.
La resolución se adapta ante lentitud sostenida y el render se pausa al ocultar
la pestaña. No se descargan modelos 3D externos.

La calidad tiene cuatro niveles (`full`, `balanced`, `light`, `minimal`). Móvil
comienza sin postprocesado, con menos luces y un presupuesto de un millón de
píxeles; si Chrome informa de memoria ≤4 GiB o ≤4 hilos, comienza en `light`.
El render directo conserva ACES y la salida sRGB. Ante fotogramas sostenidos por
encima de 38 ms en móvil (27 ms en escritorio), baja un nivel cada ~1,8 s de
muestreo activo. Los fotogramas muy lentos también cuentan; las pausas de ≥1 s
reinician el muestreo. Solo sube tras ~18 s con amplio margen. Los niveles
inferiores reducen luces, chispas y resolución sin limitar la frecuencia de la
cámara, controles o pulsos del bus. La interfaz HTML conserva su resolución.
Las variantes de shaders de los niveles inferiores se precalientan durante la
carga para evitar compilaciones al reducir la calidad durante el recorrido.

El haz consta de 19 conductores; su función de altura se comparte entre la
geometría, el protagonista y los bytes secundarios. El tráfico usa geometrías
instanciadas y no añade luces por personaje. La intrusión incluye conectores
rotos, cobre expuesto, una tarjeta fracturada, piezas quemadas y chispas.
El chasis superior, la GPU y los cables suspendidos completan el entorno.
Los mazos superiores siguen soportes del techo y dejan libre el recorrido. El
conector averiado descansa en una ménsula, con tapa doblada, placa interior y cables
conectados a sus bornes locales; las puntas cortadas muestran cobre expuesto.
Transistores de potencia y relés abiertos con bobinas y contactos completan la placa.
Todos estos detalles estáticos se incorporan a los lotes por material, sin luces nuevas.
El techo tiene una abertura física con bordes rasgados y una bandeja de cables
descolgada que desprende ráfagas de chispas con caída por gravedad. Las balizas
de emergencia cuelgan de soportes del chasis y de la GPU e iluminan la escena
con un ciclo rojo gradual de cinco segundos sobre una iluminación general tenue:
la luz fría se atenúa y después recupera su estado normal. Las chispas están
instanciadas; con movimiento reducido se ocultan y la alerta permanece estable.
La goma incorpora relieve procedural; los conectores tienen bordes biselados,
nervaduras y tornillos con ranuras. El posprocesado se prepara antes de la entrada.
El byte y los raíles comparten orientación durante el descenso. El conducto nace
en una boca de admisión y reserva su centro para el protagonista. Los bytes del
bus circulan por carriles espaciados, ceden el paso al jugador y tienen colisión
de movimiento; la altura de apoyo considera su tamaño y las abrazaderas.
Los módulos RAM reservan una cabecera libre para sus etiquetas.
Los bytes son módulos electrónicos biselados con contactos y paneles de estado;
el protagonista es un proceso de recuperación azul, con carcasa asimétrica.
El circuito azul trasero permanece visible desde la cámara de seguimiento. Sus
mini-orugas animan los eslabones según la distancia recorrida y se paran al detenerse.
La carcasa se inclina suavemente al avanzar y frenar. Las piezas fijas del personaje
se agrupan por material y sus eslabones se dibujan con una sola malla instanciada.
Hay veinte paquetes corruptos rojos, idénticos en escritorio y móvil, asignados a
seis circuitos locales: Identidad (3), Proyectos (5), Experiencia (3), Educación (3),
Premios (3) y Aptitudes (3). No desaparecen ni cambian de grupo. Al tocar su carcasa
se reparan, emiten un pulso azul y ordenan sus indicadores. Sus identificadores
usan un atlas compartido y solo se muestran cerca del jugador.

AUX permanece averiado junto a la entrada, con cara triste y una oruga inmóvil.
Explica la misión y ofrece objetivos o acceso directo al Archivo. Los diálogos
HTML pausan el mundo, retienen el foco y se cierran con Escape. Seleccionar un
objetivo marca el terminal con un aro azul y una indicación de dirección/distancia.
Cada grupo completo activa su terminal, desde el que se explora su tarjeta de memoria.
Las pantallas y pistas locales pasan a azul; las lámparas de cada pareja de zonas
se estabilizan en blanco frío. Al rescatar los veinte paquetes se detiene la alarma,
la iluminación completa pasa gradualmente a blanco y se reducen las chispas.
Los daños físicos permanecen. AUX ofrece una respuesta final.

### Memoria del portfolio

Cada una de las seis zonas tiene una tarjeta física con doce chips y su nombre.
Mientras la zona siga corrupta, sus doce indicadores son rojos. Tras restaurarla,
se enciende en secuencia un chip azul por registro disponible; los restantes se
apagan. Los indicadores de todas las tarjetas comparten una sola malla instanciada
y las carcasas se agrupan por material.

En un terminal restaurado, **E / Abrir** lleva la cámara frente a la tarjeta durante
1,7 segundos, conservando al protagonista en su posición. Ratón, toque o Tab y Enter
permiten elegir un chip azul. Cada chip abre una ficha PDA. En pantallas táctiles,
mantener pulsado un chip durante 350 ms muestra su etiqueta
sin abrirlo al soltar. Un toque corto abre la ficha; mover el dedo o cancelar el gesto
cierra la previsualización. Con ratón, la etiqueta aparece al pasar el cursor.
Escape vuelve a la tarjeta
y otro Escape (o «Volver al bus») reproduce el recorrido inverso. Los objetos delante
de la tarjeta se recortan durante la lectura para mantener visibles todos los chips.
Las fichas pausan el render; el modo Archivo sigue disponible como acceso directo.
Movimiento reducido omite los viajes de cámara y el encendido escalonado.

`memoryRecords` en `src/features/portfolio/content.ts` es la fuente compartida entre
chips y Archivo. Educación, Experiencia y Premios incluyen ejemplos ficticios,
marcados explícitamente como DEMO en ambas vistas; deben reemplazarse con datos reales.

### Final del bus

El CORE termina en un puerto RJ45 hembra de carcasa gris, muesca superior, ocho
contactos dorados e interior oscuro. Su tapa de aislamiento impide avanzar mientras
falte alguno de los veinte paquetes; la pantalla muestra la integridad actual. Al
recuperar el último, una señal recorre el bus durante 3,8 segundos, el seguro se
libera en 0,6 segundos y la tapa telescópica se eleva en cuatro segundos. Los ocho
contactos se iluminan progresivamente y los indicadores ámbar pasan a azul. El paso
permanece bloqueado hasta terminar la apertura. Cerca del conector,
**E / Reanudar el sistema** inicia el final
(botón contextual en móvil). La cámara acompaña al byte hasta la conexión y funde con
la interfaz de arranque limpia: la carga pendiente continúa del 87 al 100 %.
Tras «SYSTEM RESTORED» aparece «Made with love by Hugo», con acceso al Archivo o
regreso al mundo conservando el progreso. El render 3D se pausa durante la carga y
los créditos. Escape o «Omitir transición» salta el recorrido de cámara; movimiento
reducido lo omite automáticamente y abrevia la carga.

El progreso y la conversación inicial se guardan en `sessionStorage` bajo la clave
versionada `hugo-recovery-v1`, conservándose al recargar la misma pestaña y comenzando
de cero al abrir una pestaña independiente. Si el almacenamiento no está disponible se puede
jugar durante la sesión. Repetir la entrada conserva el progreso; Objetivos ofrece
un reinicio independiente con confirmación. Archivo y Sobre mí nunca quedan
bloqueados por la misión. Los datos profesionales pendientes continúan indicados
como tales en `src/features/portfolio/content.ts`.

La tipografía utiliza Google Fonts con alternativas locales. El sonido comienza
desactivado y se sintetiza localmente. Se respeta `prefers-reduced-motion`.
El progreso se guarda solo en el navegador y no se envía. No hay analítica ni multijugador.
