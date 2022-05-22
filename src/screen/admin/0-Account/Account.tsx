import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'
import ContentHeader from '../../../components/content-header/ContentHeader'
import LoadingData from '../../../components/LoadingData'
import { API } from '../../../config/api'
import AccountVM from '../../../viewmodel/admin/0-Account/AccountVM'

function Account() {

    const viewModel = AccountVM()

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

export default Account