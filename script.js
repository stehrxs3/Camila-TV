
const urlTransmissaoAoVivo = "https://kick.com/camilatvplus";

const listaDeVideos = [
    {
        id: 1,
        titulo: "The Town 2025",
        categoria: "Shows",
        capa: "https://s2-gshow.glbimg.com/ucNEzQ54aaImFHMN6Mefx-qUcSE=/0x0:1440x1920/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2025/J/6/EkvVnBS9m21to89kBRsQ/549377481-18544454284012900-5440134041403180128-n.jpg",
        banner: "https://rollingstone.com.br/wp-content/uploads/2025/09/Camila-Cabello-The-Town-2025-foto-Ellen-Artie-02-1536x1024.jpg",
        descricao: "Assista aos melhores momentos das performances no festival Rock in Rio.",
        videoUrl: "https://drive.google.com/file/d/1K6cnGIMG5hp7T-Bzeu6XSEleqmq7fB7m/view?usp=drive_link",
        destaque: false
    },
    {
        id: 2,
        titulo: "Summer Sonic 2025",
        categoria: "Shows",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwvQSJ4ypl6knolhMiEE9Yahf1BB7xsImJBvrYG1ksg&s=10",
        banner: "https://www.summersonic.com/wp/wp-content/uploads/2025/08/005-196.jpg?v=1755512287",
        descricao: "Assista aos melhores momentos das performances no festival Summer Sonic.",
        videoUrl: "https://drive.google.com/file/d/1LjeO47v5gq0vu2gltbk_G0HQBuOAalCl/view?usp=sharing",
        destaque: false
    },
    {
        id: 3,
        titulo: "IHeartRadio Music Festival 2024",
        categoria: "Shows",
        capa: "https://media.gettyimages.com/id/2173487722/pt/foto/las-vegas-nevada-camila-cabello-performs-during-the-2024-iheartradio-music-festival-at-t.jpg?s=612x612&w=0&k=20&c=D9UvxfYY25y2UaYslF6_zUmj2SJp5tp9DvuC9ZoRBqs=",
        banner: "https://media.gettyimages.com/id/2173487877/pt/foto/las-vegas-nevada-camila-cabello-performs-during-the-2024-iheartradio-music-festival-at-t.jpg?s=612x612&w=0&k=20&c=Tm4ZJmkXVqEa2AEQWhH96NxQlvLFJ4urW-voPR2nOVM=",
        descricao: "show pos cabelo loiro",
        videoUrl:"https://drive.google.com/file/d/1OtCC_oCNlFlOyWktmldKBc5k1bPGj--i/view?usp=sharing",
        destaque: false
    },
    {
        id: 4,
        titulo: "Glastonbury 2024",
       categoria: "Shows",
       capa: "https://media.gettyimages.com/id/2159846745/pt/foto/glastonbury-england-camila-cabello-performs-on-the-other-stage-during-day-four-of-glastonbury.jpg?s=612x612&w=0&k=20&c=I6U1Io-fy0l_NxpL5TA47PFYf5bk_ggC09l5Ru5x1ng=",
       banner: "https://media.gettyimages.com/id/2159836703/pt/foto/glastonbury-england-camila-cabello-performs-on-the-other-stage-during-day-four-of-glastonbury.jpg?s=612x612&w=0&k=20&c=_4Oj66cMwi0ZwZQozs5qzjLh9o-zET8Ajb9uX0KiRsI=",
       descricao: "mais de blond mila",
       videoUrl: "https://drive.google.com/file/d/1kD4gzfJpWgEKR0F7XRjyhrnMPruZ6wvK/view?usp=sharing",
       destaque: false
    },
    {
        id: 5,
        titulo: "Rock in Rio Lisboa 2024",
        categoria: "Shows",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYBYDVs2dYsWoja06ekRWwmUBi7RVGLJiFewt6aVC1A&s=10",
        banner: "https://images.impresa.pt/expresso/2024-06-24-camilacabelo_mundo_diegopadilha_rirlisboa2024_23jun-7269.jpg-ac3c7552/3x2/mw-694",
        descricao: "Rock in rio lisboa.",
        videoUrl: "https://drive.google.com/file/d/1uV1MaLJRLKefxjGB3XMx1tKDh7yZcEi7/view?usp=drive_link",
        destaque: false
    },
    {
        id: 6,
        titulo: "Rock in Rio 2022",
        categoria: "Shows",
        capa: "https://media.gettyimages.com/id/1243121400/pt/foto/us-cuban-singer-camila-cabello-performs-on-the-main-stage-of-the-rock-in-rio-music-festival-at.jpg?s=612x612&w=0&k=20&c=KsZ1OTYNbFmsXhIsM2rrfGGTQMEx38LuukhsllYLomw=",
        banner: "https://media.gettyimages.com/id/1422667658/pt/foto/rio-de-janeiro-brazil-camila-cabello-performs-at-the-mundo-stage-during-the-rock-in-rio.jpg?s=612x612&w=0&k=20&c=Q5pZ2vHYsdYBIDJMg43v2xm-dKbMFuhsnsR1zfIQKTE=",
        descricao: "show pos cabelo loiro",
        videoUrl:"https://drive.google.com/file/d/1JWNVyIacFmMOfSZ_cUZQIndM4QgSLbxl/view?usp=sharing",
        destaque: false
    },
    {
        id: 7,
        titulo: "iHeartRadio Wango Tango 2022",
        categoria: "Shows",
        capa:"https://media.gettyimages.com/id/1401261095/pt/foto/carson-california-singer-camila-cabello-performing-at-the-iheartradio-concert-at-wango-tango.jpg?s=612x612&w=0&k=20&c=0bBQ-fmV1_t-RyM1_uBtrY4M_zYdWZBp51PyaJhIApw=",
        banner: "https://media.gettyimages.com/id/1401260356/pt/foto/carson-california-singer-camila-cabello-performing-at-the-iheartradio-concert-at-wango-tango.jpg?s=612x612&w=0&k=20&c=7ricEAvrhF-SlOJZXjL68L95WFKjBEyLDP2HqUPrK8A=",
        descricao: "nao sei oq era familia",
        videoUrl:"https://drive.google.com/file/d/1YXVjpEy1qBnQWc5SFd0GqHBQrhbsKvg-/view?usp=drive_link",
        destaque: false
    },
    {
        id: 8,
        titulo: "iHeartRadio Jigle Ball 2019",
        categoria: "Shows",
        capa: "https://media.gettyimages.com/id/1193821355/pt/foto/new-york-new-york-camila-cabello-performs-onstage-during-iheartradios-z100-jingle-ball-2019.jpg?s=612x612&w=0&k=20&c=SuAV38TgPP8TNVep50ayatwwb9LpwEPnyIMwnmr1wbM=",
        banner: "https://media.gettyimages.com/id/1193821767/pt/foto/new-york-new-york-camila-cabello-performs-onstage-during-iheartradios-z100-jingle-ball-2019.jpg?s=612x612&w=0&k=20&c=K_DrlPmO1IDZecDEAOx3aRu3uXMeLbqHUw-QVuLLNtU=",
        descricao: "Ultimo Show antes pandemia",
        videoUrl: "https://drive.google.com/file/d/1Fw7tp1C1e9UwjgIe3FXo7AifFKkPxJrB/view?usp=drive_link",
        destaque: false
    },
    {
        id: 9,
        titulo: "iHeartRadio Festival 2019",
        categoria: "Shows",
        capa: "https://media.gettyimages.com/id/1177003039/pt/foto/las-vegas-nevada-camila-cabello-performs-at-t-mobile-arena-on-september-20-2019-in-las-vegas.jpg?s=612x612&w=0&k=20&c=QlDvVHM0FUt-fvVYJEgn2lGlao3SEeXJLe21cbDr_bU=",
        banner: "https://media.gettyimages.com/id/1176060717/pt/foto/las-vegas-nevada-camila-cabello-performs-onstage-during-the-2019-iheartradio-music-festival-at.jpg?s=612x612&w=0&k=20&c=hWKHIApRxAGL7jRlZR_K0dHq_nKSpFfZuGY2XYTtlvc=",
        descricao: "lolapalloza 2018",
        videoUrl: "https://drive.google.com/file/d/147hXAzlBEXO56tb6YbRFUW7CIVplSBtI/view?usp=sharing",
        destaque: false
    },
    { 
       id: 10, 
       titulo: "Summertime Ball 2018",
       categoria: "Shows",
       capa: "",
       banner: "",
       descricao: "",
       videoUrl: "",
       destaque: false    
    }, 
    { 
       id: 11, 
       titulo: "Lolapalloza Chile 2018",
       categoria: "Shows",
       capa: "",
       banner: "",
       descricao: "",
       videoUrl: "",
       destaque: false    
    }, 
    { 
       id: 12, 
       titulo: "Lolapalloza Argentina 2018",
       categoria: "Shows",
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