import { useState } from "react"
import { useQuery } from "react-query"
import { useSelector } from "react-redux"
import { APITypeDevelop_data } from "../../model/TypeDevelop"
import { RootState } from "../../store/ConfigureStore"
import exportedAPIDevelop from "../../utils/api/develop"
import { routerPath } from "../../utils/routerpath"
import  { DayRange } from '@amir04lm26/react-modern-calendar-date-picker'; 

export default function DocmeCreateVM() {


    const user = useSelector((state: RootState) => state.user.data)

    const [selectedDayRange, setSelectedDayRange] = useState<DayRange>({
        from: null,
        to: null
      });

    const query_typedevelop_data = useQuery<APITypeDevelop_data, Error>('getTypeDevelop', async () => exportedAPIDevelop.getTypeDevelop(user.token))

    const [values] = useState({
        title: "เอกสารการพัฒนาของฉัน - สร้าง",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "เอกสารการพัฒนาของฉัน", url: routerPath.DocMe , active: false },
            { name: "สร้าง", url: "", active: true },
        ]
    })

    return {
        ...values,
        user,
        query_typedevelop_data,
        selectedDayRange,
        setSelectedDayRange
    }


}

