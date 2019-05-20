import React from "react";
import PropTypes from "prop-types";

export class Catalog extends React.PureComponent {
  render() {
    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        {this.props.children}

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
    );
  }
}

Catalog.propTypes = {
  children: PropTypes.node
};
