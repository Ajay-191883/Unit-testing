import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Post } from "src/app/models/Post.model";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  @Output() deletePost = new EventEmitter<Post>();
  constructor() {}

  ngOnInit(): void {}

  onDeletePost(event: Event) {
    event.stopPropagation();
    this.deletePost.emit(this.post);
  }
}
