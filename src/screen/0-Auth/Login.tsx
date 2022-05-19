import React from 'react'
import { API } from '../../config/api';
import { TITLE } from '../../config/title';
import LoginVM from '../../viewmodel/0-Auth/LoginVM';


function AuthLogin() {

    const viewModel = LoginVM()


    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <h3>{TITLE.NameWeb}</h3>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <div style={{ marginBottom: `1%` }}></div>

                        <div className="row">
                            <div className="col-12">
                                <button onClick={() => viewModel.actionGoToRmutiLogin()} className="btn btn-primary btn-block">เข้าสู่ระบบ</button>
                            </div>
                        </div>

                        <div style={{ marginBottom: `1%` }}></div>

                        <div className="row">
                            <div className="col-12">
                                <a href={`${API}/manual_user`} target={`_blank`}><button className="btn btn-warning btn-block">คู่มือการใช้งาน</button></a>
                            </div>
                        </div>


                    </div>
                    {/* /.card-body */}
                </div>
            </div>
        </div>

    )
}

export default AuthLogin