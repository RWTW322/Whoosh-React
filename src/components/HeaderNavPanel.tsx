import { LoginIcon } from "./icons/LoginIcon";
import { NavPanelProps } from "@/utils/interfaces";

export function HeaderNavPanel({className}:NavPanelProps) {

    return (
        <nav className={className}>
            <a className="nav__link nav__link-send" href="#">Send a Parcel</a>
            <a className="nav__link nav__link-courier" href="#">Become a Courier</a>
            <a className="nav__link nav__link-affiliate-program" href="#">Affiliate Program</a>
            <a className="nav__link nav__link-support" href="#">Help & Support</a>
            <button className="nav__login-btn button" type="button">
                <LoginIcon />
            </button>
        </nav>
    );
}