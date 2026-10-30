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
        destaque: false
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
        banner: "data:image/jpeg;base64,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",
        descricao: "",
        videoUrl: "",
        destaque: true
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
