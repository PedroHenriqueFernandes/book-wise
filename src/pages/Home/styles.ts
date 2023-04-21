import { styled } from "@stitches/react";
import Image from "next/image";

export const Container = styled("div", {
    display: "flex",
    grid: "1fr 1fr",
})

export const ImageContainer = styled("div", {
    display: "flex",
    padding: "$5",
    height: "100vh",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    overflow: "hidden",
});

export const ImageContent = styled(Image, {
    minHeight: "100%",
    width: "100%",
    objectFit: "contain",
})

export const FormContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    width: "100%",
    gap: "$4",
})

export const FormContent = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
    width: "$80",
    gap: '$10',
})

export const ButtonsContainer = styled(FormContainer, {

})

export const TextContainer = styled('div', {
    display: "flex",
    alignItems: "flex-start",
    textAlign: "left",
    width: '$80',
})