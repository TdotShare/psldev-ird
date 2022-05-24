import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import Pagination from '../../components/Pagination'
import { API } from '../../config/api'
import CertifydocUpdateVM from '../../viewmodel/2-Certifydoc/CertifydocUpdateVM'

function CertifydocUpdate() {

    const viewModel = CertifydocUpdateVM()

    if (viewModel.doc_user.isError) {
        return <Navigate to={`/login`} />
    }

    if (!viewModel.doc_user.isLoading) {
        if (viewModel.doc_user.data?.bypass === false) {
            return <Navigate to={`/login`} />
        }
    }

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">

                    <div style={{ paddingBottom: '1%' }}></div>

                    {
                        viewModel.doc_user.isLoading ?

                            <LoadingData />

                            :

                            <>

                                รายงานการพัฒนาบุคคลของ <b>{viewModel.doc_user.data?.data.user_prename}{viewModel.doc_user.data?.data.user_firstname_th} {viewModel.doc_user.data?.data.user_lastname_th}</b>

                                <div style={{ marginBottom: `1%` }}></div>

                                <div className='card'>
                                    <div className='card-header'>
                                        ข้อมูลบุคลากรไปราชการ
                                    </div>
                                    <div className='card-body'>
                                        <div className="form-row">
                                            <div className="form-group col-md">
                                                <label >ชื่อจริง - สกุล</label>
                                                <input type="text" className="form-control" defaultValue={`${viewModel.doc_user.data?.data.user_firstname_th} ${viewModel.doc_user.data?.data.user_lastname_th}`} readOnly />
                                            </div>
                                            <div className="form-group col-md">
                                                <label >ตำแหน่ง</label>
                                                <input type="text" defaultValue={`${viewModel.doc_user.data?.data.develop_position}`} className="form-control" readOnly />
                                            </div>
                                        </div>



                                        <div className='form-row'>
                                            <div className="form-group col-md">
                                                <label >สังกัดสำนัก/สถาบัน/กอง</label>
                                                <input type="text" className="form-control" readOnly />
                                            </div>


                                            <div className="form-group col-md">
                                                <label >ประเภทการรับพัฒนาบุคลากร</label>
                                                <input type="text" className="form-control" defaultValue={`${viewModel.doc_user.data?.data.develop_type_go_id}`} readOnly />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className='card'>
                                    <div className='card-header'>
                                        หัวข้อการพัฒนาบุคลากร
                                    </div>
                                    <div className='card-body'>

                                        <div className='form-row'>


                                            <div className="form-group col-md">
                                                <label >ประเภทการรับพัฒนาบุคลากร</label>
                                                <input type="text" className="form-control" defaultValue={`${viewModel.doc_user.data?.data.develop_type_admit_id}`} readOnly />
                                            </div>

                                            <div className="form-group col-md">
                                                <label >หัวข้อเรื่อง</label>
                                                <input type="text" name='develop_title' defaultValue={`${viewModel.doc_user.data?.data.develop_title}`} className="form-control" readOnly />
                                            </div>
                                        </div>


                                        <div className='form-row'>
                                            <div className="form-group col-md-6">
                                                <label >ตามคำสั่ง/หนังสือ</label>
                                                <input name='develop_number' type="text" className="form-control" readOnly />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label >ระหว่างวันที่ - ถึงวันที่</label>
                                                <input defaultValue={`${viewModel.doc_user.data?.data.develop_sdete} - ${viewModel.doc_user.data?.data.develop_edete}`} type="text" className="form-control" readOnly />
                                            </div>
                                        </div>

                                        <div className='form-row'>
                                            <div className="form-group col-md-6">
                                                <label >สถานที่  อบรม/ศึกษาดูงาน/ประชุมสัมมนา</label>
                                                <input type="text" name='develop_location' defaultValue={`${viewModel.doc_user.data?.data.develop_location}`} className="form-control" readOnly />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label >หน่วยงานดำเนินการ</label>
                                                <input type="text" name='develop_op_agency' defaultValue={`${viewModel.doc_user.data?.data.develop_op_agency}`} className="form-control" readOnly />
                                            </div>

                                            <div className="form-group col-md-12">
                                                <label >การนำไปใช้ประโยชน์</label>
                                                <input type="text" name='develop_op_agency' defaultValue={`${viewModel.doc_user.data?.data.develop_utilization_text}`} className="form-control" readOnly />
                                            </div>

                                            <div className="form-group col-md-12">
                                                <label >(อื่นๆ) โปรดระบุ</label>
                                                <input type="text" name='develop_utilization_other'  defaultValue={`${viewModel.doc_user.data?.data.develop_utilization_other !== null ? viewModel.doc_user.data?.data.develop_utilization_other  : '' }`} className="form-control" readOnly />
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className='card'>
                                    <div className='card-header'>
                                        เอกสาร/ ตำรา/ คู่มือ
                                    </div>
                                    <div className='card-body'>
                                        <textarea className="form-control" defaultValue={`${viewModel.doc_user.data?.data.develop_document}`} name='develop_document' rows={3} readOnly></textarea>
                                    </div>
                                </div>

                                <div className='card'>
                                    <div className='card-header'>
                                        รายละเอียดการไปศึกษา ฝึกอบรม ประชุม สัมมนา ฯลฯ ให้เขียนรายละเอียดโดยบรรยายสิ่งที่ได้สังเกตรู้เห็น หรือได้รับถ่ายทอดมาให้ชัดเจน
                                    </div>
                                    <div className='card-body'>
                                        <textarea className="form-control" defaultValue={`${viewModel.doc_user.data?.data.develop_detail}`} name='develop_detail' rows={3} readOnly></textarea>
                                    </div>
                                </div>

                                <div className='card'>
                                    <div className='card-header'>
                                        สรุปข้อคิดเห็น/ข้อเสนอแนะ
                                    </div>
                                    <div className='card-body'>
                                        <textarea className="form-control" defaultValue={`${viewModel.doc_user.data?.data.develop_feedback}`} name='develop_feedback' rows={3} readOnly></textarea>
                                    </div>
                                </div>


                                <div className='row'>
                                    <div className='col-md-6'><Button className='btn btn-block btn-success'><i className="fas fa-file-signature"></i> ลงนามเอกสาร</Button></div>
                                    <div className='col-md-6'><Button className='btn btn-block btn-warning'><i className="fas fa-edit"></i> ให้ผู้ส่งเอกสารแก้ไขเอกสารอีกครั้ง</Button></div>
                                </div>

                                <div style={{marginBottom : `1%`}}></div>


                            </>


                    }





                </div>
            </section>
        </div>
    )
}

export default CertifydocUpdate