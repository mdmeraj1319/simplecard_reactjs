import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
   return(
       <div className="main_div">
         <h1 className="text-capitalize text-break text-danger my-4 text-center">Welcome to my channel</h1>
         <div className="container">
            <div className="row">
                <div className="col-sm">
                  <div class="card">
                        <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                  </div>
                </div>
                <div className="col-sm">
                    <div class="card">
                        <img src="https://picsum.photos/200/305" class="card-img-top" alt="..." height="200px"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div class="card">
                        <img src="https://picsum.photos/200/302" class="card-img-top" alt="..." height="200px"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <br/>
          <br/>
          <div className="container">
            <div className="row">
                <div className="col-sm">
                  <div class="card">
                        <img src="https://picsum.photos/200/308" class="card-img-top" alt="..." height="200px"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                  </div>
                </div>
                <div className="col-sm">
                    <div class="card">
                        <img src="https://picsum.photos/200/309" class="card-img-top" alt="..." height="200px"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div class="card">
                        <img src="https://picsum.photos/200/312" class="card-img-top" alt="..." height="200px"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
       </div>

   );
}

export default App;