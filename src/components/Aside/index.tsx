import { AsideContainer, ImageLogoContainer, MenuAndLogoContainer } from "./styles";
import logoBookWiseAside from "../../../public/assets/logo-book-wise-aside.png"
import { Menu } from "./components/Menu/Index";
import { SidebarItem } from "./components/Menu/Components/SidebarItem";

import signinIcon from "../../../public/assets/signin-icon.svg";

export function Aside() {
    return (
        <AsideContainer>
            <MenuAndLogoContainer>
                <ImageLogoContainer src={logoBookWiseAside} alt="" />

                <Menu />
            </MenuAndLogoContainer>

            <SidebarItem sense={true} text="Fazer login" img={signinIcon} />
        </AsideContainer>
    )
}