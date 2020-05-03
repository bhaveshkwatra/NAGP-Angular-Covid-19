import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { IAdmin } from '../../shared/interface/IAdmin';
import { INewsArticle } from 'src/app/shared/interface/INewsArticle';
import { IStateReport } from 'src/app/shared/interface/IStateReport';

@Injectable({
  providedIn: 'root'
})
export class InMemoryAdminService implements InMemoryDbService{

  constructor() { }
  createDb() {

    const adminLoginDetails : IAdmin[] = [{
      "id":1,
      "userName" : "admin",
      "password" : "admin",
    },
    {
      "id":2,
      "userName" : "bhavesh",
      "password" : "bhavesh",
    }
  ];

  const newsEntryDetails : INewsArticle[] = [{
    "id" : 1,
    "title" : "Coronavirus live updates",
    "description": "Rate of growth of new Covid-19 cases steadying for a while, Union health minister says",
    "summary" : "Total Covid-19 cases in India have risen to 39,980, as per the latest update by the Union health ministry. Over 1,300 people have died due to the virus across the country while the global toll from Covid-19 is nearing 3,50,000. The lockdown in India has been extended till May 17",
    "imageName" : "covid_news1.jpg"
  }, {
    "id" : 2,
    "title" : "Coronavirus cases in India near 40,000, highest jump in 24 hours",
    "description": "In 24 hours, coronavirus-linked deaths went up by 83",
    "summary" : "The tally of confirmed coronavirus cases in India is approaching 40,000, with a record 2,644 new cases detected in the last 24 hours. The death toll from Covid-19 has gone up to to 1,301 after 83 coronavirus-linked deaths were reported in 24 hours",
    "imageName" : "covid_news2.jpg" 
  } 
];

    return {adminLoginDetails, newsEntryDetails};
  } 

  // auto generate id when admin add news 

  genId(newsArticle: INewsArticle[]): number {
    return newsArticle.length > 0 ? Math.max(...newsArticle.map(t => t.id)) + 1 : 1;
  }
}
