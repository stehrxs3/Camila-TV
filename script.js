const firebaseConfig = {
  apiKey: "AIzaSyAN9_GKVO_dOnh11QLvOkpektMYcIhEZHo",
  authDomain: "camilatv-e6782.firebaseapp.com",
  databaseURL: "https://camilatv-e6782-default-rtdb.firebaseio.com",
  projectId: "camilatv-e6782",
  storageBucket: "camilatv-e6782.firebasestorage.app",
  messagingSenderId: "909118652874",
  appId: "1:909118652874:web:27b569af78c796b9e58f33",
  measurementId: "G-HW0HS9T0KV"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

const urlTransmissaoAoVivo = "https://player.kick.com/camilatvplus";

let tokenGeradoCache = "";
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", (e) => {
    if (e.key === "F12") {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")) {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && (e.key === "U" || e.key === "u" || e.key === "S" || e.key === "s")) {
        e.preventDefault();
        return false;
    }
});

const listaDeVideos = [
  //Shows//
    {
        id: 1,
        titulo: "The Town",
        categoria: "Shows",
        data: "13 de setembro de 2025",
        capa: "https://drive.google.com/file/d/1ID9G0SteQCO3Q3qrJ7tTWO0NL7RQ_VdN/view?usp=sharing",
        banner: "https://rollingstone.com.br/wp-content/uploads/2025/09/Camila-Cabello-The-Town-2025-foto-Ellen-Artie-02-1536x1024.jpg",
        descricao: "Apresentação inesquecível que marcou o encerramento oficial da Yours' C Tour com direito a violão em Ai Se Eu Te Pego, funk no palco e muita proximidade com os fãs na grade.",
        videoUrl: "https://drive.google.com/file/d/1K6cnGIMG5hp7T-Bzeu6XSEleqmq7fB7m/view?usp=sharing",
        destaque: true
    },
    {
        id: 2,
        titulo: "Summer Sonic Tokio",
        categoria: "Shows",
        data: "17 de agosto de 2025",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwvQSJ4ypl6knolhMiEE9Yahf1BB7xsImJBvrYG1ksg&s=10",
        banner: "https://www.summersonic.com/wp/wp-content/uploads/2025/08/005-196.jpg?v=1755512287",
        descricao: "Show que fechou a passagem da cantora pelo festival japonês com chave de ouro e entregou um dos momentos mais aclamados da edição.",
        videoUrl: "https://drive.google.com/file/d/1nHYSRQUiakqT6ha8yaJVOeJijjvW7VCp/view?usp=sharing",
        destaque: false
    },
    {
        id: 3,
        titulo: "IHeartRadio Music Festival",
        categoria: "Shows",
        data: "20 de setembro de 2024",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rqjw7FC8dh-RgxdeOT3vnFRpVHHax0XPP-h-qcNS0w&s=10",
        banner: "https://media.gettyimages.com/id/2173487877/pt/foto/las-vegas-nevada-camila-cabello-performs-during-the-2024-iheartradio-music-festival-at.jpg?s=612x612&w=0&k=20&c=Tm4ZJmkXVqEa2AEQWhH96NxQlvLFJ4urW-voPR2nOVM=",
        descricao: "Apresentação marcante que trouxe a cantora de jaqueta de couro e botas peludas, remix de funk para Shameless e momentos de carinho com a plateia.",
        videoUrl: "https://drive.google.com/file/d/1ujbG4Y88WCUCmHmMrm1fmX0ZfekWAFn3/view?usp=sharing",
        destaque: false
    },
    {
        id: 4,
        titulo: "Glastonbury",
        categoria: "Shows",
        data: "29 de junho de 2024",
        capa: "https://media.gettyimages.com/id/2159846745/pt/foto/glastonbury-england-camila-cabello-performs-on-the-other-stage-during-day-four-of-glastonbury.jpg?s=612x612&w=0&k=20&c=I6U1Io-fy0l_NxpL5TA47PFYf5bk_ggC09l5Ru5x1ng=",
        banner: "https://media.gettyimages.com/id/2159836703/pt/foto/glastonbury-england-camila-cabello-performs-on-the-other-stage-during-day-four-of-glastonbury.jpg?s=612x612&w=0&k=20&c=_4Oj66cMwi0ZwZQozs5qzjLh9o-zET8Ajb9uX0KiRsI=",
        descricao: "Apresentação eletrizante no The Other Stage que marcou sua estreia em Worthy Farm com uma estética hyperpop marcante e as faixas do álbum C,XOXO.",
        videoUrl: "https://drive.google.com/file/d/1ktvi5-Iq2rNPu5oEVXV9I-TluSfJoBhZ/view?usp=sharing",
        destaque: false
    },
    {
        id: 5,
        titulo: "Rock in Rio Lisboa",
        categoria: "Shows",
        data: "23 de junho de 2024",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYBYDVs2dYsWoja06ekRWwmUBi7RVGLJiFewt6aVC1A&s=10",
        banner: "https://images.impresa.pt/expresso/2024-06-24-camilacabelo_mundo_diegopadilha_rirlisboa2024_23jun-7269.jpg-ac3c7552/3x2/mw-694",
        descricao: "Show íconica no Parque do Tejo que marcou o primeiro show solo da cantora em Portugal e a estreia ao vivo das faixas do álbum C,XOXO.",
        videoUrl: "https://drive.google.com/file/d/1ujbG4Y88WCUCmHmMrm1fmX0ZfekWAFn3/view?usp=sharing",
        destaque: false
    },
    {
        id: 6,
        titulo: "Rock in Rio",
        categoria: "Shows",
        data: "10 de setembro de 2022",
        capa: "https://media.gettyimages.com/id/1243121400/pt/foto/us-cuban-singer-camila-cabello-performs-on-the-main-stage-of-the-rock-in-rio-music-festival-at.jpg?s=612x612&w=0&k=20&c=KsZ1OTYNbFmsXhIsM2rrfGGTQMEx38LuukhsllYLomw=",
        banner: "https://media.gettyimages.com/id/1422667658/pt/foto/rio-de-janeiro-brazil-camila-cabello-performs-at-the-mundo-stage-during-the-rock-in-rio.jpg?s=612x612&w=0&k=20&c=Q5pZ2vHYsdYBIDJMg43v2xm-dKbMFuhsnsR1zfIQKTE=",
        descricao: "Apresentação histórica no Palco Mundo que enfrentou a chuva com Ai Preto ao lado de L7NNON, Hasta Los Dientes com María Becerra, bordões hilários em português e os maiores sucessos da era Familia.",
        videoUrl: "https://drive.google.com/file/d/1XxEhKzy53Xxbe4KVdkotLvBF5fBJYPzt/view?usp=sharing",
        destaque: false
    },
    {
        id: 7,
        titulo: "iHeartRadio Wango Tango",
        categoria: "Shows",
        data: "4 de junho de 2022",
        capa: "https://media.gettyimages.com/id/1401261095/pt/foto/carson-california-singer-camila-cabello-performing-at-the-iheartradio-concert-at-wango-tango.jpg?s=612x612&w=0&k=20&c=0bBQ-fmV1_t-RyM1_uBtrY4M_zYdWZBp51PyaJhIApw=",
        banner: "https://media.gettyimages.com/id/1401260356/pt/foto/carson-california-singer-camila-cabello-performing-at-the-iheartradio-concert-at-wango-tango.jpg?s=612x612&w=0&k=20&c=7ricEAvrhF-SlOJZXjL68L95WFKjBEyLDP2HqUPrK8A=",
        descricao: "Show que destacou um mashup surpreendente de No Doubt com Gasolina, muita coreografia e os hits Bam Bam e psychofreak.",
        videoUrl: "https://drive.google.com/file/d/1k90V_-YORgQeT5AD9jsk63cTe2cM6qcr/view?usp=sharing",
        destaque: false
    },
    {
        id: 8,
        titulo: "Global Citizen Live",
        categoria: "Shows",
        data: "25 de setembro de 2021",
        capa: "https://media.gettyimages.com/id/1342508806/pt/foto/new-york-new-york-camila-cabello-performs-onstage-during-global-citizen-live-new-york-on.jpg?s=612x612&w=0&k=20&c=27pfpGkkTwixJwCUIoALvhH99Gfb6wcP3frKX7zMO8M=",
        banner: "https://media.gettyimages.com/id/1235516869/pt/foto/new-york-ny-camila-cabello-at-global-citizen-live-on-september-25-2021-in-new-york-city.jpg?s=612x612&w=0&k=20&c=0rcdZV303rshiNf4CcbOqtgwuDqgJd8tK3uq6CqOFjM=",
        descricao: "Apresentação marcante no palco de Nova York que uniu grandes colaborações ao vivo, vocais impecáveis e hits globais.",
        videoUrl: "https://drive.google.com/file/d/1yHI_3P4Sm0xt8yzl8XB4E6U4lCS0HFU7/view?usp=sharing",
        destaque: false
    },
    {
        id: 9,
        titulo: "New Music Daily Presents",
        categoria: "Shows",
        data: "21 de novembro de 2019",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyek7IGOhzvk7QZjo__hr9qDntGPdoeaSd4XZ1Op5K8g&s",
        banner: "",
        descricao: "Apresentação intimista promovida pela Apple Music que marcou o lançamento do álbum Romance com orquestra ao vivo.",
        videoUrl: "https://drive.google.com/file/d/1t4TOMOPPi_Ul-fMknRd1JZaeN40Prdvb/view?usp=sharing",
        destaque: false
    },
    {
        id: 10,
        titulo: "Z100/iHeartRadio Jingle Ball",
        categoria: "Shows",
        data: "2019",
        capa: "https://media.gettyimages.com/id/1193821355/pt/foto/new-york-new-york-camila-cabello-performs-onstage-during-iheartradios-z100-jingle-ball-2019.jpg?s=612x612&w=0&k=20&c=SuAV38TgPP8TNVep50ayatwwb9LpwEPnyIMwnmr1wbM=",
        banner: "https://media.gettyimages.com/id/1193821767/pt/foto/new-york-new-york-camila-cabello-performs-onstage-during-iheartradios-z100-jingle-ball-2019.jpg?s=612x612&w=0&k=20&c=K_DrlPmO1IDZecDEAOx3aRu3uXMeLbqHUw-QVuLLNtU=",
        descricao: "Apresentação inesquecível no lendário Madison Square Garden que celebrou o lançamento do álbum Romance com um figurino icônico de pérolas e látex.",
        videoUrl: "https://drive.google.com/file/d/1yzCJeVlDfP-_PVKDr9gmb5iNeA2fhiMw/view?usp=sharing",
        destaque: false
    },
    {
        id: 11,
        titulo: "iHeartRadio Festival",
        categoria: "Shows",
        data: "20 de setembro de 2019",
        capa: "https://media.gettyimages.com/id/1177003039/pt/foto/las-vegas-nevada-camila-cabello-performs-at-t-mobile-arena-on-september-20-2019-in-las-vegas.jpg?s=612x612&w=0&k=20&c=QlDvVHM0FUt-fvVYJEgn2lGlao3SEeXJLe21cbDr_bU=",
        banner: "https://media.gettyimages.com/id/1176060717/pt/foto/las-vegas-nevada-camila-cabello-performs-onstage-during-the-2019-iheartradio-music-festival-at.jpg?s=612x612&w=0&k=20&c=hWKHIApRxAGL7jRlZR_K0dHq_nKSpFfZuGY2XYTtlvc=",
        descricao: "Show incrível na T-Mobile Arena que marcou as primeiras performances ao vivo de Shameless e Liar.",
        videoUrl: "https://drive.google.com/file/d/1yzCJeVlDfP-_PVKDr9gmb5iNeA2fhiMw/view?usp=sharing",
        destaque: false
    },
    {
        id: 12,
        titulo: "ACL Festival",
        categoria: "Shows",
        data: "7 de outubro de 2018",
        capa: "https://media.gettyimages.com/id/1047445330/pt/foto/austin-tx-camila-cabello-performs-during-the-2018-austin-city-limits-music-festival-at-zilker.jpg?s=612x612&w=0&k=20&c=nY3iPoT_WLFGiwnzDttvhTh_TmPsL2W5FvkSvGE9Avc=",
        banner: "https://media.gettyimages.com/id/1047445328/pt/foto/austin-tx-camila-cabello-performs-during-the-2018-austin-city-limits-music-festival-at-zilker.jpg?s=612x612&w=0&k=20&c=7IOxaq0lDyf7fbETPEZ2r97tc4mG8xoN6XyKBJ-nPao=",
        descricao: "Apresentação inesquecível que levou a energia contagiante da Never Be the Same Tour para os palcos do Texas.",
        videoUrl: "https://drive.google.com/file/d/1wc7av7YEvK7xOFX9YiXjCRilCWJ8PTVh/view?usp=sharing",
        destaque: false
    },
    {
        id: 13,
        titulo: "Lollapalooza Chicago",
        categoria: "Shows",
        data: "2 de agosto de 2018",
        capa: "https://media.gettyimages.com/id/1085989112/photo/chicago-il-camila-cabello-performs-on-day-one-of-lollapalooza-at-grant-park-on-august-2-2018.jpg?s=612x612&w=0&k=20&c=MvlkMXOsp3eafqjiFNOgWLMK1umCjsatY4ej0wCmUIs=",
        banner: "https://media.gettyimages.com/id/1012311284/photo/chicago-il-camila-cabello-performs-at-lollapalooza-2018-in-grant-park-on-august-2-2018-in.jpg?s=612x612&w=0&k=20&c=YVczRSqjEMfj3Syxj9tZHu5Wn4aD-he_COZLZ92ke6Q=",
        descricao: "Show eletrizante que reuniu dançarinos, ritmos caribenhos em Inside Out e um lindo tributo a Elvis Presley.",
        videoUrl: "https://drive.google.com/file/d/17VKNLqaGVyomvgIljSmOXJ6ln2Aej2Bq/view?usp=sharing",
        destaque: false
    },
    {
        id: 14,
        titulo: "Isle Of Wight Festival",
        categoria: "Shows",
        data: "24 de junho de 2018",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoXP-SWd5YneNoP3PyC_3oxLnoTDmNobRg93JcnUyxZA&s=10",
        banner: "https://i.dailymail.co.uk/i/newpix/2018/06/24/23/4D97737200000578-5880531-In_the_moment_Camila_commanded_attention_as_she_interacted_with_-a-40_1529878946662.jpg",
        descricao: "Show eletrizante da passagem pela Europa que incendiou Newport com os sucessos do álbum Camila e covers inesquecíveis.",
        videoUrl: "https://drive.google.com/file/d/1TYQL_bFKxtpRDam_SwDMIpYU0CR8bnFv/view?usp=sharing",
        destaque: false
    },
    {
        id: 15,
        titulo: "Summertime Ball",
        categoria: "Shows",
        data: "9 de junho de 2018",
        capa: "https://media.gettyimages.com/id/970340138/pt/foto/camila-cabello-on-stage-during-capitals-summertime-ball-with-vodafone-at-wembley-stadium-london.jpg?s=612x612&w=0&k=20&c=XzQ0O5L1055pStQ8EwZqpAs7syHIzyFBFIGAuEC3ClM=",
        banner: "https://metro.co.uk/wp-content/uploads/2018/06/sei_16179016.jpg?quality=90&strip=all",
        descricao: "Show inesquecível que abriu o festival no lotado Estádio de Wembley para 80 mil pessoas com os maiores sucessos do álbum Camila.",
        videoUrl: "",
        destaque: false
    },
    {
        id: 16,
        titulo: "BBC The Biggest Weekend",
        categoria: "Shows",
        data: "27 de maio de 2018",
        capa: "https://media.gettyimages.com/id/962996256/pt/foto/swansea-wales-camila-cabello-performs-during-day-2-of-bbc-radio-1s-biggest-weekend-2018-held-at.jpg?s=612x612&w=0&k=20&c=gtJ8FfYJ4qDDlR12hDG6FkaeMMbLHAy_lcz6y_0bD-o=",
        banner: "https://media.gettyimages.com/id/963001974/pt/foto/swansea-wales-camila-cabello-performs-during-day-2-of-bbc-radio-1s-biggest-weekend-2018-held-at.jpg?s=612x612&w=0&k=20&c=fn4VdBtUD0NbtJkoK9MgBxjMLzVTnzcANdYvti4yI7Q=",
        descricao: "Apresentação marcante no palco principal de Gales que consagrou sua presença nos grandes festivais britânicos da era Camila.",
        videoUrl: "",
        destaque: false
    },
    {
        id: 17,
        titulo: "Lollapalooza Chile",
        categoria: "Shows",
        data: "17 de março de 2018",
        capa: "https://www.billboard.com/wp-content/uploads/media/05-Camila-Cabello-lollapalooza-argentina-march-16-2018-billboard-1548.jpg?w=1280",
        banner: "",
        descricao: "Apresentação inesquecível no Parque O'Higgins onde a cantora superou atrasos e problemas técnicos para entregar um show épico com hits como Inside Out e Havana.",
        videoUrl: "https://drive.google.com/file/d/1kBumzvi0IfhFvemXR_Trvs4cJl13Of_R/view?usp=sharing",
        destaque: false
    },
    {
        id: 18,
        titulo: "Lollapalooza Argentina",
        categoria: "Shows",
        data: "16 de março de 2018",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfCS8nhSn5NEHWeW2kxb1Pm7DOpmTYk4MXUdt9Iac--w&s=10",
        banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFyFThZuX9A92iKCnGXm1XN_8s0m1VAqMCPKvB0UQfg&s=10",
        descricao: "Apresentação histórica no Palco Alternativo do Hipódromo de San Isidro que marcou um dos primeiros grandes momentos da cantora promovendo seu álbum solo de estreia.",
        videoUrl: "https://drive.google.com/file/d/1ewkEbFNBf4swm52PCrUqXtBsg7oWY2Rf/view?usp=sharing",
        destaque: false
    },
    {
        id: 19,
        titulo: "iHeartRadio Festa Latina",
        categoria: "Shows",
        data: "4 de novembro de 2017",
        capa: "https://media.gettyimages.com/id/870318566/pt/foto/miami-fl-camila-cabello-performs-onstage-during-the-iheartradio-fiesta-latina-celebrating-our.jpg?s=612x612&w=0&k=20&c=2X-C0tgCPMFgLAp8EourmteU5xc1FZd150JamU0VUuw=",
        banner: "https://media.gettyimages.com/id/870316968/pt/foto/miami-fl-camila-cabello-performs-onstage-during-the-iheartradio-fiesta-latina-celebrating-our.jpg?s=612x612&w=0&k=20&c=CFSakseKeNi-LeDCb2ttb_9daDS4p_XM6K7dmjw5ECo=",
        descricao: "iHeartRadio Festa Latina em Miami.",
        videoUrl: "",
        destaque: false
    },
  
//Performances//
  
        {
        id:  20,
        titulo: "'Havana' Dick Clark's Rockin' New Year's Eve",
        categoria: "Performances",
        data: "31 de dezembro de 2017",
        capa: "https://akns-images.eonline.com/eol_images/Entire_Site/20171131/rs_634x1024-171231174917-634.camila-cabello-nye.ct.123117.jpg?fit=around%7C634:1024&output-quality=90&crop=634:1024;center,top",
        banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65ebuVGsjDtV5Vz50jc7RfdDbSLsmRbT-3z-x0rHlOQ&s=10",
        descricao: "Apresentação inesquecível na Times Square na virada de ano que impulsionou o hit rumo ao topo da Billboard Hot 100.",
        videoUrl: "",
        destaque: false
    },
         {
        id: 21,
        titulo: "'Havana' Billboard Women in Music",
        categoria: "Performances",
        data: "30 de novembro de 2017",
        capa: "https://media.gettyimages.com/id/883392474/photo/hollywood-ca-honoree-camila-cabello-performs-onstage-at-billboard-women-in-music-2017-at-the.jpg?s=612x612&w=0&k=20&c=h5oThpMCnMDN63WO08XGDhg0cmIzBxG1asTOlgL8nSk=",
        banner: "https://media.gettyimages.com/id/883391734/photo/hollywood-ca-honoree-camila-cabello-performs-onstage-at-billboard-women-in-music-2017-at-the.jpg?s=612x612&w=0&k=20&c=iy6aW6HCgw75zZLh5D3NihwmnvpelePkHMK7gHYtghw=",
        descricao: "Versão acústica e intimista em Hollywood marcando a noite em que recebeu o prêmio de Artista Revelação.",
        videoUrl: "https://drive.google.com/file/d/1j0zGTJV-89RlYj45s-uP9lteqgAIWGEQ/view?usp=sharing",
        destaque: false
    },
         {
        id: 22 ,
        titulo: " 'Havana' MTV Europe Music Awards",
        categoria: "Performances",
        data: "12 de novembro de 2017",
        capa: "https://media.gettyimages.com/id/873366400/photo/london-england-camila-cabello-performs-on-stage-during-the-mtv-emas-2017-held-at-the-sse-arena.jpg?s=612x612&w=0&k=20&c=tud_xO0-kBfc0ZUnKykewvxOwkG3o7d-0oKS926VKSA=",
        banner: "https://media.gettyimages.com/id/873366636/photo/london-england-camila-cabello-performs-on-stage-during-the-mtv-emas-2017-held-at-the-sse-arena.jpg?s=612x612&w=0&k=20&c=FRLvCsV6odnTg2YLN6vBGBjuR8LepOB_q3pTIjnkUq0=",
        descricao: "Apresentação icônica na The SSE Arena em que a cantora entregou um visual marcante de body vermelho em babados e dança dramática",
        videoUrl: "https://drive.google.com/file/d/1FlXuJb0idErLUeMEAEghpFPhJG6h8AHb/view?usp=sharing",
        destaque: false
    },
        {
        id: 23 ,
        titulo: "'Havana' LOS40 Music Awards",
        categoria: "Performances",
        data: "10 de novembro de 2017",
        capa: "https://media.gettyimages.com/id/873503030/photo/madrid-spain-camila-cabello-attends-40-principales-awards-2017-on-november-10-2017-in-madrid.jpg?s=612x612&w=0&k=20&c=V3rg6rZDXdcv1YMurA4AtQ_YKclowXMzFNO9EKGo4wQ=",
        banner: "",
        descricao: "",
        videoUrl: ".",
        destaque: false
    },
       {
        id:  24,
        titulo: "'Havana' Latin American Music Awards (Latin AMAs)",
        categoria: "Performances",
        data: " 26 de outubro de 2017",
        capa: "https://media.gettyimages.com/id/867050180/photo/hollywood-ca-camila-cabello-performs-onstage-during-the-2017-latin-american-music-awards-at.jpg?s=612x612&w=0&k=20&c=dQ79t4qT7DySpItaHIRV4VAxH8Y7WQcxXHblJ1uoCvA=",
        banner: "https://media.gettyimages.com/id/867190500/photo/2017-latin-american-music-awards-show-pictured-camila-cabello-performing-at-the-dolby-theatre.jpg?s=612x612&w=0&k=20&c=qe6LPSnskS-H1LzXVy3gv10x00eZ3_O9SzeAldt-UFc=",
        descricao: "Versão especial em Spanglish no Dolby Theatre em Hollywood que celebrou suas raízes cubanas com passos de salsa.",
        videoUrl: "https://drive.google.com/file/d/1PffQJoAzHtYomRI5-rHk4UNB8V8HoVcT/view?usp=sharing",
        destaque: false
    },    
        {
        id: 25,
        titulo: "'Say You Won't Let Go' BBC Radio 1’s Teen Awards ",
        categoria: "Performances",
        data: "22 de outubro de 2017",
        capa: "https://media.gettyimages.com/id/865050632/photo/london-england-camila-cabello-performs-at-the-bbc-radio-1-teen-awards-2017-at-wembley-arena-on.jpg?s=612x612&w=0&k=20&c=Wp5acKJWsLSIh7adcWeitK4377cb6K63HX_7DZTFEFM=",
        banner: "https://media.gettyimages.com/id/865047344/photo/london-england-james-arthur-and-camila-cabello-perform-on-stage-at-the-bbc-radio-1-teen-awards.jpg?s=612x612&w=0&k=20&c=NfSqP8Up8FhV_TlGF0wnBXOk1NTDCnCFbpkOVbWD7mE=",
        descricao: "Dueto surpresa e emocionante na Wembley Arena em Londres que uniu as vozes dos artistas em um arranjo acústico inesquecível",
        videoUrl: "https://drive.google.com/file/d/1ikMQRPb54AYcjfx4J6jKY47TEZ-YjXB2/view?usp=sharing",
        destaque: false
    },
        {
        id: 26,
        titulo: "'Havana'  BBC Radio 1’s Teen Awards ",
        categoria: "Performances",
        data: "22 de outubro de 2017",
        capa: "https://media.gettyimages.com/id/865050982/photo/london-england-camila-cabello-performs-at-the-bbc-radio-1-teen-awards-2017-at-wembley-arena-on.jpg?s=612x612&w=0&k=20&c=leO3H6aYjH0KHjyp5KqogMuwK6xgp1FTOFV4Qg6swmU=",
        banner: "https://media.gettyimages.com/id/865050608/photo/london-england-camila-cabello-performs-at-the-bbc-radio-1-teen-awards-2017-at-wembley-arena-on.jpg?s=612x612&w=0&k=20&c=QII7YgRtBNDQ625sfLPRfVShZtMQ48wVZfvxUYFFvmA=",
        descricao: "",
        videoUrl: "https://drive.google.com/file/d/1Pb_ML1A3TSxbN7sv20u-8U-Y5lfoicuJ/view?usp=sharing",
        destaque: false
    },
      {
        id:  27,
        titulo: "'Havana','Crying in the Club' e 'Bad Things' Today Show ",
        categoria: "Performances",
        data: "29 de setembro de 2017",
        capa: "https://media.gettyimages.com/id/855530056/pt/foto/new-york-ny-camila-cabello-performs-onstage-wearing-an-aclu-ribbon-on-nbcs-today-at-rockefeller.jpg?s=612x612&w=0&k=20&c=cdfb31XZBHnudHtkifHBGmD4u4pSKbJZSC_uE8D-J2A=",
        banner: "https://media.gettyimages.com/id/855541408/pt/foto/new-york-ny-camila-cabello-performs-onstage-showing-her-support-for-daca-while-wearing-an-aclu.jpg?s=612x612&w=0&k=20&c=7KzQPFf8hC-M0B7Vu7U05WUwxUDHaM4qm-LwPlvW8ts=",
        descricao: "Durante a performance de “Havana”, a cantora dedicou o momento aos jovens beneficiários do programa DACA (conhecidos como DREAMers) e fez um discurso em defesa de uma América inclusiva",
        videoUrl: "",
        destaque: false
    },
      {
        id: 28,
        titulo: "'Havana' The Tonight Show Starring Jimmy Fallon",
        categoria: "Performances",
        data: "25 de setembro de 2017",
        capa: "https://pmstudio.com/pmstudio/images/Camila-Cabello12.jpg",
        banner: "https://media.gettyimages.com/id/853852454/pt/foto/the-tonight-show-starring-jimmy-fallon-episode-0744-pictured-singer-camila-cabello-performs.jpg?s=612x612&w=0&k=20&c=BkaI3pEcd5i0dC2EMawAVma-sq_GSvKnMo8k7E8oiQE=",
        descricao: "Camila esteve no programa de Jimmy Fallon para cantar 'Havana' pela primeira vez na TV e conversou sobre a inspiração pessoal da música e a reação emocionada de sua avó.",
        videoUrl: "https://drive.google.com/file/d/1kqAX61gb3hgsvM8ZgkrfEuNvkQYAfdTa/view?usp=sharing",
        destaque: false
    },
      {
        id: 29,
        titulo: "'Crying in the Club' The Tonight Show Starring Jimmy Fallon",
        categoria: "Performances",
        data: "22 de junho de 2017",
        capa: "https://media.gettyimages.com/id/699981094/pt/foto/the-tonight-show-starring-jimmy-fallon-episode-0698-pictured-musical-guest-camila-cabello.jpg?s=612x612&w=0&k=20&c=L4ZRTDjGAdb6Y4J1jbeXO2ttyhQ_ovmPqlQJeYQTiUI=",
        banner: "https://media.gettyimages.com/id/699980704/pt/foto/the-tonight-show-starring-jimmy-fallon-episode-0698-pictured-musical-guest-camila-cabello.jpg?s=612x612&w=0&k=20&c=4kGl-9RZWJAdtkvv1Tg3AvOPImmwvbuEAHA5KfZRTAw=",
        descricao: "Camila Cabello apresentou o seu single solo de estreia no programa The Tonight Show Starring Jimmy Fallon",
        videoUrl: "",
        destaque: false
    },
     {
        id: 30,
        titulo: "'I Have Questions' e 'Crying in the Club' iHeartRadio MuchMusic Video Awards (MMVAs)",
        categoria: "Performances",
        data: "18 de junho de 2017",
        capa: "https://media.gettyimages.com/id/697460192/pt/foto/toronto-on-camila-cabello-performs-at-the-2017-iheartradio-muchmusic-video-awards-at-muchmusic.jpg?s=612x612&w=0&k=20&c=A0NXEB7PHzP5l6_cPZLaqTHYM-JagkR4nqcWlsR-Xdo=",
        banner: "https://media.gettyimages.com/id/697460474/pt/foto/toronto-on-camila-cabello-performs-at-the-2017-iheartradio-muchmusic-video-awards-at-muchmusic.jpg?s=612x612&w=0&k=20&c=OqKOMWvJhkVIOIwFF4Wd_9qWB8WpTG_QO_s5zJHAMks=",
        descricao: "A performance de Camila Cabello no iHeartRadio MuchMusic Video Awards (MMVAs) de 2017. Durante a noite, Camila também ganhou o prêmio de International New Artist Award (Artista Internacional Revelação)",
        videoUrl: "https://drive.google.com/file/d/1lDi6V-21dSwlakvVbKivZJzQTE0PUa2n/view?usp=sharing",
        destaque: false
    },

    {
        id: 31,
        titulo: "'Crying in the Club' Britain's Got Talent",
        categoria: "Performances",
        data: "31 de maio de 2017",
        capa: "https://celebmafia.com/wp-content/uploads/2017/06/camila-cabello-performs-at-britain-s-got-talent-in-london-05-30-2017-1.jpg",
        banner: "",
        descricao: "Fazendo sua estreia solo na parada britânica, ‘Crying in the Club’ estreou em 48º lugar no Official UK Charts",
        videoUrl: "",
        destaque: false
    },
    {
        id: 32,
        titulo: "'I Have Questions' e 'Crying in the Club' Billboard Music Awards",
        categoria: "Performances",
        data: "21 de maio de 2017",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXhBrazYHzt71N7PXDCgWSQTTleNmVQs1Zb6mzAnY0cA&s=10",
        banner: "https://www.billboard.com/wp-content/uploads/media/camila-cabello-bbmas-performance-a-2017-billboard-1548.jpg",
        descricao: "Camila Cabello fez sua primeira apresentação solo na televisão no Billboard Music Awards",
        videoUrl: "",
        destaque: false
    },
     {
        id: 33,
        titulo: "'Hey Ma' MTV Movie & TV Awards",
        categoria: "Performances",
        data: " 7 de maio de 2017",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvFrj0trYCW8xDekFNNK0MAo-nS6l8MXVuwEbBlPhRow&s=10",
        banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmne6_8GR9RhuVMRbpKGT1f-En5M-g9q9kW4rCYVv8lA&s=10",
        descricao: "Camila Cabello, Pitbull e J Balvin se apresentaram juntos no palco cantando o hit “Hey Ma”, parte da trilha sonora do filme Velozes e Furiosos 8.",
        videoUrl: "",
        destaque: false
    },
   {
        id: 34,
        titulo: "'Bad Things' ACLU Benefit Concert ",
        categoria: "Performances",
        data: "3 de abril de 2017",
        capa: "https://media.gettyimages.com/id/664384568/photo/los-angeles-ca-camila-cabello-performs-during-zedd-presents-welcome-fundraising-concert.jpg?s=612x612&w=0&k=20&c=MqScnwtfn21uhq3hYtSvh-mW6i-WLq20c2DAZofOeQ0=",
        banner: "https://media.gettyimages.com/id/664471372/photo/los-angeles-ca-singers-machine-gun-kelly-and-camila-cabello-perform-onstage-during-the-welcome.jpg?s=612x612&w=0&k=20&c=eIs8efQ4jWeMdZ82cfHx4SpevFOOuJ4zJwyIexOYB2Y=",
        descricao: "Performance ao vivo do grande sucesso em parceria com Machine Gun Kelly.",
        videoUrl: "https://drive.google.com/file/d/1yNKMNI7_pxhtmfAFB8AiOo4UxlDlBs8o/view?usp=sharing",
        destaque: false
    },
    {
        id: 35,
        titulo: "'Man In The Mirror' ACLU Benefit Concert",
        categoria: "Performances",
        data: "3 de abril de 2017",
        capa: "https://media.gettyimages.com/id/664864660/photo/los-angeles-ca-singer-camila-cabello-performs-onstage-during-the-welcome-fundraising-concert.jpg?s=612x612&w=0&k=20&c=7NEn8BIIhEU3gzx6eSvU4QcyQf38TzePN8j4foAQPBs=",
        banner: "https://assets.teenvogue.com/photos/58e3c0799093dd2fbd6babe3/16:9/w_1920,c_limit/GettyImages-664471336.jpg",
        descricao: "Foi a primeira apresentação solo de Camila Cabello após sua saída do grupo Fifth Harmony, na qual ela brilhou cantando um cover de 'Man in the Mirror', clássico de Michael Jackson, acompanhada por uma banda completa e coro.",
        videoUrl: "",
        destaque: false
    },
      {
        id: 36,
        titulo: "'Bad Things' Nickelodeon Kids' Choice Awards",
        categoria: "Performances",
        data: " 11 de março de 2017",
        capa: "https://media.gettyimages.com/id/652257744/pt/foto/los-angeles-ca-singer-camila-cabello-and-rapper-machine-gun-kelly-perform-onstage-at.jpg?s=612x612&w=0&k=20&c=J0wxeuzRx0e-wldD_wqYVCTej4JOgNSyoID78N8Wy-w=",
        banner: "https://media.gettyimages.com/id/652234870/pt/foto/los-angeles-ca-singer-camila-cabello-and-rapper-machine-gun-kelly-perform-onstage-at.jpg?s=612x612&w=0&k=20&c=l1RasQeUSjEN3uclzdiUlx8i_oDPfOHtsw44dZr4vJU=",
        descricao: "",
        videoUrl: " ",
        destaque: false
    },
    {
       id: 37,
       titulo:"'Say You Won't Let Go' BBC Radio 1 Live Lounge",
       categoria:"Performances",
       data:" 31 de janeiro de 2017",
       capa:" ",
       banner:"https://ichef.bbci.co.uk/images/ic/768xn/p04rffw3.jpg ",
       descricao:" ",
       videoUrl: " https://drive.google.com/file/d/1BW1jzxKTjp-gnMLHWpKyzWlWMX2Fu5l1/view?usp=sharing",
       destaque: false
    },
    {
        id: 38,
        titulo: "'Bad Things' BBC Radio 1 Live Lounge",
        categoria: "Performances",
        data: " 31 de janeiro de 2017",
        capa: "",
        banner: "https://ichef.bbci.co.uk/images/ic/640x360/p04rf43v.jpg",
        descricao: "Eles tocaram uma versão acústica e stripped-down (simplificada/despojada) do hit em parceria, acompanhados por um quarteto de cordas e pela banda completa de MGK. Na época, o single alcançou a 4ª posição na Billboard Hot 100.",
        videoUrl: "",
        destaque: false
    },
   {
        id: 39,
        titulo: "'Bad Things' The Ellen DeGeneres Show",
        categoria: "Performances",
        data: " 30 de janeiro de 2017",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHRCa_ycWh38quC3NQh--TD6OBqTIsmy6V2903Lg68g&s=10",
        banner: "https://www.hotnewhiphop.com/i/v1/765x430-cover-81-auto/cover/39/01/1485810139_4f6ea6773b19a5d7fed06904c01a5473.jpg",
        descricao: "Assista à performance de Bad Things por Machine Gun Kelly e Camila Cabello no The Ellen DeGeneres Show, registro inesquecível de 2017 que impulsionou o single rumo ao topo das paradas",
        videoUrl: " ",
        destaque: false
    },
    
      {
        id: 40,
        titulo: "",
        categoria: "Performances",
        data: "",
        capa: "",
        banner: "",
        descricao: "",
        videoUrl: "",
        destaque: false
    },   

  //Entrevistas//
   {
        id: 41 ,
        titulo: "Therapuss with Jake Shane",
        categoria: "Entrevistas",
        data: "9 de maio de 2024",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwadVkOPE_mexQ-ZY214yige0xM4FIy8HmuuDSboLmmw&s=10",
        banner: "",
        descricao: "",
        videoUrl: "https://drive.google.com/file/d/1y9jxtFd-O779W7qEM1gUiubhK7B0cGHu/view?usp=sharing",
        destaque: false
   },
      
  //Movies & Series//
        {
        id: 42 ,
        titulo: "Rob Peace",
        categoria: "Movies & Series",
        data: "",
        capa: "",
        banner: "",
        descricao: "",
        videoUrl: "",
        destaque: false
    },
      {
        id: 43 ,
        titulo: "Trolls 3",
        categoria: "Movies & Series",
        data: "",
        capa: "",
        banner: "",
        descricao: "",
        videoUrl: "",
        destaque: false
    },
      {
        id: 44 ,
        titulo: "Cinderela",
        categoria: "Movies & Series",
        data: "",
        capa: "",
        banner: "",
        descricao: "",
        videoUrl: "",
        destaque: false
    },
      {
        id: 45 ,
        titulo: "GODSPEED",
        categoria: "Movies & Series",
        data: "6 de setembro de 2024",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpAxHb_OWNZ-OPRFfw9SKV1KuGt999P0EEmPzjTeuWMw&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de GODSPEED de Camila Cabello, vídeo carregado de simbolismo e estética melancólica que encerra um dos capítulos mais visuais da cantora.",
        videoUrl: "https://drive.google.com/file/d/1VCuqHfxLOCTFyf2wg__3huFHMi6sqMb3/view?usp=sharing",
        destaque: false
    },
        {
        id: 46 ,
        titulo: "Chanel No.5",
        categoria: "Movies & Series",
        data: " 24 de junho de 2024",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsb3R-UCZSErMApwYoAU1pAtesEZJZctO8i5FYFVepEg&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Chanel No.5, produção minimalista e magnética que destaca uma performance de dança hipnotizante no universo estético do C,XOXO.",
        videoUrl: "https://drive.google.com/file/d/1LL_sjFFWgS0snXyvNW5OzAcjBVIwACZM/view?usp=sharing",
        destaque: false
    },
        {
        id: 47 ,
        titulo: "HE KNOWS",
        categoria: "Movies & Series",
        data: " 22 de maio de 2024",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_uLijIbJtKw42OSKYqRG6DtBgfrjdd2lc_JgZHUGIg&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de HE KNOWS, produção vibrante e cheia de atitude que acompanha uma noite inesquecível de festa e sedução pelas ruas de Miami.",
        videoUrl: "https://drive.google.com/file/d/1Rd-0owGOENLdtFC5xNe0DuUY6e8XJUk_/view?usp=sharing",
        destaque: false
    },
        {
        id:  48,
        titulo: "I LUV IT",
        categoria: "Movies & Series",
        data: "27 de março de 2024",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZq840y2E8DGZh6yU5Z0-bdxkBs9Uh0sZFf2lbF0RaQ&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de I LUV IT, produção caótica, futurista e eletrizante que marca a transição ousada da cantora para a era C,XOXO.",
        videoUrl: "https://drive.google.com/file/d/1fatcrG-1q_jJiPOAvaZJIWeAEWENjElK/view?usp=sharing",
        destaque: false
    },
       {
        id: 49 ,
        titulo: "Ambulancia",
        categoria: "Movies & Series",
        data: "24 de janeiro de 2023",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7nA9yuJXHeDvNZTJq_haxRa-BLUrYkCO8XAiFnp3Lg&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Ambulancia, vídeo esteticamente único que marcou um dos grandes encontros da música latina em 2023.",
        videoUrl: "https://drive.google.com/file/d/17ZEUHv92imNKtO-RqiLuqoIMJcLdfq2c/view?usp=sharing",
        destaque: false
    },
        {
        id:  50,
        titulo: "Ku lo sa",
        categoria: "Movies & Series",
        data: "16 de dezembro de 2022",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Rob2GiFWzoNTjcN3EcWgLPAgscOUMGKecJfTopN1Kg&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Ku Lo Sa, colaboração irresistível que levou o grande hit global do afrobeat a uma nova dimensão.",
        videoUrl: "https://drive.google.com/file/d/1H8kFq2TEbRzwV6ZWcNlASSM0NY64Pgh6/view?usp=sharing",
        destaque: false
    },
       {
        id: 51 ,
        titulo: "Mon amour",
        categoria: "Movies & Series",
        data: "27 de julho de 2022",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aq-wsJci8nbui6voNDombluPhTTpQRzp3ZwpRGyStw&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Mon Amour, paródia hilaria e colorida que ironiza os clichês e dramas dos reality shows de namoro em uma villa de verão.",
        videoUrl: "https://drive.google.com/file/d/1pGU1u9LiOHxO3HYB7f_5VG7ebYsaqNn3/view?usp=sharing",
        destaque: false
    },
        {
        id: 52 ,
        titulo: "Hasta los Dientes",
        categoria: "Movies & Series",
        data: "13 de maio de 202",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0IaYs0YxKKKWOdw6JOWHqrCs-nfWEU2VWSBQpuqlBw&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Hasta los Dientes, colaboração pop latina contagiante embalada por uma estética espacial única.",
        videoUrl: "https://drive.google.com/file/d/1FZWA8ZD7Qw27MhbJzZex6IO_L6MeuZRk/view?usp=sharing",
        destaque: false
    },
         {
        id: 53 ,
        titulo: "Psychofreak",
        categoria: "Movies & Series",
        data: "8 de abril de 2022",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXONUMtrYwYauZTThA4pAFVV8jwkDfzNNdvjNupo_Cpw&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Psychofreak, produção hipnotizante e surreal que explora temas de ansiedade e dissociação em um cenário com gravidade distorcida.",
        videoUrl: "https://drive.google.com/file/d/1nYKUgp9eHCheHN7Wtjsj_IJLUHlrGVhi/view?usp=sharing",
        destaque: false
    },
        {
        id: 54 ,
        titulo: "Bam Bam",
        categoria: "Movies & Series",
        data: "4 de março de 2022",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7EyOrCQlHUpFr95VIs8NJWUPXTmJQ18sdlDKv91Ilw&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Bam Bam, vídeo indicado ao Grammy que conquistou fãs no mundo inteiro com sua vibe festiva e alto astral.",
        videoUrl: "https://drive.google.com/file/d/1gOHc1rFqileDUd6EONlvJT0j6RvQnNIV/view?usp=sharing",
        destaque: false
    },
      {
        id: 55 ,
        titulo: "I'll Be Home For Christmas",
        categoria: "Movies & Series",
        data: "21 de dezembro de 2021.",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGb2wso5s2-u07oV1xoZCvU6onmN6SK49n0byCb-sRMQ&s=10",
        banner: "",
        descricao: "Assista à performance oficial de I'll Be Home For Christmas por Camila Cabello na Casa Branca, apresentação marcante para o especial Spirit of the Season acompanhada por um talentoso grupo mariachi.",
        videoUrl: "https://drive.google.com/file/d/1TboPic_6IBXPabouGhcdlkIAudnddC4e/view?usp=sharing",
        destaque: false
    },
       {
        id: 56 ,
        titulo: "I'll Be Home For Christmas",
        categoria: "Movies & Series",
        data: "8 de dez. de 2021",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_20ARKLXMFBM9jVwRV1Czr1yZdhZTf_i1JTLh1uDF-g&s=10",
        banner: "",
        descricao: "Assista à performance especial de I'll Be Home For Christmas de Michael Bublé com Camila Cabello, dueto acolhedor e sofisticado gravado para o especial de fim de ano em Nova York.",
        videoUrl: "https://drive.google.com/file/d/1xE1TVpVnqKxSRlSeUsqunsI1dmrJVVc3/view?usp=sharing",
        destaque: false
    },

        {
        id: 57 ,
        titulo: "Million to One",
        categoria: "Movies & Series",
        data: " 31 de agosto de 2021",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Qmdg0Zk75Cl8WWYyrKCG-R_fpVY0H0IlifLFse68rg&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Million to One, hino de força e determinação que traz cenas marcantes da cantora no papel principal do filme Cinderella.",
        videoUrl: "https://drive.google.com/file/d/13VRJKqkldob9OFN5JVaS585d7SIvBDqH/view?usp=sharing",
        destaque: false
    },
        {
        id: 58 ,
        titulo: "Don't Go Yet",
        categoria: "Movies & Series",
        data: " 23 de julho de 2021",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8k-IIUr4tb4CU-7Bhm8HEQyBDyfTx94SEwBSiTVtJQ&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Don't Go Yeto, vídeo aclamado que deu a largada na era FAMILIA com uma celebração calorosa das raízes culturais da cantora.",
        videoUrl: "https://drive.google.com/file/d/1WRR6QT3Scy_YLRcUnXhBdDS-n0nprQJs/view?usp=sharing",
        destaque: false
    },
       {
        id:  59,
        titulo: "First Man",
        categoria: "Movies & Series",
        data:  "21 de junho de 2020",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmQ_zCPsx0YX0bu-v2U85HkY-bi23Isc2BLw8Zvvg7g&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de First Man, clipe comovente e intimista que abre o arquivo de memórias de família para homenagear o primeiro grande amor de sua vida.",
        videoUrl: "https://drive.google.com/file/d/1mNSKOzZMgfIzLiZaHDVyvNlv6a1S9y9T/view?usp=sharing",
        destaque: false
    },
       {
        id: 60 ,
        titulo: "My Oh My",
        categoria: "Movies & Series",
        data: "12 de fevereiro de 2020",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3DqG7xiy9ezr9LhYUGDSJJ2a9b8SYTaLP2yjowBh1Yg&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de My Oh My, superprodução ambientada na era de ouro de Hollywood que acompanha uma atriz de cinema mudo em busca de papéis mais ousados.",
        videoUrl: "https://drive.google.com/file/d/1OmcOOHEpyzUriz6ICeDjn14nszl3oID-/view?usp=sharing",
        destaque: false
    },
       {
        id: 61 ,
        titulo: "Rockin' Around the Christmas Tree",
        categoria: "Movies & Series",
        data: "29 de novembro de 2019",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxzA7GVXN3kJx4mnuVMgJoQ-KGNlLxCPRnBj2H3zEr3g&s",
        banner: "",
        descricao: "Assista à performance oficial de Rockin' Around the Christmas Tree de Kacey Musgraves com Camila Cabello, dueto natalino contagiante que uniu duas grandes vozes do pop e do country.",
        videoUrl: "https://drive.google.com/file/d/1NeOfc1vjRjaqgpUc1nVZt1zCluKp12jj/view?usp=sharing",
        destaque: false
    },
      {
        id: 62 ,
        titulo: "Living Proof",
        categoria: "Movies & Series",
        data: "24 de novembro de 2019",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nbwLtdhagnX2BTPfLVVYYc3Xns0c9jj8QCT9Ga7fSw&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Living Proof, produção etérea e poética inspirada em elementos mitológicos e telas renascentistas.",
        videoUrl: "https://drive.google.com/file/d/1YPG1FYtX66mwnf1UJF8t5N9-WUKtaLr8/view?usp=sharing",
        destaque: false
    },
     {
        id: 63 ,
        titulo: "South of the Border",
        categoria: "Movies & Series",
        data: "4 de outubro de 2019",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YVBWXGG1bYtkwYOSvSXQS88cFLybAFcufc3lo7H7KQ&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de South of the Border, curta-metragem divertido no estilo filme de espionagem repleto de reviravoltas, perseguições e um valioso colar em jogo.",
        videoUrl: "https://drive.google.com/file/d/1r-mCH3wswTZHgytYwHS3iFYjciXiYQNS/view?usp=sharing",
        destaque: false
    },
      {
        id: 64 ,
        titulo: "Liar",
        categoria: "Movies & Series",
        data: "12 de setembro de 2019",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqlxFbYu2rFYVQUL3vm1muV1ArI1DK-BF6yfiYvPu5g&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Liar, curta-metragem divertido e surrealista onde a cantora fica presa em um ciclo hilário de pesadelos cada vez que tenta negar seus sentimentos",
        videoUrl: "https://drive.google.com/file/d/1WFzCyQGMv8V-CDFQydzZ_IpYqHOXNxoc/view?usp=sharing",
        destaque: false
    },
     {
        id: 65 ,
        titulo: "Shameless",
        categoria: "Movies & Series",
        data: " de setembro de 2019",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZ4YgBVVroFcSvx-bM_yeDk-oZUJJuBzaR4sbdMX_ZA&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Shameless, lançamento eletrizante que deu o pontapé inicial na era Romance com visuais marcantes e muita intensidade.",
        videoUrl: "https://drive.google.com/file/d/1gqTQbExCZdqufpmwCYe7uiuQ75gmvC7h/view?usp=sharing",
        destaque: false
    },
     {
        id: 66 ,
        titulo: "Find U Again",
        categoria: "Movies & Series",
        data: "9 de julho de 2019",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyMN_1VZq8WxMUzwYytBd-phQ0xOiBo3LwEk9Wr-kuyA&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Find U Again, produção estilizada no estilo neo-noir que traz a cantora disfarçada em um clube noturno fugindo de caçadores de recompensa.",
        videoUrl: "https://drive.google.com/file/d/1JIdo6QxEEQadM-0VLkmnFODra2Dsi6qs/view?usp=sharing",
        destaque: false
    },
       {
        id: 67 ,
        titulo: "Señorita",
        categoria: "Movies & Series",
        data: "21 de junho de 2019",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeNPgjNHHlXiaebjJ8hiokJlHM_HNfhcu-SyXQoU41g&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Señorita, vídeo icônico premiado no MTV VMA que se tornou uma das produções mais marcantes da videografia pop recente.",
        videoUrl: "https://drive.google.com/file/d/1xqRIjKzy2pwf_AYKSmKiddeFxwljq-I4/view?usp=sharing",
        destaque: false
    },
      {
        id: 68 ,
        titulo: "Mi Persona Favorita",
        categoria: "Movies & Series",
        data: " 28 de março de 2019",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBytcX_E3x4WtvyKqdgpHZx4Y11ZPDic0t1LaFRuIb0g&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Mi Persona Favorita, colaboração inesquecível e premiada no Latin GRAMMY que homenageia as conexões reais da vida.",
        videoUrl: "https://drive.google.com/file/d/1ims21fIRj9V6V2W5Yi-xDzhLJVKxI6l1/view?usp=sharing",
        destaque: false
    },
     {
        id:  69,
        titulo: "Consequences",
        categoria: "Movies & Series",
        data: "10 de outubro de 2018",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOLl-sJmhWKhMdT6_wuZO-N06wiTkR1vBAH1cbzTJYPg&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Consequences (orchestral), vídeo cinematográfico aclamado pela crítica que entregou uma das interpretações mais vulneráveis da videografia da cantora.",
        videoUrl: "https://drive.google.com/file/d/1lCWbsGFsmNN4b0V6w855d3hnPjQ5wnTy/view?usp=sharing",
        destaque: false
    },
      {
        id: 70 ,
        titulo: "Beautiful",
        categoria: "Movies & Series",
        data: " 15 de outubro de 2018",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmb_u6Yp2tuhlsDEQD1EY3bqguoMoiIwLPY2FghiZFsg&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Beautiful de Bazzi, vídeo elegante e atemporal que entregou um dos visuais mais encantadores da videografia da cantora em 2018.",
        videoUrl: "https://drive.google.com/file/d/18hxKyGF69SP_eeEGUBBtARMByCbKRnzk/view?usp=sharing",
        destaque: false
    },
     {
        id: 71,
        titulo: "Never Be the Same",
        categoria: "Movies & Series",
        data: "8 de março de 2018.",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXaPNCgQMKo37N0Lfnic_TqSzpdL7LnMjaN35-QiPc6A&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Never Be the Same, visual marcante e apaixonante do álbum CAMILA que consolidou o estilo conceitual da cantora.",
        videoUrl: "https://drive.google.com/file/d/1XoMP9qQ4qCbM6FEoWzGqlruL3V9grDia/view?usp=sharing",
        destaque: false
    },
     {
        id:  72,
        titulo: "Almost Like Praying",
        categoria: "Movies & Series",
        data: "6 de outubro de 2017",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wKPMzKXh-kg7r2BEQ7XtBRcs_PA9a32JRWGReriFaA&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Almost Like Praying de Lin-Manuel Miranda e artistas pela ajuda a Porto Rico, projeto emocionante que reúne Camila Cabello e grandes nomes da música em uma homenagem cheia de esperança.",
        videoUrl: "https://drive.google.com/file/d/1syhOIMlATWe0C_V7ENNxHbCxFynz6oOB/view?usp=sharing",
        destaque: false
    },
    {
        id: 73 ,
        titulo: "Havana",
        categoria: "Movies & Series",
        data: "24 de outubro de 2017",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztPE9Ph-FAPUq0NdPA2vr-Klc1ygs5UDD5A0OKNrBOQ&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Havana de Camila Cabello com Young Thug, maior fenômeno de sua videografia que conquistou bilhões de visualizações e o prêmio de Clipe do Ano no MTV VMA.",
        videoUrl: "https://drive.google.com/file/d/1pD8ELxX-WXNGaGxN3ZCm6EsOAf5YQuWU/view?usp=sharing",
        destaque: false
    },
      {
        id:  74,
        titulo: "Know No Better",
        categoria: "Movies & Series",
        data: "11 de julho de 2017",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7locrRYaRTzE7SOo8pW2mKWnrs5_GZzfB1ypQeW7qw&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Know No Better, produção contagiante que acompanha os sonhos de um jovem dançarino em meio a coreografias dinâmicas e muita energia.",
        videoUrl: "https://drive.google.com/file/d/1O6TAiBJesUzXXadyk5jtklYkeW8ddOb-/view?usp=sharing",
        destaque: false
    },
     {
        id:  75,
        titulo: "Crying in the Club",
        categoria: "Movies & Series",
        data: "19 de maio de 2017",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHcOG1n5FTFL_At4d-NZ5w2PMSTuzp006Olc7YSJ2iw&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Crying in the Club de Camila Cabello, marco histórico que deu o pontapé inicial em sua carreira solo com vocais poderosos e um conceito visual marcante.",
        videoUrl: "https://drive.google.com/file/d/1ZZJ7bPDC-lUvy1ldJgOlE0H-F8bc0S1l/view?usp=sharing",
        destaque: false
    },
      {
        id: 76 ,
        titulo: "Hey Ma",
        categoria: "Movies & Series",
        data: "10 de março de 2017",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqQ6DVmnHMfxbcnRgXTqQ_hetMUE2PXfgU2o8tQVNGeg&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Hey Ma, produção vibrante gravada nas ruas de Havana que celebra a cultura latina como tema do filme Velozes & Furiosos 8.",
        videoUrl: "https://drive.google.com/file/d/1_0TrztzPJ7ssYOJ5Gl22qeCaQDROCrEo/view?usp=sharing",
        destaque: false
    },
     {
        id: 77 ,
        titulo: "Bad Things",
        categoria: "Movies & Series",
        data: "1 de dezembro de 2016",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgK8-nXSL9oDA972EG9_dX8KuVGLQilZf_ODAiGz35ow&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Bad Things, grande marco na transição solo da cantora que dominou as paradas mundiais com uma estética marcante.",
        videoUrl: "https://drive.google.com/file/d/1AAtC_cg6ElX5VA-fJgSpPxBPefzS2k6y/view?usp=sharing",
        destaque: false
    },
     {
        id: 78,
        titulo: "I Know What You Did Last Summer",
        categoria: "Movies & Series",
        data: "20 de novembro de 2015",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmOEhxTpHjDELPBhCTKcAdNpVpbbYGQB-oM_aZL9AjA&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de I Know What You Did Last Summer, vídeo que conquistou as paradas mundiais e entregou um dos momentos visuais mais aclamados de 2015.",
        videoUrl: "https://drive.google.com/file/d/19tGaN1h1DKotf3f0UhkuEVYaGCoqFloP/view?usp=sharing",
        destaque: false
    },

        {
        id: 79 ,
        titulo: "That's My Girl",
        categoria: "Movies & Series",
        data: "19 de setembro de 2016",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48pyhXSDDKV2ZylxKM1wxmIRRx2TvO9WfnUvCb5rE8g&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de That's My Girl, hino de coragem que marcou a reta final da formação original do grupo com um conceito visual cinematográfico.",
        videoUrl: "https://drive.google.com/file/d/1zvZcxBFdebT8brsvIn7_8GkvotaZ-QyL/view?usp=sharing",
        destaque: false
    },
      {
        id: 80 ,
        titulo: "All in My Head (Flex)",
        categoria: "Movies & Series",
        data: "23 de junho de 2016",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnPOOssB9LReiJpV9mfwFe9tqNt_fnYPcztB2q_Rv1Q&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de All in My Head (Flex), produção solar e vibrante marcada por rochas à beira-mar, figurinos praianos estilosos e uma atmosfera praiana inesquecível.",
        videoUrl: "https://drive.google.com/file/d/1sXXzTKqKVolz4vuVfIkWpHEZC8YX4kN3/view?usp=sharing",
        destaque: false
    },
     {
        id: 81 ,
        titulo: "Work from Home",
        categoria: "Movies & Series",
        data: "26 de fevereiro de 2016",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnm7ujX2bQf0nYRzzypoM3hPUjUy8wjdKOMJYSGpP1jg&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Work from Home, produção histórica e sensual que conquistou bilhões de visualizações ao transformar ferramentas de construção e retroescavadeiras em um cenário pop inesquecível.",
        videoUrl: "https://drive.google.com/file/d/1fxQmbxvgkQ0p5EBp985SiblPmVZkU8QU/view?usp=sharing",
        destaque: false
    },
      {
        id: 82 ,
        titulo: "I'm in Love with a Monster",
        categoria: "Movies & Series",
        data: "27 de agosto de 2015",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZrEQuyNhyA7S5yAY0OIQyPacvZ6uyE8oYVs21kSF9aQ&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de I'm in Love with a Monster, produção divertida e vintage inspirada nos anos 1940 que integra a trilha sonora oficial do filme Hotel Transilvânia 2",
        videoUrl: "https://drive.google.com/file/d/1mVlYc8XWf2HvR_lS-DEV_RhwYNDg0wAt/view?usp=sharing",
        destaque: false
    },
     {
        id: 83 ,
        titulo: "Worth It",
        categoria: "Movies & Series",
        data: " 28 de março de 2015.",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4MeKeWEpaz4CBhYyw63FLZcUQHe6c2-IgFpxYhqECg&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Worth It, vídeo que marcou uma virada histórica na videografia da cantora e consagrou um dos maiores hinos pop da década.",
        videoUrl: "https://drive.google.com/file/d/1t3bAHLs2hpzT3_exi5sRkxJhoii0t1Kp/view?usp=sharing",
        destaque: false
    },
      {
        id: 84 ,
        titulo: "All I Want for Christmas Is You",
        categoria: "Movies & Series",
        data: "3 de dezembro de 2014.",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKCsbMs86BIe3FmvvGjPZbigt6e-kOSQJQea8SCbhwKQ&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de All I Want for Christmas Is You, vídeo especial que marcou o repertório comemorativo da cantora e entregou um momento visual inesquecível para os fãs.",
        videoUrl: "https://drive.google.com/file/d/1Wex1WQ-3C8M3NLo1N70ihYVOYGD1crmK/view?usp=sharing",
        destaque: false
    },
     {
        id: 85 ,
        titulo: "Sledgehammer",
        categoria: "Movies & Series",
        data: "25 de novembro de 2014.",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdeIifN3OSn7o2KJPF7-vjqXNRMz2QUO5Dj7o4DLJZlw&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Sledgehammer, vídeo que marcou uma das fases mais aclamadas da videografia do grupo e entregou momentos visuais inesquecíveis.",
        videoUrl: "https://drive.google.com/file/d/1q7-eCQNd0JCargN9kXsI7RgTuwilaPMx/view?usp=sharing",
        destaque: false
    },
        {
        id: 86,
        titulo: "BO$$",
        categoria: "Movies & Series",
        data: "8 de julho de 2014.",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzf3lVoY8HTDF8-Xp_5ddGwMUQRKsF-w2BGD7UmMRtuA&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de BO$$, produção estilizada e poderosa que consagrou um dos hinos de empoderamento mais icônicos do pop dos anos 2010.",
        videoUrl: "https://drive.google.com/file/d/1arjNufXgWcQ8bpw2utkImzjFSHnY-4Zk/view?usp=sharing",
        destaque: false
    },
      {
        id: 87,
        titulo: "Me & My Girls",
        categoria: "Movies & Series",
        data: "24 de agosto de 2013",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvgCsjOppRDwROc8b1UI7uK02mKtHEUIF2UHVRF06m-w&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Me & My Girls, vídeo que marcou os primeiros passos da videografia da cantora e entregou um dos momentos mais marcantes da era de estreia.",
        videoUrl: "https://drive.google.com/file/d/1dg_G4L95BKOnjscS2J7dWKC2M26dpHwy/view?usp=sharing",
        destaque: false
    },
     {
        id: 88 ,
        titulo: "Miss Movin' On",
        categoria: "Movies & Series",
        data: "15 de julho de 2013",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxhjnpVp_CcB-MtTfzmAyllsBqqA2FUjGGvW3ZvmNWAw&s=10",
        banner: "",
        descricao: "Assista ao videoclipe oficial de Miss Movin' On, marco inicial da videografia de Camila Cabello que traz o grupo em um parque de diversões superando desilusões amorosas com um visual vibrante dos anos 2010.",
        videoUrl: "https://drive.google.com/file/d/1-qka8_gFCLfOC73sEYJ8OytLdd7TaQ3_/view?usp=sharing",
        destaque: false
    },
      {
        id:  89,
        titulo: "",
        categoria: "Movies & Series",
        data: "",
        capa: "",
        banner: "",
        descricao: "",
        videoUrl: "",
        destaque: false
    },
      
  
];

let videoDestaqueAtual = null;

document.addEventListener("DOMContentLoaded", () => {
    configurarDestaque();
    carregarVideos(listaDeVideos);
    verificarSessaoUsuario();
    iniciarEscutaChat();
});

function converterImagemDrive(url) {
    if (!url) return "https://via.placeholder.com/300x450/222/fff?text=Sem+Capa";
    if (url.includes("drive.google.com")) {
        const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if (match && match[1]) {
            return `https://lh3.googleusercontent.com/d/${match[1]}`;
        }
    }
    return url; 
}

function converterParaEmbedDrive(url) {
    if (!url) return "";
    return url.replace(/\/view(\?.*)?$/, "/preview").replace(/\/edit(\?.*)?$/, "/preview");
}

function configurarDestaque() {
    const destaque = listaDeVideos.find(v => v.destaque) || listaDeVideos[0];
    if (!destaque) return;
    videoDestaqueAtual = destaque;

    document.getElementById("heroBanner").style.backgroundImage = `url('${destaque.banner || destaque.capa}')`;
    document.getElementById("heroTitle").innerText = destaque.titulo || "";
    document.getElementById("heroDesc").innerText = destaque.descricao || "";
    document.getElementById("heroBadge").innerText = destaque.categoria || "EM DESTAQUE";
}

function carregarVideos(videos) {
    const videoGrid = document.getElementById("videoGrid");
    videoGrid.innerHTML = "";

    const videosValidos = videos.filter(v => v && v.titulo);

    if (videosValidos.length === 0) {
        videoGrid.innerHTML = "<p style='color: #888;'>Nenhum vídeo encontrado.</p>";
        return;
    }

    videosValidos.forEach((video) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.onclick = () => abrirVideo(video);

        const imagemCapa = converterImagemDrive(video.capa);

        card.innerHTML = `
            <img src="${imagemCapa}" alt="${video.titulo}">
            <div class="card-info">
                <div class="card-title">${video.titulo}</div>
                <div class="card-category">${video.categoria}</div>
            </div>
        `;

        videoGrid.appendChild(card);
    });
}

function filtrarCategoria(cat, btn) {
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const title = document.getElementById("sectionTitle");
    title.innerText = cat === "todos" ? "Todos os Conteúdos" : cat;

    if (cat === "todos") {
        carregarVideos(listaDeVideos);
    } else {
        const filtrados = listaDeVideos.filter(v =>
            v && v.categoria && v.categoria.trim().toLowerCase() === cat.trim().toLowerCase()
        );
        carregarVideos(filtrados);
    }
}

function filtrarPorBusca() {
    const termo = document.getElementById("searchInput").value.trim().toLowerCase();
    const filtrados = listaDeVideos.filter(v =>
        v && v.titulo && (
            v.titulo.toLowerCase().includes(termo) ||
            (v.categoria && v.categoria.toLowerCase().includes(termo))
        )
    );
    carregarVideos(filtrados);
}

function abrirVideo(video) {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuarioLogado) {
        alert("Você precisa fazer login ou se cadastrar para assistir aos vídeos!");
        abrirAuthModal();
        return;
    }

    const modal = document.getElementById("videoModal");
    const container = document.getElementById("videoContainer");

    const title = document.getElementById("modalVideoTitle");
    const category = document.getElementById("modalVideoCategory");
    const date = document.getElementById("modalVideoDate");
    const desc = document.getElementById("modalVideoDesc");

    title.innerText = video.titulo || "Sem Título";
    category.innerText = video.categoria || "Geral";
    date.innerText = video.data || "2025";
    desc.innerText = video.descricao || "Nenhuma descrição disponível.";

    container.innerHTML = "";
    let url = video.videoUrl || "";

    if (url.includes("drive.google.com")) {
        url = converterParaEmbedDrive(url);
    }

    if (url.endsWith(".mp4") || url.endsWith(".webm")) {
        container.innerHTML = `<video src="${url}" controls autoplay allowfullscreen></video>`;
    } else {
        container.innerHTML = `<iframe src="${url}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    }

    modal.style.display = "flex";
}

function playHeroVideo() {
    if (videoDestaqueAtual) {
        abrirVideo(videoDestaqueAtual);
    }
}

function fecharVideo() {
    const modal = document.getElementById("videoModal");
    const container = document.getElementById("videoContainer");
    container.innerHTML = "";
    modal.style.display = "none";
}

function abrirTransmissaoAoVivo() {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuarioLogado) {
        alert("Você precisa fazer login para assistir à transmissão Ao Vivo!");
        abrirAuthModal();
        return;
    }

    if (!usuarioLogado.plano || usuarioLogado.plano !== "VIP") {
        abrirVipModal({ titulo: "Transmissão Ao Vivo" });
        return;
    }

    const liveModal = document.getElementById("liveModal");
    const livePlayer = document.getElementById("livePlayer");
    
    if (liveModal && livePlayer) {
        livePlayer.src = "https://player.kick.com/camilatvplus"; 
        liveModal.style.display = "flex";
    } else {
        console.error("Erro: Elementos do modal da live não encontrados no HTML.");
    }
}

function fecharLive() {
    const liveModal = document.getElementById("liveModal");
    const livePlayer = document.getElementById("livePlayer");
    livePlayer.src = "";
    liveModal.style.display = "none";
}

function abrirAuthModal() {
    document.getElementById("authModal").style.display = "flex";
}

function fecharAuthModal() {
    document.getElementById("authModal").style.display = "none";
}

function mudarAba(aba) {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const resetForm = document.getElementById("resetForm");
    const tabLogin = document.getElementById("tabLogin");
    const tabRegister = document.getElementById("tabRegister");
    const feedback = document.getElementById("mensagemFeedback");

    feedback.innerText = "";

    loginForm.style.display = "none";
    registerForm.style.display = "none";
    if (resetForm) resetForm.style.display = "none";

    tabLogin.classList.remove("active");
    tabRegister.classList.remove("active");

    if (aba === 'login') {
        loginForm.style.display = "block";
        tabLogin.classList.add("active");
    } else if (aba === 'register') {
        registerForm.style.display = "block";
        tabRegister.classList.add("active");
    } else if (aba === 'reset') {
        resetForm.style.display = "block";
    }
}

let fotoTempCadastro = "https://i.pinimg.com/1200x/7d/ef/02/7def02d4b167cc8d963c023b4174b360.jpg";

function selecionarAvatarCadastro(url) {
    fotoTempCadastro = url;
    const fileInput = document.getElementById("regAvatarFile");
    if (fileInput) fileInput.value = "";
}

function carregarFotoCadastro(event) {
    const arquivo = event.target.files[0];
    if (!arquivo) return;

    const leitor = new FileReader();
    leitor.onload = function(e) {
        fotoTempCadastro = e.target.result;
        const radios = document.getElementsByName("avatarSelect");
        radios.forEach(radio => radio.checked = false);
    };
    leitor.readAsDataURL(arquivo);
}

function realizarCadastro(event) {
    event.preventDefault();

    const feedback = document.getElementById("mensagemFeedback");
    const lgpdAceito = document.getElementById("regLgpd") ? document.getElementById("regLgpd").checked : true;

    if (!lgpdAceito) {
        feedback.style.color = "#e50914";
        feedback.innerText = "Você precisa aceitar os termos da LGPD para continuar.";
        return;
    }
     
    const nickname = document.getElementById("regNickname").value.trim();
    const contato = document.getElementById("regContato").value.trim();
    const senha = document.getElementById("regPass").value;
    const device = navigator.userAgent;
    const dataAtual = new Date().toISOString();

    const emailAuth = contato.includes("@") ? contato : `${contato.replace(/\D/g, '')}@camilatv.com`;

    auth.createUserWithEmailAndPassword(emailAuth, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            
            db.ref('users/' + user.uid).set({
                uid: user.uid,
                nickname: nickname,
                contato: contato,
                emailAuth: emailAuth,
                senha: senha,
                plano: "FREE",
                avatar: fotoTempCadastro,
                device: device,
                lastAccess: dataAtual,
                createdAt: dataAtual,
                lgpdAceito: true,
                history: [{ action: "cadastro", timestamp: dataAtual, device: device }]
            });

            feedback.style.color = "#38bdf8";
            feedback.innerText = "Cadastro realizado com sucesso! Faça login.";

            setTimeout(() => {
                document.getElementById("registerForm").reset();
                fotoTempCadastro = "https://i.pinimg.com/1200x/7d/ef/02/7def02d4b167cc8d963c023b4174b360.jpg";
                mudarAba('login');
            }, 1500);
        })
        .catch((error) => {
            console.error("Erro no cadastro:", error);
            feedback.style.color = "#e50914";
            feedback.innerText = "Erro ao cadastrar: " + error.message;
        });
}

function onSubmit(token) {
    const formElement = document.getElementById("registerForm");
    if (formElement) {
        const event = new Event('submit', { cancelable: true });
        formElement.dispatchEvent(event);
    }
} 

function realizarLogin(event) {
    event.preventDefault();

    const contatoInput = document.getElementById("loginUser").value.trim();
    const senhaInput = document.getElementById("loginPass").value;
    const feedback = document.getElementById("mensagemFeedback");
    const device = navigator.userAgent;
    const dataAtual = new Date().toISOString();

    const emailAuth = contatoInput.includes("@") ? contatoInput : `${contatoInput.replace(/\D/g, '')}@camilatv.com`;

    auth.signInWithEmailAndPassword(emailAuth, senhaInput)
        .then((userCredential) => {
            const user = userCredential.user;
            const userRef = db.ref('users/' + user.uid);

            userRef.once('value', (snapshot) => {
                const userData = snapshot.val() || {};
                let historico = userData.history || [];
                historico.push({ action: "login", timestamp: dataAtual, device: device });

                userRef.update({
                    lastAccess: dataAtual,
                    device: device,
                    history: historico
                });

                feedback.style.color = "#22c55e";
                feedback.innerText = `Bem-vindo(a), ${userData.nickname || 'Usuário'}!`;

                localStorage.setItem("usuarioLogado", JSON.stringify({ 
                    contato: userData.contato || contatoInput,
                    nickname: userData.nickname || "Usuário",
                    avatar: userData.avatar || "https://i.pinimg.com/1200x/7d/ef/02/7def02d4b167cc8d963c023b4174b360.jpg",
                    plano: userData.plano || "FREE"
                }));

                setTimeout(() => {
                    fecharAuthModal();
                    verificarSessaoUsuario();
                }, 1200);
            });
        })
        .catch((error) => {
            console.error("Erro no login:", error);
            feedback.style.color = "#e50914";
            feedback.innerText = "E-mail/Telefone ou senha incorretos.";
        });
}

function solicitarRedefinicaoFirebase(event) {
    event.preventDefault();
    const emailInput = document.getElementById("resetEmail").value.trim();
    const feedback = document.getElementById("mensagemFeedback");

    if (!emailInput) {
        feedback.style.color = "#e50914";
        feedback.innerText = "Por favor, digite o seu e-mail cadastrado.";
        return;
    }

    if (!emailInput.includes("@") || emailInput.endsWith("@camilatv.com")) {
        feedback.style.color = "#e50914";
        feedback.innerText = "Recuperação disponível apenas para contas cadastradas com e-mail real.";
        return;
    }

    feedback.style.color = "#38bdf8";
    feedback.innerText = "A enviar o link de redefinição...";

    // Configurações do redirecionamento
    const actionCodeSettings = {
        url: 'https://camilatv.vercel.app', // Substitua pelo seu domínio da Vercel
        handleCodeInApp: true
    };

    auth.sendPasswordResetEmail(emailInput, actionCodeSettings)
    .then(() => {
        feedback.style.color = "#22c55e";
        feedback.innerText = "E-mail enviado com sucesso! Verifique a caixa de entrada e o SPAM.";
        
        setTimeout(() => {
            document.getElementById("resetForm").reset();
            mudarAba('login');
        }, 3000);
    })
    .catch((error) => {
        console.error("Erro no envio:", error);
        feedback.style.color = "#e50914";
        feedback.innerText = "Erro ao enviar: " + error.message;
    });
}

function verificarSessaoUsuario() {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    const btnAuth = document.getElementById("userAuthBtn");

    if (!btnAuth) return;

    if (usuarioLogado && usuarioLogado.nickname) {
        btnAuth.className = "user-profile-btn";
        btnAuth.innerHTML = `
            <img src="${usuarioLogado.avatar}" alt="Avatar">
            <span>${usuarioLogado.nickname}</span>
        `;
        btnAuth.onclick = (e) => {
            e.preventDefault();
            abrirProfileModal();
        };
    } else {
        btnAuth.className = "btn-auth-trigger";
        btnAuth.innerText = "Entrar";
        btnAuth.onclick = abrirAuthModal;
    }
}

let fotoTempPerfil = "";

function abrirProfileModal() {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (!usuarioLogado) return;

    document.getElementById("editNickname").value = usuarioLogado.nickname;
    document.getElementById("profileModalAvatar").src = usuarioLogado.avatar;
    
    fotoTempPerfil = usuarioLogado.avatar;

    const radios = document.getElementsByName("editAvatarSelect");
    radios.forEach(radio => {
        radio.checked = (radio.value === usuarioLogado.avatar);
    });

    const fileInput = document.getElementById("editAvatarFile");
    if (fileInput) fileInput.value = "";

    const planoDiv = document.getElementById("profileUserPlano");
    const btnUpgrade = document.getElementById("btnUpgradePerfil");

    if (usuarioLogado.plano === "VIP") {
        planoDiv.innerText = "VIP 👑";
        planoDiv.style.color = "#22c55e";
        if (btnUpgrade) btnUpgrade.style.display = "none";
    } else {
        planoDiv.innerText = "FREE 👤";
        planoDiv.style.color = "#facc15";
        if (btnUpgrade) btnUpgrade.style.display = "inline-block";
    }

    document.getElementById("mensagemProfileFeedback").innerText = "";
    document.getElementById("profileModal").style.display = "flex";
}

function fecharProfileModal() {
    document.getElementById("profileModal").style.display = "none";
}

function selecionarAvatarPredefinido(url) {
    fotoTempPerfil = url;
    document.getElementById("profileModalAvatar").src = url;
    const fileInput = document.getElementById("editAvatarFile");
    if (fileInput) fileInput.value = "";
}

function carregarFotoArquivo(event) {
    const arquivo = event.target.files[0];
    if (!arquivo) return;

    const leitor = new FileReader();
    leitor.onload = function(e) {
        fotoTempPerfil = e.target.result;
        document.getElementById("profileModalAvatar").src = fotoTempPerfil;

        const radios = document.getElementsByName("editAvatarSelect");
        radios.forEach(radio => radio.checked = false);
    };
    leitor.readAsDataURL(arquivo);
}

function atualizarPerfil(event) {
    event.preventDefault();

    const novoNickname = document.getElementById("editNickname").value.trim();
    const feedback = document.getElementById("mensagemProfileFeedback");

    let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    const fotoFinal = fotoTempPerfil || usuarioLogado.avatar;

    usuarioLogado.nickname = novoNickname;
    usuarioLogado.avatar = fotoFinal;
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));

    feedback.style.color = "#22c55e";
    feedback.innerText = "Perfil atualizado com sucesso!";

    verificarSessaoUsuario();

    setTimeout(() => {
        fecharProfileModal();
    }, 1200);
}

function fazerLogout() {
    if (confirm("Deseja realmente sair da sua conta?")) {
        localStorage.removeItem("usuarioLogado");
        fecharProfileModal();
        verificarSessaoUsuario();
    }
}

/// --- LÓGICA DO MODAL E ASSINATURA VIP (MODO TESTE) ---
let videoTentandoAssistir = null;

function abrirVipModal(video) {
 videoTentandoAssistir = video;
 const feedback = document.getElementById("mensagemVipFeedback");
 if (feedback) feedback.innerText = "";
 
 const vipModal = document.getElementById("vipModal");
 if (vipModal) {
 vipModal.style.display = "flex";
 } else {
 console.error("Erro: Elemento #vipModal não encontrado no HTML.");
 }
}

function fecharVipModal() {
 const vipModal = document.getElementById("vipModal");
 if (vipModal) vipModal.style.display = "none";
 videoTentandoAssistir = null;
}

function realizarAssinaturaVIP() {
    const feedback = document.getElementById("mensagemVipFeedback");
    if (feedback) {
        feedback.style.color = "#38bdf8";
        feedback.innerText = "A simular ativação VIP...";
    }

    setTimeout(() => {
        let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
        if (!usuarioLogado) {
            alert("Precisa de iniciar sessão para fazer o upgrade!");
            abrirAuthModal();
            return;
        }

        // Atualiza o plano localmente
        usuarioLogado.plano = "VIP";
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));

        // Atualiza no Realtime Database se o utilizador estiver autenticado
        if (auth.currentUser) {
            db.ref('users/' + auth.currentUser.uid).update({ 
                plano: "VIP",
                atualizadoEm: new Date().toISOString()
            }).then(() => {
                if (feedback) {
                    feedback.style.color = "#22c55e";
                    feedback.innerText = "VIP ativado com sucesso (Modo Teste)!";
                }

                verificarSessaoUsuario();

                setTimeout(() => {
                    fecharVipModal();
                    if (videoTentandoAssistir && videoTentandoAssistir.titulo === "Transmissão Ao Vivo") {
                        abrirTransmissaoAoVivo();
                    } else if (videoTentandoAssistir) {
                        abrirVideo(videoTentandoAssistir);
                    }
                }, 1200);
            }).catch((error) => {
                console.error("Erro no Firebase:", error);
                if (feedback) {
                    feedback.style.color = "#e50914";
                    feedback.innerText = "Erro ao atualizar no banco de dados.";
                }
            });
        } else {
            // Caso o login seja apenas em localStorage durante testes
            if (feedback) {
                feedback.style.color = "#22c55e";
                feedback.innerText = "VIP ativado localmente!";
            }
            verificarSessaoUsuario();
            setTimeout(() => {
                fecharVipModal();
                if (videoTentandoAssistir) abrirVideo(videoTentandoAssistir);
            }, 1200);
        }
    }, 800);
}
// --- LÓGICA DE COMUNIDADES E RESTRIÇÃO VIP POR SALA ---
let salaAtual = "global"; 
let chatListenerAtual = null; 

function abrirChatModal() {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (!usuarioLogado) {
        alert("Precisa de iniciar sessão para aceder ao chat!");
        abrirAuthModal();
        return;
    }

    const chatModal = document.getElementById("chatModal"); // Substitua pelo ID real do modal do chat no seu HTML
    if (chatModal) {
        chatModal.style.display = "flex";
    } else {
        console.error("Erro: Elemento #chatModal não encontrado no HTML.");
    }
}

function fecharChatModal() {
    const chatModal = document.getElementById("chatModal");
    if (chatModal) {
        chatModal.style.display = "none";
    }
}

function mudarSalaChat(sala, btn) {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (sala !== "global") {
        if (!usuarioLogado || usuarioLogado.plano !== "VIP") {
            abrirVipModal({ titulo: "Comunidade Exclusiva VIP" });
            return; 
        }
    }

    salaAtual = sala;

    document.querySelectorAll(".chat-tab").forEach(b => {
        b.style.background = "rgba(255,255,255,0.08)";
        b.style.color = "#94a3b8";
    });
    if (btn) {
        btn.style.background = "#2b39d2";
        btn.style.color = "#fff";
    }

    iniciarEscutaChat();
}

function iniciarEscutaChat() {
    const chatBox = document.getElementById("chatMessages");
    if (!chatBox) return;

    if (chatListenerAtual) {
        db.ref(`chats/${chatListenerAtual}`).off();
    }

    chatListenerAtual = salaAtual;
    chatBox.innerHTML = "<p style='color: #64748b; text-align: center; font-size: 0.9rem;'>Carregando mensagens...</p>";

    db.ref(`chats/${salaAtual}`).limitToLast(50).on('value', (snapshot) => {
        chatBox.innerHTML = "";
        const mensagensObj = snapshot.val();

        if (!mensagensObj) {
            chatBox.innerHTML = `<p style='color: #64748b; text-align: center; font-size: 0.9rem;'>Ainda não há mensagens na sala #${salaAtual}. Seja o primeiro a falar!</p>`;
            return;
        }

        Object.values(mensagensObj).forEach(msg => {
            const msgElement = document.createElement("div");
            msgElement.style.cssText = "margin-bottom: 12px; display: flex; gap: 10px; align-items: flex-start;";
            
            const badgeVip = msg.plano === "VIP" 
                ? `<span style="background: #facc15; color: #000; font-size: 0.65rem; font-weight: bold; padding: 1px 6px; border-radius: 4px;">VIP 👑</span>` 
                : `<span style="background: rgba(255,255,255,0.1); color: #94a3b8; font-size: 0.65rem; padding: 1px 6px; border-radius: 4px;">FREE</span>`;

            msgElement.innerHTML = `
                <img src="${msg.avatar}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover; border: 1px solid #2b39d2;">
                <div style="flex: 1;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <strong style="color: #38bdf8; font-size: 0.9rem;">${msg.nickname}</strong>
                        ${badgeVip}
                    </div>
                    <span style="color: #cbd5e1; font-size: 0.9rem; word-break: break-word;">${msg.texto}</span>
                </div>
            `;
            chatBox.appendChild(msgElement);
        });

        chatBox.scrollTop = chatBox.scrollHeight;
    });
}

function enviarMensagemChat(event) {
    event.preventDefault();

    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (!usuarioLogado) {
        alert("Você precisa fazer login para participar do chat!");
        abrirAuthModal();
        return;
    }

    if (salaAtual !== "global" && (!usuarioLogado.plano || usuarioLogado.plano !== "VIP")) {
        abrirVipModal();
        return;
    }

    const input = document.getElementById("chatInput");
    const texto = input.value.trim();
    if (!texto) return;

    db.ref(`chats/${salaAtual}`).push({
        nickname: usuarioLogado.nickname,
        avatar: usuarioLogado.avatar,
        plano: usuarioLogado.plano || "FREE",
        texto: texto,
        timestamp: new Date().toISOString()
    });

    input.value = "";
}

function pedirCriacaoComunidade() {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    // Verifica se está logado e se é VIP
    if (!usuarioLogado || usuarioLogado.plano !== "VIP") {
        alert("Apenas utilizadores VIP podem criar novas comunidades!");
        abrirVipModal({ titulo: "Criar Comunidade Exclusiva" });
        return;
    }

    let nomeSala = prompt("Digite o nome da nova comunidade (ex: #tour2026):");
    if (!nomeSala) return;

    nomeSala = nomeSala.trim().toLowerCase();
    if (!nomeSala.startsWith("#")) {
        nomeSala = "#" + nomeSala;
    }
    const idSala = nomeSala.replace('#', '').replace(/[^a-z0-9_]/g, "");

    if (!idSala) {
        alert("Nome de sala inválido!");
        return;
    }

    // Regista a nova sala no Firebase
    db.ref(`comunidades/${idSala}`).set({
        criadoPor: usuarioLogado.nickname,
        criadoEm: new Date().toISOString()
    });

    // Procura os elementos pelo ID com segurança
    const lateralCol = document.getElementById("chatSidebar");
    const botaoNovaSala = document.getElementById("btnNovaSala");

    if (lateralCol && botaoNovaSala) {
        const btnSala = document.createElement("button");
        btnSala.className = "chat-tab";
        btnSala.onclick = function() { mudarSalaChat(idSala, this); };
        btnSala.style.cssText = "background: rgba(255,255,255,0.08); color: #94a3b8; border: none; padding: 8px 10px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-weight: bold; text-align: left; width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;";
        btnSala.innerText = `👑 ${nomeSala}`;

        lateralCol.insertBefore(btnSala, botaoNovaSala);
        mudarSalaChat(idSala, btnSala);
        alert(`Comunidade ${nomeSala} criada com sucesso!`);
    } else {
        alert(`Comunidade ${nomeSala} criada com sucesso!`);
        location.reload(); // Recarrega se houver falha no DOM para atualizar a lista
    }
}

// --- PAINEL ADMIN PUXANDO DO FIREBASE ---
function abrirPainelAdmin() {
    const senhaAdmin = prompt("Digite a senha de Administrador:");
    if (senhaAdmin !== "admin123") {
        alert("Senha incorreta!");
        return;
    }

    const tbody = document.getElementById("adminUserTableBody");
    if (!tbody) return;

    tbody.innerHTML = "<tr><td colspan='5' style='padding: 10px; text-align: center; color: #888;'>Carregando do Firebase...</td></tr>";
    document.getElementById("adminModal").style.display = "flex";

    db.ref('users').once('value', (snapshot) => {
        tbody.innerHTML = "";
        const usuariosObj = snapshot.val();

        if (!usuariosObj) {
            tbody.innerHTML = "<tr><td colspan='5' style='padding: 10px; text-align: center; color: #888;'>Nenhum usuário cadastrado na nuvem.</td></tr>";
            return;
        }

        const usuarios = Object.values(usuariosObj);

        usuarios.forEach(u => {
            let dataFormatada = "N/A";
            if (u.createdAt) {
                const dataObj = new Date(u.createdAt);
                dataFormatada = dataObj.toLocaleDateString('pt-PT') + " " + dataObj.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
            }

            const totalAcessos = u.history ? u.history.length : 1;

            tbody.innerHTML += `
                <tr style="border-bottom: 1px solid #334155;">
                    <td style="padding: 10px;">${u.nickname || 'N/A'}</td>
                    <td style="padding: 10px; color: #38bdf8; font-weight: 500;">${u.contato || u.emailAuth || 'N/A'}</td>
                    <td style="padding: 10px; color: #facc15;">${u.senha || '********'}</td>
                    <td style="padding: 10px; color: #cbd5e1;">${dataFormatada}</td>
                    <td style="padding: 10px; color: #22c55e; font-weight: bold;">${totalAcessos}x</td>
                </tr>
            `;
        });
    });
}

function fecharAdminModal() {
    const adminModal = document.getElementById("adminModal");
    if (adminModal) adminModal.style.display = "none";
}

// Atalho F8 para abrir o Admin
document.addEventListener("keydown", (event) => {
    if (event.code === "F8") {
        event.preventDefault();
        abrirPainelAdmin();
    }
});

let cliquesLogo = 0;
let tempoUltimoClique = 0;

function clicarLogoAdmin() {
    const agora = new Date().getTime();
    if (agora - tempoUltimoClique > 1000) {
        cliquesLogo = 1;
    } else {
        cliquesLogo++;
    }
    tempoUltimoClique = agora;

    if (cliquesLogo === 5) {
        cliquesLogo = 0;
        abrirPainelAdmin();
    }
}


// Expõe globalmente
window.abrirAuthModal = abrirAuthModal;
window.fecharAuthModal = fecharAuthModal;
window.fecharVideo = fecharVideo;
window.fecharLive = fecharLive;
window.fecharProfileModal = fecharProfileModal;
window.mudarAba = mudarAba;
window.abrirPainelAdmin = abrirPainelAdmin;
window.fecharAdminModal = fecharAdminModal;
window.clicarLogoAdmin = clicarLogoAdmin;
window.realizarCadastro = realizarCadastro;
window.onSubmit = onSubmit;
window.realizarLogin = realizarLogin;
window.fazerLogout = fazerLogout;
window.atualizarPerfil = atualizarPerfil;
window.selecionarAvatarCadastro = selecionarAvatarCadastro;
window.carregarFotoCadastro = carregarFotoCadastro;
window.solicitarRedefinicaoFirebase = solicitarRedefinicaoFirebase;
window.abrirTransmissaoAoVivo = abrirTransmissaoAoVivo;
window.abrirVipModal = abrirVipModal;
window.fecharVipModal = fecharVipModal;
window.realizarAssinaturaVIP = realizarAssinaturaVIP;
window.abrirChatModal = abrirChatModal;
window.fecharChatModal = fecharChatModal;
window.mudarSalaChat = mudarSalaChat;
window.criarNovaComunidade = criarNovaComunidade;
window.enviarMensagemChat = enviarMensagemChat;
window.pedirCriacaoComunidade = pedirCriacaoComunidade;
