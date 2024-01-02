import { FlowbiteAccordionTheme } from "flowbite-react"

export const customAccordionTheme: FlowbiteAccordionTheme =
{
    "root": {
        "base": "divide-y divide-gray-200 border-gray-200",
        "flush": {
            "off": "rounded-lg border",
            "on": "border-b"
        }
    },
    "content": {
        "base": "py-5 px-5 last:rounded-b-lg first:rounded-t-lg"
    },
    "title": {
        "arrow": {
            "base": " bg-black",
            "open": {
                "off": " bg-black",
                "on": "bg-black"
            }
        },
        "base": "  first:rounded-t-lg last:rounded-b-lg ",
        "flush": {
            "off": "bg-transparent ",
            "on": "bg-transparent "
        },
        "heading": "",
        "open": {
            "off": "",
            "on": "text-blue-900 bg-red-100 "
        }
    }
}