const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

const anchorElements = document.querySelectorAll("a");

anchorElements.forEach((anchor, index) => {
  anchor.textContent = siteContent.nav[`nav-item-${index + 1}`];
  anchor.setAttribute('class','italic')
});

document
  .querySelector("#logo-img")
  .setAttribute("src", siteContent.images["logo-img"]);

document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text button").textContent = siteContent.cta.button;

document
  .querySelector("#cta-img")
  .setAttribute("src", siteContent.images["cta-img"]);

const topContent = document.querySelector(".top-content");
const topContentHeadingElements = topContent.querySelectorAll(".text-content h4");
const topContentParagraphElements = topContent.querySelectorAll(".text-content p");

topContentHeadingElements.forEach((heading, index) => {
  const key = index === 0 ? siteContent["ana-içerik"]["özellikler-h4"] : siteContent["ana-içerik"]["hakkımızda-h4"];

  heading.textContent = key;
});

topContentParagraphElements.forEach((paragraph, index) => {
  const key = index === 0 ? siteContent["ana-içerik"]["özellikler-içerik"] : siteContent["ana-içerik"]["hakkımızda-içerik"];

  paragraph.textContent = key;
});


document
  .querySelector("#middle-img")
  .setAttribute("src", siteContent.images["accent-img"]);

const bottomContent = document.querySelector(".bottom-content");
const bottomContentHeadingElements = bottomContent.querySelectorAll(".text-content h4");
const bottomContentParagraphElements = bottomContent.querySelectorAll(".text-content p");

bottomContentHeadingElements.forEach((heading, index) => {
  let text = '';

  if(index === 0){
    text = siteContent["ana-içerik"]["servisler-h4"]
  } else if (index === 1){
    text = siteContent["ana-içerik"]["ürünler-h4"]
  } else {
    text = siteContent["ana-içerik"]["vizyon-h4"]
  }

  heading.textContent = text;
});

bottomContentParagraphElements.forEach((paragraph, index) => {
  let text = '';

  if(index === 0){
    text = siteContent["ana-içerik"]["servisler-içeriği"]
  } else if (index === 1){
    text = siteContent["ana-içerik"]["ürünler-içeriği"]
  } else {
    text = siteContent["ana-içerik"]["vizyon-içeriği"]
  }

  paragraph.textContent = text; 
});

document.querySelector('.contact h4').textContent = siteContent.iletisim["iletişim-h4"]

const contactParagraphElements = document.querySelectorAll('.contact p')

contactParagraphElements.forEach((paragraph, index) => {
  let text = '';

  if(index === 0){
    text = siteContent.iletisim.adres
  } else if (index === 1){
    text = siteContent.iletisim.telefon
  } else {
    text = siteContent.iletisim.email
  }

  paragraph.textContent = text; 
});



document.querySelector('footer a').setAttribute('class','bold')
document.querySelector('footer a').textContent= siteContent.footer.copyright