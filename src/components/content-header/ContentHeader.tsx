import React from 'react'
import { Link } from 'react-router-dom';

interface BreadcrumbList {
    name: string;
    url: string;
    active: boolean;
}

type AppProps = {
    title: string;
    breadcrumb: BreadcrumbList[]
}

function ContentHeader({ title, breadcrumb }: AppProps) {
    return (
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>{title}</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            {breadcrumb.map((el, index) => (
                                el.active ?
                                    <li key={index} className="breadcrumb-item active">{el.name}</li>
                                    :
                                    <li  key={index} className="breadcrumb-item"><Link to={el.url}>{el.name}</Link></li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentHeader