import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import { API } from '../../config/api'
import { routerPath } from '../../utils/routerpath'
import DocmeCreateVM from '../../viewmodel/1-DocMe/DocmeCreateVM'

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from '@amir04lm26/react-modern-calendar-date-picker';
import SginExcuse from '../../components/SginExcuse '

function DocmeCreate() {

    const viewModel = DocmeCreateVM()

    return (
        <div className="content-wrapper">



            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">

                    {
                        viewModel.user.user_sign_status === 0 ?

                            <SginExcuse fullname={`${viewModel.user.user_firstname_th} ${viewModel.user.user_lastname_th}`} />


                            :

                            <></>
                    }

                    <p>แบบรายงานการพัฒนาบุคลากรโดยการอบรม/ศึกษาดูงาน/ประชุมสัมมนา
                        มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน  นครราชสีมา
                    </p>

                    <form onSubmit={viewModel.submitFormDocme} >


                        <div className='card'>
                            <div className='card-header'>
                                ข้อมูลบุคลากรไปราชการ
                            </div>
                            <div className='card-body'>
                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <label >ชื่อจริง - สกุล</label>
                                        <input type="text" className="form-control" defaultValue={`${viewModel.user.user_firstname_th} ${viewModel.user.user_lastname_th}`} readOnly />
                                    </div>
                                    <div className="form-group col-md">
                                        <label >ตำแหน่ง</label>
                                        <input type="text" name='develop_position' className="form-control" />
                                    </div>
                                </div>



                                <div className='form-row'>
                                    <div className="form-group col-md">
                                        <label >สังกัดสำนัก/สถาบัน/กอง</label>
                                        <input type="text" className="form-control" defaultValue={`${viewModel.user.user_faculty}`} readOnly />
                                    </div>

                                    {
                                        viewModel.query_typedevelop_data.isLoading ?

                                            <LoadingData />


                                            :

                                            <div className="form-group col-md">
                                                <label >ประเภทการไปพัฒนาบุคลากร</label>
                                                <select name='develop_type_go_id' className="custom-select" defaultValue={""} >
                                                    <option value={""}>ระบุประเภทการรับพัฒนาบุคลากร</option>
                                                    {
                                                        viewModel.query_typedevelop_data.data?.data.map((el) => (
                                                            <option key={el.type_develop_id} value={el.type_develop_id}>{el.type_develop_name}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>

                                    }

                                </div>

                            </div>
                        </div>

                        <div className='card'>
                            <div className='card-header'>
                                หัวข้อการพัฒนาบุคลากร
                            </div>
                            <div className='card-body'>

                                <div className='form-row'>

                                    {
                                        viewModel.query_typedevelop_data.isLoading ?

                                            <LoadingData />

                                            :

                                            <div className="form-group col-md">
                                                <label >ประเภทการรับพัฒนาบุคลากร</label>
                                                <select className="custom-select" name='develop_type_admit_id' defaultValue={""} >
                                                    <option value={""}>ระบุประเภทการรับพัฒนาบุคลากร</option>
                                                    {
                                                        viewModel.query_typedevelop_data.data?.data.map((el, index) => (
                                                            <option key={index} value={el.type_develop_id}>{el.type_develop_name}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                    }

                                    <div className="form-group col-md">
                                        <label >หัวข้อเรื่อง</label>
                                        <input type="text" name='develop_title' className="form-control" />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col'>
                                        <div className='form-row'>

                                            <div className="form-group col-md">
                                                <label >ตามคำสั่ง/หนังสือ</label>
                                                <input name='develop_number' type="text" className="form-control" />
                                            </div>

                                        </div>

                                        <b> ระหว่างวันที่ {viewModel.selectedDayRange.from === null ? "xx-xx-xxxx" : String(`${viewModel.selectedDayRange.from?.day}-${viewModel.selectedDayRange.from?.month}-${viewModel.selectedDayRange.from?.year}`)} ถึงวันที่ {viewModel.selectedDayRange.to === null ? "xx-xx-xxxx" : String(`${viewModel.selectedDayRange.to?.day}-${viewModel.selectedDayRange.to?.month}-${viewModel.selectedDayRange.to?.year}`)}  </b>

                                        <div style={{ marginBottom: '2%' }}></div>

                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Calendar
                                                value={viewModel.selectedDayRange}
                                                onChange={viewModel.setSelectedDayRange}
                                                shouldHighlightWeekends
                                            />
                                        </div>



                                    </div>

                                    <div className='col'>

                                        <div className='form-row'>

                                            <div className="form-group col-md-12">
                                                <label >สถานที่  อบรม/ศึกษาดูงาน/ประชุมสัมมนา</label>
                                                <input type="text" name='develop_location' className="form-control" />
                                            </div>

                                            <div className="form-group col-md-12">
                                                <label >หน่วยงานดำเนินการ</label>
                                                <input type="text" name='develop_op_agency' className="form-control" />
                                            </div>

                                            <div className="form-group col-md-12">
                                                <table className="table table-bordered ">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">ระบุการนำไปใช้ประโยชน์</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row"><input value={1} name='develop_utilization_id' type={`radio`} /> </th>
                                                            <td>ปฏิบัติงานในหน้าที่รับผิดชอบ</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><input value={2} name='develop_utilization_id' type={`radio`} /> </th>
                                                            <td>ขยายผลแก่บุคลากรในสถานศึกษา</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><input value={3} name='develop_utilization_id' type={`radio`} /> </th>
                                                            <td>อื่นๆ</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>


                                            <div className="form-group col-md-12">
                                                <label >(อื่นๆ) โปรดระบุ</label>
                                                <input type="text" name='develop_utilization_other' maxLength={20} className="form-control" />
                                            </div>




                                        </div>

                                    </div>
                                </div>




                            </div>
                        </div>

                        <div className='card'>
                            <div className='card-header'>
                                เอกสาร/ ตำรา/ คู่มือ
                            </div>
                            <div className='card-body'>
                                <textarea className="form-control" maxLength={50} name='develop_document' rows={3}></textarea>
                            </div>
                        </div>

                        <div className='card'>
                            <div className='card-header'>
                                รายละเอียดการไปศึกษา ฝึกอบรม ประชุม สัมมนา ฯลฯ ให้เขียนรายละเอียดโดยบรรยายสิ่งที่ได้สังเกตรู้เห็น หรือได้รับถ่ายทอดมาให้ชัดเจน
                            </div>
                            <div className='card-body'>
                                <textarea className="form-control" maxLength={50} name='develop_detail' rows={3}></textarea>
                            </div>
                        </div>

                        <div className='card'>
                            <div className='card-header'>
                                สรุปข้อคิดเห็น/ข้อเสนอแนะ
                            </div>
                            <div className='card-body'>
                                <textarea className="form-control" name='develop_feedback' maxLength={100} rows={3}></textarea>
                            </div>
                        </div>



                        <div className='card'>
                            <div className='card-header'>
                                ความเห็นผู้บังคับบัญชา (ผู้รับรองเอกสาร)
                            </div>
                            <div className='card-body'>
                                <div className='form-row'>

                                    {
                                        viewModel.query_certifier1st_data.isLoading ?

                                            <LoadingData />

                                            :

                                            <div className="form-group col-md">
                                                <label >เลือกผู้บังคับบัญชาระดับหัวหน้าสำนักงาน</label>
                                                <select className="custom-select" name='sign_certifier_1st_uid' defaultValue={""} >
                                                    <option value={""}>กรุณาเลือกผู้รับรองเอกสาร</option>
                                                    {
                                                        viewModel.query_certifier1st_data.data?.data.map((el, index) => (
                                                            <option key={index} value={el.certifier_user_uid}>{el.certifier_user_uid} {el.user_uid ? `(${el.user_prename}${el.user_firstname_th} ${el.user_lastname_th})` : ""}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                    }

                                    {
                                        viewModel.query_certifier2st_data.isLoading ?

                                            <LoadingData />

                                            :

                                            <div className="form-group col-md">
                                                <label >เลือกผู้บังคับบัญชาระดับหัวหน้าฝ่าย</label>
                                                <select className="custom-select" name='sign_certifier_2st_uid' defaultValue={""} >
                                                    <option value={""}>กรุณาเลือกผู้รับรองเอกสาร</option>
                                                    {
                                                        viewModel.query_certifier2st_data.data?.data.map((el, index) => (
                                                            <option key={index} value={el.certifier_user_uid}>{el.certifier_user_uid} {el.user_uid ? `(${el.user_prename}${el.user_firstname_th} ${el.user_lastname_th})` : ""}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                    }

                                    {
                                        viewModel.query_certifier3st_data.isLoading ?

                                            <LoadingData />

                                            :

                                            <div className="form-group col-md">
                                                <label >เลือกผู้บังคับบัญชาระดับผู้อำนวยการ</label>
                                                <select className="custom-select" name='sign_certifier_3st_uid' defaultValue={""} >
                                                    <option value={""}>กรุณาเลือกผู้รับรองเอกสาร</option>
                                                    {
                                                        viewModel.query_certifier3st_data.data?.data.map((el, index) => (
                                                            <option key={index} value={el.certifier_user_uid}>{el.certifier_user_uid} ({el.user_prename}{el.user_firstname_th} {el.user_lastname_th})</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                    }

                                </div>
                            </div>
                        </div>



                        <Button className='btn btn-block btn-success' disabled={viewModel.user.user_sign_status === 1 ? false : true} >สร้างแบบรายการ</Button>

                        <div style={{ marginBottom: '1%' }}></div>

                    </form>


                </div>
            </section >
        </div >
    )
}

export default DocmeCreate