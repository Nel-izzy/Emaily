import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
class Header extends Component {
    renderContent(){
        switch(this.props.auth){
            case null:
                return
            case false :
                return <li><a  href ="/auth/google">Login with Google</a></li>
            default:
                return <li><a  href ="/api/logout">Logout</a></li>
        }
    }
    render() {
        
        return (
            <div>
                <nav>
                    <div className="nav-wrapper blue darken-1">
                      <Link style={{marginLeft:'20px'}} className="brand-logo" to = '#'>Emaily</Link>
                     <ul className='right hide-on-med-and-down'>
                        {this.renderContent()} 
                     </ul>
                    </div>
                    
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {auth:state.auth}
}


export default connect(mapStateToProps)(Header)
