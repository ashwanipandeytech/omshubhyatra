import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-slide',
  template: `
    <div class="single-testimonial-slider rounded-top">
        <div class="top-box rounded-top"></div>
        <img src="https://images.pexels.com/photos/1056475/pexels-photo-1056475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Picture of Vivian Williams">
        <div class="bottom-box bg-light rounded-bottom">
            <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </blockquote>
            <div class="test-details">
                <p><span>Vivian Williams</span><br>Los Angeles, CA</p>
            </div>
        </div>
    </div>
  `,
  styles: []
})
export class TestimonialSlideComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {

    }
}
