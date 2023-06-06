import { TestBed } from "@angular/core/testing";
import { take } from "rxjs/operators";
import { Post } from "src/app/models/Post.model";
import { PostComponent } from "./post.component";

describe("PostComponent", () => {
  let postComponent: PostComponent;
  let post: Post;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
    });

    const fixture = TestBed.createComponent(PostComponent);
    postComponent = fixture.componentInstance;

    post = { id: 1, body: "Good Body", title: "Title" };
  });

  it("should create a component using TestBed", () => {
    expect(postComponent).toBeDefined();
  });

  it("should emit an event on clicking delete post", () => {
    // arrange
    postComponent.post = post;
    // act & assert
    postComponent.deletePost.pipe(take(1)).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post);
    });

    postComponent.onDeletePost(new MouseEvent("click"));
  });
});
