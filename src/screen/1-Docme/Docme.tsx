import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import { API } from '../../config/api'
import DocmeVM from '../../viewmodel/1-DocMe/DocmeVM'

function Docme() {

    const viewModel = DocmeVM()

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



                        </div>
                    </div>



                </div>
            </section>
        </div>
    )
}

export default Docme