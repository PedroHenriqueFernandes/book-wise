import { ButtonsContainer, Container, FormContainer, FormContent, ImageContainer, ImageContent, TextContainer } from "./styles";

import background from "../../../public/assets/background-home.png"
import { Button } from "@/components/Button";

import googleIcon from "../../../public/assets/google-icon.svg"
import githubIcon from "../../../public/assets/github-icon.svg"
import rocketIcon from "../../../public/assets/rocket-icon.svg"
import { HeadingLarge, TextMedium } from "@/styles/fonts";

export default function Login() {
    return(
        <Container>
            <ImageContainer>
                <ImageContent src={background} alt="Background home" />
            </ImageContainer>

            <FormContainer>
                <FormContent>
                    <TextContainer>
                        <HeadingLarge>
                            Boas vindas!
                        </HeadingLarge>
                        <TextMedium>
                            Faça seu login ou acesse como visitante.
                        </TextMedium>
                    </TextContainer>
                    

                    <ButtonsContainer>
                        <Button text="Entrar com Google" img={googleIcon} alt={"Logo da google"} />
                        <Button text="Entrar com Github" img={githubIcon} alt={"Logo do github"} />
                        <Button text="Acessar como visitante" img={rocketIcon} alt={"Imagem de um foguete"}/>
                    </ButtonsContainer>
                </FormContent>
                
            </FormContainer>
        </Container>
    )
}