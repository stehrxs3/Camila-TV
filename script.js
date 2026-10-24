
const urlTransmissaoAoVivo = "https://kick.com/camilatvplus";

const listaDeVideos = [
    {
        id: 1,
        titulo: "The Town 2025",
        categoria: "Shows",
        capa: "https://media.canva.com/v2/image-resize/format:PNG/height:800/quality:100/uri:ifs%3A%2F%2FM%2F08b16e42-dc85-4f64-a5ac-024570796acd/watermark:F/width:500?csig=AAAAAAAAAAAAAAAAAAAAAMWTtUO3IQSUflpgjApCTBbxF636qeEJWtQrIk4ftt6O&exp=1792749990&osig=AAAAAAAAAAAAAAAAAAAAAFgFN307Vq-efhMX5bj-MIocer4WLy6PrOT0btmrZZoZ&signer=media-rpc&token=AAIAAU0AJDA4YjE2ZTQyLWRjODUtNGY2NC1hNWFjLTAyNDU3MDc5NmFjZAAAAAABoWg58HA7eICmleVpmZKEX93eD4d_SinB8yVU3SjF_8aum29ukg&x-canva-quality=screen",
        banner: "https://rollingstone.com.br/wp-content/uploads/2025/09/Camila-Cabello-The-Town-2025-foto-Ellen-Artie-02-1536x1024.jpg",
        descricao: "Assista aos melhores momentos das performances no festival Rock in Rio.",
        videoUrl: "https://drive.google.com/file/d/1K6cnGIMG5hp7T-Bzeu6XSEleqmq7fB7m/view?usp=sharing",
        destaque: true
    },
    {
        id: 2,
        titulo: "Summer Sonic 2025",
        categoria: "Shows",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwvQSJ4ypl6knolhMiEE9Yahf1BB7xsImJBvrYG1ksg&s=10",
        banner: "https://www.summersonic.com/wp/wp-content/uploads/2025/08/005-196.jpg?v=1755512287",
        descricao: "Assista aos melhores momentos das performances no festival Summer Sonic.",
        videoUrl: "https://drive.google.com/file/d/1nHYSRQUiakqT6ha8yaJVOeJijjvW7VCp/view?usp=sharing",
        destaque: false
    },
    {
        id: 3,
        titulo: "IHeartRadio Music Festival 2024",
        categoria: "Shows",
        capa: "https://media.gettyimages.com/id/2173487722/pt/foto/las-vegas-nevada-camila-cabello-performs-during-the-2024-iheartradio-music-festival-at-t.jpg?s=612x612&w=0&k=20&c=D9UvxfYY25y2UaYslF6_zUmj2SJp5tp9DvuC9ZoRBqs=",
        banner: "https://media.gettyimages.com/id/2173487877/pt/foto/las-vegas-nevada-camila-cabello-performs-during-the-2024-iheartradio-music-festival-at-t.jpg?s=612x612&w=0&k=20&c=Tm4ZJmkXVqEa2AEQWhH96NxQlvLFJ4urW-voPR2nOVM=",
        descricao: "show pos cabelo loiro",
        videoUrl:"",
        destaque: false
    },
    {
        id: 4,
        titulo: "Glastonbury 2024",
       categoria: "Shows",
       capa: "https://media.gettyimages.com/id/2159846745/pt/foto/glastonbury-england-camila-cabello-performs-on-the-other-stage-during-day-four-of-glastonbury.jpg?s=612x612&w=0&k=20&c=I6U1Io-fy0l_NxpL5TA47PFYf5bk_ggC09l5Ru5x1ng=",
       banner: "https://media.gettyimages.com/id/2159836703/pt/foto/glastonbury-england-camila-cabello-performs-on-the-other-stage-during-day-four-of-glastonbury.jpg?s=612x612&w=0&k=20&c=_4Oj66cMwi0ZwZQozs5qzjLh9o-zET8Ajb9uX0KiRsI=",
       descricao: "mais de blond mila",
       videoUrl: "",
       destaque: false
    },
    {
        id: 5,
        titulo: "Rock in Rio Lisboa 2024",
        categoria: "Shows",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYBYDVs2dYsWoja06ekRWwmUBi7RVGLJiFewt6aVC1A&s=10",
        banner: "https://images.impresa.pt/expresso/2024-06-24-camilacabelo_mundo_diegopadilha_rirlisboa2024_23jun-7269.jpg-ac3c7552/3x2/mw-694",
        descricao: "Rock in rio lisboa.",
        videoUrl: "",
        destaque: false
    },
    {
        id: 6,
        titulo: "Rock in Rio 2022",
        categoria: "Shows",
        capa: "https://media.gettyimages.com/id/1243121400/pt/foto/us-cuban-singer-camila-cabello-performs-on-the-main-stage-of-the-rock-in-rio-music-festival-at.jpg?s=612x612&w=0&k=20&c=KsZ1OTYNbFmsXhIsM2rrfGGTQMEx38LuukhsllYLomw=",
        banner: "https://media.gettyimages.com/id/1422667658/pt/foto/rio-de-janeiro-brazil-camila-cabello-performs-at-the-mundo-stage-during-the-rock-in-rio.jpg?s=612x612&w=0&k=20&c=Q5pZ2vHYsdYBIDJMg43v2xm-dKbMFuhsnsR1zfIQKTE=",
        descricao: "show pos cabelo loiro",
        videoUrl:"",
        destaque: false
    },
    {
        id: 7,
        titulo: "iHeartRadio Wango Tango 2022",
        categoria: "Shows",
        capa:"https://media.gettyimages.com/id/1401261095/pt/foto/carson-california-singer-camila-cabello-performing-at-the-iheartradio-concert-at-wango-tango.jpg?s=612x612&w=0&k=20&c=0bBQ-fmV1_t-RyM1_uBtrY4M_zYdWZBp51PyaJhIApw=",
        banner: "https://media.gettyimages.com/id/1401260356/pt/foto/carson-california-singer-camila-cabello-performing-at-the-iheartradio-concert-at-wango-tango.jpg?s=612x612&w=0&k=20&c=7ricEAvrhF-SlOJZXjL68L95WFKjBEyLDP2HqUPrK8A=",
        descricao: "nao sei oq era familia",
        videoUrl:"https://drive.google.com/file/d/1k90V_-YORgQeT5AD9jsk63cTe2cM6qcr/view?usp=sharing",
        destaque: false
    },
      {
       id: 8, 
       titulo: "New Music Daily Presents 2019",
       categoria: "Shows",
       capa: "https://static.wikia.nocookie.net/karlacamilacabello/images/1/18/New_Music_Daily_Presents_Camila_Cabello.jpg/revision/latest?cb=20191213175642",
       banner: "",
       descricao: "?????",
       videoUrl: "",
       destaque: false
    },
    {
        id: 9,
        titulo: "iHeartRadio JigleBall 2019",
        categoria: "Shows",
        capa: "https://media.gettyimages.com/id/1193821355/pt/foto/new-york-new-york-camila-cabello-performs-onstage-during-iheartradios-z100-jingle-ball-2019.jpg?s=612x612&w=0&k=20&c=SuAV38TgPP8TNVep50ayatwwb9LpwEPnyIMwnmr1wbM=",
        banner: "https://media.gettyimages.com/id/1193821767/pt/foto/new-york-new-york-camila-cabello-performs-onstage-during-iheartradios-z100-jingle-ball-2019.jpg?s=612x612&w=0&k=20&c=K_DrlPmO1IDZecDEAOx3aRu3uXMeLbqHUw-QVuLLNtU=",
        descricao: "Ultimo Show antes pandemia",
        videoUrl: "https://drive.google.com/file/d/1yzCJeVlDfP-_PVKDr9gmb5iNeA2fhiMw/view?usp=sharing",
        destaque: false
    },
    {
        id: 10,
        titulo: "iHeartRadio Festival 2019",
        categoria: "Shows",
        capa: "https://media.gettyimages.com/id/1177003039/pt/foto/las-vegas-nevada-camila-cabello-performs-at-t-mobile-arena-on-september-20-2019-in-las-vegas.jpg?s=612x612&w=0&k=20&c=QlDvVHM0FUt-fvVYJEgn2lGlao3SEeXJLe21cbDr_bU=",
        banner: "https://media.gettyimages.com/id/1176060717/pt/foto/las-vegas-nevada-camila-cabello-performs-onstage-during-the-2019-iheartradio-music-festival-at.jpg?s=612x612&w=0&k=20&c=hWKHIApRxAGL7jRlZR_K0dHq_nKSpFfZuGY2XYTtlvc=",
        descricao: "lolapalloza 2018",
        videoUrl: "https://drive.google.com/file/d/1OQsQkKUuccFD4HNQpBO_b95bZqcIeVY1/view?usp=sharing",
        destaque: false
    },
    { 
       id: 11, 
       titulo: "ACL Festival 2018",
       categoria: "Shows",
       capa: "https://media.gettyimages.com/id/1047403510/pt/foto/austin-texas-camila-cabello-performs-in-concert-during-the-acl-music-festival-at-zilker-park.jpg?s=612x612&w=0&k=20&c=rxV6kBrNbQGxhlODEWO68GlwqmznylUlPapX97bjhVo=",
       banner: "https://media.gettyimages.com/id/1047309006/pt/foto/us-cuban-singer-camila-cabello-performs-onstage-at-the-acl-music-festival-at-zilker-park-in.jpg?s=612x612&w=0&k=20&c=i1731AEGWDq-GUpyatcGt8OBg-XpNceDOpnbHdZ3ABQ=",
       descricao: "",
       videoUrl: "https://drive.google.com/file/d/1wc7av7YEvK7xOFX9YiXjCRilCWJ8PTVh/view?usp=sharing",
       destaque: false    
    }, 
    {
       id: 12, 
       titulo: "Lollapaloza Chicago 2018",
       categoria: "Shows",
       capa: "https://media.gettyimages.com/id/1010046494/pt/foto/chicago-il-camila-cabello-performs-on-day-one-of-lollapalooza-at-grant-park-on-august-2-2018.jpg?s=612x612&w=0&k=20&c=6aZbY6xfLPU8JUzthHvsVPDdg4BxXynm16WRq607UVM=",
       banner: "https://media.gettyimages.com/id/1010046488/pt/foto/chicago-il-camila-cabello-performs-on-day-one-of-lollapalooza-at-grant-park-on-august-2-2018.jpg?s=612x612&w=0&k=20&c=7AzX2q532QVirnkqADm8-Xn3qDPHIt-lp_gjL3Knqmw=",
       descricao: "?????",
       videoUrl: "https://drive.google.com/file/d/17VKNLqaGVyomvgIljSmOXJ6ln2Aej2Bq/view?usp=sharing",
       destaque: false
    },
    { 
       id: 13, 
       titulo: "Isle Of Wight Festival 2018",
       categoria: "Shows",
       capa: "https://media.gettyimages.com/id/982947594/pt/foto/newport-isle-of-wight-camila-cabello-performing-on-the-main-stage-at-seaclose-park-on-june-24.jpg?s=612x612&w=0&k=20&c=gdW8Y3tZFI53ljyA1cTnQ9VCTSGsf9qUrfCy-TdWfsQ=",
       banner: "https://media.gettyimages.com/id/982947560/pt/foto/newport-isle-of-wight-camila-cabello-performing-on-the-main-stage-at-seaclose-park-on-june-24.jpg?s=612x612&w=0&k=20&c=6OwsHNzuCb5VHDppCw6q0J44Sxlg623OkoHaumDXy8E=",
       descricao: "",
       videoUrl: "https://drive.google.com/file/d/1TYQL_bFKxtpRDam_SwDMIpYU0CR8bnFv/view?usp=sharing",
       destaque: false    
    }, 
    { 
       id: 14, 
       titulo: "Summertime Ball 2018",
       categoria: "Shows",
       capa: "https://media.gettyimages.com/id/970340350/pt/foto/camila-cabello-on-stage-during-capitals-summertime-ball-with-vodafone-at-wembley-stadium-london.jpg?s=612x612&w=0&k=20&c=vihNcrU_247D0c0KqqBoRtDiIBxYDlUsrdqQ84btozk=",
       banner: "https://media.gettyimages.com/id/970340112/pt/foto/camila-cabello-on-stage-during-capitals-summertime-ball-with-vodafone-at-wembley-stadium-london.jpg?s=612x612&w=0&k=20&c=WsGghi5o3t0wZ3uvoZysrdIw7QzVMTn-edtQWdoOqqE=",
       descricao: "",
       videoUrl: "https://drive.google.com/file/d/1CnGEpf8eVLbuFSL-dIOa6M396TspLASt/view?usp=sharing",
       destaque: false    
    }, 
    {
       id: 15, 
       titulo: "BBC The Biggest Weekend 2018",
       categoria: "Shows",
       capa: "https://media.gettyimages.com/id/963054434/pt/foto/swansea-wales-camila-cabello-performs-at-bbc-music-biggest-weekend-held-at-singleton-park-on.jpg?s=612x612&w=0&k=20&c=ysLWhX2EgwILolCk1hLYIgyN6DFaPMVGTsRJO5X671w=",
       banner: "https://media.gettyimages.com/id/963001974/pt/foto/swansea-wales-camila-cabello-performs-during-day-2-of-bbc-radio-1s-biggest-weekend-2018-held-at.jpg?s=612x612&w=0&k=20&c=fn4VdBtUD0NbtJkoK9MgBxjMLzVTnzcANdYvti4yI7Q=",
       descricao: "",
       videoUrl: "https://drive.google.com/file/d/15v8Hpnz2qLtEGE3es8nQD699WvzAkDCK/view?usp=sharing",
       destaque: false
    },
    {
       id: 16, 
       titulo: "Lollapaloza Chile 2018",
       categoria: "Shows",
       capa: "",
       banner: "",
       descricao: "?????",
       videoUrl: "",
       destaque: false
    },
    {
       id: 17, 
       titulo: "Lollapaloza Argentina 2018",
       categoria: "Shows",
       capa: "https://www.lanacion.com.ar/resizer/v2/camila-cabello-en-lollapalooza-A3RKSU74QZHNNNRLFC74LVGMJE.jpg?auth=c8c3d0b86f4eed26b8ef5e463b6fafb2441df599dd611ac505de719e41bc1bcb&width=780&height=892&quality=70&smart=true",
       banner: "https://www.billboard.com/wp-content/uploads/media/05-Camila-Cabello-lollapalooza-argentina-march-16-2018-billboard-1548.jpg?w=1280",
       descricao: "?????",
       videoUrl: "https://drive.google.com/file/d/1ewkEbFNBf4swm52PCrUqXtBsg7oWY2Rf/view?usp=sharing",
       destaque: false
    },
     {
       id: 16, 
       titulo: "iHeartRadio Fiesta Latina 2017",
       categoria: "Shows",
       capa: "https://media.gettyimages.com/id/870318566/pt/foto/miami-fl-camila-cabello-performs-onstage-during-the-iheartradio-fiesta-latina-celebrating-our.jpg?s=612x612&w=0&k=20&c=2X-C0tgCPMFgLAp8EourmteU5xc1FZd150JamU0VUuw=",
       banner: "https://media.gettyimages.com/id/870318450/pt/foto/miami-fl-camila-cabello-performs-onstage-during-the-iheartradio-fiesta-latina-celebrating-our.jpg?s=612x612&w=0&k=20&c=UXsrchL1bVKPyfC4xKv5i1phuOzEHGtQK-dzzTj6WcU=",
       descricao: "?????",
       videoUrl: "https://drive.google.com/file/d/1IT2EWR9fjLMKCW1yBToaO7z6Qn1bpO_z/view?usp=sharing",
       destaque: false
    }, 
     {
       id: 17, 
       titulo: "'Bad Things'Fundraising Concert Benefiting The ACLU ",
       categoria: "Performances",
       capa: "https://media.gettyimages.com/id/664384476/pt/foto/los-angeles-ca-camila-cabello-performs-during-zedd-presents-welcome-fundraising-concert.jpg?s=612x612&w=0&k=20&c=VWdFje9ZjSD9YmRFVyrR_xWPA9VEtEIXIH8gguWY0p0=",
       banner: "https://media.gettyimages.com/id/664384664/pt/foto/los-angeles-ca-camila-cabello-and-machine-gun-kelly-perform-during-zedd-presents-welcome.jpg?s=612x612&w=0&k=20&c=eZnjtRtlSD4J9KummQQqH0gAbsHcUFUDpBkPTo2oRok=",
       descricao: "?????",
       videoUrl: "https://drive.google.com/file/d/1yNKMNI7_pxhtmfAFB8AiOo4UxlDlBs8o/view?usp=sharing",
       destaque: false
    },
    {
       id: 18, 
       titulo: "'Bad Things' Radio 1's Live Lounge 2017 ",
       categoria: "Performances",
       capa: "",
       banner: "https://ichef.bbci.co.uk/images/ic/768xn/p04rfdh6.jpg",
       descricao: "?????",
       videoUrl: "https://drive.google.com/file/d/1rHhfRgyt4MSdxlbL-udfESa7xuYXyZY6/view?usp=sharing",
       destaque: false
    },
    {
       id: 19, 
       titulo: "'Crying in the Club' Britain's Got Talent 2017 ",
       categoria: "Performances",
       capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vw9dVJjWm_OVaaSB_jUAJUIuSdEOV3-NAgHxJCRYBg&s=10",
       banner: "",
       descricao: "?????",
       videoUrl: "https://drive.google.com/file/d/1SQ2EThTRidKzJZe1IjmYyGfBaGHB8XMQ/view?usp=sharing",
       destaque: false
    },
    {
       id: 20, 
       titulo: "'Crying in the Club' The Tonight Show 2017 ",
       categoria: "Performances",
       capa: "https://jj-justjared-media.s3.amazonaws.com/wp-content/uploads/2017/06/cabello-sumtweets/thumbs/camila-cabello-sings-summer-tweets-performs-crying-in-the-club-01.JPG",
       banner: "https://cdn01.justjared.com/wp-content/uploads/headlines/2017/06/cabello-summer-tweets.jpg",
       descricao: "?????",
       videoUrl: "https://drive.google.com/file/d/1hXBgVnHjiWqt7eHIJr6xf9zI7Y9TCAje/view?usp=sharing",
       destaque: false
    },
    {
       id: 21, 
       titulo: "'Havana' iHeartRadio Music Awards 2018 ",
       categoria: "Performances",
       capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhMtZjEXZ7Wbsy3m_sZcpgiBcNcSx2rHFAazKwxq-_Q&s=10",
       banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoIrln1lmFjl2IJTgbVFYJGX5XOi15pvAeR7VUyiUJT6qmhvoHq02Ugi8&s=10",
       descricao: "?????",
       videoUrl: "https://drive.google.com/file/d/1b1eTRDz0oU5pLjv4HnPbbWJqLH3jDGe0/view?usp=sharing",
       destaque: false
    }, 
    {
       id: 22, 
       titulo: "'Havana' The Ellen DeGeneres Show 2018 ",
       categoria: "Performances",
       capa: "https://celebmafia.com/wp-content/uploads/2018/01/camila-cabello-at-the-ellen-degeneres-show-in-burbank-0_thumbnail.jpg",
       banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Qui-RGcdB9dgiyEKJrwOgr8cFCcIaCPEKM_yAvzRKQ&s=10",
       descricao: "?????",
       videoUrl: "https://drive.google.com/file/d/1P5v0_d4VBmg-M7oapGAtgBlWglFC3wrB/view?usp=sharing",
       destaque: false
    }, 
    {
       id: 23, 
       titulo: "'Havana' The Global Awards 2020 ",
       categoria: "Performances",
       capa: "https://media.gettyimages.com/id/1205431331/pt/foto/camila-cabello-performs-on-stage-during-the-global-awards-2020-with-very-co-uk-held-at-londons.jpg?s=612x612&w=0&k=20&c=ftN8S9-ZESNPUnlf9wru1x5sLclrufDl0-VTrEJm3I8=",
       banner: "https://media.gettyimages.com/id/1205431321/pt/foto/camila-cabello-performs-on-stage-during-the-global-awards-2020-with-very-co-uk-held-at-londons.jpg?s=612x612&w=0&k=20&c=csW0AUIAm6w6ycRuo_SYB6lLiFc5mj6wCdWQ9irTdTw=",
       descricao: "?????",
       videoUrl: "https://drive.google.com/file/d/1zw-s9hCuKhd97i82d9duzj7MsB_PP8eU/view?usp=sharing",
       destaque: false
    }, 
];

let videoDestaqueAtual = null;


document.addEventListener("DOMContentLoaded", () => {
    configurarDestaque();
    carregarVideos(listaDeVideos);
});

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

        const imagemCapa = video.capa || "https://via.placeholder.com/300x450/222/fff?text=Sem+Capa";

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
    const modal = document.getElementById("videoModal");
    const title = document.getElementById("modalVideoTitle");
    const container = document.getElementById("videoContainer");

    title.innerText = video.titulo;
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
    const liveModal = document.getElementById("liveModal");
    const livePlayer = document.getElementById("livePlayer");
    livePlayer.src = urlTransmissaoAoVivo;
    liveModal.style.display = "flex";
}

function fecharLive() {
    const liveModal = document.getElementById("liveModal");
    const livePlayer = document.getElementById("livePlayer");
    livePlayer.src = "";
    liveModal.style.display = "none";
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        fecharVideo();
        fecharLive();
    }
});
