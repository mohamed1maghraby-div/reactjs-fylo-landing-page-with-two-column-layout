import React from 'react';
import './MiddelPage.css';
import Form from './Form';

function MiddelPage(props){
    const setType = props.type ? true : false;

    return(
        <div className={props.type ? 'all-files' : 'stay-productive'}>
            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-sm-push-12">
                    <h2>{props.header}</h2>
                    <p>{props.fp}</p>

                    {   setType &&
                            <Form formType='form-inline'/>
                    }
                    {   !setType &&
                        <>
                            <p>{props.sp}</p><a href="#">See how Fylo works <img src="images/icon-arrow.svg" alt="icon-arrow"/></a>
                            <div className="auther">
                                
                                <p><img src='images/icon-quotes.svg' alt='quotes'/><br/>{props.tp}</p>
                                <div className="auther-info">
                                    <img className="img-circle" src={props.auth} alt="avatar-testimonial" width='30' height='30'/>
                                    <div className='auth-wrap'>
                                        <p>{props.authName}</p><span>{props.authJob}</span>
                                    </div>
                                    <div style={{clear:'both'}}></div>
                                </div>
                            </div>
                        </>
                    }
                </div>
                <div className="col-lg-6 col-sm-pull-12"><img className="img-responsive" src={props.img} alt="illustration"/></div>
                </div>
            </div>
        </div>
    );
}
export default MiddelPage;