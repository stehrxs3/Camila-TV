const urlTransmissaoAoVivo = "https://kick.com/camilatvplus";

const listaDeVideos = [
    {
        id: 1,
        titulo: "The Town",
        categoria: "Shows",
        data: " 13 de setembro de 2025",
        capa: "https://drive.google.com/file/d/1ID9G0SteQCO3Q3qrJ7tTWO0NL7RQ_VdN/view?usp=sharing",
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
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rqjw7FC8dh-RgxdeOT3vnFRpVHHax0XPP-h-qcNS0w&s=10",
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
        capa: "https://media.gettyimages.com/id/1342508806/pt/foto/new-york-new-york-camila-cabello-performs-onstage-during-global-citizen-live-new-york-on.jpg?s=612x612&w=0&k=20&c=27pfpGkkTwixJwCUIoALvhH99Gfb6wcP3frKX7zMO8M=",
        banner: "https://media.gettyimages.com/id/1235516869/pt/foto/new-york-ny-camila-cabello-at-global-citizen-live-on-september-25-2021-in-new-york-city.jpg?s=612x612&w=0&k=20&c=0rcdZV303rshiNf4CcbOqtgwuDqgJd8tK3uq6CqOFjM=",
        descricao: "",
        videoUrl: "https://drive.google.com/file/d/1yHI_3P4Sm0xt8yzl8XB4E6U4lCS0HFU7/view?usp=sharing",
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
        id: 10,
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
    {
        id: 20,
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

    const nickname = document.getElementById("regNickname").value.trim();
    const contato = document.getElementById("regContato").value.trim();
    const senha = document.getElementById("regPass").value;
    const feedback = document.getElementById("mensagemFeedback");

    let usuarios = JSON.parse(localStorage.getItem("usuariosCamilaTV")) || [];

    const jaExiste = usuarios.some(u => u.contato === contato);
    if (jaExiste) {
        feedback.style.color = "#e50914";
        feedback.innerText = "Este e-mail ou telefone já está cadastrado!";
        return;
    }

    usuarios.push({ nickname, contato, senha, avatar: fotoTempCadastro });
    localStorage.setItem("usuariosCamilaTV", JSON.stringify(usuarios));

    feedback.style.color = "#38bdf8";
    feedback.innerText = "Cadastro realizado com sucesso! Faça login.";

    setTimeout(() => {
        document.getElementById("registerForm").reset();
        fotoTempCadastro = "https://i.pinimg.com/1200x/7d/ef/02/7def02d4b167cc8d963c023b4174b360.jpg";
        mudarAba('login');
    }, 1500);
}

function realizarLogin(event) {
    event.preventDefault();

    const contatoInput = document.getElementById("loginUser").value.trim();
    const senhaInput = document.getElementById("loginPass").value;
    const feedback = document.getElementById("mensagemFeedback");

    let usuarios = JSON.parse(localStorage.getItem("usuariosCamilaTV")) || [];
    const usuarioEncontrado = usuarios.find(u => u.contato === contatoInput && u.senha === senhaInput);

    if (usuarioEncontrado) {
        feedback.style.color = "#22c55e";
        feedback.innerText = `Bem-vindo(a), ${usuarioEncontrado.nickname}!`;

        localStorage.setItem("usuarioLogado", JSON.stringify({ 
            contato: usuarioEncontrado.contato,
            nickname: usuarioEncontrado.nickname,
            avatar: usuarioEncontrado.avatar || "https://i.pinimg.com/1200x/7d/ef/02/7def02d4b167cc8d963c023b4174b360.jpg"
        }));

        setTimeout(() => {
            fecharAuthModal();
            verificarSessaoUsuario();
        }, 1200);
    } else {
        feedback.style.color = "#e50914";
        feedback.innerText = "E-mail/Telefone ou senha incorretos.";
    }
}


function gerarTokenAleatorio() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function solicitartokenReset() {
    const emailInput = document.getElementById("resetEmail").value.trim();
    const feedback = document.getElementById("mensagemFeedback");

    let usuarios = JSON.parse(localStorage.getItem("usuariosCamilaTV")) || [];
    const usuario = usuarios.find(u => u.contato === emailInput);

    if (!usuario) {
        feedback.style.color = "#e50914";
        feedback.innerText = "Este e-mail não está cadastrado no sistema.";
        return;
    }

    const tokenSeguro = gerarTokenAleatorio();
    const expiraEm = new Date().getTime() + 15 * 60 * 1000; 

    usuario.resetToken = tokenSeguro;
    usuario.tokenExpira = expiraEm;
    localStorage.setItem("usuariosCamilaTV", JSON.stringify(usuarios));

    console.log("TOKEN DE RECUPERAÇÃO:", tokenSeguro);
    alert(`[Simulação de E-mail] Seu código de recuperação é: ${tokenSeguro}`);

    document.getElementById("etapaEmailReset").style.display = "none";
    document.getElementById("etapaNovaSenhaReset").style.display = "block";
    feedback.style.color = "#22c55e";
    feedback.innerText = "Código enviado! Verifique seu e-mail.";
}

function processarRedefinicaoSenha(event) {
    event.preventDefault();
    const emailInput = document.getElementById("resetEmail").value.trim();
    const tokenDigitado = document.getElementById("resetTokenInput").value.trim();
    const novaSenha = document.getElementById("novaSenhaInput").value;
    const feedback = document.getElementById("mensagemFeedback");

    let usuarios = JSON.parse(localStorage.getItem("usuariosCamilaTV")) || [];
    const usuarioIndex = usuarios.findIndex(u => u.contato === emailInput);

    if (usuarioIndex === -1) {
        feedback.style.color = "#e50914";
        feedback.innerText = "Usuário não encontrado.";
        return;
    }

    const usuario = usuarios[usuarioIndex];
    const agora = new Date().getTime();

    if (!usuario.resetToken || usuario.resetToken !== tokenDigitado) {
        feedback.style.color = "#e50914";
        feedback.innerText = "Código de recuperação inválido!";
        return;
    }

    if (agora > usuario.tokenExpira) {
        feedback.style.color = "#e50914";
        feedback.innerText = "Este código expirou. Solicite um novo.";
        return;
    }

    usuarios[usuarioIndex].senha = novaSenha;
    delete usuarios[usuarioIndex].resetToken;
    delete usuarios[usuarioIndex].tokenExpira;

    localStorage.setItem("usuariosCamilaTV", JSON.stringify(usuarios));

    feedback.style.color = "#22c55e";
    feedback.innerText = "Senha redefinida com sucesso! Faça login.";

    setTimeout(() => {
        document.getElementById("resetForm").reset();
        document.getElementById("etapaNovaSenhaReset").style.display = "none";
        document.getElementById("etapaEmailReset").style.display = "block";
        mudarAba('login');
    }, 2000);
}

function verificarSessaoUsuario() {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    const btnAuth = document.getElementById("userAuthBtn");

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
    let usuarios = JSON.parse(localStorage.getItem("usuariosCamilaTV")) || [];

    const fotoFinal = fotoTempPerfil || usuarioLogado.avatar;

    const index = usuarios.findIndex(u => u.contato === usuarioLogado.contato);
    if (index !== -1) {
        usuarios[index].nickname = novoNickname;
        usuarios[index].avatar = fotoFinal;
        localStorage.setItem("usuariosCamilaTV", JSON.stringify(usuarios));
    }

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


function abrirPainelAdmin() {
    const senhaAdmin = prompt("Digite a senha de Administrador:");
    if (senhaAdmin !== "adm123") {
        alert("Senha incorreta!");
        return;
    }

    const tbody = document.getElementById("adminUserTableBody");
    tbody.innerHTML = "";

    let usuarios = JSON.parse(localStorage.getItem("usuariosCamilaTV")) || [];

    if (usuarios.length === 0) {
        tbody.innerHTML = "<tr><td colspan='3' style='padding: 10px; text-align: center; color: #888;'>Nenhum usuário cadastrado.</td></tr>";
    } else {
        usuarios.forEach(u => {
            tbody.innerHTML += `
                <tr style="border-bottom: 1px solid #334155;">
                    <td style="padding: 8px;">${u.nickname}</td>
                    <td style="padding: 8px;">${u.contato}</td>
                    <td style="padding: 8px;">${u.senha}</td>
                </tr>
            `;
        });
    }

    document.getElementById("adminModal").style.display = "flex";
}

function fecharAdminModal() {
    document.getElementById("adminModal").style.display = "none";
}

document.addEventListener("keydown", (event) => {
    if (event.code === "F8") {
        event.preventDefault();
        abrirPainelAdmin();
    }
})
    }
});
