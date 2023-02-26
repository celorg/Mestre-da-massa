import { Link, useForm } from '@inertiajs/react'
import Layout from '../../layout/Layout'


export default function Login(){

    const { data,setData,post,processing,errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    function submit(e){
        e.preventDefault()
        post('/login');
    }

    return (
    <div className="container">
    
        <div className="row justify-content-center" id="root">
        
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Login</div>

                    <div className="card-body">
                        <form onSubmit={submit}>
                           

                            <div className="row mb-3">
                                <label htmlFor="email" className="col-md-4 col-form-label text-md-end">E-mail</label>

                                <div className="col-md-6">
                                    <input id="email" type="email" className="form-control" name="email" 
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)} 
                                        required  />

                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="password" className="col-md-4 col-form-label text-md-end">Senha</label>

                                <div className="col-md-6">
                                    <input id="password" type="password" className="form-control " 
                                        name="password" 
                                        onChange={e => setData('password', e.target.value)}
                                        required  />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6 offset-md-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="remember" id="remember" 
                                            value={data.remember}
                                            onChange={e => setData('remember', e.target.checked)}
                                        />

                                        <label className="form-check-label" htmlFor="remember">
                                            Mantenha-me conectado
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-0">
                                <div className="col-md-8 offset-md-4">
                                    <button type="submit" className="btn btn-primary">
                                        Login
                                    </button>
                                    
                                    <a className="btn btn-link" href={route('password.request')}>
                                        Esqueci a senha
                                    </a>
                                   
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

Login.layout = page => <Layout children={page}  />