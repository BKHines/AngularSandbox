import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-messagedetails',
  templateUrl: './messagedetails.component.html',
  styleUrls: ['./messagedetails.component.css']
})
export class MessagedetailsComponent implements OnInit {
  postId: number;
  post: any;
  comments: any[];

  postEditMode: boolean;
  originalPostTitle: string;
  originalPostBody: string;

  newCommentName: string;
  newCommentBody: string;
  newCommentEmail: string;

  commentEditIds: number[];
  originalCommentValues: any[];

  constructor(private apiSvc: ApiService, private route: ActivatedRoute, private _loc: Location) { }

  ngOnInit() {
    this.commentEditIds = [];
    this.originalCommentValues = [];

    this.route.params.subscribe(params => {
      this.postId = params['id'];
      this.apiSvc.getPost(this.postId).subscribe((res) => {
        this.post = res;

        this.apiSvc.getPostComments(this.postId).subscribe((_res) => {
          this.comments = _res;
        });
      });
    });
  }

  editPost() {
    this.originalPostTitle = this.post.title;
    this.originalPostBody = this.post.body;
    this.postEditMode = true;
  }

  updatePost() {
    this.postEditMode = false;
  }

  cancelPostUpdate() {
    this.post.title = this.originalPostTitle;
    this.post.body = this.originalPostBody;
    this.postEditMode = false;
  }

  addComment() {
    this.apiSvc.addComment(this.newCommentName, this.newCommentBody, this.newCommentEmail, this.postId).subscribe((res) => {
      if (res) {
        this.comments.push(res);
        this.newCommentName = this.newCommentBody = this.newCommentEmail = '';
      }
    }, (err) => {
      alert('Oops.  That didn\'t work');
    });
  }

  editComment(comment: any) {
    this.commentEditIds.push(comment.id);
    this.originalCommentValues.push(comment);
  }

  updateComment(comment: any) {
    this.apiSvc.updateComment(comment.id, comment.name, comment.body, comment.email, comment.postId).subscribe((res) => {
      if (res) {
        this.removeCommentEditId(comment.id);
      }
    }, (err) => {
      alert('Oops.  That didn\'t work');
    });
  }

  deleteComment(comment: any) {
    this.apiSvc.deleteComment(comment.id).subscribe((res) => {
      if (res) {
        const commentIdx = this.comments.findIndex(c => c.id === comment.id);
        this.comments.splice(commentIdx, 1);
      }
    }, (err) => {
      alert('Oops.  That didn\'t work');
    });
  }

  cancelUpdate(comment: any) {
    this.removeCommentEditId(comment.id);
    const originalComment = this.originalCommentValues.find(c => c.id === comment.id);
    const commentToReset = this.comments.find(c => c.id === comment.id);
    commentToReset.name = originalComment.name;
    commentToReset.email = originalComment.email;
    commentToReset.body = originalComment.body;
  }

  private removeCommentEditId(commentId: any) {
    const commentIdx = this.commentEditIds.findIndex(cId => cId === commentId);
    this.commentEditIds.splice(commentIdx, 1);
  }
}
