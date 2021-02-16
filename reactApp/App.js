import { connect } from 'react-redux'
import { getInitState } from './store/actions/AuthActions'

class App extends Component {
  componentDidMount(){
    this.props.getInitState()
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path={ process.env.PUBLIC_URL } component={ Dashboard } />
            <Route path={ process.env.PUBLIC_URL + '/dashboard' } component={ Dashboard } />
            <Route path={ process.env.PUBLIC_URL + '/project/:id' } component={ ProjectDetails } />
            <Route path={ process.env.PUBLIC_URL + '/signin' } component={ SignIn } />
            <Route path={ process.env.PUBLIC_URL + '/signup' } component={ SignUp } />
            <Route path={ process.env.PUBLIC_URL + '/create' } component={ CreateProject } />
            <Route path={ process.env.PUBLIC_URL + '/logout' } component={ Logout } />
            <Route path={ process.env.PUBLIC_URL + '/*' } component={ Dashboard } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getInitState: () => {
          dispatch(getInitState())
      }
  }
}

export default connect(null, mapDispatchToProps)(App)