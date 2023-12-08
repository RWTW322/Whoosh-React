import { useState } from "react";
import { HeaderMenuBtn } from "./HeaderMenuBtn";
import { HeaderNavPanel } from "./HeaderNavPanel";
import { HeaderSideOutMenu } from "./HeaderSideOutMenu";
import { SearchForm } from "./SearchForm";
import { AccountIcon } from "./icons/AccountIcon";
import { CityIcon } from "./icons/CityIcon";
import { SearchIcon } from "./icons/SearchIcon";
import { WhooshLogo } from "./icons/WhooshLogo";

export function Header() {

    const [isOpen, setIsOpen] = useState(false);

    function handleOpenMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <header className="header">

            <button className="header__account-btn button" type="button"><AccountIcon /></button>
            <div className="header__logo-container">
                <WhooshLogo />

                <div className="header__city-container">
                    <CityIcon />
                    <p className="header__city">NY, Manhattan</p>
                </div>
            </div>

            <SearchForm icon={<SearchIcon />} className="header__search-form"/>
            <HeaderNavPanel className="header__nav" />

            {isOpen ? (<HeaderSideOutMenu onClick={handleOpenMenu} />) : (<HeaderMenuBtn onClick={handleOpenMenu} />)
            }
        </header>
    )
}