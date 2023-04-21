import { Container } from "./styles";
import { SidebarItem } from "./Components/SidebarItem";

import initialIcon from "../../../../../public/assets/initial-icon.svg";
import explorerIcon from "../../../../../public/assets/explorer-icon.svg";

export function Menu(){
    return(
        <Container>
            <SidebarItem text="Início" img={initialIcon} />
            <SidebarItem text="Explorar" img={explorerIcon} />
        </Container>
    )
}