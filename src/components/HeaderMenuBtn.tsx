import { MenuBtnIcon } from "./icons/MenuBtnIcon"

export function HeaderMenuBtn(props:{onClick:()=>void}) {

    return (
        <button className="header__menu-btn button" onClick={props.onClick}><MenuBtnIcon /></button>
    )
}