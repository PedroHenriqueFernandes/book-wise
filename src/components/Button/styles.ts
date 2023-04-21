import Image from 'next/image';
import { styled } from '../../../stitches.config';

export const Container = styled("button", {
    height: "$18",
    width: '$80',
    backgroundColor: '$gray600',
    border: '0',
    borderRadius: '$md',
    padding: '$5 $4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '$5',
})

export const ImageContainer = styled(Image, {})