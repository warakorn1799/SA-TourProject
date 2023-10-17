import './Contact.css';
import {FacebookOutlined, MailOutlined, CommentOutlined, WhatsAppOutlined} from '@ant-design/icons';


function Contact() {
  return (
    <div className='Layout'>
      <h2 > Contact Us </h2>
      <div className='card'>
        <a href="https://www.facebook.com/S.realmay/" target="_blank" ><FacebookOutlined /></a>
        <a href="mailto:yanika3468@gmail.com"><MailOutlined /></a>
        <a href="line://ti/p/~may_s14"><CommentOutlined  /></a>
        <a href="tel:0952713468"><WhatsAppOutlined /></a>
      </div>
      <div className='nav'>
        <p>เม ย์ </p>
        <p style={{margin:'206px -70px'}}>yanika3468@gmail.com </p>
        <p style={{margin:'-232px 233px'}}>@May_s14 </p>
        <p style={{margin:'205px 470px'}}>095-271-3468 </p>
      </div>

      <div className='footer'>
        <div style={{ margin:'0px 220px', width: '1000px', boxShadow: '0px 2px 10px #C7C7C7', border: '1px #CCCCCC solid' }}></div>
        <a href="/Admin" target="_blank" > Admin Log in </a>
      </div>

    </div>
  );
}

export default Contact;
