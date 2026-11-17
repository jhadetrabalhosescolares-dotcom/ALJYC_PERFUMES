function triggerCardAnimations() {
      const cards = document.querySelectorAll('.season-card');
      cards.forEach((card) => card.classList.remove('animate-in'));
      void document.body.offsetHeight;
      cards.forEach((card) => card.classList.add('animate-in'));
    }


    function showCategory(type) {
      categoriaAtual = type;

      const hero = document.getElementById("hero-banner");
      const seasons = document.getElementById("seasons");
      const indicator = document.getElementById("collection-indicator");

      document.getElementById("products-section").classList.remove("active");
      document.getElementById("products-grid").innerHTML = "";

      indicator.innerText = `— Coleção ${type} · As 4 Estações —`;
      indicator.classList.add("visible");

      seasons.classList.add("active");

      if (!hero.classList.contains("hidden")) {
        hero.classList.add("fade-out");

        setTimeout(() => {
          hero.classList.add("hidden");
          triggerCardAnimations();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 500);
      } else {
        triggerCardAnimations();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    function resetToHome() {
      const hero = document.getElementById('hero-banner');
      const seasons = document.getElementById('seasons');
      const indicator = document.getElementById('collection-indicator');
      document.getElementById("products-section").classList.remove("active");

      indicator.classList.remove('visible');

      if (hero.classList.contains('hidden')) {
        seasons.classList.remove('active');
        hero.classList.remove('hidden');
        void hero.offsetHeight;
        hero.classList.remove('fade-out');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function openCart() {
      closeAllModals();
      document.getElementById('cart-drawer').classList.add('active');
      document.getElementById('global-overlay').classList.add('active');
      document.body.classList.add('modal-open');
    }

    function openAuthModal() {
      closeAllModals();
      updateAuthUI();
      document.getElementById('auth-modal').classList.add('active');
      document.getElementById('global-overlay').classList.add('active');
      document.body.classList.add('modal-open');
    }

    function closeAllModals() {
      document.getElementById('cart-drawer').classList.remove('active');
      document.getElementById('auth-modal').classList.remove('active');
      document.getElementById('global-overlay').classList.remove('active');
      document.body.classList.remove('modal-open');
      document.getElementById('auth-message').innerText = '';
      document.getElementById('gift-modal').classList.remove('active');
    }

    function checkoutCart() {
      const user = JSON.parse(localStorage.getItem('aljyc_user'));
      if (!user) {
        alert('Faça login para finalizar sua compra.');
        openAuthModal();
        return;
      }
      alert(`Olá, ${user.name}! Em breve você poderá finalizar sua compra.`);
    }

    const perfumes = {
      Feminino: {
        Primavera: [
          {
            id: 1,
            nome: "Pink Velvet",
            descricao: "Fragrância floral e adocicada, com notas de rosas e frutas vermelhas.",
            preco: 159.99,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/primavera_mulher1.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original2.jpeg"
          },
          {
            id: 2,
            nome: "Violet Essence",
            descricao: "Fragrância floral e sofisticada, com notas de lavanda.",
            preco: 199.90,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/primavera_mulher2.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original3.jpeg"
          },
          {
            id: 3,
            nome: "Rose Blossom",
            descricao: "Fragrância delicada e romântica, com notas de rosas",
            preco: 209.90,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/primavera_mulher3.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original15.jpeg"
          }
        ],

        Verão: [
          {
            id: 4,
            nome: "Blue Ocean",
            descricao: "Fragrância fresca e leve, com notas de frutas cítricas e aromas aquáticos.",
            preco: 189.90,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/verao_mulher.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original21.jpeg"
          },
          {
            id: 5,
            nome: "Coral Summer",
            descricao: "Fragrância tropical e vibrante, com notas de frutas vermelhas e flores.",
            preco: 199.90,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/verao_mulher2.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original17.jpeg"
          },
          {
            id: 6,
            nome: "Golden Sunset",
            descricao: "Fragrância quente e adocicada, com notas de baunilha e âmbar.",
            preco: 209.90,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/verao_mulher3.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original3.jpeg"
          }
        ],

        Outono: [
          {
            id: 7,
            nome: "Amber Outono",
            descricao: "Fragrância quente e amadeirada, com notas de âmbar e canela.",
            preco: 189.90,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/outono_mulher.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original12.jpeg"
          },
          {
            id: 8,
            nome: "Red Passion",
            descricao: "Fragrância intensa e marcante, com notas de especiarias e baunilha.",
            preco: 199.90,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/outono_mlher2.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original17.jpeg"
          },
          {
            id: 9,
            nome: "Green Forest",
            descricao: "Fragrância fresca e natural, com notas de folhas verdes e ervas aromáticas.",
            preco: 209.90,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/outono_mulher3.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original17.jpeg"
          }
        ],

        Inverno: [
          {
            id: 10,
            nome: "Blue Ice",
            descricao: "Fragrância fresca e elegante, com notas de jasmim e aromas aquáticos.",
            preco: 189.90,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/inverno_mulher.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original6.jpeg"
          },
          {
            id: 11,
            nome: "Frozen Blue",
            descricao: "Fragrância intensa e refrescante, com notas de menta frias.",
            preco: 209.90,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/inverno_mulher2.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original14.jpeg"
          },
          {
            id: 12,
            nome: "Purple Snow",
            descricao: "Fragrância envolvente, com notas de lavanda e baunilha",
            preco: 219.90,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/inverno_mulher3.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original12.jpeg"
          }
        ]
      },
      Masculino: {
        Primavera: [
          {
            id: 21,
            nome: "Spring Red Men",
            descricao: "Uma fragrância intensa e sedutora, com notas frutadas, picantes.",
            preco: 189.90,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/primavera_homem2.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original19.jpeg"
          },
          {
            id: 22,
            nome: "Spring Blue Men",
            descricao: "Uma fragrância fresca e aquática, com notas cítricas.",
            preco: 179.96,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/primavera_homem3.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original10.jpeg"
          },
          {
            id: 23,
            nome: "Spring Green Men",
            descricao: "Uma fragrância revigorante, inspirada no frescor da natureza.",
            preco: 199.90,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/primavera_homem.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original11.jpeg"
          }
        ],

        Verão: [
          {
            id: 24,
            nome: "Summer Sunset Men",
            descricao: "Uma fragrância intensa e envolvente, inspirada no pôr do sol sobre o oceano.",
            preco: 149.99,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/verao_homem.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original22.jpeg"
          },
          {
            id: 25,
            nome: "Summer Golden Beach Men",
            descricao: "Uma fragrância intensa e envolvente, inspirada no pôr do sol sobre o oceano.",
            preco: 169.90,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/verao_homem3.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original.jpeg"
          },
          {
            id: 26,
            nome: "Sumeer Deeo Waters Men",
            descricao: "Uma fragrância fresca e misteriosa, inspirada no encontro das águas doces e salgadas.",
            preco: 179.98,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/verao_homem2.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original11.jpeg"
          }
        ],

        Outono: [
          {
            id: 27,
            nome: "Golden Amber Men",
            descricao: "Uma fragrância quente e sofisticada, inspirada nas folhas douradas do outono.",
            preco: 129.90,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/outono_homem.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original20.jpeg"
          },
          {
            id: 28,
            nome: "Autumn Ember Men",
            descricao: "Uma fragrância envolvente e marcante, com notas de especiarias e madeiras.",
            preco: 167.99,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/outono_homem2.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original5.jpeg"
          },
          {
            id: 29,
            nome: "Autumn Crimson Men",
            descricao: "Uma fragrância intensa e sedutora, com notas amadeiradas e toques de âmbar.",
            preco: 209.98,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/outono_homem3.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original.jpeg"
          }
        ],

        Inverno: [
          {
            id: 30,
            nome: "Winter Ice Men",
            descricao: "Uma fragrância gelada e refrescante, inspirada no ar puro das montanhas.",
            preco: 199.99,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/inverno_homem3.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original_8.jpeg"
          },
          {
            id: 31,
            nome: "Blue Men Essence",
            descricao: "Uma fragrância gelada e refrescante, inspirada no ar puro das montanhas.",
            preco: 159.86,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/inverno_homem2.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original4.jpeg"
          },
          {
            id: 32,
            nome: "Dark Night",
            descricao: "Uma fragrância fria e sofisticada, com notas amadeiradas e musk.",
            preco: 205.95,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/inverno_homem.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original24.jpeg"
          }
        ]
      },
      Infantil: {
        Primavera: [
          {
            id: 1,
            nome: "Spring Blossom Kids Female",
            descricao: "Uma fragrância delicada e doce, com notas de flores e frutas suaves..",
            preco: 129.99,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/primavera_infantil.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original23.jpeg"
          },
          {
            id: 2,
            nome: "Spring Blue Kids Male",
            descricao: "Uma fragrância leve e divertida, com notas cítricas e frescor floral.",
            preco: 129.99,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/primavera_crianca.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original9.jpeg"
          },

        ],

        Verão: [{
          id: 1,
          nome: "Summer Girl",
          descricao: "Fragrância infantil delicada e floral.",
          preco: 99.99,
          imagem: "imagens_ALJYC/fotos_aprimoradas_IA/verao_infantil2.jpeg",
          imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original23.jpeg"
        },
        {
          id: 31,
          nome: "Summer Boy",
          descricao: "Fragrância infantil fresca e divertida.",
          preco: 99.99,
          imagem: "imagens_ALJYC/fotos_aprimoradas_IA/verao_criancaa.jpeg",
          imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original17.jpeg"
        },
        ],
        Outono: [
          {
            id: 1,
            nome: "Autumn Beauty",
            descricao: "Uma fragrância doce e acochegante inspirada no charme das folhas douradas",
            preco: 119.90,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/outono_infantil3.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original13.jpeg"
          },
          {
            id: 31,
            nome: "Autumn Mistic",
            descricao: "Uma fragrância infantil e fresca inspirada nas brincadeiras de outono e o aroma ambar.",
            preco: 119.90,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/outono_criancaaa.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original13.jpeg"
          },
        ],
        Inverno: [
          {
            id: 31,
            nome: "Sweet Snow",
            descricao: "Uma fragrância infantil doce e aconchegante inspirada no encanto dos dias frios.",
            preco: 125.00,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/inverno_infantil4.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original7.jpeg"
          },
          {
            id: 31,
            nome: "Snowflake",
            descricao: "Uma fragrância infantil fresca e aconchegante inspirada nos dias de inverno.",
            preco: 125.00,
            imagem: "imagens_ALJYC/fotos_aprimoradas_IA/inverno_criancaaaa.jpeg",
            imagemOriginal: "imagens_ALJYC/fotos_Originais/foto_original7.jpeg"
          },
        ]
      }
    };

    let categoriaAtual = "Feminino";

    function showSeasonProducts(season) {
      const productsSection = document.getElementById("products-section");
      const seasons = document.getElementById("seasons");
      const indicator = document.getElementById("collection-indicator");

      const temas = {
        "Primavera": "primavera",
        "Verão": "verao",
        "Outono": "outono",
        "Inverno": "inverno"
      };

      document.body.setAttribute("data-season", temas[season]);

      document.getElementById("products-title").innerText = season;

      document.getElementById("products-description").innerText =
        "Descubra as fragrâncias exclusivas da coleção " + season + ".";

      const grid = document.getElementById("products-grid");
      grid.innerHTML = "";

      const lista = perfumes[categoriaAtual][season] || [];

      if (lista.length === 0) {
        grid.innerHTML = "<p>Nenhum perfume cadastrado nesta coleção ainda.</p>";
      }

      lista.forEach(perfume => {
        grid.innerHTML += `
      <article class="product-showcase">
        <div class="product-copy">
          <small>ALJYC PARFUMS · ${categoriaAtual}</small>
          <h3>${perfume.nome}</h3>
          <p>${perfume.descricao}</p>

          <strong class="product-price">
            ${perfume.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })}
          </strong>

         <button class="product-add"
  onclick="addToCart(${perfume.id}, '${season}', '${categoriaAtual}')">
  ADICIONAR À SACOLA
</button>
        </div>

       <div class="product-visual">
  <img class="product-image"
       src="${perfume.imagem}"
       alt="${perfume.nome} - Imagem de IA">

  <button class="photo-toggle"
    onclick="trocarFoto(this)"
    data-ia="${perfume.imagem}"
    data-original="${perfume.imagemOriginal || ''}"
    aria-label="Ver foto original">
    ❯
  </button>
</div>
      </article>
    `;
      });

      seasons.classList.remove("active");
      indicator.classList.remove("visible");
      productsSection.classList.add("active");

      productsSection.scrollIntoView({ behavior: "smooth" });
    }


    function toggleSearch() {
      const panel = document.getElementById("search-panel");
      const input = document.getElementById("search-input");

      panel.classList.toggle("active");

      if (panel.classList.contains("active")) {
        input.focus();
      } else {
        input.value = "";
        document.getElementById("search-results").innerHTML = "";
      }
    }
    function searchPerfumes() {
      const input = document.getElementById("search-input").value.trim().toLowerCase();
      const results = document.getElementById("search-results");

      results.innerHTML = "";

      if (!input) return;

      const encontrados = [];

      Object.entries(perfumes).forEach(([categoria, colecoes]) => {
        Object.entries(colecoes).forEach(([season, lista]) => {
          lista.forEach(perfume => {
            if (
              perfume.nome.toLowerCase().includes(input) ||
              perfume.descricao.toLowerCase().includes(input)
            ) {
              encontrados.push({
                ...perfume,
                season,
                categoria
              });
            }
          });
        });
      });

      if (encontrados.length === 0) {
        results.innerHTML = `
      <div class="search-empty">
        Nenhum perfume encontrado. Tente outro nome.
      </div>
    `;
        return;
      }

      encontrados.forEach(perfume => {
        results.innerHTML += `
      <div class="search-result"
        onclick="openSearchedPerfume(${perfume.id}, '${perfume.season}', '${perfume.categoria}')">

        <img src="${perfume.imagem}" alt="${perfume.nome}">

        <div class="search-result-info">
          <small>${perfume.categoria} · ${perfume.season}</small>
          <strong>${perfume.nome}</strong>
          <span>
            ${perfume.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })}
          </span>
        </div>
      </div>
    `;
      });
    }

    function openSearchedPerfume(id, season, categoria) {
      categoriaAtual = categoria;

      const perfume = perfumes[categoria][season]?.find(
        item => item.id === id
      );

      if (!perfume) return;

      document.body.setAttribute(
        "data-season",
        season.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      );

      document.getElementById("search-panel").classList.remove("active");
      document.getElementById("search-input").value = "";
      document.getElementById("search-results").innerHTML = "";

      document.getElementById("products-title").innerText = perfume.nome;
      document.getElementById("products-description").innerText =
        "Conheça esta fragrância da coleção " + categoria + ".";

      const grid = document.getElementById("products-grid");

      grid.innerHTML = `
    <article class="product-showcase">
      <div class="product-copy">
        <small>ALJYC PARFUMS · ${categoria}</small>
        <h3>${perfume.nome}</h3>
        <p>${perfume.descricao}</p>

        <strong class="product-price">
          ${perfume.preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })}
        </strong>
        <button class="product-add"
  onclick="addToCart(${perfume.id}, '${season}', '${categoria}')">
  ${promocaoAtiva && categoria !== "Infantil"
    ? "ADICIONAR À PROMOÇÃO"
    : "ADICIONAR À SACOLA"}
</button>
      </div>

      <div class="product-visual">
        <img class="product-image" src="${perfume.imagem}" alt="${perfume.nome}">
      </div>
    </article>
  `;

      document.getElementById("seasons").classList.remove("active");
      document.getElementById("collection-indicator").classList.remove("visible");
      document.getElementById("products-section").classList.add("active");

      document.getElementById("products-section").scrollIntoView({
        behavior: "smooth"
      });
    }
    let cart = JSON.parse(localStorage.getItem("aljyc_cart")) || [];

let promocaoAtiva = false;
let perfumesPromocao = [];

    
     function addToCart(id, season, categoria) {
  const perfume = perfumes[categoria][season]?.find(
    item => item.id === id
  );

  if (!perfume) return;

  // Modo de compra promocional
  if (promocaoAtiva) {

    if (categoria === "Infantil") {
      alert("A promoção é válida para perfumes Femininos e Masculinos.");
      return;
    }

    if (perfumesPromocao.length >= 2) {
      abrirEscolhaBrinde();
      return;
    }

    perfumesPromocao.push({
      ...perfume,
      season,
      categoria
    });

    const quantidade = perfumesPromocao.length;

    if (quantidade === 1) {
      document.getElementById("products-description").innerText =
        "Primeiro perfume escolhido! Agora escolha mais um para ganhar seu brinde.";

      alert("Primeiro perfume selecionado! Escolha o segundo.");
    }

    if (quantidade === 2) {
      abrirEscolhaBrinde();
    }

    return;
  }

  // Compra normal, fora da promoção
  const existing = cart.find(
    item => item.id === id &&
      item.season === season &&
      item.categoria === categoria &&
      !item.isGift
  );

  if (existing) {
    existing.quantidade++;
  } else {
    cart.push({
      ...perfume,
      season,
      categoria,
      quantidade: 1
    });
  }

  saveCart();
  alert(perfume.nome + " foi adicionado à sua sacola!");
}

function abrirEscolhaBrinde() {
  document.getElementById("gift-modal").classList.add("active");
  document.getElementById("global-overlay").classList.add("active");
  document.body.classList.add("modal-open");
}

function confirmarBrinde() {
  const escolha = document.querySelector(
    'input[name="gift-choice"]:checked'
  );

  if (!escolha) {
    alert("Escolha seu brinde antes de continuar.");
    return;
  }

  if (perfumesPromocao.length !== 2) {
    alert("Você precisa escolher os dois perfumes primeiro.");
    return;
  }

  const promoId = "promo-" + Date.now();

  // Adiciona os dois perfumes
  perfumesPromocao.forEach(perfume => {
    cart.push({
      ...perfume,
      quantidade: 1,
      promoId
    });
  });

  // Adiciona o brinde escolhido gratuitamente
  cart.push({
    id: promoId + "-brinde",
    nome: "Brinde Natura " + escolha.value,
    categoria: "Brinde",
    season: "Promoção",
    preco: 0,
    imagem: "logo_novo.png",
    quantidade: 1,
    isGift: true,
    promoId
  });

  saveCart();

  perfumesPromocao = [];
  promocaoAtiva = false;

  document.querySelectorAll('input[name="gift-choice"]').forEach(input => {
    input.checked = false;
  });

  closeAllModals();

  alert("Seus dois perfumes e seu brinde foram adicionados à sacola!");
}

    function saveCart() {
      localStorage.setItem("aljyc_cart", JSON.stringify(cart));
      renderCart();
    }

    function renderCart() {
      const cartItems = document.getElementById("cart-items");
      const cartCount = document.getElementById("cart-count");
      const cartSubtotal = document.getElementById("cart-subtotal");

      const totalItems = cart.reduce(
        (total, item) => total + item.quantidade, 0
      );

      const subtotal = cart.reduce(
        (total, item) => total + item.preco * item.quantidade, 0
      );

      cartCount.innerText = totalItems;

      cartSubtotal.innerText = subtotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });

      if (cart.length === 0) {
        cartItems.innerHTML = `
      <div class="cart-empty">
        <svg><use href="#icon-bag"></use></svg>
        <h3>Sua sacola está vazia</h3>
        <button class="btn-primary" onclick="closeAllModals()">
          CONTINUAR COMPRANDO
        </button>
      </div>
    `;
        return;
      }

      cartItems.innerHTML = cart.map((item, index) => `
    <div class="cart-product">

      <img src="${item.imagem}" alt="${item.nome}">

      <div class="cart-product-info">
        <strong>${item.nome}</strong>

${item.isGift
  ? '<span style="color:green;font-weight:bold;">BRINDE GRÁTIS</span>'
  : `<span>Quantidade: ${item.quantidade}</span>`
}

<span>
          ${(item.preco * item.quantidade).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })}
        </span>
      </div>

      <button
        class="cart-remove"
        onclick="removeFromCart(${index})"
        aria-label="Remover ${item.nome}"
      >
        &times;
      </button>

    </div>
  `).join("");
    }
    function removeFromCart(index) {
  const item = cart[index];

  if (item.promoId) {
    const promoId = item.promoId;

    cart = cart.filter(produto => produto.promoId !== promoId);
  } else {
    cart.splice(index, 1);
  }
  saveCart();
}
    function switchAuthTab(tab) {
      const loginForm = document.getElementById('login-form');
      const registerForm = document.getElementById('register-form');
      const tabLogin = document.getElementById('tab-login');
      const tabRegister = document.getElementById('tab-register');
      const title = document.getElementById('auth-title');
      const subtitle = document.getElementById('auth-subtitle');

      document.getElementById('auth-message').innerText = '';

      if (tab === 'login') {
        loginForm.style.display = 'flex';
        registerForm.style.display = 'none';
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
        title.innerText = 'Bem-vindo';
        subtitle.innerText = 'Acesse sua conta ALJYC';
      } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'flex';
        tabLogin.classList.remove('active');
        tabRegister.classList.add('active');
        title.innerText = 'Criar Conta';
        subtitle.innerText = 'Descubra fragrâncias feitas para você';
      }
    }

    function handleRegister(event) {
      event.preventDefault();
      const name = document.getElementById('reg-name').value.trim();
      const email = document.getElementById('reg-email').value.trim();
      const password = document.getElementById('reg-password').value;

      const users = JSON.parse(localStorage.getItem('aljyc_users_db')) || [];

      if (users.some((u) => u.email === email)) {
        document.getElementById('auth-message').innerText = 'Este e-mail já está cadastrado.';
        return;
      }

      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem('aljyc_users_db', JSON.stringify(users));
      localStorage.setItem('aljyc_user', JSON.stringify({ name, email }));

      updateAuthUI();
      closeAllModals();
    }

    function handleLogin(event) {
      event.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const password = document.getElementById('login-password').value;

      const users = JSON.parse(localStorage.getItem('aljyc_users_db')) || [];
      const validUser = users.find((u) => u.email === email && u.password === password);

      if (!validUser) {
        document.getElementById('auth-message').innerText = 'E-mail ou senha incorretos.';
        return;
      }

      localStorage.setItem('aljyc_user', JSON.stringify({ name: validUser.name, email: validUser.email }));
      updateAuthUI();
      closeAllModals();
    }

    function handleLogout() {
      localStorage.removeItem('aljyc_user');
      updateAuthUI();
      closeAllModals();
    }

    function updateAuthUI() {
      const user = JSON.parse(localStorage.getItem('aljyc_user'));
      const headerLabel = document.getElementById('user-header-name');
      const formsContainer = document.getElementById('auth-forms-container');
      const loggedInView = document.getElementById('logged-in-view');
      const title = document.getElementById('auth-title');
      const subtitle = document.getElementById('auth-subtitle');

      if (user) {
        const firstName = user.name.split(' ')[0];
        headerLabel.innerText = firstName;
        formsContainer.style.display = 'none';
        loggedInView.style.display = 'block';
        title.innerText = 'Minha Conta';
        subtitle.innerText = 'Sessão ativa';
        document.getElementById('logged-user-name').innerText = user.name;
        document.getElementById('logged-user-email').innerText = user.email;
      } else {
        headerLabel.innerText = 'Entrar';
        formsContainer.style.display = 'block';
        loggedInView.style.display = 'none';
        switchAuthTab('login');
      }
    }

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeAllModals();
    });

    document.addEventListener('DOMContentLoaded', updateAuthUI);

    const banners = [
      {
        imagem: "imagens_ALJYC/banners/banner-masculino.png",
        alt: "Perfume masculino ALJYC em cenário dourado",
        eyebrow: "ALJYC PARFUMS · OFERTA ESPECIAL",
        titulo: "ELEGÂNCIA EM CADA NOTA",
        descricao: "Descubra a coleção masculina ALJYC com condições especiais em fragrâncias selecionadas.",
        botao: "EXPLORAR MASCULINOS",
        categoria: "Masculino"
      },
      {
        imagem: "imagens_ALJYC/banners/banner-feminino.png",
        alt: "Perfume feminino ALJYC em cenário azul luminoso",
        eyebrow: "ALJYC PARFUMS · SELEÇÃO ESPECIAL",
        titulo: "SUA ESSÊNCIA, SEU MOMENTO",
        descricao: "Encontre sua próxima fragrância e aproveite ofertas especiais em perfumes selecionados.",
        botao: "VER COLEÇÃO FEMININA",
        categoria: "Feminino"
      },
      {
        imagem: "imagens_ALJYC/banners/banner-parceria.png",
        alt: "Frasco de perfume e presente em cenário botânico verde e dourado",
        eyebrow: "ALJYC PARFUMS · AÇÃO ESPECIAL",
        titulo: "LEVE 2 ALJYC E GANHE 1 NATURA",
        descricao: "Na compra de dois perfumes ALJYC, você ganha um perfume Natura. Um presente especial para celebrar sua escolha. Brinde disponível apenas para Masculino e Feminino.",
        botao: "APROVEITAR A PROMOÇÃO",
        categoria: "Feminino"
      }
    ];

    let atual = 0;

    const foto = document.getElementById("banner-img");
    const dots = document.getElementById("hero-dots");
    const hero = document.getElementById("hero-banner");
    const eyebrow = document.getElementById("banner-eyebrow");
    const titulo = document.getElementById("banner-title");
    const descricao = document.getElementById("banner-description");
    const cta = document.getElementById("banner-cta");

    banners.forEach((banner, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Mostrar banner " + (i + 1));
      b.onclick = () => mudarBanner(i);
      dots.appendChild(b);
    });

    function mudarBanner(i) {
      atual = (i + banners.length) % banners.length;
      const banner = banners[atual];

      foto.src = banner.imagem;
      foto.alt = banner.alt;
      hero.dataset.slide = String(atual);
      eyebrow.textContent = banner.eyebrow;
      titulo.textContent = banner.titulo;
      descricao.textContent = banner.descricao;
      cta.textContent = banner.botao;
      const botaoInfantil = document.getElementById("banner-infantil-cta");

botaoInfantil.style.display = (atual === 1) ? "inline-flex" : "none";

      dots.querySelectorAll("button").forEach((b, n) =>
        b.classList.toggle("active", n === atual)
      );
    }

    function bannerAction() {
  if (atual === 2) {
    iniciarPromocao();
    return;
  }

  showCategory(banners[atual].categoria);
}

function iniciarPromocao() {
  promocaoAtiva = true;
  perfumesPromocao = [];

  showCategory("Feminino");

  alert(
    "Promoção ALJYC iniciada! Escolha dois perfumes Femininos ou Masculinos. Depois você escolherá seu brinde Natura."
  );
}

    function changeBanner(d) {
      mudarBanner(atual + d);
    }

    mudarBanner(0);

    let bannerTimer = setInterval(() => mudarBanner(atual + 1), 6500);

    hero.addEventListener("mouseenter", () => clearInterval(bannerTimer));
    hero.addEventListener("mouseleave", () => {
      clearInterval(bannerTimer);
      bannerTimer = setInterval(() => mudarBanner(atual + 1), 6500);
    });
    function trocarFoto(botao) {
  const imagem = botao.parentElement.querySelector(".product-image");
  const original = botao.dataset.original;

  if (!original) {
    alert("A foto original deste perfume ainda não foi cadastrada.");
    return;
  }

  const mostrandoIA = imagem.src.endsWith(botao.dataset.ia);

  imagem.src = mostrandoIA ? original : botao.dataset.ia;
  imagem.alt = mostrandoIA ? "Foto original" : "Imagem criada por IA";
  botao.innerText = mostrandoIA ? "❮" : "❯";
  botao.setAttribute(
    "aria-label",
    mostrandoIA ? "Voltar para imagem de IA" : "Ver foto original"
  );
}