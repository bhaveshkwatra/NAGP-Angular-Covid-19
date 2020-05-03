import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { INewsArticle } from 'src/app/shared/interface/INewsArticle';
import { NewsDetailsService } from 'src/app/core/services/news-details.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-news-entry',
  templateUrl: './news-entry.component.html',
  styleUrls: ['./news-entry.component.css']
})
export class NewsEntryComponent implements OnInit {

  entryForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private newsDetailService : NewsDetailsService, private notificationService : ToastrService) { }

  ngOnInit(): void {
    this.entryForm  =  this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(50)]],
      summary: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]],
      imageName: ['', Validators.required]
    });
  }

  newsSubmit(newsEntry : INewsArticle) {
    this.newsDetailService.addNewsDetail(newsEntry).subscribe(
      news => this.notificationService.info(`News Submitted for Title : ${newsEntry.title}`));
      this.reset();
  }

  reset() {
    this.entryForm.reset();
  }
}
