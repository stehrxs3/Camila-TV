
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
    {
        id: 1,
        titulo: "The Town",
        categoria: "Shows",
        data: "13 de setembro de 2025",
        capa: "https://drive.google.com/file/d/1ID9G0SteQCO3Q3qrJ7tTWO0NL7RQ_VdN/view?usp=sharing",
        banner: "https://rollingstone.com.br/wp-content/uploads/2025/09/Camila-Cabello-The-Town-2025-foto-Ellen-Artie-02-1536x1024.jpg",
        descricao: "Assista ao show completo de Camila Cabello no The Town, sendo a última parada da C,XOXO Tour.",
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
        descricao: "Assista aos melhores momentos das performances no festival Summer Sonic no Japão.",
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
        descricao: "Show eletrizante no iHeartRadio Music Festival 2024.",
        videoUrl: "",
        destaque: false
    },
    {
        id: 4,
        titulo: "Glastonbury",
        categoria: "Shows",
        data: "29 de junho de 2024",
        capa: "https://media.gettyimages.com/id/2159846745/pt/foto/glastonbury-england-camila-cabello-performs-on-the-other-stage-during-day-four-of-glastonbury.jpg?s=612x612&w=0&k=20&c=I6U1Io-fy0l_NxpL5TA47PFYf5bk_ggC09l5Ru5x1ng=",
        banner: "https://media.gettyimages.com/id/2159836703/pt/foto/glastonbury-england-camila-cabello-performs-on-the-other-stage-during-day-four-of-glastonbury.jpg?s=612x612&w=0&k=20&c=_4Oj66cMwi0ZwZQozs5qzjLh9o-zET8Ajb9uX0KiRsI=",
        descricao: "Apresentação icônica no festival Glastonbury 2024.",
        videoUrl: "",
        destaque: false
    },
    {
        id: 5,
        titulo: "Rock in Rio Lisboa",
        categoria: "Shows",
        data: "23 de junho de 2024",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYBYDVs2dYsWoja06ekRWwmUBi7RVGLJiFewt6aVC1A&s=10",
        banner: "https://images.impresa.pt/expresso/2024-06-24-camilacabelo_mundo_diegopadilha_rirlisboa2024_23jun-7269.jpg-ac3c7552/3x2/mw-694",
        descricao: "Show completo no Rock in Rio Lisboa 2024.",
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
        descricao: "Performance histórica no Palco Mundo do Rock in Rio 2022.",
        videoUrl: "",
        destaque: false
    },
    {
        id: 7,
        titulo: "iHeartRadio Wango Tango",
        categoria: "Shows",
        data: "4 de junho de 2022",
        capa: "https://media.gettyimages.com/id/1401261095/pt/foto/carson-california-singer-camila-cabello-performing-at-the-iheartradio-concert-at-wango-tango.jpg?s=612x612&w=0&k=20&c=0bBQ-fmV1_t-RyM1_uBtrY4M_zYdWZBp51PyaJhIApw=",
        banner: "https://media.gettyimages.com/id/1401260356/pt/foto/carson-california-singer-camila-cabello-performing-at-the-iheartradio-concert-at-wango-tango.jpg?s=612x612&w=0&k=20&c=7ricEAvrhF-SlOJZXjL68L95WFKjBEyLDP2HqUPrK8A=",
        descricao: "Performance no festival Wango Tango 2022.",
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
        descricao: "Performance no Global Citizen Live em Nova York.",
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
        descricao: "Apresentação especial para o Apple Music New Music Daily.",
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
        descricao: "Apresentação no Jingle Ball 2019.",
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
        descricao: "Show em Las Vegas no iHeartRadio Festival 2019.",
        videoUrl: "https://drive.google.com/file/d/1OQsQkKUuccFD4HNQpBO_b95bZqcIeVY1/view?usp=sharing",
        destaque: false
    },
    {
        id: 12,
        titulo: "ACL Festival",
        categoria: "Shows",
        data: "7 de outubro de 2018",
        capa: "https://media.gettyimages.com/id/1047445330/pt/foto/austin-tx-camila-cabello-performs-during-the-2018-austin-city-limits-music-festival-at-zilker.jpg?s=612x612&w=0&k=20&c=nY3iPoT_WLFGiwnzDttvhTh_TmPsL2W5FvkSvGE9Avc=",
        banner: "https://media.gettyimages.com/id/1047445328/pt/foto/austin-tx-camila-cabello-performs-during-the-2018-austin-city-limits-music-festival-at-zilker.jpg?s=612x612&w=0&k=20&c=7IOxaq0lDyf7fbETPEZ2r97tc4mG8xoN6XyKBJ-nPao=",
        descricao: "Austin City Limits Music Festival 2018.",
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
        descricao: "Lollapalooza Chicago 2018 no Grant Park.",
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
        descricao: "Isle of Wight Festival 2018.",
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
        descricao: "Capital's Summertime Ball no Wembley Stadium.",
        videoUrl: "https://drive.google.com/file/d/1CnGEpf8eVLbuFSL-dIOa6M396TspLASt/view?usp=sharing",
        destaque: false
    },
    {
        id: 16,
        titulo: "BBC The Biggest Weekend",
        categoria: "Shows",
        data: "27 de maio de 2018",
        capa: "https://media.gettyimages.com/id/962996256/pt/foto/swansea-wales-camila-cabello-performs-during-day-2-of-bbc-radio-1s-biggest-weekend-2018-held-at.jpg?s=612x612&w=0&k=20&c=gtJ8FfYJ4qDDlR12hDG6FkaeMMbLHAy_lcz6y_0bD-o=",
        banner: "https://media.gettyimages.com/id/963001974/pt/foto/swansea-wales-camila-cabello-performs-during-day-2-of-bbc-radio-1s-biggest-weekend-2018-held-at.jpg?s=612x612&w=0&k=20&c=fn4VdBtUD0NbtJkoK9MgBxjMLzVTnzcANdYvti4yI7Q=",
        descricao: "BBC Radio 1's Biggest Weekend em Swansea.",
        videoUrl: "https://drive.google.com/file/d/15v8Hpnz2qLtEGE3es8nQD699WvzAkDCK/view?usp=sharing",
        destaque: false
    },
    {
        id: 17,
        titulo: "Lollapalooza Chile",
        categoria: "Shows",
        data: "17 de março de 2018",
        capa: "",
        banner: "",
        descricao: "Lollapalooza Chile 2018.",
        videoUrl: "",
        destaque: false
    },
    {
        id: 18,
        titulo: "Lollapalooza Argentina",
        categoria: "Shows",
        data: "16 de março de 2018",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfCS8nhSn5NEHWeW2kxb1Pm7DOpmTYk4MXUdt9Iac--w&s=10",
        banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFyFThZuX9A92iKCnGXm1XN_8s0m1VAqMCPKvB0UQfg&s=10",
        descricao: "Lollapalooza Argentina 2018.",
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
        videoUrl: "https://drive.google.com/file/d/1IT2EWR9fjLMKCW1yBToaO7z6Qn1bpO_z/view?usp=sharing",
        destaque: false
    },
        
         {
        id: 20 ,
        titulo: " MTV Europe Music Awards",
        categoria: "Performances",
        data: "12 de novembro de 2017",
        capa: "",
        banner: "",
        descricao: "",
        videoUrl: "",
        destaque: false
    },
        {
        id: 21 ,
        titulo: "'Havana' LOS40 Music Awards",
        categoria: "Performances",
        data: "10 de novembro de 2017",
        capa: "https://media.gettyimages.com/id/873503030/photo/madrid-spain-camila-cabello-attends-40-principales-awards-2017-on-november-10-2017-in-madrid.jpg?s=612x612&w=0&k=20&c=V3rg6rZDXdcv1YMurA4AtQ_YKclowXMzFNO9EKGo4wQ=",
        banner: "",
        descricao: "",
        videoUrl: "",
        destaque: false
    },
       {
        id:  22,
        titulo: "'Havana' Latin American Music Awards (Latin AMAs)",
        categoria: "Performances",
        data: " 26 de outubro de 2017",
        capa: "https://media.gettyimages.com/id/867050180/photo/hollywood-ca-camila-cabello-performs-onstage-during-the-2017-latin-american-music-awards-at.jpg?s=612x612&w=0&k=20&c=dQ79t4qT7DySpItaHIRV4VAxH8Y7WQcxXHblJ1uoCvA=",
        banner: "https://media.gettyimages.com/id/867190500/photo/2017-latin-american-music-awards-show-pictured-camila-cabello-performing-at-the-dolby-theatre.jpg?s=612x612&w=0&k=20&c=qe6LPSnskS-H1LzXVy3gv10x00eZ3_O9SzeAldt-UFc=",
        descricao: "Camila Cabello apresentou uma versão em Spanglish do seu sucesso mundial Havana no Latin American Music Awards (Latin AMAs)",
        videoUrl: "https://drive.google.com/file/d/1PffQJoAzHtYomRI5-rHk4UNB8V8HoVcT/view?usp=sharing",
        destaque: false
    },    
        {
        id: 23,
        titulo: "'Say You Won't Let Go' BBC Radio 1’s Teen Awards ",
        categoria: "Performances",
        data: "22 de outubro de 2017",
        capa: "https://media.gettyimages.com/id/865050632/photo/london-england-camila-cabello-performs-at-the-bbc-radio-1-teen-awards-2017-at-wembley-arena-on.jpg?s=612x612&w=0&k=20&c=Wp5acKJWsLSIh7adcWeitK4377cb6K63HX_7DZTFEFM=",
        banner: "https://media.gettyimages.com/id/865047344/photo/london-england-james-arthur-and-camila-cabello-perform-on-stage-at-the-bbc-radio-1-teen-awards.jpg?s=612x612&w=0&k=20&c=NfSqP8Up8FhV_TlGF0wnBXOk1NTDCnCFbpkOVbWD7mE=",
        descricao: "",
        videoUrl: "https://drive.google.com/file/d/1ikMQRPb54AYcjfx4J6jKY47TEZ-YjXB2/view?usp=sharing",
        destaque: false
    },
        {
        id: 24,
        titulo: "'Havana'  BBC Radio 1’s Teen Awards ",
        categoria: "Performances",
        data: "22 de outubro de 2017",
        capa: "https://media.gettyimages.com/id/865050982/photo/london-england-camila-cabello-performs-at-the-bbc-radio-1-teen-awards-2017-at-wembley-arena-on.jpg?s=612x612&w=0&k=20&c=leO3H6aYjH0KHjyp5KqogMuwK6xgp1FTOFV4Qg6swmU=",
        banner: "https://media.gettyimages.com/id/865050608/photo/london-england-camila-cabello-performs-at-the-bbc-radio-1-teen-awards-2017-at-wembley-arena-on.jpg?s=612x612&w=0&k=20&c=QII7YgRtBNDQ625sfLPRfVShZtMQ48wVZfvxUYFFvmA=",
        descricao: "",
        videoUrl: "",
        destaque: false
    },
      {
        id:  25,
        titulo: "'Havana','Crying in the Club' e 'Bad Things' Today Show ",
        categoria: "Performances",
        data: "29 de setembro de 2017",
        capa: "https://media.gettyimages.com/id/855530056/pt/foto/new-york-ny-camila-cabello-performs-onstage-wearing-an-aclu-ribbon-on-nbcs-today-at-rockefeller.jpg?s=612x612&w=0&k=20&c=cdfb31XZBHnudHtkifHBGmD4u4pSKbJZSC_uE8D-J2A=",
        banner: "https://media.gettyimages.com/id/855541408/pt/foto/new-york-ny-camila-cabello-performs-onstage-showing-her-support-for-daca-while-wearing-an-aclu.jpg?s=612x612&w=0&k=20&c=7KzQPFf8hC-M0B7Vu7U05WUwxUDHaM4qm-LwPlvW8ts=",
        descricao: "Durante a performance de “Havana”, a cantora dedicou o momento aos jovens beneficiários do programa DACA (conhecidos como DREAMers) e fez um discurso em defesa de uma América inclusiva",
        videoUrl: "https://drive.google.com/file/d/1elxXcPt3ICPEehvmz-O8ipbOhUBCnXzp/view?usp=sharing",
        destaque: false
    },
      {
        id: 26,
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
        id: 27,
        titulo: "'Crying in the Club' The Tonight Show Starring Jimmy Fallon",
        categoria: "Performances",
        data: "22 de junho de 2017",
        capa: "https://media.gettyimages.com/id/699981094/pt/foto/the-tonight-show-starring-jimmy-fallon-episode-0698-pictured-musical-guest-camila-cabello.jpg?s=612x612&w=0&k=20&c=L4ZRTDjGAdb6Y4J1jbeXO2ttyhQ_ovmPqlQJeYQTiUI=",
        banner: "https://media.gettyimages.com/id/699980704/pt/foto/the-tonight-show-starring-jimmy-fallon-episode-0698-pictured-musical-guest-camila-cabello.jpg?s=612x612&w=0&k=20&c=4kGl-9RZWJAdtkvv1Tg3AvOPImmwvbuEAHA5KfZRTAw=",
        descricao: "Camila Cabello apresentou o seu single solo de estreia no programa The Tonight Show Starring Jimmy Fallon",
        videoUrl: "https://drive.google.com/file/d/1hXBgVnHjiWqt7eHIJr6xf9zI7Y9TCAje/view?usp=sharing",
        destaque: false
    },
     {
        id: 28,
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
        id: 29,
        titulo: "'Crying in the Club' Britain's Got Talent",
        categoria: "Performances",
        data: "31 de maio de 2017",
        capa: "https://celebmafia.com/wp-content/uploads/2017/06/camila-cabello-performs-at-britain-s-got-talent-in-london-05-30-2017-1.jpg",
        banner: "",
        descricao: "Fazendo sua estreia solo na parada britânica, ‘Crying in the Club’ estreou em 48º lugar no Official UK Charts",
        videoUrl: "https://drive.google.com/file/d/1SQ2EThTRidKzJZe1IjmYyGfBaGHB8XMQ/view?usp=sharing",
        destaque: false
    },
    {
        id: 30,
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
        id: 31,
        titulo: "'Hey Ma' MTV Movie & TV Awards",
        categoria: "Performances",
        data: " 7 de maio de 2017",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvFrj0trYCW8xDekFNNK0MAo-nS6l8MXVuwEbBlPhRow&s=10",
        banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmne6_8GR9RhuVMRbpKGT1f-En5M-g9q9kW4rCYVv8lA&s=10",
        descricao: "Camila Cabello, Pitbull e J Balvin se apresentaram juntos no palco cantando o hit “Hey Ma”, parte da trilha sonora do filme Velozes e Furiosos 8.",
        videoUrl: "https://drive.google.com/file/d/1-2br99MXlobLI5aO8st-ztCbG4EdUYdO/view?usp=sharing",
        destaque: false
    },
   {
        id: 32,
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
        id: 33,
        titulo: "'Man In The Mirror' ACLU Benefit Concert",
        categoria: "Performances",
        data: "3 de abril de 2017",
        capa: "https://media.gettyimages.com/id/664864660/photo/los-angeles-ca-singer-camila-cabello-performs-onstage-during-the-welcome-fundraising-concert.jpg?s=612x612&w=0&k=20&c=7NEn8BIIhEU3gzx6eSvU4QcyQf38TzePN8j4foAQPBs=",
        banner: "https://assets.teenvogue.com/photos/58e3c0799093dd2fbd6babe3/16:9/w_1920,c_limit/GettyImages-664471336.jpg",
        descricao: "Foi a primeira apresentação solo de Camila Cabello após sua saída do grupo Fifth Harmony, na qual ela brilhou cantando um cover de 'Man in the Mirror', clássico de Michael Jackson, acompanhada por uma banda completa e coro.",
        videoUrl: "https://drive.google.com/file/d/1n9Lc9nbLu0MhZawvlQ2FsG0r1ru3R4xC/view?usp=sharing",
        destaque: false
    },
      {
        id: 34,
        titulo: "'Bad Things' Nickelodeon Kids' Choice Awards",
        categoria: "Performances",
        data: " 11 de março de 2017",
        capa: "https://media.gettyimages.com/id/652257744/pt/foto/los-angeles-ca-singer-camila-cabello-and-rapper-machine-gun-kelly-perform-onstage-at.jpg?s=612x612&w=0&k=20&c=J0wxeuzRx0e-wldD_wqYVCTej4JOgNSyoID78N8Wy-w=",
        banner: "https://media.gettyimages.com/id/652234870/pt/foto/los-angeles-ca-singer-camila-cabello-and-rapper-machine-gun-kelly-perform-onstage-at.jpg?s=612x612&w=0&k=20&c=l1RasQeUSjEN3uclzdiUlx8i_oDPfOHtsw44dZr4vJU=",
        descricao: "Essa foi a primeira aparição pública de Camila Cabello no mesmo evento que o seu antigo grupo, o Fifth Harmony, logo após a sua saída oficial da banda.",
        videoUrl: "https://drive.google.com/file/d/1PaZCg2O-eul3qXPhh7B_aMH_-X8TkxUc/view?usp=sharing",
        destaque: false
    },
    {
       id: 35,
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
        id: 36,
        titulo: "'Bad Things' BBC Radio 1 Live Lounge",
        categoria: "Performances",
        data: " 31 de janeiro de 2017",
        capa: "",
        banner: "https://ichef.bbci.co.uk/images/ic/640x360/p04rf43v.jpg",
        descricao: "Eles tocaram uma versão acústica e stripped-down (simplificada/despojada) do hit em parceria, acompanhados por um quarteto de cordas e pela banda completa de MGK. Na época, o single alcançou a 4ª posição na Billboard Hot 100.",
        videoUrl: "https://drive.google.com/file/d/1rHhfRgyt4MSdxlbL-udfESa7xuYXyZY6/view?usp=sharing",
        destaque: false
    },
   {
        id: 37,
        titulo: "'Bad Things' The Ellen DeGeneres Show",
        categoria: "Performances",
        data: " 30 de janeiro de 2017",
        capa: "https://jj-justjared-media.s3.amazonaws.com/wp-content/uploads/2017/01/cabello-ellen/thumbs/camila-cabello-machine-gun-kelly-ellen-show-04.JPG",
        banner: "https://www.hotnewhiphop.com/i/v1/765x430-cover-81-auto/cover/39/01/1485810139_4f6ea6773b19a5d7fed06904c01a5473.jpg",
        descricao: "Machine Gun Kelly e Camila Cabello apresentaram o hit “Bad Things” no programa The Ellen DeGeneres Show ,Embora ela já tenha tocado a música antes, esta é sua primeira aparição na TV desde que deixou o grupo em dezembro.",
        videoUrl: "https://drive.google.com/file/d/1wvYujATwFv_th5byzQ7-itPIesa9TqJH/view?usp=sharing",
        destaque: false
    },
    
      {
        id: 38 ,
        titulo: "",
        categoria: "Performances",
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
