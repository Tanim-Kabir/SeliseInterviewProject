import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-learning-history',
  standalone: true,
  imports: [],
  templateUrl: './learning-history.component.html',
  styleUrl: './learning-history.component.scss'
})
export class LearningHistoryComponent implements OnInit {
courseList: any[] = []

constructor(public readonly localStorageService: LocalStorageService){}

ngOnInit(): void {
    
}
}
