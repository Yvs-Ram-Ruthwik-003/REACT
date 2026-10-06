//function bases component
function Header() {

    return (    //A React component must return one top-level element, but that element can contain as many elements as you want.
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="">Origin</a></li>  {/* creating anchor tags inside list items to create a navigation menu. */}
                    <li><a href="">Consultation</a></li>
                    <li><a href="">Live sessions</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    )
}

export default Header