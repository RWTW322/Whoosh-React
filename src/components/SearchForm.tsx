
export function SearchForm({icon}:any) {

    return (
        <form className="header__search-container">
            <input className="header__search-input" type="text" placeholder="Track a Package" />
            <button className="header__search-btn" type="submit">{icon}</button>
        </form>
    )
}