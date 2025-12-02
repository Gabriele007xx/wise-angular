import { Component, Input } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-tabella',
  imports: [ReactiveFormsModule],
  templateUrl: './tabella.html',
  styleUrl: './tabella.scss',
})
export class Tabella {
  @Input() data: any[];
  @Input() results: number = 0;
  valuta = new FormControl('');
  quantity = new FormControl('');
currencyEuro : number = 0;
constructor(private readonly authService: AuthService, private readonly httpClient: HttpClient, private readonly router:Router)
{
  this.data = [];
  this.results = 0;
  this.currencyEuro = 0;
}
id: number | null = null;
async ngOnInit() {
  this.id = this.authService.userId();
  this.loadData();
}
loadData()
{
  const header = {
    'Authorization': 'Bearer ' + this.authService.getAccessToken()
  };
  this.httpClient.get('http://localhost:1337/api/holdings/'+this.id, { "headers": header }).subscribe(async (data: any) => {
    this.data = data.holdings;
    this.results = data.holdings.length;
    console.log(this.results)
        for (let row of this.data) {
      this.convertiInEuro(row.code.toLowerCase(), row.amount);
    }
  });


   
}
convertiInEuro(valuta: string, importo: number)
{

  this.httpClient.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json').subscribe((data: any) => {
    const currencyRate = data['eur'][valuta];
      const rate = importo / currencyRate;
      this.currencyEuro += rate;
  
  });


}
addMoney()
{
    const header = {
    'Authorization': 'Bearer ' + this.authService.getAccessToken()
  };

  const body = {
    currencyID: this.valuta.value,
    quantity: this.quantity.value
  }
  this.httpClient.post('http://localhost:1337/api/holdings/'+this.id, body, {headers: header}).subscribe({ next: (result: any) => {
    alert('Valuta aggiunta!');
    this.router.navigate(['/dashboard'])
  },
  error: (error) => {
    alert('Valuta non aggiunta: ' + error.message);
  }});
}
 
}
