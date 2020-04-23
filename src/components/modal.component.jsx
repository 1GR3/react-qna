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
  
  <div className="modal fade" id="visaModal" tabIndex={-1} role="dialog" aria-labelledby="visaModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="pt-2">Visa Requirement to Work in the US</h3>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="custom-control custom-radio mb-2">
            <input type="radio" id="visaRadio1" name="visaRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="visaRadio1">
              To work in the US, I do not require sponsorship for an employment authorizing status or visa immediately, nor in the future</label>
          </div>
          <div className="pl-3">
            <div className="custom-control custom-checkbox ml-1 mb-3">
              <input type="checkbox" className="custom-control-input" id="visaCheck" />
              <label className="custom-control-label" htmlFor="visaCheck">I am a US citizen</label>
            </div>
          </div>
          <div className="custom-control custom-radio mb-2">
            <input type="radio" id="visaRadio2" name="visaRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="visaRadio2">
              To work in the US, I will require sponsorship for an employment authorizing status or visa immediately
            </label>
          </div>
          <div className="custom-control custom-radio mb-2">
            <input type="radio" id="visaRadio3" name="visaRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="visaRadio3">
              To work in the US, I will require sponsorship for an employment authorizing status or visa in the future
            </label>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary btn-xs mr-2" data-dismiss="modal">Cancel</button>
          <button type="button" className="btn btn-primary btn-xs">Save</button>
        </div>
      </div>
    </div>
  </div>
  
  <div className="modal fade" id="privateModal" tabIndex={-1} role="dialog" aria-labelledby="privateModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-sm" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="pt-2">Who can see my profile, and what can they see?</h3>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>By publishing your profile, companies that participate in Piazza Careers and other students who have opted into Piazza Careers can view and engage with your profile. Your Piazza class posts are never made visible to anyone outside your class.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-success btn-xs">ok</button>
        </div>
      </div>
    </div>
  </div>
