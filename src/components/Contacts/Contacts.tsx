import {memo} from 'react';
import styles from "./Contacts.module.css";
import insta from "../../images/insta.svg";
import ball from "../../images/ball.svg";

const Contacts = () => {
  return (
    <div className={styles.contacts_container}>
      <section className={styles.follow}>
        <h3>КОНТАКТЫ</h3>
        <a href="mailto:dot.nalchik@gmail.com">dot.nalchik@gmail.com</a>
        <h3>ПОДПИСЫВАЙСЯ</h3>
        <div className={styles.icons}>
          <img src={insta} alt="instagram"/>
          <img src={ball} alt="ball"/>
        </div>
        <div className={styles.rectangle}>
        </div>
        <h4>© DOT 2022</h4>
      </section>
      <form className={styles.coop}>
        <h3>Начать сотрудничать</h3>
        <h1>Создать проект с нами?</h1>
        <p>Услуги</p>
        <div>
          <button>Брендинг</button>
          <button>Веб-дизайн</button>
          <button>Разработка</button>
          <button>Продвижение</button>
        </div>
        <p>Бюджет в рублях</p>
        <div>
          <button>до 100К</button>
          <button>100К-200К</button>
          <button>более 200К</button>
        </div>
        <input type="text" placeholder="Ваше имя"/>
        <input type="email" placeholder="Ваш e-mail"/>
        <button>Отправить заявку</button>
      </form>
    </div>
  );
};

export default memo(Contacts);
