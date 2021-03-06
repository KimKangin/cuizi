window.addEventListener('load', function(){
	var cz=new CZ();
	cz.productSlider();
	cz.slider();
	cz.purifierSlider();
	cz.headerSlider();
})

var CZ=function(){};
CZ.prototype={
	productSlider: function(){
		var swiper = new Swiper('.hot-content .swiper-container', {
        slidesPerView: 'auto',
        freeMode: true,
        mousewheel: true,
    	});
	},

	slider: function(){
		var mySwiper = new Swiper('#slider .swiper-container', {
			speed: 1500,
			autoplay: {
			    delay: 2000,
			    stopOnLastSlide: false,
			    disableOnInteraction: true,
		   },
		   pagination: {
		    	el: '.swiper-pagination',
		    	clickable :true
		  },
		  loop: true
		});

		document.getElementById('slider').onmouseenter=function(){
		  mySwiper.autoplay.stop();
		};

		document.getElementById('slider').onmouseleave=function(){
		  mySwiper.autoplay.start();
		};
	},

	purifierSlider: function(){
		var mySwiper = new Swiper('.purifier-content .swiper-container', {
			speed: 1500,
			autoplay: {
			    delay: 2000,
			    stopOnLastSlide: false,
			    disableOnInteraction: true,
		   },
		   pagination: {
		    	el: '.swiper-pagination',
		    	clickable :true
		  },
		  loop: true
		});

		document.querySelector('.purifier-content').onmouseenter=function(){
		  mySwiper.autoplay.stop();
		};

		document.querySelector('.purifier-content').onmouseleave=function(){
		  mySwiper.autoplay.start();
		};
	},

	headerSlider: function(){
		document.querySelector('.icon-menu').addEventListener('click',function(){
			document.querySelector('#header').classList.toggle('active');
		})
	}
};