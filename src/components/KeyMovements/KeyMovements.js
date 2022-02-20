import "./KeyMovements.scss"

const movements = [
    {
        name: "Baroque",
        start: "1600",
        end: "1750",
    },
    {
        name: "Rococo",
        start: "1700",
        end: "1780",
    },
    {
        name: "Neoclassicism",
        start: "1750",
        end: "1850",
    },
    {
        name: "Art Nouveau",
        start: "1890",
        end: "1910"
    },
    {
        name: "Romanticism",
        start: "1780",
        end: "1850"
    },
    {
        name: "Impressionism",
        start: "1860",
        end: "1900",
    },
    {
        name: "Realism",
        start: "1840",
        end: "1870"
    },
    {
        name: "Post-impressionism",
        start: "1890",
        end: "1910"
    },
    {
        name: "Fauvism",
        start: "1900",
        end: "1930"
    },
    {
        name: "Expressionism",
        start: "1910",
        end: "1920"
    },
    {
        name: "Cubism",
        start: "1910",
        end: "1915",
    },
    {
        name: "Art Deco",
        start: "1920",
        end: "1934"
    },
    {
        name: "Surrealism",
        start: "1920",
        end: "1990"
    },
    {
        name: "Pop Art",
        start: "1950",
        end: "1960"
    },
    {
        name: "Contemporary",
        start: "1970",
        end: "2020"
    },
    {
        name: "Abstract Art",
        start: "1910",
        end: "2020"
    }
]

function KeyMovements({currentYear}) {
    const filteredMovements = movements.filter(movement => parseInt(currentYear) <= parseInt(movement.end) && parseInt(currentYear) >= parseInt(movement.start))

    const movementsText = filteredMovements.map(movement => movement.name).join(", ")

    console.log(movementsText)

    return <>
        <h1>{currentYear}</h1>
        <p>Key movements: {movementsText}</p>
    </>
}

export {KeyMovements}