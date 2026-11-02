// ==========================================================================
// MAISON DANS NOS PRÉS — SAVOIR-FAIRE BOUCHER & E-COMMERCE EN CIRCUIT COURT
// ==========================================================================

// Générateur vectoriel SVG haute résolution sur-mesure pour chaque découpe
// Garantit une représentation fidèle et 100% d'uptime même hors ligne ou avec bloqueur de pub
function getMeatFallbackSvg(productId, title, weight) {
  let illustration = '';
  let badgeColor = '%23c29b53';
  let categoryLabel = 'BŒUF DE PURE RACE LIMOUSINE';

  if (productId.includes('cote-boeuf')) {
    categoryLabel = 'PIÈCE MAÎTRESSE • SUR OS (14-21 JOURS)';
    badgeColor = '%238a1827';
    // Illustration Côte de Bœuf avec os
    illustration = `
      <path d="M280 260 C260 210, 310 160, 420 170 C510 180, 540 250, 490 300 C430 350, 310 320, 280 260 Z" fill="%238a1827" opacity="0.6"/>
      <path d="M420 170 C470 120, 560 90, 590 130 C560 170, 490 190, 420 170 Z" fill="%23e8e2d5" opacity="0.8"/>
      <circle cx="380" cy="240" r="18" fill="%23ffffff" opacity="0.25"/>
    `;
  } else if (productId.includes('carre-agneau')) {
    categoryLabel = 'HAUTE BOUCHERIE • CÔTES MANCHONNÉES';
    badgeColor = '%23c29b53';
    // Illustration Carré d'agneau avec côtes
    illustration = `
      <rect x="300" y="240" width="200" height="70" rx="8" fill="%238a1827" opacity="0.55"/>
      <line x1="330" y1="240" x2="310" y2="140" stroke="%23e8e2d5" stroke-width="8" stroke-linecap="round"/>
      <line x1="370" y1="240" x2="360" y2="140" stroke="%23e8e2d5" stroke-width="8" stroke-linecap="round"/>
      <line x1="410" y1="240" x2="410" y2="140" stroke="%23e8e2d5" stroke-width="8" stroke-linecap="round"/>
      <line x1="450" y1="240" x2="460" y2="140" stroke="%23e8e2d5" stroke-width="8" stroke-linecap="round"/>
    `;
  } else if (productId.includes('paves')) {
    categoryLabel = 'GRILLADES AU COUTEAU • RUMSTEAK & FAUX-FILET';
    badgeColor = '%238a1827';
    // Illustration 2 pavés de steak
    illustration = `
      <rect x="290" y="210" width="105" height="90" rx="10" fill="%238a1827" opacity="0.65"/>
      <rect x="415" y="210" width="105" height="90" rx="10" fill="%238a1827" opacity="0.65"/>
      <line x1="310" y1="230" x2="370" y2="280" stroke="%23ffffff" stroke-width="2" opacity="0.3"/>
      <line x1="435" y1="230" x2="495" y2="280" stroke="%23ffffff" stroke-width="2" opacity="0.3"/>
    `;
  } else if (productId.includes('agneau')) {
    categoryLabel = 'AGNEAU DE TERROIR • HAUTE-VIENNE';
    badgeColor = '%23a6b89e';
    // Illustration gigot et côte
    illustration = `
      <ellipse cx="400" cy="245" rx="110" ry="75" fill="%238a1827" opacity="0.55"/>
      <path d="M490 230 L560 170" stroke="%23e8e2d5" stroke-width="12" stroke-linecap="round"/>
    `;
  } else {
    // Colis de bœuf (caissette artisanale)
    categoryLabel = 'ASSORTIMENT FERMIER • DÉCOUPE VARIÉE';
    badgeColor = '%23c29b53';
    illustration = `
      <rect x="290" y="200" width="220" height="110" rx="6" fill="%23ffffff" fill-opacity="0.08" stroke="%23c29b53" stroke-width="2"/>
      <rect x="310" y="220" width="55" height="40" rx="4" fill="%238a1827" opacity="0.7"/>
      <rect x="375" y="220" width="55" height="40" rx="4" fill="%238a1827" opacity="0.7"/>
      <rect x="440" y="220" width="55" height="40" rx="4" fill="%238a1827" opacity="0.7"/>
      <rect x="340" y="270" width="60" height="30" rx="4" fill="%238a1827" opacity="0.6"/>
      <rect x="410" y="270" width="60" height="30" rx="4" fill="%238a1827" opacity="0.6"/>
    `;
  }

  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect width="800" height="500" fill="%23141413"/><rect x="16" y="16" width="768" height="468" fill="none" stroke="%232c2a27" stroke-width="1.5"/>${illustration}<text x="400" y="110" font-family="Georgia, serif" font-size="12" fill="${badgeColor}" text-anchor="middle" letter-spacing="4" font-weight="bold">${categoryLabel}</text><text x="400" y="380" font-family="Georgia, serif" font-size="24" fill="%23ffffff" text-anchor="middle" font-weight="bold">${encodeURIComponent(title)}</text><text x="400" y="415" font-family="sans-serif" font-size="14" fill="%23b8b3a5" text-anchor="middle">Découpe Sous Vide • ${weight} kg net • GAEC du Mas Ferrat (87)</text></svg>`;
}

// Catalogue Produits Fidèle aux Découpes Réelles (Fichiers locaux 100% fiables)
const PRODUCTS = [
  {
    id: "colis-prestige-5kg",
    category: "limousine",
    title: "Colis Découverte Bœuf Limousin (5 kg)",
    subtitle: "Sélection bouchère équilibrée (env. 20 portions individuelles)",
    weight: 5,
    pricePerKg: 27.00,
    price: 135.00,
    badge: "Sélection Bouchère",
    badgeType: "red",
    // Image locale garantie : morceaux et découpes de bœuf frais
    image: "assets/colis-boeuf-5kg.jpg",
    description: "La formule idéale pour découvrir la pure race Limousine : 1 rôti ficelé main, 4 pavés de rumsteak et faux-filets tendres, 6 steaks hachés façon bouchère, 1 bourguignon prêt à mijoter et 4 steaks minute.",
    contents: [
      "1 Rôti de bœuf tendre ficelé à la main (env. 900g)",
      "4 Pavés de rumsteak ou faux-filets épais (2 sachets de 2)",
      "6 Steaks hachés pur bœuf façon bouchère (3 sachets de 2)",
      "1 Pièce à bourguignon pré-découpée en dés (env. 800g)",
      "4 Steaks minute tendres du boucher (2 sachets de 2)"
    ],
    maturation: "Maturation 14 jours sur carcasse",
    chefTip: "Pensez à sortir vos viandes du réfrigérateur 20 minutes avant la cuisson pour détendre les fibres musculaires.",
    storage: "Chaque pièce est conditionnée sous vide individuel étiqueté (nom, poids, DLC 21 jours). Rentre dans un demi-tiroir de congélateur."
  },
  {
    id: "colis-reserve-10kg",
    category: "limousine",
    title: "Colis Grande Réserve Bœuf Limousin (10 kg)",
    subtitle: "Le format familial le plus complet (-13% d'économie au kilo)",
    weight: 10,
    pricePerKg: 23.50,
    price: 235.00,
    badge: "Le Choix des Familles",
    badgeType: "gold",
    // Image locale garantie : planche complète du boucher avec viandes variées
    image: "assets/colis-boeuf-10kg.jpg",
    description: "L'assortiment complet pour approvisionner le foyer : 2 rôtis tendres, 1 belle côte de bœuf persillée (ou 2 entrecôtes épaisses), 8 pavés de rumsteak, 12 steaks hachés bouchers, 2 sachets de bourguignon et 1 rosbif.",
    contents: [
      "2 Rôtis de bœuf tendres ficelés (2x env. 900g)",
      "1 Belle côte de bœuf persillée (ou 2 entrecôtes épaisses)",
      "8 Pavés de rumsteak & faux-filets parés au couteau",
      "12 Steaks hachés pur bœuf façon bouchère (6x 2 pièces)",
      "2 Sachets de morceaux à mijoter / bourguignon (2x 800g)",
      "1 Rosbif tendre prêt à rôtir"
    ],
    maturation: "Maturation 14 à 18 jours",
    chefTip: "Pour les rôtis, saisissez la viande à feu vif sur chaque face avant d'enfourner à 180°C pendant 20 minutes.",
    storage: "Occupe 1 tiroir standard de congélateur domestique (env. 24 litres). Conservation garantie 12 mois."
  },
  {
    id: "colis-demi-agneau-4kg",
    category: "mouton",
    title: "Colis Demi-Agneau Fermier du Limousin (4,5 kg)",
    subtitle: "Élevé au grand air dans nos collines de Haute-Vienne",
    weight: 4.5,
    pricePerKg: 26.50,
    price: 119.00,
    badge: "Agneau de Terroir",
    badgeType: "dark",
    // Image locale garantie : véritables découpes d'agneau et côtelettes fraîches
    image: "assets/colis-agneau.jpg",
    description: "Notre cheptel ovin pâture librement sur nos parcours herbagers naturels. La viande offre une chair délicatement rosée, d'une grande finesse et pauvre en gras de couverture, sans le goût fort des moutons d'importation.",
    contents: [
      "1 Gigot d'agneau entier ou tranché au choix (env. 1.8 kg)",
      "1 Épaule d'agneau prête à rôtir (env. 1.1 kg)",
      "8 Côtes d'agneau premières et secondes",
      "1 Portion de navarin / ragoût pré-découpé"
    ],
    maturation: "Découpe fraîche après ressuage",
    chefTip: "Le gigot d'agneau se déguste rosé à 55°C à cœur. Ajoutez une gousse d'ail en chemise et du romarin frais.",
    storage: "Sous vide individuel étiqueté avec DLC de 18 jours. Moins d'un demi-tiroir de congélateur."
  },
  {
    id: "cote-boeuf-limousine-12kg",
    category: "limousine",
    title: "Côte de Bœuf Limousine d'Exception (1,2 kg)",
    subtitle: "Maturation 21 jours en chambre sèche — Pièce sur os",
    weight: 1.2,
    pricePerKg: 35.00,
    price: 42.00,
    badge: "Pièce Maîtresse",
    badgeType: "red",
    // Image locale garantie : véritable côte de bœuf avec os et persillé authentique
    image: "assets/cote-de-boeuf.jpg",
    description: "La star des amateurs de viande rouge. Découpée dans le train de côtes avec son os long, épaisseur généreuse de 5 cm. Persillé intramusculaire fin typique de la Limousine pour des saveurs intenses de noisette.",
    contents: [
      "1 Côte de bœuf de 1,2 kg sous vide individuel haute protection"
    ],
    maturation: "Maturation prolongée 21 jours sur os",
    chefTip: "Cuisson idéale : saisie 4 minutes par face à la braise ou poêle en fonte, puis 10 minutes de repos sous papier alu avant dégustation.",
    storage: "DLC 21 jours au frais (0 à 3°C) ou congélation immédiate."
  },
  {
    id: "paves-rumsteak-fauxfilet",
    category: "limousine",
    title: "Duo de Pavés de Rumsteak & Faux-Filet (800g)",
    subtitle: "4 steaks épais parés à cœur (2x 2 pièces)",
    weight: 0.8,
    pricePerKg: 30.00,
    price: 24.00,
    badge: "Grillade d'Artisan",
    badgeType: "dark",
    // Image locale garantie : véritable steak de bœuf cru épais assaisonné
    image: "assets/paves-rumsteak.jpg",
    description: "Les morceaux de grillade les plus réputés : 2 pavés de rumsteak et 2 faux-filets persillés. Tendreté absolue, parés au couteau sans déchet pour une saisie rapide à la poêle.",
    contents: [
      "2 Pavés de rumsteak épais (2x 200g)",
      "2 Faux-filets persillés (2x 200g)"
    ],
    maturation: "Maturation 14 jours",
    chefTip: "Cuisson vive : 2 minutes par face dans une poêle très chaude avec une noisette de beurre fondu.",
    storage: "Conditionné par sachet sous-vide de 2 pièces."
  },
  {
    id: "carre-agneau-limousin",
    category: "mouton",
    title: "Carré d'Agneau du Limousin Manchonnée (700g)",
    subtitle: "8 côtes premières préparées à la française",
    weight: 0.7,
    pricePerKg: 38.00,
    price: 26.60,
    badge: "Haute Boucherie",
    badgeType: "gold",
    // Image locale garantie : véritable carré d'agneau cru avec côtes manchonnées
    image: "assets/carre-agneau.jpg",
    description: "Le summum de la gastronomie ovine : 8 côtes premières manchonnées à la main au couteau (os dégagés). Chair tendre et parfumée, idéale rôtie au four en croûte d'herbes.",
    contents: [
      "1 Carré de 8 côtes premières manchonnées à la main (env. 700g)"
    ],
    maturation: "Découpe fraîche après ressuage",
    chefTip: "Rôtir 15 minutes à 200°C avec une croûte de chapelure, beurre et persil frais.",
    storage: "Sous vide individuel. DLC 18 jours au frais."
  }
];

// Guide des Découpes Bouchères (Inspiration Bigard / Beauvallet)
const BUTCHER_CUTS_DATA = {
  grillades: {
    title: "Les Pièces à Poêler & Griller",
    subtitle: "Tendreté instantanée et saisie à haute température",
    description: "Découpées dans les muscles les plus nobles du train de côtes et de la cuisse (faux-filet, rumsteak, entrecôte, bavette). Ces morceaux bénéficient d'une maturation de 14 jours minimum pour casser la rigidité des fibres musculaires.",
    idealCooking: "À feu vif, 2 à 3 min par face. Température à cœur : 50°C (bleu) à 54°C (saignant).",
    restingTip: "Règle d'or du maître boucher : toujours laisser reposer la viande cuite sur une assiette tiède 3 à 5 minutes pour redistribuer le jus de cuisson dans toute la pièce.",
    pieces: ["Faux-filet persillé", "Entrecôte épaisse", "Pavé de Rumsteak", "Bavette d'aloyau", "Côte de bœuf sur os"]
  },
  rotis: {
    title: "Les Pièces à Rôtir & au Four",
    subtitle: "Cuisson douce et caramélisation des sucs",
    description: "Préparés dans le filet, la tranche ou le rond de gîte. Nos rôtis sont bardés et ficelés à la main au fil de coton dans nos ateliers par notre artisan boucher pour garantir une forme régulière et une cuisson homogène.",
    idealCooking: "Saisir 5 minutes dans une cocotte pour dorer la surface, puis enfourner à 180°C (compter 15 min par livre pour une cuisson rosée).",
    restingTip: "Enveloppez le rôti dans du papier aluminium dès la sortie du four pendant 10 minutes avant de le trancher finement au couteau sans scie.",
    pieces: ["Rôti dans le filet", "Rosbif du boucher", "Rôti de veau sous la mère", "Rôti de rumsteak"]
  },
  mijotés: {
    title: "Les Morceaux Traditionnels à Mijoter",
    subtitle: "Cuisson lente à basse température et sauces généreuses",
    description: "Sélectionnés dans le paleron, le gîte et la macreuse. Ces viandes riches en collagène naturel se transforment après 2h30 à 3h de cuisson douce en bouchées fondantes qui se défont à la cuillère.",
    idealCooking: "Mijotage à frémissement doux (85-90°C) pendant 2h30 à 3h dans un bouillon au vin rouge ou aux carottes de nos maraîchers.",
    restingTip: "Les plats mijotés sont toujours meilleurs réchauffés le lendemain : les sucs et aromates se marient intimement avec la viande.",
    pieces: ["Paleron fondant", "Gîte à la moelle", "Macreuse à braiser", "Queue de bœuf"]
  },
  agneau: {
    title: "Les Découpes Ovines & Agneau de Terroir",
    subtitle: "Finesse de grain, douceur aromatique et sucs légers",
    description: "Issu d'agneaux nourris au lait maternel puis aux prairies de Haute-Vienne. La viande d'agneau fermier ne possède aucune amertume et offre une texture soyeuse particulièrement appréciée des gastronomes.",
    idealCooking: "Gigot au four à 180°C pendant 45 minutes pour un cœur rosé (55°C). Côtes grillées 2 minutes par face à la poêle.",
    restingTip: "Servir sur assiettes chaudes car le gras d'agneau fige plus rapidement que celui du bœuf.",
    pieces: ["Gigot d'agneau entier", "Carré manchonné à la française", "Côtes premières", "Épaule d'agneau roulée"]
  }
};

// État de l'Application
let cart = [];
let selectedDeliveryMode = 'chronofresh'; // 'chronofresh' ou 'ferme'
let activeFilter = 'all';

const TOURNEE = {
  dateExpedition: "Vendredi 20 Novembre 2026",
  dateCloture: "Jeudi 12 Novembre à 23h59",
  tauxReservation: 76,
  origineFerme: "GAEC du Mas Ferrat • Oradour-sur-Glane (87)"
};

// Initialisation au chargement
function initApp() {
  renderTourneeHeader();
  renderProducts();
  renderButcherCuts('grillades');
  updateCartUI();
  setupEventListeners();
}

// 1. Bandeau Tournée de Viande
function renderTourneeHeader() {
  const container = document.getElementById('tournee-bar');
  if (!container) return;
  container.innerHTML = `
    <div style="max-width: 1240px; margin: 0 auto; padding: 9px 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; font-size: 12px;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="background: #8a1827; color: #fff; padding: 3px 8px; border-radius: 3px; font-weight: 800; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;">
          TOURNEE FRAÎCHEUR CHRONOFRESH
        </span>
        <span style="color: #e6e2d8;">Prochaine expédition en température dirigée : <strong style="color: #ffffff;">${TOURNEE.dateExpedition}</strong></span>
      </div>
      <div style="display: flex; align-items: center; gap: 16px;">
        <span style="color: #c29b53;">Clôture des réservations : <strong style="color: #ffffff;">${TOURNEE.dateCloture}</strong></span>
        <span style="color: #9c978f; display: none; @media(min-width: 768px){ display: inline; }">• Élevage : ${TOURNEE.origineFerme}</span>
      </div>
    </div>
  `;
}

// 2. Rendu du Catalogue Produits
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeFilter);

  grid.innerHTML = filtered.map(prod => {
    const fallbackSrc = getMeatFallbackSvg(prod.id, prod.title, prod.weight);
    const badgeClass = prod.badgeType === 'red' ? 'badge-tag-red' : prod.badgeType === 'gold' ? 'badge-tag-gold' : 'badge-tag-dark';

    return `
      <article class="meat-card" itemscope itemtype="https://schema.org/Product">
        <div>
          <div class="meat-card-media">
            <img 
              src="${prod.image}" 
              alt="${prod.title} - Viande Limousine vente directe éleveur" 
              referrerpolicy="no-referrer"
              loading="lazy"
              itemprop="image"
              onerror="this.onerror=null; this.src='${fallbackSrc}';"
            />
            <div style="position: absolute; top: 12px; left: 12px;">
              <span class="badge-tag ${badgeClass}">${prod.badge}</span>
            </div>
            <div style="position: absolute; bottom: 12px; right: 12px; background: #ffffff; color: #101010; font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 3px; border: 1px solid #dcd7cc; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
              ${prod.weight} kg net • ${prod.pricePerKg.toFixed(2)} € / kg
            </div>
          </div>

          <div style="padding: 24px;">
            <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #8a1827; font-weight: 800; margin-bottom: 6px;">
              ${prod.category === 'limousine' ? 'Bœuf de Pure Race Limousine' : 'Agneau de Terroir Haut-Viennois'}
            </div>
            
            <h3 class="font-serif" itemprop="name" style="font-size: 24px; font-weight: bold; color: #101010; margin: 0 0 6px 0; line-height: 1.2;">
              ${prod.title}
            </h3>
            
            <p style="font-size: 13px; color: #6e6a64; margin: 0 0 12px 0;">${prod.subtitle}</p>
            <p itemprop="description" style="font-size: 13px; color: #3d3b38; line-height: 1.5; margin: 0 0 16px 0;">${prod.description}</p>

            <div style="background: #f8f6f0; border: 1px solid #e2ded5; border-radius: 4px; padding: 14px; margin-bottom: 14px;">
              <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #101010; margin-bottom: 8px;">
                🔪 Contenu détaillé du colis sous vide :
              </div>
              <ul style="margin: 0; padding-left: 18px; font-size: 12px; color: #45423e; line-height: 1.6;">
                ${prod.contents.map(c => `<li>${c}</li>`).join('')}
              </ul>
            </div>

            <div style="border-left: 3px solid #c29b53; padding-left: 10px; font-size: 12px; color: #45423e; line-height: 1.4; margin-bottom: 12px;">
              <strong style="color: #101010;">Conseil du boucher :</strong> ${prod.chefTip}
            </div>

            <div style="font-size: 11px; color: #6e6a64; line-height: 1.4;">
              <strong>Stockage & conservation :</strong> ${prod.storage}
            </div>
          </div>
        </div>

        <div style="padding: 20px 24px; border-top: 1px solid #eeeae1; background: #faf8f5;" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
          <meta itemprop="priceCurrency" content="EUR" />
          <meta itemprop="price" content="${prod.price.toFixed(2)}" />
          <meta itemprop="availability" content="https://schema.org/InStock" />
          
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 16px;">
            <div>
              <span class="font-serif" style="font-size: 28px; font-weight: bold; color: #101010;">${prod.price.toFixed(2)} €</span>
              <span style="font-size: 12px; color: #6e6a64; margin-left: 4px;">TTC</span>
            </div>
            <span style="font-size: 11px; color: #8a1827; font-weight: 700; background: #ffffff; border: 1px solid #e2ded5; padding: 4px 8px; border-radius: 3px;">
              ${prod.maturation}
            </span>
          </div>

          <button 
            type="button"
            onclick="addToCart('${prod.id}')"
            class="btn-boucher" 
            style="width: 100%;">
            <span>Réserver ce colis de viande</span>
            <span>→</span>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// 3. Guide de la Découpe Bouchère
function renderButcherCuts(categoryKey) {
  const data = BUTCHER_CUTS_DATA[categoryKey];
  if (!data) return;

  const titleEl = document.getElementById('cut-guide-title');
  const subtitleEl = document.getElementById('cut-guide-subtitle');
  const descEl = document.getElementById('cut-guide-desc');
  const cookingEl = document.getElementById('cut-guide-cooking');
  const restingEl = document.getElementById('cut-guide-resting');
  const piecesEl = document.getElementById('cut-guide-pieces');

  if (titleEl) titleEl.textContent = data.title;
  if (subtitleEl) subtitleEl.textContent = data.subtitle;
  if (descEl) descEl.textContent = data.description;
  if (cookingEl) cookingEl.textContent = data.idealCooking;
  if (restingEl) restingEl.textContent = data.restingTip;

  if (piecesEl) {
    piecesEl.innerHTML = data.pieces.map(piece => `
      <span style="display: inline-block; background: #ffffff; border: 1px solid #e2ded5; padding: 6px 12px; font-size: 12px; font-weight: 700; border-radius: 3px; color: #101010;">
        ✓ ${piece}
      </span>
    `).join('');
  }

  // Active state for tab buttons
  document.querySelectorAll('.cut-tab-btn').forEach(btn => {
    if (btn.dataset.cut === categoryKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// 4. Gestion du Panier (Ajout, Retrait, Quantités)
function addToCart(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...prod, quantity: 1 });
  }

  updateCartUI();
  openCartDrawer();
  triggerToast(`« ${prod.title} » ajouté à votre sélection`);
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  updateCartUI();
}

// 5. Calculs Financiers & Poids en direct
function calculateTotals() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalWeight = cart.reduce((sum, item) => sum + (item.weight * item.quantity), 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  let deliveryFee = 0;
  if (selectedDeliveryMode === 'chronofresh') {
    if (subtotal >= 150 || subtotal === 0) {
      deliveryFee = 0;
    } else {
      deliveryFee = 16.00;
    }
  } else {
    deliveryFee = 0; // Retrait ferme gratuit
  }

  const grandTotal = subtotal + deliveryFee;
  return { totalItems, totalWeight, subtotal, deliveryFee, grandTotal };
}

// 6. Mise à jour de l'interface du Panier
function updateCartUI() {
  const { totalItems, totalWeight, subtotal, deliveryFee, grandTotal } = calculateTotals();

  const countBadge = document.getElementById('cart-count-badge');
  if (countBadge) {
    countBadge.textContent = totalItems;
    countBadge.style.display = totalItems > 0 ? 'inline-flex' : 'none';
  }

  const container = document.getElementById('cart-items-container');
  const emptyState = document.getElementById('cart-empty-state');
  const footer = document.getElementById('cart-footer');

  if (container && emptyState && footer) {
    if (cart.length === 0) {
      container.innerHTML = '';
      emptyState.style.display = 'block';
      footer.style.display = 'none';
    } else {
      emptyState.style.display = 'none';
      footer.style.display = 'block';

      container.innerHTML = cart.map(item => `
        <div style="display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid #e2ded5;">
          <div style="width: 56px; height: 56px; border-radius: 4px; overflow: hidden; background: #eee; flex-shrink: 0;">
            <img 
              src="${item.image}" 
              alt="${item.title}" 
              referrerpolicy="no-referrer"
              onerror="this.onerror=null; this.src='${getMeatFallbackSvg(item.id, item.title, item.weight)}';" 
              style="width: 100%; height: 100%; object-fit: cover;"
            />
          </div>
          <div style="flex: 1; min-width: 0;">
            <h4 style="margin: 0; font-size: 13px; font-weight: bold; color: #101010; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.title}</h4>
            <div style="font-size: 11px; color: #6e6a64;">${item.weight} kg net • ${item.pricePerKg.toFixed(2)} €/kg</div>
            <div style="font-size: 13px; font-weight: bold; color: #8a1827; margin-top: 2px;">${(item.price * item.quantity).toFixed(2)} €</div>
          </div>
          <div style="display: flex; align-items: center; gap: 4px; background: #eeeae1; padding: 2px 6px; border-radius: 4px;">
            <button type="button" onclick="updateQuantity('${item.id}', -1)" style="border: none; background: transparent; cursor: pointer; font-weight: bold; padding: 2px 6px;">-</button>
            <span style="font-size: 12px; font-weight: bold; min-width: 16px; text-align: center;">${item.quantity}</span>
            <button type="button" onclick="updateQuantity('${item.id}', 1)" style="border: none; background: transparent; cursor: pointer; font-weight: bold; padding: 2px 6px;">+</button>
          </div>
          <button type="button" onclick="removeFromCart('${item.id}')" style="border: none; background: transparent; color: #9c978f; cursor: pointer; font-size: 16px; padding: 4px;" title="Supprimer">
            ✕
          </button>
        </div>
      `).join('');
    }
  }

  const subtotalEl = document.getElementById('cart-subtotal');
  const weightEl = document.getElementById('cart-weight');
  const deliveryEl = document.getElementById('cart-delivery-cost');
  const grandTotalEl = document.getElementById('cart-grand-total');
  const freeThresholdMsg = document.getElementById('cart-threshold-message');

  if (subtotalEl) subtotalEl.textContent = `${subtotal.toFixed(2)} €`;
  if (weightEl) weightEl.textContent = `${totalWeight.toFixed(1)} kg net de viande`;
  if (deliveryEl) deliveryEl.textContent = deliveryFee === 0 ? 'Offert' : `${deliveryFee.toFixed(2)} €`;
  if (grandTotalEl) grandTotalEl.textContent = `${grandTotal.toFixed(2)} €`;

  if (freeThresholdMsg && selectedDeliveryMode === 'chronofresh') {
    if (subtotal >= 150) {
      freeThresholdMsg.innerHTML = `<strong style="color: #8a1827;">Livraison Chronofresh réfrigérée offerte !</strong> (Commande ≥ 150 €)`;
    } else {
      const remaining = 150 - subtotal;
      freeThresholdMsg.innerHTML = `Plus que <strong>${remaining.toFixed(2)} €</strong> pour bénéficier de la livraison Chronofresh offerte.`;
    }
  }
}

// 7. Tiroir Panier Latéral
function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    backdrop.classList.add('open');
    drawer.classList.add('open');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
  }
}

// 8. Choix Mode Livraison
function setDeliveryMode(mode) {
  selectedDeliveryMode = mode;
  document.querySelectorAll('.delivery-mode-btn').forEach(btn => {
    if (btn.dataset.mode === mode) {
      btn.style.backgroundColor = '#8a1827';
      btn.style.color = '#ffffff';
      btn.style.borderColor = '#8a1827';
    } else {
      btn.style.backgroundColor = '#ffffff';
      btn.style.color = '#101010';
      btn.style.borderColor = '#dcd7cc';
    }
  });
  updateCartUI();
}

// 9. Filtrage Produits
function filterCategory(category) {
  activeFilter = category;
  document.querySelectorAll('.filter-pill').forEach(btn => {
    if (btn.dataset.category === category) {
      btn.style.backgroundColor = '#101010';
      btn.style.color = '#ffffff';
    } else {
      btn.style.backgroundColor = '#eeeae1';
      btn.style.color = '#45423e';
    }
  });
  renderProducts();
}

// 10. Notification Toast
function triggerToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  const textEl = toast.querySelector('.toast-text');
  if (textEl) textEl.textContent = message;
  toast.style.display = 'flex';
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => { toast.style.display = 'none'; }, 300);
  }, 2600);
}

// 11. Modal Commande
function openCheckoutModal() {
  const { totalItems, grandTotal, totalWeight } = calculateTotals();
  if (totalItems === 0) {
    alert("Votre panier est vide. Veuillez sélectionner un colis de viande.");
    return;
  }

  const modal = document.getElementById('checkout-modal');
  if (!modal) return;

  const totalEl = document.getElementById('checkout-modal-total');
  const weightEl = document.getElementById('checkout-modal-weight');
  const sessionEl = document.getElementById('checkout-modal-session');

  if (totalEl) totalEl.textContent = `${grandTotal.toFixed(2)} €`;
  if (weightEl) weightEl.textContent = `${totalWeight.toFixed(1)} kg net`;
  if (sessionEl) sessionEl.textContent = TOURNEE.dateExpedition;

  closeCartDrawer();
  modal.style.display = 'flex';
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.style.display = 'none';
}

function processSimulatedPayment(e) {
  e.preventDefault();
  const btn = document.getElementById('checkout-pay-btn');
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Validation sécurisée en cours...";
  }

  setTimeout(() => {
    alert("Commande confirmée avec succès !\n\nEn production, cette étape déclenche Stripe Checkout sans frais d'abonnement Shopify, et transmet la commande préparée aux éleveurs d'Antoine & Alban avec le bon d'expédition Chronofresh.");
    cart = [];
    updateCartUI();
    closeCheckoutModal();
    if (btn) {
      btn.disabled = false;
      btn.textContent = "Confirmer ma commande de viande";
    }
  }, 1000);
}

// 12. Écouteurs d'événements
function setupEventListeners() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });
  }
}

// Exposer globalement sur window
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.setDeliveryMode = setDeliveryMode;
window.filterCategory = filterCategory;
window.renderButcherCuts = renderButcherCuts;
window.openCheckoutModal = openCheckoutModal;
window.closeCheckoutModal = closeCheckoutModal;
window.processSimulatedPayment = processSimulatedPayment;
window.getMeatFallbackSvg = getMeatFallbackSvg;

document.addEventListener('DOMContentLoaded', initApp);
