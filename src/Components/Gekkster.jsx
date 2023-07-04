import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import bolleanAction from '../Redux/Action/Action';
const Gekkster = () => {


    const disptach = useDispatch();

    const data = useSelector((myStore) => {

        return myStore
    })
    console.log(data);
    const dark = {
        backgroundColor: "black", color: "white"

    }
    const light = {
        backgroundColor: "white", color: "blue"

    }

    return (

        <>
            <div style={data.bollean ? dark : light}>
                <h1>I have changed theme to {data.bollean ? "Dark" : "Light"}</h1>
                <p>Geekster</p>

                <div style={{ display: "flex", flexDirection: "column", margin: "1rem" }}>
                    <a href="/">Home</a>
                    <a href="/">Contact</a>
                    <a href="/">Service</a>
                </div>

                <button onClick={() => {
                    disptach(bolleanAction())

                }}>Toggle Thems To Dark</button>
                <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ipsa illum hic explicabo dolores maxime quos reiciendis, est earum maiores nam saepe inventore nisi nostrum, blanditiis ratione mollitia quibusdam debitis.
                    Amet enim minus at harum, asperiores consequatur. Repellat quod exercitationem odit reprehenderit, doloremque quam cum magnam. Quod, aperiam, fuga culpa autem voluptatibus atque facilis consequatur eius, optio vero illo qui!
                    Doloremque at amet aut obcaecati aliquid ducimus, rem iusto cumque similique commodi expedita dolores repellendus optio, enim nemo consectetur debitis suscipit minus animi. Suscipit natus laboriosam harum eaque nisi consequatur!
                    Enim aspernatur nam quis rerum ipsa facere, cumque modi repellat placeat obcaecati soluta necessitatibus maxime vero debitis. Nemo ducimus eos dicta rerum, et vel provident non ex exercitationem, enim harum.
                    Exercitationem optio placeat debitis dolor molestias necessitatibus consequatur impedit enim dolorem quibusdam laboriosam voluptatibus, harum, accusamus est architecto quis corrupti unde minus illo saepe doloremque. Reiciendis numquam est veritatis nemo?
                    Vero reiciendis cumque, distinctio nihil quas id sunt sapiente veritatis maiores earum praesentium optio molestiae numquam veniam dolorem facere accusantium aliquam voluptatem voluptates, molestias minus? Itaque voluptatem sint optio ipsum.
                    Sequi officiis vitae dolor architecto harum itaque consectetur et ipsam consequuntur odio. Aliquid excepturi earum obcaecati nihil sapiente sunt ad qui libero eveniet, dolor quod! Non quae quas a aspernatur?
                    Nemo sint architecto praesentium, omnis cumque neque delectus excepturi nobis quidem illo sed voluptatem laudantium, perferendis facere. Consequuntur delectus pariatur quos necessitatibus, debitis asperiores sequi minus, ipsa quidem, assumenda ut!
                    Dolorum exercitationem eveniet recusandae asperiores doloremque blanditiis. Ipsum, eligendi mollitia aperiam voluptatem possimus facilis voluptatibus quae dicta nam repudiandae beatae nostrum magni veritatis id quibusdam explicabo repellendus sequi saepe a.
                    Labore aperiam qui doloremque porro similique voluptate culpa, reiciendis eos, quae ipsum quos, ex error optio quia eligendi molestiae commodi asperiores dicta doloribus quisquam sequi saepe quis quo! Dolore, repellendus!</p>

            </div>
        </>
    )
}

export default Gekkster