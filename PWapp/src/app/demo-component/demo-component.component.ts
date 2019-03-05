import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  },
  green: {
    primary: '#2d862d',
    secondary: '#d9f2d9'
  }
};

@Component({
  selector: 'app-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css'],
})
export class DemoComponentComponent {
  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-pencil-alt"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: new Date('November 14, 2018 16:00:00'),
      end: new Date('November 14, 2018 18:00:00'),
      title: 'AI-niveau: 16-18',
      color: colors.yellow,
      actions: this.actions
    },{
      start: new Date('November 14, 2018 17:00:00'),
      end: new Date('November 14, 2018 19:00:00'),
      title: 'B-niveau: 17-19',
      color: colors.red,
      actions: this.actions
    },{
      start: new Date('November 15, 2018 18:00:00'),
      end: new Date('November 15, 2018 20:00:00'),
      title: 'AI-B-niveau: 18-20',
      color: colors.green,
      actions: this.actions
    },{
      start: new Date('November 16, 2018 17:00:00'),
      end: new Date('November 16, 2018 19:00:00'),
      title: 'C-niveau: 17-19',
      color: colors.blue,
      actions: this.actions
    },
    {
      start: new Date('November 17, 2018 12:00:00'),
      end: new Date('November 17, 2018 14:00:00'),
      title: 'AI-niveau: 12-14',
      color: colors.yellow,
      actions: this.actions
    },{
      start: new Date('November 17, 2018 14:00:00'),
      end: new Date('November 17, 2018 16:00:00'),
      title: 'C-niveau: 14-16',
      color: colors.blue,
      actions: this.actions
    },{
      start: new Date('November 17, 2018 15:00:00'),
      end: new Date('November 17, 2018 17:00:00'),
      title: 'B-niveau: 15-17',
      color: colors.red,
      actions: this.actions
    },{
      start: new Date('November 18, 2018 9:00:00'),
      end: new Date('November 18, 2018 11:00:00'),
      title: 'C-niveau: 9-11',
      color: colors.blue,
      actions: this.actions
    },{
      start: new Date('November 18, 2018 13:00:00'),
      end: new Date('November 18, 2018 15:00:00'),
      title: 'AI-niveau: 13-15',
      color: colors.yellow,
      actions: this.actions
    }

  ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }
}