import "./css/App.css";
import logo from "./img/logo.png";
import about1 from "./img/about-1.png";
import about2 from "./img/about-2.png";
import about3 from "./img/about-3.png";
import news1 from "./img/news-1.jpg";
import news2 from "./img/news-2.jpg";

function App() {
  const phone = '+38 (050) 972 54 39';
  const email = 'ufs1ufs@gmail.com';
  const btn = 'Бесплатная консультация';
  const home = 'Главная';
  const aboutUs = 'О компании';
  const ourServices = 'Услуги';
  const contactUs = 'Контакты';
  const sliderTitle = 'КОМПЛЕКСНОЕ ЗАКРЫТИЕ ПРЕДПРИЯТИЯ';
  const sliderText = 'Полное прекращение существования юридического лица с сохранением легальности всей предыдущей деятельности.';
  const sliderDefaultBtn = 'Оставить заявку';
  const servicesTitle = 'Наши Услуги';
  const servicesText = 'Комплексный подход к вашему вопросу, своевременная правовую помощь, представление интересов во всех судебных инстанциях.';
  const servicesBtn = 'Показать все услуги';
  const servicesItemTitleLiquidation = 'Банкротство и ликвидация';
  const servicesItemTextLiquidation = 'Полное прекращение существования юридического лица с сохранением легальности всей предыдущей деятельности';
  const servicesItemLinkLiquidation = 'Подробнее';
  const defaultBtnLiquidation = 'Заказать';
  const servicesItemTitleSupport = 'Адвокатское сопровождение';
  const servicesItemTextSupport = 'Мы гарантируем полное профессиональное обслуживание клиентов в заявленных сферах деятельности и соблюдение конфиденциальности.';
  const servicesItemLinkSupport = 'Подробнее';
  const defaultBtnSupport = 'Заказать';
  const servicesItemTitleАudit = 'Налоговый аудит';
  const servicesItemTextАudit = 'Налоговый аудит проводят перед проведением налоговых проверок; при оценке возможных налоговых рисков; при оптимизации налогообложения.';
  const servicesItemLinkАudit = 'Подробнее';
  const defaultBtnАudit = 'Заказать';
  const aboutUsTitle = 'О компании';
  const aboutUsText = 'Компания специализируется на оказании услуг в сфере корпоративного права, налогового консалтинга, представительства в судах, ликвидации и банкротства предприятий. На сегодняшний день, коллектив компании объединяет высокопрофессиональных экспертов имеющих специализации в отдельных областях права.';
  const aboutUsDefaultBtn = 'Узнать больше';
  const formConsultation = 'Получить Консультацию';
  const formConsultationText = 'Комплексный подход к вашему вопросу, своевременная правовую помощь, представление интересов во всех судебных инстанциях.';
  const formTextEmail = 'E-mail';
  const formTextPhone = 'Контактный телефон';
  const formTextName = 'ФИО';
  const formTopicQuestion = 'Тема вопроса';
  const formMessage = 'Сообщение';
  const formgetConsultation = 'Получить консультацию';
  const advantagesTitleFirst = 'Десятки добровольных ликвидаций ежемесячно';
  const advantagesTextFirst = 'Мы умеем минимизировать все риски в процессе добровольной ликвидации юридических лиц.';
  const advantagesTitleSecond = 'Отличное знание законов в сфере банкротства';
  const advantagesTextSecond = 'Позволяют нам эффективно отстаивать как интересы кредиторов, так и интересы собственников проблемной организации.';
  const advantagesTitleThird = 'Большой опыт сопровождения банкротства';
  const advantagesTextThird = 'Мы обладаем большим опытом сопровождения процедур банкротства предприятий.';
  const newsTitle = 'Новости Компании';
  const newsText = 'Комплексный подход к вашему вопросу, своевременная правовую помощь, представление интересов во всех судебных инстанциях.';
  const newsBtn = 'Открыть все новости';
  const newsSliderTitle = 'Банкротство и ликвидация предприятия в Украине';
  const newsSliderText = '«На сегодняшний день, коллектив компании объединяет высокопрофессиональных экспертов имеющих специализации в отдельных областях права. На сегодняшний день, коллектив компании объединяет высокопрофессиональных экспертов имеющих специализации в отдельных областях права. На сегодняшний день, коллектив компании объединяет высокопрофессиональных экспертов имеющих специализации в отдельных областях права...»';
  const newsSliderAuthor = 'Иванов Иван, генеральный директор компании Bankom.';
  const newsDateFirst = '00.00';
  const newsBlogTitleFirst = 'Новость компании';
  const newsBlogTextFirst = 'На сегодняшний день, коллектив компании объединяет высокопрофессиональных экспертов имеющих специализации в отдельных областях права...»';
  const newsDateSecond = '00.00';
  const newsBlogTitleSecond = 'Новость компании';
  const newsBlogTextSecond = 'На сегодняшний день, коллектив компании объединяет высокопрофессиональных экспертов имеющих специализации в отдельных областях права...»';
  const footerTitle = 'Комплексное закрытие предприятия';
  const footerText = 'Полное прекращение существования юридического лица с сохранением легальности всей предыдущей деятельности.';
  const footerBtn = 'Бесплатная консультация';
  const footerPhone = '+38 (050) 972 54 39';
  const footerEmail = 'ufs1ufs@gmail.com';
  const footerAdress = 'Konstantinovka. levanevskogo str. 21/8';
  const footerCopyText = '© 2021 Tengiz Akhalaia. All rights reserved.';

  return (
    <>
      <header id="header" className="header">
        <div className="header__top">
          <div className="container">
            <div className="header__contacts">
              <a className="header__phone" href="tel:380509725439">
                {phone}
              </a>
              <a className="header__email" href="mailto:ufs1ufs@gmail.com">
                {email}
              </a>
              <a data-src="#modal" href="#modal" className="header__btn">
                {btn}
              </a>
            </div>
          </div>
        </div>
        <div className="header__content">
          <div className="container">
            <div className="header__content-inner">
              <div className="header__logo">
                <a href="#">
                  <img src={logo} alt="" />
                </a>
              </div>
              <nav className="menu">
                <div className="header__btn-menu">
                  <span className="icon-bars"></span>
                </div>
                <ul>
                  <li>
                    <a href="#">{home}</a>
                  </li>
                  <li>
                    <a href="#about">{aboutUs}</a>
                  </li>
                  <li>
                    <a href="#services">{ourServices}</a>
                  </li>
                  <li>
                    <a href="#footer">{contactUs}</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <section className="slider">
        <div className="container">
          <div className="slider__inner">
            <div className="slider__item">
              <div className="slider__item-content">
                <h1 className="slider__title">
                  {sliderTitle}
                </h1>
                <h2 className="slider__text">
                  {sliderText}
                </h2>
                <a
                  data-fancybox
                  data-src="#modal"
                  href="#top"
                  className="slider__btn default-btn"
                >
                  {sliderDefaultBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services">
        <div className="container">
          <div className="services__top">
            <div className="services__title-box">
              <h2 className="services__title">{servicesTitle}</h2>
              <h3 className="services__text">
                {servicesText}
              </h3>
            </div>
            <div className="services__btn">
              <a href="#">{servicesBtn}</a>
            </div>
          </div>
          <div className="services__items">
            <div className="services__item">
              <img src={about1} alt="" />
              <h3 className="services__item-title">{servicesItemTitleLiquidation}</h3>
              <h4 className="services__item-text">
                {servicesItemTextLiquidation}
              </h4>
              <div className="services__item-btn">
                <a className="services__item-link" href="#">
                  {servicesItemLinkLiquidation}
                </a>
                <a
                  data-fancybox
                  data-src="#modal"
                  href="#top"
                  className="default-btn"
                >
                  {defaultBtnLiquidation}
                </a>
              </div>
            </div>
            <div className="services__item">
              <img src={about2} alt="" />
              <h3 className="services__item-title">
                {servicesItemTitleSupport}
              </h3>
              <h4 className="services__item-text">
                {servicesItemTextSupport}
              </h4>
              <div className="services__item-btn">
                <a className="services__item-link" href="#">
                  {servicesItemLinkSupport}
                </a>
                <a
                  data-fancybox
                  data-src="#modal"
                  href="#top"
                  className="default-btn"
                >
                  {defaultBtnSupport}
                </a>
              </div>
            </div>
            <div className="services__item">
              <img src={about3} alt="" />
              <h3 className="services__item-title">{servicesItemTitleАudit}</h3>
              <h4 className="services__item-text">
                {servicesItemTextАudit}
              </h4>
              <div className="services__item-btn">
                <a className="services__item-link" href="#">
                  {servicesItemLinkАudit}
                </a>
                <a
                  data-fancybox
                  data-src="#modal"
                  href="#top"
                  className="default-btn"
                >
                  {defaultBtnАudit}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="container">
          <div className="about__inner">
            <h2 className="about__title">{aboutUsTitle}</h2>
            <h3 className="about__text">
              {aboutUsText}
            </h3>
            <a href="#" className="about__btn default-btn">
              {aboutUsDefaultBtn}
            </a>
          </div>
        </div>
      </section>
      <section className="form">
        <div className="container">
          <div className="form__inner">
            <div className="form__content">
              <div className="form__title-box">
                <h2 className="form__title">{formConsultation}</h2>
                <h4 className="form__text">
                  {formConsultationText}
                </h4>
              </div>
              <div className="form__box">
                <form>
                  <div className="form__box-inner">
                    <div className="form__box-left">
                      <label>
                        {formTextEmail}
                        <input type="text" />
                      </label>
                      <label>
                        {formTextPhone}
                        <input type="text" />
                      </label>
                      <label>
                        {formTextName}
                        <input type="text" />
                      </label>
                      <label>
                        {formTopicQuestion}
                        <select>
                          <option>-------------</option>
                          <option>-------------</option>
                          <option>-------------</option>
                          <option>-------------</option>
                        </select>
                      </label>
                    </div>
                    <div className="form__box-right">
                      <label>
                        {formMessage}
                        <textarea></textarea>
                      </label>
                      <button className="default-btn" type="submit">
                        {formgetConsultation}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="advantages">
        <div className="container">
          <div className="advantages__inner">
            <div className="advantages-item">
              <h2 className="advantages__title">
                {advantagesTitleFirst}
              </h2>
              <h3 className="advantages__text">
                {advantagesTextFirst}
              </h3>
            </div>
            <div className="advantages-item">
              <h2 className="advantages__title">
                {advantagesTitleSecond}
              </h2>
              <h3 className="advantages__text">
                {advantagesTextSecond}
              </h3>
            </div>
            <div className="advantages-item">
              <h2 className="advantages__title">
                {advantagesTitleThird}
              </h2>
              <h3 className="advantages__text">
                {advantagesTextThird}
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container">
          <div className="news__top">
            <div className="news__title-box">
              <h2 className="news__title">{newsTitle}</h2>
              <h4 className="news__text">
                {newsText}
              </h4>
            </div>
            <div className="news__btn">
              <a href="#">{newsBtn}</a>
            </div>
          </div>
          <div className="news__inner">
            <div className="news__slider">
              <div className="news__slider-inner">
                <div className="news__slider-item">
                  <h3 className="news__slider-title">
                    {newsSliderTitle}
                  </h3>
                  <p className="news__slider-text">
                    {newsSliderText}
                  </p>
                  <p className="news__slider-author">
                    {newsSliderAuthor}
                  </p>
                </div>
              </div>
            </div>
            <a href="#" className="news__blog">
              <div className="news__images">
                <img src={news1} alt="" />
                <div className="news__date">{newsDateFirst}</div>
              </div>
              <div className="news__blog-title">{newsBlogTitleFirst}</div>
              <div className="news__blog-text">
                {newsBlogTextFirst}
              </div>
            </a>
            <a href="#" className="news__blog">
              <div className="news__images">
                <img src={news2} alt="" />
                <div className="news__date">{newsDateSecond}</div>
              </div>
              <div className="news__blog-title">{newsBlogTitleSecond}</div>
              <div className="news__blog-text">
                {newsBlogTextSecond}
              </div>
            </a>
          </div>
        </div>
      </section>
      <footer id="footer" className="footer">
        <div className="footer__content">
          <div className="container">
            <div className="footer__inner">
              <div className="footer__info">
                <div className="footer__title">
                  {footerTitle}
                </div>
                <div className="footer__text">
                  {footerText}
                </div>
                <a
                  data-fancybox
                  data-src="#modal"
                  href="#top"
                  className="header__btn"
                >
                  {footerBtn}
                </a>
                <ul className="footer__list">
                  <li>
                    <a className="footer__phone" href="tel:380509725439">
                      {footerPhone}
                    </a>
                  </li>
                  <li>
                    <a href="mailto:ufs1ufs@gmail.com">{footerEmail}</a>
                  </li>
                  <li>
                    <a className="footer__adress" href="#">
                      {footerAdress}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__map">
                <iframe
                  title="map"
                  width="250"
                  height="250"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.04041510823!2d37.676340315073105!3d48.513289932898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dfc6820565f5cf%3A0x54b26b1af2e7cd80!2z0YPQuy4g0JvQtdCy0LDQvdC10LLRgdC60L7Qs9C-LCDQmtC-0L3RgdGC0LDQvdGC0LjQvdC-0LLQutCwLCDQlNC-0L3QtdGG0LrQsNGPINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1sru!2sua!4v1610622117632!5m2!1sru!2sua"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copy">
          <div className="container">
            <div className="copy__text">
              {footerCopyText}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
