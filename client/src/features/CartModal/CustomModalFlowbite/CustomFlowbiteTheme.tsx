import { FlowbiteModalTheme } from "flowbite-react"

/* 
    Modalsize für mobile: h-screen, w-screen
    Modalplacement für mobile : -
    Modalsize für desktop : h-full-screen, w-1/3
    Modalplacement für desktop : center-right 
*/

export const customModalTheme: FlowbiteModalTheme =
{
    "root": {
        "base": "fixed top-0 right-0 left-0 z-50 h-modal min-h-screen overflow-y-auto overflow-x-hidden", // md:inset-0 md:h-full
        "show": {
            "on": "flex bg-gray-600 bg-opacity-50 dark:bg-opacity-80", //flex
            "off": "hidden"
        },
        "sizes": {
            "sm": "w-screen", //before: 'max-w-sm'
            "md": "max-w-md",
            "lg": "max-w-lg",
            "xl": "w-1/3", //before: 'max-w-xl'
            "2xl": "max-w-1/2", //before: 'max-w-2xl'
            "3xl": "max-w-1/2",//before:    ..
            "4xl": "max-w-1/2",//before:    ..
            "5xl": "max-w-1/2",//before:    ..
            "6xl": "max-w-1/2",//before:    ..
            "7xl": "max-w-1/2" //before:    ..
        },
        "positions": {
            "top-left": "items-start justify-start",
            "top-center": "items-start justify-center",
            "top-right": "items-start justify-end",
            "center-left": "items-center justify-start",
            "center": "items-center justify-center",
            "center-right": "items-center justify-end",
            "bottom-right": "items-end justify-end",
            "bottom-center": "items-end justify-center",
            "bottom-left": "items-end justify-start"
        }
    },
    "content": {
        "base": "relative min-h-screen w-full  ", //before: h-full md:h-auto
        "inner": "relative bg-red-200 shadow dark:bg-gray-700  min-h-screen w-full"
    },
    "body": {
        "base": " flex-1 overflow-auto",
        "popup": "pt-0"
    },
    "header": {
        "base": "flex items-start justify-between  dark:border-gray-600  p-5",
        "popup": "p-2 border-b-0",
        "title": "text-2xl tracking-wider font-bold text-gray-900 dark:text-white",
        "close": {
            "base": "ml-auto inline-flex items-center rounded-full bg-gray-400 p-1.5 text-base text-gray-200  ",
            "icon": "h-5 w-5"
        }
    },
    "footer": {
        "base": "flex items-center space-x-2 rounded-b border-gray-400 p-3 dark:border-gray-600",
        "popup": "border-t"
    }
}