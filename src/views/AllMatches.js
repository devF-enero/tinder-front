import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Layout from "../common/Layout";
import Card from "../components/Card";

const GET_MATCHES = gql`
query getMatches($id:ID!) {
    getAllMatches(id:$id) {
    _id
      name {
        first
        last
      }
      age
    }
  }
`;

function AllMatches(props) {
  return (
    <Layout>
    <div className="tinder-top">
      <div className="tinder-card">
          <img className="img-tinder" src="https://placeimg.com/600/300/people" />
          <div className="tinder-info">
          <span className="info-1">{props.}</span>
          <span className="info-2">{props.}</span>
          <span className="info-3">{props.}</span>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default AllMatches;
