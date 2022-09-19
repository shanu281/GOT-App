import './style.css'
import { got } from '../data'

function Cards(props) {

    if (props.activeHouse === "") {
        return (

            <ul className="cards">
                {props.allPeople.map((person) => {
                    return (
                        <li>
                            <img src={person.image} alt={person.name} />
                            <h2>{person.name}</h2>
                            <p>{person.description}</p>
                            <button className="btn">Know more!</button>
                        </li>
                    )
                })}
            </ul>
        )
    } else {
        return got.houses.filter(house => house.name === props.activeHouse)[0].people.map(person => {
            return (
                <ul className="card-1">
                    <li>
                        <img src={person.image} alt={person.name} />
                        <h2>{person.name}</h2>
                        <p>{person.description}</p>
                        <button className="btn">Know more!</button>
                    </li>
                </ul>
            )
        })
    }
}
export default Cards;