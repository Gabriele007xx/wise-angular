import { Component, Input } from '@angular/core';
import { AuthService } from '../../auth.service';
import { IdService } from '../id.service';

@Component({
  selector: 'app-tabella',
  imports: [],
  templateUrl: './tabella.html',
  styleUrl: './tabella.scss',
})
export class Tabella {
@Input() data: any[];
currencyEuro : number = 0;
constructor(private idService: IdService,private readonly authService: AuthService)
{
  this.data=[];
}
id: number | null = null;
async ngOnInit() {
  
}
async loadData()
{
   const respose = await fetch('http://localhost:3000/api/holdings/'+this.id);
   this.data = await respose.json();



   
}
async convertiInEuro(valuta: string, importo: number)
{
  const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json');
  const data = await response.json();
  const rate = data['eur'][valuta];

  return importo / rate;
}
 
}
