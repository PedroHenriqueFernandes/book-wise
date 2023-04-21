import Image from "next/image";
import { styled } from "../../../stitches.config";

export const AsideContainer = styled('aside', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'calc(100vh - 2.5rem)',
    width: '$60',
    backgroundImage: 'url("../../assets/background-aside.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    margin: '$5 $5 $4 $5',
    borderRadius: '$xlg',
    paddingBottom: '$6',
})

export const ImageLogoContainer = styled(Image, {
    margin: '$10 52px 0 $10',
})

export const MenuAndLogoContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$16',
})