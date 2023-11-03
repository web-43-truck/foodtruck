import User from "@/app/user/user";


export default function UserPage() {
    const links = [
        {linkName: 'Home', href: '/'},
        {linkName: 'Favorites', href: '/'},
]
    return(
        <>
        <User/>
        </>
    )
}