import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import { API } from '../../config/api'
import { routerPath } from '../../utils/routerpath'
import DocmeVM from '../../viewmodel/1-DocMe/DocmeVM'

function Docme() {

    const viewModel = DocmeVM()


    if (viewModel.query_develop_verify_data.isError || viewModel.query_develop_history_data.isError) {
        return <Navigate to={`/login`} />
    }

    if (!viewModel.query_develop_verify_data.isLoading || !viewModel.query_develop_history_data.isLoading) {
        if (viewModel.query_develop_verify_data.data?.bypass === false || viewModel.query_develop_history_data.data?.bypass === false) {
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

                    {
                        viewModel.user.user_sign_status === 0 ?

                            <div className="callout callout-warning">
                                <h5>ผู้ใช้งาน {viewModel.user.user_firstname_th} {viewModel.user.user_lastname_th} ยังไม่มีลายเซ็นดิจิทัลอยู่ในระบบ !</h5>
                                <p>หากมีความประสงค์อัปโหลด ลายเซ็นดิจิทัล (Digital Signature) โปรด <Link to={routerPath.Signature}>คลิก</Link></p>
                                <b>หากไม่มี ลายเซ็นดิจิทัล ระบบจะใช้ชื่อจริงและนามสกุลของคุณในการลงนามเอกสารแทน !</b>
                            </div>


                            :

                            <></>


                    }


                    <Link to={`${routerPath.DocMe}/create`}><Button className='btn btn-primary'>สร้างแบบรายงานการพัฒนาบุคคล</Button></Link>


                    <div style={{ paddingBottom: '1%' }}></div>



                    <div className='card'>
                        <div className='card-header'>
                            รายงานการพัฒนาบุคคลที่กำลังดำเนินการ
                        </div>
                        <div className='card-body'>

                            {
                                viewModel.query_develop_verify_data.isLoading ?

                                    <LoadingData />

                                    :

                                    <div className='table-responsive'>
                                        <table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">หัวข้อเรื่อง</th>
                                                    <th scope="col">ตามคำสั่ง/หนังสือ</th>
                                                    <th scope="col">ระหว่างวันที่ - ถึงวันที่</th>
                                                    <th scope="col">สถานะ</th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    viewModel.query_develop_verify_data.data?.data.map((el, index) => (
                                                        <tr key={index}>
                                                            <th scope="col">{index + 1}</th>
                                                            <td>{el.develop_title}</td>
                                                            <td>{el.develop_number}</td>
                                                            <td>{el.develop_sdete} - {el.develop_edete}</td>
                                                            <td>{el.develop_status_name}</td>
                                                            <td><Button className='btn btn-primary btn-block' disabled={el.develop_status === 1 ? false : true} ><i className="fas fa-edit"></i>  แก้ไขข้อมูล</Button></td>
                                                            <td><Button className='btn btn-primary btn-block'><i className="fas fa-download"></i>  ดาวน์โหลดเอกสาร</Button></td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>


                            }



                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-header'>
                            ประวัติรายงานการพัฒนาบุคคลของฉัน
                        </div>
                        <div className='card-body'>
                            <div className='table-responsive'>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">หัวข้อเรื่อง</th>
                                            <th scope="col">ตามคำสั่ง/หนังสือ</th>
                                            <th scope="col">ระหว่างวันที่ - ถึงวันที่</th>
                                            <th scope="col">สถานะ</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            viewModel.query_develop_history_data.data?.data.map((el, index) => (
                                                <tr key={index}>
                                                    <th scope="col">{index + 1}</th>
                                                    <td>{el.develop_title}</td>
                                                    <td>{el.develop_number}</td>
                                                    <td>{el.develop_sdete} - {el.develop_edete}</td>
                                                    <td>{el.develop_status_name}</td>
                                                    <td><Button className='btn btn-primary btn-block'><i className="fas fa-download"></i>  ดาวน์โหลดเอกสาร</Button></td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>



                </div>
            </section>
        </div>
    )
}

export default Docme