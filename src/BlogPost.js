import React, { Component } from 'react';
// are we missing an import?
import Comment from './Comment.js'

export default class BlogPost extends Component {
  render() {
@@ -18,11 +18,9 @@ export default class BlogPost extends Component {
        Still I'll rise.<br/>
        -Maya Angelou<br/>

        {/* (remove the comment ticks and their surrounding brackets)
        <Comment commentText={comments[0]} />
        <Comment commentText={comments[0]} />
        <Comment commentText={comments[0]} />
        */}
        <Comment commentText={comments[1]} />
        <Comment commentText={comments[2]} />
      </div>
    );
  }
}
