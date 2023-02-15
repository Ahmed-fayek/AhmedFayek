import './personalinfo.css';
import './all.min.css'
function PersonalInfo() {
    return (<div className='port'>

        <div className='my-info'>

            <div className="info">
                <h4>I'm</h4>
                <h1>Ahmed Fayek</h1>
                <h3>Front-End developer</h3>
                <div className='contact-me'>
                    <a href='tel:012-059-393-79'>  <i className="fa-solid fa-phone"></i></a>
                    <a href='https://wa.me/01205939379'>  <i className="fa-brands fa-whatsapp"></i></a>
                    <a href='mailto:aahmedfayek@gmail.com' > <i className="fa-solid fa-envelope"></i></a>
                    <a href='https://www.linkedin.com/in/ahmed-fayek-212378215/'> <i className="fa-brands fa-linkedin"></i></a>
                    <a href='https://github.com/Ahmed-fayek'>   <i className="fa-brands fa-github"></i></a>
                </div>
            </div>

        </div>
        <div className='my-image'>
            <div></div>
        </div>
    </div>)
}
export default PersonalInfo;