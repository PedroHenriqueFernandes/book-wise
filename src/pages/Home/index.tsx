import { ButtonsContainer, Container, FormContainer, FormContent, ImageContainer, ImageContent, TextContainer } from "./styles";

import background from "../../assets/background-home.png"
import { Button } from "@/components/Button";

import googleIcon from "../../assets/google-icon.svg"
import githubIcon from "../../assets/github-icon.svg"
import rocketIcon from "../../assets/rocket-icon.svg"
import { HeadingLarge, TextMedium } from "@/styles/fonts";

export default function Home() {
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
                        <Button text="Entrar com Google" img={googleIcon}/>
                        <Button text="Entrar com Github" img={githubIcon}/>
                        <Button text="Acessar como visitante" img={rocketIcon}/>
                    </ButtonsContainer>
                </FormContent>
                
            </FormContainer>
        </Container>
    )
}