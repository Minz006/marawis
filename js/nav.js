//loading...
 window.addEventListener('load', () => {
const loading = document.querySelector('.lcr');
 if (loading) {
  loading.style.display = 'none';
 }});

// mode dark and light
var dark = document.querySelector('.hbg i');
var tema = localStorage.getItem('tema');


dark.onclick = function() {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    dark.className = 'fa-solid fa-sun';
    localStorage.setItem('tema' ,"dark");

  } else {
    dark.className = 'fa-solid fa-moon';
    localStorage.setItem("tema", 'light');

  }
}
if (tema === 'dark') {
  document.body.classList.add('dark');
}


// aktif skroll
window.addEventListener("scroll", function() {
  var nav = document.querySelector("header");
  nav.classList.toggle("gsr", window.scrollY > 0);
});

const bagian = document.querySelectorAll('section');
const tautanNavigasi = document.querySelectorAll('header nav ul li a');

const tautanMap = Array.from(tautanNavigasi).reduce((map, tautan) => {
  const id = tautan.getAttribute('href').substring(1);
  map[id] = tautan;
  return map;
}, {});

window.onscroll = () => {
  bagian.forEach(bagianSeksi => {
    const posisiScroll = window.scrollY;
    const ofset = bagianSeksi.offsetTop - 150;
    const tinggi = bagianSeksi.offsetHeight;
    const id = bagianSeksi.getAttribute('id');

    if (posisiScroll >= ofset && posisiScroll < ofset + tinggi) {
      tautanNavigasi.forEach(tautan => tautan.classList.remove('aktif'));
      tautanMap[id].classList.add('aktif');
    }
  });
};

//footer copyright 
var p = document.createElement('p');
p.innerHTML = '&copy;2023 MinProject. All rights reserved.';
p.setAttribute('style','color: var(--h);' );

var b = document.createElement('b');
b.innerHTML = 'maaf jika ada kesalahan, hubungi kami'
b.setAttribute('style', 'color: var(--s)');

var footer = document.querySelector('footer');
footer.appendChild(p);
footer.appendChild(b);