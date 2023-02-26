import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StrengthPipe } from "./pipes/strength/strength.pipe";
import { PostsComponent } from "./components/posts/posts.component";
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [AppComponent, StrengthPipe, PostsComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
