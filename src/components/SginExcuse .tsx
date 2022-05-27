import React from 'react'
import { Link } from 'react-router-dom';
import { routerPath } from '../utils/routerpath';

type AppProps = {
    fullname: string,
};

function SginExcuse({ fullname }: AppProps) {
    return (
        <div className="callout callout-warning">
            <h5>ผู้ใช้งาน {fullname} ยังไม่มีลายเซ็นดิจิทัลอยู่ในระบบ !</h5>
            <p>หากมีความประสงค์อัปโหลด ลายเซ็นดิจิทัล (Digital Signature) โปรด <Link to={routerPath.Signature}>คลิก</Link></p>
            <b>หากไม่มี ลายเซ็นดิจิทัล จะไม่สามารถใช้งานระบบได้ !</b>
        </div>
    )
}

export default SginExcuse 