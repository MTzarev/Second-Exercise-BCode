import PropTypes from 'prop-types'
function UserGreeting (props) {
// if(props.isLoggedIn){
//     return (
//         <h2>Welcome {props.username}</h2>
//     )
// }else {
//     return <h2>First you need to Login! </h2>
// }

return (
    props.isLoggedIn ? <h2 className="welcome">Welcome {props.username}</h2>
                     : <h2 className="needLogin">First you need to Login! </h2>
)

}
UserGreeting.propTypes={
isLoggedIn: PropTypes.bool,
username: PropTypes.string,
}
UserGreeting.defaultProps={
  isLoggedIn: false,
  username: "Guest"
}
export default UserGreeting