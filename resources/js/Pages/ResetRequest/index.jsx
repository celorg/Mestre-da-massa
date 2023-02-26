import { Link, useForm } from '@inertiajs/react'
import Layout from '../../layout/Layout'



export default function ResetPassword(){

    const {data,setData,errors,processing,post } = useForm({
        email: "",
    });

    const submitEmail = (e) => {
        e.preventDefault();
        post('/password/email');
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Recuperar Senha</div>

                        <div className="card-body">

                            <form onSubmit={submitEmail}>

                                <div className="row mb-3">
                                    <label htmlFor="email" className="col-md-4 col-form-label text-md-end">E-mail</label>

                                    <div className="col-md-6">
                                        <input id="email" type="email" className="form-control" name="email" 
                                            value={data.email}
                                            onChange={e => setData('email', e.target.value)}
                                            required />
                                    </div>
                                </div>

                                <div className="row mb-0">
                                    <div className="col-md-6 offset-md-4">
                                        <button type="submit" className="btn btn-primary">
                                            Recuperar Senha
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ResetPassword.layout = page => <Layout children={page}  />