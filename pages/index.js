import React, { useEffect, createRef } from 'react';
import Head from 'next/head';
// import Script from 'next/script';
import Image from 'next/image'
import Scripts from '../components/scripts';
import Link from 'next/link';

export default function Peluqueria() {


    const daysRef = createRef();
    console.log(daysRef);
    // navbar-collapse in
    useEffect(() => {
        // function hola() {
        //     daysRef.current.className = "navbar-collapse in";
        // }
        // hola();
        (() => (

            function hola() {
                if (daysRef.current) daysRef.current.className = "navbar-collapse in";
            }
        )
        )()

        // hola();

    }, []);

    // function hola() {
    //     if (daysRef.current) {
    //         daysRef.current.className = "navbar-collapse in";
    //         if (daysRef.current.className === "navbar-collapse in") {
    //             daysRef.current.className = "collapse navbar-collapse";
    //         }
    //     }
    // }


    // hola();
    return (
        <>

            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* <meta name="keywords" content="">
            <meta name="description" content=""> */}

                <title>StopBarberShop</title>
            </Head>
            <Scripts />


            <header className="header">

                <nav className="navbar navbar-default navbar-fixed-top">

                    <div className="container">

                        <div className="navbar-header">
                            <button data-target="#navbar-collapse-02" data-toggle="collapse" className="navbar-toggle" type="button">

                                {/* <button onClick={hola} data-target="#navbar-collapse-02" data-toggle="collapse" className="navbar-toggle" type="button"> */}
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link href="/">
                                <a className="navbar-brand brand scrool">StopBarberShop</a>
                            </Link>
                        </div>

                        <div id="navbar-collapse-02" ref={daysRef} className="collapse navbar-collapse">

                            <ul className="nav navbar-nav navbar-right">

                                <li><a href="#home_wrapper">Inicio</a></li>
                                <li><a href="#services">Servicios</a></li>
                                {/* <li><a href="#pricing">Pricing</a></li> */}
                                <li><a href="#gallery">Galeria</a></li>
                                <li><a href="#offers">Ofertas</a></li>
                                <li><a href="#team">Equipo</a></li>
                                <li><a href="#about">Nosotros</a></li>
                                <li><a href="#contact">Contacto</a></li>

                                {/* <li><a href="#" className="purchase scrool">PURCHASE NOW</a></li> */}
                            </ul>

                        </div>

                    </div>

                </nav>

            </header>

            {/* SECTION BIENVENIDA */}

            <section id="home_wrapper" className="home-wrapper">

                <div className="gradient_overlay"></div>

                <div className="container home-wrappe-inside">

                    <div className="row">

                        <div className="col-md-12 text-center">1

                            <h1 className="home-title">Bienvenido a StopBarberShop</h1>

                            <p className="home-subtitle-principal">
                                El diseño y el estilo siempre deben trabajar para que te veas bien y te sientas bien sin <br />
                                mucho esfuerzo para que puedas dedicarte a las cosas que realmente te importan.
                            </p>

                            {/* <a href="#services" className="btn btn-lg btn-brown scrool">Make Appointment</a> */}

                            <a href="#team" className="btn btn-lg btn-margin btn-white scrool">Conoce a nuestros barberos</a>

                        </div>

                    </div>

                </div>

            </section>

            {/* SECTION */}

            <div className="section-grey sponsors-padding" style={{ display: 'none' }}>

                <div className="container">

                    <div className="row text-center">

                        <div className="col-sm-12 sponsors">

                            <Image width={150} height={30} src="/img/partner2.png" className="sponsor" alt="image" />
                            <Image width={150} height={30} src="/img/partner1.png" className="sponsor" alt="image" />
                            <Image width={150} height={30} src="/img/partner3.png" className="sponsor" alt="image" />
                            <Image width={150} height={30} src="/img/partner5.png" className="sponsor" alt="image" />
                            <Image width={150} height={30} src="/img/partner4.png" className="sponsor" alt="image" />

                        </div>

                    </div>

                </div>

            </div>


            {/* SECTION SERVICIOS */}


            <section id="services">

                <div className="section-white small-padding-bottom">

                    <div className="container">

                        <div className="row margin-bottom-20">

                            <div className="col-md-12 text-center">
                                <h2 className="section-title">Servicios</h2>

                                <p className="section-subtitle">Mostramos algunas de nuestras habilidades en lo que es el cuidado del cabello y barba.</p>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-sm-4 features-item">

                                <div className="image-wrapper">
                                    <Image width={450} height={300} src="/img/barba2.jpeg" alt="Trimming Beard" className="width-100" />
                                </div>

                                <h3 className="brown">Acodicionado de barba</h3>

                                <p>

                                    Tener una gran barba es algo de lo que estar orgulloso. Pero el viaje no termina una vez que se haya alcanzado la longitud o el estilo deseado. Después del crecimiento viene el mantenimiento, y mantener tu barba con un aspecto elegante y con estilo no es tarea fácil.
                                </p>

                            </div>

                            <div className="col-sm-4 features-item">

                                <div className="image-wrapper">
                                    <Image width={450} height={300} src="/img/tijera1.jpg" alt="Trimming Beard" className="width-100" />
                                </div>

                                <h3 className="brown">Cortes con tijeras</h3>

                                <p>
                                    Las tijeras cortan el cabello sin ángulos, lo que resulta en un corte uniforme a lo largo del largo del cabello y en cada capa. El corte es limpio, y el pelo va a crecer así tal cual queda cortado, y por tanto se cumple la máxima de que a más veces que cortes el pelo, más se fortalecerá.
                                </p>

                            </div>

                            <div className="col-sm-4 features-item">

                                <div className="image-wrapper">
                                    <Image width={450} height={300} src="/img/tijera4.jpeg" alt="Trimming Beard" className="width-100" />
                                </div>

                                <h3 className="brown">Cortes modernos</h3>

                                <p>
                                    A pesar de que nuevos cortes de pelo para hombres siguen apareciendo cada temporada, no es fácil elegir uno que se adapte a la forma de nuestra cara, y que además encaje con nuestra personalidad.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* SECTION */}


            <div className="fun-facts-wrapper" style={{ display: 'none' }}>

                <div className="container">

                    <div className="row">

                        <div className="col-sm-3 fun-facts-box text-center wow fadeIn" data-wow-delay="0.15s">

                            <i className="fa fa-heart"></i>

                            <p className="fun-facts-title"><span className="facts-numbers">1050+</span><br />Happy Clients</p>

                        </div>

                        <div className="col-sm-3 fun-facts-box text-center wow fadeIn" data-wow-delay="0.3s">

                            <i className="icon fa fa-trophy"></i>

                            <p className="fun-facts-title"><span className="facts-numbers">217k</span><br />Awards Winning</p>

                        </div>

                        <div className="col-sm-3 fun-facts-box text-center wow fadeIn" data-wow-delay="0.45s">

                            <i className="icon  fa fa-coffee"></i>

                            <p className="fun-facts-title"><span className="facts-numbers">1210</span><br />Qualified Stylists</p>

                        </div>

                        <div className="col-sm-3 fun-facts-box text-center wow fadeIn" data-wow-delay="0.6s">

                            <i className="icon fa fa-thumbs-up"></i>

                            <p className="fun-facts-title"><span className="facts-numbers">2137</span><br />Hair Styles</p>

                        </div>

                    </div>

                </div>

            </div>


            {/* SECTION */}

            <section id="pricing" style={{ display: 'none' }}>

                <div className="image-section-offer" >

                    <div className="image-overlay"></div>

                    <div className="container image-section-inside">

                        <div className="row padding-top-40 padding-bottom-40">

                            <div className="col-md-6 margin-top-110 margin-bottom-140">

                                <h3 className="title">SUMMER SPECIAL DISCOUNT</h3>

                                <h2 className="second-title">Get <span className="brown">25% Off</span> With Our New Plan</h2>

                                <p className="home-subtitle">
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum loremis fugitum sed quia magni dolores eos qui ratione sequi nescint neque poris rationesit sequi enim ipsam quia magni.
                                </p>

                                <a href="#services" className="btn btn-lg btn-brown scrool">Join Today</a>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="image-section-pricing">

                    <div className="container image-section-inside">

                        <div className="row padding-top-40 padding-bottom-40">

                            <div className="col-xs-12 col-md-5 pricing-box margin-top-110 margin-bottom-110 wow fadeInRight" data-wow-delay="0.1s">
                                <Image width={70} height={64} src="/img/scissors1.png" alt="scissors-image" className="pricing-image" />

                                <div className="price-inner-box">

                                    <div className="col-xs-6">

                                        <h4 className="price-title">Dry HairCut</h4>

                                    </div>

                                    <div className="col-xs-6">

                                        <span className="price-nb brown">$25</span>

                                    </div>

                                </div>

                                <div className="price-inner-box">

                                    <div className="col-xs-6">

                                        <h4 className="price-title">Mustache Trim</h4>

                                    </div>

                                    <div className="col-xs-6">

                                        <span className="price-nb brown">$40</span>

                                    </div>
                                </div>

                                <div className="price-inner-box">

                                    <div className="col-xs-6">

                                        <h4 className="price-title">Beard Brushing</h4>

                                    </div>

                                    <div className="col-xs-6">

                                        <span className="price-nb brown">$50</span>

                                    </div>
                                </div>

                                <div className="price-inner-box">

                                    <div className="col-xs-6">

                                        <h4 className="price-title">Beard Trimming</h4>

                                    </div>

                                    <div className="col-xs-6">

                                        <span className="price-nb brown">$15</span>

                                    </div>
                                </div>

                                <div className="price-inner-box last">

                                    <div className="col-xs-6 ">

                                        <h4 className="price-title">Hair Styling</h4>

                                    </div>

                                    <div className="col-xs-6">

                                        <span className="price-nb brown">$30</span>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* SECTION GALERIA */}


            <section className="section-white" id="gallery">

                <div className="container">

                    <div className="row margin-bottom-50">

                        <div className="col-md-12 text-center">
                            <h2 className="section-title">Galeria</h2>

                            <p className="section-subtitle">Explorar el resultado de alguno de nuestros clientes.
                                {/* <br /> */}
                                {/* loremis feugiat ligula aliquam ets vitae dictimus etis netsum. */}
                            </p>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.15s">

                            <div className="popup-gallery first-gallery portfolio-pic">
                                <a className="popup2" href="/img/galeria4.jpg"><Image width={450} height={300} src="/img/galeria4.jpg" className="width-100" alt="pic" /><span className="eye-wrapper"><i className="fa fa-photo eye-icon" style={{ fontSize: '38px' }}></i></span></a>
                            </div>

                        </div>

                        <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.30s">

                            <div className="popup-gallery first-gallery portfolio-pic">
                                <a className="popup2" href="/img/galeria13.jpg"><Image width={450} height={300} src="/img/galeria13.jpg" className="width-100" alt="pic" /><span className="eye-wrapper"><i className="fa fa-photo eye-icon" style={{ fontSize: '38px' }}></i></span></a>
                            </div>

                        </div>

                        <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.45s">

                            <div className="popup-gallery first-gallery portfolio-pic">
                                <a className="popup2" href="/img/galeria11.jpg"><Image width={450} height={300} src="/img/galeria11.jpg" className="width-100" alt="pic" /><span className="eye-wrapper"><i className="fa fa-photo eye-icon" style={{ fontSize: '38px' }}></i></span></a>
                            </div>

                        </div>

                        <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.60s">

                            <div className="popup-gallery first-gallery portfolio-pic">
                                <a className="popup2" href="/img/galeria10.jpg"><Image width={450} height={300} src="/img/galeria10.jpg" className="width-100" alt="pic" /><span className="eye-wrapper"><i className="fa fa-photo eye-icon" style={{ fontSize: '38px' }}></i></span></a>
                            </div>

                        </div>

                        <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.75s">

                            <div className="popup-gallery first-gallery portfolio-pic">
                                <a className="popup2" href="/img/galeria14.jpg"><Image width={450} height={300} src="/img/galeria14.jpg" className="width-100" alt="pic" /><span className="eye-wrapper"><i className="fa fa-photo eye-icon" style={{ fontSize: '38px' }}></i></span></a>

                            </div>

                        </div>

                        <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="1s">


                            <div className="popup-gallery first-gallery portfolio-pic">
                                <a className="popup2" href="/img/galeria5.jpg"><Image width={450} height={300} src="/img/galeria5.jpg" className="width-100" alt="pic" /><span className="eye-wrapper"><i className="fa fa-photo eye-icon" style={{ fontSize: '38px' }}></i></span></a>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* SECTION */}




            <section className="image-section-offers" id="offers" >

                <div className="image-overlay"></div>

                <div className="container image-section-inside padding-top-90 padding-bottom-80">

                    <div className="row">

                        <div className="col-md-12 text-center margin-bottom-40">
                            <h2 className="section-title white">Descubre Nuestras Ofertas Especiales</h2>

                            <p className="section-subtitle grey-light">Existen varios tipos de cortes, tratos del pelo, asi mismo cambios de precios
                                <br />para ninos, barbas, largo del pelo, asi que te mostramos algunas ofertas.</p>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-sm-6 col-md-6 margin-bottom-30">

                            <div className="box-offer image-offer1">

                                <div className="special-text">

                                    <h4 className="offer-title">Acodicionado de barba</h4>

                                    <p className="offer-text">Recorte de barba. <br />
                                        Cuidado con aceites. <br />
                                        Masajes facial, con crema y alcohol.
                                    </p>

                                    <a href="#" className="btn-offer btn brown">Desde 300 <span className="markup-offer"></span></a>

                                </div>

                            </div>

                        </div>

                        <div className="col-sm-6 col-md-6 margin-bottom-30">

                            <div className="box-offer image-offer2">

                                <div className="special-text">

                                    <h4 className="offer-title">Corte con tijeras</h4>

                                    <p className="offer-text">Corte completo con tijeras.<br />
                                        Medio corte. Con maquina y tijeras.<br />
                                        Recortes con tijeras.</p>

                                    <a href="#" className="btn-offer btn brown">Desde 400 <span className="markup-offer"></span></a>

                                </div>

                            </div>

                        </div>

                        <div className="col-sm-6 col-md-6 margin-bottom-30">

                            <div className="box-offer image-offer3">

                                <div className="special-text">

                                    <h4 className="offer-title">Cortes para ninos</h4>

                                    <p className="offer-text">Ninos desde los 4 años hasta los 12. <br />
                                        Silla especial para ninos. <br />
                                        {/* ipsam quias net magni. */}
                                    </p>

                                    <a href="#" className="btn-offer btn brown">Desde 250 <span className="markup-offer"></span></a>

                                </div>

                            </div>

                        </div>

                        <div className="col-sm-6 col-md-6 margin-bottom-30">

                            <div className="box-offer image-offer4">

                                <div className="special-text">

                                    <h4 className="offer-title">Afeitado con cuchilla</h4>

                                    <p className="offer-text">Afeitado completo con cuchilla.<br />
                                        Recortes con cuchilla. <br />
                                        {/* ipsam quias net magni. */}
                                    </p>

                                    <a href="#" className="btn-offer btn brown">Desde 350 <span className="markup-offer"></span></a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* SECTION     EQUIPO */}

            <section id="team">

                <div className="section-white small-padding-bottom">

                    <div className="container">

                        <div className="row margin-bottom-30">

                            <div className="col-md-12 text-center">
                                <h2 className="section-title">Barberos</h2>

                                <p className="section-subtitle">Equipo de barberos especializados en el area del cuidado y estilo del pelo masculino,<br />
                                    con mas de 20 años de experiencias juntos, brindando un excelente servicio.</p>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-sm-4 team-wrapper" style={{ display: 'none' }}>

                                <div className="image-wrapper">
                                    <Image width={450} height={300} src="http://placehold.co/450x300" alt="Trimming Beard" className="width-100" />
                                </div>

                                <h4 className="team-title">JOE MCDONALD</h4>
                                <h5 className="team-subtitle">HAIR STYLIST</h5>

                                <p>Nemo enim ipsam voluptatem quis netis voluptased aspernatur netsum
                                    loremis fugit seditumis quia magni ets  rationes.</p>

                                <div className="team-icon">

                                    <a href="#">
                                        <i className="icon fa fa-twitter"></i>
                                    </a>

                                    <a href="#">
                                        <i className="icon fa fa-facebook"></i>
                                    </a>

                                    <a href="#">
                                        <i className="icon fa fa-pinterest"></i>
                                    </a>

                                    <a href="#">
                                        <i className="icon fa fa-youtube"></i>
                                    </a>

                                </div>

                            </div>

                            <div className="col-sm-6 team-wrapper">

                                <div className="image-wrapper">
                                    <Image width={450} height={300} src="/img/barbero1.jpg" alt="Trimming Beard" className="width-100" />
                                </div>

                                <h4 className="team-title">Michael (Hiciano)</h4>
                                <h5 className="team-subtitle">BARBERO</h5>

                                <p>Barbero especialista en el cuidado de la barba, con mas de 15 años de experiencia en el area.</p>
                                <p>Telefono Movil: <br />
                                    <a href="tel:+18296650217">829-665-0217</a>
                                </p>

                                <div className="team-icon">

                                    <a href="#">
                                        <i className="icon fa fa-twitter"></i>
                                    </a>

                                    <a href="#">
                                        <i className="icon fa fa-facebook"></i>
                                    </a>

                                    <a href="#">
                                        <i className="icon fa fa-pinterest"></i>
                                    </a>

                                    <a href="#">
                                        <i className="icon fa fa-youtube"></i>
                                    </a>

                                </div>

                            </div>

                            <div className="col-sm-6 team-wrapper">

                                <div className="image-wrapper">
                                    <Image width={450} height={300} src="/img/barbero2.jpg" alt="Trimming Beard" className="width-100" />
                                </div>

                                <h4 className="team-title">Adonis (Hiciano)</h4>
                                <h5 className="team-subtitle">BARBERO</h5>

                                <p>Barbero especialista en el cuidado del pelo, con mas de 15 años de experiencia en el area.</p>
                                <p>Telefono Movil: <br />
                                    <a href="tel:+18295369586">829-536-9586</a>
                                </p>

                                <div className="team-icon">

                                    <a href="#">
                                        <i className="icon fa fa-twitter"></i>
                                    </a>

                                    <a href="#">
                                        <i className="icon fa fa-facebook"></i>
                                    </a>

                                    <a href="#">
                                        <i className="icon fa fa-pinterest"></i>
                                    </a>

                                    <a href="#">
                                        <i className="icon fa fa-youtube"></i>
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>



            {/* SECTION */}


            <section className="image-section-program">

                <div className="image-overlay"></div>

                <div className="container image-section-inside padding-top-90 padding-bottom-90">

                    <div className="row">

                        <div className="col-md-12 text-center margin-bottom-30">
                            <h2 className="section-title white">Horario</h2>

                            <p className="section-subtitle grey-light">Horario flexible para todos, conoce nuestros dias de servicio,
                                <br />para que puedas agendar y aprovechar tu tiempo.</p>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-sm-4 col-md-2">

                            <div className="program-box">

                                <h3 className="program-day">Lunes</h3>
                                <span className="program-hour">CERRADO</span>

                            </div>

                        </div>

                        <div className="col-sm-4 col-md-2">

                            <div className="program-box">

                                <h3 className="program-day">Martes</h3>
                                <span className="program-hour">8:00 A.M - 8:00 P.M</span>

                            </div>

                        </div>

                        <div className="col-sm-4 col-md-2">

                            <div className="program-box">

                                <h3 className="program-day">Miercoles</h3>
                                <span className="program-hour">8:00 A.M - 8:00 P.M</span>

                            </div>

                        </div>

                        <div className="col-sm-4 col-md-2">

                            <div className="program-box">

                                <h3 className="program-day">Jueves</h3>
                                <span className="program-hour">8:00 A.M - 8:00 P.M</span>

                            </div>

                        </div>

                        <div className="col-sm-4 col-md-2">
                            <div className="program-box">

                                <h3 className="program-day">Viernes</h3>
                                <span className="program-hour">8:00 A.M - 8:00 P.M</span>

                            </div>

                        </div>
                        <div className="col-sm-4 col-md-2">
                            <div className="program-box">

                                <h3 className="program-day">Fin de Semana</h3>
                                <span className="program-hour">8:00 A.M - 8:00 P.M</span>

                            </div>

                        </div>

                        {/* <div className="col-sm-4 col-md-2">

                            <div className="program-box last">

                                <h3 className="program-day">Domingo</h3>
                                <span className="program-hour">8:00 A.M - 8:00 P.M</span>

                            </div>

                        </div> */}

                    </div>

                </div>

            </section>



            {/* SECTION BREVE DESCRIPCION */}


            <section id="about" style={{ display: 'none' }}>

                <div className="section-white">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-6 wow fadeInLeft" data-wow-delay="0.1s">

                                <Image width={800} height={650} src="http://placehold.co/800x650" className="about-image" alt="aboutus" />

                            </div>

                            <div className="col-md-6 margin-bottom-10 wow fadeInRight" data-wow-delay="0.1s">

                                <h3 className="about-title">Small moments of inspiration can boost your motivation for the whole day.</h3>

                                <div className="about-box">

                                    <span className="brown about-icon"><i className="fa fa-heart"></i></span>

                                    <div className="about-text-box">
                                        <h3 className="about-text">Passion For Beauty</h3>
                                        <p >Nemo enim ipsam voluptatem quia voluptas aspernatur netsum loremis fugitum sed quia magni  ratione.</p>
                                    </div>

                                </div>

                                <div className="about-box">

                                    <span className="brown about-icon"><i className="fa fa-thumbs-up"></i></span>

                                    <div className="about-text-box">
                                        <h3 className="about-text">Passion For Beauty</h3>
                                        <p >Nemo enim ipsam voluptatem quia voluptas aspernatur netsum loremis fugitum sed quia magni  ratione.</p>
                                    </div>

                                </div>

                                <div className="about-box">

                                    <span className="brown about-icon"><i className="fa fa-trophy"></i></span>

                                    <div className="about-text-box">
                                        <h3 className="about-text">Passion For Beauty</h3>
                                        <p >Nemo enim ipsam voluptatem quia voluptas aspernatur netsum loremis fugitum sed quia magni  ratione.</p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="section-testimonials section-grey" style={{ display: 'none' }}>

                    <div className="container testimonials-wrapper">

                        <div className="row">

                            <div className="col-md-12">

                                <p className="testimonials-text">The attention of a traveller, should be particularly turned, in the first place, to the various works of Nature, to mark the distinctions of the climates he may explore, and to offer such useful observations on the different productions as may occur.</p>

                                <div className="testimonials-info">

                                    <Image width={100} height={100} src="http://placehold.co/100x100" className="author-pic" alt="John Doe" />

                                    <p className="author-name">Alex Superman - VIP Client</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* SECTION FORMULARIO DE CONACTO */}



            <section className="image-section-contact" id="contact" style={{ display: 'none' }}>

                <div className="image-overlay"></div>

                <div className="container image-section-inside padding-top-90 padding-bottom-100">

                    <div className="row margin-bottom-50">

                        <div className="col-md-10 col-md-offset-1 text-center">

                            <h2 className="section-title white">Get In Touch</h2>

                            <p className="section-subtitle white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered<br /> alteration, by injected humour, or new randomised words which don’t look believable.</p>
                        </div>

                    </div>

                    <div className="row">

                        <p className="contact_success_box" style={{ display: 'none' }}>We received your message and you ll hear from us soon. Thank You!</p>

                        <form id="contact-form" className="contact" action="php/contact.php" method="post">

                            <div className="col-md-6">
                                <input className="contact-input white-input" required="" name="contact_names" placeholder="Full Name*" type="text" />
                                <input className="contact-input white-input" required="" name="contact_subject" placeholder="Subject*" type="text" />
                            </div>

                            <div className="col-md-6">
                                <input className="contact-input white-input" required="" name="contact_email" placeholder="Email Adress*" type="email" />
                                <input className="contact-input white-input" required="" name="contact_phone" placeholder="Phone Number*" type="text" />
                            </div>

                            <div className="col-md-12">
                                <textarea className="contact-commnent white-input" rows="2" cols="20" name="contact_message" placeholder="Your Message..."></textarea>
                            </div>

                            <div className="col-md-12">
                                <input value="Send Message" id="submit-button" className="contact-submit" type="submit" />
                            </div>

                        </form>

                    </div>

                </div>

            </section>


            {/* SECTION MAPA */}

            <iframe scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.449266354614!2d-70.61581249999999!3d19.4361875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ed100658b17abf2!2sStopBarberShop!5e0!3m2!1ses!2sdo!4v1656197198066!5m2!1ses!2sdo" width="100%" height="450" frameBorder="0" style={{ border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


            {/* SECTION */}


            <div className="footer">

                <div className="container padding-top-40 padding-bottom-40">

                    <div className="row">

                        <div className="col-md-12 text-center">

                            <div className="copyright">
                                <p>Copyright © 2022. Disenado por <b>Bogdan Preda</b>, Desarrollado por <b>Isaac Lopez</b> </p>

                            </div>

                            {/* <ul className="footer_social">
                                <li>
                                    <a href="#">
                                        <i className="icon fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon fa fa-pinterest"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon fa fa-skype"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon fa fa-dribbble"></i>
                                    </a>
                                </li>
                            </ul> */}

                        </div>

                    </div>

                </div>

            </div>




        </>
    )
}

