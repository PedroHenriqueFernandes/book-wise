import { ButtonMediumText } from "@/styles/fonts";
import { Container, ImageContainer } from "./styles";

interface SidebarItemProps {
    text: string;
    img: string;
    sense?: boolean;
}

export function SidebarItem({ text, img, sense }: SidebarItemProps) {
    return (
        <Container>
            {sense ? (
                <>
                    <ButtonMediumText>
                        {text}
                    </ButtonMediumText>
                    <ImageContainer src={img} alt="" />
                </>
            ) : (
                <>
                    <ImageContainer src={img} alt="" />
                    <ButtonMediumText>
                        {text}
                    </ButtonMediumText>
                </>
            )}
        </Container>
    )
}