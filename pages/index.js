import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image'


export default function Peluqueria(){
    
    
    return(
        <>

        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            {/* <meta name="keywords" content="">
            <meta name="description" content=""> */}

            <title>Barber - Startup Landing Page Template</title>
    

        </Head>


        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js" strategy="beforeInteractive"/>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossOrigin="anonymous" strategy="beforeInteractive"/>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js" strategy="beforeInteractive"/>
            
            <Script
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
$(window).load(function(){

	"use strict";
 
	
	/* ========================================================== */
	/*   Popup-Gallery                                            */
	/* ========================================================== */
	$('.popup-gallery').find('a.popup1').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
	
	$('.popup-gallery').find('a.popup2').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
 
	$('.popup-gallery').find('a.popup3').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
 
	$('.popup-gallery').find('a.popup4').magnificPopup({
		type: 'iframe',
		gallery: {
		  enabled:false
		}
	});  
 
 
	/* ========================================================== */
	/*   Navigation Background Color                              */
	/* ========================================================== */
	
	
 

 	/* ========================================================== */
	/*   Hide Responsive Navigation On-Click                      */
	/* ========================================================== */
	
	  $(".navbar-nav li a").on('click', function(event) {
	    $(".navbar-collapse").collapse('hide');
	  });

	
	/* ========================================================== */
	/*   Navigation Color                                         */
	/* ========================================================== */
	


	/* ========================================================== */
	/*   SmoothScroll                                             */
	/* ========================================================== */
	
	$(".nav li a, a.scrool").on("click", function() {
		
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		
		$('html,body').animate({scrollTop:target_top -76}, 1000);
			return false;
		
	});


	/* ========================================================== */
	/*   Newsletter                                               */
	/* ========================================================== */
	
	$('.newsletter_box .newsletter_form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'email':$('input[name="nf_email"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.newsletter_success_box').show();
					});
				});
				e.preventDefault();
			}
		});
	});	
	

	/* ========================================================== */
	/*   Register                                                 */
	/* ========================================================== */
	
	$('#register-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="register_names"]').val(),
					'phone':$('input[name="register_phone"]').val(),
					'email':$('input[name="register_email"]').val(),
					'ticket':$('select[name="register_ticket"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.register_success_box').show();
					});
				});
				e.preventDefault();
			}
		});
	})
	
	
	/* ========================================================== */
	/*   Contact                                                  */
	/* ========================================================== */
	$('#contact-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="contact_names"]').val(),
					'subject':$('input[name="contact_subject"]').val(),
					'email':$('input[name="contact_email"]').val(),
					'phone':$('input[name="contact_phone"]').val(),
					'message':$('textarea[name="contact_message"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p').show();
					});
				});
				e.preventDefault();
			}
		});
	})

	
});

  `,
  }}
/>



                <header className="header">

                    <nav className="navbar navbar-default navbar-fixed-top">
                        
                        <div className="container">
                    
                            <div className="navbar-header">
                                <button data-target="#navbar-collapse-02" data-toggle="collapse" className="navbar-toggle" type="button">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                                                
                                <a href="index.html" className="navbar-brand brand scrool">Barber</a>
                            </div>
                                    
                            <div id="navbar-collapse-02" className="collapse navbar-collapse">

                                <ul className="nav navbar-nav navbar-right">

                                    <li><a href="#home_wrapper">Home</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#pricing">Pricing</a></li>
                                    <li><a href="#gallery">Gallery</a></li>
                                    <li><a href="#offers">Offers</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                                            
                                    <li><a href="#" className="purchase scrool">PURCHASE NOW</a></li>
                                </ul>

                            </div>
                                                
                        </div>
                        
                    </nav>
                    
                </header>

                {/* SECTION */}

                <section id="home_wrapper" className="home-wrapper">

                    <div className="gradient_overlay"></div>
                    
                    <div className="container home-wrappe-inside"> 
                        
                        <div className="row">
                            
                            <div className="col-md-12 text-center">
                                
                                <h1 className="home-title">Welcome To The Barber Shop</h1>
                                
                                <p className="home-subtitle-principal">
                                Design and style should always work toward making you look good and feel good without<br/> a lot of efforts so you can get on with the things that truly matters to you.
                                </p>
                                
                                <a href="#services" className="btn btn-lg btn-brown scrool">Make Appointment</a>
                                
                                <a href="#newsletter" className="btn btn-lg btn-margin btn-white scrool">Meet Our Stylists</a>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </section>

                {/* SECTION */}

                    <div className="section-grey sponsors-padding">
                        
                        <div className="container">

                            <div className="row text-center">
                            
                                <div className="col-sm-12 sponsors">

                                    <Image width={150} height={30} src="/img/partner2.png" className="sponsor" alt="image"/>
                                    <Image width={150} height={30} src="/img/partner1.png" className="sponsor" alt="image"/>
                                    <Image width={150} height={30} src="/img/partner3.png" className="sponsor" alt="image"/>
                                    <Image width={150} height={30} src="/img/partner5.png" className="sponsor" alt="image"/>
                                    <Image width={150} height={30} src="/img/partner4.png" className="sponsor" alt="image"/>

                                </div>
                                
                            </div>
                            
                        </div>
                    
                    </div> 


                    {/* SECTION */}


                    <section id="services">
                    
                    <div className="section-white small-padding-bottom"> 
                        
                        <div className="container"> 
                    
                                <div className="row margin-bottom-20">
                                
                                    <div className="col-md-12 text-center">
                                        <h2 className="section-title">Amazing Services</h2>
                                                    
                                        <p className="section-subtitle">There are many variations of passages of Lorem Ipsum available, but the majority<br/>have suffered alteration, by injected humour, or new randomised words.</p>
                                    </div>
                                
                                </div>
                                
                                <div className="row">

                                    <div className="col-sm-4 features-item">
                                
                                        <div className="image-wrapper">
                                        <Image width={450} height={300} src="http://placehold.co/450x300" alt="Trimming Beard" className="width-100"/>
                                        </div>
                                    
                                        <h3 className="brown">Trimming Beard</h3>
                                        
                                        <p>
                                            Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed feugiat ligula aliquam ets vitae dictis netsum.
                                        </p>
                                    
                                    </div>
                                    
                                    <div className="col-sm-4 features-item">
                                
                                        <div className="image-wrapper">
                                        <Image width={450} height={300} src="http://placehold.co/450x300" alt="Trimming Beard" className="width-100"/>
                                        </div>
                                    
                                        <h3 className="brown">Hair Styling</h3>
                                        
                                        <p>
                                            Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed feugiat ligula aliquam ets vitae dictis netsum.
                                        </p>
                                    
                                    </div>
                                    
                                    <div className="col-sm-4 features-item">
                                
                                        <div className="image-wrapper">
                                        <Image width={450} height={300} src="http://placehold.co/450x300" alt="Trimming Beard" className="width-100"/>
                                        </div>
                                    
                                        <h3 className="brown">Dry HairCut</h3>
                                        
                                        <p>
                                            Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed feugiat ligula aliquam ets vitae dictis netsum.
                                        </p>
                                    
                                    </div>
                                    
                                </div>
                                
                        </div>
                                
                    </div>
                    
                    </section>


                    {/* SECTION */}


                    <div className="fun-facts-wrapper">
                                        
                        <div className="container">

                            <div className="row">
                            
                                <div className="col-sm-3 fun-facts-box text-center wow fadeIn" data-wow-delay="0.15s">
                                    
                                    <i className="fa fa-heart"></i>
                                    
                                    <p className="fun-facts-title"><span className="facts-numbers">1050+</span><br/>Happy Clients</p>
                                    
                                </div>

                                <div className="col-sm-3 fun-facts-box text-center wow fadeIn" data-wow-delay="0.3s">
                                    
                                    <i className="icon fa fa-trophy"></i>
                                                            
                                    <p className="fun-facts-title"><span className="facts-numbers">217k</span><br/>Awards Winning</p>
                                        
                                </div>

                                <div className="col-sm-3 fun-facts-box text-center wow fadeIn" data-wow-delay="0.45s">
                                    
                                    <i className="icon  fa fa-coffee"></i>
                                                            
                                    <p className="fun-facts-title"><span className="facts-numbers">1210</span><br/>Qualified Stylists</p>
                                        
                                </div>

                                <div className="col-sm-3 fun-facts-box text-center wow fadeIn" data-wow-delay="0.6s">
                                    
                                    <i className="icon fa fa-thumbs-up"></i>
                                                            
                                    <p className="fun-facts-title"><span className="facts-numbers">2137</span><br/>Hair Styles</p>
                                        
                                </div>
                                        
                            </div>
                            
                        </div>
                        
                    </div>


                    {/* SECTION */}

                    <section id="pricing">

                        <div className="image-section-offer">
                        
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
                                        <Image width={70} height={64}src="/img/scissors1.png" alt="scissors-image" className="pricing-image"/>

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


                    {/* SECTION */}


                    <section className="section-white" id="gallery">
                        
                        <div className="container">

                            <div className="row margin-bottom-50">
                            
                                <div className="col-md-12 text-center">
                                    <h2 className="section-title">Gallery Overview</h2>
                                        
                                    <p className="section-subtitle">Curabitur quam etsum lacus etsumis nulatis etsumised vitae etimuned nisle varius<br/> 
                                    loremis feugiat ligula aliquam ets vitae dictimus etis netsum.</p>
                                </div>
                            
                            </div>
                        
                            <div className="row">
                            
                                <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.15s">
                                    
                                    <div className="popup-gallery first-gallery portfolio-pic">
                                        <a className="popup2" href="http://placehold.co/450x300"><Image width={450} height={300} src="http://placehold.co/450x300" className="width-100" alt="pic"/><span className="eye-wrapper"><i className="fa fa-photo eye-icon" style={{fontSize: '38px'}}></i></span></a>
                                    </div>
                                    
                                </div>
                            
                                <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.30s">
                                    
                                    <div className="popup-gallery first-gallery portfolio-pic">
                                        <a className="popup2" href="http://placehold.co/450x300"><Image width={450} height={300} src="http://placehold.co/450x300" className="width-100" alt="pic"/><span className="eye-wrapper"><i className="fa fa-photo eye-icon" style={{fontSize: '38px'}}></i></span></a>
                                    </div>
                                    
                                </div>
                            
                                <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.45s">
                                    
                                    <div className="popup-gallery first-gallery portfolio-pic">
                                        <a className="popup2" href="http://placehold.co/450x300"><Image width={450} height={300} src="http://placehold.co/450x300" className="width-100" alt="pic"/><span className="eye-wrapper"><i className="fa fa-photo eye-icon" style={{fontSize: '38px'}}></i></span></a>
                                    </div>
                                    
                                </div>
                            
                                <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.60s">
                                    
                                    <div className="popup-gallery first-gallery portfolio-pic">
                                        <a className="popup2" href="http://placehold.co/450x300"><Image width={450} height={300} src="http://placehold.co/450x300" className="width-100" alt="pic"/><span className="eye-wrapper"><i className="fa fa-photo eye-icon" style={{fontSize: '38px'}}></i></span></a>
                                    </div>
                                    
                                </div>
                            
                                <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.75s">
                                    
                                    <div className="popup-gallery first-gallery portfolio-pic">
                                        <a className="popup2" href="http://placehold.co/450x300"><Image width={450} height={300} src="http://placehold.co/450x300" className="width-100" alt="pic"/><span className="eye-wrapper"><i className="fa fa-photo eye-icon" style={{fontSize: '38px'}}></i></span></a>

                                    </div>
                                    
                                </div>
                            
                                <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="1s">

                                    
                                    <div className="popup-gallery first-gallery portfolio-pic">
                                        <a className="popup2" href="http://placehold.co/450x300"><Image width={450} height={300} src="http://placehold.co/450x300" className="width-100" alt="pic"/><span className="eye-wrapper"><i className="fa fa-photo eye-icon" style={{fontSize: '38px'}}></i></span></a>
                                    </div>
                                    
                                </div>
                            
                            </div>
                        
                        </div>
                    
                    </section>

                    
                    {/* SECTION */}




                    <section className="image-section-offers" id="offers">

                        <div className="image-overlay"></div>

                            <div className="container image-section-inside padding-top-90 padding-bottom-80">

                                <div className="row">

                                    <div className="col-md-12 text-center margin-bottom-40">
                                        <h2 className="section-title white">Discover Our Special Offers</h2>
                                        
                                        <p className="section-subtitle grey-light">There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
                                            <br/>alteration, by injected humour, or new randomised words.</p>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-sm-6 col-md-6 margin-bottom-30">

                                        <div className="box-offer image-offer1"> 

                                        <div className="special-text">

                                                <h4 className="offer-title">Dry HairCut</h4>

                                                <p className="offer-text">Nemo enid netsum etsad ipsam <br/>
                                                voluptatem quia netsum voluptas <br/>
                                                ipsam quias net magni.</p>

                                                <a href="#" className="btn-offer btn brown">From $29 <span className="markup-offer"></span></a> 

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-sm-6 col-md-6 margin-bottom-30">

                                        <div className="box-offer image-offer2"> 

                                        <div className="special-text">

                                                <h4 className="offer-title">Hair Styling</h4>

                                                <p className="offer-text">Nemo enid netsum etsad ipsam <br/>
                                                voluptatem quia netsum voluptas <br/>
                                                ipsam quias net magni.</p>

                                                <a href="#" className="btn-offer btn brown">From $29 <span className="markup-offer"></span></a> 

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-sm-6 col-md-6 margin-bottom-30">

                                        <div className="box-offer image-offer3"> 

                                        <div className="special-text">

                                                <h4 className="offer-title">Beard Brushing</h4>

                                                <p className="offer-text">Nemo enid netsum etsad ipsam <br/>
                                                voluptatem quia netsum voluptas <br/>
                                                ipsam quias net magni.</p>

                                                <a href="#" className="btn-offer btn brown">From $29 <span className="markup-offer"></span></a> 

                                            </div>

                                        </div>

                                    </div>
                                        
                                    <div className="col-sm-6 col-md-6 margin-bottom-30">

                                        <div className="box-offer image-offer4"> 

                                        <div className="special-text">

                                                <h4 className="offer-title">Mustache Trim</h4>

                                                <p className="offer-text">Nemo enid netsum etsad ipsam <br/>
                                                voluptatem quia netsum voluptas <br/>
                                                ipsam quias net magni.</p>

                                                <a href="#" className="btn-offer btn brown">From $29 <span className="markup-offer"></span></a> 

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                    </section>


                    {/* SECTION */}

                    <section id="team">
                    
                    <div className="section-white small-padding-bottom"> 
                        
                        <div className="container"> 
                    
                                <div className="row margin-bottom-30">
                                
                                    <div className="col-md-12 text-center">
                                        <h2 className="section-title">Our Stylists</h2>
                                                    
                                        <p className="section-subtitle">Curabitur quam etsum lacus etsumis nulatis etsumised vitae etimuned nisle varius<br/> 
                                        loremis feugiat ligula aliquam ets vitae dictimus etis netsum.</p>
                                    </div>

                                </div>
                                
                                <div className="row">

                                    <div className="col-sm-4 team-wrapper">
                                
                                        <div className="image-wrapper">
                                        <Image width={450} height={300}src="http://placehold.co/450x300" alt="Trimming Beard" className="width-100"/>
                                        </div>
                                    
                                        <h4 className="team-title">JOE MC'DONALD</h4>
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

                                    <div className="col-sm-4 team-wrapper">
                                
                                        <div className="image-wrapper">
                                        <Image width={450} height={300}src="http://placehold.co/450x300" alt="Trimming Beard" className="width-100"/>
                                        </div>
                                    
                                        <h4 className="team-title">Christina Mang</h4>
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

                                    <div className="col-sm-4 team-wrapper">
                                
                                        <div className="image-wrapper">
                                        <Image width={450} height={300}src="http://placehold.co/450x300" alt="Trimming Beard" className="width-100"/>
                                        </div>
                                    
                                        <h4 className="team-title">Joe Petterson</h4>
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
                                        <h2 className="section-title white">Opening Hours</h2>
                                        
                                        <p className="section-subtitle grey-light">There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
                                            <br/>alteration, by injected humour, or new randomised words.</p>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-sm-4 col-md-2">

                                        <div className="program-box">

                                            <h3 className="program-day">Monday</h3>
                                            <span className="program-hour">10:00 - 16:00</span>

                                        </div>

                                    </div>

                                    <div className="col-sm-4 col-md-2">

                                        <div className="program-box">

                                            <h3 className="program-day">Tuesday</h3>
                                            <span className="program-hour">10:00 - 18:00</span>

                                        </div>

                                    </div>

                                    <div className="col-sm-4 col-md-2">

                                        <div className="program-box">

                                            <h3 className="program-day">Wednesday</h3>
                                            <span className="program-hour">10:00 - 18:00</span>

                                        </div>  

                                    </div>

                                    <div className="col-sm-4 col-md-2">

                                        <div className="program-box">

                                            <h3 className="program-day">Thursday</h3>
                                            <span className="program-hour">10:00 - 18:00</span>

                                        </div>    

                                    </div>

                                    <div className="col-sm-4 col-md-2">
                                        <div className="program-box">

                                            <h3 className="program-day">Friday</h3>
                                            <span className="program-hour">10:00 - 18:00</span>

                                        </div> 

                                    </div>

                                    <div className="col-sm-4 col-md-2">

                                        <div className="program-box last">

                                            <h3 className="program-day">Sat `&` Sunday</h3>
                                            <span className="program-hour">Closed</span>

                                        </div>  

                                    </div>

                                </div>

                            </div>

                    </section>



                    {/* SECTION */}


                    <section id="about">

                        <div className="section-white">
                        
                            <div className="container">

                                <div className="row">
                                
                                    <div className="col-md-6 wow fadeInLeft" data-wow-delay="0.1s">
                                    
                                        <Image width={800} height={650}src="http://placehold.co/800x650" className="about-image" alt="aboutus"/>
                                        
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

                        <div className="section-testimonials section-grey">
                            
                            <div className="container testimonials-wrapper">

                                <div className="row">
                                        
                                    <div className="col-md-12">

                                        <p className="testimonials-text">The attention of a traveller, should be particularly turned, in the first place, to the various works of Nature, to mark the distinctions of the climates he may explore, and to offer such useful observations on the different productions as may occur.</p>
                                                        
                                        <div className="testimonials-info">
                                        
                                            <Image width={100} height={100}src="http://placehold.co/100x100" className="author-pic" alt="John Doe"/>
                                            
                                            <p className="author-name">Alex Superman - VIP Client</p>
                                            
                                        </div>
                                        
                                    </div>
                            
                                </div>
                            
                            </div>
                        
                        </div>

                    </section>


                    {/* SECTION */}



                    <section className="image-section-contact" id="contact">

                        <div className="image-overlay"></div>
                        
                        <div className="container image-section-inside padding-top-90 padding-bottom-100">
                    
                            <div className="row margin-bottom-50">
                            
                                <div className="col-md-10 col-md-offset-1 text-center">

                                    <h2 className="section-title white">Get In Touch</h2>
                                                                
                                    <p className="section-subtitle white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered<br/> alteration, by injected humour, or new randomised words which don’t look believable.</p>
                                </div>
                            
                            </div>
                            
                            <div className="row">
                        
                                <p className="contact_success_box" style={{display:'none'}}>We received your message and you'll hear from us soon. Thank You!</p>
                                
                                <form id="contact-form" className="contact" action="php/contact.php" method="post">
                                    
                                    <div className="col-md-6">
                                        <input className="contact-input white-input" required="" name="contact_names" placeholder="Full Name*" type="text"/>
                                        <input className="contact-input white-input" required="" name="contact_subject" placeholder="Subject*" type="text"/>
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <input className="contact-input white-input" required="" name="contact_email" placeholder="Email Adress*" type="email"/>
                                        <input className="contact-input white-input" required="" name="contact_phone" placeholder="Phone Number*" type="text"/>
                                    </div>
                                    
                                    <div className="col-md-12">
                                        <textarea className="contact-commnent white-input" rows="2" cols="20" name="contact_message" placeholder="Your Message..."></textarea>
                                    </div>
                                    
                                    <div className="col-md-12">
                                        <input value="Send Message" id="submit-button" className="contact-submit" type="submit"/>
                                    </div>
                                    
                                </form>
                            
                            </div>
                            
                    </div>
                            
                    </section>


                    {/* SECTION */}


                    <div className="footer">
                            
                        <div className="container padding-top-40 padding-bottom-40">
                        
                            <div className="row">
                            
                                <div className="col-md-12 text-center">
                                    
                                    <div className="copyright">
                                        <p>Copyright © 2016. Designed `&amp;` Developed by <a href="http://themeforest.net/user/bogdan_09/portfolio?ref=bogdan_09" target="_blank">Bogdan Preda</a></p>
                                        
                                    </div>
                                                                    
                                    <ul className="footer_social">
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
                                    </ul>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                                
                    </div>




        </>
    )
}

    