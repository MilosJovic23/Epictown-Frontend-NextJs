import Search from "@/app/_components/serachByTitle";


const Navbar =()=>{
    return<>


    <div className="navBar">
        <div className="container">
            <div>
                <img src="" alt=""/>
                <div>
                    <ul>
                        <a>about</a>
                        <a>blog</a>
                        <a>contact</a>
                    </ul>
                </div>
            </div>
            <div>
                <Search/>
                <a>Login</a>
            </div>
        </div>
    </div>



    </>


}



export default Navbar;