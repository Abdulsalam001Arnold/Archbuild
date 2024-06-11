
import { Link } from "react-router-dom"
export default function Dialogue() {
    return(
        <div className="w-[100%] flex flex-col items-center justify-center bg-white">

        <div className="flex flex-col lg:flex-row items-center justify-center w-full py-[7rem]">
            <div className="w-[21rem] lg:w-fit">
                <img src="https://www.gensler.com/uploads/image/38246/filename/dialogue_now_masthead_1618248672.png" alt="dialogue"/>
            </div>

            <div className="">
            <p className="text-xs md:text-sm lg:text-sm play-regular">Want more of <p className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</p>’s design insights? Follow us on our social platforms for more <b>dialogue</b></p>
            <Link to='/contact'>
            <button className="link">
    <span className="large">
        <span className="small"></span>
        <span className="letter">Follow for more</span>
    </span>
</button>
</Link>

            </div>
        </div>

        </div>
    )
}