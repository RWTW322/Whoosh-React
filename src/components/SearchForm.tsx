import { SearchFormProps } from "@/utils/interfaces";
import { SearchTrackIcon } from "./icons/SearchTrackIcon";
import { SearchIcon } from "./icons/SearchIcon";

export function SearchForm({iconStyle, className}:SearchFormProps) {

    const getIcon = () => {
        if(iconStyle === "default") {
            return <SearchTrackIcon />
        } else if(iconStyle === "detailed") {
            return <SearchIcon />
        }
    }

    return (
        <form className={className}>
            <input className="search-form__input" type="text" placeholder="Track a Package"/>
            <button className="search-form__btn button" type="submit">{getIcon()}</button>
        </form>
    )
}