import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { EventTableComponent } from './components/event-table/event-table.component';
import { EventTimelineComponent } from './components/event-timeline/event-timeline.component';
import { EventLogPageComponent } from './components/event-log-page/event-log-page.component';

@NgModule({
	declarations: [
		AppComponent,
  		EventTableComponent,
    	EventTimelineComponent,
     	EventLogPageComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		MatIconModule,
		MatTableModule
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
