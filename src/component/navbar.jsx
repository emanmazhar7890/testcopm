const Navbar = (props) => {
  console.log(props);
  console.log(props.userdetail);
  return (
    <div>
      Hello i'm {props.userdetail.fullname} i'm {props.userdetail.age} year old
      i'm{props.username}
    </div>
  );
};
export default Navbar;
