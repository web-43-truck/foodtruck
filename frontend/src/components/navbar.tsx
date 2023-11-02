export function NavBar(){
    return (
        <>
            <div className="navbar bg-base-300 shadow-inner flex basis-11/12">
                <NavLinks>
                    <NavLink linkText={"log-in"} href={"/about"}/>
                    <NavLink linkText={"sign-up"} href={"/about"}/>
                </NavLinks>
                <NavBarTitle/>
            </div>
        </>
    )
}