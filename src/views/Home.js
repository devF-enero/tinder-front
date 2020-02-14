import React from "react";
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Layout from "../common/Layout";
import Card from "../components/Card";

const GET_EVENTS = gql`
 {
    allEvents{
      _id
      title
      created_by{
        first_name
      }
      description
    }

  }
`

function Home() {
  /*  const  { loading,data,error  } = useQuery(GET_EVENTS);
 
   if(loading) return <h1>Cargando....</h1>
   if(error) return <p>{error.message}</p> */
  return (
    <Layout>

    <div className="cards-container">
    <Card name="Andrea"
        age="20"
        description="Guapa"
        id="asd"
        key="asd"
      />
    </div>

    
      

      {/* 
              {
                data.allEvents.map(event => (
                  <Card title={event.title} 
                    author={event.created_by.first_name} 
                    description={event.description}
                    id={event._id}
                    key={event._id}
                  />
                ))
              } */}


    </Layout>
  );
}

export default Home;
