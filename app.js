// ==========================================================================
// MAISON DANS NOS PRÉS — LOGIQUE E-COMMERCE VENTE DIRECTE DE VIANDE
// ==========================================================================

// Générateur de visuel SVG de secours (Garantit 0 image cassée même hors ligne)
function getMeatFallbackSvg(type, title, weight) {
  const isBoeuf = type === 'limousine';
  const animalIcon = isBoeuf ? 'BŒUF RACE LIMOUSINE' : 'MOUTON DU LIMOUSIN';
  const colorBg = isBoeuf ? '%2324181a' : '%231c201d';
  const colorAccent = isBoeuf ? '%23c49a52' : '%23a6b89e';

  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect width="800" height="500" fill="${colorBg}"/><circle cx="400" cy="220" r="140" fill="none" stroke="${colorAccent}" stroke-width="1.5" stroke-dasharray="6 6" opacity="0.4"/><path d="M340 230 C340 180, 460 180, 460 230 C460 270, 410 280, 400 300 C390 280, 340 270, 340 230 Z" fill="${colorAccent}" opacity="0.25"/><text x="400" y="160" font-family="Georgia, serif" font-size="14" fill="${colorAccent}" text-anchor="middle" letter-spacing="4" font-weight="bold">${animalIcon}</text><text x="400" y="240" font-family="Georgia, serif" font-size="28" fill="%23ffffff" text-anchor="middle" font-weight="bold">${encodeURIComponent(title)}</text><text x="400" y="280" font-family="sans-serif" font-size="15" fill="%23d0ccc2" text-anchor="middle">Découpe sous vide • ${weight} kg net • Élevage Haute-Vienne</text><rect x="330" y="320" width="140" height="34" rx="4" fill="%23ffffff" fill-opacity="0.1" stroke="${colorAccent}" stroke-width="1"/><text x="400" y="342" font-family="sans-serif" font-size="12" fill="%23ffffff" text-anchor="middle" font-weight="bold">CIRCUIT 100% COURT</text></svg>`;
}

// Catalogue officiel : Vente directe de Viande (Race Limousine & Mouton)
const PRODUCTS = [
  {
    id: "colis-prestige-5kg",
    category: "limousine",
    title: "Colis Découverte Bœuf Limousin (5 kg)",
    subtitle: "Sélection idéale pour 2 à 4 personnes (env. 20 repas)",
    weight: 5,
    pricePerKg: 27.00,
    price: 135.00,
    badge: "Bœuf Limousin",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80",
    description: "Assortiment équilibré de bœuf de pure race Limousine élevé à l'herbe au GAEC du Mas Ferrat (Haute-Vienne). Viande maturée 14 jours pour une tendreté et un fondant exceptionnels.",
    contents: [
      "1 Rôti de bœuf tendre ficelé à la main (env. 900g)",
      "4 Pavés de rumsteak ou faux-filets (2x 2 pièces)",
      "6 Steaks hachés pur bœuf façon bouchère (3x 2 pièces)",
      "1 Pièce à bourguignon découpée en dés (env. 800g)",
      "4 Steaks minute tendres du boucher (2x 2 pièces)"
    ],
    maturation: "Maturation 14 jours sur carcasse",
    storage: "Chaque morceau est ensaché sous vide individuel avec étiquette (nom du morceau, poids et DLC 21 jours). Rentre dans un demi-tiroir de congélateur."
  },
  {
    id: "colis-reserve-10kg",
    category: "limousine",
    title: "Colis Grande Réserve Bœuf Limousin (10 kg)",
    subtitle: "Le format familial le plus économique (-13% au kilo)",
    weight: 10,
    pricePerKg: 23.50,
    price: 235.00,
    badge: "Le + Choisi des Familles",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    description: "Le colis complet pour approvisionner sereinement le foyer en viande rouge artisanale. Des grillades nobles aux rôtis dominicaux en passant par les viandes mijotées réconfortantes.",
    contents: [
      "2 Rôtis de bœuf fondants (2x env. 900g)",
      "1 Belle côte de bœuf ou 2 entrecôtes épaisses persillées",
      "8 Pavés de rumsteak & faux-filets parés au couteau",
      "12 Steaks hachés pur bœuf façon bouchère (6x 2 pièces)",
      "2 Sachets de morceaux à mijoter / bourguignon (2x 800g)",
      "1 Rosbif prêt à rôtir"
    ],
    maturation: "Maturation 14 à 18 jours",
    storage: "Occupe 1 tiroir standard de congélateur (env. 24 litres). Consommation recommandée sous 12 mois."
  },
  {
    id: "colis-demi-agneau-4kg",
    category: "mouton",
    title: "Colis Demi-Agneau Fermier du Limousin (4,5 kg)",
    subtitle: "Élevé au grand air dans les prairies de Haute-Vienne",
    weight: 4.5,
    pricePerKg: 26.50,
    price: 119.00,
    badge: "Agneau de nos Prés",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    description: "Notre cheptel ovin pâture librement sur les parcours herbagers naturels. La viande offre une chair délicatement rosée, fondante et subtile, sans le goût fort du mouton d'importation.",
    contents: [
      "1 Gigot d'agneau entier ou tranché au choix (env. 1.8 kg)",
      "1 Épaule d'agneau prête à rôtir (env. 1.1 kg)",
      "8 Côtes d'agneau premières et secondes",
      "1 Portion de ragoût / navarin découpé"
    ],
    maturation: "Découpe fraîche après ressuage",
    storage: "Emballage sous vide individuel étiqueté. Occupe moins d'un demi-tiroir de congélateur."
  },
  {
    id: "cote-boeuf-limousine-12kg",
    category: "limousine",
    title: "Côte de Bœuf Limousine d'Exception (1,2 kg)",
    subtitle: "Maturation 21 jours en chambre sèche — Pièce maîtresse",
    weight: 1.2,
    pricePerKg: 35.00,
    price: 42.00,
    badge: "Pièce Noble",
    image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80",
    description: "Pour les amateurs de grillades au feu de bois ou au four chaud. Épaisseur généreuse de 5 cm, os conservé, persillé intramusculaire fin typique de la Limousine.",
    contents: [
      "1 Côte de bœuf de 1,2 kg sous vide renforcé thermo-scellé"
    ],
    maturation: "21 jours de maturation sur os",
    storage: "Se conserve 21 jours au réfrigérateur (0-3°C) ou se congèle directement."
  },
  {
    id: "paves-rumsteak-fauxfilet",
    category: "limousine",
    title: "Duo de Pavés de Rumsteak & Faux-Filet (800g)",
    subtitle: "4 steaks épais prêts à poêler ou griller",
    weight: 0.8,
    pricePerKg: 30.00,
    price: 24.00,
    badge: "Grillades Express",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    description: "Les morceaux les plus tendres du bœuf, parés au couteau sans excès de gras. Cuisson rapide : 2 minutes sur chaque face pour un cœur saignant et juteux.",
    contents: [
      "2 Pavés de rumsteak épais (2x 200g)",
      "2 Faux-filets persillés (2x 200g)"
    ],
    maturation: "Maturation 14 jours",
    storage: "Conditionné par sachet sous-vide de 2 pièces."
  },
  {
    id: "carre-agneau-limousin",
    category: "mouton",
    title: "Carré d'Agneau du Limousin Manchonnée (700g)",
    subtitle: "8 côtes premières préparées à la perfection",
    weight: 0.7,
    pricePerKg: 38.00,
    price: 26.60,
    badge: "Agneau Gastronomique",
    image: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=800&q=80",
    description: "Le summum de la gastronomie ovine : os dégagés et manchonnés à la main par le boucher. Idéal rôti entier en croûte d'herbes au four.",
    contents: [
      "1 Carré de 8 côtes premières manchonnées (env. 700g)"
    ],
    maturation: "Découpe fraîche",
    storage: "Sous vide individuel. DLC 18 jours au frais."
  }
];

// État Global de l'Application
let cart = [];
let selectedDeliveryMode = 'chronofresh'; // 'chronofresh' ou 'ferme'
let activeFilter = 'all';

const TOURNEE = {
  dateExpedition: "Vendredi 20 Novembre 2026",
  dateCloture: "Jeudi 12 Novembre à 23h59",
  tauxReservation: 76,
  origineFerme: "GAEC du Mas Ferrat • Oradour-sur-Glane (87)"
};

// Initialisation au chargement du DOM
function initApp() {
  renderTourneeHeader();
  renderProducts();
  updateCartUI();
  setupEventListeners();
}

// 1. Rendu du bandeau d'expédition
function renderTourneeHeader() {
  const container = document.getElementById('tournee-bar');
  if (!container) return;
  container.innerHTML = `
    <div style="max-width: 1200px; margin: 0 auto; padding: 8px 16px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; font-size: 12px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="background: #2b2b2a; color: #fff; padding: 2px 8px; border-radius: 4px; font-weight: bold; font-size: 11px; letter-spacing: 0.05em;">
          PROCHAINE TOURNEE DE VIANDE
        </span>
        <span>Expédition réfrigérée garantie : <strong style="color: #ffffff;">${TOURNEE.dateExpedition}</strong></span>
      </div>
      <div style="display: flex; align-items: center; gap: 16px;">
        <span>Clôture des commandes : <strong style="color: #ffffff;">${TOURNEE.dateCloture}</strong></span>
        <span style="color: #9c978f;">• Origine : ${TOURNEE.origineFerme}</span>
      </div>
    </div>
  `;
}

// 2. Rendu dynamique du catalogue de viande
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeFilter);

  grid.innerHTML = filtered.map(prod => {
    const fallbackSrc = getMeatFallbackSvg(prod.category, prod.title, prod.weight);
    return `
      <article class="product-card">
        <div>
          <div class="product-image-wrap">
            <img 
              src="${prod.image}" 
              alt="${prod.title}" 
              referrerpolicy="no-referrer"
              loading="lazy"
              onerror="this.onerror=null; this.src='${fallbackSrc}';"
            />
            <div style="position: absolute; top: 12px; left: 12px; display: flex; flex-direction: column; gap: 6px;">
              <span class="badge-meat">${prod.badge}</span>
            </div>
            <div style="position: absolute; bottom: 12px; right: 12px;">
              <span class="badge-price-kg">${prod.weight} kg • ${prod.pricePerKg.toFixed(2)} € / kg</span>
            </div>
          </div>

          <div style="padding: 24px;">
            <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #8c6d3b; font-weight: bold; margin-bottom: 6px;">
              ${prod.category === 'limousine' ? 'Bœuf de Race Pure Limousine' : 'Agneau & Mouton de Haute-Vienne'}
            </div>
            
            <h3 class="font-serif" style="font-size: 22px; font-weight: bold; color: #121212; margin: 0 0 6px 0; line-height: 1.2;">
              ${prod.title}
            </h3>
            
            <p style="font-size: 13px; color: #6b665f; margin: 0 0 12px 0;">${prod.subtitle}</p>
            <p style="font-size: 13px; color: #3d3b38; line-height: 1.5; margin: 0 0 16px 0;">${prod.description}</p>

            <div style="background: #f7f5f0; border: 1px solid #e3dfd5; border-radius: 6px; padding: 14px; margin-bottom: 16px;">
              <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.08em; color: #121212; margin-bottom: 8px;">
                Contenu du colis sous-vide :
              </div>
              <ul style="margin: 0; padding-left: 18px; font-size: 12px; color: #4a4742; line-height: 1.6;">
                ${prod.contents.map(c => `<li>${c}</li>`).join('')}
              </ul>
            </div>

            <div style="font-size: 12px; color: #6b665f; line-height: 1.4;">
              <strong>Conservation :</strong> ${prod.storage}
            </div>
          </div>
        </div>

        <div style="padding: 20px 24px 24px; border-top: 1px solid #f0ece3; background: #faf8f5;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 16px;">
            <div>
              <span class="font-serif" style="font-size: 28px; font-weight: bold; color: #121212;">${prod.price.toFixed(2)} €</span>
              <span style="font-size: 12px; color: #6b665f; margin-left: 4px;">TTC</span>
            </div>
            <span style="font-size: 11px; color: #8c6d3b; font-weight: 600; background: #fff; border: 1px solid #e3dfd5; padding: 4px 8px; border-radius: 4px;">
              ${prod.maturation}
            </span>
          </div>

          <button 
            type="button"
            onclick="addToCart('${prod.id}')"
            class="btn-primary" 
            style="width: 100%;">
            <span>Ajouter ce colis au panier</span>
            <span>→</span>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// 3. Gestion du Panier (Ajout, Retrait, Quantités)
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
  triggerToast(`« ${prod.title} » ajouté à votre panier`);
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

// 4. Calculs Financiers & Poids en direct
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
    deliveryFee = 0; // Retrait à la ferme gratuit
  }

  const grandTotal = subtotal + deliveryFee;
  return { totalItems, totalWeight, subtotal, deliveryFee, grandTotal };
}

// 5. Mise à jour complète de l'interface du Panier
function updateCartUI() {
  const { totalItems, totalWeight, subtotal, deliveryFee, grandTotal } = calculateTotals();

  // Badge panier header
  const countBadge = document.getElementById('cart-count-badge');
  if (countBadge) {
    countBadge.textContent = totalItems;
    countBadge.style.display = totalItems > 0 ? 'inline-flex' : 'none';
  }

  // Éléments du Drawer
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
        <div style="display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid #e3dfd5;">
          <div style="width: 56px; height: 56px; border-radius: 4px; overflow: hidden; background: #eee; flex-shrink: 0;">
            <img 
              src="${item.image}" 
              alt="${item.title}" 
              referrerpolicy="no-referrer"
              onerror="this.onerror=null; this.src='${getMeatFallbackSvg(item.category, item.title, item.weight)}';" 
              style="width: 100%; height: 100%; object-fit: cover;"
            />
          </div>
          <div style="flex: 1; min-width: 0;">
            <h4 style="margin: 0; font-size: 13px; font-weight: bold; color: #121212; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.title}</h4>
            <div style="font-size: 11px; color: #6b665f;">${item.weight} kg net • ${item.pricePerKg.toFixed(2)} €/kg</div>
            <div style="font-size: 13px; font-weight: bold; color: #121212; margin-top: 2px;">${(item.price * item.quantity).toFixed(2)} €</div>
          </div>
          <div style="display: flex; align-items: center; gap: 4px; background: #f0ece3; padding: 2px 6px; border-radius: 4px;">
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

  // Chiffres résumés
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
      freeThresholdMsg.innerHTML = `<strong>Félicitations !</strong> Livraison Chronofresh réfrigérée offerte.`;
    } else {
      const remaining = 150 - subtotal;
      freeThresholdMsg.innerHTML = `Plus que <strong>${remaining.toFixed(2)} €</strong> pour bénéficier de la livraison Chronofresh offerte.`;
    }
  }
}

// 6. Ouverture / Fermeture du Panier Latéral
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

// 7. Choix du Mode de Livraison (Chronofresh vs Retrait Ferme)
function setDeliveryMode(mode) {
  selectedDeliveryMode = mode;
  document.querySelectorAll('.delivery-mode-btn').forEach(btn => {
    if (btn.dataset.mode === mode) {
      btn.style.backgroundColor = '#121212';
      btn.style.color = '#ffffff';
      btn.style.borderColor = '#121212';
    } else {
      btn.style.backgroundColor = '#ffffff';
      btn.style.color = '#121212';
      btn.style.borderColor = '#dcd7cc';
    }
  });
  updateCartUI();
}

// 8. Filtrage par Catégorie de Viande
function filterCategory(category) {
  activeFilter = category;
  document.querySelectorAll('.filter-pill').forEach(btn => {
    if (btn.dataset.category === category) {
      btn.style.backgroundColor = '#121212';
      btn.style.color = '#ffffff';
    } else {
      btn.style.backgroundColor = '#f0ece3';
      btn.style.color = '#4a4742';
    }
  });
  renderProducts();
}

// 9. Toast Notification
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

// 10. Modal de Finalisation de Commande
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
    alert("Réservation confirmée avec succès !\n\nEn production, cette étape déclenche Stripe Checkout (CB, Apple Pay) sans commission Shopify, et prévient Antoine & Alban par SMS avec le bon de préparation et le bordereau Chronofresh.");
    cart = [];
    updateCartUI();
    closeCheckoutModal();
    if (btn) {
      btn.disabled = false;
      btn.textContent = "Confirmer ma commande de viande";
    }
  }, 1000);
}

// 11. Initialisation des écouteurs d'événements
function setupEventListeners() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });
  }
}

// Exposer explicitement toutes les fonctions sur window pour garantir l'exécution des onclick
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.setDeliveryMode = setDeliveryMode;
window.filterCategory = filterCategory;
window.openCheckoutModal = openCheckoutModal;
window.closeCheckoutModal = closeCheckoutModal;
window.processSimulatedPayment = processSimulatedPayment;
window.getMeatFallbackSvg = getMeatFallbackSvg;

document.addEventListener('DOMContentLoaded', initApp);
