import { FlowbiteAccordionTheme } from "flowbite-react"

export const customAccordionTheme: FlowbiteAccordionTheme =
{
    "root": {
        "base": "",
        "flush": {
            "off": "",
            "on": ""
        }
    },
    "content": {
        "base": " "
    },
    "title": {
        "arrow": {
            "base": "text-lavendel bg-lavendel",
            "open": {
                "off": " bg-lavendel text-lavendel",
                "on": "bg-lavendel text-lavendel"
            }
        },
        "base": "text-lavendel ",
        "flush": {
            "off": "bg-transparent ",
            "on": "bg-transparent "
        },
        "heading": " text-pink-500",
        "open": {
            "off": "",
            "on": "text-blue-900 bg-red-100 "
        }
    }
}