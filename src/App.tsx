/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState, useEffect } from "react";

const REVIEWS = [
  {
    name: "Максим К.",
    initials: "МК",
    color: "#1a4a8a",
    text: "Отлично! Быстро и качественно поменяли тормозные колодки. Мастер всё объяснил, показал старые детали. Цена адекватная. Рекомендую!",
    stars: 5,
    date: "10 января 2025",
    platform: "Яндекс.Карты",
  },
  {
    name: "Алексей Фаизов",
    initials: "АФ",
    color: "#2a5a3a",
    text: "Всё отлично и профессионально. Приехал с проблемой в подвеске, за полтора часа решили вопрос. Приятно работать с людьми, которые знают своё дело.",
    stars: 5,
    date: "4 июня 2025",
    platform: "Яндекс.Карты",
  },
  {
    name: "Дмитрий М.",
    initials: "ДМ",
    color: "#6a1a1a",
    text: "Удобно, качественно и быстро. Записался накануне, приехал в назначенное время, без очереди. Сделали ТО чётко по регламенту. Буду ездить только сюда.",
    stars: 5,
    date: "2 марта 2025",
    platform: "Яндекс.Карты",
  },
  {
    name: "Сергей Волков",
    initials: "СВ",
    color: "#4a2a7a",
    text: "Езжу в АвтоФокус уже лет 7. Сначала привёл свою Приору, потом Honda. Менялись машины — сервис остался одинаково хорошим. Доверяю полностью.",
    stars: 5,
    date: "15 февраля 2025",
    platform: "2ГИС",
  },
  {
    name: "Ольга Рябова",
    initials: "ОР",
    color: "#7a3a1a",
    text: "Наконец-то нашла автосервис, где не пытаются тебя развести как женщину. Объяснили всё понятно, показали что меняли, дали гарантию. Цены честные.",
    stars: 5,
    date: "28 апреля 2025",
    platform: "Отзовик",
  },
  {
    name: "Игорь Петров",
    initials: "ИП",
    color: "#1a5a5a",
    text: "Отличный сервис! Загнал машину с непонятным стуком. Диагностику сделали быстро, сразу сказали стоимость, не задирали. Через 2 часа ехал на исправной машине.",
    stars: 5,
    date: "7 марта 2025",
    platform: "Google Maps",
  },
  {
    name: "Надежда Ситникова",
    initials: "НС",
    color: "#3a5a1a",
    text: "Приехала с клиентом на замену масла. Заодно мастер заметил и показал проблему с рулевой тягой — не навязывал, просто предупредил. Сделали всё в один день.",
    stars: 4,
    date: "19 января 2025",
    platform: "Яндекс.Карты",
  },
  {
    name: "Руслан Захаров",
    initials: "РЗ",
    color: "#8a4a1a",
    text: "Опытные мастера. Чувствуется, что люди работают не первый год. Всё сделали аккуратно, объяснили причину поломки. Машина теперь едет как новая.",
    stars: 5,
    date: "11 мая 2025",
    platform: "2ГИС",
  },
  {
    name: "Андрей Соколов",
    initials: "АС",
    color: "#1a3a6a",
    text: "Уже третий год езжу в АвтоФокус. Делали подвеску, сцепление, электрику. Всегда доволен результатом. Ребята реально профессионалы своего дела.",
    stars: 5,
    date: "3 апреля 2025",
    platform: "Яндекс.Карты",
  },
  {
    name: "Татьяна Крылова",
    initials: "ТК",
    color: "#5a1a5a",
    text: "Приятно удивлена! Быстро, честно, по делу. Сразу назвали цену — не стали тянуть резину. Работа выполнена аккуратно. Буду рекомендовать знакомым.",
    stars: 5,
    date: "22 февраля 2025",
    platform: "Google Maps",
  },
  {
    name: "Константин Ломов",
    initials: "КЛ",
    color: "#1a6a3a",
    text: "Нашёл через знакомых. Пригнал Kia с проблемой с КПП — думал, что надо менять. Мастера отремонтировали за разумные деньги. Экономия существенная.",
    stars: 5,
    date: "30 марта 2025",
    platform: "Отзовик",
  },
  {
    name: "Марина Белова",
    initials: "МБ",
    color: "#6a3a1a",
    text: "Хожу сюда уже 5 лет. Коллектив стабильный, мастера те же — это говорит о многом. Работают по записи, очередей нет. Всё чётко и по делу.",
    stars: 5,
    date: "14 апреля 2025",
    platform: "2ГИС",
  },
];

const TICKER_ITEMS = [
  "ДИАГНОСТИКА",
  "РЕМОНТ ДВИГАТЕЛЯ",
  "ТОРМОЗНАЯ СИСТЕМА",
  "ПОДВЕСКА",
  "ТО И ОБСЛУЖИВАНИЕ",
  "ЭЛЕКТРИКА АВТО",
  "СЦЕПЛЕНИЕ",
  "КОНДИЦИОНЕР",
  "28 ЛЕТ В МАГНИТОГОРСКЕ",
];

const SERVICES = [
  {
    img: "/TechObsluzhivanie.jpg",
    alt: "/TechObsluzhivanie.png",
    name: "Техническое обслуживание",
    desc: "Плановое ТО по регламенту производителя: замена масла, фильтров, свечей, ремней. Продлим жизнь вашего автомобиля.",
    num: "01",
  },
  {
    img: "/PcDiagnostika.jpg",
    alt: "/PcDiagnostika.png",
    name: "Компьютерная диагностика",
    desc: "Точная диагностика всех систем автомобиля современным оборудованием. Выявим неисправность до 30 минут.",
    num: "02",
  },
  {
    img: "/RemontDvigatelya.png",
    alt: "/RemontDvigatelya.jpg",
    name: "Ремонт двигателя",
    desc: "Капитальный и текущий ремонт двигателей всех типов. Замена прокладок, поршневой группы, коленвала.",
    num: "03",
  },
  {
    img: "/PodveskaAbdRbucgagu.jpg",
    alt: "/PodveskaAbdRbucgagu.png",
    name: "Подвеска и рулевое",
    desc: "Диагностика и ремонт подвески, замена амортизаторов, рычагов, шаровых, рулевых тяг и наконечников.",
    num: "04",
  },
  {
    img: "/TormozSistema.jpg",
    alt: "/TormozSistema.png",
    name: "Тормозная система",
    desc: "Замена тормозных колодок, дисков, барабанов. Прокачка и заправка тормозной жидкостью. Ваша безопасность — наш приоритет.",
    num: "05",
  },
  {
    img: "/Elektronika.jpg",
    alt: "/Elektronika.png",
    name: "Электрика и электроника",
    desc: "Ремонт электрооборудования, диагностика проводки, замена стартера и генератора, ремонт приборной панели.",
    num: "06",
  },
  {
    img: "/Kondizioner.jpg",
    alt: "/kondizioner.jpg",
    name: "Кондиционер и климат",
    desc: "Заправка кондиционера, поиск утечек, замена компрессора и радиатора. Комфорт в салоне в любую погоду.",
    num: "07",
  },
  {
    img: "/Pochinka KPP avto.jpg",
    alt: "/Pochinka KPP.jpg",
    name: "Сцепление и КПП",
    desc: "Замена комплекта сцепления, ремонт механических и автоматических коробок передач. Работа с гарантией.",
    num: "08",
  },
  {
    img: "/ChipTuning.jpg",
    alt: "/ChipTuning.png",
    name: "Чип-тюнинг",
    desc: "Программное увеличение мощности двигателя, отключение экологии, улучшение динамики автомобиля.",
    num: "09",
  },
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => obs.observe(el));

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
    // Reset submission state after animation
    setTimeout(() => {
      setIsSubmitted(false);
      setName("");
      setPhone("");
    }, 300);
  };

  const submitForm = () => {
    if (!name.trim() || !phone.trim()) {
      alert("Пожалуйста, заполните имя и телефон");
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      closeModal();
    }, 3500);
  };

  return (
    <>
      {/* HEADER */}
      <header
        id="header"
        style={{ boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none" }}
      >
        <a href="#" className="logo" style={{ textTransform: "uppercase" }}>
          <span style={{ color: "var(--red)" }}>Auto</span>
          <span style={{ color: "#ffffff" }}>Focus</span>
        </a>
        <nav>
          <a href="#services">Услуги</a>
          <a href="#why">О нас</a>
          <a href="#partners">Партнеры</a>
          <a href="#reviews">Отзывы</a>
          <a href="#contact">Контакты</a>
        </nav>
        <a href="tel:+79822743848" className="header-cta">
          📞 +7 (982) 274-38-48
        </a>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg"></div>

        <img
          src="/logo.png"
          alt="Автосервис АвтоФокус"
          className="hero-image absolute z-10 hidden lg:block"
          style={{
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            maxWidth: "500px",
            maxHeight: "70vh",
            objectFit: "contain",
            filter: "drop-shadow(0px 10px 30px rgba(0,0,0,0.8))",
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Работаем с 1996 года · Магнитогорск
          </div>
          <h1>
            АВТО
            <br />
            <span className="red">СЕРВИС</span>
            <br />
            <span className="outline">КОТОРОМУ</span>
            <br />
            ДОВЕРЯЮТ
          </h1>
          <p className="hero-sub">
            <strong>28 лет</strong> в Магнитогорске. Профессиональная
            диагностика, ремонт и обслуживание автомобилей любых марок. Без
            очередей, лишних слов и скрытых доплат.
          </p>
          <div className="hero-actions">
            <a href="https://vk.ru/autofocusmgn" className="btn-primary" target="_blank" rel="noreferrer" style={{ zIndex: 10, position: 'relative' }}>
              ⚡ Записаться на сервис
            </a>
            <a href="tel:+79822743848" className="btn-outline" style={{ zIndex: 10, position: 'relative' }}>
              📞 +7 (982) 274-38-48
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">28</div>
              <div className="hero-stat-label">Лет опыта</div>
            </div>
            <div>
              <div className="hero-stat-num">4.4</div>
              <div className="hero-stat-label">Рейтинг Яндекс</div>
            </div>
            <div>
              <div className="hero-stat-num">100%</div>
              <div className="hero-stat-label">Гарантия работ</div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Листайте</span>
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-track" id="ticker">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-dot"></span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="services-header">
          <div>
            <div className="section-label reveal">— Что мы делаем</div>
            <h2 className="section-title reveal">НАШИ УСЛУГИ</h2>
            <p className="section-desc reveal">
              Весь спектр автосервисных работ под одной крышей. Опытные мастера,
              качественные запчасти, честные цены.
            </p>
          </div>
          <a href="https://vk.ru/autofocusmgn" className="btn-outline reveal" target="_blank" rel="noreferrer">
            Напишите нам
          </a>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="service-card reveal"
              style={{
                padding: "0",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                className="service-img-wrapper"
                style={{
                  width: "100%",
                  height: "180px",
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                <img
                  src={s.img}
                  alt={s.name}
                  onError={(e) => {
                    e.currentTarget.src = s.alt;
                  }}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  padding: "24px 36px 44px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="service-name" style={{ marginTop: "auto" }}>
                  {s.name}
                </div>
                <p className="service-desc">{s.desc}</p>
                <span
                  className="service-num"
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "24px",
                  }}
                >
                  {s.num}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="why" id="why">
        <div className="why-inner">
          <div>
            <div className="section-label reveal">— Почему выбирают нас</div>
            <h2 className="section-title reveal">
              28 ЛЕТ
              <br />
              НАДЁЖНОСТИ
            </h2>
            <ul className="why-list">
              <li className="why-item reveal">
                <div className="why-item-icon">🏆</div>
                <div>
                  <div className="why-item-title">Опыт, которому доверяют</div>
                  <p className="why-item-text">
                    С 1996 года мы отремонтировали тысячи автомобилей в
                    Магнитогорске. Каждый мастер — профессионал с многолетним
                    стажем.
                  </p>
                </div>
              </li>
              <li className="why-item reveal">
                <div className="why-item-icon">💰</div>
                <div>
                  <div className="why-item-title">
                    Честные цены без сюрпризов
                  </div>
                  <p className="why-item-text">
                    Стоимость работ озвучиваем до начала ремонта. Никаких
                    скрытых доплат и «неожиданно» найденных поломок.
                  </p>
                </div>
              </li>
              <li className="why-item reveal">
                <div className="why-item-icon">⏱</div>
                <div>
                  <div className="why-item-title">
                    Работаем быстро и точно в срок
                  </div>
                  <p className="why-item-text">
                    Ценим ваше время. Называем реальные сроки и соблюдаем их.
                    Экстренный ремонт — в день обращения.
                  </p>
                </div>
              </li>
              <li className="why-item reveal">
                <div className="why-item-icon">🛡</div>
                <div>
                  <div className="why-item-title">
                    Гарантия на все виды работ
                  </div>
                  <p className="why-item-text">
                    Даём письменную гарантию на выполненные работы и
                    установленные запчасти.
                  </p>
                </div>
              </li>
              <li className="why-item reveal">
                <div className="why-item-icon">🔩</div>
                <div>
                  <div className="why-item-title">
                    Только качественные запчасти
                  </div>
                  <p className="why-item-text">
                    Работаем с проверенными поставщиками. Оригинальные и
                    качественные аналоги — по выбору клиента.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="why-visual reveal">
            <div className="why-badge-big">
              <span>28</span>
              <span>Лет на рынке</span>
            </div>
            <p className="why-quote">
              «Нас не нужно рекламировать — нас рекомендуют. За 28 лет тысячи
              магнитогорцев доверили нам свои автомобили»
            </p>
            <div
              style={{
                marginTop: "32px",
                padding: "24px",
                border: "1px solid rgba(208,35,26,0.2)",
                background: "rgba(208,35,26,0.05)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--red)",
                  marginBottom: "16px",
                }}
              >
                Наш рейтинг на Яндекс.Картах
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "4rem",
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  4.4
                </div>
                <div>
                  <div
                    style={{
                      color: "var(--gold)",
                      fontSize: "1.2rem",
                      letterSpacing: "3px",
                    }}
                  >
                    ★★★★☆
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--gray2)",
                      marginTop: "4px",
                    }}
                  >
                    На основании реальных отзывов
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section
        className="partners"
        id="partners"
        style={{ background: "var(--dark2)", padding: "100px 5%" }}
      >
        <div className="section-label reveal">— С кем мы работаем</div>
        <h2 className="section-title reveal">НАШИ ПАРТНЕРЫ</h2>

        <div
          className="partners-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            marginTop: "60px",
          }}
        >
          <a
            href="https://www.starline.ru"
            target="_blank"
            rel="noreferrer"
            className="partner-card reveal"
            style={{
              background: "#111",
              border: "2px solid #D0231A",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              borderRadius: "12px",
              transition: "transform 0.3s",
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: "900",
                color: "#fff",
                marginBottom: "10px",
                textTransform: "uppercase",
              }}
            >
              Star<span style={{ color: "#D0231A" }}>Line</span>
            </div>
            <div
              style={{ color: "#D0231A", fontSize: "1rem", fontWeight: "bold" }}
            >
              www.starline.ru
            </div>
          </a>
          <a
            href="https://vk.com/id414854521"
            target="_blank"
            rel="noreferrer"
            className="partner-card reveal"
            style={{
              background: "var(--dark)",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              borderRadius: "12px",
              transition: "transform 0.3s",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#fff",
                marginBottom: "10px",
              }}
            >
              Авто ГБО
            </div>
            <div style={{ color: "var(--gray2)", fontSize: "0.9rem" }}>
              Перейти в ВК →
            </div>
          </a>
          <a
            href="https://vk.com/cityservice74"
            target="_blank"
            rel="noreferrer"
            className="partner-card reveal"
            style={{
              background: "var(--dark)",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              borderRadius: "12px",
              transition: "transform 0.3s",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#fff",
                marginBottom: "10px",
              }}
            >
              CityService
            </div>
            <div style={{ color: "var(--gray2)", fontSize: "0.9rem" }}>
              Перейти в ВК →
            </div>
          </a>
          <a
            href="https://vk.com/b_service"
            target="_blank"
            rel="noreferrer"
            className="partner-card reveal"
            style={{
              background: "var(--dark)",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              borderRadius: "12px",
              transition: "transform 0.3s",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#fff",
                marginBottom: "10px",
              }}
            >
              КОМ-ПОРТ
            </div>
            <div style={{ color: "var(--gray2)", fontSize: "0.9rem" }}>
              Перейти в ВК →
            </div>
          </a>
        </div>
      </section>

      {/* CTA BAND */}
      <div className="cta-band">
        <div>
          <div className="cta-band-title">
            ЗАПИШИТЕСЬ НА СЕРВИС
            <br />
            ПРЯМО СЕЙЧАС
          </div>
          <div className="cta-band-sub">
            Принимаем с Пн по Пт с 09:00 до 18:00
          </div>
        </div>
        <a
          href="https://vk.ru/autofocusmgn"
          className="btn-white"
          target="_blank"
          rel="noreferrer"
        >
          ✔ Напишите нам →
        </a>
      </div>

      {/* REVIEWS */}
      <section className="reviews" id="reviews">
        <div className="reviews-header">
          <div className="section-label reveal">— Отзывы клиентов</div>
          <h2 className="section-title reveal">
            ЧТО ГОВОРЯТ
            <br />
            НАШИ КЛИЕНТЫ
          </h2>
          <div className="rating-summary reveal">
            <div className="rating-num">4.4</div>
            <div>
              <div className="rating-stars">★★★★☆</div>
              <div className="rating-count">
                Реальные отзывы с Яндекс.Карт и других платформ
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-slider-wrap">
          <div className="reviews-track" id="reviewsTrack">
            {[...REVIEWS, ...REVIEWS].map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">
                  {"★".repeat(r.stars)}
                  {"☆".repeat(5 - r.stars)}
                </div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-author">
                  <div
                    className="review-avatar"
                    style={{
                      background: `${r.color}20`,
                      color: r.color,
                      border: `1.5px solid ${r.color}40`,
                    }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-date">
                      {r.date} · {r.platform}
                    </div>
                  </div>
                  <div className="review-verified">✓ Подтв.</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="section-label reveal">— Мы на карте</div>
        <h2 className="section-title reveal">КАК НАС НАЙТИ</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item reveal">
              <div className="contact-icon">📍</div>
              <div>
                <div className="contact-label">Адрес</div>
                <div className="contact-value">
                  <a
                    href="https://yandex.ru/maps/235/magnitogorsk/house/prospekt_lenina_89k5/YUEYfw9nT0MAQFtpfX94dH5nYQ==/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    просп. Ленина, 89, корп. 5,
                    <br />
                    Магнитогорск
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-item reveal">
              <div className="contact-icon">📱</div>
              <div>
                <div className="contact-label">ВКонтакте</div>
                <div className="contact-value">
                  <a
                    href="https://vk.ru/autofocusmgn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    vk.ru/autofocusmgn
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-item reveal">
              <div className="contact-icon">📞</div>
              <div>
                <div className="contact-label">Телефон</div>
                <div
                  className="contact-value"
                  style={{
                    fontSize: "1.3rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <a href="tel:+79822743848">+7 (982) 274-38-48</a>
                  <a href="tel:+79026178750">+7 (902) 617-87-50</a>
                </div>
              </div>
            </div>
            <div className="contact-item reveal">
              <div className="contact-icon">🕐</div>
              <div>
                <div className="contact-label">Режим работы</div>
                <div className="hours-grid" style={{ marginTop: "10px" }}>
                  <div className="hours-row">
                    <span className="day">Понедельник</span>
                    <span className="time open">09:00–18:00</span>
                  </div>
                  <div className="hours-row">
                    <span className="day">Вторник</span>
                    <span className="time open">09:00–18:00</span>
                  </div>
                  <div className="hours-row">
                    <span className="day">Среда</span>
                    <span className="time open">09:00–18:00</span>
                  </div>
                  <div className="hours-row">
                    <span className="day">Четверг</span>
                    <span className="time open">09:00–18:00</span>
                  </div>
                  <div className="hours-row">
                    <span className="day">Пятница</span>
                    <span className="time open">09:00–18:00</span>
                  </div>
                  <div className="hours-row">
                    <span className="day">Суббота</span>
                    <span className="time closed">Выходной</span>
                  </div>
                  <div className="hours-row">
                    <span className="day">Воскресенье</span>
                    <span className="time closed">Выходной</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="reveal"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginTop: "16px",
              }}
            >
              <a
                href="https://vk.ru/autofocusmgn"
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-flex" }}
              >
                ⚡ Напишите нам
              </a>
              <a href="tel:+79822743848" className="btn-outline">
                📞 Позвонить
              </a>
            </div>
          </div>

          <div className="map-embed reveal">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=59.063022%2C53.411614&z=16&pt=59.063022,53.411614,pm2rdl~&text=%D0%90%D0%B2%D1%82%D0%BE%D0%A4%D0%BE%D0%BA%D1%83%D1%81%20%D0%9C%D0%B0%D0%B3%D0%BD%D0%B8%D1%82%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA"
              allowFullScreen={true}
              loading="lazy"
              title="АвтоФокус на карте"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#f5f5f5", borderTop: "1px solid #ddd" }}>
        <div className="footer-logo" style={{ textTransform: "uppercase" }}>
          <span style={{ color: "#D0231A" }}>Auto</span>
          <span style={{ color: "#000000" }}>Focus</span>
        </div>
        <div className="footer-copy" style={{ color: "#666" }}>
          © {new Date().getFullYear()} AutoFocus · Автосервис в Магнитогорске
          <br />
          просп. Ленина, 89, корп. 5
        </div>
        <a
          href="tel:+79822743848"
          className="footer-phone"
          style={{ color: "#000" }}
        >
          +7 (982) 274-38-48
        </a>
      </footer>

      {/* MODAL */}
      <div
        className={`modal-overlay ${isModalOpen ? "open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        <div className="modal">
          <button className="modal-close" onClick={closeModal}>
            ✕
          </button>

          {!isSubmitted ? (
            <div id="modalForm">
              <div className="modal-title">ЗАПИСЬ НА СЕРВИС</div>
              <p className="modal-sub">
                Оставьте заявку — перезвоним в течение 15 минут и согласуем
                удобное время
              </p>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Ваше имя *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Ваш телефон *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <select defaultValue="">
                  <option value="" disabled>
                    Выберите услугу
                  </option>
                  <option>Техническое обслуживание (ТО)</option>
                  <option>Компьютерная диагностика</option>
                  <option>Ремонт двигателя</option>
                  <option>Подвеска и рулевое</option>
                  <option>Тормозная система</option>
                  <option>Электрика</option>
                  <option>Кондиционер</option>
                  <option>Сцепление и КПП</option>
                  <option>Чип-тюнинг</option>
                  <option>Другое</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Ваш автомобиль и описание проблемы (необязательно)"></textarea>
              </div>
              <button className="form-submit" onClick={submitForm}>
                ОТПРАВИТЬ ЗАЯВКУ →
              </button>
              <p className="form-privacy">
                Нажимая кнопку, вы соглашаетесь на обработку персональных
                данных. Не передаём данные третьим лицам.
              </p>
            </div>
          ) : (
            <div className="success-msg show">
              <div className="success-icon">✅</div>
              <div className="success-text">Заявка принята!</div>
              <p className="success-sub">
                Мы перезвоним вам в течение 15 минут
                <br />в рабочее время (Пн–Пт 09:00–18:00)
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
