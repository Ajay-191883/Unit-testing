import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { Post } from "src/app/models/Post.model";
import { PostService } from "src/app/services/post/post.service";
import { PostsComponent } from "./posts.component";

// alternate to create spy Object, we can create a mock class ourselves
class MockPostService {
  getPosts() {
    return of(true);
  }

  deletePost(post: Post) {
    return of(true);
  }
}
// end

describe("PostsComponent", () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let mockPostService: any;

  beforeEach(() => {
    POSTS = [
      {
        id: 1,
        body: "body 1",
        title: "title 1",
      },
      {
        id: 2,
        body: "body 2",
        title: "title 2",
      },
      {
        id: 3,
        body: "body 3",
        title: "title 3",
      },
    ];

    // mockPostService = jasmine.createSpyObj(["getPosts", "deletePost"]);

    TestBed.configureTestingModule({
      providers: [
        PostsComponent,
        {
          provide: PostService,
          // useValue: mockPostService,
          useClass: MockPostService,
        },
      ],
    });

    component = TestBed.inject(PostsComponent);
    mockPostService = TestBed.inject(PostService);
  });

  describe("deletePost", () => {
    beforeEach(() => {
      // mockPostService.deletePost.and.returnValue(of(true));
      component.posts = POSTS;
    });

    it("should delete the post from the posts", () => {
      component.deletePost(POSTS[1]);
      expect(component.posts.length).toBe(2);
    });

    it("should delete the actual selected post from the posts", () => {
      component.deletePost(POSTS[1]);
      expect(component.posts.filter((p) => p.id == 2).length).toBe(0);
    });

    it("should call the delete method in post service only once", () => {
      spyOn(mockPostService, "deletePost").and.callThrough();
      component.deletePost(POSTS[1]);
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
    });
  });
});
