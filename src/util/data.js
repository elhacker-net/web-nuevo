const links = [
    ['Inicio', '/index.html'],
    ['Foro', 'https://foro.elhacker.net'],
    ['Noticias', '/noticias'],
    ['Warzone', '/warzone'],
];
/* eslint-disable quote-props */
const footerLinks = {
    main: [
        ['Faq\'s', '/faqs'],
        ['Trucos PC', '/pctrucos'],
        ['Trucos XP', '/xptrucos'],
        ['Windows 7', '/7trucos'],
    ],
    services: [
        ['Localizador IP', '/localizadorIP'],
        ['Whois IP/Dominio', '/whois'],
        ['Registros DNS Dominio', '/dig'],
        ['Convertidor', '/encoder'],
        ['Noticias', '/noticias'],
        ['Webmasters', '/webmasters'],
    ],
    contribute: [
        ['Foro', 'https://foro.elhacker.net'],
        ['Boletín de Correo', '/boletin'],
        ['Wiki', '/wiki'],
        ['Warzone', '/warzone'],
    ],
    downloads: [
        ['Textos - Manuales', '/manuales'],
        ['E-Zines', '/ezines'],
        ['Fotos Divertidas', '/fotosdivertidas'],
    ],
};
/* eslint-enable quote-props */

const announcements = [
    ['Actualizado el contenido de Cabeceras de seguridad en sitios web', '24-07-20'],
    ['Actualizados Tests de Velocidad', '19-06-20'],
    ['Analiza - Visualiza Registros DNS de un dominio', '11-06-20'],
    ['Canal Oficial en Telegram', '22-05-20'],
    ['Comparativa mejores aplicaciones VideoLlamadas', '15-04-20'],
    ['Vuelve Concurso Programación Abril Negro 2020', '7-04-20'],
    ['Actualizados los Trucos Mozilla Firefox', '10-08-19'],
    ['Arreglado registro usuarios de Warzone', '11-06-18'],
];
const articles = [
    'Google desplegará un cable submarino que unirá EEUU, Reino Unido y España',
    'WhatsApp, Instagram y Facebook sufren una caída durante media hora que afectó',
    'Windows 10 build 19042.421: la 20H2 podría llegar antes de tiempo',
    'Este truco para CMD te permite copiar y restaurar drivers de Windows',
    'Exprime al máximo tu Raspberry Pi con estos sistemas operativos',
    'Añade subtítulos a cualquier vídeo automáticamente con Amber Script',
    'Usa Facebook de forma más cómoda con estas extensiones para Chrome',
    'Microsoft planea lanzar el nuevo Windows 10x a principios de 2021',
];

const lastMessages = [
    {
        forum: 'Seguridad',
        title: 'Posible Virus Minero oh malware.',
        author: 'NEBIRE',
        date: 'Hoy a las 18:56',
    },
    {
        forum: 'Windows',
        title: 'Actualizar win 7 pro pirata win 10 pro',
        author: 'new10',
        date: 'Hoy a las 18:46',
    },
    {
        forum: 'Programación C/C++',
        title: 'Se muestra o no el cursor depende de ...',
        author: 'NEBIRE',
        date: 'Hoy a las 18:25',
    },
    {
        forum: 'Ingeniería Inversa',
        title: 'Biblioteca con cracks para infinidad de programas!!',
        author: 'Moskito',
        date: 'Hoy a las 17:43',
    },
    {
        forum: 'Windows',
        title: 'Tecla Windows No Me Funciona',
        author: 'EdePC',
        date: 'Hoy a las 17:38',
    },
    {
        forum: 'Foro Libre',
        title: 'Me presento',
        author: 'SHB',
        date: 'Hoy a las 17:02',
    },
    {
        forum: 'Dudas Generales',
        title: 'Tiene salida ASIR?',
        author: 'LYOCO',
        date: 'Hoy a las 16:28',
    },
    {
        forum: 'Foro Libre',
        title: 'El Coronavirus es real, y la nueva (sub)normalidad se va a quedar en España',
        author: 'SuperDraco',
        date: 'Hoy a las 16:20',
    },
];

const topTopics = [
    { title: 'Internet tanto ordenador como movil tarda un poco en cargarse la paginas web!', count: 8 },
    { title: '¿Sale rentable la compra de un dominio.com + extensiones .net, .org, .info etc?', count: 3 },
    { title: 'dudas GTA 5', count: 3 },
    { title: 'UBUNTU SERVER', count: 3 },
    { title: '[javascript] ¿Cómo puedo mostrar en pantalla determinada cantidad de imágenes?', count: 2 },
];

const generalStatistics = {
    totalUsers: 318477,
    totalMessages: 1096686,
    totalTopics: 209281,
    totalCategories: 8,
    totalForums: 69,
    usersOnline: 465,
    maxUsersOnlineToday: 588,
};

const topWeeklyPosters = [
    ['El Andaluz', 25],
    ['Meta', 23],
    ['Machacador', 20],
    ['EdePC', 17],
    ['@XSStringManolo', 15],
];

const onlineUsers = {
    visitors: 455,
    users: 10,
    userList: [
        { name: 'EdePC', rank: 'colaborator' },
        { name: '@XSStringManolo', rank: 'colaborator' },
        { name: 'YaTaMaS', rank: 'colaborator' },
        { name: 'MinusFour', rank: 'colaborator' },
        { name: 'El Andaluz', rank: 'member' },
        { name: '**Aincrad**', rank: 'member' },
        { name: 'WHK', rank: 'coadmin' },
    ],
};

export {
    links,
    announcements,
    articles,
    lastMessages,
    generalStatistics,
    topWeeklyPosters,
    onlineUsers,
    topTopics,
    footerLinks,
};
