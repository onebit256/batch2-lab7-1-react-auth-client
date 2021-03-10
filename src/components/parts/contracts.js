import { Component } from 'react';

class Contracts extends Component {
    constructor(props) {    
        super(props);    
    }

    render() {
      return (


	<div className="layui-fluid">
	  <div className="layui-row layui-col-space15">
	    <div className="layui-col-md12">
	      <div className="layui-card">
	        <div className="layui-card-header">申请</div>
	        <div className="layui-card-body">
				<form
				className="formUpload"
				enctype="multipart/form-data"
				method="POST"
				action="/uploadFile"
				>
				<div className="formContainer">
					<span>Upload Profile Picture:</span>   
					<input type="file" name="mypic" required/> <br/> 
					<input type="submit" value="submit"/>  
				</div>
			</form>
	          
	      </div>
	    </div>
	  </div>
	</div>
	</div>
	);
}
}

export default Contracts;
