export function ListItem(list: List){
    const {itemName, href} = list
    return(
        <>
            <li><a href={href}>{itemName}</a></li>
        </>
    )
}

type List = {
    itemName: string,
    href: string
}

