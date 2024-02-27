import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./index.module.css"

interface Item {
    title: string
    path: string
}

interface NavigationItemProps {
    item: Item
}

const NavigationItem = ({ item }: NavigationItemProps) => {
    const pathName = usePathname()
    return (
        <li className={cn(styles.navigationItem, pathName === item.path ? "text-indigo-600" : "")}>
            <Link href={item.path}>{item.title}</Link>
        </li>
    )
}

export default NavigationItem