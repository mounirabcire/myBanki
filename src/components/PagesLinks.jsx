import { NavLink } from 'react-router-dom';

function PagesLinks() {
    return (
        <div className={`hidden lg:block space-x-30 text-white`}>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/contact">contact</NavLink>
        </div>
    );
}

export default PagesLinks;
