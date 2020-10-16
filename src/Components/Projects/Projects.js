import React from "react";
export default function Home(props) {
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5 ">Projects</h1>
      <hr/>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/assets/rabbit-5639615_1920.jpg" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/assets/flowers-5046413_1920.jpg" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/assets/castle-5638140_1920.jpg" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      <hr />
      <p className="marvel mt-5 mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur
        rhoncus ligula in rutrum. Cras imperdiet massa efficitur, lobortis dui
        non, egestas erat. Nam pulvinar euismod nunc vel lacinia. Donec nec quam
        justo. Vestibulum dictum augue tortor, nec mollis est tempus vitae. Ut
        orci elit, dictum in nulla vitae, consectetur eleifend odio. Suspendisse
        ultrices, ipsum ut vehicula tristique, tortor mi placerat urna, dictum
        pulvinar mauris leo nec risus. Vivamus efficitur efficitur eros, sit
        amet pretium ligula fringilla sit amet. Integer et nunc molestie,
        convallis velit euismod, blandit orci. Phasellus dignissim augue
        condimentum varius blandit. Sed venenatis viverra ultrices. Morbi
        condimentum elit eros, vitae sagittis nibh malesuada sit amet. Donec
        rhoncus tempus metus, ut feugiat velit egestas ac. Proin ac venenatis
        lorem.
      </p>
      <hr />

    </div>
  );
}

