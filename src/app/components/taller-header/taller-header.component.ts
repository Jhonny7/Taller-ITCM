import { AlertService } from '../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/app/environment/environment.prod';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'taller-header',
  templateUrl: './taller-header.component.html',
  styleUrls: ['./taller-header.component.scss']
})
export class TallerHeader implements OnInit{
  
  constructor(
    
  ){

  }

  ngOnInit(): void {
    
  }
}
