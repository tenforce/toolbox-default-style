import { ColorOption } from "./ColorOption"

export const GrayscaleColors: Record<string, ColorOption> = {
    White: {
        name: "White",
        background: "bg-white",
        text: "text-white",
        value: "#FFFFFF",
    },
    Lightest: {
        name: "Lightest",
        background: "bg-lightest",
        value: "#F3F5F7",
    },
    Lighter: {
        name: "Lighter",
        background: "bg-lighter",
        value: "#EAEAEA",
    },
    Light: {
        name: "Light",
        background: "bg-light",
        value: "#DCDCDC",
    },
    Dark: {
        name: "Dark",
        background: "bg-dark",
        value: "#B3B3B3",
    },
    Darker: {
        name: "Darker",
        background: "bg-darker",
        value: "#808080",
    },
    Darkest: {
        name: "Darkest",
        background: "bg-darkest",
        value: "#343434",
    },
    Black: {
        name: "Black",
        background: "bg-black",
        text: "text-black",
        value: "#000000",
    },
}
