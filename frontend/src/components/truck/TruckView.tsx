export function TruckView() {
    return (
        <>
            <h1 className="text-center text-8xl my-14">Joe's Tacos</h1>
            <section className="container mx-auto">
                <div className="flex md:justify-evenly rounded-xl">
                <Image text={"https://placekitten.com/400/400"} alt={"placeholder"}/>
                <Image text={"https://placekitten.com/400/400"} alt={"placeholder"}/>
                <Image text={"https://placekitten.com/400/400"} alt={"placeholder"}/>
                </div>
            </section>
            <section className="container mx-auto ">
                <section className="text-center gap-x-6 text-3xl mt-16">
                    <h2 >Open: 6pm</h2>
                    <h2 >Close: 10pm</h2>
                </section>
                <section className="text-center text-2xl mt-8">
                    <h3 >Address:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </section>
                <p className="text-center text-3xl mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem harum ipsa neque nobis reprehenderit totam voluptatibus! Alias, aut autem eum explicabo illo illum maxime molestias mollitia provident quasi sit vel!</p>
            </section>
            <section>
                <a href="https://www.google.com/maps/@35.0886078,-106.666104,11.75z?entry=ttu"><img src="map-screenshot.png" alt="map scren-shot"/></a>
            </section>
            <div>
                <a href="/"><img src="food-truck-icon.png" alt="food truck icon"/></a>
            </div>
        </>
    )
}

type ImagesProps = {
    text: string,
    alt: string
}
function Image(props: ImagesProps) {
    const {text, alt} = props
    return (
        <div className="carousel-item">
            <img src={text} alt={alt}/>
        </div>
    )
}