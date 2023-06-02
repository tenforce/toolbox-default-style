import { ColorOption } from "./ColorOption"

export const ExtraColors: Record<string, ColorOption> = {
    Action: {
        name: "Action",
        background: "bg-action",
        text: "text-action",
        value: "#945E00",
        invertedValue: "#D99B00",
    },
    Cloud: {
        name: "Cloud",
        background: "bg-cloud",
        value: "#ECECEC",
    },
    DarkCloud: {
        name: "Dark Cloud",
        background: "bg-darkcloud",
        value: "#E5E5E5",
    },
    Default: {
        name: "Default",
        background: "bg-default",
        text: "text-default",
        value: "#FFFFFF",
        invertedValue: "#000000",
    },
    Oil: {
        name: "Oil",
        background: "bg-oil",
        value: "#1B1B1B",
    },
    Primary: {
        name: "Primary",
        background: "bg-primary",
        text: "text-primary",
        value: "#00B3FD",
    },
}
