import logo from "./logo.svg";
import "./App.scss";
import "./Responsive.scss";
import { NavHashLink } from "react-router-hash-link";
import AOS from "aos";
import * as Feather from "react-icons/fi";
import * as Fa from "react-icons/fa";

import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect, useState } from "react";
import PortfolioItem from "./components/portfolioItem";
import ServiceItem from "./components/serviceItem";
import SpecialItem from "./components/specialitem";
import Message from "./components/Message";

import { useTranslation } from "react-i18next";
// ..
AOS.init();

function App() {
  const [responsive, setResponsive] = useState(false);
  const [modal, setModal] = useState(false);
  const { t } = useTranslation();
  const [data, setData] = useState({
    pages: "1-5",
    design: t("message.simple"),
    responsive: t("message.no"),
    cms: t("message.no"),
    languages: 1,
    shopping: t("message.no"),
    copyright: t("message.no"),
    seo: t("message.no"),
  });

  const sayt = [
    {
      name: t("message.pagesName"),
      page: ["1-5", "5-15", "15-35"],
      set: "pages",
    },

    {
      name: t("message.designName"),
      page: [t("message.no"), t("message.high"), t("message.special")],
      set: "design",
    },
    {
      name: t("message.responsiveName"),
      page: [t("message.no"), t("message.yes")],
      set: "responsive",
    },

    {
      name: t("message.cms"),
      page: [
        t("message.no"),
        t("message.standart"),
        t("message.possibilities"),
      ],
      set: "cms",
    },
    {
      name: t("message.languages"),
      subtitle: t("message.languagesSubtitle"),
      page: [1, 2, 3],
      set: "languages",
    },
    {
      name: t("message.shopping"),
      page: [
        t("message.no"),
        t("message.saleBasket"),
        t("message.saleBasketPlus"),
      ],
      set: "shopping",
    },
    {
      name: t("message.copyright"),
      subtitle: t("message.copyrightSubtitle"),
      page: [t("message.no"), t("message.copyPageTF"), t("message.copyPageFT")],
      set: "copyright",
    },
    {
      name: t("message.seo"),
      subtitle: t("message.seoSubtitle"),
      page: [
        t("message.no"),
        t("message.seoPhrase40"),
        t("message.seoPhrase90"),
      ],
      set: "seo",
    },
  ];
  const portfolioData = [
    {
      name: "ZarminaTravel",
      type: ["web", "all"],
      image: require("./images/zarmina.png"),
      link: "http://zarminatravel.uz/",
    },
    {
      name: "Bear Partner",
      type: ["web", "all", "branding"],
      image: require("./images/partner.png"),
      link: "https://bearpartner.com/",
    },
    {
      name: "Bolling",
      type: ["web", "all", "crm"],
      image: require("./images/bolling.png"),
    },
    {
      name: "Education System",
      type: ["web", "all", "crm"],
      image: require("./images/crm.png"),
    },
    {
      name: "Bear Payline",
      type: ["web", "all", "mobile"],
      image: require("./images/payline.png"),
    },
  ];

  const [type, setType] = useState("all");
  const [portfolio, setPortfolio] = useState(
    portfolioData.filter((item) => item.type.includes(type))
  );

  useEffect(() => {
    setPortfolio(portfolioData.filter((item) => item.type.includes(type)));
  }, [type]);

  return (
    <div className="App">
      {
        modal ? <div className="modal" data-aos="fade-down" data-aos-duration="500">
        <button className="close" onClick={()=>setModal(false)}>
          <Feather.FiX />
        </button>
        <div className="modalka">
          <div className="block">
            <p>{t("modal.title")}</p>
            <input type="text" placeholder={t("modal.namePlaceholder")} />
          </div>

          <div className="block">
            <p>{t("modal.number")}</p>
            <input type="number" placeholder={t("modal.numberPlaceholder")} />
          </div>
          <div className="block">
            <p>{t("modal.message")}</p>
            <input type="text" placeholder={t("modal.messagePlaceholder")} />
          </div>
          <div
            className="block"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button className="btn">Send</button>
          </div>
        </div>
      </div>:null
      }
      <div className="backVideo">
        <video src={require("./videos/video.mp4")} autoPlay muted loop />
      </div>
      <div className="showcase">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="showcase_block"
        >
          <nav>
            <div className="logo">
              <img src={require("./images/logo.png")} alt="TNC group Logo" />
            </div>

            <div className={`links ${responsive ? "responsive" : ""}`}>
              <button
                className={`linksBtn ${responsive ? "responsiveBtn" : ""}`}
                onClick={() => setResponsive(false)}
              >
                <Feather.FiX size={30} />
              </button>
              <NavHashLink
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                {t("header.about")}
              </NavHashLink>

              <NavHashLink
                to="#portfolio"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                {t("header.portfolio")}
              </NavHashLink>

              <NavHashLink
                to="#service"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                {t("header.services")}
              </NavHashLink>
              <NavHashLink
                to="#message"
                smooth
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                {t("header.contactUs")}
              </NavHashLink>
            </div>
            <button
              className="resNavbar"
              onClick={() => setResponsive((prev) => (prev = !prev))}
            >
              <Feather.FiMenu size={40} />
            </button>
          </nav>

          <div className="info">
            <h1>{t("header.title")}</h1>
            <p className="subtitle">{t("header.subtitle")}</p>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="tncsvg"
            >
              <img src={require("./images/mock.svg").default} />
            </div>
          </div>
        </div>
        <div className="social">
          <a href="#">
            <Feather.FiTwitter size={24} />
          </a>
          <a href="#">
            <Feather.FiFacebook size={24} />
          </a>
          <a href="#">
            <Fa.FaTelegramPlane size={24} />
          </a>
        </div>
      </div>
      <div className="portfolio" id="portfolio">
        <p data-aos="zoom-in-right" data-aos-duration="1500" className="title">
          {t("header.portfolio")}
        </p>

        <div
          className="buttons"
          data-aos="zoom-in-left"
          data-aos-duration="1500"
        >
          <button
            className={type == "all" ? "active" : ""}
            onClick={() => setType("all")}
          >
            {t("portfolio.all")}
          </button>
          <button
            className={type == "crm" ? "active" : ""}
            onClick={() => setType("crm")}
          >
            {t("services.crm")}
          </button>
          <button
            className={type == "web" ? "active" : ""}
            onClick={() => setType("web")}
          >
            {t("portfolio.web")}
          </button>
          <button
            className={type == "branding" ? "active" : ""}
            onClick={() => setType("branding")}
          >
            {t("portfolio.branding")}
          </button>
          <button
            className={type == "mobile" ? "active" : ""}
            onClick={() => setType("mobile")}
          >
            {t("portfolio.mobile")}
          </button>
        </div>

        <img
          src={require("./images/dots.svg").default}
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          className="image"
        />
        <div className="cards" data-aos="fade-up">
          {portfolio.map((item, index) => (
            <PortfolioItem
              title={item.name}
              image={item.image}
              info={(() => {
                return item.type.filter((item) => item != "all").join("/");
              })()}
            />
          ))}
        </div>
      </div>

      <div className="service" id="service">
        <p className="title">Services</p>

        <div className="cards">
          <ServiceItem
            image={
              require("../src/images/service/4552606_check_computer_result_website_icon 1.svg")
                .default
            }
            title={t("services.site")}
            info={t("services.siteSubtitle")}
          />
          <ServiceItem
            image={require("../src/images/service/Group.svg").default}
            title={t("services.smm")}
            info={t("services.smmSubtitle")}
          />
          <ServiceItem
            image={
              require("../src/images/service/2703080_cart_basket_ecommerce_shop_icon 1.svg")
                .default
            }
            title={t("services.online")}
            info={t("services.onlineSubtitle")}
          />
          <ServiceItem
            image={require("../src/images/service/Group-1.svg").default}
            title={t("services.branding")}
            info={t("services.brandingSubtitle")}
          />
          <ServiceItem
            image={require("../src/images/service/Group-2.svg").default}
            title={t("services.crm")}
            info={t("services.crmSubtitle")}
          />
          <ServiceItem
            image={require("../src/images/service/Group-3.svg").default}
            title={t("services.seo")}
            info={t("services.seoSubtitle")}
          />
        </div>
      </div>

      <div className="specialists" id="specialists">
        <p className="title">{t("specialists.title")}</p>
        <div className="cards">
          <SpecialItem
            image={require("./images/specialists/Group.svg").default}
            title={t("specialists.proMenejer")}
            info={t("specialists.proMenejerSubtitle")}
          />
          <SpecialItem
            image={require("./images/specialists/Group-1.svg").default}
            title={t("specialists.specialists")}
            info={t("specialists.specialistsSubtitle")}
          />
          <SpecialItem
            image={require("./images/specialists/Group-2.svg").default}
            title={t("specialists.saleMenejer")}
            info={t("specialists.saleMenejerSubtitle")}
          />
        </div>
      </div>

      <div className="message" id="message">
        <p className="title">{t("message.title")}</p>
        <div className="message_block">
          {sayt.map((page, index) => (
            <div className="page" key={index}>
              <div className="info">
                <p className="title">{page.name}</p>
                {page.subtitle && <p className="subtitle">{page.subtitle}</p>}
              </div>
              <div className="inputInfo">
                <Message
                  data={page.page}
                  change={(info) => {
                    setData({
                      ...data,
                      [page.set]: info,
                    });
                  }}
                />
              </div>
            </div>
          ))}

          <button className="btn" onClick={()=> setModal(true)}>{t("message.send")}</button>
        </div>
      </div>

      <footer>
        <dl>
          <dt>Menu</dt>
          <dd>
            <NavHashLink
              to="#salom"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "end" })
              }
            >
              {t("header.about")}
            </NavHashLink>
          </dd>
          <dd>
            <NavHashLink
              to="#salom"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "end" })
              }
            >
              {t("header.portfolio")}
            </NavHashLink>
          </dd>
          <dd>
            <NavHashLink
              to="#salom"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "end" })
              }
            >
              {t("header.services")}
            </NavHashLink>
          </dd>
          <dd>
            <NavHashLink
              to="#salom"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "end" })
              }
            >
              {t("header.message")}
            </NavHashLink>
          </dd>
        </dl>
        <div className="logo">
          <img src={require("./images/logo.png")} alt="" />
          <p>{t("footer.info")}</p>
        </div>

        <dl>
          <dt>{t("header.contactUs")}</dt>
          <dd>
            <a href="mailto:hello@example.com">hello@example.com</a>
          </dd>
          <dd>
            <a href="tel:4055550128">(405) 555-0128</a>
          </dd>
          <dd>
            <a href="tel:2525550126">(252) 555-0126</a>
          </dd>
        </dl>

        <div className="designBy">
          <p>
            Copyright &copy; TNC group {new Date().getFullYear()}.{" "}
            {t("footer.reserved")}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
