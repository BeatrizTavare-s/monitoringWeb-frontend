import { Component } from '@angular/core';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrl: './site-form.component.css'
})
export class SiteFormComponent {
  port: number = 0;
  url: string = '';
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;
  constructor(private siteService: SiteService) { }

  sendSite(): void {
    const data = { port: this.port, url: this.url };

    this.siteService.sendSite(this.port, this.url)
      .subscribe(response => {
        console.log('Resposta da API:', response);
        this.showSuccessMessage = true;
        this.showErrorMessage = false;
      }, error => {
        console.error('Erro ao enviar POST:', error);
        this.showSuccessMessage = false;
        this.showErrorMessage = true;
      });
  }
}