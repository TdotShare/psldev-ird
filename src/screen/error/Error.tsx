import { Link } from 'react-router-dom'
import ContentHeader from '../../components/content-header/ContentHeader'
import { routerPath } from '../../utils/routerpath'
import ErrorVM from '../../viewmodel/error/ErrorVM'

function Error404() {

    const viewModel = ErrorVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">

                    <div className="error-page">
                        <h2 className="headline text-warning"> 404</h2>

                        <div className="error-content">
                            <h3><i className="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>

                            <p>
                                ไม่พบข้อมูลที่คุณต้องการค้นหาหรือเข้าถึง , ย้อนกลับไปยัง <Link to={routerPath.DocMe}>หน้าหลัก</Link>
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Error404