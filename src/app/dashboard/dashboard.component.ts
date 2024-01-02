import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

import {
  Firestore,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
} from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Import the necessary modules
import {} from 'firebase/firestore';

import { Observable } from 'rxjs';
import { SubmissionCountService } from '../submission-count.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  totalBookings: number = 0;
  cancelledBookings: number = 0;
  approvedBookings: number = 0;

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    // Read total bookings count from Firestore
    const countersCollectionRef = collection(this.firestore, 'counters');
    const bookingsCountDocRef = doc(countersCollectionRef, 'bookingsCount');
    const cancelledCountDocRef = doc(
      countersCollectionRef,
      'cancelledBookingsCount'
    );
    const approvedCountDocRef = doc(
      countersCollectionRef,
      'approvedBookingsCount'
    );

    onSnapshot(bookingsCountDocRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data() as { count: number };
        this.totalBookings = data.count;

        console.log('Total Bookings Updated:', this.totalBookings);
      } else {
        console.log('Document does not exist.');
      }
    });
    onSnapshot(cancelledCountDocRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data() as { count: number };
        this.cancelledBookings = data.count;

        console.log('Total Bookings Updated:', this.cancelledBookings);
      } else {
        console.log('Document does not exist.');
      }
    });
    onSnapshot(approvedCountDocRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data() as { count: number };
        this.approvedBookings = data.count;

        console.log('Total Bookings Updated:', this.approvedBookings);
      } else {
        console.log('Document does not exist.');
      }
    });
  }
}
