import { router, useForm } from "@inertiajs/react";
import { useState } from "react"
import Layout from "../../layout/Layout";


export default function Register(){

    const {processing,errors,clearErrors} = useForm();


    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    function handleChange(e){
        const key = e.target.id;
        const value = e.target.value;
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    };

    function handleSubmit(e){     
        e.preventDefault();
        clearErrors();
        router.post('/register',values);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Registrar</div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                
                                {/* <input type="hidden" name="_token" value={csrf_token} /> */}
                                
                                <div className="row mb-3">
                                    <label htmlFor="name" className="col-md-4 col-form-label text-md-end">Nome</label>

                                    <div className="col-md-6">
                                        <input id="name" type="text" className="form-control is-invalid " name="name" 
                                            value={values.name} 
                                            onChange={handleChange}
                                            required /> 
                                    </div>
                                </div>
                                {errors.name && <p>{errors.name}</p>}

                                <div className="row mb-3">
                                    <label htmlFor="email" className="col-md-4 col-form-label text-md-end">E-mail</label>

                                    <div className="col-md-6">
                                        <input id="email" type="email" className="form-control " name="email" 
                                            value={values.email} 
                                            onChange={handleChange}
                                            required  />
                                    </div>
                                </div>
                                {errors.email && <p>{errors.email}</p>}

                                <div className="row mb-3">
                                    <label htmlFor="password" className="col-md-4 col-form-label text-md-end">Senha</label>

                                    <div className="col-md-6">
                                        <input id="password" type="password" className="form-control " name="password" 
                                            value={values.password}
                                            onChange={handleChange}
                                            required />
                                    </div>
                                </div>
                                {errors.password && <p>{errors.password}</p>}

                                <div className="row mb-3">
                                    <label htmlFor="password_confirm" className="col-md-4 col-form-label text-md-end">Confirme a senha</label>

                                    <div className="col-md-6">
                                        <input id="password_confirmation" type="password" className="form-control" 
                                            name="password_confirmation" 
                                            value={values.password_confirmation}
                                            onChange={handleChange}
                                            required />
                                    </div>
                                </div>
                                {errors.password_confirmation && <p>{errors.password_confirmation}</p>}

                                <div className="row mb-0">
                                    <div className="col-md-6 offset-md-4">
                                        {/* <button type="submit" className="btn btn-primary">
                                            Cadastrar
                                        </button> */}
                                        <button type="submit" disabled={processing} className="btn btn-primary">
                                            Cadastrar
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

Register.layout = page => <Layout children={page} />
