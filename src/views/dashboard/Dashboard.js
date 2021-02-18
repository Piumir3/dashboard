import React, { Component } from 'react'


export default class Dashboard extends Component {
  render() {
    return (
      <div>


        <div class="jumbotron jumbotron-fluid">
          <div class="container">

            <h6 class="display-4" >User Activities</h6>
            <img src="/images/user.jpg" alt="user " class="center" height="200px" />
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <a href="http://localhost:3000/#/theme/colors" class="btn btn-dark" role="button" aria-disabled="true">Add User </a>
        &nbsp;&nbsp;
        <a href="http://localhost:3000/#/theme/colors" class="btn btn-dark" role="button" aria-disabled="true">Edit User</a>
        &nbsp;&nbsp;
        <a href="http://localhost:3000/#/theme/colors" class="btn btn-dark" role="button" aria-disabled="true">Delete User </a>
            
   

          </div>

        </div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h6 class="display-4">Products</h6>
            <img src="/images/product.png" alt="prduct" class="center" height="200px" />
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <a href="http://localhost:3000/#/theme/typography" class="btn btn-dark" role="button" aria-disabled="true">Add Product</a>
        &nbsp;&nbsp;
        <a href="http://localhost:3000/#/theme/typography" class="btn btn-dark" role="button" aria-disabled="true">Edit Product</a>
        &nbsp;&nbsp;
        <a href="http://localhost:3000/#/theme/typography" class="btn btn-dark" role="button" aria-disabled="true">Delete Product </a>


          </div>

        </div>


        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Shop</h1>
            <img src="/images/shop.png" alt="prduct" class="center" height="200px" />
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <a href="http://localhost:3000/#/base/breadcrumbs" class="btn btn-dark" role="button" aria-disabled="true">Add Shop </a>
        &nbsp;&nbsp;
        <a href="http://localhost:3000/#/base/breadcrumbs" class="btn btn-dark" role="button" aria-disabled="true">Edit Shop</a>
        &nbsp;&nbsp;
        <a href="http://localhost:3000/#/base/breadcrumbs" class="btn btn-dark" role="button" aria-disabled="true">Delete Shop </a>

           
       </div>

        </div>


        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Route</h1>
            <img src="/images/route.png" alt="prduct" class="center" height="200px" />
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <a href="http://localhost:3000/#/buttons/buttons" class="btn btn-dark" role="button" aria-disabled="true">view Route</a>

             
          </div>

        </div>

        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Reports</h1>

            <img src="/images/report.jpg" alt="prduct" class="center" height="200px" />
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <a href="http://localhost:3000/#/charts" class="btn btn-dark" role="button" aria-disabled="true">view Reports</a>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>

        </div>

        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Privilage</h1>
            <img src="/images/privijpg.jpg" alt="privijpg" class="center" height="200px" />
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <a href="http://localhost:3000/#/icons/coreui-icons" class="btn btn-dark" role="button" aria-disabled="true">Action</a>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
           
          </div>

        </div>

        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Authentication</h1>
            <img src="/images/au.png" alt="privijpg" class="center" height="200px" />
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <a href="http://localhost:3000/#/notifications/badges" class="btn btn-dark" role="button" aria-disabled="true">view Reports</a>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>

        </div>

        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">About Us</h1>
            <img src="/images/aboutus.jpg" alt="privijpg" class="center" height="200px" />
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <a href="http://localhost:3000/#/notifications/alerts" class="btn btn-dark" role="button" aria-disabled="true">view</a>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>

        </div>

      </div>

    )
  }
}
