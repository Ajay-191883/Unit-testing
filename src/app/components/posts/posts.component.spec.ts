import { of } from "rxjs";
import { Post } from "src/app/models/Post.model";
import { PostsComponent } from "./posts.component";

describe("PostsComponent", () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let dummyPostService: any;

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

    dummyPostService = jasmine.createSpyObj(["getPosts", "deletePost"]);
    component = new PostsComponent(dummyPostService);
  });

  describe("deletePost", () => {
    beforeEach(() => {
      dummyPostService.deletePost.and.returnValue(of(true));
      component.posts = POSTS;
      component.deletePost(POSTS[1]);
    });

    it("should delete the post from the posts", () => {
      expect(component.posts.length).toBe(2);
    });

    it("should delete the actual selected post from the posts", () => {
      expect(component.posts.filter((p) => p.id == 2).length).toBe(0);
    });

    it("should call the delete method in post service only once", () => {
      expect(dummyPostService.deletePost).toHaveBeenCalledTimes(1);
    });
  });
});
