import React from "react";
import { connect } from "react-redux";
import { CollectionItem } from "components";
import { useRouteMatch } from "react-router-dom";
import "./styles.scss";
import { collectionSelector } from "midleware/shop/selectors";

const mapStateToProps = (
  state,
  {
    match: {
      params: { collectionId }
    }
  }
) => ({
  collection: collectionSelector(collectionId)(state)
});

export const CollectionComponent = ({ collection, ...rest }) => {
  console.log(rest);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2>{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
};

export const Collection = connect(mapStateToProps)(CollectionComponent);
