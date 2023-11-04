export function ListItem(list: List){
    const {itemName, href} = list
    return(
        <>
            <li className="hover:bg-accent-focus hover:rounded-xl"><a href={href}>{itemName}</a></li>
        </>
    )
}

type List = {
    itemName: string,
    href: string
}

