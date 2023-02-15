
function Navbar() {
    let x = 0;
    window.addEventListener("resize", function () {
        if (window.matchMedia("(min-width: 700px)").matches) {
            document.getElementById("show").style.display = "none";
        }
    })
    const show = () => {
        var show = document.getElementById("show")
        if (x === 0) {
            show.style.display = "flex";

            x = 1;
        } else {
            show.style.display = "none";
            x = 0;
        }

    }
    return (<>
        <div className="navb">
            <div className="r-navb">
                <h3><a href='#'> &lt; A.F  /&gt;</a></h3>
            </div>
            <div className="l-navb">
                <div onClick={show} className='bars'>
                    <span></span><span></span><span></span></div>
                <div className='show' >
                    <ul  >
                        <li> <a href='#info'>About</a> </li>
                        <li> <a href='#work'>Work</a> </li>
                        <li> <a href='#'>Contact</a> </li>

                    </ul>
                </div>
                <div >
                    <ul id='show' className='drop-down'>
                        <li> <a href='#'>About</a> </li>
                        <li> <a href='#'>Skils</a> </li>
                        <li> <a href='#'>Work</a> </li>
                        <li> <a href='#'>Contact</a> </li>
                    </ul>
                </div>

                <ul className='resume'><li><button>    <a className="button" href="MyResume.pdf" download="MyResume.pdf">
                    Resume
                </a></button></li></ul>
            </div>
        </div >
    </>
    )
}
export default Navbar;