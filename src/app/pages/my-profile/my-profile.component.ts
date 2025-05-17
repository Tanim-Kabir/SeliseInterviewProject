import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent implements OnInit {
courseList: any[] = []

constructor(public readonly localStorageService: LocalStorageService){}

ngOnInit(): void {
    
}
}
