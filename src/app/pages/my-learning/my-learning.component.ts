import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-my-learning',
  standalone: true,
  imports: [],
  templateUrl: './my-learning.component.html',
  styleUrl: './my-learning.component.scss'
})
export class MyLearningComponent  implements OnInit {
courseList: any[] = []

constructor(public readonly localStorageService: LocalStorageService){}

ngOnInit(): void {
    
}
}
