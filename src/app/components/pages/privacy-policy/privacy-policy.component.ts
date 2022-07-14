import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  template: `
    <!-- App Top Navigation -->
    <app-top-navigation></app-top-navigation>

    <app-header-banner [title]="'Privacy Policy'" [bgImage]="'assets/images/theme/slider/slide-2.jpg'"></app-header-banner>

    <div class="container">
        <div class="row">
            <div class="col-12 py-5">
            <p><span>Om Shubh Yatra is committed to maintaining the privacy of personal information that you provide to us when using the Om Shubh Yatra web site. This Privacy Policy describes how we treat personal information received about you when you visit www.omshubhyatra.com.</span></p>
            
            <h3>Privacy Policy Promise</h3>
            <p><span>While information is the cornerstone of our ability to provide superior service, our most important asset is our clients&rsquo; trust. Keeping client information secure, and using it only as our clients would want us to, is a top priority for all of us at Om Shubh Yatra. Here then, is our promise to our individual customers:</span></p>
            
            <ul>
                <li><span>We will safeguard, according to strict standards of security and confidentiality, any information our customers share with us.</span></li>
                <li><span>We will limit the collection and use of customer information to the minimum we require to deliver superior service to our customers, which includes advising our customers about our products, services and other opportunities, and to administer our business.</span></li>
                <li><span>We will permit only authorized employees, who are trained in the proper handling of customer information, to have access to that information. Employees who violate our Privacy Promise will be subject to our normal disciplinary process.</span></li>
                <li><span>We will not reveal customer information to any external organization unless we have previously informed the customer in disclosures or agreements, or are required by law.</span></li>
                <li><span>We will always maintain control over the confidentiality of our customer information. We may, however, share customer information with reputable companies when a customer has expressed an interest in their service or product. Please note that this Privacy Policy does not apply to these other companys use of customer information.</span></li>
                <li><span>Whenever we hire other organizations to provide support services, we will require them to conform to our privacy standards and to allow us to audit them for compliance.</span></li>
                <li><span>We will attempt to keep customer files complete, up-to-date, and accurate. We will tell our customers how and where to conveniently access their information (except when we&rsquo;re prohibited by law) and how to notify us about errors which we will promptly correct.</span></li>
            </ul>
            
            <h3>Information We Collect</h3>
            <h4>General:</h4>
            <p><span>When you register, and at other times, we may collect personally identifiable information from you that may include your name, address, telephone number, e-mail address, and facts about your computer. We do not, however, knowingly collect personal information from children under the age of thirteen. In addition, if a user is under 18, unless consent is obtained from your parent/guardian, you are not allowed to provide us with personal information.</span></p>
            
            <h4>Web Site Usage Information:</h4>
            <p><span>&nbsp;We automatically collect IP addresses and Web site usage information from you when you visit our Web site. This information helps us evaluate how our visitors and customers use and navigate our Web site on an aggregate basis, including the number and frequency of visitors and customers to each Web page, and the length of their visits.</span></p>
            
            <h3>How We Use Information Collected</h3>
            <p><span>We may use information in the following ways:</span></p>
            <ul>
                <li><span>For the purposes for which you specifically provided the information.</span></li>
                <li><span>To send you e-mail notifications about our new or existing products and services, special offers, or to otherwise contact you.</span></li>
                <li><span>To enhance existing features or develop new features, products and services.</span></li>
                <li><span>To allow us to personalize the content and advertising that you and others see based on personal characteristics or preferences.</span></li>
                <li><span>We may combine the information that we collect from you on https://www.omshubhyatra.com with information that you provide to us in connection with your use of our other products, services and web site.</span></li>
                <li><span>We may disclose and use personally identifiable information in special circumstances where it is necessary to enforce our Terms of Use (for example, when necessary to protect our intellectual property rights). We may also disclose or use your personal information when we, in good faith, believe that the law requires us to do so.</span></li>
            </ul>
            
            <h3>Cookies</h3>
            <p><span>We employ cookie technology to help visitors and customers move faster through our site. When you sign on to our Web site or take advantage of several key features, we may pass cookies to your computer. A cookie is a string of information that is sent by a Web site and stored on your hard drive or temporarily in your computer&rsquo;s memory.</span></p>
            
            <h3>Security</h3>
            <p><span>The personally identifiable information we collect about you is stored in limited-access servers. We will maintain safeguards to protect the security of these servers and your personally identifiable information.</span></p>
            
            <h3>Internet-based Transfers</h3>
            <p><span>Given that the Internet is a global environment, using the Internet to collect and process personal data necessarily involves the transmission of data on an international basis. Therefore, by browsing <a href="https://www.omshu">https://www.omshubhyatra.com</a> and communicating electronically with us you acknowledge and agree to our processing of personal data in this way.</span></p>
            
            <h3>Policy Modifications</h3>
            <p><span>We may change this Privacy Policy from time to time. We will post any changes here, so be sure to check back periodically. However, please be assured that if the Privacy Policy changes in the future, we will not use the personal information you have submitted to us under this Privacy Policy in a manner that is materially inconsistent with this Privacy Policy, without your prior consent.</span></p>
            
            <h3>Comments and Questions</h3>
            <p><span>If you have any questions, comments or concerns about our Privacy Policy, please <strong>contact us</strong>.</span></p>
            
            <h4 class="text-center pt-5">ll Anywhere in the world you want to go... we can get you there ll</h4>
            </div>
        </div>
    </div>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class PrivacyPolicyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
