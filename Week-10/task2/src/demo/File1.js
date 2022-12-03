import React from "react";
import { PureComponent } from "react";
class File extends React.PureComponent
{
    constructor(props)
    {
        super(props);
        this.state={
            data:null
        };
    }
     componentDidMount()
     {
        fetch(this.props.url)
        .then(resp=>{
             console.log(resp.json())
             return resp.json();
        })
        .then(data1=>{
            this.setState({data1});
        })
     }
    render(props)
    {
        return<>
        {console.log(this.props)}
          {/* {console.log(this.props.children)} */}
        {
            
        }
        </>
    }
}
export default File;