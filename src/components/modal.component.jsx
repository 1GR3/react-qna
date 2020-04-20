  <div className="modal fade" id="readThis" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-sm" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Mark post as “I’ve read this”?</h3>
        </div>
        <div className="modal-body">
          This post is required to read before you can add a new post. Would you like to mark this post as “I’ve read this” (removes this post from reading list bin)?
        </div>
        <div className="modal-footer text-right py-2" style={{justifyContent: 'flex-end'}}>
          <button type="button" className="btn btn-xs btn-warning mr-2" data-dismiss="modal">Yes</button>
          <button type="button" className="btn btn-xs btn-outline-secondary" data-dismiss="modal">No</button>
        </div>
      </div>
    </div>
  </div>