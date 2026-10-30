const urlTransmissaoAoVivo = "https://kick.com/camilatvplus";

const listaDeVideos = [
    {
        id: 1,
        titulo: "The Town",
        categoria: "Shows",
        data: " 13 de setembro de 2025",
        capa: "https://drive.google.com/file/d/1ID9G0SteQCO3Q3qrJ7tTWO0NL7RQ_VdN/view?usp=sharing",
        banner: "data:image/jpeg;base64,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",
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

    const urlBannerDrive = converterImagemDrive(destaque.banner || destaque.capa);

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

function realizarCadastro(event) {
    event.preventDefault();

    const nickname = document.getElementById("regNickname").value.trim();
    const contato = document.getElementById("regContato").value.trim();
    const senha = document.getElementById("regPass").value;
    
    const radioSelecionado = document.querySelector('input[name="avatarSelect"]:checked');
    const avatarPronto = radioSelecionado ? radioSelecionado.value : null;

   
    const fotoFinal = fotoPersonalizadaBase64 || avatarPronto || "https://api.dicebear.com/7.x/bottts/svg?seed=Camila1";
    
    const feedback = document.getElementById("mensagemFeedback");

    let usuarios = JSON.parse(localStorage.getItem("usuariosCamilaTV")) || [];

    const jaExiste = usuarios.some(u => u.contato === contato);
    if (jaExiste) {
        feedback.style.color = "#e50914";
        feedback.innerText = "Este e-mail ou telefone já está cadastrado!";
        return;
    }

    usuarios.push({ nickname, contato, senha, avatar: fotoFinal });
    localStorage.setItem("usuariosCamilaTV", JSON.stringify(usuarios));

    feedback.style.color = "#38bdf8";
    feedback.innerText = "Cadastro realizado com sucesso! Faça login.";

    setTimeout(() => {
        document.getElementById("registerForm").reset();
        fotoPersonalizadaBase64 = ""; 
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
            nickname: usuarioEncontrado.nickname,
            avatar: usuarioEncontrado.avatar || "https://api.dicebear.com/7.x/bottts/svg?seed=Camila1"
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

function enviarRedefinicaoSenha(event) {
    event.preventDefault();
    const email = document.getElementById("resetEmail").value.trim();
    const feedback = document.getElementById("mensagemFeedback");

    feedback.style.color = "#38bdf8";
    feedback.innerText = `Instruções de redefinição enviadas para ${email}. (Simulação)`;

    setTimeout(() => {
        mudarAba('login');
    }, 2500);
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
        btnAuth.onclick = () => {
            if (confirm(`Deseja sair da conta de ${usuarioLogado.nickname}?`)) {
                localStorage.removeItem("usuarioLogado");
                verificarSessaoUsuario();
            }
        };
    } else {
        btnAuth.className = "btn-auth-trigger";
        btnAuth.innerText = "Entrar";
        btnAuth.onclick = abrirAuthModal;
    }
}

let fotoPersonalizadaBase64 = "";

function converterFotoParaBase64(event) {
    const arquivo = event.target.files[0];
    if (!arquivo) return;

    const leitor = new FileReader();
    leitor.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function() {
          
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const tamanhoMaximo = 200;
            let largura = img.width;
            let altura = img.height;

            if (largura > altura) {
                if (largura > tamanhoMaximo) {
                    altura *= tamanhoMaximo / largura;
                    largura = tamanhoMaximo;
                }
            } else {
                if (altura > tamanhoMaximo) {
                    largura *= tamanhoMaximo / altura;
                    altura = tamanhoMaximo;
                }
            }

            canvas.width = largura;
            canvas.height = altura;
            ctx.drawImage(img, 0, 0, largura, largura);

          
            fotoPersonalizadaBase64 = canvas.toDataURL("image/jpeg", 0.8);

        
            document.querySelectorAll('input[name="avatarSelect"]').forEach(radio => radio.checked = false);
        };
    };
    leitor.readAsDataURL(arquivo);
}






document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        fecharVideo();
        fecharLive();
        fecharAuthModal();
    }
});
