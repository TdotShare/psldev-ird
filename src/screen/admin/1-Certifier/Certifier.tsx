import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'
import ContentHeader from '../../../components/content-header/ContentHeader'
import LoadingData from '../../../components/LoadingData'
import { API } from '../../../config/api'
import { routerPath } from '../../../utils/routerpath'
import CertifierVM from '../../../viewmodel/admin/1-Certifier/CertifierVM'

function Certifier() {

    const viewModel = CertifierVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">



                    <Link to={`${routerPath.Certifier}/create`}><Button className='btn btn-primary'>เพิ่มผู้รับรอง</Button></Link>

                    <div style={{ paddingBottom: '1%' }}></div>



                    <div className='card'>
                        <div className='card-header'>
                            ผู้รับรองเอกสาร / ผู้บังคับบัญชา
                        </div>
                        <div className='card-body'>


                            {
                                viewModel.query_certifier_data.isLoading ?


                                    <LoadingData />

                                    :

                                    <div className='table-responsive'>
                                        <table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">ชื่อ uid</th>
                                                    <th scope="col">คำนำหน้า</th>
                                                    <th scope="col">ตำแหน่ง</th>
                                                    <th scope="col">ระดับ</th>
                                                    <th scope="col">สถานะ</th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    viewModel.query_certifier_data.data?.data.map((el, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{el.certifier_user_uid}</td>
                                                            <td>{el.certifier_title}</td>
                                                            <td>{el.certifier_position}</td>
                                                            <td>{el.certifier_level}</td>
                                                            <td>{el.certifier_status === 1 ? "เปิดการใช้งาน" : 'ปิดการใช้งาน'}</td>
                                                            <td><Button className='btn btn-block btn-primary' onClick={() => viewModel.actionUpdate_CertifierStatus(el.certifier_id)} ><i className="fas fa-sync"></i> แก้ไขสถานะ</Button></td>
                                                            <td><Button className='btn btn-block btn-danger' onClick={() => viewModel.actionDelete(el.certifier_id)}><i className="far fa-trash-alt"></i> ลบข้อมูล</Button></td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>


                            }







                        </div>
                    </div>



                </div>
            </section>
        </div>
    )
}

export default Certifier