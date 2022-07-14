import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancellation-policy',
  template: `
    <!-- App Top Navigation -->
    <app-top-navigation></app-top-navigation>

    <app-header-banner [title]="'Cancellation Policy'" [bgImage]="'assets/images/theme/slider/slide-2.jpg'"></app-header-banner>

    <div class="container">
        <div class="row">
            <div class="col-12 py-5">
            <p>Your purchase does not automatically guarantee a reservation. Your purchase will be confirmed via email within one to two business days. The cancellation fee policy will take effect once you submit your reservation. If your purchase cannot be confirmed for any reason, we will fully refund your purchase without any additional charges. We recommend each customer read and review the cancellation policy.</p>
            
            <h3>What CAN be Refunded:</h3>
            <ul>
                <li>Some tours may require a minimum number of travelers to operate. The affected traveler may choose a similar tour product as a substitute. Should this occur, it would be under very rare circumstances.</li>
                <li>
                Please note that the product substitute chosen by the traveler may be more expensive than the original product and therefore may be subject to an additional cost.
                </li>
                <li>Any additional refunds based on extenuating circumstances will depend on the individual tour operator.</li>
            </ul>
            
            <h3>What CANNOT be Refunded:</h3>
            <ul>
                <li>All hotel and tour schedules are arranged ahead of time. Any person failing to appear on the day of departure will not be refunded.</li>
                <li>No refund will be given for any portions of the tour unused by the traveler after tour departure regardless of circumstances.</li>
                <li>Airfare is completely non-refundable and non-changeable for tours when airfare is included in the final price.</li>
                <li>Hotel extensions and Instant Confirmation products (admission tickets, city passes, etc.) cannot be exchanged or refunded once confirmed.</li>
            </ul>
            
            <h3>Our Cancellation Policy</h3>
            <p>The Cancellation Policies listed below apply to all reservations unless the tour booked has specific rates or fees listed under "Special Notes." Please carefully review the "Special Notes" of your tour prior to booking. Please know that Om Shubh Yatra will always adhere to individual tour policies when applicable.</p>

            <table class="table">
                <thead>
                    <tr>
                        <th>Cancellation Made Within</th>
                        <th>Refund Policy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div>06 days prior to departure</div>
                            <div>7-15 Days Prior to Departure Date</div>
                            <div>16-30 Days Prior to Departure Date</div>
                            <div>30 or more Days Prior to Departure Date</div>
                        </td>
                        <td>
                            <div>Non-refundable</div>
                            <div>50% of total purchase amount can be refunded</div>
                            <div>75% of total purchase amount can be refunded</div>
                            <div>90% of total purchase amount can be refunded</div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <ul>
                <li>Please note that cancellation fees are calculated based on the date we receive your signed Cancellation Request Form and travel service start date.</li>
                <li>If a tour is scheduled to depart within the next 6 days, we will not change a traveler's departure date and will not offer a refund.</li>
                <li>All cancellations must be made directly with Om Shubh Yatra, not with tour vendors.</li>
                <li>In most cases, reservations paid by wire transfer, cash deposit, or money order/traveler's check/cashier's check will be refunded via wire transfer or check. For refunds processed by wire transfer, any associated wire transfer fee will be deducted from the overall refund amount.</li>
            </ul>
            
            <h3>How to Cancel a Reservation</h3>
            <p>We will process your cancellation/refund request within one to seven business days. We will NOT acknowledge any verbal / over-the-phone request or voice mail. Verbally speaking with our customer service representatives without filling out a request form / e-mail will not guarantee that your cancellation has been processed or acknowledged.</p>
            
            <h4>Contact Email: info@omshubhyatra.com </h4>
            </div>
        </div>
    </div>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class CancellationPolicyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
