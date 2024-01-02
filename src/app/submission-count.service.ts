import { Injectable } from '@angular/core';
import {
  Firestore,
  doc,
  getDoc,
  setDoc,
  increment,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubmissionCountService {
  private countDocRef = doc(this.firestore, 'counters', 'bookingsCount');
  private cancelledCountDocRef = doc(
    this.firestore,
    'counters',
    'cancelledBookingsCount'
  );
  private approvedCountDocRef = doc(
    this.firestore,
    'counters',
    'approvedBookingsCount'
  );
  constructor(private firestore: Firestore) {}

  getCount(): Observable<number> {
    return new Observable((observer) => {
      getDoc(this.countDocRef).then((doc) => {
        if (doc.exists()) {
          const data = doc.data() as { count: number }; // Explicitly declare the type
          observer.next(data.count);
        } else {
          observer.next(0);
        }
      });
    });
  }

  incrementCount(): void {
    setDoc(this.countDocRef, { count: increment(1) }, { merge: true });
  }
  getCancelledCount(): Observable<number> {
    // Add this method
    return new Observable((observer) => {
      getDoc(this.cancelledCountDocRef).then((doc) => {
        if (doc.exists()) {
          const data = doc.data() as { count: number };
          observer.next(data.count);
        } else {
          observer.next(0);
        }
      });
    });
  }

  incrementCancelledCount(): void {
    // Add this method
    setDoc(this.cancelledCountDocRef, { count: increment(1) }, { merge: true });
  }
  getApprovedCount(): Observable<number> {
    // Add this method
    return new Observable((observer) => {
      getDoc(this.approvedCountDocRef).then((doc) => {
        if (doc.exists()) {
          const data = doc.data() as { count: number };
          observer.next(data.count);
        } else {
          observer.next(0);
        }
      });
    });
  }

  incrementApprovedCount(): void {
    // Add this method
    setDoc(this.approvedCountDocRef, { count: increment(1) }, { merge: true });
  }
}
