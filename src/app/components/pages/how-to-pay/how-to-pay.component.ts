import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-pay',
  template: `
    <!-- App Top Navigation -->
    <app-top-navigation></app-top-navigation>

    <app-header-banner [title]="'How to Pay'" [bgImage]="'assets/images/theme/slider/slide-2.jpg'"></app-header-banner>

    <div class="container">
        <div class="row">
            <div class="col-12 py-5">
                
                <h3 class="display-5 mb-4">Online Payment</h3>
                <a href="https://www.payumoney.com/paybypayumoney/#/DC74FA96BB5B9ECC5031217517137D7D" class="btn btn-primary btn-lg mb-5">Make Payment Online</a>
                
                
                <h3 class="display-5 mb-4">Scan and pay</h3>
                <div class="max-500 text-center">
                    <div class="row mb-5">
                        <div class="col-md-6 col-12">
                            <div class="card shadow">
                                <div class="card-body">
                                    <img src="/assets/images/payment/google-pay.png" class="img-fluid rounded">
                                </div>
                                <div class="card-body border-top">
                                    <h3 class="m-0 text-center">Google Pay</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-12">
                            <div class="card shadow">
                                <div class="card-body">
                                    <img src="/assets/images/payment/paytm.png" class="img-fluid rounded">
                                </div>
                                <div class="card-body border-top">
                                    <h3 class="m-0 text-center">Paytm</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h3 class="display-5 mb-4">Transfer to bank</h3>

                <h4>ICICI Bank:</h4>
                <table class="table mb-5">
                    <tbody>
                        <tr>
                            <td>Account Name</td>
                            <td>OM SHUBH YATRA</td>
                        </tr>
                        <tr>
                            <td>Account Number</td>
                            <td>033205005075</td>
                        </tr>
                        <tr>
                            <td>IFSC / RTGS / NEFT</td>
                            <td>ICIC0000332</td>
                        </tr>
                        <tr>
                            <td>Bank Name</td>
                            <td>ICICI Bank</td>
                        </tr>
                        <tr>
                            <td>Branch</td>
                            <td>W-2/6,West Patel Nagar, New Delhi -110008</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Indian Overseas Bank:</h4>
                <table class="table mb-5">
                <tbody>
                        <tr>
                            <td>Account Name</td>
                            <td>OM SHUBH YATRA</td>
                        </tr>
                        <tr>
                            <td>Account Number</td>
                            <td>044202000007181</td>
                        </tr>
                        <tr>
                            <td>IFSC / RTGS / NEFT</td>
                            <td>IOBA0000442</td>
                        </tr>
                        <tr>
                            <td>Bank Name</td>
                            <td>Indian Overseas Bank</td>
                        </tr>
                        <tr>
                            <td>Branch</td>
                            <td>Rajendra Place, New Delhi -110008</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class HowToPayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
