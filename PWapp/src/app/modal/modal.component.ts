import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalData: any;

  trainers: any[];

  Agymnast: persoon[];
  Bgymnast: persoon[];
  Cgymnast: persoon[];
  Igymnast: persoon[];


  constructor() { }

  ngOnInit() {
    console.log(this.modalData);

    this.trainers = ['Stijn', 'Renaat', 'Hanneleen', 'Sien', 'Emma', 'Matthias'];

    this.Agymnast = [
      {naam:'Ijin', aanwezig: true, reden: ''}, 
      {naam:'Zita', aanwezig: true, reden: ''},
      {naam:'Helena', aanwezig: false, reden: 'ziek'},
      {naam:'Heleen', aanwezig: true, reden: ''},
      {naam:'Jaap', aanwezig: false, reden: 'ziek'},
      {naam:'Margot', aanwezig: true, reden: ''},
      {naam:'Ruth', aanwezig: true, reden: ''},
      {naam:'Marik', aanwezig: true, reden: ''},
      {naam:'Lentl', aanwezig: true, reden: ''}];
    this.Bgymnast = [
      {naam:'Thuline', aanwezig: true, reden: ''}, 
      {naam:'Fien', aanwezig: true, reden: ''},
      {naam:'Lucie', aanwezig: true, reden: ''},
      {naam:'Jinne', aanwezig: true, reden: ''},
      {naam:'Eva', aanwezig: false, reden: 'Lui'},
      {naam:'Lisa', aanwezig: true, reden: ''}];
    this.Cgymnast = [
      {naam:'Merel', aanwezig: true, reden: ''}, 
      {naam:'Noor', aanwezig: true, reden: ''},
      {naam:'Zori', aanwezig: false, reden: 'Op weekend'},
      {naam:'Milan', aanwezig: true, reden: ''},
      {naam:'Fien', aanwezig: true, reden: ''},
      {naam:'Lize', aanwezig: true, reden: ''},
      {naam:'Sofie', aanwezig: true, reden: ''},
      {naam:'Marie-lou', aanwezig: true, reden: ''},
      {naam:'Nona', aanwezig: false, reden: 'Pols gebroken'}];
    this.Igymnast = [
      {naam:'Juliette', aanwezig: true, reden: ''}, 
      {naam:'Lotte', aanwezig: true, reden: ''},
      {naam:'Kylian', aanwezig: false, reden: 'voet gebroken'},
      {naam:'Lieze', aanwezig: true, reden: ''}];
  }

  getDay(event: any){
    console.log(event);
    let dag = new Date(event.start);
    console.log(dag.getMonth());
    let eind = new Date(event.end);

    return dag.getDate() + "/" + dag.getMonth() + " " + dag.getHours() + "u - " + eind.getHours() + "u";
  }

  getTrainers(){
    let trainerss = [];
    if(this.modalData.event.start.getDay() === new Date('November 14, 2018 16:00:00').getDay()){
      trainerss.push('Sien');
      trainerss.push('Stijn');
    }
    if(this.modalData.event.start.getDay() === new Date('November 14, 2018 17:00:00').getDay()){
      trainerss.push('Emma');
    }
    if(this.modalData.event.start.getDay() === (new Date('November 15, 2018 18:00:00')).getDay()){
      trainerss.push('Renaat');
      trainerss.push('Haneleen');
      trainerss.push('Sien');
    }
    if(this.modalData.event.start.getDay() === new Date('November 16, 2018 17:00:00').getDay()){
      trainerss.push('Stijn');
      trainerss.push('Matthias');
    }
    if(this.modalData.event.start.getDay() === new Date('November 17, 2018 12:00:00').getDay()){
      trainerss.push('Renaat');
      trainerss.push('Haneleen');
      trainerss.push('Sien');
    }
    if(this.modalData.event.start.getDay() === new Date('November 17, 2018 14:00:00').getDay()){
      trainerss.push('Stijn');
    }
    if(this.modalData.event.start.getDay() === new Date('November 17, 2018 15:00:00').getDay()){
      trainerss.push('Emma');
    }
    if(this.modalData.event.start.getDay() === new Date('November 18, 2018 9:00:00').getDay()){
      trainerss.push('Stijn');
      trainerss.push('Matthias');
    }
    if(this.modalData.event.start.getDay() === new Date('November 18, 2018 13:00:00').getDay()){
      trainerss.push('Renaat');
      trainerss.push('Haneleen');
      trainerss.push('Sien');
    }

    return trainerss

  }

  getGymnasten(){
    let gymnastjes = [];
    if(this.modalData.event.title === 'AI-niveau: 16-18'){
      this.Agymnast.forEach(gymnastje => {
        gymnastjes.push(gymnastje);
      })
      this.Igymnast.forEach(gymnastje => {
        gymnastjes.push(gymnastje);
      })
    }
    if(this.modalData.event.title === 'B-niveau: 17-19'){
      this.Bgymnast.forEach(gymnastje => {
        gymnastjes.push(gymnastje);
      });
    }
    if(this.modalData.event.title === 'AI-B-niveau: 18-20'){
      this.Agymnast.forEach(gymnastje => {
        gymnastjes.push(gymnastje);
      });
      this.Igymnast.forEach(gymnastje => {
        gymnastjes.push(gymnastje);
      })
      this.Bgymnast.forEach(gymnastje => {
        gymnastjes.push(gymnastje);
      })
    }
    if(this.modalData.event.title === 'C-niveau: 17-19'){
      this.Cgymnast.forEach(gymnastje => {
        gymnastjes.push(gymnastje);
      });
    }
    if(this.modalData.event.title === 'AI-niveau: 12-14'){
      this.Agymnast.forEach(gymnastje => {
        gymnastjes.push(gymnastje);
      });
      this.Igymnast.forEach(gymnastje => {
        gymnastjes.push(gymnastje);
      });
    }if(this.modalData.event.title === 'C-niveau: 14-16'){
      this.Cgymnast.forEach(gymnastje => {
        gymnastjes.push(gymnastje);
      });
    }if(this.modalData.event.title === 'B-niveau: 15-17'){
      this.Bgymnast.forEach(gymnastje => {
        gymnastjes.push(gymnastje);
      });
    }if(this.modalData.event.title === 'C-niveau: 9-11'){
      this.Cgymnast.forEach(gymnastje => {
        gymnastjes.push(gymnastje);
      });
    }if(this.modalData.event.title === 'C-niveau: 13-15'){
      this.Agymnast.forEach(gymnastje => {
        gymnastjes.push(gymnastje);
      });
      this.Igymnast.forEach(gymnastje => {
        gymnastjes.push(gymnastje);
      });
    }

    return gymnastjes;
  }


}

class persoon {
  naam: string;
  aanwezig?: boolean;
  reden?: string;
}