app.component('home', {
    template:
        /*html*/
        `<div class="main-container">
            <header class="fullscreen-element no-pad centered-text">
                <div class="background-image-holder parallax-background overlay">
                    <img class="background-image" alt="Background Image" src="img/main_image.jpg">
                </div>
                
                <div class="container align-vertical">
                    <div class="row">
                        <div class="col-md-7 col-sm-8">
                            
                            <h1 class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</h1>
                            <p class="lead text-white">Excepteur sint occaecat cupidatat sunt culpa officia.</p>
                            <a target="_self" href="#" class="btn btn-primary btn-white inner-link">Learn more</a>
                            <a href="#" class="btn btn-primary btn-filled inner-link" target="_self">Sign up for tasting</a>
                        </div>
                    </div>
                </div>                       
            </header>
        </div>`,
    data() {
        return {
            some: null
        }
    },
    methods: {
        async soneFun() {
            return "something"
        }
    },
    computed: {
        data() {
            return 10
        }
    }
})