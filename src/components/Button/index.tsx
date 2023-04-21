import { Container, ImageContainer } from "./styles";
import { globalStyles } from '@/styles/global'
import { ButtonSmall } from "@/styles/fonts";

globalStyles()

interface ButtonProps{
    text: string;
    img: string;
}

export function Button({text, img}: ButtonProps){
    return(
        <Container>
            <ImageContainer src={img} alt="" />
            <ButtonSmall>
                {text}
            </ButtonSmall>
        </Container>
    )
}