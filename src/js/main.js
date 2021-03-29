import Difference from "./modules/difference";
import Download from "./modules/download";
import Form from "./modules/forms";
import VideoPlayer from "./modules/playVideo";
import ShowInfo from "./modules/showinfo";
import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";




window.addEventListener( 'DOMContentLoaded', ()=>{
    const slider = new MainSlider( {btns: '.next', container: '.page'} );
    slider.render();

    const moduleSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
    moduleSlider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true,
    });
    showUpSlider.init();

    const modulesSliders = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    modulesSliders.init();

    const feedSliders = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    feedSliders.init();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();
    

    new Difference('.officerold', '.officernew', '.officer__card-item').init();
    new Form('.form').init();

    new ShowInfo('.plus__content').init();
    new Download('.download').init();
});