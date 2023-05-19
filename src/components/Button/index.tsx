import { Container, ImageContainer } from './styles'
import { globalStyles } from '@/styles/global'
import { ButtonSmall } from '@/styles/fonts'

globalStyles()

interface ButtonProps {
  text: string
  img: string
  alt: string
}

export function Button({ text, img, alt }: ButtonProps) {
  return (
    <Container>
      <ImageContainer src={img} alt={alt} />
      <ButtonSmall>{text}</ButtonSmall>
    </Container>
  )
}
