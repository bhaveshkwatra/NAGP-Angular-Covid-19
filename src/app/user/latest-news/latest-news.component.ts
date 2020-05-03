import { Component, OnInit } from '@angular/core';
import { INewsArticle } from '../../shared/interface/INewsArticle';
import { NewsDetailsService } from '../../core/services/news-details.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  newsArticle : INewsArticle[] = [];

  constructor(private newsDetailService : NewsDetailsService) { }

  ngOnInit(): void {
    this.newsDetailService.getAllNewsDetails().subscribe(allNewsDetails => {
      console.log(allNewsDetails);
      this.newsArticle = allNewsDetails;
    });
  }

}
