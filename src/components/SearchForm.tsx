import { SearchFormProps } from "@/utils/interfaces";

export function SearchForm({icon, className}:SearchFormProps) {

    return (
        <form className={className}>
            <input className="search-form__input" type="text" placeholder="Track a Package" />
            <button className="search-form__btn button" type="submit">{icon}</button>
        </form>
    )
}