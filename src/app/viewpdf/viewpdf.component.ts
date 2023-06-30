import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewpdf',
  templateUrl: './viewpdf.component.html',
  styleUrls: ['./viewpdf.component.scss']
})
export class ViewpdfComponent implements OnInit {

  pdfSrc  = "assets/images/resume.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
