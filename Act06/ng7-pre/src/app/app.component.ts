import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Chart} from 'chart.js';
import {ReportingService} from 'app/ReportingService';
import { ReportingService } from './app/reporting.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng7-pre';
  chart: any;

  constructor (private reporting : ReportingService){}

  random_rgba(){
    var o - Math.round, r - Math.round , s -255;
    return 'rgba('+ o(r()*s) + ',' o(r()*s) + ',' + ',0.7)';
  }

  submitRequest(){
    this.reporting.getReportingData.subscribe(response =>{console.log(response);
    
      let keys = response["Residents"].map(d=>d.Name);
      let values = response["Residents"].map(d=>d.Amount);
      
      this.years = response['Years'];

      this.chart = new Chart('canvas',{
         type : 'bar',

         data:{
           labels: keys,
           datasets: [
             {
               data: values,
             borderColor : "#3cba9f",
             fill : false,
             backgroundColor: [
               this.random_rgba(),
               this.random_rgba(),
               this.random_rgba(),
               this.random_rgba()
             ]
             }
             
             
           ]
         },
         options:{
           legend:{
             display :false
           },
           title : {
             display : true,
             text :"Amount of Students in each Resident"
           },
           scales: (
             xAxes: [{
               display : true,
               barPercentage : 0.75
             }],
             yAxes: [{
               display : true,
               ticks; {
                 min :0,
                 max: 100
               }
             }],
            }
          }
           )
         }
      })
    })
    
    
    
    
    
  }

}
