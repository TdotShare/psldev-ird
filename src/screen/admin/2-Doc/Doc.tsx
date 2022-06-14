import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'
import ContentHeader from '../../../components/content-header/ContentHeader'
import LoadingData from '../../../components/LoadingData'
import { API } from '../../../config/api'
import DocVM from '../../../viewmodel/admin/2-Doc/DocVM'

function Doc() {

    const viewModel = DocVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">

                    <div style={{ paddingBottom: '1%' }}></div>

                    <div className='card'>
                        <div className='card-body'>


                            <div className="form-row">


                                <div className="form-group col-md">
                                    <label >เลือกปี</label>
                                    <select className="custom-select" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { viewModel.set_num_year(Number(e.target.value)) }} defaultValue={0} >
                                        <option value={0}>กรุณาเลือกปี</option>
                                        {
                                            viewModel.generateArrayOfYears().map(el => (
                                                <option value={el}>{el + 543}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                            </div>

                            <div className="form-row">

                                <div className="form-group col-md">
                                    <label >เดือนที่เริ่มต้น</label>
                                    <select className="custom-select" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { viewModel.set_sMonth(Number(e.target.value)) }} defaultValue={0} >
                                        <option value={0}>กรุณาเลือกเดือน</option>
                                        {
                                            viewModel.name_month.map((el, index) => (
                                                <option key={index} value={index + 1}>{el}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form-group col-md">
                                    <label >เดือนที่สิ้นสุด</label>
                                    <select className="custom-select" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { viewModel.set_eMonth(Number(e.target.value)) }} defaultValue={0} >
                                        <option value={0}>กรุณาเลือกเดือน</option>
                                        {
                                            viewModel.name_month.map((el, index) => (
                                                <option key={index} value={index + 1}>{el}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                            </div>


                            <div className='row'>
                                <div className='col-6'>
                                    <button onClick={() => viewModel.action_download_chk_persona()} className='btn btn-block btn-primary'>ตรวจสอบจำนวนการเข้าอบรบแต่ละคน (Excel)</button>
                                </div>
                                <div className='col-6'>
                                    <button onClick={() => viewModel.action_download_doc()} className='btn btn-block btn-success'>ดาวน์โหลดเอกสารทั้งหมด (Word)</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Doc