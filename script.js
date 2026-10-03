
const urlTransmissaoAoVivo = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

const listaDeVideos = [
    {
        id: 3,
        titulo: "Rock in Rio 2022",
        categoria: "Shows",
        capa: "https://media.gettyimages.com/id/1243121400/pt/foto/us-cuban-singer-camila-cabello-performs-on-the-main-stage-of-the-rock-in-rio-music-festival-at.jpg?s=612x612&w=0&k=20&c=KsZ1OTYNbFmsXhIsM2rrfGGTQMEx38LuukhsllYLomw=",
        banner: "https://media.gettyimages.com/id/1422667658/pt/foto/rio-de-janeiro-brazil-camila-cabello-performs-at-the-mundo-stage-during-the-rock-in-rio.jpg?s=612x612&w=0&k=20&c=Q5pZ2vHYsdYBIDJMg43v2xm-dKbMFuhsnsR1zfIQKTE=",
        descricao: "Assista aos melhores momentos das performances no festival Rock in Rio.",
        videoUrl: "https://drive.google.com/file/d/1JWNVyIacFmMOfSZ_cUZQIndM4QgSLbxl/view?usp=sharing",
        destaque: false
    },
    {
        id: 9,
        titulo: "Summer Sonic 2025",
        categoria: "Shows",
        capa: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80",
        banner: "https://www.summersonic.com/wp/wp-content/uploads/2025/08/005-196.jpg?v=1755512287",
        descricao: "Assista aos melhores momentos das performances no festival Summer Sonic.",
        videoUrl: "https://drive.google.com/file/d/1LjeO47v5gq0vu2gltbk_G0HQBuOAalCl/view?usp=sharing",
        destaque: false
    },
    {
        id: 1,
        titulo: "The Town 2025",
        categoria: "Shows",
        capa: "https://s2-gshow.glbimg.com/ucNEzQ54aaImFHMN6Mefx-qUcSE=/0x0:1440x1920/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2025/J/6/EkvVnBS9m21to89kBRsQ/549377481-18544454284012900-5440134041403180128-n.jpg",
        banner: "https://rollingstone.com.br/wp-content/uploads/2025/09/Camila-Cabello-The-Town-2025-foto-Ellen-Artie-02-1536x1024.jpg",
        descricao: "Assista ao show completo do festival The Town 2025.",
        videoUrl: "https://drive.google.com/file/d/1Vg6XHtr-xStwtK6o0pdg7YmDF_EtEr2x/view?usp=sharing",
        destaque: true
    },
    {
        id: 4,
        titulo: "Bastidores & Entrevista Exclusiva",
        categoria: "Entrevistas",
        capa: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500&q=80",
        banner: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1200&q=80",
        descricao: "Conversa aberta sobre carreira, projetos futuros e criação artística.",
        videoUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczOKokZ5jV1pgs_LfmHxUxSJHyLTNtwln4-mrbLeFuGbkjmf04tPk4RKCw=w783-h438-s-k-no-gm?authuser=0",
        destaque: false
    },
    {
        id: 5,
        titulo: "Vlog de Turnê pela Europa",
        categoria: "Vlogs",
        capa: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=500&q=80",
        banner: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&q=80",
        descricao: "Acompanhe o dia a dia na estrada durante a turnê internacional.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
        destaque: false
    },
    {
        id: 6,
        titulo: "IHeartRadio Music Festival 2024",
        categoria: "Shows",
        capa: "https://media.gettyimages.com/id/2173487722/pt/foto/las-vegas-nevada-camila-cabello-performs-during-the-2024-iheartradio-music-festival-at-t.jpg?s=612x612&w=0&k=20&c=D9UvxfYY25y2UaYslF6_zUmj2SJp5tp9DvuC9ZoRBqs=",
        banner: "https://media.gettyimages.com/id/2173487877/pt/foto/las-vegas-nevada-camila-cabello-performs-during-the-2024-iheartradio-music-festival-at-t.jpg?s=612x612&w=0&k=20&c=Tm4ZJmkXVqEa2AEQWhH96NxQlvLFJ4urW-voPR2nOVM=",
        descricao: "show pos cabelo loiro",
        videoUrl:"https://drive.google.com/file/d/1OtCC_oCNlFlOyWktmldKBc5k1bPGj--i/view?usp=sharing",
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
        titulo: "Summertime Ball 2018",
        categoria: "Shows",
        capa: "https://media.gettyimages.com/id/970340350/pt/foto/camila-cabello-on-stage-during-capitals-summertime-ball-with-vodafone-at-wembley-stadium-london.jpg?s=612x612&w=0&k=20&c=vihNcrU_247D0c0KqqBoRtDiIBxYDlUsrdqQ84btozk=",
        banner: "https://media.gettyimages.com/id/970339910/pt/foto/camila-cabello-on-stage-during-capitals-summertime-ball-with-vodafone-at-wembley-stadium-london.jpg?s=612x612&w=0&k=20&c=X9lQwVbSAbVEgpEDCtZNfByrjN0UcH2WjQlXwzj_nkY=",
        descricao: "terninho azul de nbts",
        videoUrl: "https://drive.google.com/file/d/12ibBC8hM_nCjcsx0fCs_UIhC3or49Wqy/view?usp=drive_link",
        destaque: false
    },
    {
        id: 2,
        titulo: "Lolapalloza Argentina 2018",
        categoria: "Shows",
        capa: "https://media.gettyimages.com/id/1085989126/pt/foto/chicago-il-camila-cabello-performs-on-day-one-of-lollapalooza-at-grant-park-on-august-2-2018.jpg?s=612x612&w=0&k=20&c=EyyWSxjuOtAIICI3ssMKFlUZhgCNhTQ-yWhnpbWDlTI=",
        banner: "https://media.gettyimages.com/id/1085989152/pt/foto/chicago-il-camila-cabello-performs-on-day-one-of-lollapalooza-at-grant-park-on-august-2-2018.jpg?s=612x612&w=0&k=20&c=B8eVEbISsmKC2i77zzVAdLW5AhenHSRxKlC-72rnTbc=",
        descricao: "lolapalloza 2018",
        videoUrl: "https://drive.google.com/file/d/16qBvKPA277VtQJSxcBzksMS_zdmZn8HW/view?usp=drive_link",
        destaque: false
    }
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
    document.getElementById("heroBanner").style.backgroundImage = `linear-gradient(to right, rgba(20,20,20,0.9), rgba(20,20,20,0.2)), url('${destaque.banner}')`;
    document.getElementById("heroTitle").innerText = destaque.titulo || "Sem título";
    document.getElementById("heroDesc").innerText = destaque.descricao || "";
    document.getElementById("heroBadge").innerText = destaque.categoria || "Destaque";
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

    // Limpa o conteúdo para parar a execução do áudio/vídeo
    container.innerHTML = "";
    modal.style.display = "none";
}

/* Funções para Transmissão Ao Vivo */
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