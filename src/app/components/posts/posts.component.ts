import { Component, OnInit } from "@angular/core";
import { PostService } from "src/app/services/post/post.service";
import { Post } from "../../models/Post.model";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  deletePost(post: Post) {
    this.posts = this.posts.filter((p) => p.id != post.id);
    this.postService.deletePost(post).subscribe();
  }
}
