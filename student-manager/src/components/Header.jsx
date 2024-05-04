import propTypes from 'prop-types';
const Header = ({title,navElements}) => {


    return(
        <header >
        <h2> {title} </h2>
        <nav>
        <ul>
        {navElements.map(navElement =>{
            return <li key={navElement}><a href="#"> {navElement} </a></li>
        })}
        </ul>
        </nav>
        </header>
    )
}
// Header.defaultProps ={
//     title : "Default title",
//     navElements:["Nav1","Nav2","Nav3"]
// }
Header.propTypes = {
    title : propTypes.string.isRequired,
    navElements:propTypes.arrayOf(propTypes.string).isRequired

}


export default Header;