import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import Pagination from '../../components/Pagination'
import { API } from '../../config/api'
import { routerPath } from '../../utils/routerpath'
import CertifydocVM from '../../viewmodel/2-Certifydoc/CertifydocVM'

function Certifydoc() {

    const viewModel = CertifydocVM()

    if (viewModel.query_docinbox_data.isError) {
        return <Navigate to={`/login`} />
    }

    if (!viewModel.query_docinbox_data.isLoading) {
        if (viewModel.query_docinbox_data.data?.bypass === false) {
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

                    <div className='card'>

                        <div className='card-header'>
                            รายการเอกสารที่ส่งเข้ามา
                        </div>


                        <div className='card-body'>
                            {
                                viewModel.query_docinbox_data.isLoading ?

                                    <LoadingData />

                                    :

                                    <>

                                        <div className='table-responsive'>
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">หัวข้อเรื่อง</th>
                                                        <th scope="col">ตามคำสั่ง/หนังสือ</th>
                                                        <th scope="col">ระหว่างวันที่ - ถึงวันที่</th>
                                                        <th scope="col">สร้างโดย</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        viewModel.query_docinbox_data.data?.data.data?.map((el, index) => (
                                                            <tr key={index}>
                                                                <th scope="col">{index + 1}</th>
                                                                <td>{el.develop_title}</td>
                                                                <td>{el.develop_number}</td>
                                                                <td>{el.develop_sdete} - {el.develop_edete}</td>
                                                                <td>{el.sign_certifier_uid}</td>
                                                                <td><Link to={`${routerPath.CertifyDoc}/update/${el.develop_id}`} ><Button className='btn btn-primary btn-block'><i className="fas fa-user-check"></i> ตรวจสอบเอกสาร</Button></Link></td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>


                                        <div style={{ marginBottom: `1%` }}></div>

                                        <Pagination
                                            current_page={viewModel.query_docinbox_data.data?.data.current_page!}
                                            last_page={viewModel.query_docinbox_data.data?.data.last_page!}
                                            total={viewModel.query_docinbox_data.data?.data.data.length!}
                                            nextClick={() => viewModel.setPage(viewModel.query_docinbox_data.data?.data.current_page! + 1)}
                                            previousClick={() => viewModel.setPage(viewModel.query_docinbox_data.data?.data.current_page! - 1)}
                                            numberClick={(num: number) => viewModel.setPage(num)}

                                        />

                                    </>


                            }



                        </div>
                    </div>



                </div>
            </section>
        </div>
    )
}

export default Certifydoc