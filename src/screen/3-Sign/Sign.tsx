import React from 'react'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import SignVM from '../../viewmodel/3-Sign/SignVM'
import SignatureCanvas from 'react-signature-canvas'

function Sign() {

    const viewModel = SignVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">

                {/* <div className="container-fluid">

                    <div className='card'>
                        <div className='card-header'>
                            {viewModel.title} ปัจจุบันของคุณ
                        </div>
                        <div className='card-body'>



                        </div>
                    </div>

                </div> */}


                <div className="container-fluid">

                    <div className='card'>
                        <div className='card-header'>
                            สร้าง {viewModel.title} ของคุณ
                        </div>
                        <div className='card-body'>

                            <div className='row'>
                                <div className='col'>


                                    <div style={{ textAlign: 'center' }}>
                                        <div className='border border-dark' style={{ width: 220, margin: "auto", }}>
                                            <SignatureCanvas
                                                penColor='black'
                                                canvasProps={{ width: 220, height: 150, className: 'sigCanvas' }}
                                                ref={(ref) => { viewModel.setSigPad(ref) }}
                                                onEnd={() => viewModel.setSigTouch(viewModel.sigTouch + 1)}
                                            />
                                        </div>
                                    </div>

                                </div>

                                <div className='col'>

                                    <div style={{ paddingBottom: '2%' }}></div>

                                    <Button type='button' className='btn btn-block btn-info' onClick={() => viewModel.sigPad.clear()}  ><i className="far fa-trash-alt"></i> วาดลายเซ็นดิจิทัลใหม่</Button>

                                    {/* <Button className='btn btn-block btn-info' onClick={() => viewModel.actionPreviewSign(viewModel.sigPad.getTrimmedCanvas().toDataURL('image/png'))} ><i className="far fa-file-word"></i> ดาวน์โหลดตัวอย่างลายเซ็นดิจิทัลบนเอกสาร</Button> */}

                                </div>
                            </div>





                            <hr />

                            <div style={{ paddingBottom: `1%` }}></div>


                            <form onSubmit={viewModel.submitFormSgin}  > 

                                <div className='table-responsive'>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col"> ท่านยอมรับข้อตกลงนี้หรือไม่</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row"><input name='data_correct' type={`checkbox`} value={1} required /> </th>
                                                <td>ลายเซ็นดิจิทัลที่เซ็นมีความถูกต้อง</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><input name='data_agree' type={`checkbox`} value={1} required /></th>
                                                <td>ยินยอมให้ระบบใช้ลายเซ็นดิจิทัลของคุณ</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {
                                    viewModel.user.user_sign_status === 0

                                    ?

                                    <Button className='btn btn-block btn-success' disabled={viewModel.loading_btn}>บันทึกข้อมูล</Button>

                                    :

                                    <></>
                                }

                     

                            </form>






                        </div>

                    </div>

                </div>






            </section>
        </div>
    )
}

export default Sign