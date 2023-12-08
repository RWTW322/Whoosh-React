import { Button } from "./Button";
import { HeaderNavPanel } from "./HeaderNavPanel";
import { SearchForm } from "./SearchForm";
import { CityIcon } from "./icons/CityIcon";
import { CloseIcon } from "./icons/CloseIcon";
import { SearchTrackIcon } from "./icons/SearchTrackIcon";

export function HeaderSideOutMenu(props:{onClick:()=>void}) {

    return (
        <div className="header__menu">

            <div className="menu__city-container">
                <CityIcon />
                <p className="menu__city">NY, Manhattan</p>
            </div>

            <button className="menu__menu-close-btn button" type="button" onClick={props.onClick}><CloseIcon /></button>

            <SearchForm icon={<SearchTrackIcon />} className="menu__search-form" />
            <HeaderNavPanel className="side-out-menu__nav"/>

            <Button className="complex-order-btn btn-component button" text="Take a comlpex order" backgroundColor="#2B6BF3" />

        </div>
    );
}