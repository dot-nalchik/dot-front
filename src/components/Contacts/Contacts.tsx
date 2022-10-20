import {memo} from 'react';
import styles from "./Contacts.module.css";
import insta from "../../images/insta.svg";
import ball from "../../images/ball.svg";
import {useRef} from 'react';
import emailjs from "emailjs-com";

const Contacts = ()=> {
  const form:any = useRef();

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('service_nhu0w98', 'template_bletdb8', form.current, 'I6xwJaCaWmK7yzGZM')

  };

  function handleEntailmentRequest(e:any) {
    e.preventDefault();
  }

  return (
      <div
          className={styles.contacts_container}
          id="contacts"
      >
        <section className={styles.follow}>
          <h3 className={styles.contacts_title}>КОНТАКТЫ</h3>
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
        <form
            ref={form}
            className={styles.coop}
            id="request"
            onSubmit={sendEmail}
        >
          <h3>Начать сотрудничать</h3>
          <h1>Создать проект с нами?</h1>
          <p>Услуги</p>
          <div className={styles.btn_flex}>
            <button>Брендинг</button>
            <button>Веб-дизайн</button>
            <button>Разработка</button>
            <button>Продвижение</button>
          </div>
          <p className={styles.budget}>Бюджет в рублях</p>
          <div className={styles.btn_flex}>
            <button>до 100К</button>
            <button>100К-200К</button>
            <button>более 200К</button>
          </div>
          <div className={styles.inputs}>
            <input
                name="name"
                type="text"
                placeholder="Ваше имя"
            />
            <input
                name="email"
                type="email"
                placeholder="Ваш e-mail"
            />
            <textarea
                className={styles.textarea}
                name="message"
                id=""
                placeholder="Ваше сообщение. . ."
            ></textarea>
            <button className={styles.btn_submit}>Отправить заявку</button>
          </div>
        </form>
      </div>
  );
};

export default memo(Contacts);
