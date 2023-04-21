import Image from "next/image";
import { styled } from "../../../../../../../stitches.config";

export const Container = styled('button', {
    backgroundColor: 'transparent',
    border: 'none',
    display: 'flex',
    gap: '$3',
})

export const ImageContainer = styled(Image, {
    width: '$6',
    height: '$6',
})