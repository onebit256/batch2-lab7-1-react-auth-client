import { Component } from 'react';
import ChainDataService from '../../script/ChainDataService'

class Contracts extends Component {
    constructor(props) {    
        super(props);  
		
		this.state = {      
            hash: null,
			txhash: null
        }; 
		this.submitHandler = this.submitHandler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

	submitHandler = async (event) => {
        //handle web3
		const blockRecords = await ChainDataService.storeData(this.state.hash)
		this.setState({txhash:blockRecords.transactionHash})
    }

	handleInputChange(event) {
        // this.props.history.push('/');
        const target = event.target;
        let hash;
        
        if (target.name === "hash") {
            hash = target.value;
        }
        if (typeof(hash) !== "undefined") {
            this.setState({
                hash: hash
            });
        } 
    }


    render() {
      return (


		<div className="layui-body">  
	  <div className="layui-row layui-col-space15">
	    <div className="layui-col-md12">
	      <div className="layui-card">
	        <div className="layui-card-header">申请</div>
	        <div className="layui-card-body">
			<form onSubmit={this.submitHandler}>
                    <div className="title">WEB3<br/></div>
                    <input id="hash" type="text" name="hash" placeholder="hash" 
                    onChange={this.handleInputChange}/>
                    <input type="submit" value="submit"/>
                   
                </form>
				<p>{this.state.hash}</p>
				<p>{this.state.transactionHash}</p>
	          
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
