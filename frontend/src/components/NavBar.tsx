export function NavBar(){
    return (
        <>
            <div className="navbar bg-base-300 shadow-inner flex basis-11/12">
                <NavLinks>
                    <NavLink linkText={"log-in"} href={"/about"}/>
                    <NavLink linkText={"sign-up"} href={"/SignUp"}/>
                </NavLinks>
                <NavBarTitle/>
            </div>
        </>
    )
}

function NavBarTitle (){
    return (
        <div className="navbar-end basis-1/12  md:basis-5/6">
            <a href={""} className="hidden md:btn md:btn-ghost md:normal-case md:text-xl ">Food Truck Hunter</a>
        </div>
    )
}

function NavLinks(props: {children: any}){
    return(
        <div className="basis-11/12 ">
                <div className="navbar-start md:hidden ">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            <li><a>home</a></li>
                            <li><a>log-in</a></li>
                            <li><a>sign-up</a></li>
                            <li><a>favorite</a></li>
                        </ul>
                    </div>
                </div>
            <ul className="menu menu-horizontal flex-none ml-28 md:ml-2">
                {props.children}
            </ul>
        </div>
    )
}

type NavLinkProps = {
    linkText: string,
    href: string
}
function NavLink(props: NavLinkProps){
    const {linkText, href} = props
    return(
        <li className="justify-end ml-2"><a href={href}>{linkText}</a></li>
    )
}