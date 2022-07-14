import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <!-- App Top Navigation -->
    <app-top-navigation></app-top-navigation>

    <app-header-banner [title]="'About Us'" [bgImage]="'assets/images/theme/slider/slide-2.jpg'"></app-header-banner>

    <div class="container">
        <div class="row">
            <div class="col-12 py-5">
                <p><b>Om Shubh Yatra</b> is one of the leading Tour Operator in India, providing comprehensive services for groups and individuals from and to the country. <b>Om Shubh Yatra</b> was was established in the year 2005 by qualified professionals with more than twelve years of experience in the tourism industry. Holding places, people and customs through professional guides, modern transportation, quality hotels, fine restaurants and other key vendors.</p>
        
                <p>Our specialized departments offer a diversity of services. Every department works independently to provide the best service to our customers, targeting their friendship and a long lasting relationship. All services and departments are located at our office in New Delhi, starting with the Management and Administrative Department, Operational Department, Reservation Department, Product Development, Sales & Marketing, Inbound, Outbound & Ticketing Departments, giving us a competitive advantage by being all under one roof.</p>

                <h4 class="text-left"><b>Our mission</b></h4>
                <p>Our mission is to provide quality of services and excellence to our customer who wants to take a mamorable trip. Our highly experienced team masters of their trade and each one brings a unique set of experience adding value to the traveler’s overall experience of the country. Basically, we know what a tourist expect and more than that we know what it takes to satisfy them. Customer satisfaction is our topmost priority.</p>


                <h2 class="text-left"><b>Our services are based on 3 major points:</b></h2>
                <h4 class="text-left"><b>Experience:</b></h4>
                <p>An excellent reputation for personal services, quality and value through extensive research and a comprehensive database backed up by twenty years of experience in the travel industry. Our agents travel to the places they sell on a regular basis. They inspect the newest properties along with older properties that have undergone renovation.</p>
                
                <p>We feel this is an extremely important aspect of being an above average travel consultant. It is what enables us to suggest properties that match our client's needs, and personalities. </p>

                <h4 class="text-left"><b>Service:</b></h4>
                <p>Professional customer oriented consultation providing hassle free travel. Email capabilities for convenience and prompt booking and information. Creative but persistent approach to search for the most appropriate travel arrangements and identifying the best possible value. Our travel consultants are friendly, professional, and experienced in accommodating both the seasoned traveler and those new to the world of travel.</p>

                <p>We pride ourselves in customer satisfaction. A large percentage of our bookings are from repeat clientele while much of our new business is from word of mouth recommendations.</p>

                <h4 class="text-left"><b>Value:</b></h4>
                <p>With our “ Know How  “, and as a sales agent for almost all major international airlines in India, we do not only offer competitive prices to our customer, but we are also able to pass on very competitive prices and a maximum opportunity for choices and flexibility.</p>


                <h4 class="text-left"><b>Our services include EVERYTHING related with tourism, such as:</b></h4>
                <ul>
                    <li>Airline Reservations & Ticketing</li>
                    <li>Worldwide hotel reservation</li>
                    <li>Worldwide car rental.<br>
                    <li>Ground handling services<br>
                    <li>Incentive, Special interest groups.</li>
                    <li>Conferences & MICE</li>
                    <li>Camping services.</li>
                    <li>Catering.</li>
                    <li>Meet & Assist services.</li>
                </ul>
                <p>With us, you can be 100% sure that your request is being held in highly dedicated and professional hands. We are proud to inform you that we are top agents in New Delhi with fast and attentive customer service. There is no waiting with Om Shubh Yatra, whether it is for a ticket, or an airport transfer or a hotel booking… etc, be sure that you are having the best combination between price and service. All of our staff are delighted to serve you 24/7, including holidays.</p>
            </div>
        </div>
    </div>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
