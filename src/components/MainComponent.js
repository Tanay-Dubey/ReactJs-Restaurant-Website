import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import About from './AboutComponent';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Routes, Route } from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


class Main extends Component {

  constructor(props) {
    super(props);
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {

    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}></Home>
      )
    }

    const DishWithId = ({ match }) => {
      return (
        <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />

      )
    }

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage/>}></Route>
          <Route exact path="/aboutus" element={<About leaders={this.props.leaders}></About>}></Route>
          <Route exact path="/menu" element={<Menu dishes={this.props.dishes}></Menu>}></Route>
          <Route exact path="/menu/:dishId" element={<DishWithId/>}></Route>
          <Route exact path="/contactus" element={<Contact/>}></Route>
          <Route path="*" element={<HomePage/>} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);