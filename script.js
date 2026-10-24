
const urlTransmissaoAoVivo = "https://kick.com/camilatvplus";

const listaDeVideos = [
    {
        id: 1,
        titulo: "The Town",
        categoria: "Shows",
        data: " 13 de setembro de 2025",
        capa: "https://media.canva.com/v2/image-resize/format:PNG/height:800/quality:100/uri:ifs%3A%2F%2FM%2F08b16e42-dc85-4f64-a5ac-024570796acd/watermark:F/width:500?csig=AAAAAAAAAAAAAAAAAAAAAG4JoRFG17B9deGRxK3st5ypQJoic0h12tW13DStIQJ0&exp=1792839990&osig=AAAAAAAAAAAAAAAAAAAAAB0DwtTf3nmFr_CTO-4urHjUZ3sEWNtiee53ITVJikJG&signer=media-rpc&token=AAIAAU0AJDA4YjE2ZTQyLWRjODUtNGY2NC1hNWFjLTAyNDU3MDc5NmFjZAAAAAABoW2XOvAW14vHjDc5AXUPuU7a1rOs2W3BwTRIqotn1eMDVI_EkA&x-canva-quality=screen",
        banner: "https://rollingstone.com.br/wp-content/uploads/2025/09/Camila-Cabello-The-Town-2025-foto-Ellen-Artie-02-1536x1024.jpg",
        descricao: "Assista ao show completo de camila cabello no the town, esse sendo a ultima parada da your's c tour.",
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
        descricao: "Assista aos melhores momentos das performances no festival Summer Sonic.",
        videoUrl: "https://drive.google.com/file/d/1nHYSRQUiakqT6ha8yaJVOeJijjvW7VCp/view?usp=sharing",
        destaque: false
    },
    {
        id: 3,
        titulo: "IHeartRadio Music Festival ",
        categoria: "Shows",
        data: "20 de setembro de 2024",
        capa: "https://media.gettyimages.com/id/2173487722/pt/foto/las-vegas-nevada-camila-cabello-performs-during-the-2024-iheartradio-music-festival-at.jpg?s=612x612&w=0&k=20&c=D9UvxfYY25y2UaYslF6_zUmj2SJp5tp9DvuC9ZoRBqs=",
        banner: "https://media.gettyimages.com/id/2173487877/pt/foto/las-vegas-nevada-camila-cabello-performs-during-the-2024-iheartradio-music-festival-at.jpg?s=612x612&w=0&k=20&c=Tm4ZJmkXVqEa2AEQWhH96NxQlvLFJ4urW-voPR2nOVM=",
        descricao: "Show no IHeartRadio Music Festival 2024.",
        videoUrl: "",
        destaque: false
    },
    {
        id: 4,
        titulo: "Glastonbury ",
        categoria: "Shows",
        data: " 29 de junho de 2024",
        capa: "https://media.gettyimages.com/id/2159846745/pt/foto/glastonbury-england-camila-cabello-performs-on-the-other-stage-during-day-four-of-glastonbury.jpg?s=612x612&w=0&k=20&c=I6U1Io-fy0l_NxpL5TA47PFYf5bk_ggC09l5Ru5x1ng=",
        banner: "https://media.gettyimages.com/id/2159836703/pt/foto/glastonbury-england-camila-cabello-performs-on-the-other-stage-during-day-four-of-glastonbury.jpg?s=612x612&w=0&k=20&c=_4Oj66cMwi0ZwZQozs5qzjLh9o-zET8Ajb9uX0KiRsI=",
        descricao: "Apresentação no icônico festival Glastonbury 2024.",
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
        titulo: "Rock in Rio ",
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
        capa: "",
        banner: "",
        descricao: "",
        videoUrl: "",
        destaque: false
    },
    {
        id: 9,
        titulo: "New Music Daily Presents ",
        categoria: "Shows",
        data: "21 de novembro de 2019/20 de dezembro de 2019",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyek7IGOhzvk7QZjo__hr9qDntGPdoeaSd4XZ1Op5K8g&s",
        banner: "",
        descricao: "",
        videoUrl: "https://drive.google.com/file/d/1t4TOMOPPi_Ul-fMknRd1JZaeN40Prdvb/view?usp=sharing",
        destaque: false
    },
    {
        id: 10 ,
        titulo: "Z100/iHeartRadio Jingle Ball ",
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
        titulo: "iHeartRadio Festival ",
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
        descricao: "",
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
        descricao: "",
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
        descricao: "",
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
        descricao: "",
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
        descricao: "",
        videoUrl: "https://drive.google.com/file/d/15v8Hpnz2qLtEGE3es8nQD699WvzAkDCK/view?usp=sharing",
        destaque: false
    }, 
    {
        id: 17,
        titulo: "Lollapalooza Chile ",
        categoria: "Shows",
        data: "17 de março de 2018",
        capa: "",
        banner: "",
        descricao: "",
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
        descricao: "",
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
        descricao: "",
        videoUrl: "https://drive.google.com/file/d/1IT2EWR9fjLMKCW1yBToaO7z6Qn1bpO_z/view?usp=sharing",
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
        
        // AO CLICAR NA CAPA, ABRE O MODAL DO PLAYER COM DETALHES ABAIXO
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
    const container = document.getElementById("videoContainer");

    // Elementos de informação na parte inferior do modal
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
