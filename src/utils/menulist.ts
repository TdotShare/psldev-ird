import { routerPath } from "./routerpath";


interface MenuItem {
    name: string;
    url: string;
    icon: string;
    path: string;
}

const userMenuList: MenuItem[] = [
    { name: "รายงานการพัฒนาบุคลากร", icon: "fas fa-file-signature", url: routerPath.Development , path: routerPath.Development },
    { name: "รับรองเอกสาร", icon: "fas fa-file-signature", url: routerPath.CertifyDoc , path: routerPath.CertifyDoc },
    { name: "ออกจากระบบ", icon: "fas fa-sign-out-alt", url: "/logout", path: "/logout" }
]
const adminMenuList: MenuItem[] = [
    { name: "ผุ้ใช้งาน", icon: "fas fa-user", url: "/account", path: "/account" },
    { name: "ผู้รับรอง", icon: "fas fa-user", url: routerPath.Certifier , path: routerPath.Certifier},
    { name: "รายงานการพัฒนาบุคลากร", icon: "fas fa-tasks", url: routerPath.Development, path: routerPath.Development }
]

export { adminMenuList, userMenuList }