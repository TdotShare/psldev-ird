import { routerPath } from "./routerpath";


interface MenuItem {
    name: string;
    url: string;
    icon: string;
    path: string;
}

const userMenuList: MenuItem[] = [
    { name: "รายงานการพัฒนาของฉัน", icon: "fas fa-file-signature", url: routerPath.DocMe , path: routerPath.DocMe },
    { name: "กล่องเอกสาร", icon: "fas fa-mail-bulk", url: routerPath.CertifyDoc , path: routerPath.CertifyDoc },
    { name: "ออกจากระบบ", icon: "fas fa-sign-out-alt", url: "/logout", path: "/logout" }
]
const adminMenuList: MenuItem[] = [
    { name: "ผุ้ใช้งาน", icon: "fas fa-users", url: `${routerPath.Account}`, path: `admin/${routerPath.Account}` },
    { name: "ผู้รับรอง", icon: "fas fa-user-cog", url: `${routerPath.Certifier}` , path: `admin/${routerPath.Certifier}`},
    { name: "รายงานการพัฒนา", icon: "fas fa-tasks", url: `${routerPath.Document}`, path: `admin/${routerPath.Document}` }
]

export { adminMenuList, userMenuList }