import { LucideIcon } from "lucide-react"

export interface ButtonInfo {
    name: string
    route: string
    icon: LucideIcon
}

export interface Section {
    title: string
    buttons: ButtonInfo[]
}
