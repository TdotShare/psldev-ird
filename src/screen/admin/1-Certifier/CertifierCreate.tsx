import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'
import ContentHeader from '../../../components/content-header/ContentHeader'
import LoadingData from '../../../components/LoadingData'
import { API } from '../../../config/api'
import { routerPath } from '../../../utils/routerpath'
import CertifierCreateVM from '../../../viewmodel/admin/1-Certifier/CertifierCreateVM'

function CertifierCreate() {

    const viewModel = CertifierCreateVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">


                    <div className='card'>
                        <div className='card-body'>

                            <div className="alert alert-dark" role="alert">
                                **ระดับ หมายถึงช่องที่ลงนาม [ 1 = หัวหน้าสำนักงาน , 2 = หัวหน้าแต่ละฝ่าย , 3 = ผู้อำนวยการ (คนเซ็นปิด)]
                            </div>

                            <form onSubmit={viewModel.submitFormCertifier} >
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label >account uid (บัญชีอินเตอร์เน็ตมหาวิทยาลัย)</label>
                                        <input type="text" name='certifier_user_uid'  className="form-control" placeholder='jirayu.co' />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >ระดับ</label>
                                        <select name='certifier_level' className="custom-select" defaultValue={""} >
                                            <option value={""}>กรุณาเลือกระดับ</option>
                                            <option value={1}>1 (หัวหน้าสำนักงาน)</option>
                                            <option value={2}>2 (หัวหน้าแต่ละฝ่าย)</option>
                                            <option value={3}>2 (ผู้อำนวยการ)</option>
                                        </select>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block">สร้าง</button>
                            </form>

                        </div>
                    </div>



                </div>
            </section>
        </div>
    )
}

export default CertifierCreate