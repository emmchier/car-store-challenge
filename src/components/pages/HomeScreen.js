import React from 'react';
import { CustomBtn } from '../ui/customs/CustomBtn';

export const HomeScreen = () => {

    return (
        <section className="home-screen centerMiddle">
            <div className="container">
                <div className="home-content">
                    <h1>Ahora es online</h1>
                    <p className="home-content-description">
                        Con <h2>Nissan Store</h2>, podés acceder a tu nuevo 0km con todos
                        <span>los servicios asociados desde la comodidad de tu sofá.</span>
                        Probanos! 
                    </p>
                    <CustomBtn
                        to={ '/store' }
                        btnTitle={ 'INGRESAR A NISSAN STORE' } 
                        isHover={ true } 
                        classes={ 'btn-home' }
                        btnIcon={ 'arrow_forward' }
                        isIconVisible={ true }
                    />
                </div>
            </div>
        </section>      
    )
}
