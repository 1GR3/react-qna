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
  
  <div className="modal fade" id="previewModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Preview</h3>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="custom-control custom-radio">
            <input type="radio" id="McustomRadio1" name="customRadio6" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="McustomRadio1">Preview radio A</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="McustomRadio2" name="customRadio6" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="McustomRadio2">Preview radio B</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="McustomRadio3" name="customRadio6" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="McustomRadio3">Preview radio C</label>
          </div>
          <br />
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="McustomCheck1" />
            <label className="custom-control-label" htmlFor="McustomCheck1">Checkbox text</label>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-xs btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>