var btn_adults = document.querySelector("#adults-course");
var btn_teens = document.querySelector("#teens-course");
var btn_kids = document.querySelector("#kids-course");
var btn_tots = document.querySelector("#tots-course");
var btn_littlekids = document.querySelector("#littlekids-course");
var btn_german = document.querySelector("#german-course");
var btn_french = document.querySelector("#french-course");
var btn_spanish = document.querySelector("#spanish-course");
var btn_moreIdioms = document.querySelector("#text-more-idioms");
var btn_closeInfo = document.querySelector(".close-button");

let modal_info = document.querySelector(".modal-info");

let titleAboutCourse = document.createElement("h2");
titleAboutCourse.classList.add("title-about-course");

let subtitleAboutCourse = document.createElement("h3");
subtitleAboutCourse.classList.add("subtitle-about-course");

let textAboutCourseLeft = document.createElement("p"); //paragrafo
textAboutCourseLeft.classList.add("text-about-course-left");

let textAboutCourseRight = document.createElement("p"); //paragrafo
textAboutCourseRight.classList.add("text-about-course-right");

let sum_adults = document.querySelector("#sum-adults");
let sum_teens = document.querySelector("#sum-teens");
let sum_kids = document.querySelector("#sum-kids");
let sum_tots = document.querySelector("#sum-tots");
let sum_german = document.querySelector("#sum-german");
let sum_french = document.querySelector("#sum-french");
let sum_spanish = document.querySelector("#sum-spanish");

function viewCoursesInfo(id) {
  document.querySelector(id).style.display = "block";
  modal_info.appendChild(titleAboutCourse);
  modal_info.appendChild(textAboutCourseLeft);
  modal_info.appendChild(textAboutCourseRight);
  modal_info.appendChild(subtitleAboutCourse);
}

function closeCoursesInfo(id) {
  document.querySelector(id).style.display = "none";
  modal_info.removeChild(titleAboutCourse);
  modal_info.removeChild(textAboutCourseLeft);
  modal_info.removeChild(textAboutCourseRight);
  modal_info.removeChild(subtitleAboutCourse);
}

function openCoursesInfo(
  btn,
  titleCourse,
  subtitleCourse,
  textCourseLeft,
  textCourseRight
) {
  var courseTitle = titleCourse;
  var courseSubtitle = subtitleCourse;
  var courseTextLeft = textCourseLeft;
  var courseTextRight = textCourseRight;

  btn.addEventListener("click", function () {
    viewCoursesInfo(".courses-info");
    titleAboutCourse.innerHTML = courseTitle;
    subtitleAboutCourse.innerHTML = courseSubtitle;
    textAboutCourseLeft.innerHTML = courseTextLeft;
    textAboutCourseRight.innerHTML = courseTextRight;
  });
}

document.querySelector(".whatsapp-float").addEventListener(
  "click",
  function () {
    fbq("track", "Contact");
  },
  false
);

let btnWhatsAppModal =
  "<button><div id='container-btn-whatsapp-modal'><div class='icon-whatsapp-modal'><i class='fa-brands fa-whatsapp fa-xl' style='color: white;'></i></div><b>Conversar agora</b></div></button>";

let btnWhatsAppAdults =
  "<a class='specific-course-link-adults' href='https://api.whatsapp.com/send?phone=555130563333&text=Ol%C3%A1%2C%20estava%20no%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20curso%20de%20ingl%C3%AAs%20Adults.'>" +
  btnWhatsAppModal +
  "</a>";

let btnWhatsAppTeens =
  "<a class='specific-course-link-teens' href='https://api.whatsapp.com/send?phone=555130563333&text=Ol%C3%A1%2C%20estava%20no%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20curso%20de%20ingl%C3%AAs%20Teens.'>" +
  btnWhatsAppModal +
  "</a>";

let btnWhatsAppKids =
  "<a class='specific-course-link-kids' href='https://api.whatsapp.com/send?phone=555130563333&text=Ol%C3%A1%2C%20estava%20no%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20curso%20de%20ingl%C3%AAs%20Kids.'>" +
  btnWhatsAppModal +
  "</a>";

let btnWhatsAppLittlekids =
  "<a class='specific-course-link-littlekids' href='https://api.whatsapp.com/send?phone=555130563333&text=Ol%C3%A1%2C%20estava%20no%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20curso%20de%20ingl%C3%AAs%20Little%20Kids.'>" +
  btnWhatsAppModal +
  "</a>";

let btnWhatsAppTots =
  "<a class='specific-course-link-tots' href='https://api.whatsapp.com/send?phone=555130563333&text=Ol%C3%A1%2C%20estava%20no%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20curso%20de%20ingl%C3%AAs%20Tots.'>" +
  btnWhatsAppModal +
  "</a>";

let btnWhatsAppGerman =
  "<a class='specific-course-link-german' href='https://api.whatsapp.com/send?phone=555130563333&text=Ol%C3%A1%2C%20estava%20no%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20curso%20de%20Alem%C3%A3o.'>" +
  btnWhatsAppModal +
  "</a>";

let btnWhatsAppFrench =
  "<a class='specific-course-link-french' href='https://api.whatsapp.com/send?phone=555130563333&text=Ol%C3%A1%2C%20estava%20no%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20curso%20de%20Franc%C3%AAs.'>" +
  btnWhatsAppModal +
  "</a>";

let btnWhatsAppSpanish =
  "<a class='specific-course-link-spanish' href='https://api.whatsapp.com/send?phone=555130563333&text=Ol%C3%A1%2C%20estava%20no%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20curso%20de%20Espanhol.'>" +
  btnWhatsAppModal +
  "</a>";

let btnWhatsAppMoreIdioms =
  "<a class='specific-course-link-moreidioms' href='https://api.whatsapp.com/send?phone=555130563333&text=Ol%C3%A1%2C%20estava%20no%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20cursos.'>" +
  btnWhatsAppModal +
  "</a>";

function clickCloseCoursesInfo(id) {
  var idDivCourseInfo = id;
  btn_closeInfo.addEventListener("click", function () {
    closeCoursesInfo(idDivCourseInfo);
  });
}

let titleCourseAdults = "Inglês Adults";
let subtitleAboutCourseAdults = "Inglês para adultos";
let textCourseLeftAdults =
  "<b>Sobre o curso:</b></br></br>Curso prático e objetivo, desenvolvido para quem tem pouco tempo para estudar inglês. Você irá aprender a se comunicar em situações cotidianas, no trabalho, em viagens internacionais e ainda alcançar o melhor resultado em testes de proficiência.</br></br>O curso possui material didático completo e atualizado, um assistente pessoal que corrige a pronúncia e ajuda a praticar o inglês – o <b>Wiz.me</b>, além da <b>Wizpen</b>, a caneta que fala inglês. ";
let textCourseRightAdults =
  "<b>Estrutura do curso:</b></br></br><b>Total de módulos:</b> 04</b></br></br><b>Tempo previsto para conclusão:</b></br><b>Regular:</b> 2 aulas semanais - Formação em 4 Anos.</br><b>Semi-intensivo:</b> 4 aulas semanais - Formação em 2 Anos.</br><b>Intensivo:</b> Formação em 10 meses.</br><b>VIP:</b> Conforme necessidade do aluno.</br></br><b>Material didático:</b> Livro didático, livro de exercícios, pasta, Wiz.me e Wizpen (opcional).</br></br>Para mais informações sobre o idioma, converse com um de nossos consultores educacionais:</br>" +
  btnWhatsAppAdults;

let titleCourseTeens = "Inglês Teens";
let subtitleAboutCourseTeens = "A partir de 11 anos";
let textCourseLeftTeens =
  "<b>Sobre o curso:</b></br></br>O jovem estudante progredirá rapidamente rumo ao inglês fluente, visando seu desenvolvimento acadêmico, viagens de intercâmbio e preparação profissional. Além de enfatizar a conversação, apresenta uma gramática direcionada para exames de proficiência, o vestibular e o Enem.</br></br> O curso possui material didático completo e atualizado, um assistente pessoal que corrige a pronúncia e ajuda a praticar o inglês - o <b>Wiz.me</b>, além da <b>Wizpen</b>, a caneta que fala inglês. ";
let textCourseRightTeens =
  "<b>Estrutura do curso:</b></br></br><b>Total de módulos:</b> 04</b></br></br><b>Tempo previsto para conclusão:</b></br><b>Regular:</b> 2 aulas semanais - Formação em 4 Anos.</br><b>Semi-intensivo:</b> 4 aulas semanais - Formação em 2 Anos.</br></br><b>Material didático:</b> Livro didático, livro de exercícios, mochila, Wiz.me e Wizpen (opcional).</br></br>Para mais informações sobre o curso, converse com um de nossos consultores educacionais:</br>" +
  btnWhatsAppTeens;

let titleCourseKids = "Inglês Kids";
let subtitleAboutCourseKids = "A partir de 8 anos";
let textCourseLeftKids =
  "<b>Sobre o curso:</b></br></br>Curso desenvolvido por especialistas em educação infantil para o ensino de crianças já alfabetizadas, <b>cursando do 3º ao 5º ano escolar</b> (normalmente com 8 a 10 anos de idade).</br></br>A infância é o melhor momento para aprender um segundo idioma, porque a criança aprende de forma fácil e não esquece mais. E a metodologia de ensino Wizard proporciona aprendizado sólido, através de práticas pedagógicas lúdicas e envolventes, que motivam a criança para continuar aprendendo. A turma do Little Wiz e seu cachorro Spot crescem junto com a criança, participando de aventuras e desafios, fator motivacional que gera interesse e favorece a aplicação de uma didática lúdica.</br></br> O curso foi projetado para utilizar o lúdico como estratégia de ensino – a criança aprende se divertindo e mantém-se motivada para continuar evoluindo no idioma.";
let textCourseRightKids =
  "<b>Estrutura do curso:</b></br></br><b>Total de módulos:</b> 03</b></br></br><b>Tempo previsto para conclusão:</b> 3 anos.</br></br><b>Material didático:</b> Livro didático, livro de exercícios, mochila, Wiz.me e Wizpen.</br></br><b>Faixa etária:</b> Crianças do 3º e 4º ano escolar.</br></br>Para mais informações sobre o curso, converse com um de nossos consultores educacionais:</br>" +
  btnWhatsAppKids;

let titleCourseLittlekids = "Inglês Little Kids";
let subtitleAboutCourseLittlekids =
  "Para crianças em processo de alfabetização";
let textCourseLeftLittlekids =
  "<b>Sobre o curso:</b></br></br>Curso desenvolvido por especialistas em educação infantil, visando o ensino de crianças em processo de alfabetização, cursando o<b> 1º ou o 2º ano escolar</b>. A metodologia de ensino Wizard proporciona aprendizado sólido, através de práticas pedagógicas lúdicas e envolventes, que motivam a criança para continuar aprendendo. </br></br> A infância é o melhor momento para aprender um segundo idioma, porque a criança aprende de forma fácil e não esquece mais. E a metodologia de ensino Wizard proporciona aprendizado sólido, através de práticas pedagógicas lúdicas e envolventes, que motivam a criança para continuar aprendendo. </br></br>A <b>Wizpen</b> será companheira dentro e fora de sala.";
let textCourseRightLittlekids =
  "<b>Estrutura do curso:</b></br></br><b>Total de módulos:</b> 02</b></br></br><b>Tempo previsto para conclusão:</b> 2 anos.</br></br><b>Material didático:</b> Livro didático, livro de exercícios, mochila e Wizpen.</br></br><b>Faixa etária:</b> Crianças do 1º e 2º ano escolar.</br></br>Para mais informações sobre o curso, converse com um de nossos consultores educacionais:</br>" +
  btnWhatsAppLittlekids;

let titleCourseTots = "Inglês Tots";
let subtitleAboutCourseTots = "A partir de 4 anos";
let textCourseLeftTots =
  "<b>Sobre o curso:</b></br></br>Curso desenvolvido por especialistas em educação infantil, visando o ensino de crianças ainda não alfabetizadas, com especial foco na oralidade.</br></br> A infância é o melhor momento para aprender um segundo idioma, porque a criança aprende de forma fácil e não esquece mais. E a metodologia de ensino Wizard usa a diversão como estratégia de ensino: música, desenho, teatro de fantoches, jogos, entre outros.</br></br>O material e as técnicas de ensino levam em consideração cada fase do desenvolvimento cognitivo da criança, tendo em conta o conteúdo e a motivação para continuar aprendendo. Por isso, o curso é lúdico, colorido, cheio de brincadeiras e com grande eficácia no aprendizado.</br></br>A <b>Wizpen</b> será companheira dentro e fora de sala.";
let textCourseRightTots =
  "<b>Estrutura do curso:</b></br></br><b>Total de módulos:</b> 02</b></br></br><b>Tempo previsto para conclusão:</b> 2 anos.</br></br><b>Material didático:</b> Livro didático, livro de exercícios, mochila e Wizpen.</br></br><b>Faixa etária:</b> Crianças com 4 e 5 anos de idade.</br></br>Para mais informações sobre o curso, converse com um de nossos consultores educacionais:</br>" +
  btnWhatsAppTots;

let titleCourseGerman = "Curso de Alemão";
let subtitleAboutCourseGerman = "A partir de 14 anos";
let textCourseLeftGerman =
  "<b>Sobre o curso:</b></br></br>Uma língua é sempre mais que um conjunto de regras, é também uma porta aberta para se entender melhor o país e as pessoas.</br></br> Aprender alemão pode ser bem mais simples do que você imagina. Com a Wizard, você vai se sentir muito mais preparado para aprender esta língua tão famosa no mundo todo.</br></br>Alemão é uma das principais línguas na ciência, pesquisa e tecnologia, além de ser imprescindível também no âmbito cultural e do turismo. A Alemanha está no centro da Europa e mais 100 milhões de pessoas se comunicam em alemão. </br></br> Quem de fato quiser participar ativamente do futuro, está no rumo certo ao investir no alemão!";
let textCourseRightGerman =
  "<b>Estrutura do curso:</b></br></br><b>Total de módulos:</b> 03</b></br></br><b>Tempo previsto para conclusão:</b></br><b>Regular:</b> 2 aulas semanais - Formação em 4 Anos.</br><b>Semi-intensivo:</b> 4 aulas semanais - Formação em 2 Anos.</br><b>VIP:</b> Conforme necessidade do aluno.</br></br><b>Material didático:</b> Livro didático, livro de exercícios, pasta e Wizpen.</br></br><b>Ingresso:</b> A partir de 14 anos.</br></br>Para mais informações sobre o idioma, converse com um de nossos consultores educacionais:</br>" +
  btnWhatsAppGerman;

let titleCourseFrench = "Curso de Francês";
let subtitleAboutCourseFrench = "A partir de 14 anos";
let textCourseLeftFrench =
  "<b>Sobre o curso:</b></br></br>Aprender francês é a oportunidade de se comunicar com mais de 200 milhões de pessoas ao redor do mundo. É o idioma oficial de trabalho da ONU, Otan, Unesco, Cruz Vermelha e dos campeonatos internacionais de tênis. O francês é também a língua internacional da gastronomia, moda, teatro, artes visuais, dança e arquitetura.</br></br> Conhecer a língua francesa significa ter acesso, em versão original, aos grandes textos da literatura francesa, bem como ao cinema e à música. Famosa no mundo todo por ser considerada uma língua romântica, o francês é a língua de Victor Hugo, de Edith Piaf, de Jean-Paul Sartre, de Alain Delon, de Zinedine Zidane, entre tantas outras figuras importantes.</br></br>Aprender francês na Wizard é a garantia de aprender um idioma com qualidade e competência.";
let textCourseRightFrench =
  "<b>Estrutura do curso:</b></br></br><b>Total de módulos:</b> 03</b></br></br><b>Tempo previsto para conclusão:</b></br><b>Regular:</b> 2 aulas semanais - Formação em 4 Anos.</br><b>Semi-intensivo:</b> 4 aulas semanais - Formação em 2 Anos.</br><b>VIP:</b> Conforme necessidade do aluno.</br></br><b>Material didático:</b> Livro didático, livro de exercícios, pasta e Wizpen.</br></br><b>Ingresso:</b> A partir de 14 anos.</br></br>Para mais informações sobre o idioma, converse com um de nossos consultores educacionais:</br>" +
  btnWhatsAppFrench;

let titleCourseSpanish = "Curso de Espanhol";
let subtitleAboutCourseSpanish = "A partir de 14 anos";
let textCourseLeftSpanish =
  "<b>Sobre o curso:</b></br></br>Mais de 400 milhões de pessoas em todo o mundo (40 milhões só nos Estados Unidos) têm o espanhol como língua materna, sendo que outros tantos o estudam como segundo idioma. O espanhol é a quarta língua mais falada no mundo, superado apenas pelo Inglês, Mandarim e Hindu.</br></br>O espanhol é a segunda língua mais usada nos negócios, e o Brasil está cercado de países que falam espanhol. Esse idioma tornou-se um dos principais veículos de comunicação nos meios diplomáticos, no comércio mundial, nas competições esportivas, no turismo, nos encontros de líderes políticos mundiais, nos congressos sobre ciência, tecnologia entre outros.</br></br>Aprender espanhol na Wizard é a garantia para não se sentir isolado do mundo globalizado de hoje.";
let textCourseRightSpanish =
  "<b>Estrutura do curso:</b></br></br><b>Total de módulos:</b> 03</b></br></br><b>Tempo previsto para conclusão:</b></br><b>Regular:</b> 2 aulas semanais - Formação em 4 Anos.</br><b>Semi-intensivo:</b> 4 aulas semanais - Formação em 2 Anos.</br><b>VIP:</b> Conforme necessidade do aluno.</br></br><b>Material didático:</b> Livro didático, livro de exercícios, pasta e Wizpen (opcional).</br></br><b>Ingresso:</b> A partir de 14 anos.</br></br>Para mais informações sobre o idioma, converse com um de nossos consultores educacionais:</br>" +
  btnWhatsAppSpanish;

let titleCourseMoreIdioms = "Mais idiomas!";
let subtitleAboutCourseMoreIdioms = "A partir de 14 anos";
let textCourseLeftMoreIdioms =
  "Além do Inglês, Francês e Espanhol a Wizard conta também com mais cinco opções de idiomas:</br></br><table><tr><td><img src='./images/Bandeiras_Paises_ITALY.webp' alt='Bandeira representando o idioma Italiano.'></td><td> Italiano</td></tr><tr><td><img src='./images/Bandeiras_Paises_BRAZIL.webp' alt='Bandeira representando o idioma Português.'></td><td> Português</td></tr><tr><td><img src='./images/Bandeiras_Paises_JAPAN.webp' alt='Bandeira representando o idioma Japonês.'></td><td> Japonês</td></tr><tr><td><img src='./images/Bandeiras_Paises_CHINA.webp' alt='Bandeira representando o idioma Chinês.'></td><td> Chinês</td></tr></table>";
let textCourseRightMoreIdioms =
  "<b>Estrutura de cada curso:</b></br></br><b>Total de módulos:</b> 03</b></br></br><b>Tempo previsto para conclusão:</b></br><b>Regular:</b> 2 aulas semanais - Formação em 4 Anos.</br><b>Semi-intensivo:</b> 4 aulas semanais - Formação em 2 Anos.</br><b>VIP:</b> Conforme necessidade do aluno.</br></br><b>Material didático:</b> Livro didático, livro de exercícios, pasta e Wizpen.</br></br><b>Ingresso:</b> A partir de 14 anos.</br></br>Para mais informações sobre os idiomas, converse com um de nossos consultores educacionais:</br>" +
  btnWhatsAppMoreIdioms;

openCoursesInfo(
  btn_adults,
  titleCourseAdults,
  subtitleAboutCourseAdults,
  textCourseLeftAdults,
  textCourseRightAdults
);
openCoursesInfo(
  btn_teens,
  titleCourseTeens,
  subtitleAboutCourseTeens,
  textCourseLeftTeens,
  textCourseRightTeens
);
openCoursesInfo(
  btn_kids,
  titleCourseKids,
  subtitleAboutCourseKids,
  textCourseLeftKids,
  textCourseRightKids
);
openCoursesInfo(
  btn_littlekids,
  titleCourseLittlekids,
  subtitleAboutCourseLittlekids,
  textCourseLeftLittlekids,
  textCourseRightLittlekids
);
openCoursesInfo(
  btn_tots,
  titleCourseTots,
  subtitleAboutCourseTots,
  textCourseLeftTots,
  textCourseRightTots
);
openCoursesInfo(
  btn_german,
  titleCourseGerman,
  subtitleAboutCourseGerman,
  textCourseLeftGerman,
  textCourseRightGerman
);
openCoursesInfo(
  btn_french,
  titleCourseFrench,
  subtitleAboutCourseFrench,
  textCourseLeftFrench,
  textCourseRightFrench
);
openCoursesInfo(
  btn_spanish,
  titleCourseSpanish,
  subtitleAboutCourseSpanish,
  textCourseLeftSpanish,
  textCourseRightSpanish
);
openCoursesInfo(
  btn_moreIdioms,
  titleCourseMoreIdioms,
  subtitleAboutCourseMoreIdioms,
  textCourseLeftMoreIdioms,
  textCourseRightMoreIdioms
);

openCoursesInfo(
  sum_adults,
  titleCourseAdults,
  subtitleAboutCourseAdults,
  textCourseLeftAdults,
  textCourseRightAdults
);
openCoursesInfo(
  sum_teens,
  titleCourseTeens,
  subtitleAboutCourseTeens,
  textCourseLeftTeens,
  textCourseRightTeens
);
openCoursesInfo(
  sum_kids,
  titleCourseKids,
  subtitleAboutCourseKids,
  textCourseLeftKids,
  textCourseRightKids
);
openCoursesInfo(
  sum_tots,
  titleCourseTots,
  subtitleAboutCourseTots,
  textCourseLeftTots,
  textCourseRightTots
);
openCoursesInfo(
  sum_german,
  titleCourseGerman,
  subtitleAboutCourseGerman,
  textCourseLeftGerman,
  textCourseRightGerman
);
openCoursesInfo(
  sum_french,
  titleCourseFrench,
  subtitleAboutCourseFrench,
  textCourseLeftFrench,
  textCourseRightFrench
);
openCoursesInfo(
  sum_spanish,
  titleCourseSpanish,
  subtitleAboutCourseSpanish,
  textCourseLeftSpanish,
  textCourseRightSpanish
);

clickCloseCoursesInfo(".courses-info");

window.addEventListener("scroll", function () {
  var menu = document.querySelector("header");
  menu.classList.toggle("sticky", window.scrollY > 0);
});

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

window.sr = ScrollReveal({ reset: true });

sr.reveal(".title-about", { duration: 2000 });
sr.reveal(".text-about", { duration: 1700 });
sr.reveal(".image-about", { duration: 1900 });

sr.reveal(".title-teacher", { duration: 1000 });
sr.reveal(".text-teacher", { duration: 1700 });
sr.reveal(".image-teacher", { duration: 1900 });

sr.reveal(".title-method", { duration: 1000 });
sr.reveal(".text-method", { duration: 1500 });
sr.reveal(".image-method", { duration: 1600 });

sr.reveal("#modalities", { duration: 1700 });
sr.reveal("#courses", { duration: 1700 });
sr.reveal("#contact-us", { duration: 1700 });
